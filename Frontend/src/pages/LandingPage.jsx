import React from "react";
import Nav from "../components/Homepage/Nav";
import Hero from "../components/Hero/Hero";
import Reviews from "../components/ReviewsSection/Reviews";
import Review from "../components/newsSection/Reviews";
import Services from "../components/Services/Services";
import UserStats from "./UserStats";
import Footer from "./Footer/Footer";

const LandingPage = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <Services />
      <Review />
      <Reviews />
      <UserStats />
      <Footer />
    </div>
  );
};     

export default LandingPage;
