export interface PaginatedData<T> {
    items: T[];
    totalItems: number;
    page?: number | undefined;
    totalPages: number;
    limit: number;
}
