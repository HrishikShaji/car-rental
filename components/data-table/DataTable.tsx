import { flexRender, Table } from "@tanstack/react-table"
import { cn } from "@/lib/utils"
import { Skeleton } from "@/components/ui/skeleton"
import {
	Table as ShadcnTable,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table"

interface Props<T> {
	table: Table<T>
	isLoading: boolean
	columnsLength: number
	skeletonRows?: number
}

export default function DataTable<T>({
	columnsLength,
	table,
	isLoading,
	skeletonRows = 5
}: Props<T>) {
	return (
		<div className="rounded-md border">
			<ShadcnTable>
				<TableHeader>
					{table.getHeaderGroups().map((headerGroup) => (
						<TableRow key={headerGroup.id}>
							{headerGroup.headers.map((header) => {
								return (
									<TableHead
										key={header.id}
										className="font-medium"
									>
										{header.isPlaceholder
											? null
											: flexRender(
												header.column.columnDef.header,
												header.getContext()
											)}
									</TableHead>
								)
							})}
						</TableRow>
					))}
				</TableHeader>
				<TableBody>
					{isLoading ? (
						Array.from({ length: skeletonRows }).map((_, i) => (
							<TableRow key={i}>
								{Array.from({ length: columnsLength }).map((_, index) => (
									<TableCell key={index} className="">
										<Skeleton className="h-10 w-full" />
									</TableCell>
								))}
							</TableRow>
						))
					) : table.getRowModel().rows?.length ? (
						table.getRowModel().rows.map((row) => (
							<TableRow
								key={row.id}
								className={cn(
									"transition-colors hover:bg-muted/50",
									row.getIsSelected() && "bg-muted"
								)}
							>
								{row.getVisibleCells().map((cell) => (
									<TableCell key={cell.id} className="py-0">
										{flexRender(
											cell.column.columnDef.cell,
											cell.getContext()
										)}
									</TableCell>
								))}
							</TableRow>
						))
					) : (
						<TableRow>
							<TableCell
								colSpan={columnsLength}
								className="h-24 text-center text-muted-foreground"
							>
								No results found.
							</TableCell>
						</TableRow>
					)}
				</TableBody>
			</ShadcnTable>
		</div>
	)
}
