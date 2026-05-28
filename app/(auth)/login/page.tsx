'use client'

import { Icon } from "@iconify/react";
import { Input } from '@/components/lightswind/input';
import { pageNavigator } from "@/services/navigation-service";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import ImageSlider3D from "@/components/lightswind/3d-image-slider"
import { truncate } from "node:fs/promises";


const VALID_EVENT_CODE = "EVSP272026B";

const DEFAULT_DATA = [
    "/images/pic1.jpg",
    "/images/pic2.jpg",
    "/images/pic3.jpg",
    "/images/pic1.jpg",
    "/images/pic2.jpg",
    "/images/pic3.jpg",
    "/images/pic1.jpg",
    "/images/pic2.jpg",
    "/images/pic3.jpg",
    "/images/pic1.jpg",
    "/images/pic2.jpg",
    "/images/pic3.jpg",
];

export default function AuthRootPage() {
    const navigator = pageNavigator(useRouter());
    const videoRef = useRef<HTMLVideoElement>(null);
    const [eventCode, setEventCode] = useState<string>("");
    const [isPlaying, setIsPlaying] = useState<boolean>(true);


    useEffect(() => {
        const tryAutoplay = async () => {
            try {
                await videoRef.current?.play();
                setIsPlaying(true);
            } catch {
                // Autoplay blocked — fall back to click-to-play
            }
        };

        tryAutoplay();
    }, []);

    const isValidEventCode = (code: string): boolean => {
        return (code ?? "").trim() === VALID_EVENT_CODE;
    };

    const handleEventCodeVerification = async () => {
        if (isValidEventCode(eventCode)) {
            navigator.navigateToHomePage();
        }
    };

    return (
        <div className="relative min-h-screen flex flex-col justify-center overflow-hidden">
            <div className="absolute inset-0 w-full h-full">
                <video
                    ref={videoRef}
                    className="absolute inset-0 w-full h-full object-cover"
                    src="/video/video4.mp4"
                    loop
                    playsInline
                    muted
                    preload="auto"
                />
            </div>

            <div className="flex h-full justify-center items-center px-4 z-10">
                <div className="border-0 text-ld rounded-2xl card no-inset no-ring bg-white flex flex-col gap-2 xl:max-w-6xl lg:max-w-3xl md:max-w-xl w-full border-none p-0 shadow-md">
                    <div className="grid grid-cols-12">
                        <div className="xl:col-span-6 col-span-12 px-8 xl:border-e border-gray-200 border-ld">
                            <div className="md:py-14 py-8 lg:px-6">
                                <p className="">We are getting married</p>
                                <h3 className="font-script text-4xl md:text-4xl md:text-34 md:my-8 my-5">Evans & Sparcil</h3>
                                <div className="relative my-6">
                                    <div className="h-px bg-gray-600/30"></div>
                                    <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  px-4 bg-background text-bodytext text-sm"></span>
                                    <div className="h-px bg-gray-600/30"></div>
                                </div>

                                <div className="mt-6">
                                    <div className="mt-4">
                                        <div className="mb-2 block">
                                            <span className="text-sm font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-ld mb-2">Event Code</span>
                                            <Input type="text" value={eventCode} onChange={(e: any) => setEventCode(e.target.value)} placeholder="Enter event code.." className="bg-white" />
                                        </div>
                                        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-4 w-full bg-[#622B14] hover:bg-[#622B14]/90 text-white py-6"
                                            onClick={handleEventCodeVerification}
                                        >
                                            <Icon icon="tabler:send" className="w-10 h-10 text-[#F3E4C9]/90" />
                                            <span>Confirm Code</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="xl:col-span-6 col-span-12 xl:block">
                            <div className="max-w-md mx-auto h-full flex flex-col justify-center items-center">
                                <div className="w-full flex flex-col items-center justify-center rounded-xl overflow-hidden relative">
                                    <div className="h-62.5 flex relative items-center w-full">
                                        <ImageSlider3D duration={32} cardWidth="15em" images={DEFAULT_DATA} />
                                    </div>
                                    <div className="text-center">
                                        <p className="text-15 my-6 mt-3 leading-6">
                                            Donec justo tortor, malesuada vitae faucibus ac, tristique sit amet massa. Aliquam dignissim nec felis quis imperdiet.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}