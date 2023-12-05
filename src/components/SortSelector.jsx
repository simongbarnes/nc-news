import { useEffect, useState } from "react";

export default function SortSelector({
  currentSort,
  setCurrentSort,
  currentOrder,
  setCurrentOrder,
}) {
  const sortOptions = [
    { column: "created_at", label: "date" },
    { column: "title", label: "title" },
    { column: "author", label: "author" },
    { column: "votes", label: "votes" },
    { column: "comment_count", label: "comments" },
  ];

  return (
    <>
      <form className="sm:text-center md:text-right bg-white ml-4 pr-4 pt-2 pb-2">
        <label htmlFor="selected-sort" className="text-black mr-2">
          sort by:
        </label>
        <select
          className="rounded-lg h-9 w-28 p-1 mr-2 bg-grey-800"
          name="sort"
          id="sort"
          onChange={(event) => {
            setCurrentSort(event.target.value);
          }}
        >
          {sortOptions.map((sortOption) => {
            return (
              <option key={sortOption.column} value={sortOption.column}>
                {sortOption.label}
              </option>
            );
          })}
        </select>
        <select
          className="rounded-lg h-9 w-32 p-1 bg-grey-800"
          name="order"
          id="order"
          onChange={(event) => {
            setCurrentOrder(event.target.value);
          }}
        >
          <option key={"desc"} value="desc">
            descending
          </option>
          <option key={"asc"} value="asc">
            ascending
          </option>
        </select>
      </form>
    </>
  );
}
