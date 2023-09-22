'use client'

import CircleButton from '@/components/circle_button';
import GameBlock from '@/components/game_block';
import NewsBlock from '@/components/news_block';
import Separator from '@/components/separator';
import TeamBlock from '@/components/team_block';
import { useChangeThemeOnIntersect } from '@/utils/utils';
import { useState, useEffect, useRef } from 'react';

function Hero() {
  const [heroIndex, setHeroIndex] = useState<number>(0);
  const heroWords = ['worlds', 'journeys', 'passion']
  useEffect(() => {
    const interval = setInterval(() => {
      if(heroWords[heroIndex] === 'passion') {
        clearInterval(interval);
      }
      else{
        setHeroIndex((prev) => prev + 1)
      }
    }, 2000);
    return() => clearInterval(interval);
  }, [heroIndex])

  return(
<section className="relative h-[800px] overflow-hidden">
  <div className="absolute w-full h-full object-cover z-20 vignette"></div>
  <div className="absolute w-full h-full object-cover z-20 bg-black" style={{opacity: 0.3}}></div>
  {/* Video Background */}
  <video
    className="absolute w-full h-full object-cover content-center z-10"
    preload="metadata"
    autoPlay
    muted
    playsInline
    loop
  >
    <source src="/2021GameAnimationReel720.mp4" type="video/mp4" />
  </video>
  {/* Hero Content */}
  <div className="relative bottom z-20 flex flex-col-reverse content-end w-full h-full p-32 text-white">
    <h5 className="absolute top-0 left-1/2 transform -translate-x-1/2 m-10">Home</h5>
    <h1>We create {heroWords[heroIndex]}{heroIndex === 2 && <span className="text-secondary-force">.</span>}</h1>
  </div>
</section>
  )
}

function About({ onChangeTheme }: any)
{
  const barRef = useRef(null);
  useChangeThemeOnIntersect(barRef, "light", onChangeTheme)
  return(
    <section className="flex-col mx-auto h-full container p-16 font-400">
      <h3><span className="text-secondary">Dive deep with Passonix.</span> Where passion fuels every indie story we tell<span className="text-secondary">.</span></h3>
        <CircleButton padding={0} margin={20} fullWidth={false}  text="About Passionix" onClick={null}/>
      <div className="mt-20 mb-20">
        <h3>Latest news.</h3>
      </div>
      <div className="flex content-between mt-20 mb-20" ref={barRef}>
        <NewsBlock img="https://i.pinimg.com/originals/71/9e/80/719e80760999b4c355a723224120eb07.png" headline='Announcement' text="Lorem ipsum"/>
        <NewsBlock img="https://images.hdqwalls.com/download/small-memory-lp-1920x1080.jpg" headline='Announcement' text="Lorem ipsum"/>
        <NewsBlock img="https://i.pinimg.com/originals/d8/b2/30/d8b23005b7d881a9f2d289d1536355a3.jpg" headline='Announcement' text="Lorem ipsum"/>
      </div>
      <Separator height={1} bgColor='bg-primary'/>
      <CircleButton padding={0} margin={20} fullWidth={false}  text="View All News" onClick={null}/>
    </section>
  )
}

const mainTemp ="https://rovio.wpenginepowered.com/wp-content/uploads/2020/07/AB2_Characters_small-1440x664.32-c-center.png";
const titleTemp = "https://rovio.wpenginepowered.com/wp-content/uploads/2020/07/4TopGameLogo_716x254-716x254-c-center.png";
function OurGames({ onChangeTheme }: any)
{
  const barRef = useRef(null);
  useChangeThemeOnIntersect(barRef, "dark", onChangeTheme)
  return(
    <section className="flex-col mx-auto h-full container p-16 font-400" ref={barRef}>
      <h3 className='mb-20'>Our Games.</h3>
      <GameBlock imgLeft={true} imgMain={mainTemp} imgTitle={titleTemp} gameName="Angry Birds" description="Get to know all of the iconic characters and experience the fun gameplay that has captured the hearts of millions of players." onClick={null}/>
      <GameBlock imgLeft={false} imgMain={mainTemp} imgTitle={titleTemp} gameName="Angry Birds" description="Get to know all of the iconic characters and experience the fun gameplay that has captured the hearts of millions of players." onClick={null}/>
      <Separator height={1} bgColor='bg-primary'/>
      <CircleButton padding={0} margin={20} fullWidth={false}  text="View All Games" onClick={null}/>
    </section>
  )
}

function MeetUs({ onChangeTheme }: any){
  const barRef = useRef(null);
  useChangeThemeOnIntersect(barRef, "light", onChangeTheme)
  return(
  <section className="flex-col mx-auto h-full container p-16 font-400" ref={barRef}>
    <h3 className=''>Meet the Visionaries.</h3>
    <h5 className='text-gray-500'>Dive deep into the core of Passonix - the creators behind our adventures.</h5>
    <TeamBlock />
    {/* <Separator height={1} /> */}
    <div ref={barRef}>
    {/* <CircleButton padding={0} margin={20} fullWidth={false}  text="View All" onClick={null} /> */}
    </div>
  </section>
  )
}

function Newsletter({ onChangeTheme }: any) {
  const barRef = useRef(null);
  useChangeThemeOnIntersect(barRef, "light", onChangeTheme)
  return(
    <section className='bg-dark mx-auto h-full p-24 font-400' >
      <div className="flex place-content-evenly p-20 items-center mx-auto">
        <div className="flex-col">
          <h3 className='text-white'>Newsletter</h3>
          <h5 className='text-gray-500'>Subscribe here for all the news that's fit to fly - delivered straight to your inbox! You can opt out anytime.</h5>
        </div>
        <div className="flex-col w-1/2 justify-center text-xl ml-10">
            <input
              type="email"
              name="email"
              id="email"
              className="pl-10 w-full h-20"
              placeholder="you@example.com"
            />
          <div className="pt-10">
            <button className="rounded-full bg-transparent px-10 py-3 text-lg font-semibold text-gray shadow-sm ring-2 ring-inset ring-gray-300 hover:ring-gray-600 uppercase w-full" onClick={() => null}>Submit</button>
          </div>
        </div>
      </div>
    </section>

  )
}

export default function Home() {
  const [theme, setTheme] = useState<string>("light");

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  },[theme])

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
  }

  return (
    <main>
      <Hero />
      <About onChangeTheme={handleThemeChange}/>
      <OurGames onChangeTheme={handleThemeChange}/>
      <MeetUs onChangeTheme={handleThemeChange}/>
      <Newsletter onChangeTheme={handleThemeChange}/>
    </main>
  )
}
