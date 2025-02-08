import { LucideIcon } from "lucide-react";
export interface DestinationType {
  id: number;
  name: string;
  image: string;
  description: string;
  price: string;
}

export interface ServicesType {
  id: number;
  index?: number;
  name: string;
  description: string;
  icon: LucideIcon;
}
export interface GalleryType {
  title: string;
  url: string;
}
export interface TestimonialsType {
  id: number;
  name: string;
  image: string;
  text: string;
  rating: number;
}
export interface FormErrorType {
  destination?: string;
  startDate?: string;
  returnDate?: string;
  travelers?: string;
  roomType?: string;
  specialRequest?: string;
}
export interface FormType {
  destination?: string;
  startDate: string;
  returnDate?: string;
  travelers?: string;
  roomType?: string;
  specialRequest?: string;
}
