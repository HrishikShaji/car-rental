import { Prisma } from "@/app/generated/prisma";

export type ListingWithUser = Prisma.ListingGetPayload<{
  include: { user: true }
}>

export type LogWithListingAndUser = Prisma.LogGetPayload<{
  include: { user: true, listing: { include: { user: true } } }
}>

export interface LogsPaginatedResponse {
  data: LogWithListingAndUser[]
  pagination: {
    page: number
    pageSize: number
    total: number
    totalPages: number
  }
}

export interface ListingsPaginatedResponse {
  data: ListingWithUser[]
  pagination: {
    page: number
    pageSize: number
    total: number
    totalPages: number
  }
}
