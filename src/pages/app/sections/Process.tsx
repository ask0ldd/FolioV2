import '../App.css'
import '../../../styles/Process.css'

export default function Process(){
    return(
        <section className='flex flex-col w-full items-center py-[100px]'>
            <div className='flex px-[2px] py-[2px] bg-[#EFF8FF] rounded-full'>
                <span className='flex flex-row gap-x-[10px] justify-center items-center h-[40px] bg-[#EFF8FF] border-1 border-[#D8DFE5] px-[30px] rounded-full'>
                    <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.8" d="M0.726614 4.41063C0.654774 4.33887 0.597783 4.25366 0.558899 4.15986C0.520014 4.06605 0.5 3.96551 0.5 3.86397C0.5 3.76243 0.520014 3.66188 0.558899 3.56808C0.597783 3.47428 0.654774 3.38906 0.726614 3.3173L3.8173 0.226615C3.92536 0.118432 4.0631 0.0447444 4.21306 0.0148803C4.36302 -0.0149838 4.51848 0.000318725 4.65974 0.0588505C4.801 0.117382 4.92172 0.216512 5.00661 0.343689C5.09151 0.470866 5.13676 0.620372 5.13664 0.77328V3.0913H16.7267C16.9316 3.0913 17.1282 3.1727 17.2731 3.31761C17.418 3.46251 17.4994 3.65904 17.4994 3.86397C17.4994 4.06889 17.418 4.26543 17.2731 4.41033C17.1282 4.55523 16.9316 4.63664 16.7267 4.63664H5.13664V6.95466C5.13676 7.10756 5.09151 7.25707 5.00661 7.38425C4.92172 7.51142 4.801 7.61055 4.65974 7.66909C4.51848 7.72762 4.36302 7.74292 4.21306 7.71306C4.0631 7.68319 3.92536 7.6095 3.8173 7.50132L0.726614 4.41063ZM17.2734 12.5894L14.1827 9.49868C14.0746 9.3905 13.9369 9.31681 13.7869 9.28694C13.637 9.25708 13.4815 9.27238 13.3403 9.33091C13.199 9.38945 13.0783 9.48857 12.9934 9.61575C12.9085 9.74293 12.8632 9.89243 12.8634 10.0453V12.3634H1.27328C1.06835 12.3634 0.871823 12.4448 0.726918 12.5897C0.582014 12.7346 0.500608 12.9311 0.500608 13.136C0.500608 13.341 0.582014 13.5375 0.726918 13.6824C0.871823 13.8273 1.06835 13.9087 1.27328 13.9087H12.8634V16.2267C12.8632 16.3796 12.9085 16.5291 12.9934 16.6563C13.0783 16.7835 13.199 16.8826 13.3403 16.9411C13.4815 16.9997 13.637 17.015 13.7869 16.9851C13.9369 16.9553 14.0746 16.8816 14.1827 16.7734L17.2734 13.6827C17.3452 13.6109 17.4022 13.5257 17.4411 13.4319C17.48 13.3381 17.5 13.2376 17.5 13.136C17.5 13.0345 17.48 12.9339 17.4411 12.8401C17.4022 12.7463 17.3452 12.6611 17.2734 12.5894Z" fill="#0E1C29"/>
                    </svg>
                    Services
                </span>
            </div>
            <h2 className='dm-sans text-[56px] mt-[12px]'>From Vision to Execution</h2>
            <span className='mt-[20px]'>A refined design process that ensures consistency, creativity for every project.</span>
            <div className='flex flex-row flex-wrap gap-[25px] w-full max-w-[1000px] mt-[40px]'>
                <ProcessStep step={1} title={'Let\'s Get In Touch'} text={'Start by reaching out through our contact page. Fill out the form or book a call to discuss your project.'}/>
                <ProcessStep step={2} title={'Grab Your Designs'} text={'Tell me your unique vision, and I’ll create stunning, functional designs that perfectly align with your goals.'}/>
                <ProcessStep step={3} title={'Kickstart Development'} text={'I expertly transform your designs into a powerful, scalable solution, fully ready to launch.'}/>
                <ProcessStep step={4} title={'And Hand Over'} text={'Receive a fully tested, polished, and high-quality product tailored to your needs with ongoing support.'}/>
            </div>

            <div className='flex gap-x-[15px] mt-[50px] translate-x-[0px] opacity-100'>
                <a href="#resume">
                    <button className='blueButton text-[#FFFFFF] font-semibold hover:cursor-pointer'>
                        <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.125 0.999981V9.12473C12.1251 9.24841 12.0885 9.36934 12.0198 9.47221C11.9512 9.57508 11.8535 9.65526 11.7393 9.7026C11.625 9.74994 11.4993 9.76232 11.378 9.73817C11.2567 9.71401 11.1453 9.65441 11.0578 9.5669L7.43764 5.94592L1.9425 11.4418C1.82523 11.5591 1.66618 11.625 1.50033 11.625C1.33448 11.625 1.17543 11.5591 1.05815 11.4418C0.940883 11.3246 0.875 11.1655 0.875 10.9997C0.875 10.8338 0.940883 10.6748 1.05815 10.5575L6.55408 5.06236L2.9331 1.44216C2.84559 1.35475 2.78599 1.24334 2.76183 1.12204C2.73768 1.00074 2.75006 0.875005 2.7974 0.760744C2.84474 0.646484 2.92492 0.548839 3.02779 0.480172C3.13066 0.411505 3.25159 0.374903 3.37527 0.375H11.5C11.6658 0.375 11.8247 0.440846 11.9419 0.558053C12.0592 0.67526 12.125 0.834226 12.125 0.999981Z" fill="white"/>
                        </svg>
                        Contact Me
                    </button>
                </a>
                <button className='greyButton font-semibold'>
                    <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.013 7.44192L10.268 13.187C10.1806 13.2745 10.0692 13.3341 9.94789 13.3583C9.82659 13.3825 9.70085 13.3702 9.58658 13.3228C9.47231 13.2755 9.37464 13.1954 9.30595 13.0925C9.23726 12.9897 9.20063 12.8687 9.2007 12.7451L9.20125 7.62477L1.4294 7.62532C1.26355 7.62532 1.10449 7.55944 0.987223 7.44217C0.869951 7.3249 0.804068 7.16584 0.804068 7C0.804068 6.83415 0.869951 6.67509 0.987223 6.55782C1.10449 6.44055 1.26355 6.37467 1.4294 6.37467L9.20125 6.37522L9.2007 1.25493C9.20063 1.13125 9.23726 1.01033 9.30595 0.907476C9.37464 0.804624 9.47231 0.724465 9.58658 0.677148C9.70085 0.62983 9.82659 0.617482 9.94789 0.641666C10.0692 0.665849 10.1806 0.725478 10.268 0.813002L16.013 6.55807C16.1302 6.67527 16.1961 6.83424 16.1961 7C16.1961 7.16575 16.1302 7.32472 16.013 7.44192Z" fill="#0E1C29"/>
                    </svg>
                    See Projects
                </button>
            </div>
        </section>
    )
}

function ProcessStep({title, text, step} : IProcessStep){
    return(
        <div className="flex flex-col flex-[40%] shrink grow bg-[#F6FBFF] whiteBlockShadow p-[20px] rounded-[20px]">
            <div className='flex justify-center text-[20px] font-semibold items-center bg-[#0E1C29] w-[50px] h-[50px] rounded-full text-[#FFFFFF] stepShadow'>0{step}</div>
            <h3 className='text-[24px] text-[#0E1C29] font-medium mt-[20px]'>{title}</h3>
            <span className='text-[16px] text-[#0E1C29] mt-[10px]'>{text}</span>
            <div className='w-full h-[0px] border-[#5E788F80] border-0 border-b-1 border-dashed mt-[15px]'></div>
            <button className='flex text-[13px] font-medium w-[66px] h-[35px] bg-[#E1E7EC] rounded-full justify-center items-center ml-auto mt-[20px]'>Step {step}</button>
        </div>        
    )
}

interface IProcessStep{
    step : number
    title : string
    text : string
}