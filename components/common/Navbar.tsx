import { auth } from "@/auth";
import Link from "next/link";
import UserInfo from "./UserInfo";

export default async function Navbar() {
	const user = await auth()
	return (
		<div className="w-full fixed top-0 h-[70px]  items-center z-20 bg-white shadow-sm flex justify-between p-5">
			<Link href="/" className="font-medium text-xl text-blue-600">Car Rental Company</Link>
			<div className="flex gap-3 items-center">

				{user?.user.role === "ADMIN" ?
					<Link href="/dashboard" className="text-blue-600 hover:text-blue-800">Dashboard</Link>
					: user?.user.role === "USER" ?
						<Link href="/listings/new" className="text-blue-600 hover:text-blue-800">List your Cars</Link>
						: null}
				{user ?
					<UserInfo user={user.user} /> :
					<Link href="/auth/signin" className="text-blue-600 hover:text-blue-800">Sign in</Link>
				}
			</div>
		</div>
	)
}
