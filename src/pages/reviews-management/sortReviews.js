export function getSortedReviews(reviews, sortCriteria) {
  const sortedReviews = [...reviews];

  if (sortCriteria === "lh")
    return sortedReviews.sort((a, b) =>
      a.rating > b.rating ? 1 : b.rating > a.rating ? -1 : 0
    );

  if (sortCriteria === "hl")
    return sortedReviews.sort((a, b) =>
      b.rating > a.rating ? 1 : a.rating > b.rating ? -1 : 0
    );

  return sortedReviews.sort((a, b) =>
    b.date.getTime() > a.date.getTime()
      ? 1
      : a.date.getTime() > b.date.getTime()
      ? -1
      : 0
  );
}
