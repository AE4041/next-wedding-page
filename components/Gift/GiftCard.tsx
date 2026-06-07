'use client'
import { Icon } from "@iconify/react";
import { useState } from "react";

export default function GiftCard() {
    const [hidden, setHidden] = useState<boolean>(true)

    const handleButtonClick = () => {
        if (hidden) {
            setHidden(false)
        } else {
            setHidden(true)
        }
    }

    return (
        <div className="md:py-24 relative overflow-hidden py-2.5">
            <div className="max-w-2xl mx-auto px-4 relative z-10">
                <div className="text-center mb-12 animate-fade-in">
                    <h2 className="font-script text-5xl md:text-6xl text-wedding-olive mb-6 mx-0 px-0 my-5">Gifts</h2>
                    <p className="text-muted-foreground leading-relaxed max-w-lg mx-auto">
                        <span>Your presence is most important to us. </span><br />
                        <span>If you would like to give us a gift, you can do so in whatever way suits you best.</span>
                    </p>
                </div>

                <div className="rounded-2xl border-2 shadow-sm overflow-hidden animate-fade-in bg-[#622B14] border-wedding-olive">
                    <button className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-secondary/30 transition-colors"
                        onClick={() => handleButtonClick()}
                    >
                        <span className="font-serif text-lg text-[#F3E4C9]/80 ">Contribution</span>
                        <div className="transition-transform duration-300 rotate-180 text-white">
                            <Icon icon="lucide:lucide-chevron-down" />
                        </div>
                    </button>
                    <div className={`${hidden ? "hidden" : "block"} overflow-hidden transition-all duration-300 max-h-96 opacity-100`}>
                        <div className="px-6 pb-6 pt-2 border-t border-border bg-primary-foreground">
                            <p className="text-muted-foreground text-sm leading-relaxed mb-2">If you prefer, the gift can be in cash.</p>
                            <p className="text-muted-foreground text-sm leading-relaxed mb-6">If this suits you better, you can also make an electronic transfer:</p>
                            <div className="text-center">
                                <div className="space-y-2">
                                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Momo Number</p>
                                    <p className="font-mono text-sm text-foreground/80 tracking-wide select-all">0243758188 - Evans Wireko</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}