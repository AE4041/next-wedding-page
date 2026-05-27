'use client'
import { Icon } from "@iconify/react";
import { Input } from '@/components/lightswind/input';

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

                <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg space-y-6">
                    <div className="space-y-4">
                        <div className="">
                            <label htmlFor="" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-amber-900">Name</label>
                            <Input type="text" placeholder="Name" className="bg-white"/>
                        </div>
                        <div className="">
                            <label htmlFor="" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-amber-900">Phone Number</label>
                            <Input type="text" placeholder="Phone number" className="bg-white" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}