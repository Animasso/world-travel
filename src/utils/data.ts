import {
  DestinationType,
  GalleryType,
  ServicesType,
  TestimonialsType,
} from "../types/types";
import SeychellesImage from "../assets/seychelle.jpg";
import MaldivesImage from "../assets/maldive.jpg";
import NewYorkImage from "../assets/new-york.jpg";
import DubaiImage from "../assets/dubai.jpg";
import BaliImage from "../assets/bali.jpg";
import Beach from "../assets/plage privé.jpeg";
import Restaurant from "../assets/reastaurant.png";
import Suits from "../assets/suite presidentielle.jpg";
import Forest from "../assets/verdure.jpg";
import Villa from "../assets/villa piscine.jpg";
import Night from "../assets/night-club.jfif";
import Alex from "../assets/alexander-hipp.jpg";
import Courtney from "../assets/courtney-cook.jpg";
import Mimi from "../assets/michael-dam.jpg";
import {
  Hotel,
  Bus,
  Mountain,
  Utensils,
  ShieldCheck,
  User,
} from "lucide-react";

export const destinationsData: DestinationType[] = [
  {
    id: 1,
    name: "Dubai",
    image: DubaiImage,
    description:
      "A luxurious city with iconic skyscrapers, desert adventures, and world-class shopping.",
    price: "Starting from $500",
  },
  {
    id: 2,
    name: "Seychelles",
    image: SeychellesImage,
    description:
      "A tropical paradise with crystal-clear waters, white sandy beaches, and exotic wildlife.",
    price: "Starting from $700",
  },
  {
    id: 3,
    name: "New York",
    image: NewYorkImage,
    description:
      "The city that never sleeps, offering Broadway shows, skyscrapers, and diverse culture.",
    price: "Starting from $400",
  },
  {
    id: 4,
    name: "Bali",
    image: BaliImage,
    description:
      "A dream destination with lush rice terraces, beautiful temples, and breathtaking beaches.",
    price: "Starting from $350",
  },
  {
    id: 5,
    name: "Maldive",
    image: MaldivesImage,
    description: "A tropical place with fantastic villas",
    price: "Starting from $600",
  },
];

export const servicesData: ServicesType[] = [
  {
    id: 1,
    name: "Accommodation",
    description: "Stay comfortably in luxury properties.",
    icon: Hotel,
  },
  {
    id: 2,
    name: "Transportation",
    description: "Efficiently navigate through various transportation options.",
    icon: Bus,
  },
  {
    id: 3,
    name: "Activities",
    description:
      "Discover unique and exciting activities in your chosen destination.",
    icon: Mountain,
  },
  {
    id: 4,
    name: "Food & Drink",
    description:
      "Experience the best local food and drink options in your chosen destination.",
    icon: Utensils,
  },
  {
    id: 5,
    name: "Travel Insurance",
    description:
      "Ensure a safe journey with comprehensive travel insurance coverage.",
    icon: ShieldCheck,
  },
  {
    id: 6,
    name: "Tour Guides",
    description:
      "Explore destinations with expert tour guides for an enriching experience.",
    icon: User,
  },
];

export const galleryData: GalleryType[] = [
  {
    title: "Private beach",
    url: Beach,
  },
  {
    title: "Star Restaurants",
    url: Restaurant,
  },
  {
    title: "Presidensial Suits",
    url: Suits,
  },
  {
    title: "Green Escape",
    url: Forest,
  },
  {
    title: "Villa with superb pool",
    url: Villa,
  },
  {
    title: "Parternership with the best night-club",
    url: Night,
  },
];
export const TestimonialsData: TestimonialsType[] = [
  {
    id: 1,
    name: "Alexander Hip",
    image: Alex,
    text: "I absolutely loved my trip to Dubai! The city is incredible and the people are so friendly.",
    rating: 5,
  },
  {
    id: 2,
    name: "Courtney Smith",
    image: Courtney,
    text: "My husband and I absolutely flew away to Bali! The culture and food are amazing.",
    rating: 5,
  },
  {
    id: 3,
    name: "Mimi Johnson",
    image: Mimi,
    text: "We were thrilled to visit Maldives! The beaches and temples are simply breathtaking.",
    rating: 5,
  },
];
