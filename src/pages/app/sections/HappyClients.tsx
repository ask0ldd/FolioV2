import '../../App.css'
import '../../../styles/Process.css'
import '../../../styles/HappyClients.css'
import client1 from '../../../assets/client1.png'
import client2 from '../../../assets/client2.png'
import client3 from '../../../assets/client3.png'
import client4 from '../../../assets/client4.png'
import avatar1 from '../../../assets/avatars/avatar1.png'
import avatar2 from '../../../assets/avatars/avatar2.png'
import avatar3 from '../../../assets/avatars/avatar3.png'
import avatar4 from '../../../assets/avatars/avatar4.png'

export default function HappyClients(){
    return(
        <section className='flex flex-col w-full items-center py-[70px] md:py-[100px] px-[20px] bg-[#dde4e9]'>
            <div className='flex px-[2px] py-[2px] bg-[#EFF8FF] rounded-full'>
                <span className='flex flex-row gap-x-[10px] text-[14px] justify-center items-center h-[40px] bg-[#EFF8FF] border-1 border-[#D8DFE5] px-[30px] rounded-full'>
                    <svg viewBox="0 0 256 256" width={16} height={16} style={{transform:'translateY(1px)'}} focusable="false" color="#0e1c29">
                        <g color="#0e1c29">
                            <path d="M240,56V200a8,8,0,0,1-8,8H8a8,8,0,0,1,0-16H56V152a8,8,0,0,1,8-8h48V104a8,8,0,0,1,8-8h48V56a8,8,0,0,1,8-8h56A8,8,0,0,1,240,56Z"></path>
                        </g>
                    </svg>
                    Services
                </span>
            </div>
            <h2 className='dm-sans text-[36px] leading-[2rem] text-center md:text-[44px] xl:text-[56px] mt-[12px] md:mt-[28px]'>Hear from Satisfied Clients</h2>
            <span className='text-[14px] md:text-[16px] mt-[18px] md:mt-[24px] text-center'>Discover how clients have elevated their digital presence through expert designs.</span>
            
            <div className='flex flex-col md:flex-row md:flex-wrap gap-[25px] w-full max-w-[1200px] mt-[40px]'>
                
                <div className='relative h-[380px] w-full md:max-w-[350px] md:flex-[40%] md:shrink md:grow bg-amber-200 overflow-hidden rounded-[12px] greyShadow'>
                    <img src={client1} className='absolute top-0 left-0 h-full w-full md:w-auto object-cover'/>
                    <div className='relative flex flex-col w-full h-[80%] mt-[100px] z-10'>
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
                    <div className='absolute top-0 left-0 flex flex-col justify-end text-white z-20 p-[36px] h-full'>
                        <span className='text-[12px] HappyClientsInnerWhiteShadows px-[10px] py-[6px] rounded-full w-fit'>Product Design</span>
                        <span className='text-[36px] mt-[7px]'>NeuroScope</span>
                        <span>Exceptional craftsmanship transformed our ideas into reality</span>
                    </div>
                </div>
                <div className='relative h-[380px] w-full max-h-[380px] md:flex-[40%] md:shrink md:grow bg-amber-200 overflow-hidden rounded-[12px] greyShadow'>
                    <img src={client2} className='absolute top-0 left-0 w-full object-cover'/>
                    <div className='relative w-full h-[80%] mt-[100px]'>
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
                    <div className='absolute top-0 left-0 flex flex-col justify-end text-white z-20 p-[36px] h-full'>
                        <span className='text-[12px] HappyClientsInnerWhiteShadows px-[10px] py-[6px] rounded-full w-fit'>Digital Branding</span>
                        <span className='text-[36px] mt-[7px]'>NovaWorks<span className='font-extralight'>®</span></span>
                        <span>Impecable design and precision turned our ideas into stunning reality</span>
                    </div>
                </div>
                
                <div className='relative h-[380px] md:flex-[40%] md:shrink md:grow bg-amber-200 overflow-hidden rounded-[12px] greyShadow'>
                    <img src={client3} className='absolute top-0 left-0 w-full object-cover'/>
                    <div className='relative w-full h-[80%] mt-[100px]'>
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
                    <div className='absolute top-0 left-0 flex flex-col justify-end text-white z-20 p-[36px] h-full'>
                        <span className='text-[12px] HappyClientsInnerWhiteShadows px-[10px] py-[6px] rounded-full w-fit'>UI/UX Design</span>
                        <span className='text-[36px] mt-[7px]'>CosmoVision™</span>
                        <span>A perfect blend of creativity and functionality exceeded expectations</span>
                    </div>
                </div>
                <div className='relative h-[380px] md:flex-[40%] md:shrink md:grow bg-amber-200 overflow-hidden rounded-[12px] greyShadow'>
                    <img src={client4} className='absolute top-0 left-0 w-full h-full md:h-auto object-cover'/>
                    <div className='relative w-full h-[80%] mt-[100px]'>
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
                    <div className='absolute top-0 left-0 flex flex-col justify-end text-white z-20 p-[36px] h-full'>
                        <span className='text-[12px] HappyClientsInnerWhiteShadows px-[10px] py-[6px] rounded-full w-fit'>Interface Design</span>
                        <span className='text-[36px] mt-[7px]'>LumiSphere<span className='font-extralight'>®</span></span>
                        <span>Brilliant design and meticulous execution shine effortlessly made our ideas</span>
                    </div>
                </div>

            </div>

            <div className='flex flex-row mt-[44px] gap-x-[16px]'>
                <div className='flex flex-row h-[28px]'>
                    <img src={avatar1} className='rounded-full outline-2 outline-white HappyClientsAvatarsShadows'/>
                    <img src={avatar2} className='rounded-full outline-2 outline-white ml-[-4px] HappyClientsAvatarsShadows'/>
                    <img src={avatar3} className='rounded-full outline-2 outline-white ml-[-4px] HappyClientsAvatarsShadows'/>
                    <img src={avatar4} className='rounded-full outline-2 outline-white ml-[-4px] HappyClientsAvatarsShadows'/>
                </div>
                <span>Trusted by 5,000 + innovators worldwide</span>
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