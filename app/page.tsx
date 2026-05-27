"use client";

import Event from "@/components/Event/Event";
import GiftCard from "@/components/Gift/GiftCard";
import HeroPage from "@/components/Hero/HeroPage";
import Location from "@/components/Location/Location";
import OurJourney from "@/components/OurJourney/Ourjourney";
import OurStory from "@/components/OurStory/OurStory";
import Rsvp from "@/components/Rsvp/Rsvp";

export default function HomePage() {

  return (
    <div className="">
      <HeroPage />
      <OurStory />
      <OurJourney />
      <Event />
      <GiftCard />
      <Location />
      <Rsvp />
    </div>
  );
}