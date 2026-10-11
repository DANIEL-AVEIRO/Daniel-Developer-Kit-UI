import { Package, Receipt, ShoppingBag, Truck } from 'lucide-react'
import { useState } from 'react'
import { orders, products } from './sampleData.js'

const tabs = ['orders', 'products']

const EcommerceDashboard = () => {
  const [tab, setTab] = useState('orders')

  return (
    <div className="min-h-[40rem] bg-stone-100 dark:bg-stone-950">
      <div className="mx-auto max-w-6xl px-4 py-4">
        <header className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-stone-200 bg-white px-4 py-3 dark:border-stone-800 dark:bg-stone-900">
          <div className="flex items-center gap-2">
            <ShoppingBag className="size-5 text-teal-800 dark:text-teal-400" aria-hidden="true" />
            <div>
              <h1 className="text-lg font-semibold">Store dashboard</h1>
              <p className="text-xs text-stone-500">Sample inventory and orders</p>
            </div>
          </div>
          <div className="flex gap-2 text-xs">
            {[
              [Package, 'Inventory'],
              [Truck, 'Fulfillment'],
              [Receipt, 'Payouts'],
            ].map(([Icon, label]) => (
              <span key={label} className="inline-flex items-center gap-1 rounded-md bg-stone-100 px-2 py-1 dark:bg-stone-800">
                <Icon className="size-3.5" aria-hidden="true" />
                {label}
              </span>
            ))}
          </div>
        </header>
        <div className="mt-4 flex gap-2" role="tablist" aria-label="Store sections">
          {tabs.map((item) => (
            <button key={item} type="button" role="tab" aria-selected={tab === item} onClick={() => setTab(item)} className={`rounded-md px-3 py-1.5 text-sm capitalize ${tab === item ? 'bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-950' : 'bg-white dark:bg-stone-900'}`}>
              {item}
            </button>
          ))}
        </div>
        <section className="mt-4 overflow-x-auto rounded-xl border border-stone-200 bg-white dark:border-stone-800 dark:bg-stone-900">
          {tab === 'orders' ? (
            <table className="w-full min-w-[30rem] text-left text-sm">
              <thead className="text-stone-500">
                <tr>
                  <th className="px-3 py-2 font-medium">Order</th>
                  <th className="px-3 py-2 font-medium">Customer</th>
                  <th className="px-3 py-2 font-medium">Total</th>
                  <th className="px-3 py-2 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id} className="border-t border-stone-200 dark:border-stone-800">
                    <td className="px-3 py-2 font-mono text-xs">{order.id}</td>
                    <td className="px-3 py-2">{order.customer}</td>
                    <td className="px-3 py-2">{order.total}</td>
                    <td className="px-3 py-2">{order.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <table className="w-full min-w-[30rem] text-left text-sm">
              <thead className="text-stone-500">
                <tr>
                  <th className="px-3 py-2 font-medium">Product</th>
                  <th className="px-3 py-2 font-medium">Stock</th>
                  <th className="px-3 py-2 font-medium">Price</th>
                  <th className="px-3 py-2 font-medium">Sales</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id} className="border-t border-stone-200 dark:border-stone-800">
                    <td className="px-3 py-2">{product.name}</td>
                    <td className="px-3 py-2">{product.stock}</td>
                    <td className="px-3 py-2">{product.price}</td>
                    <td className="px-3 py-2">{product.sales}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </section>
      </div>
    </div>
  )
}

export default EcommerceDashboard
