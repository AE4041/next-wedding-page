'use client'
import { Icon } from "@iconify/react";

export default function Footer() {

    return (
        <div className="py-12 bg-[#622B14]">
            <div className="container mx-auto p-4 text-center">
                <h2 className="font-script text-4xl md:text-4xl mb-2 text-[#C08552]">Evans & Sparcil</h2>
                <p className="text-[#F3E4C9]/80  tracking-wide mb-6">June 27, 2026</p>

                <div className="flex items-center justify-center gap-2 text-[#C08552] text-sm">
                    <span>Made with</span>
                    <Icon icon="solar:heart-bold-duotone" className="w-5 h-5" />
                    <span>for our special day</span>
                </div>

                <div className="mt-8 pt-8 border-t border-[#C08552]/50 text-[#C08552] text-xs">
                    <p>#Curare Technologies</p>
                </div>
            </div>
        </div>
    )
}