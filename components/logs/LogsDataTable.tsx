"use client"

import { LogsPaginatedResponse } from "@/types/types"
import DropdownFilter from "../data-table/DropdownFilter"
import { pageItems, statusItems } from "@/lib/constants"
import ColumnsFilter from "../data-table/ColumnsFilter"
import DataTable from "../data-table/DataTable"
import TableInfo from "../data-table/TableInfo"
import TablePagination from "../data-table/TablePagination"
import { useLogsDataTable } from "@/hooks/log/useLogsDataTable"

interface Props {
	initialData: LogsPaginatedResponse
}


export default function LogsDataTable({ initialData }: Props) {

	const {
		table,
		error,
		isLoading,
		pagination,
		handlePageSizeChange,
		handleStatusChange,
		totalRows,
		columnsLength,
		statusFilter
	} = useLogsDataTable({ initialData })

	const rowIndexStart = (pagination.pageIndex * pagination.pageSize) + 1
	const rowIndexEnd = Math.min((pagination.pageIndex + 1) * pagination.pageSize, totalRows)

	if (error) {
		return (
			<div className="w-full p-4">
				<div className="text-red-500 text-center">
					Error loading logs: {error}
				</div>
			</div>
		)
	}


	return (
		<div className="w-full">
			<div className="flex items-center py-4 gap-4">
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
