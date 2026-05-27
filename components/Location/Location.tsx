'use client'
import { Icon } from "@iconify/react";


export default function Location() {

    return (
        <div className="py-12 md:py-32 bg-white">
            <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
                <div className="text-center mb-8 md:mb-16">
                    <p className="text-wedding-accent tracking-[0.2em] md:tracking-[0.3em] uppercase text-xs md:text-sm mb-3 md:mb-4">Join Us</p>
                    <h2 className="font-serif text-3xl md:text-5xl text-wedding-olive mb-4 md:mb-6">Event Details</h2>
                    <p className="text-wedding-text/70 max-w-2xl mx-auto text-sm md:text-base px-2">
                        We look forward to celebrating this special day with you. Here's everything you need to know.
                    </p>
                </div>

                <div className="mb-8 md:mb-16">
                    <div className="bg-background rounded-xl md:rounded-2xl p-5 sm:p-6 md:p-8 text-center hover:shadow-lg transition-shadow duration-300">
                        <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-[#F3E4C9] rounded-full mb-4 md:mb-6">
                            <Icon icon="solar:star-fall-bold-duotone" className="w-6 h-6 md:w-8 md:h-8 text-wedding-accent" />
                        </div>
                        <h3 className="text-xl md:text-2xl  mb-3 md:mb-4">Wedding Ceremony</h3>
                        <div className="space-y-2 md:space-y-3 text-wedding-text/70 mb-4 md:mb-6 text-sm md:text-base">
                            <div className="flex items-center justify-center gap-2">
                                <Icon icon="duo-icons:clock" className="w-4 h-4 shrink-0" />
                                <span>12:30 PM</span>
                            </div>
                            <div className="flex items-center justify-center gap-2">
                                <Icon icon="duo-icons:location" className="w-4 h-4 shrink-0" />
                                <span>Banivillas Hostel - Kumasi</span>
                            </div>

                        </div>

                        <div className="aspect-video rounded-lg md:rounded-xl overflow-hidden shadow-lg mb-4 md:mb-6">
                            <iframe src="https://maps.google.com/maps?q=Mairie+du+19e+arrondissement+Paris&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                                width="100%" height="100%"
                                loading="lazy"
                                title="19th Arrondissement Town Hall - 5-7 Place Armand Carrel, Paris"
                                className="w-full h-full" />

                        </div>
                    </div>
                </div>

                <div className="text-center bg-[#622B14] rounded-xl md:rounded-2xl p-5 sm:p-6 md:p-8">
                    <h3 className="font-serif text-xl md:text-2xl text-[#F3E4C9]/80  mb-3 md:mb-4">Dress Code</h3>
                    <div className="text-[#F3E4C9]/80 text-xs md:text-sm px-2">We kindly ask you to dress elegantly for our celebration.</div>
                </div>
            </div>
        </div>
    )
}