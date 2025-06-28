import '../App.css'
import '../../../styles/Process.css'
import '../../../styles/HappyClients.css'
import client1 from '../../../assets/client1.png'
import client2 from '../../../assets/client2.png'
import client3 from '../../../assets/client3.png'
import client4 from '../../../assets/client4.png'

export default function HappyClients(){
    return(
        <section className='flex flex-col w-full items-center py-[100px]'>
            <div className='flex px-[2px] py-[2px] bg-[#EFF8FF] rounded-full'>
                <span className='flex flex-row gap-x-[10px] justify-center items-center h-[40px] bg-[#EFF8FF] border-1 border-[#D8DFE5] px-[30px] rounded-full'>
                    <svg viewBox="0 0 256 256" width={18} height={18} style={{transform:'translateY(1px)'}} focusable="false" color="#0e1c29">
                        <g color="#0e1c29">
                            <path d="M240,56V200a8,8,0,0,1-8,8H8a8,8,0,0,1,0-16H56V152a8,8,0,0,1,8-8h48V104a8,8,0,0,1,8-8h48V56a8,8,0,0,1,8-8h56A8,8,0,0,1,240,56Z"></path>
                        </g>
                    </svg>
                    Services
                </span>
            </div>
            <h2 className='dm-sans text-[56px] mt-[12px]'>From Vision to Execution</h2>
            <span className='mt-[20px]'>A refined design process that ensures consistency, creativity for every project.</span>
            
            <div className='flex flex-row flex-wrap gap-[25px] w-full max-w-[1200px] mt-[40px]'>
                
                <div className='relative h-[380px] max-w-[350px] flex-[40%] shrink grow bg-amber-200 overflow-hidden rounded-[12px]'>
                    <img src={client1} className='absolute top-0 left-0 h-full w-auto object-cover'/>
                    <div className='relative w-full h-full'>
                        {blurLayers.map((layer, idx) => (
                            <div
                            key={idx}
                            style={{
                                position: "absolute",
                                inset: 0,
                                zIndex: layer.zIndex,
                                backdropFilter: `blur(${layer.blur})`,
                                WebkitBackdropFilter: `blur(${layer.blur})`,
                                maskImage: layer.mask,
                                WebkitMaskImage: layer.mask,
                                borderRadius: "12px",
                                pointerEvents: "none"
                            }}
                            />
                        ))}
                    </div>
                </div>
                <div className='relative h-[380px] flex-[40%] shrink grow bg-amber-200 overflow-hidden rounded-[12px]'>
                    <img src={client2} className='absolute top-0 left-0 w-full object-cover'/>
                    <div className='relative w-full h-full'>
                        {blurLayers.map((layer, idx) => (
                            <div
                            key={idx}
                            style={{
                                position: "absolute",
                                inset: 0,
                                zIndex: layer.zIndex,
                                backdropFilter: `blur(${layer.blur})`,
                                WebkitBackdropFilter: `blur(${layer.blur})`,
                                maskImage: layer.mask,
                                WebkitMaskImage: layer.mask,
                                borderRadius: "12px",
                                pointerEvents: "none"
                            }}
                            />
                        ))}
                    </div>
                </div>
                
                <div className='relative h-[380px] flex-[40%] shrink grow bg-amber-200 overflow-hidden rounded-[12px]'>
                    <img src={client3} className='absolute top-0 left-0 w-full object-cover'/>
                    <div className='relative w-full h-full'>
                        {blurLayers.map((layer, idx) => (
                            <div
                            key={idx}
                            style={{
                                position: "absolute",
                                inset: 0,
                                zIndex: layer.zIndex,
                                backdropFilter: `blur(${layer.blur})`,
                                WebkitBackdropFilter: `blur(${layer.blur})`,
                                maskImage: layer.mask,
                                WebkitMaskImage: layer.mask,
                                borderRadius: "12px",
                                pointerEvents: "none"
                            }}
                            />
                        ))}
                    </div>
                </div>
                <div className='relative h-[380px] flex-[40%] shrink grow bg-amber-200 overflow-hidden rounded-[12px]'>
                    <img src={client4} className='absolute top-0 left-0 w-full object-cover'/>
                    <div className='relative w-full h-full'>
                        {blurLayers.map((layer, idx) => (
                            <div
                            key={idx}
                            style={{
                                position: "absolute",
                                inset: 0,
                                zIndex: layer.zIndex,
                                backdropFilter: `blur(${layer.blur})`,
                                WebkitBackdropFilter: `blur(${layer.blur})`,
                                maskImage: layer.mask,
                                WebkitMaskImage: layer.mask,
                                borderRadius: "12px",
                                pointerEvents: "none"
                            }}
                            />
                        ))}
                    </div>
                </div>

            </div>

        </section>
    )
}

const blurLayers = [
  {
    zIndex: 1,
    blur: "0.5px",
    mask: "linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 25%, rgba(0, 0, 0, 0) 37.5%)"
  },
  {
    zIndex: 2,
    blur: "0.5625px",
    mask: "linear-gradient(rgba(0, 0, 0, 0) 12.5%, rgb(0, 0, 0) 25%, rgb(0, 0, 0) 37.5%, rgba(0, 0, 0, 0) 50%)"
  },
  {
    zIndex: 3,
    blur: "1.125px",
    mask: "linear-gradient(rgba(0, 0, 0, 0) 25%, rgb(0, 0, 0) 37.5%, rgb(0, 0, 0) 50%, rgba(0, 0, 0, 0) 62.5%)"
  },
  {
    zIndex: 4,
    blur: "2.25px",
    mask: "linear-gradient(rgba(0, 0, 0, 0) 37.5%, rgb(0, 0, 0) 50%, rgb(0, 0, 0) 62.5%, rgba(0, 0, 0, 0) 75%)"
  },
  {
    zIndex: 5,
    blur: "4.5px",
    mask: "linear-gradient(rgba(0, 0, 0, 0) 50%, rgb(0, 0, 0) 62.5%, rgb(0, 0, 0) 75%, rgba(0, 0, 0, 0) 87.5%)"
  },
  {
    zIndex: 6,
    blur: "9px",
    mask: "linear-gradient(rgba(0, 0, 0, 0) 62.5%, rgb(0, 0, 0) 75%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)"
  },
  {
    zIndex: 7,
    blur: "18px",
    mask: "linear-gradient(rgba(0, 0, 0, 0) 75%, rgb(0, 0, 0) 87.5%, rgb(0, 0, 0) 100%)"
  },
  {
    zIndex: 8,
    blur: "36px",
    mask: "linear-gradient(rgba(0, 0, 0, 0) 87.5%, rgb(0, 0, 0) 100%)"
  }
];