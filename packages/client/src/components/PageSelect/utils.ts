export function generatePaginationButtons(params: {
  totalPages: number;
  currentPage: number;
}): Array<number | 'dots'> {
  const { totalPages, currentPage } = params;

  const maxItems = 7;
  const itemsInEdges = maxItems - 2;
  const itemsInMiddle = maxItems - 4;

  const shouldBeShortened = totalPages > maxItems;
  const isInRightPart = currentPage < itemsInEdges - 1;
  const isInLeftPart = currentPage > totalPages - itemsInEdges;

  const middlePartStartIndex = currentPage - Math.floor(itemsInMiddle / 2);
  const rightPartStartIndex = totalPages - itemsInEdges;

  if (!shouldBeShortened) {
    return new Array(totalPages).fill(0).map((_, index) => index);
  }

  if (isInRightPart) {
    return [...new Array(itemsInEdges).fill(0).map((_, index) => index), 'dots', totalPages - 1];
  }

  if (isInLeftPart) {
    return [
      0,
      'dots',
      ...new Array(itemsInEdges).fill(0).map((_, index) => rightPartStartIndex + index),
    ];
  }

  return [
    0,
    'dots',
    ...new Array(itemsInMiddle).fill(0).map((_, index) => middlePartStartIndex + index),
    'dots',
    totalPages - 1,
  ];
}
