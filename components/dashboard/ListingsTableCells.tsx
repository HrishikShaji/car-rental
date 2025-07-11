import { formatDate, getStatusColor } from "@/lib/utils"
import { ListingWithUser } from "@/types/types"
import { Calendar, MoreHorizontal } from "lucide-react"
import { memo } from "react"
import { Button } from "@/components/ui/button"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import DeleteListingButton from "@/components/dashboard/DeleteListingButton"
import UpdateListingStatusButton from "@/components/dashboard/UpdateListingStatusButton"
import Link from "next/link"
import { Status } from "@/app/generated/prisma"

export const NameCell = memo(({ name }: { name: string }) => (
	<div className="font-medium h-14 flex items-center">{name}</div>
))

export const DescriptionCell = memo(({ description }: { description: string }) => (
	<div className="max-w-[200px] truncate">{description}</div>
))

export const StatusCell = memo(({ status }: { status: string }) => (
	<span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(status)}`}>
		{status}
	</span>
))

export const UserCell = memo(({ user }: { user: ListingWithUser["user"] }) => (
	<div>
		<div className="font-medium">{user.name}</div>
		<div className="text-sm text-gray-500">{user.email}</div>
	</div>
))

export const DateCell = memo(({ date }: { date: string }) => (
	<div className="flex items-center">
		<Calendar className="mr-2 h-4 w-4 text-gray-400" />
		{formatDate(date)}
	</div>
))

interface ActionsCallProps {
	listing: ListingWithUser
	onDelete: (listingId: string) => void
	onUpdateStatus: (status: Status, id: string) => void
}

export const ActionsCell = memo(({ listing, onDelete, onUpdateStatus }: ActionsCallProps) => (
	<div className="flex gap-2">
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" className="h-8 w-8 p-0">
					<span className="sr-only">Open menu</span>
					<MoreHorizontal className="h-4 w-4" />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuItem className="text-green-500" >
					<UpdateListingStatusButton
						listingId={listing.id}
						onUpdate={onUpdateStatus}
						buttonText="Approve"
						status="APPROVED"
					/>
				</DropdownMenuItem>
				<DropdownMenuItem className="text-yellow-500" >
					<UpdateListingStatusButton
						listingId={listing.id}
						onUpdate={onUpdateStatus}
						buttonText="Reject"
						status="REJECTED"
					/>
				</DropdownMenuItem>
				<DropdownMenuItem className="text-red-600" >
					<DeleteListingButton
						onDelete={onDelete}
						listingId={listing.id}
					/>
				</DropdownMenuItem>
				<DropdownMenuItem className="text-blue-500">
					<Link
						href={`/listings/view/${listing.id}`}
					>
						View Listing
					</Link>
				</DropdownMenuItem>
				<DropdownMenuItem className="text-blue-500">
					<Link href={`/listings/edit/${listing.id}`}>
						Edit Listing
					</Link>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	</div>
))


ActionsCell.displayName = "ActionsCell"
DateCell.displayName = "DateCell"
UserCell.displayName = "UserCell"
StatusCell.displayName = "StatusCell"
DescriptionCell.displayName = "DescriptionCell"
NameCell.displayName = "NameCell"
