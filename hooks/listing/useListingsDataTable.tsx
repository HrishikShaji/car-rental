import { ListingsPaginatedResponse, ListingWithUser } from "@/types/types"
import { ColumnFiltersState, getCoreRowModel, PaginationState, SortingState, useReactTable, VisibilityState } from "@tanstack/react-table"
import { useCallback, useEffect, useMemo, useState } from "react"
import { useFetchListings } from "./useFetchListings"
import { createListingsColumns } from "@/lib/createListingsColumns"
import { Status } from "@/app/generated/prisma"

const INITIAL_COLUMN_VISIBILITY = {}
const INITIAL_ROW_SELECTION = {}
const INITIAL_SORTING_STATE: SortingState = []
const INITIAL_COLUMN_FILTERS: ColumnFiltersState = []

interface Props {
	initialData: ListingsPaginatedResponse
}

export function useListingsDataTable({ initialData }: Props) {
	const [data, setData] = useState<ListingWithUser[]>(initialData.data)
	const [totalRows, setTotalRows] = useState(initialData.pagination.total)
	const [statusFilter, setStatusFilter] = useState<string>("ALL")
	const [debouncedSearchValue, setDebouncedSearchValue] = useState("")
	const [isInitialLoad, setIsInitialLoad] = useState(true)
	const [sorting, setSorting] = useState<SortingState>(INITIAL_SORTING_STATE)
	const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>(INITIAL_COLUMN_FILTERS)
	const [columnVisibility, setColumnVisibility] = useState<VisibilityState>(INITIAL_COLUMN_VISIBILITY)
	const [rowSelection, setRowSelection] = useState(INITIAL_ROW_SELECTION)
	const [pagination, setPagination] = useState<PaginationState>({
		pageIndex: initialData.pagination.page - 1,
		pageSize: initialData.pagination.pageSize,
	})

	const { fetchData, isLoading, error } = useFetchListings()

	const handleDeleteListing = useCallback((listingId: string) => {
		setData(prevData => prevData.filter(listing => listing.id !== listingId))
		setTotalRows(prevTotal => prevTotal - 1)
	}, [])

	const handleUpdateStatus = useCallback((status: Status, id: string) => {
		setData(prev => prev.map((listing) => {
			if (listing.id === id) {
				return {
					...listing,
					status
				}
			}
			return listing
		}))
	}, [])

	const columns = useMemo(() => createListingsColumns({
		onDelete: handleDeleteListing,
		onUpdateStatus: handleUpdateStatus,
	}), [handleDeleteListing, handleUpdateStatus])

	useEffect(() => {
		if (isInitialLoad) {
			setIsInitialLoad(false)
			return
		}
		const sortConfig = sorting.length > 0 ? sorting[0] : undefined

		fetchData({
			page: pagination.pageIndex + 1,
			pageSize: pagination.pageSize,
			search: debouncedSearchValue || undefined,
			status: statusFilter === "ALL" ? undefined : statusFilter,
			sort: sortConfig,
		}).then((result) => {
			setData(result.data)
			setTotalRows(result.pagination.total)
		})

	}, [pagination.pageIndex, pagination.pageSize, debouncedSearchValue, statusFilter, sorting, fetchData])

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

	const handleSearchChange = useCallback((value: string) => {
		setDebouncedSearchValue(value)
		setPagination(prev => ({ ...prev, pageIndex: 0 }))
	}, [])

	return {
		handleStatusChange,
		handleSearchChange,
		handlePageSizeChange,
		statusFilter,
		pagination,
		columnsLength: columns.length,
		totalRows,
		table,
		isLoading,
		error
	}

}
