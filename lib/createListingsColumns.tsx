import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { ListingWithUser } from "@/types/types"
import { Status } from "@/app/generated/prisma"
import { ActionsCell, DateCell, DescriptionCell, NameCell, StatusCell, UserCell } from "@/components/dashboard/ListingsTableCells"

interface Props {
	onDelete: (listingId: string) => void
	onUpdateStatus: (status: Status, id: string) => void
}

export function createListingsColumns({ onDelete, onUpdateStatus }: Props): ColumnDef<ListingWithUser>[] {
	return [
		{
			id: "select",
			header: ({ table }) => (
				<Checkbox
					checked={
						table.getIsAllPageRowsSelected() ||
						(table.getIsSomePageRowsSelected() && "indeterminate")
					}
					onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
					aria-label="Select all"
				/>
			),
			cell: ({ row }) => (
				<Checkbox
					checked={row.getIsSelected()}
					onCheckedChange={(value) => row.toggleSelected(!!value)}
					aria-label="Select row"
				/>
			),
			enableSorting: false,
			enableHiding: false,
		},
		{
			accessorKey: "name",
			header: "Name",
			cell: ({ row }) => {
				const name = row.getValue("name") as string
				return <NameCell name={name} />
			},
		},
		{
			accessorKey: "status",
			header: "Status",
			cell: ({ row }) => {
				const status = row.getValue("status") as string
				return <StatusCell status={status} />
			},
		},
		{
			accessorKey: "user",
			header: "User",
			cell: ({ row }) => {
				const user = row.getValue("user") as ListingWithUser["user"]
				return <UserCell user={user} />
			},
			enableSorting: false
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
		{
			id: "actions",
			header: "Actions",
			enableHiding: false,
			cell: ({ row }) => {
				const listing = row.original
				return (
					<ActionsCell
						listing={listing}
						onDelete={onDelete}
						onUpdateStatus={onUpdateStatus}
					/>
				)
			},
		},
	]
}
