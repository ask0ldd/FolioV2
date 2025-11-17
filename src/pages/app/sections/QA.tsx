import '../../App.css'

export default function QA(){
    return(
        <section className='flex flex-col w-full items-center py-[70px] md:py-[100px] bg-[#D8DFE5] px-[20px]'>
            <div className='flex px-[2px] py-[2px] bg-[#EFF8FF] rounded-full'>
                <span className='flex flex-row gap-x-[10px] text-[14px] justify-center items-center h-[40px] bg-[#EFF8FF] border-1 border-[#D8DFE5] px-[30px] rounded-full'>
                    <svg viewBox="0 0 256 256" width={16} height={16} focusable="false" color="#0e1c29" style={{transform:'translateY(0.5px)'}}>
                        <g color="#0e1c29">
                            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,168a12,12,0,1,1,12-12A12,12,0,0,1,128,192Zm8-48.72V144a8,8,0,0,1-16,0v-8a8,8,0,0,1,8-8c13.23,0,24-9,24-20s-10.77-20-24-20-24,9-24,20v4a8,8,0,0,1-16,0v-4c0-19.85,17.94-36,40-36s40,16.15,40,36C168,125.38,154.24,139.93,136,143.28Z"></path>
                        </g>
                    </svg>
                    FAQS
                </span>
            </div>
            <h2 className='dm-sans text-[36px] leading-[2rem] text-center md:text-[44px] xl:text-[56px] mt-[12px] md:mt-[28px]'>Questions? Answers!</h2>
            <span className='text-[14px] md:text-[16px] mt-[18px] md:mt-[24px] text-center'>Find quick answers to the most common questions about the services offered</span>
            <div className='flex flex-wrap gap-x-[25px] w-full max-w-[1000px] mt-[40px] flex-col md:flex-row'>
                
                <div className="flex flex-col flex-[35%] shrink grow bg-[#F6FBFF] items-center h-fit rounded-[16px] pt-[15px] pb-[25px] px-[30px] whiteBlockShadow">
                    <div className="flex justify-center items-center h-[56px] w-[56px] bg-[#F6FBFF] rounded-[8px] whiteBlockShadow">
                        <svg width={32} height={32} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="#0E1C29"><g color="#0E1C29"><path d="M140,180a12,12,0,1,1-12-12A12,12,0,0,1,140,180ZM128,72c-22.06,0-40,16.15-40,36v4a8,8,0,0,0,16,0v-4c0-11,10.77-20,24-20s24,9,24,20-10.77,20-24,20a8,8,0,0,0-8,8v8a8,8,0,0,0,16,0v-.72c18.24-3.35,32-17.9,32-35.28C168,88.15,150.06,72,128,72Zm104,56A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path></g></svg>
                    </div>
                    <h3 className='text-[24px] text-[#0E1C29] font-medium mt-[17px] text-center'>Get In Touch Now!</h3>
                    <span className='text-[16px] text-[#0E1C29] text-center mt-[10px] opacity-85'>Still have questions? Feel free to get in touch with us today!</span>
                    <button className='blueButton text-[#FFFFFF] font-semibold h-[48px] w-fit mt-[15px] text-[14px]'>
                        <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.125 0.999981V9.12473C12.1251 9.24841 12.0885 9.36934 12.0198 9.47221C11.9512 9.57508 11.8535 9.65526 11.7393 9.7026C11.625 9.74994 11.4993 9.76232 11.378 9.73817C11.2567 9.71401 11.1453 9.65441 11.0578 9.5669L7.43764 5.94592L1.9425 11.4418C1.82523 11.5591 1.66618 11.625 1.50033 11.625C1.33448 11.625 1.17543 11.5591 1.05815 11.4418C0.940883 11.3246 0.875 11.1655 0.875 10.9997C0.875 10.8338 0.940883 10.6748 1.05815 10.5575L6.55408 5.06236L2.9331 1.44216C2.84559 1.35475 2.78599 1.24334 2.76183 1.12204C2.73768 1.00074 2.75006 0.875005 2.7974 0.760744C2.84474 0.646484 2.92492 0.548839 3.02779 0.480172C3.13066 0.411505 3.25159 0.374903 3.37527 0.375H11.5C11.6658 0.375 11.8247 0.440846 11.9419 0.558053C12.0592 0.67526 12.125 0.834226 12.125 0.999981Z" fill="white"/>
                        </svg>
                        Ask A Question
                    </button>
                </div>

                <div className="flex flex-col flex-[60%] shrink grow h-fit gap-y-[15px] mt-[15px] md:mt-0">

                    <QAPair question={"What services do you offer?"} answer={"I specialize in web design, branding, UI/UX, and Framer development, creating modern, user-friendly experiences tailored to your needs."}/>
                    <QAPair question={"Do you provide revisions?"} answer={"Yes! I offer two free rounds of revisions to ensure the final design meets your vision perfectly. Additional revisions are available if needed."}/>
                    <QAPair question={"How do I start working with you??"} answer={"Simply reach out through my contact page, and we’ll discuss your project, goals, and timeline before getting started."}/>
                    <QAPair question={"What is your pricing structure?"} answer={"Pricing depends on the project scope. Contact me for a custom quote based on your needs and budget."}/>
                    <QAPair question={"How long does a project take?"} answer={"Timelines vary based on project complexity, but most designs take 1–3 weeks, while full websites take 3–6 weeks."}/>

                </div>
            </div>
        </section>
    )
}

function QAPair({question, answer} : {question : string, answer : string}){
    return(
        <div className="flex flex-col bg-[#F6FBFF] rounded-[10px] px-[20px] whiteBlockShadow">
            <div className="flex flex-row justify-between h-[48px] items-center">
                <span className="text-[16px] text-[#0e1c43] font-semibold">{question}</span>
                <svg width={20} height={20} xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 256 256" 
                    focusable="false" 
                    color="var(--token-6396e7f2-0645-4f69-9a36-80e94f8ee015, rgb(14, 28, 41))" 
                ><path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path></svg>
                </div>
            <span className="text-[14px] text-[#0E1C29] font-normal pb-[15px] opacity-85">{answer}</span>
        </div>
    )
}