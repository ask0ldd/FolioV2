import '../../../styles/TellMeAbout.css'

function TellMeAbout(){
    return(
        <section className='flex flex-col w-full pt-[40px] pb-[100px] items-center overflow-hidden bg-[#D8DFE5]'>

            <div className="w-[85px] h-[85px] p-[10px] handshakeIconContainer rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="var(--token-d4c0a0e6-8fba-45bc-8f6f-215e608cd0df, rgb(255, 255, 255))" className="handshakeIcon"><g color="var(--token-d4c0a0e6-8fba-45bc-8f6f-215e608cd0df, rgb(255, 255, 255))"><path d="M254.3,107.91,228.78,56.85a16,16,0,0,0-21.47-7.15L182.44,62.13,130.05,48.27a8.14,8.14,0,0,0-4.1,0L73.56,62.13,48.69,49.7a16,16,0,0,0-21.47,7.15L1.7,107.9a16,16,0,0,0,7.15,21.47l27,13.51,55.49,39.63a8.06,8.06,0,0,0,2.71,1.25l64,16a8,8,0,0,0,7.6-2.1l40-40,15.08-15.08,26.42-13.21a16,16,0,0,0,7.15-21.46Zm-54.89,33.37L165,113.72a8,8,0,0,0-10.68.61C136.51,132.27,116.66,130,104,122L147.24,80h31.81l27.21,54.41Zm-41.87,41.86L99.42,168.61l-49.2-35.14,28-56L128,64.28l9.8,2.59-45,43.68-.08.09a16,16,0,0,0,2.72,24.81c20.56,13.13,45.37,11,64.91-5L188,152.66Zm-25.72,34.8a8,8,0,0,1-7.75,6.06,8.13,8.13,0,0,1-1.95-.24L80.41,213.33a7.89,7.89,0,0,1-2.71-1.25L51.35,193.26a8,8,0,0,1,9.3-13l25.11,17.94L126,208.24A8,8,0,0,1,131.82,217.94Z"></path></g></svg>
            </div>

            <h2 className='dm-sans text-[36px] leading-[4.25rem] text-center md:text-[44px] xl:text-[56px] mt-[12px] md:mt-[28px] max-w-[800px]'>Tell Me About Your Next Creative Project</h2>

            <span className='mt-[15px] max-w-[600px] text-center translate-x-[0px] opacity-100 heroTextTransition delay2s'>
                Let’s create captivating digital experiences that engage audiences and drive meaningful brand interactions across diverse platforms
            </span>

            <div className='flex gap-x-[15px] text-[14px] mt-[30px] px-[20px] w-full md:max-w-[340px] md:px-0 translate-x-[0px] opacity-100 heroTextTransition delay2-5s'>
                <a href="#resume" className="w-full">
                    <button className='blueButton text-[#FFFFFF] font-semibold hover:cursor-pointer w-full'>
                        <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.125 0.999981V9.12473C12.1251 9.24841 12.0885 9.36934 12.0198 9.47221C11.9512 9.57508 11.8535 9.65526 11.7393 9.7026C11.625 9.74994 11.4993 9.76232 11.378 9.73817C11.2567 9.71401 11.1453 9.65441 11.0578 9.5669L7.43764 5.94592L1.9425 11.4418C1.82523 11.5591 1.66618 11.625 1.50033 11.625C1.33448 11.625 1.17543 11.5591 1.05815 11.4418C0.940883 11.3246 0.875 11.1655 0.875 10.9997C0.875 10.8338 0.940883 10.6748 1.05815 10.5575L6.55408 5.06236L2.9331 1.44216C2.84559 1.35475 2.78599 1.24334 2.76183 1.12204C2.73768 1.00074 2.75006 0.875005 2.7974 0.760744C2.84474 0.646484 2.92492 0.548839 3.02779 0.480172C3.13066 0.411505 3.25159 0.374903 3.37527 0.375H11.5C11.6658 0.375 11.8247 0.440846 11.9419 0.558053C12.0592 0.67526 12.125 0.834226 12.125 0.999981Z" fill="white"/>
                        </svg>
                        Contact Me
                    </button>
                </a>
                <button className='greyButton font-semibold w-full'>
                    <svg className="mt-[2px]" width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.013 7.44192L10.268 13.187C10.1806 13.2745 10.0692 13.3341 9.94789 13.3583C9.82659 13.3825 9.70085 13.3702 9.58658 13.3228C9.47231 13.2755 9.37464 13.1954 9.30595 13.0925C9.23726 12.9897 9.20063 12.8687 9.2007 12.7451L9.20125 7.62477L1.4294 7.62532C1.26355 7.62532 1.10449 7.55944 0.987223 7.44217C0.869951 7.3249 0.804068 7.16584 0.804068 7C0.804068 6.83415 0.869951 6.67509 0.987223 6.55782C1.10449 6.44055 1.26355 6.37467 1.4294 6.37467L9.20125 6.37522L9.2007 1.25493C9.20063 1.13125 9.23726 1.01033 9.30595 0.907476C9.37464 0.804624 9.47231 0.724465 9.58658 0.677148C9.70085 0.62983 9.82659 0.617482 9.94789 0.641666C10.0692 0.665849 10.1806 0.725478 10.268 0.813002L16.013 6.55807C16.1302 6.67527 16.1961 6.83424 16.1961 7C16.1961 7.16575 16.1302 7.32472 16.013 7.44192Z" fill="#0E1C29"/>
                    </svg>
                    <span className="mt-[1px]">My Projects</span>
                </button>
            </div>
        </section>
    )
}

export default TellMeAbout