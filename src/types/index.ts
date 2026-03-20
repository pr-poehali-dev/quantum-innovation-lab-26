import type { ReactNode } from "react"

export interface FeatureCard {
  icon: string
  title: string
  description: string
}

export interface Testimonial {
  name: string
  company: string
  text: string
}

export interface ContactInfo {
  phone: string
  email: string
  address: string
}

export interface Section {
  id: string
  title: string
  subtitle?: ReactNode
  content?: string
  showButton?: boolean
  buttonText?: string
  features?: FeatureCard[]
  testimonials?: Testimonial[]
  contacts?: ContactInfo
}

export interface SectionProps extends Section {
  isActive: boolean
}
