export function pageNumberToOffsetLimit(params: { page: number; pageSize: number }) {
  return {
    offset: params.page * params.pageSize,
    limit: params.pageSize,
  };
}

export function offsetToPaginationParams(params: { offset: number; pageSize: number }) {
  return Math.ceil(params.offset / params.pageSize);
}

export function totalItemsToTotalPages(params: { totalItems: number; pageSize: number }) {
  return Math.ceil(params.totalItems / params.pageSize);
}
