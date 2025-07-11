'use client'

import { signOut } from 'next-auth/react'
import { DropdownMenuItem } from '../ui/dropdown-menu'

export default function SignOutButton() {
	const handleSignOut = async () => {
		await signOut({
			callbackUrl: '/',
			redirect: true
		})
	}

	return (
		<DropdownMenuItem
			variant='destructive'
			className=' cursor-pointer'
			onClick={handleSignOut}
		>
			Sign Out
		</DropdownMenuItem>
	)
}
