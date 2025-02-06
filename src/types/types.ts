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
