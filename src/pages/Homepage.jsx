// src/pages/Homepage.jsx
import React from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import PropertyCard from "../components/PropertyCard";
import Footer from "../components/Footer";
import BottomNav from "../components/BottomNav";

const sampleProperties = [
  {
    title: "شقة فاخرة في دمشق",
    location: "دمشق - المزة",
    price: "120,000,000",
    area: 120,
    rooms: 3,
    type: "للبيع",
    image: "https://source.unsplash.com/400x250/?apartment,damascus&sig=1",
  },
  {
    title: "فيلا للبيع في اللاذقية",
    location: "اللاذقية - الكورنيش",
    price: "350,000,000",
    area: 350,
    rooms: 5,
    type: "للبيع",
    image: "https://source.unsplash.com/400x250/?villa,lattakia&sig=2",
  },
  {
    title: "شقة للإيجار بحلب",
    location: "حلب - وسط المدينة",
    price: "20,000,000",
    area: 85,
    rooms: 2,
    type: "إيجار",
    image: "https://source.unsplash.com/400x250/?apartment,aleppo&sig=3",
  },
  {
    title: "شقة للإيجار في دمشق",
    location: "دمشق - باب توما",
    price: "18,000,000",
    area: 90,
    rooms: 3,
    type: "إيجار",
    image: "https://source.unsplash.com/400x250/?apartment,damascus&sig=4",
  },
  {
    title: "فيلا للبيع في حماة",
    location: "حماة - الميدان",
    price: "270,000,000",
    area: 320,
    rooms: 4,
    type: "للبيع",
    image: "https://source.unsplash.com/400x250/?villa,hama&sig=5",
  },
  {
    title: "شقة للبيع في طرطوس",
    location: "طرطوس - وسط المدينة",
    price: "90,000,000",
    area: 110,
    rooms: 3,
    type: "للبيع",
    image: "https://source.unsplash.com/400x250/?apartment,tartous&sig=6",
  },
];

export default function Homepage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 font-cairo">
      <Header />

      <main className="flex-grow relative z-10 pb-24">
        <div className="pt-24 text-center text-3xl font-semibold text-gray-700">مرحبًا بك</div>

        <div className="mt-6 px-6 max-w-4xl mx-auto">
          <SearchBar />
        </div>

        <section className="px-6 max-w-6xl mx-auto mt-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">عقارات للبيع والإيجار</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sampleProperties.map((property, idx) => (
              <PropertyCard
                key={idx}
                title={property.title}
                location={property.location}
                price={property.price}
                area={property.area}
                rooms={property.rooms}
                type={property.type}
                image={property.image}
                className="shadow-lg rounded-xl transform hover:scale-105 transition duration-300"
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />
      <BottomNav />
    </div>
  );
}
