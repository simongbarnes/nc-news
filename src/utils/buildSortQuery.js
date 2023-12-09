import getValidSortQueries from "./getValidSortQueries";

export default function buildSortQueryParms(sortLabel) {
    
  const validSortQueries = getValidSortQueries(sortLabel);

  const matchedSortQuery = validSortQueries.filter((sortQuery) => {
    return sortQuery.label === sortLabel;
  });

  if (matchedSortQuery.length > 0) {
    return {
      column: matchedSortQuery[0].column,
      order: matchedSortQuery[0].order,
    };
  }

  return {};
}
