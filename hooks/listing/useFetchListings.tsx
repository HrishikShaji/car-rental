import { useCallback, useState } from "react"
import { ListingsPaginatedResponse } from "@/types/types"
import { fetchListings } from "@/services/fetchListings"

interface FetchListingsParams {
	page: number
	pageSize: number
	search?: string
	status?: string
	sort?: { id: string; desc: boolean }
}

export function useFetchListings() {
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState<string | null>(null)

	const fetchData = useCallback(async (params: FetchListingsParams): Promise<ListingsPaginatedResponse> => {
		setIsLoading(true)
		setError(null)

		try {

			const result = await fetchListings({
				page: params.page,
				pageSize: params.pageSize,
				search: params.search,
				status: params.status,
				...(params.sort && {
					sortBy: params.sort.id,
					sortOrder: params.sort.desc ? 'desc' : 'asc'
				}),
			})

			return result
		} catch (err) {
			const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred'
			setError(errorMessage)
			throw err
		} finally {
			setIsLoading(false)
		}
	}, [])

	return { fetchData, isLoading, error }
}
