import { DateCell, NameCell, StatusCell, UserCell } from "@/components/logs/LogsTableCells"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { LogWithListingAndUser } from "@/types/types"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"

export const createLogsColumns = (): ColumnDef<LogWithListingAndUser>[] => [
	{
		accessorKey: "listing.name",
		header: "Listing",
		cell: ({ row }) => {
			const name = row.original.listing.name
			return <NameCell name={name} />
		},
	},
	{
		accessorKey: "status",
		header: "Action",
		cell: ({ row }) => {
			const status = row.getValue("status") as string
			return <StatusCell status={status} />
		},
	},
	{
		accessorKey: "user.name",
		header: "Admin",
		cell: ({ row }) => {
			const admin = row.original.user
			return <UserCell user={admin} />
		},
	},
	{
		accessorKey: "user",
		header: "User",
		cell: ({ row }) => {
			const user = row.original.listing.user
			return <UserCell user={user} />
		},
	},
	{
		accessorKey: "createdAt",
		header: ({ column }) => (
			<Button
				variant="ghost"
				onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
			>
				Created
				<ArrowUpDown className="ml-2 h-4 w-4" />
			</Button>
		),
		cell: ({ row }) => {
			const date = row.getValue("createdAt") as string
			return <DateCell date={date} />
		},
	},
]
