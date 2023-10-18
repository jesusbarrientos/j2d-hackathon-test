import { MapPaginatedData } from '@/resources/repositories/common/rest/types.ts'

export const mapPaginatedData: MapPaginatedData = (data, page) => {
  return {
    items      : data.results,
    totalItems : data.info.count,
    page       : page,
    totalPages : data.info.pages,
    limit      : Math.ceil(data.info.count / data.info.pages),
  }
}
