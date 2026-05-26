

export default function Event() {

    return (
        <div className="md:py-24 bg-[#622B14] py-0">
            <div className="max-w-5xl mx-auto px-4 py-10">
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="font-script text-4xl md:text-6xl mb-2 text-[#C08552]">Wedding Schedule</h2>
                    <p className="text-white/70 tracking-wide">What we have prepared for you</p>
                </div>

                <div className="relative">
                    <div className="hidden md:block">
                        <div className="absolute top-16 left-0 right-0 h-px bg-white/20"></div>
                        <div className="grid grid-cols-4 gap-2">
                            <div className="flex flex-col items-center text-center group animate-fade-in">
                                <div className="bg-[#C08552] cursor-pointer text-wedding-olive px-3 py-1.5 rounded-full text-sm font-medium mb-4 group-hover:bg-[#E4D6A9] transition-colors duration-300">11:00 AM</div>
                                <div className="w-14 h-14 rounded-full bg-[#C08552] border-2 border-white/30 flex items-center justify-center text-wedding-gold mb-4 shadow-sm group-hover:border-[#E4D6A9] group-hover:scale-110 transition-all duration-300 z-10">
                                </div>
                                <h3 className="text-base lg:text-lg text-white mb-1 leading-tight">Arrival of Guests</h3>
                            </div>

                            <div className="flex flex-col items-center text-center group animate-fade-in">
                                <div className="bg-[#C08552] cursor-pointer text-wedding-olive px-3 py-1.5 rounded-full text-sm font-medium mb-4 group-hover:bg-[#E4D6A9] transition-colors duration-300">11:30 AM</div>
                                <div className="w-14 h-14 rounded-full bg-[#C08552] border-2 border-white/30 flex items-center justify-center text-wedding-gold mb-4 shadow-sm group-hover:border-[#E4D6A9] group-hover:scale-110 transition-all duration-300 z-10">
                                </div>
                                <h3 className="text-wedding-text/70 leading-relaxed text-white mb-1">Opening Remarks & Welcome</h3>
                            </div>

                            <div className="flex flex-col items-center text-center group animate-fade-in">
                                <div className="bg-[#C08552] cursor-pointer text-wedding-olive px-3 py-1.5 rounded-full text-sm font-medium mb-4 group-hover:bg-[#E4D6A9] transition-colors duration-300">12:30 PM</div>
                                <div className="w-14 h-14 rounded-full bg-[#C08552] border-2 border-white/30 flex items-center justify-center text-wedding-gold mb-4 shadow-sm group-hover:border-[#E4D6A9] group-hover:scale-110 transition-all duration-300 z-10">
                                </div>
                                <h3 className="text-base lg:text-lg text-white mb-1 leading-tight">Marriage Discourse</h3>
                            </div>

                            <div className="flex flex-col items-center text-center group animate-fade-in">
                                <div className="bg-[#C08552] cursor-pointer text-wedding-olive px-3 py-1.5 rounded-full text-sm font-medium mb-4 group-hover:bg-[#E4D6A9] transition-colors duration-300">01:00 PM</div>
                                <div className="w-14 h-14 rounded-full bg-[#C08552] border-2 border-white/30 flex items-center justify-center text-wedding-gold mb-4 shadow-sm group-hover:border-[#E4D6A9] group-hover:scale-110 transition-all duration-300 z-10">
                                </div>
                                <h3 className="text-base lg:text-lg text-white mb-1 leading-tight">Photo Session</h3>
                            </div>
                        </div>
                    </div>
                    <div className="relative md:hidden">
                        <div className="absolute left-6 top-0 bottom-0 w-px bg-white/20"></div>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4 pl-1 animate-fade-in">
                                <div className="w-11 h-11 rounded-full bg-wedding-olive border-2 border-white/30 flex items-center justify-center text-wedding-gold shrink-0 shadow-sm z-10"></div>
                                <div className="flex-1 pt-1">
                                    <div className="flex items-baseline gap-3 mb-0.5">
                                        <span className="bg-[#C08552] text-wedding-olive px-2 py-0.5 rounded text-xs font-bold">11:00 AM</span>
                                    </div>
                                    <h3 className="text-base text-white/80">Arrival of Guests</h3>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 pl-1 animate-fade-in">
                                <div className="w-11 h-11 rounded-full bg-wedding-olive border-2 border-white/30 flex items-center justify-center text-wedding-gold shrink-0 shadow-sm z-10"></div>
                                <div className="flex-1 pt-1">
                                    <div className="flex items-baseline gap-3 mb-0.5">
                                        <span className="bg-[#C08552] text-wedding-olive px-2 py-0.5 rounded text-xs font-bold">11:30 AM</span>
                                    </div>
                                    <h3 className="text-base text-white/80">Opening Remarks & Welcome</h3>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 pl-1 animate-fade-in">
                                <div className="w-11 h-11 rounded-full bg-wedding-olive border-2 border-white/30 flex items-center justify-center text-wedding-gold shrink-0 shadow-sm z-10"></div>
                                <div className="flex-1 pt-1">
                                    <div className="flex items-baseline gap-3 mb-0.5">
                                        <span className="bg-[#C08552] text-wedding-olive px-2 py-0.5 rounded text-xs font-bold">12:30 PM</span>
                                    </div>
                                    <h3 className="text-base text-white/80">Marriage Discourse</h3>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 pl-1 animate-fade-in">
                                <div className="w-11 h-11 rounded-full bg-wedding-olive border-2 border-white/30 flex items-center justify-center text-wedding-gold shrink-0 shadow-sm z-10"></div>
                                <div className="flex-1 pt-1">
                                    <div className="flex items-baseline gap-3 mb-0.5">
                                        <span className="bg-[#C08552] text-wedding-olive px-2 py-0.5 rounded text-xs font-bold">12:30 PM</span>
                                    </div>
                                    <h3 className="text-base text-white/80">Photo Session</h3>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}