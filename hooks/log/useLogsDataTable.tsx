import { LogsPaginatedResponse, LogWithListingAndUser } from "@/types/types"
import { ColumnFiltersState, getCoreRowModel, PaginationState, SortingState, useReactTable, VisibilityState } from "@tanstack/react-table"
import { useCallback, useEffect, useMemo, useState } from "react"
import { useFetchLogs } from "./useFetchLogs"
import { createLogsColumns } from "@/lib/createLogsColumns"

interface Props {
	initialData: LogsPaginatedResponse
}

const INITIAL_COLUMN_VISIBILITY = {}
const INITIAL_ROW_SELECTION = {}
const INITIAL_SORTING_STATE: SortingState = []
const INITIAL_COLUMN_FILTERS: ColumnFiltersState = []


export function useLogsDataTable({ initialData }: Props) {
	const [data, setData] = useState<LogWithListingAndUser[]>(initialData.data)
	const [totalRows, setTotalRows] = useState(initialData.pagination.total)
	const [statusFilter, setStatusFilter] = useState<string>("ALL")
	const [isInitialLoad, setIsInitialLoad] = useState(true)
	const [sorting, setSorting] = useState<SortingState>(INITIAL_SORTING_STATE)
	const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>(INITIAL_COLUMN_FILTERS)
	const [columnVisibility, setColumnVisibility] = useState<VisibilityState>(INITIAL_COLUMN_VISIBILITY)
	const [rowSelection, setRowSelection] = useState(INITIAL_ROW_SELECTION)
	const [pagination, setPagination] = useState<PaginationState>({
		pageIndex: initialData.pagination.page - 1,
		pageSize: initialData.pagination.pageSize,
	})


	const { fetchData, isLoading, error } = useFetchLogs()

	const columns = useMemo(() => createLogsColumns(), [])

	useEffect(() => {
		if (isInitialLoad) {
			setIsInitialLoad(false)
			return
		}
		const sortConfig = sorting.length > 0 ? sorting[0] : undefined

		fetchData({
			page: pagination.pageIndex + 1,
			pageSize: pagination.pageSize,
			status: statusFilter === "ALL" ? undefined : statusFilter,
			sort: sortConfig,
		}).then((result) => {
			setData(result.data)
			setTotalRows(result.pagination.total)
		})

	}, [pagination.pageIndex, pagination.pageSize, statusFilter, sorting, fetchData])

	const table = useReactTable({
		data,
		columns,
		pageCount: Math.ceil(totalRows / pagination.pageSize),
		state: {
			sorting,
			columnFilters,
			columnVisibility,
			rowSelection,
			pagination,
		},
		onSortingChange: setSorting,
		onColumnFiltersChange: setColumnFilters,
		onColumnVisibilityChange: setColumnVisibility,
		onRowSelectionChange: setRowSelection,
		onPaginationChange: setPagination,
		getCoreRowModel: getCoreRowModel(),
		manualPagination: true,
		manualSorting: true,
		manualFiltering: true,
	})

	const handleStatusChange = useCallback((value: string) => {
		setStatusFilter(value)
		setPagination(prev => ({ ...prev, pageIndex: 0 }))
	}, [])

	const handlePageSizeChange = useCallback((value: string) => {
		table.setPageSize(Number(value))
	}, [table])

	return {
		handleStatusChange,
		handlePageSizeChange,
		table,
		error,
		isLoading,
		pagination,
		columnsLength: columns.length,
		totalRows,
		statusFilter
	}

}
