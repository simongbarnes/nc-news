import getValidSortQueries from "../utils/getValidSortQueries";

export default function SortSelector({setCurrentSort}) {

  const sortOptions = getValidSortQueries();

  return (
    <>
      <form className="ml-4 pt-2 pb-2">
        <select
          className="border-none focus:border-none rounded-lg h-9 w-36 p-1 mr-2 bg-white dark:bg-gray-900"
          name="sort"
          id="sort"
          onChange={(event) => {
            setCurrentSort(event.target.value);
          }}
        >
          {sortOptions.map((sortOption) => {
            return (
              <option key={sortOption.label} value={sortOption.label}>
                {sortOption.label}
              </option>
            );
          })}
        </select>
      </form>
    </>
  );
}
