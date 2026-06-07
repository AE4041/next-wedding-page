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
                                <span>11:00 AM</span>
                            </div>
                            <div className="flex items-center justify-center gap-2">
                                <Icon icon="duo-icons:location" className="w-4 h-4 shrink-0" />
                                <span>Banivillas</span>
                            </div>

                        </div>

                        <div className="aspect-video rounded-lg md:rounded-xl overflow-hidden shadow-lg mb-4 md:mb-6">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3591.1528765890703!2d-1.5524573000000002!3d6.690023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdb94f10e70513b%3A0xe636f8ffc9d2f6fc!2sBanivillas%20Hostel!5e1!3m2!1sen!2sgh!4v1780574111962!5m2!1sen!2sgh"
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

                    <div className="flex items-center gap-4 justify-center mt-5">
                        <div className="flex flex-col items-center text-center group animate-fade-in">
                            <div className="w-14 h-14 rounded-full bg-[#361b03] border-2 border-white/30 flex items-center justify-center text-wedding-gold mb-4 shadow-sm group-hover:border-[#E4D6A9] group-hover:scale-110 transition-all duration-300 z-10">
                            </div>
                        </div>
                        <div className="flex flex-col items-center text-center group animate-fade-in">
                            <div className="w-14 h-14 rounded-full bg-[#613416] border-2 border-white/30 flex items-center justify-center text-wedding-gold mb-4 shadow-sm group-hover:border-[#E4D6A9] group-hover:scale-110 transition-all duration-300 z-10">
                            </div>
                        </div>
                        <div className="flex flex-col items-center text-center group animate-fade-in">
                            <div className="w-14 h-14 rounded-full bg-[#b55206] border-2 border-white/30 flex items-center justify-center text-wedding-gold mb-4 shadow-sm group-hover:border-[#E4D6A9] group-hover:scale-110 transition-all duration-300 z-10">
                            </div>
                        </div>
                        <div className="flex flex-col items-center text-center group animate-fade-in">
                            <div className="w-14 h-14 rounded-full bg-[#bb5221] border-2 border-white/30 flex items-center justify-center text-wedding-gold mb-4 shadow-sm group-hover:border-[#E4D6A9] group-hover:scale-110 transition-all duration-300 z-10">
                            </div>
                        </div>
                        <div className="flex flex-col items-center text-center group animate-fade-in">
                            <div className="w-14 h-14 rounded-full bg-[#dfb38c] border-2 border-white/30 flex items-center justify-center text-wedding-gold mb-4 shadow-sm group-hover:border-[#E4D6A9] group-hover:scale-110 transition-all duration-300 z-10">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}