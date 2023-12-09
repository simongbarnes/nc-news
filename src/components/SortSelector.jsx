import getValidSortQueries from "../utils/getValidSortQueries";

export default function SortSelector({setCurrentSort}) {

  const sortOptions = getValidSortQueries();

  return (
    <>
      <form className="bg-white ml-4 pr-4 pt-2 pb-2">
        <select
          className="border-none text-black focus:border-none rounded-lg h-9 w-36 p-1 mr-2 bg-white"
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
