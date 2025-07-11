import { fetchLogs } from "@/services/fetchLogs"
import { useCallback, useState } from "react"

interface FetchDataParams {
	page: number
	pageSize: number
	status?: string
	sort?: { id: string; desc: boolean }
}

export function useFetchLogs() {
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState<string | null>(null)
	const fetchData = useCallback(async (params: FetchDataParams) => {
		setIsLoading(true)
		setError(null)

		try {
			const result = await fetchLogs({
				page: params.page,
				pageSize: params.pageSize,
				status: params.status,
				...(params.sort && {
					sortBy: params.sort.id,
					sortOrder: params.sort.desc ? 'desc' : 'asc'
				}),
			})

			return result
		} catch (err) {
			const errorMessage = err instanceof Error ? err.message : 'Failed to fetch logs'
			setError(errorMessage)
			console.error('Error fetching logs:', err)
			throw err
		} finally {
			setIsLoading(false)
		}
	}, [])

	return { fetchData, isLoading, error }
}
