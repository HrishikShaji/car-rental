'use client'

import { Calendar, Car, Home, Inbox, Logs, Search, Settings } from "lucide-react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar"

const items = [
	{
		title: "Listings",
		url: "/dashboard",
		icon: Car,
	},
	{
		title: "Logs",
		url: "/dashboard/logs",
		icon: Logs,
	},
]

export function AppSidebar() {
	const pathname = usePathname()

	return (
		<Sidebar className="pt-[70px]">
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupContent>
						<SidebarMenu>
							{items.map((item) => {
								const isActive = pathname === item.url
								return (
									<SidebarMenuItem key={item.title}>
										<SidebarMenuButton asChild>
											<Link
												href={item.url}
												className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${isActive
													? 'bg-blue-100 text-blue-700 font-medium'
													: 'text-gray-700 hover:bg-gray-100'
													}`}
											>
												<item.icon className={isActive ? 'text-blue-700' : 'text-gray-500'} />
												<span>{item.title}</span>
											</Link>
										</SidebarMenuButton>
									</SidebarMenuItem>
								)
							})}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	)
}
