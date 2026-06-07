import Image from "next/image";
import { Mea_Culpa } from "next/font/google";

export const meaCulpa = Mea_Culpa({
    weight: "400",
    subsets: ["latin"],
    display: "swap",
});


export default function OurStory() {

    const dashedLine = Array.from({ length: 10 }, (_, index) => (
        <div key={index} className="w-0.5 h-1.25 my-0.75 bg-amber-200" />
    ));

    return (
        <div className="md:py-32 bg-background py-0 relative w-full flex flex-col items-center z-10 overflow-hidden">
            {/* <div className="w-full flex flex-col items-center px-4 shrink-0 z-10">
                <Image
                    src="/icons/dove.png"
                    alt="rings"
                    width={95}
                    height={95}
                    className="mb-5 animate-pulse"
                />
            </div> */}
            <div className="flex flex-col justify-center items-center">
                <h3 className="font-bold z-20 text-3xl animate-fade-down">Save</h3>
                <h3 className={`${meaCulpa.className} text-[#C08552] text-4xl sm:text-8xl z-10 transform font-light mt-3 md:-mt-10`}>
                    The Date
                </h3>
            </div>

            {dashedLine}
            <p className="font-script tracking-wider text-black text-3xl md:text-6xl mt-4">
                27th of June 2026
            </p>
            <p className="mt-7">Banivillas</p>
            <div className="w-full flex flex-col sm:flex-row  justify-center items-center gap-8 md:gap-20 lg:gap-24 mt-12 sm:mt-16 lg:mt-20 px-4 z-10 animate-fade-up animate-ease-in"></div>

            <Image
                src="/images/la1.png"
                alt={`Line art 1`}
                width={650}
                height={0}
                quality={100}
                className="max-md:hidden absolute max-md:w-75 max-lg:w-55 max-xl:w-87.5 max-2xl:w-112.5 max-md:bottom-225 md:top-72 right-0 md:right-16 z-0 opacity-10"
            />
            <Image
                src="/images/la1.png"
                alt={`Line art 1`}
                width={650}
                height={0}
                quality={100}
                className="max-md:hidden absolute max-lg:w-62.5 max-xl:w-87.5 top-72 left-16 z-0 opacity-10 transform scale-x-[-1]"
            />
        </div>
    )
}