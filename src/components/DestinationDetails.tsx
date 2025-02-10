import { useParams, Link } from "react-router-dom";
import { destinationsData } from "../utils/data";

const DestinationDetails = () => {
    const { id } = useParams();
    const destination = destinationsData.find(dest => dest.id.toString() === id);

    if (!destination) {
        return <p className="text-center text-red-500 text-xl">Destination not found!</p>;
    }

    return (
        <div className="max-w-6xl mt-11 mx-auto px-6 py-10">
            {/* return button*/}
            <Link to="/" className="inline-block mb-6">
                <button className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-900 transition">
                    ← Back to Destinations
                </button>
            </Link>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 shadow-2xl">
                {/* Image */}
                <div className="md:w-1/2 mt-11">
                    <img
                        src={destination.image}
                        alt={destination.name}
                        className="w-full h-96 object-cover rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105"
                    />
                </div>
                {/* Détails  */}
                <div className="md:w-1/2 space-y-6 py-5 px-5">
                    <h1 className="text-4xl font-Pacifico tracking-widest font-bold text-gray-900">{destination.name}</h1>
                    <p className="text-lg text-gray-700 leading-relaxed">{destination.description}</p>
                    <p className="text-2xl font-semibold text-blue-600">{destination.price}</p>
                    <button className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
                        Book This Destination
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DestinationDetails;
