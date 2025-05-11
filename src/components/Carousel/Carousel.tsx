import { useCallback, useEffect, useRef, useState, type FC } from "react"
import '../../pages/app/App.css'

export default function Carousel<T>({visible, items, Renderer} : ICarouselProps<T>){

    const [position, setPosition] = useState(0)
    const frameRef = useRef<number | null>(null)
    const lastTime = useRef<number>(performance.now())
    const carouselTrackRef = useRef<HTMLDivElement | null>(null)

    const animate = useCallback((time : number) => {
        const delta = time - lastTime.current;
        lastTime.current = time;
        setPosition(pos => {
            if(carouselTrackRef.current == null) return 0
            const next = pos + delta * 0.2;
            if (next >= (carouselTrackRef.current as HTMLDivElement).getBoundingClientRect().width / 2 + 8 /* gap/2 */) return 0;
            return next;
        });

        frameRef.current = requestAnimationFrame(animate);
    }, [setPosition]);

    useEffect(() => {
        frameRef.current = requestAnimationFrame(animate)
        return () => {
            if(frameRef.current) cancelAnimationFrame(frameRef.current ?? 0)
        }
    }, [animate])

    return(
        <div className={'flex flex-row w-full h-[405px] mt-[50px] overflow-x-hidden relative z-20' + (visible ? ' translate-y-[0px] opacity-100 heroTextTransition delay3s' : ' translate-y-[50px] opacity-0 heroTextTransition delay3s')}>
            <div ref={carouselTrackRef} className={`flex flex-row gap-x-[16px] absolute`} style={{transform:`translateX(-${position}px)`}}>
                {
                    items.map((item, index) => 
                        <Renderer key={index} item={item} index={index}/>
                    )
                }
            </div>
        </div>
    )
}

interface ICarouselProps<T>{
    items : T[]
    visible : boolean
    Renderer : FC<IRendererProps<T>>
}

export interface IRendererProps<T>{
    item : T
    index : number
}