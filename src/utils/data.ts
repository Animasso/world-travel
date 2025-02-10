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
      "Dubai, a dazzling oasis in the Middle East, is renowned for its breathtaking skyline, luxurious lifestyle, and adventurous desert experiences. From the towering Burj Khalifa, the world's tallest building, to the opulent shopping malls like The Dubai Mall, the city is a haven for travelers seeking both modern extravagance and cultural depth. Wander through the historic Al Fahidi district, take a sunset cruise in Dubai Marina, or embark on an unforgettable desert safari. Whether you’re looking for relaxation on Jumeirah Beach, thrilling rides at Atlantis Water Park, or fine dining in Michelin-starred restaurants, Dubai is a city that promises unparalleled experiences.",
    price: "Starting from $500",
  },
  {
    id: 2,
    name: "Seychelles",
    image: SeychellesImage,
    description:
      "Nestled in the heart of the Indian Ocean, Seychelles is a paradise of unspoiled beaches, crystal-clear waters, and lush tropical forests. With 115 breathtaking islands, this archipelago offers pristine nature reserves, vibrant coral reefs, and an abundance of exotic wildlife, including the rare giant Aldabra tortoise. Visit the picturesque beaches of Anse Lazio and Anse Source d'Argent, explore the enchanting Vallée de Mai—a UNESCO World Heritage site—or dive into the turquoise waters to discover a world of marine biodiversity. Whether you're seeking a romantic getaway, an adventurous hiking experience, or ultimate relaxation, Seychelles provides an idyllic escape from reality.",
    price: "Starting from $700",
  },
  {
    id: 3,
    name: "New York",
    image: NewYorkImage,
    description:
      "New York City, the pulsating heart of the world, is a melting pot of culture, innovation, and history. From the towering skyscrapers of Manhattan to the artistic streets of Brooklyn, the city offers an endless array of experiences. Walk through Central Park, admire the dazzling lights of Times Square, or explore the legendary Museum of Modern Art (MoMA) and The Metropolitan Museum of Art. Take a ferry to the Statue of Liberty, indulge in world-class cuisine from street vendors to Michelin-starred restaurants, or experience the energy of a Broadway show. Whether you're looking for history, nightlife, or iconic landmarks, New York City is a destination that never sleeps.",
    price: "Starting from $400",
  },
  {
    id: 4,
    name: "Bali",
    image: BaliImage,
    description:
      "Bali, known as the 'Island of the Gods,' is a breathtaking destination offering stunning natural landscapes, spiritual serenity, and a vibrant local culture. Surrounded by lush green rice terraces, mystical temples, and some of the world's most beautiful beaches, Bali is perfect for travelers seeking both relaxation and adventure. Visit the iconic Uluwatu Temple perched on a cliff, explore the sacred Monkey Forest in Ubud, or unwind in the tranquil waters of Nusa Penida. Whether you're surfing the waves of Kuta, indulging in traditional Balinese cuisine, or experiencing rejuvenating yoga retreats, Bali offers an enchanting blend of nature, culture, and tranquility.",
    price: "Starting from $350",
  },
  {
    id: 5,
    name: "Maldives",
    image: MaldivesImage,
    description:
      "The Maldives is an unrivaled tropical paradise, famous for its pristine white-sand beaches, overwater bungalows, and crystal-clear turquoise waters. Consisting of over 1,000 coral islands, this breathtaking destination offers the ultimate escape into serenity and luxury. Dive into the world’s most mesmerizing coral reefs, swim alongside manta rays and whale sharks, or enjoy a private candlelit dinner under the stars. With its exclusive resorts, world-class spas, and unparalleled ocean views, the Maldives is the perfect retreat for honeymooners, adventure seekers, and anyone looking for an unforgettable island getaway.",
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
export const variants = [
  { hidden: { opacity: 0, y: -50 }, visible: { opacity: 1, y: 0 } },
  { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } },
  { hidden: { opacity: 0, y: -50 }, visible: { opacity: 1, y: 0 } },
];
