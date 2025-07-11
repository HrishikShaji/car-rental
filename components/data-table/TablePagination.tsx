import { Table } from "@tanstack/react-table";
import { Button } from "../ui/button";

interface Props<T> {
	table: Table<T>;
}

export default function TablePagination<T>({ table }: Props<T>) {
	return (
		<div className="space-x-2">
			<Button
				variant="outline"
				size="sm"
				onClick={() => table.previousPage()}
				disabled={!table.getCanPreviousPage()}
			>
				Previous
			</Button>
			<Button
				variant="outline"
				size="sm"
				onClick={() => table.nextPage()}
				disabled={!table.getCanNextPage()}
			>
				Next
			</Button>
		</div>
	)
}
