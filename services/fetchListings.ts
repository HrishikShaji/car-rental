import { BASE_URL } from "@/lib/variables"
import { ListingsPaginatedResponse } from "@/types/types"

export const fetchListings = async (params: {
  page: number
  pageSize: number
  search?: string
  status?: string
  sortBy?: string
  sortOrder?: 'asc' | 'desc'
}): Promise<ListingsPaginatedResponse> => {
  const searchParams = new URLSearchParams({
    page: params.page.toString(),
    pageSize: params.pageSize.toString(),
    ...(params.search && { search: params.search }),
    ...(params.status && params.status !== "ALL" && { status: params.status }),
    ...(params.sortBy && { sortBy: params.sortBy, sortOrder: params.sortOrder || 'asc' }),
  })

  const response = await fetch(`${BASE_URL}/api/listings?${searchParams}`, {
    cache: 'no-store',
  })
  if (!response.ok) {
    throw new Error('Failed to fetch listings')
  }

  return response.json()
}
