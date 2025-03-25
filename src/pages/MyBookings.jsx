import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useEffect } from "react";
import UpcomingBookingCard from "./UpcomingBookingCard";
import PastBookings from "./PastBookings";
import { Helmet } from "react-helmet-async";
export default function MyBookings({ title }) {
  const [activeTab, setActiveTab] = useState("upcoming");
  useEffect(() => {
    document.title = title;
}, [title]);
  return (
    <>
    <Helmet>
                <title>{title}</title>
                <meta name="description" content="View and manage all your Zymo car rental bookings in one place." />
                <link rel="canonical" href="https://zymo.app/my-bookings" />
                <meta property="og:title" content={title} />
                <meta property="og:description" content="Check your upcoming and past bookings with Zymo." />
            </Helmet>
    <div className="bg-[#212121] min-h-screen text-white">
      <NavBar />
      <div className="max-w-4xl mx-auto p-6">
        <h2 className="text-2xl font-semibold mb-4">My Bookings</h2>

        {/* Tabs */}
        <div className="flex space-x-6 text-lg border-b border-gray-700 pb-2">
          <button
            className={`${
              activeTab === "upcoming" ? "text-[#faffa4]" : "text-gray-400"
            } cursor-pointer hover:text-white`}
            onClick={() => setActiveTab("upcoming")}
          >
            Upcoming
          </button>
          <button
            className={`${
              activeTab === "past" ? "text-[#faffa4]" : "text-gray-400"
            } cursor-pointer hover:text-white`}
            onClick={() => setActiveTab("past")}
          >
            Past
          </button>
          <button
            className={`${
              activeTab === "cancelled" ? "text-[#faffa4]" : "text-gray-400"
            } cursor-pointer hover:text-white`}
            onClick={() => setActiveTab("cancelled")}
          >
            Cancelled
          </button>
        </div>

        {/* Conditional Rendering Based on Tab */}
        <div>
          {activeTab === "upcoming" && (
            <>
              <UpcomingBookingCard />
              <UpcomingBookingCard />
            </>
          )}
          {activeTab === "past" && (
            <>
              <PastBookings />
            </>
          )}
          {activeTab === "cancelled" && (
            <>
              {/* Add the page before using components */}
              {/* <CancelledBookings /> */}
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
    </>
  );
}
