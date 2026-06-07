'use client'
import { Icon } from "@iconify/react";
import { Input } from '@/components/lightswind/input';
import { Textarea } from "@/components/lightswind/textarea";

export default function Rsvp() {

    return (
        <div className="pt-20 pb-6 md:pt-32 md:pb-8">
            <div className="container mx-auto px-4 max-w-2xl">
                <div className="text-center mb-12">
                    <p className="text-wedding-accent tracking-[0.3em] uppercase text-sm mb-4">Be Our Guest</p>
                    <h2 className="font-serif text-4xl md:text-5xl text-wedding-olive mb-6">RSVP</h2>
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="h-px w-16 bg-amber-800/40"></div>
                        <Icon icon="solar:heart-bold-duotone" className="w-5 h-5 text-amber-800" />
                        <div className="h-px w-16 bg-amber-800/40"></div>
                    </div>
                </div>

                {/* <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg space-y-6">
                    <div className="space-y-5">
                        <div className="">
                            <label htmlFor="" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-amber-900">Name</label>
                            <Input type="text" placeholder="Name" className="bg-white" />
                        </div>
                        <div className="">
                            <label htmlFor="" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-amber-900">Phone Number</label>
                            <Input type="text" placeholder="Phone number" className="bg-white" />
                        </div>

                        <div className="">
                            <label htmlFor="" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-amber-900">Your Message</label>
                            <Textarea rows={7} placeholder="Enter your message here..." className="bg-white border border-gray-300" />
                        </div>
                    </div>
                    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-4 w-full bg-[#622B14] hover:bg-[#622B14]/90 text-white py-6">
                        <Icon icon="tabler:send" className="w-10 h-10 text-[#F3E4C9]/90" />
                        <span>Send Message</span>
                    </button>
                </div> */}

                <div className="text-center rounded-2xl p-8 bg-[#C08552] my-10">
                    {/* <h3 className="font-serif text-xl mb-4 text-[#F3E4C9]/80">Questions?</h3> */}
                    <p className="text-wedding-text/70 mb-6 text-[#F3E4C9]/80">
                        Feel free to contact us if you need help organizing your trip.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <a href="+233545124041" className="flex items-center gap-2 text-[#F3E4C9]/80 hover:text-wedding-accent/80 transition-colors">
                            <Icon icon="solar:phone-line-duotone" className="w-5 h-5 text-[#F3E4C9]/80" />
                            <span>+233 249 700 544</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}