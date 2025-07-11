import { BASE_URL } from "@/lib/variables"
import { LogsPaginatedResponse } from "@/types/types"

export const fetchLogs = async (params: {
  page: number
  pageSize: number
  status?: string
  sortBy?: string
  sortOrder?: 'asc' | 'desc'
}): Promise<LogsPaginatedResponse> => {
  const searchParams = new URLSearchParams({
    page: params.page.toString(),
    pageSize: params.pageSize.toString(),
    ...(params.status && params.status !== "ALL" && { status: params.status }),
    ...(params.sortBy && { sortBy: params.sortBy, sortOrder: params.sortOrder || 'asc' }),
  })

  const response = await fetch(`${BASE_URL}/api/logs?${searchParams}`, { cache: 'no-store' })
  if (!response.ok) {
    throw new Error('Failed to fetch logs')
  }

  return response.json()
}
