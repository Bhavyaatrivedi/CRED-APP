import React from "react";
import AppRating from "../components/AppRating";
import Header from "../components/common/Header";
import CredExperience from "../components/CredExperience";
import CredSecurity from "../components/CredSecurity";
import CredStory from "../components/CredStory";
import FeelSpecial from "../components/FeelSpecial";
import HeroSection from "../components/HeroSection";
import MobileScroll from "../components/MobileScroll";
import ProductShowcase from "../components/ProductShowcase";
import Rewards from "../components/Rewards";
import WindowPeak from "../components/WindowPeak";

const HomePage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <ProductShowcase />
      <FeelSpecial />
      <Rewards />
      <CredExperience />
      <MobileScroll />
      <div className="non-mobile">
        <WindowPeak />
      </div>
      <CredSecurity />
      <CredStory />
      <AppRating />
    </div>
  );
};

export default HomePage;