import { useState } from "react";
import SearchField from './SearchField.jsx';

const courses = [
  "Interface systems",
  "Data structures",
  "Writing for software",
  "Studio practice",
];

const SearchFieldPreview = () => {
  const [submitted, setSubmitted] = useState("");
  const matches = courses.filter((course) =>
    course.toLowerCase().includes(submitted.toLowerCase()),
  );

  return (
    <div className="max-w-md space-y-3">
      <SearchField
        id="course-search"
        label="Find a course"
        placeholder="Try “studio”"
        onSearch={setSubmitted}
      />
      {submitted ? (
        <ul className="rounded-md border border-stone-200 text-sm dark:border-stone-800">
          {matches.length === 0 ? (
            <li className="px-3 py-2 text-stone-500">
              No courses match “{submitted}”.
            </li>
          ) : (
            matches.map((course) => (
              <li
                key={course}
                className="border-b border-stone-200 px-3 py-2 last:border-0 dark:border-stone-800"
              >
                {course}
              </li>
            ))
          )}
        </ul>
      ) : (
        <p className="text-sm text-stone-500">
          Submit a search to filter the sample list.
        </p>
      )}
    </div>
  );
}

export default SearchFieldPreview
