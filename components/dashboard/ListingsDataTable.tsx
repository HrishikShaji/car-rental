"use client"

import { ListingsPaginatedResponse } from "@/types/types"
import DropdownFilter from "../data-table/DropdownFilter"
import { pageItems, statusItems } from "@/lib/constants"
import ColumnsFilter from "../data-table/ColumnsFilter"
import SearchBar from "../data-table/SearchBar"
import DataTable from "../data-table/DataTable"
import TableInfo from "../data-table/TableInfo"
import TablePagination from "../data-table/TablePagination"
import { useListingsDataTable } from "@/hooks/listing/useListingsDataTable"


interface Props {
	initialData: ListingsPaginatedResponse
}

export default function ListingsDataTable({ initialData }: Props) {

	const {
		pagination,
		handlePageSizeChange,
		handleStatusChange,
		handleSearchChange,
		table,
		isLoading,
		error,
		columnsLength,
		totalRows,
		statusFilter
	} = useListingsDataTable({ initialData })

	const rowIndexStart = (pagination.pageIndex * pagination.pageSize) + 1
	const rowIndexEnd = Math.min((pagination.pageIndex + 1) * pagination.pageSize, totalRows)

	if (error) {
		return (
			<div className="w-full p-4">
				<div className="text-red-500 text-center">
					Error loading listings: {error}
				</div>
			</div>
		)
	}

	return (
		<div className="w-full h-full ">
			<div className="flex items-center py-4 gap-4">
				<SearchBar
					onChange={handleSearchChange}
				/>
				<DropdownFilter
					items={statusItems}
					placeholder="Filter by status"
					value={statusFilter}
					onValueChange={handleStatusChange}
				/>
				<DropdownFilter
					items={pageItems}
					placeholder="Rows per page"
					value={pagination.pageSize.toString()}
					onValueChange={handlePageSizeChange}
				/>
				<ColumnsFilter table={table} />
			</div>

			<div className="rounded-md border max-h-[60vh] overflow-y-auto">
				<div className="overflow-x-auto">
					<DataTable
						table={table}
						isLoading={isLoading}
						columnsLength={columnsLength}
						skeletonRows={pagination.pageSize}
					/>
				</div>
			</div>

			<div className="flex items-center justify-between space-x-2 py-4">
				<TableInfo
					rowIndexEnd={rowIndexEnd}
					rowIndexStart={rowIndexStart}
					totalRows={totalRows}
				/>
				<TablePagination
					table={table}
				/>
			</div>
		</div>
	)
}
