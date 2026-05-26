"use client";

import Event from "@/components/Event/Event";
import HeroPage from "@/components/Hero/HeroPage";
import OurJourney from "@/components/OurJourney/Ourjourney";
import OurStory from "@/components/OurStory/OurStory";

export default function HomePage() {

  return (
    <div className="">
      <HeroPage />
      <OurStory />
      <OurJourney />
      <Event />
    </div>
  );
}