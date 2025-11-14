import type { IRendererProps } from "./Carousel"
import '../../styles/CarouselItem.css'
import React from "react"
import { Link } from "react-router"

function CarouselItem({item} : IRendererProps<ICarouselItem>){
    return(
        <Link to={"/project/1"}>
        <div className='flex flex-col shrink-0 w-[475px] opacity-100 h-full border-1 border-[#cBcDcE] hover:border-[#bBbDbE] rounded-[8px] pt-[16px] py-[15px] items-center hover:bg-[#DEE3E6ee] cursor-pointer'>
            <img className='carousselImg' alt="project 1 design" src={item.image}/>
            <span className='flex flex-row mt-[18px] justify-between w-full px-[15px]'>
                <span className="text-[14px]">{item.title}</span>
                <svg className="translate-y-[4px]" width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 0.888861V12.4441C16 12.6798 15.9064 12.9059 15.7397 13.0726C15.573 13.2393 15.3469 13.3329 15.1111 13.3329C14.8754 13.3329 14.6493 13.2393 14.4826 13.0726C14.3159 12.9059 14.2223 12.6798 14.2223 12.4441V3.03435L1.51823 15.7395C1.35144 15.9063 1.12523 16 0.889356 16C0.653484 16 0.427273 15.9063 0.260486 15.7395C0.0936996 15.5727 0 15.3465 0 15.1106C0 14.8748 0.0936996 14.6486 0.260486 14.4818L12.9656 1.77772H3.55594C3.3202 1.77772 3.09411 1.68407 2.92742 1.51738C2.76073 1.35069 2.66708 1.1246 2.66708 0.888861C2.66708 0.653121 2.76073 0.427035 2.92742 0.260342C3.09411 0.0936478 3.3202 0 3.55594 0H15.1111C15.3469 0 15.573 0.0936478 15.7397 0.260342C15.9064 0.427035 16 0.653121 16 0.888861Z" fill="#171717"/>
                </svg>
            </span>
        </div>
        </Link>
    )
}

export default React.memo(CarouselItem)

interface ICarouselItem{
    image : string
    title : string
    link : string
}