import '../App.css'

const skills = [
    'Product Design',
    'UI Design',
    'UX Design',
    'React',
    'Angular',
    'Node',
    'NestJs',
    'Jest',
    'Figma',
    'Express',
    'Java',
    'Cypress',
    'Tailwind',
    'Typescript',
    'Javascript',
    'CSS',
]

const experiences = [
    {company : 'OC', title : 'Full Stack Developer', date : '2023'},
    {company : 'Street Garage', title : 'Graphic Designer', date : '2021'},
    {company : 'Fitness Boutique', title : 'Full Stack Developer', date : '2016'},
    {company : 'Sony DE', title : 'Audio Engineer / Composer', date : '2006'},
    {company : 'Freelancer', title : 'Full Stack Developer', date : '2005'},
    {company : 'Data Engineering Tech', title : 'EDF', date : '2004'},
    {company : 'Data Engineering Tech', title : 'UUNET', date : '2003'},
]

export default function CV(){

    return(
        <section id="resume" className="bg-[#E1E7EC] flex flex-col w-full items-center py-[70px] md:py-[100px] px-[20px] md:px-0">
            <div className="flex flex-col max-w-[1200px] w-full gap-x-[45px] gap-y-[25px] md:flex-row md:gap-y-0">
                <div className="flex flex-col w-full md:w-[300px] h-fit shrink-0 grow-0 p-[25px] items-center bg-[#F6FBFF] rounded-[20px] whiteBlockShadow">
                    <div className='CVPictureShadows w-[252px] md:w-[252px] h-[265px] bg-neutral-400 rounded-[12px] askPic'/>
                    <div className='flex flex-row gap-x-[10px] text-[14px] items-center mt-[23px]'>
                        <div className='bg-[#31EE33] rounded-full h-[11px] w-[11px] translate-y-[0px] activeMarker'/>
                        <span className='translate-y-[-1px]'>available for work</span>
                    </div>
                    <span className='text-[28px] md:text-[36px] dm-sans mt-[8px]'>
                        Cedric B-Efflam
                    </span>
                    <span className='text-[12px] md:text-[14px] text-center mt-[8px] opacity-85'>
                        UI/UX Interaction Designer<br/>Based in Paris.
                    </span>
                    <div className='flex flex-row justify-around w-fit gap-x-[30px] md:w-[80%] mt-[20px]'>
                        <div className='flex h-[40px] w-[40px] bg-[#DBE3E8] outline-1 outline-[#C7D2DD] rounded-full justify-center items-center'>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.6" d="M17.131 16.8372L11.2659 7.61989L17.0532 1.25359C17.1841 1.10604 17.2516 0.912859 17.241 0.715913C17.2304 0.518968 17.1426 0.334135 16.9966 0.201488C16.8507 0.0688409 16.6583 -0.000929264 16.4612 0.00730397C16.2642 0.0155372 16.0783 0.10111 15.9439 0.24547L10.4311 6.30915L6.63759 0.347593C6.56995 0.241118 6.47652 0.153438 6.36597 0.0926771C6.25542 0.031916 6.13133 3.90975e-05 6.00518 8.86644e-08H1.50801C1.37362 -6.52684e-05 1.24169 0.0360029 1.12602 0.104428C1.01036 0.172853 0.915217 0.271117 0.850562 0.388932C0.785908 0.506746 0.754119 0.639777 0.758524 0.774094C0.762928 0.908411 0.803365 1.03907 0.875599 1.1524L6.74065 10.3688L0.953363 16.7398C0.88578 16.8124 0.833279 16.8976 0.798902 16.9907C0.764524 17.0837 0.748954 17.1827 0.753095 17.2818C0.757235 17.3809 0.781004 17.4782 0.823022 17.568C0.86504 17.6578 0.924473 17.7385 0.997876 17.8052C1.07128 17.8719 1.15719 17.9233 1.25063 17.9566C1.34408 17.9899 1.44319 18.0042 1.54223 17.9989C1.64128 17.9936 1.73828 17.9687 1.82761 17.9256C1.91695 17.8825 1.99684 17.8221 2.06266 17.7479L7.57544 11.6842L11.369 17.6458C11.4372 17.7514 11.5309 17.8381 11.6414 17.898C11.7519 17.958 11.8757 17.9891 12.0014 17.9887H16.4986C16.6328 17.9886 16.7646 17.9525 16.8801 17.8841C16.9956 17.8158 17.0907 17.7176 17.1553 17.6C17.2199 17.4823 17.2518 17.3494 17.2475 17.2153C17.2432 17.0811 17.203 16.9505 17.131 16.8372ZM12.4127 16.4896L2.87309 1.49906H5.59013L15.1335 16.4896H12.4127Z" fill="#0E1C29"/>
                            </svg>
                        </div>
                        <div className='flex h-[40px] w-[40px] bg-[#DBE3E8] outline-1 outline-[#C7D2DD] rounded-full justify-center items-center'>
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.6" d="M11 0C8.82441 0 6.69767 0.645139 4.88873 1.85383C3.07979 3.06253 1.66989 4.78049 0.83733 6.79048C0.00476613 8.80047 -0.213071 11.0122 0.211367 13.146C0.635804 15.2798 1.68345 17.2398 3.22183 18.7782C4.76021 20.3165 6.72022 21.3642 8.85401 21.7886C10.9878 22.2131 13.1995 21.9952 15.2095 21.1627C17.2195 20.3301 18.9375 18.9202 20.1462 17.1113C21.3549 15.3023 22 13.1756 22 11C21.9969 8.08356 20.837 5.28746 18.7748 3.22523C16.7125 1.16299 13.9164 0.00307981 11 0ZM11.8462 20.2686V13.5385H14.3846C14.609 13.5385 14.8243 13.4493 14.9829 13.2906C15.1416 13.1319 15.2308 12.9167 15.2308 12.6923C15.2308 12.4679 15.1416 12.2527 14.9829 12.094C14.8243 11.9353 14.609 11.8462 14.3846 11.8462H11.8462V9.30769C11.8462 8.85886 12.0245 8.42842 12.3418 8.11105C12.6592 7.79368 13.0896 7.61538 13.5385 7.61538H15.2308C15.4552 7.61538 15.6704 7.52623 15.8291 7.36755C15.9878 7.20887 16.0769 6.99364 16.0769 6.76923C16.0769 6.54482 15.9878 6.32959 15.8291 6.17091C15.6704 6.01222 15.4552 5.92308 15.2308 5.92308H13.5385C12.6408 5.92308 11.7799 6.27967 11.1452 6.91441C10.5104 7.54914 10.1538 8.41004 10.1538 9.30769V11.8462H7.61539C7.39097 11.8462 7.17575 11.9353 7.01707 12.094C6.85838 12.2527 6.76923 12.4679 6.76923 12.6923C6.76923 12.9167 6.85838 13.1319 7.01707 13.2906C7.17575 13.4493 7.39097 13.5385 7.61539 13.5385H10.1538V20.2686C7.76854 20.0508 5.55898 18.9219 3.98479 17.1166C2.4106 15.3113 1.59297 12.9686 1.70195 10.5759C1.81094 8.18314 2.83816 5.92451 4.56995 4.2698C6.30174 2.6151 8.60477 1.69171 11 1.69171C13.3952 1.69171 15.6983 2.6151 17.4301 4.2698C19.1618 5.92451 20.1891 8.18314 20.2981 10.5759C20.407 12.9686 19.5894 15.3113 18.0152 17.1166C16.441 18.9219 14.2315 20.0508 11.8462 20.2686Z" fill="#0E1C29"/>
                            </svg>
                        </div>
                        <div className='flex h-[40px] w-[40px] bg-[#DBE3E8] outline-1 outline-[#C7D2DD] rounded-full justify-center items-center'>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.6" d="M10 5.38462C9.08716 5.38462 8.19483 5.6553 7.43583 6.16245C6.67683 6.66959 6.08527 7.39042 5.73594 8.23377C5.38661 9.07712 5.29521 10.0051 5.4733 10.9004C5.65138 11.7957 6.09096 12.6181 6.73643 13.2636C7.3819 13.909 8.20429 14.3486 9.09958 14.5267C9.99488 14.7048 10.9229 14.6134 11.7662 14.2641C12.6096 13.9147 13.3304 13.3232 13.8376 12.5642C14.3447 11.8052 14.6154 10.9128 14.6154 10C14.6141 8.77631 14.1274 7.60311 13.2622 6.73784C12.3969 5.87256 11.2237 5.38589 10 5.38462ZM10 13.0769C9.39144 13.0769 8.79655 12.8965 8.29055 12.5584C7.78456 12.2203 7.39018 11.7397 7.15729 11.1775C6.92441 10.6153 6.86348 9.99659 6.9822 9.39972C7.10092 8.80286 7.39397 8.2546 7.82429 7.82429C8.2546 7.39397 8.80286 7.10092 9.39972 6.9822C9.99659 6.86348 10.6153 6.92441 11.1775 7.15729C11.7397 7.39018 12.2203 7.78456 12.5584 8.29055C12.8965 8.79655 13.0769 9.39144 13.0769 10C13.0769 10.8161 12.7527 11.5987 12.1757 12.1757C11.5987 12.7527 10.8161 13.0769 10 13.0769ZM14.6154 0H5.38462C3.957 0.00152714 2.58828 0.569324 1.5788 1.5788C0.569324 2.58828 0.00152714 3.957 0 5.38462V14.6154C0.00152714 16.043 0.569324 17.4117 1.5788 18.4212C2.58828 19.4307 3.957 19.9985 5.38462 20H14.6154C16.043 19.9985 17.4117 19.4307 18.4212 18.4212C19.4307 17.4117 19.9985 16.043 20 14.6154V5.38462C19.9985 3.957 19.4307 2.58828 18.4212 1.5788C17.4117 0.569324 16.043 0.00152714 14.6154 0ZM18.4615 14.6154C18.4615 15.6354 18.0563 16.6137 17.335 17.335C16.6137 18.0563 15.6354 18.4615 14.6154 18.4615H5.38462C4.36455 18.4615 3.38627 18.0563 2.66497 17.335C1.94368 16.6137 1.53846 15.6354 1.53846 14.6154V5.38462C1.53846 4.36455 1.94368 3.38627 2.66497 2.66497C3.38627 1.94368 4.36455 1.53846 5.38462 1.53846H14.6154C15.6354 1.53846 16.6137 1.94368 17.335 2.66497C18.0563 3.38627 18.4615 4.36455 18.4615 5.38462V14.6154ZM16.1538 5C16.1538 5.22821 16.0862 5.45129 15.9594 5.64104C15.8326 5.83079 15.6524 5.97868 15.4416 6.06602C15.2307 6.15335 14.9987 6.1762 14.7749 6.13168C14.5511 6.08715 14.3455 5.97726 14.1841 5.81589C14.0227 5.65452 13.9128 5.44893 13.8683 5.2251C13.8238 5.00128 13.8467 4.76928 13.934 4.55844C14.0213 4.3476 14.1692 4.1674 14.359 4.04061C14.5487 3.91383 14.7718 3.84615 15 3.84615C15.306 3.84615 15.5995 3.96772 15.8159 4.18411C16.0323 4.4005 16.1538 4.69398 16.1538 5Z" fill="#0E1C29"/>
                            </svg>
                        </div>
                    </div>
                    <button className='blueButton text-[#FFFFFF] font-semibold h-[48px] w-full mt-[25px] text-[14px]'>
                        <svg width="11" height="10" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.125 0.999981V9.12473C12.1251 9.24841 12.0885 9.36934 12.0198 9.47221C11.9512 9.57508 11.8535 9.65526 11.7393 9.7026C11.625 9.74994 11.4993 9.76232 11.378 9.73817C11.2567 9.71401 11.1453 9.65441 11.0578 9.5669L7.43764 5.94592L1.9425 11.4418C1.82523 11.5591 1.66618 11.625 1.50033 11.625C1.33448 11.625 1.17543 11.5591 1.05815 11.4418C0.940883 11.3246 0.875 11.1655 0.875 10.9997C0.875 10.8338 0.940883 10.6748 1.05815 10.5575L6.55408 5.06236L2.9331 1.44216C2.84559 1.35475 2.78599 1.24334 2.76183 1.12204C2.73768 1.00074 2.75006 0.875005 2.7974 0.760744C2.84474 0.646484 2.92492 0.548839 3.02779 0.480172C3.13066 0.411505 3.25159 0.374903 3.37527 0.375H11.5C11.6658 0.375 11.8247 0.440846 11.9419 0.558053C12.0592 0.67526 12.125 0.834226 12.125 0.999981Z" fill="white"/>
                        </svg>
                        Contact Me
                    </button>
                </div>
                <div className="flex flex-col w-full shrink grow gap-y-[25px]">
                    <span className='text-[14px] md:text-[16px]'>
                        I'm Cedric B-Efflam, a passionate Web Designer & Developer based in the dynamic city of Berlin, Germany. I blend creative design with precise technical execution to deliver outstanding digital experiences.
                    </span>
                    <hr className="border-[#9DAEBCbb] border-dashed"/>
                    <div className="flex flex-row flex-wrap w-full *:bg-[#D8DFE5] gap-[10px] *:rounded-[8px] *:h-[40px] *:flex *:justify-center *:items-center *:px-[15px] *:text-[14px]">
                        {skills.map((skill, index) => <span key={'skill' + index}>{skill}</span>)}
                    </div>
                    <hr className="border-[#9DAEBCbb] border-dashed"/>
                    <div className='grid grid-cols-3 gap-y-[15px]'>
                        {experiences.map(
                            (experience, index) => <Experience key={'xp' + index} index={index} {...experience} />
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

function Experience({company, title, date} : IExperienceProps){
    return(
        <>
            <span className={'bg-[#D8DFE5] flex flex-row h-[52px] pl-[20px] items-center rounded-l-[10px] text-[14px] md:text-[1rem]'}>{company}</span>
            <span className={'bg-[#D8DFE5] flex flex-row h-[52px] pl-[20px] items-center text-[14px] md:text-[1rem]'}>{title}</span>
            <span className={'bg-[#D8DFE5] flex flex-row h-[52px] pr-[20px] items-center justify-end rounded-r-[10px] text-right text-[14px] md:text-[1rem]'}>{date}</span>
        </>
    )
}

interface IExperienceProps{
    index? : number
    title : string
    date: string
    company : string
}