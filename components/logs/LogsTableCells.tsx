import { formatDate, getStatusColor } from "@/lib/utils"
import { ListingWithUser } from "@/types/types"
import { Calendar } from "lucide-react"
import { memo } from "react"


export const NameCell = memo(({ name }: { name: string }) => (
	<div className="font-medium h-14 flex items-center">{name}</div>
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

NameCell.displayName = "NameCell"
DateCell.displayName = "DateCell"
UserCell.displayName = "UserCell"
StatusCell.displayName = "StatusCell"
