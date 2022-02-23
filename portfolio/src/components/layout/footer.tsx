import { HiChevronDoubleRight, HiMail } from "react-icons/hi";
import { ImArrowRight, ImArrowRight2, ImGithub, ImLinkedin, ImLinkedin2 } from "react-icons/im";
import { SiDatocms, SiDeviantart, SiFramer, SiGamejolt, SiNextdotjs, SiReact, SiTailwindcss, SiTypescript, SiYoutube } from "react-icons/si";
import FadeIn from "../Fadein";
import Tooltip from "../tooltip";

export const Footer = () => (
    <footer id="footer" className="">
        <div className="max-w-screen-2xl  pt-32 pb-12 mx-auto xl:px-8">
            <div className="max-w-screen-xl mx-auto text-white py-20 xl:rounded-3xl overflow-clip before:rounded-3xl text-center  bg-gradient-to-br from-blue-600 to-green-400 before:bg-[url(/images/mesh-1.png)] before:absolute before:inset-0 before:bg-cover before:mix-blend-overlay before:opacity-100  relative before:animate-hue-rotate">
                <div className='absolute inset-0 bg-[url(/images/noise.png)] bg-repeat' />
                <FadeIn once={false} duration={0.75} className="relative">
                    <p className="text-4xl font-extrabold sm:text-6xl">
                        Let's work together
                    </p>
                </FadeIn>

                <FadeIn once={false} duration={0.75} delay={0.1} className="relative">
                    <a href="https://www.linkedin.com/in/ala-chebbi-32266b168/" target={'_blank'} rel='noreferrer' className='h-16 group shadow font-medium items-center hover:gap-6 gap-4 px-7 inline-flex rounded-2xl hover:opacity-100 opacity-80 transition-all text-xl relative mt-12 duration-300 bg-white text-blue-700'>
                        Send me a message
                        <div className="relative">
                            <HiChevronDoubleRight className=" transition duration-300 group-hover:opacity-0" />
                            <ImLinkedin className="delay-75 top-0 absolute transition duration-300 group-hover:opacity-100 opacity-0" />
                        </div>
                    </a>
                </FadeIn>
            </div>

            <div className="pt-12 lg:mt-12 border-t border-white/25 sm:items-center sm:justify-between gap-12 flex justify-center text-center lg:text-left flex-col-reverse lg:flex-row">
                <div className="">
                    <p className="text-gray-700">Ala Chebbi &copy; 2022 | Made with <Tooltip content="Next.js v12"><SiNextdotjs className="inline-block mx-1 text-lg" /></Tooltip>, <Tooltip content="React v17"><SiReact className="inline-block mx-1 text-lg" /></Tooltip> ,<Tooltip content="TailwindCSS v3"><SiTailwindcss className="inline-block mx-1" /></Tooltip>, <Tooltip content="Framer Motion v5"><SiFramer className="inline-block mx-1" /></Tooltip> ,<Tooltip content="Typescript"><SiTypescript className="inline-block mx-1" /></Tooltip> and  <Tooltip content="Dato CMS"><SiDatocms className="inline-block mx-1" /></Tooltip></p>
                    <a href="https://github.com/to-fuu/alachebbi.com" target={'_blank'} rel='noreferrer' className="text-gray-700 inline-flex gap-1 items-center underline">View Source <ImArrowRight2 className="text-xs" /> </a>
                </div>
                <div className="flex justify-center mt-6 space-x-6 sm:justify-end sm:mt-0 text-xl text-gray-700">
                    <a className="p-2 hover:text-blue-700 duration-300" href="https://www.linkedin.com/in/ala-chebbi-32266b168/" target="_blank" rel="noreferrer">
                        <span className="sr-only"> Linkedin </span>
                        <ImLinkedin2 />
                    </a>
                    <a className="p-2 hover:text-green-700 duration-300" href="https://gamejolt.com/@06hypersonic60" target="_blank" rel="noreferrer">
                        <span className="sr-only"> Gamejolt </span>
                        <SiGamejolt />
                    </a>
                    <a className="p-2 hover:text-black duration-300" href="https://github.com/to-fuu" target="_blank" rel="noreferrer">
                        <span className="sr-only"> Github </span>
                        <ImGithub />
                    </a>
                    <a className="p-2 hover:text-red-600 duration-300" href="https://www.youtube.com/c/AlaChebbi_tofuu" target="_blank" rel="noreferrer">
                        <span className="sr-only"> Youtube </span>
                        <SiYoutube />
                    </a>
                    <a className="p-2 hover:text-green-600 duration-300" href="https://www.deviantart.com/06hypersonic60" target="_blank" rel="noreferrer">
                        <span className="sr-only"> Deviantart </span>
                        <SiDeviantart />
                    </a>
                </div>
            </div>
        </div>
    </footer>
)