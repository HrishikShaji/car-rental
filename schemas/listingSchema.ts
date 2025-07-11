import { z } from "zod"

export const listingSchema = z.object({
  name: z
    .string()
    .min(1, 'Name is required')
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters'),
  companyName: z
    .string()
    .min(1, 'Company name is required')
    .min(2, 'Company name must be at least 2 characters')
    .max(100, 'Company name must be less than 100 characters'),
  jobTitle: z
    .string()
    .min(1, 'Job title is required')
    .min(2, 'Job title must be at least 2 characters')
    .max(100, 'Job title must be less than 100 characters'),
  fleetSize: z
    .string()
    .min(1, 'Fleet size is required')
    .regex(/^\d+$/, 'Fleet size must be a valid number'),
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address')
    .toLowerCase(),
  country: z
    .string()
    .min(1, 'Country is required')
    .min(2, 'Country must be at least 2 characters')
    .max(50, 'Country must be less than 50 characters'),
  city: z
    .string()
    .min(1, 'City is required')
    .min(2, 'City must be at least 2 characters')
    .max(50, 'City must be less than 50 characters'),
})

export type ListingFormData = z.infer<typeof listingSchema>

export const listingDefaultValues = {
  name: "",
  companyName: '',
  jobTitle: '',
  fleetSize: '',
  email: '',
  country: '',
  city: '',
}

export interface ListingFormType {
  id: string;
  name: string;
  companyName: string;
  jobTitle: string;
  fleetSize: string;
  email: string;
  country: string;
  city: string
}
