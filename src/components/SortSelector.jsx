import { useEffect, useState } from "react";

export default function SortSelector({ currentSort, setCurrentSort, currentOrder, setCurrentOrder }) {
  const sortOptions = [
    { column: "title", label: "title" },
    { column: "author", label: "author" },
    { column: "created_at", label: "date" },
    { column: "votes", label: "votes" },
    { column: "comment_count", label: "comments" },
  ];

  return (
    <>
      <form>
        <label htmlFor="selected-sort">sort by: </label>
        <select
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
          name="order"
          id="order"
          onChange={(event) => {
            setCurrentOrder(event.target.value);
          }}
        >
          <option key={"asc"} value="asc">
            ascending
          </option>
          <option key={"desc"} value="desc">
            descending
          </option>
        </select>
      </form>
    </>
  );
}
