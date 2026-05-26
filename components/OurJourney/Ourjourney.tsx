'use client'

import { Mea_Culpa } from "next/font/google";
import Image from "next/image";
import { TeamCarousel } from '@/components/lightswind/team-carousel';

export const meaCulpa = Mea_Culpa({
    weight: "400",
    subsets: ["latin"],
    display: "swap",
});


const teamMembers = [
    {
        id: "1",
        image: "/images/pic1.jpg",
    },
    {
        id: "2",
        image: "/images/pic2.jpg",
    },
    {
        id: "3",
        image: "/images/pic3.jpg",
    },
    {
        id: "4",
        image: "/images/pic4.jpg",
    },
    {
        id: "5",
        image: "/images/pic2.jpg",
    },
    {
        id: "6",
        image: "/images/pic3.jpg",
    },
];



export default function OurJourney() {


    return (
        <div className="md:py-10 py-0 bg-[#faf4eb]/80">
            <div className="max-w-2xl mx-auto px-10 py-10 bg-[#faf4eb]/90 rounded-2xl">
                <div className="text-center  animate-fade-in">
                    <h3 className="font-script text-3xl md:text-6xl text-[#C08552] mb-2">Our Love Story</h3>
                </div>

                <div className="flex items-center justify-center gap-4 py-10">
                    <div className="h-px w-16 bg-[#C08552]"></div>
                    <div className="h-px w-16 bg-[#C08552]"></div>
                </div>

                <div>
                    <div className="group relative flex gap-x-5">
                        <div
                            className="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:inset-s-4 after:translate-x-[-0.5px] after:border-s after:border-line-1 after:border-[#C08552]">
                            <div className="relative z-10 size-10 shrink-0 flex justify-center items-center">
                                <Image
                                    src="/icons/met.svg"
                                    alt=""
                                    width={35}
                                    height={35}
                                />
                            </div>
                        </div>

                        <div className="grow pb-8 group-last:pb-0">
                            <h3 className="font-script text-xl md:text-3xl text-wedding-text mt-2 mb-3">How We Met</h3>
                            <p className="font-serif italic text-wedding-text/70 leading-relaxed text-sm md:text-base">
                                Our paths crossed in the most unexpected way. What began with a lingering glance and a smile slowly turned into the start of something beautiful between us.
                                From that very moment, our journey began —soft  and filled with a kind of warmth neither of us saw coming.
                            </p>
                        </div>
                    </div>

                    <div className="group relative flex gap-x-5">
                        <div
                            className="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:inset-s-4 after:translate-x-[-0.5px] after:border-s after:border-line-1 after:border-[#C08552]">
                            <div className="relative z-10 size-10 flex justify-center items-center">
                                <Image
                                    src="/icons/engaged.svg"
                                    alt=""
                                    width={35}
                                    height={35}
                                />
                            </div>
                        </div>

                        <div className="grow pb-8 group-last:pb-0">
                            <h3 className="font-script text-xl md:text-3xl text-wedding-text mt-2 mb-3">Adventure </h3>
                            <p className="font-serif italic text-wedding-text/70 leading-relaxed text-sm md:text-base">
                                We discovered that we shared the same love for adventure and exploring the world around us.
                                From endless deep conversations to unforgettable road trips, every moment drew us closer,
                                turning simple memories into something truly special between us.
                            </p>
                        </div>
                    </div>

                    <div className="group relative flex gap-x-5">
                        <div
                            className="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:inset-s-4 after:translate-x-[-0.5px] after:border-s after:border-line-1 after:border-[#C08552]">
                            <div className="relative z-10 shrink-0 size-10 flex justify-center items-center">
                                <Image
                                    src="/icons/met.svg"
                                    alt=""
                                    width={35}
                                    height={35}
                                />
                            </div>
                        </div>

                        <div className="grow pb-8 group-last:pb-0">
                            <h3 className="font-script text-xl md:text-3xl text-wedding-text mt-2 mb-3">Moving Forward</h3>
                            <p className="font-serif italic text-wedding-text/70 leading-relaxed text-sm md:text-base">
                                Along the way, we realized this was forever. Through building a life side by side, cheering each other on,
                                and holding onto each other through every season, our love only grew deeper and stronger with every passing moment
                            </p>
                        </div>
                    </div>

                    <div className="group relative flex gap-x-5">
                        <div
                            className="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:inset-s-4 after:translate-x-[-0.5px] after:border-s after:border-line-1 after:border-[#C08552]">
                            <div className="relative z-10 size-10 flex justify-center items-center">
                                <Image
                                    src="/icons/marry.svg"
                                    alt=""
                                    width={35}
                                    height={35}
                                />
                            </div>
                        </div>

                        <div className="grow pb-8 group-last:pb-0">
                            <h3 className="font-script text-xl md:text-3xl text-wedding-text mt-2 mb-3">This Moment</h3>
                            <p className="font-serif italic text-wedding-text/70 leading-relaxed text-sm md:text-base">
                                With hearts overflowing with love and beautiful dreams for our future together,
                                we planned this joyful moment with so much happiness, and we cannot wait to share it with you.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full bg-[#faf4eb]/95">
                <TeamCarousel
                    members={teamMembers}
                    autoPlay={0}
                    showArrows
                    showDots={false}
                />
            </div>
        </div>
    )
}