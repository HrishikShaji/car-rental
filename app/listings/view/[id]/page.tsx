import { formatDate, getStatusColor } from '@/lib/utils';
import { fetchListing } from '@/services/fetchListing';

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
	const { id } = await params
	const listing = await fetchListing(id);

	return (
		<div className="flex justify-center items-center h-full w-full">
			<div className="max-w-4xl mx-auto">
				<div className="flex justify-between items-start mb-6">
					<div>
						<h1 className="text-3xl font-bold mb-2">{listing.name}</h1>
						<p className="text-gray-600">
							{`Created by ${listing.user.name} on ${formatDate(listing.createdAt as any)}`}
						</p>
					</div>
				</div>

				<div className="bg-white border rounded-lg p-6 mb-6">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div>
							<p className="text-sm text-gray-500">Name</p>
							<p className="font-medium mb-3">{listing.name}</p>
						</div>
						<div>
							<p className="text-sm text-gray-500">Email</p>
							<p className="font-medium mb-3">{listing.email}</p>
						</div>
						<div>
							<p className="text-sm text-gray-500">Job Title</p>
							<p className="font-medium mb-3">{listing.jobTitle}</p>
						</div>
						<div>
							<p className="text-sm text-gray-500">Location</p>
							<p className="font-medium mb-3">{listing.city}, {listing.country}</p>
						</div>
						<div>
							<p className="text-sm text-gray-500">Company Name</p>
							<p className="font-medium mb-3">{listing.companyName}</p>
						</div>
						<div>
							<p className="text-sm text-gray-500">Fleet Size</p>
							<p className="font-medium mb-3">{listing.fleetSize} vehicles</p>
						</div>
						<div>
							<p className="text-sm text-gray-500">Status</p>
							<span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(listing.status)}`}>
								{listing.status}
							</span>
						</div>
						<div>
							<p className="text-sm text-gray-500">Created</p>
							<p className="font-medium">{formatDate(listing.createdAt as any)}</p>
						</div>
					</div>

				</div>

			</div>
		</div>
	);
}
