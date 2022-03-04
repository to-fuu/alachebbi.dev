import * as datoCmsApi from '@/cms/dato';
import Project from '@/cms/types/Project';
import Testimonial from '@/cms/types/Testimonial';
import { DetailsGroup } from '@/components/DetailsGroup';
import FadeIn from '@/components/Fadein';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Tooltip from '@/components/tooltip';
import { CodeWindow } from '@/components/windows/codewindow';
import { HeaderWindow } from '@/components/windows/headerwindow';
import { ProjectWindow } from '@/components/windows/projectwindow';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import {
  HiArrowLeft,
  HiArrowRight,
  HiChevronDoubleDown,
  HiChevronDoubleRight, HiOutlineDocumentText
} from 'react-icons/hi';
import { RiCopperDiamondFill } from 'react-icons/ri';
import {
  SiAlpinedotjs, SiCsharp,
  SiCss3, SiDatocms, SiGraphql,
  SiHtml5, SiJavascript, SiMysql,
  SiNextdotjs,
  SiReact,
  SiStrapi,
  SiTailwindcss,
  SiTypescript,
  SiUnity,
  SiWordpress
} from 'react-icons/si';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
SwiperCore.use([Navigation])


interface props {
  projects: Project[]
  testimonials: Testimonial[]
}
export default function HomePage({ projects, testimonials }: props) {
  const s1Ref = React.useRef<HTMLDivElement>(null);
  const discRef = React.useRef<HTMLButtonElement>(null);
  const cvRef = React.useRef<HTMLAnchorElement>(null);

  const [selectedSlide, setSelectedSlide] = React.useState(0);

  const projectsPrev = React.useRef<HTMLButtonElement>(null)
  const projectsNext = React.useRef<HTMLButtonElement>(null)

  return (
    <Layout headerDark={false}>
      <Seo />
      <main className='bg-white max-w-[100vw] overflow-x-clip '>
        <section className='relative  overflow-y-clip bg-gradient-to-br from-blue-600 to-green-400 text-gray-200 selection:bg-white selection:text-gray-900 before:absolute before:inset-0 before:animate-hue-rotate before:bg-[url(/images/mesh-1.webp)] before:bg-cover before:opacity-100 before:mix-blend-overlay '>
          <div className='absolute inset-0 bg-[url(/images/noise.webp)] bg-repeat ' />
          <div className='relative flex flex-col w-full max-w-screen-xl px-10 pt-24 text-left layout sm:pt-40 xl:px-0'>
            <FadeIn className='w-full' startScale={1} bounce={0.1} type={'spring'} duration={0.75}>
              <h1 className='group mt-4 flex flex-col leading-[1.1] justify-center items-center '>
                <div className='mb-2 font-bold opacity-60 scale-90 transition duration-300 [text-shadow:2px_2px_#00000033] text-center'>
                  Howdy, I&apos;m Ala
                </div>
                <div className='text-center'>
                  Building modern websites and fun game experiences
                </div>
              </h1>
            </FadeIn>

            <FadeIn className='mx-auto' startScale={1} bounce={0.1} type={'spring'} duration={0.75} delay={0.25}>
              <div className='flex flex-wrap justify-center gap-4 mt-12'>
                <button
                  onClick={() => {
                    s1Ref.current!.scrollIntoView({ behavior: 'smooth' });
                  }}
                  ref={discRef}
                  className='relative inline-flex items-center h-16 gap-4 text-xl font-medium transition duration-300 shadow cursor-down group rounded-2xl bg-white/90 px-7 text-slate-700 hover:opacity-80'
                >
                  Discover
                  <HiChevronDoubleDown className='transition duration-300 group-hover:translate-y-1' />
                </button>
                <a
                  onMouseEnter={() => {
                    discRef.current!.classList.add('opacity-50');
                  }}
                  onMouseLeave={() => {
                    discRef.current!.classList.remove('opacity-50');
                  }}
                  href='/cv-alachebbi.pdf'
                  target={'_blank'}
                  ref={cvRef}
                  className='relative inline-flex items-center h-16 gap-4 text-xl font-medium transition duration-300 bg-white bg-opacity-50 shadow select-none whitespace-nowrap cursor-newtab rounded-2xl px-7 text-slate-700/70 hover:bg-opacity-100 hover:text-blue-800'
                >
                  Get Resume
                  <HiOutlineDocumentText />
                </a>
              </div>
            </FadeIn>
          </div>

          <div className='relative flex mt-12 '>
            <FadeIn className='w-full' startScale={0.9} bounce={0} duration={0.5} delay={0.35}>
              <CodeWindow
                className='w-full -mb-32'
              />
            </FadeIn>

            <FadeIn className='absolute w-full' startScale={0.9} bounce={0} duration={0.5} delay={0.4}>
              <HeaderWindow
                className='absolute left-0 right-0 hidden -mb-32 scale-75 -translate-x-full opacity-50 mr-52 xl:block'
                tab1='Emira Tlili port...'
                tab1Icon={
                  <img
                    src='https://www.datocms-assets.com/60949/1645552293-etfavicon.svg'
                    className='w-4 h-4'
                    alt=''
                  />
                }
                tab2='Coffee Cup Ind...'
                tab2Icon={<RiCopperDiamondFill />}
                url='emiratlili.com'
                img='https://www.datocms-assets.com/60949/1645552277-etlili.jpeg'
              />
            </FadeIn>

            <FadeIn className='absolute w-full' startScale={0.9} bounce={0} duration={0.5} delay={0.4}>
              <HeaderWindow
                className='absolute left-0 right-0 hidden -mb-32 scale-75 translate-x-full opacity-50 ml-52 xl:block'
                tab1='Postuler at jo..'
                tab1Icon={
                  <img
                    src='https://www.datocms-assets.com/60949/1645555012-heyvast-icon.svg'
                    className='w-4 h-4'
                    alt=''
                  />
                }
                tab2='Cosi.tn'
                tab2Icon={<RiCopperDiamondFill />}
                url='jobs.heyvast.tn'
                img='https://www.datocms-assets.com/60949/1645554989-heyjobs.png'
              />
            </FadeIn>
          </div>
        </section>

        <section
          className='relative flex flex-col items-center max-w-screen-lg pt-40 pb-12 text-center layout scroll-mt-20'
          id='about'
          ref={s1Ref}
        >
          <FadeIn bounce={0} duration={0.5} distance={40} once={false}>
            <h2 className='text-slate-600'>
              Passionate Frontend and <br /> Game developer
            </h2>
          </FadeIn>
          <FadeIn bounce={0} duration={0.5} distance={40} once={false}>
            <p className='max-w-xl mt-8 mb-4 text-xl text-slate-600'>
              Welcome to my portfolio! I'm Ala, a passionate programmer, gamer, artist and UI aspiring designer. I currently work as a fullstack web and mobile developer at <a href="https://brandbox.tn" target={'_blank'} rel='noreferrer' className='text-yellow-600 underline cursor-newtab'>Brandbox</a>.

              <br /> My favourite and most used frameworks are <em className='font-medium'>Next.js</em> and <em className='font-medium'>TailwindCSS</em> for frontend development and <em className='font-medium'>Unity3D</em> for game development.
            </p>
          </FadeIn>

          <FadeIn
            bounce={0}
            duration={0.5}
            distance={40}
            once={false}
            className='w-full max-w-screen-sm '
          >

            <div className='flex flex-wrap items-center justify-center w-full gap-12 mt-8 text-3xl text-gray-800'>

              <Tooltip content="Javascript">
                <SiJavascript className='text-yellow-600' />
              </Tooltip>
              <Tooltip content="Typescript">
                <SiTypescript className='text-sky-600' />
              </Tooltip>
              <Tooltip content="C sharp">
                <SiCsharp className='text-purple-600' />
              </Tooltip>



              <Tooltip content="HTML5">
                <SiHtml5 className='text-red-700' />
              </Tooltip>

              <Tooltip content="CSS3">
                <SiCss3 className='text-blue-600' />
              </Tooltip>

            </div>

          </FadeIn>

          <FadeIn
            bounce={0}
            duration={0.6}
            distance={40}
            once={false}
            className='w-full max-w-screen-sm '>
            <div className='flex flex-wrap items-center justify-center w-full gap-12 mt-12 text-3xl text-gray-800'>
              <Tooltip content="Unity3D">
                <SiUnity className='text-gray-700' />
              </Tooltip>
              <Tooltip content='Next.js'>
                <SiNextdotjs />
              </Tooltip>
              <Tooltip content="React / React-Native">
                <SiReact className='text-sky-600' />
              </Tooltip>
              <Tooltip content="Alpine.js">
                <SiAlpinedotjs className='text-gray-600' />
              </Tooltip>
              <Tooltip content="TailwindCSS">
                <SiTailwindcss className='text-emerald-500' />
              </Tooltip>

              <Tooltip content="MySQL">
                <SiMysql className='text-4xl text-orange-700' />
              </Tooltip>
              <Tooltip content="Grapql">
                <SiGraphql className='text-pink-600' />
              </Tooltip>

              <Tooltip content="Strapi">
                <SiStrapi className='text-indigo-600' />
              </Tooltip>
              <Tooltip content="Dato CMS">
                <SiDatocms className='text-orange-600' />
              </Tooltip>
              <Tooltip content="Wordpress">
                <SiWordpress className='text-black' />
              </Tooltip>


            </div>
          </FadeIn>


          <FadeIn
            className='hidden w-full mt-4'
            bounce={0}
            duration={0.5}
            distance={40}
            once={false}
          >
            <div className='w-full mt-8 space-y-4'>
              <DetailsGroup
                items={[
                  { title: 'Frontend Development', content: 'lorem' },
                  { title: 'Game Development', content: 'lorem' },
                  { title: 'App Development', content: 'lorem' },
                ]}
              />
            </div>
          </FadeIn>
        </section>

        <FadeIn bounce={0} duration={0.75} distance={40} once={false}>
          <section className='pt-10 xl:pb-20 scroll-mt-40' id='projects'>
            <div style={{ backgroundImage: `linear-gradient(to bottom right, ${projects[selectedSlide].colorTopLeft?.hex}, ${projects[selectedSlide].colorBottomRight?.hex})` }} className='transition-all duration-300 relative mx-auto max-w-screen-xl overflow-clip xl:rounded-3xl pt-20 before:absolute before:inset-0 before:animate-hue-rotate before:bg-[url(/images/mesh-1.webp)] before:bg-cover before:opacity-100'>
              <div className='absolute inset-0 bg-[url(/images/noise.webp)] bg-repeat' />
              <div className='relative max-w-screen-lg layout'>
                <h2 className='text-slate-200'>
                  <div className=''>Latest projects</div>
                </h2>
                <div className='flex items-center mt-12 '>
                  <Link href={'/projects'} passHref>
                    <a className='relative inline-flex items-center h-16 gap-4 text-xl font-medium transition-all duration-300 border-t shadow group rounded-2xl bg-slate-50/75 px-7 hover:gap-6 hover:bg-slate-50' style={{ color: projects[selectedSlide].accentColor.hex }}>
                      Browse all
                      <HiChevronDoubleRight />
                    </a>
                  </Link>
                  <button ref={projectsPrev} className='p-3 ml-auto mr-4 text-blue-700 transition duration-300 border-t rounded-full shadow disabled:bg-white/80 disabled:opacity-50 bg-white/80 backdrop-blur-sm hover:bg-white'>
                    <HiArrowLeft />
                  </button>
                  <button ref={projectsNext} className='p-3 text-blue-700 transition duration-300 border-t rounded-full shadow disabled:bg-white/80 disabled:opacity-50 bg-white/80 backdrop-blur-sm hover:bg-white'>
                    <HiArrowRight />
                  </button>
                </div>
              </div>
              <div className='max-w-screen-lg layout'>
                <Swiper

                  navigation={{
                    prevEl: projectsPrev.current,
                    nextEl: projectsNext.current,
                  }}
                  onBeforeInit={(swiper) => {
                    //@ts-expect-error
                    swiper.params.navigation.prevEl = projectsPrev.current;
                    //@ts-expect-error
                    swiper.params.navigation.nextEl = projectsNext.current;
                  }}
                  spaceBetween={40}
                  slidesPerView={'auto'}
                  centeredSlides={true}
                  className='mt-8 w-full !overflow-visible'
                  onSlideChange={(swiper) => setSelectedSlide(swiper.activeIndex)}
                  onSwiper={(swiper) => console.log(swiper)}
                >

                  {projects.map(({ title, id, icon, liveSite, image, repo }, index) => (

                    <SwiperSlide key={`project_${id}`}
                      className={`cursor-grab overflow-visible transition duration-300 w-full `}
                    >
                      <ProjectWindow
                        repo={repo}
                        className={`w-full rounded-b-none ${selectedSlide !== index ? 'opacity-75 translate-y-4' : '-translate-y-0'}`}
                        title={title}
                        icon={<img src={icon.url} className='w-4 h-4' />}
                        url={liveSite}
                        img={image.url}
                      />
                    </SwiperSlide>
                  ))}




                </Swiper>
              </div>
            </div>
          </section>
        </FadeIn>

        <section className='pt-16 bg-blue-50 sm:pt-32 sm:pb-16'>
          <div className="layout">
            <FadeIn bounce={0} duration={0.5} distance={40} once={false}>
              <h2 className='text-slate-600 '>
                <div className=''>My Career so far</div>
              </h2>
            </FadeIn>

            <FadeIn bounce={0} duration={0.5} distance={40} once={false}>
              <div className="grid sm:grid-cols-2 mx-auto mt-16 gap-12">
                <div className="">
                  <h3 className='text-3xl text-slate-600 font-black'>Education</h3>
                  <ul className='mt-8 space-y-4 font-semibold'>
                    <li className='flex flex-col   space-y-1'>
                      <span className='text-2xl font-semibold'>Software Engineering</span>
                      <span className='text-lg font-medium text-slate-800'>Higher Institute of Applied Sciences and Technology of Sousse</span>
                      <p className='text-transparent'>_</p>
                    </li>
                    <li className='flex flex-col  space-y-1'>
                      <span className='text-2xl font-semibold'>Integrated Preparatory Course</span>
                      <span className='text-lg font-medium text-slate-800'>Higher Institute of Applied Sciences and Technology of Sousse</span>
                      <p className='text-transparent'>_</p>
                    </li>
                  </ul>
                </div>
                <div className="">
                  <h3 className='text-3xl text-slate-600 font-black'>Work</h3>
                  <ul className='mt-8 space-y-4'>
                    <li className='flex flex-col   space-y-1'>
                      <span className='text-2xl font-semibold'>Fullstack developer and UI designer</span>
                      <span className='text-lg font-medium text-slate-800'>Brandbox  <span className='text-white bg-amber-500 rounded-md px-2 text-xs py-0.5 ml-1 -translate-y-px inline-block'>CURRENT</span> </span>
                      <p className='text-slate-600'>Lead web developer and UI designer at a creative agency.</p>
                    </li>
                    <li className='flex flex-col   space-y-1'>
                      <span className='text-2xl font-semibold'>Freelancer</span>
                      <span className='text-lg font-medium text-slate-800'>Fiverr / Upwork</span>
                      <p className='text-slate-600'>Game dev and Fullstack Web freelancer</p>
                    </li>
                    <li className='flex flex-col   space-y-1'>
                      <span className='text-2xl font-semibold'>Game development Instructor</span>
                      <span className='text-lg font-medium text-slate-800'>Gomycode</span>
                      <p className='text-slate-600'>Game development instructor at a training center</p>
                    </li>
                  </ul>
                </div>
              </div>
            </FadeIn>
            <FadeIn
              bounce={0}
              duration={0.5}
              distance={40}
              once={false}
              delay={0.1}
              className="mx-auto mt-16 w-fit"
            >
              <a

                href='/cv-alachebbi.pdf'
                target={'_blank'}
                ref={cvRef}
                className='relative inline-flex items-center h-16 gap-4 text-xl font-medium text-white transition-all duration-300 bg-blue-600 border-t shadow rounded-2xl border-t-blue-400 px-7 hover:opacity-90'
              >
                Get Full Resume
                <HiOutlineDocumentText />
              </a>
            </FadeIn>
          </div>
        </section>

        <section className='pt-16 bg-gradient-to-b from-blue-50 to-white sm:py-32' id='blog'>
          <div className='layout'>
            <FadeIn bounce={0} duration={0.5} distance={40} once={false}>
              <h2 className='text-center text-slate-600'>
                <div className=''>My clients said...</div>
              </h2>
            </FadeIn>



            <FadeIn bounce={0} duration={0.5} distance={40} once={false}>
              <div className="relative max-w-screen-xl py-20 mx-auto mt-20 bg-gradient-to-b from-white to-transparent rounded-xl">
                <Swiper
                  slidesPerView={'auto'}
                  className=' w-full h-[320px]'
                  onSlideChange={(swiper) => setSelectedSlide(swiper.activeIndex)}
                >

                  {testimonials.map(({ initials, name, review, thumb, title }) => (<SwiperSlide
                    className={`px-8 sm:px-16 lg:px-32 h-full cursor-grab transition duration-300 w-full flex flex-col  font-semibold text-gray-800`}
                  >
                    <p className='text-xl leading-snug sm:text-3xl'>
                      {review}
                    </p>
                    <div className="flex items-center mt-auto">
                      {thumb ? <Image width={48} height={48} src={thumb.url} className='mr-4 rounded-full ' alt="" />
                        :
                        <div className='grid w-12 h-12 mr-4 text-xl font-black text-gray-500 bg-gray-200 rounded-full place-items-center' children={'C'} />
                      }
                      <div className="ml-8">
                        <div className="flex flex-col text-lg">
                          {name}
                        </div>
                        <div className="text-sm">
                          {title}
                        </div>
                      </div>

                    </div>
                  </SwiperSlide>))}

                </Swiper>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
    </Layout>
  );
}


export const getStaticProps: GetStaticProps = async (ctx) => {
  const projects = await datoCmsApi.getHomeProjects()
  const testimonials = await datoCmsApi.getAllTestimonials()

  return {
    props: {
      projects, testimonials
    }
  }
}