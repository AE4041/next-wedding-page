"use client";

import { useRef, useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { Mea_Culpa, Great_Vibes } from "next/font/google";

export const meaCulpa = Mea_Culpa({
    weight: "400",
    subsets: ["latin"],
    display: "swap",
});

const greatVibes = Great_Vibes({
    weight: "400",
    subsets: ["latin"],
    display: "swap",
})

export default function HeroPage() {
    const audioRef = useRef<HTMLAudioElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);

    // Attempt autoplay on mount
    useEffect(() => {
        const tryAutoplay = async () => {
            try {
                await videoRef.current?.play();
                await audioRef.current?.play();
                setIsPlaying(true);
            } catch {
                // Autoplay blocked — fall back to click-to-play
            }
        };

        tryAutoplay();
    }, []);

    const playMedia = async () => {
        if (isPlaying) return;
        try {
            await audioRef.current?.play();
            await videoRef.current?.play();
            setIsPlaying(true);
        } catch (err) {
            console.error("Playback failed:", err);
        }
    };

    const stopMedia = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        audioRef.current?.pause();
        if (audioRef.current) audioRef.current.currentTime = 0;
        setIsPlaying(false);
    };

    useEffect(() => {
        document.addEventListener("click", playMedia);
        return () => document.removeEventListener("click", playMedia);
    }, [isPlaying]);

    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center py-8 px-6 overflow-hidden bg-background">
            <audio ref={audioRef} src="/audio/song.mp3" loop preload="auto" />

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

            <div className="text-center z-10 animate-fade-in my-57.5 bg-gray-90 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-50 p-10">
                <p className="text-xs md:text-sm tracking-[0.3em] uppercase mb-3 text-foreground">
                    We are getting married
                </p>
                <h1 className={`${meaCulpa.className} text-5xl md:text-6xl lg:text-8xl mb-2 text-amber-950`}>
                    Evans & Sparcil
                </h1>
                <div className="flex items-center justify-center gap-4 md:my-8 my-1.25">
                    <span className="h-px w-12 md:w-20 bg-amber-950" />
                    <Icon icon="solar:heart-bold-duotone" className="w-5 h-5 text-amber-800" />
                    <span className="h-px w-12 md:w-20 bg-amber-950" />
                </div>
                <p className="text-xs md:text-sm tracking-[0.3em] uppercase mb-3 text-foreground">
                    27th June, 2026
                </p>
            </div>

            {isPlaying && (
                <button
                    className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full border border-foreground bg-white backdrop-blur-sm flex items-center justify-center text-foreground hover:border-foreground/50 transition-all duration-300"
                    onClick={stopMedia}
                    aria-label="Stop music"
                />
            )}
        </div>
    );
}