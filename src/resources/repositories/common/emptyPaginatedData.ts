import { PaginatedData } from '@/resources/repositories/common/types.ts'

export const emptyPaginatedData: PaginatedData<unknown> = {
  items      : [],
  totalItems : 0,
  page       : 1,
  totalPages : 1,
  limit      : 1,
}
