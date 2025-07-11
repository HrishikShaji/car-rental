import { Button } from "@/components/ui/button"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuShortcut,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar } from "@radix-ui/react-avatar"
import { User } from "lucide-react";
import SignOutButton from "./SignOutButton";

interface Props {
	user: {
		id: string;
		name: string;
		image: string | null;
		email: string;
		role: string;
	}
}

export default function UserInfo({ user }: Props) {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button className="text-black cursor-pointer rounded-full bg-white hover:bg-blue-500 hover:text-white"> <User /></Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56" align="end">
				<DropdownMenuLabel>My Account</DropdownMenuLabel>
				<DropdownMenuGroup>
					<DropdownMenuItem>
						{user.name}
					</DropdownMenuItem>
					<SignOutButton />
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

