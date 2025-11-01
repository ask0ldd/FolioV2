import { useEffect, useState } from "react";
import Carousel from "../../../components/Carousel/Carousel";
import design1 from '../../../assets/design1.jpg'
import CarouselItem from "../../../components/Carousel/CarouselItem";

const items = Array.from({ length: 8 }, () => ({ image: design1, title: "Portfoy", link: "" }))

export default function Hero(){

    const [visible, setVisible] = useState<boolean>(false)

    useEffect(() => {
        if(!visible) setVisible(true)
    }, [])

    return (
        <section className='flex flex-col w-full pt-[40px] pb-[100px] items-center overflow-hidden'>
            <div className={'flex flex-row gap-x-[20px] items-center heroTextTransition' + (visible ? ' translate-x-[0px] opacity-100 delay1s' : ' translate-x-[-25px] opacity-0 delay1s')} >
            <div className='h-[56px] md:h-[68px] xl:h-[88px] w-[55px] md:w-[67px] xl:w-[86px] rounded-[16px] greyShadow askPic shrink-0'>
            </div>
            <h1 className='instrument text-[40px] md:text-[72px] xl:text-[100px] w-fit leading-snug heroTextGradient'>I'm Cedric, UI Designer</h1>
            </div>
            <div className={'flex flex-row gap-x-[20px] items-center' + (visible ? ' translate-x-[0px] opacity-100 heroTextTransition delay1-5s' : ' translate-x-[-25px] opacity-0 heroTextTransition delay1-5s')}>
            <h1 className='instrument text-[40px] md:text-[72px] xl:text-[100px] w-fit leading-none heroTextGradient'>& Full Stack Developer</h1>
            <div className='h-[56px] md:h-[68px] xl:h-[88px] w-[55px] md:w-[67px] xl:w-[86px] bg-neutral-400 rounded-[16px] greyShadow cloudIcon shrink-0'>
            </div>
            <div className="h-[56px] md:h-[68px] xl:h-[88px] w-[55px] md:w-[67px] xl:w-[86px] bg-neutral-400 rounded-[16px] greyShadow moonIcon shrink-0">
            </div>
            </div>
            <span className={'mt-[15px] max-w-[434px] text-center' + (visible ? ' translate-x-[0px] opacity-100 heroTextTransition delay2s' : ' translate-x-[-25px] opacity-0 heroTextTransition delay2s')}>
            I specialize in creating thoughtful and impactful products, collaborating with startups and leading brands
            </span>

            <div className={'flex gap-x-[15px] mt-[30px]' + (visible ? ' translate-x-[0px] opacity-100 heroTextTransition delay2-5s' : ' translate-x-[-25px] opacity-0 heroTextTransition delay2-5s')}>
            <a href="#resume">
                <button className='blueButton text-[#FFFFFF] font-semibold hover:cursor-pointer'>
                <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.125 0.999981V9.12473C12.1251 9.24841 12.0885 9.36934 12.0198 9.47221C11.9512 9.57508 11.8535 9.65526 11.7393 9.7026C11.625 9.74994 11.4993 9.76232 11.378 9.73817C11.2567 9.71401 11.1453 9.65441 11.0578 9.5669L7.43764 5.94592L1.9425 11.4418C1.82523 11.5591 1.66618 11.625 1.50033 11.625C1.33448 11.625 1.17543 11.5591 1.05815 11.4418C0.940883 11.3246 0.875 11.1655 0.875 10.9997C0.875 10.8338 0.940883 10.6748 1.05815 10.5575L6.55408 5.06236L2.9331 1.44216C2.84559 1.35475 2.78599 1.24334 2.76183 1.12204C2.73768 1.00074 2.75006 0.875005 2.7974 0.760744C2.84474 0.646484 2.92492 0.548839 3.02779 0.480172C3.13066 0.411505 3.25159 0.374903 3.37527 0.375H11.5C11.6658 0.375 11.8247 0.440846 11.9419 0.558053C12.0592 0.67526 12.125 0.834226 12.125 0.999981Z" fill="white"/>
                </svg>
                My Resume
                </button>
            </a>
            <button className='greyButton font-semibold'>
                <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.013 7.44192L10.268 13.187C10.1806 13.2745 10.0692 13.3341 9.94789 13.3583C9.82659 13.3825 9.70085 13.3702 9.58658 13.3228C9.47231 13.2755 9.37464 13.1954 9.30595 13.0925C9.23726 12.9897 9.20063 12.8687 9.2007 12.7451L9.20125 7.62477L1.4294 7.62532C1.26355 7.62532 1.10449 7.55944 0.987223 7.44217C0.869951 7.3249 0.804068 7.16584 0.804068 7C0.804068 6.83415 0.869951 6.67509 0.987223 6.55782C1.10449 6.44055 1.26355 6.37467 1.4294 6.37467L9.20125 6.37522L9.2007 1.25493C9.20063 1.13125 9.23726 1.01033 9.30595 0.907476C9.37464 0.804624 9.47231 0.724465 9.58658 0.677148C9.70085 0.62983 9.82659 0.617482 9.94789 0.641666C10.0692 0.665849 10.1806 0.725478 10.268 0.813002L16.013 6.55807C16.1302 6.67527 16.1961 6.83424 16.1961 7C16.1961 7.16575 16.1302 7.32472 16.013 7.44192Z" fill="#0E1C29"/>
                </svg>
                My Projects
            </button>
            </div>

            {<Carousel items={items} visible={visible} Renderer={CarouselItem} speed={0.075}/>}

        </section>
    )
}