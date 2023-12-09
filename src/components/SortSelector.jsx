import getValidSortQueries from "../utils/getValidSortQueries";

export default function SortSelector({setCurrentSort}) {

  const sortOptions = getValidSortQueries();

  return (
    <>
      <form className="text-right bg-white ml-4 pr-4 pt-2 pb-2">
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
