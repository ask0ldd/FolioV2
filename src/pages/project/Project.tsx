/* eslint-disable @typescript-eslint/no-unused-vars */
import '../App.css'
import { useEffect, useState } from 'react'
import Summary from './sections/Summary'
import screenshot1 from '../../assets/screenshot1.png'
import screenshot2 from '../../assets/screenshot2.png'
import screenshot3 from '../../assets/screenshot3.png'
import screenshot4 from '../../assets/screenshot4.png'

function Project() {

  const [visible, setVisible] = useState<boolean>(false)

  useEffect(() => {
    if(!visible) setVisible(true)
  }, [])

  return (
    <div className='flex flex-col bg-[rgb(216,223,229)] w-full min-h-[100vh] pb-[50px]'>
      <div className='flex flex-col w-full min-h-[100vh] items-center relative gap-y-[50px]'>

        <header className={visible ? 'flex w-full mx-auto justify-between h-[80px] translate-y-[0px] opacity-100 items-center max-w-[1280px] z-10 headerTransition px-[20px] sm:px-[40px] xl:px-0' : 'flex w-full justify-between h-[80px] translate-y-[-100px] opacity-0 items-center max-w-[1280px] z-10 headerTransition px-[20px] sm:px-[40px] xl:px-0'} >
          <span className='text-[26px] dancing font-bold'>
            Cedric B.Efflam
          </span>
          <div className='flex flex-row gap-x-[20px] '>
            <div className='flex flex-row gap-x-[10px] text-[14px] items-center'>
              <div className='bg-[#31EE33] rounded-full h-[11px] w-[11px] translate-y-[0px] activeMarker'>
              </div>
              <span className='translate-y-[-1px]'>available for work</span>
            </div>
            <div className='bg-[#5E788F] w-[1px] h-[24px]'></div>
            <div className='flex flex-row gap-x-[15px]'>
              <svg width="21" height="21" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 0C8.82441 0 6.69767 0.645139 4.88873 1.85383C3.07979 3.06253 1.66989 4.78049 0.83733 6.79048C0.00476613 8.80047 -0.213071 11.0122 0.211367 13.146C0.635804 15.2798 1.68345 17.2398 3.22183 18.7782C4.76021 20.3165 6.72022 21.3642 8.85401 21.7886C10.9878 22.2131 13.1995 21.9952 15.2095 21.1627C17.2195 20.3301 18.9375 18.9202 20.1462 17.1113C21.3549 15.3023 22 13.1756 22 11C21.9969 8.08356 20.837 5.28746 18.7748 3.22523C16.7125 1.16299 13.9164 0.00307981 11 0ZM11.8462 20.2686V13.5385H14.3846C14.609 13.5385 14.8243 13.4493 14.9829 13.2906C15.1416 13.1319 15.2308 12.9167 15.2308 12.6923C15.2308 12.4679 15.1416 12.2527 14.9829 12.094C14.8243 11.9353 14.609 11.8462 14.3846 11.8462H11.8462V9.30769C11.8462 8.85886 12.0245 8.42842 12.3418 8.11105C12.6592 7.79368 13.0896 7.61538 13.5385 7.61538H15.2308C15.4552 7.61538 15.6704 7.52623 15.8291 7.36755C15.9878 7.20887 16.0769 6.99364 16.0769 6.76923C16.0769 6.54482 15.9878 6.32959 15.8291 6.17091C15.6704 6.01222 15.4552 5.92308 15.2308 5.92308H13.5385C12.6408 5.92308 11.7799 6.27967 11.1452 6.91441C10.5104 7.54914 10.1538 8.41004 10.1538 9.30769V11.8462H7.61539C7.39097 11.8462 7.17575 11.9353 7.01707 12.094C6.85838 12.2527 6.76923 12.4679 6.76923 12.6923C6.76923 12.9167 6.85838 13.1319 7.01707 13.2906C7.17575 13.4493 7.39097 13.5385 7.61539 13.5385H10.1538V20.2686C7.76854 20.0508 5.55898 18.9219 3.98479 17.1166C2.4106 15.3113 1.59297 12.9686 1.70195 10.5759C1.81094 8.18314 2.83816 5.92451 4.56995 4.2698C6.30174 2.6151 8.60477 1.69171 11 1.69171C13.3952 1.69171 15.6983 2.6151 17.4301 4.2698C19.1618 5.92451 20.1891 8.18314 20.2981 10.5759C20.407 12.9686 19.5894 15.3113 18.0152 17.1166C16.441 18.9219 14.2315 20.0508 11.8462 20.2686Z" fill="#0E1C29"/>
              </svg>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-[1px]">
                <path d="M10 5.38462C9.08716 5.38462 8.19483 5.6553 7.43583 6.16245C6.67683 6.66959 6.08527 7.39042 5.73594 8.23377C5.38661 9.07712 5.29521 10.0051 5.4733 10.9004C5.65138 11.7957 6.09096 12.6181 6.73643 13.2636C7.3819 13.909 8.20429 14.3486 9.09958 14.5267C9.99488 14.7048 10.9229 14.6134 11.7662 14.2641C12.6096 13.9147 13.3304 13.3232 13.8376 12.5642C14.3447 11.8052 14.6154 10.9128 14.6154 10C14.6141 8.77631 14.1274 7.60311 13.2622 6.73784C12.3969 5.87256 11.2237 5.38589 10 5.38462ZM10 13.0769C9.39144 13.0769 8.79655 12.8965 8.29055 12.5584C7.78456 12.2203 7.39018 11.7397 7.15729 11.1775C6.92441 10.6153 6.86348 9.99659 6.9822 9.39972C7.10092 8.80286 7.39397 8.2546 7.82429 7.82429C8.2546 7.39397 8.80286 7.10092 9.39972 6.9822C9.99659 6.86348 10.6153 6.92441 11.1775 7.15729C11.7397 7.39018 12.2203 7.78456 12.5584 8.29055C12.8965 8.79655 13.0769 9.39144 13.0769 10C13.0769 10.8161 12.7527 11.5987 12.1757 12.1757C11.5987 12.7527 10.8161 13.0769 10 13.0769ZM14.6154 0H5.38462C3.957 0.00152714 2.58828 0.569324 1.5788 1.5788C0.569324 2.58828 0.00152714 3.957 0 5.38462V14.6154C0.00152714 16.043 0.569324 17.4117 1.5788 18.4212C2.58828 19.4307 3.957 19.9985 5.38462 20H14.6154C16.043 19.9985 17.4117 19.4307 18.4212 18.4212C19.4307 17.4117 19.9985 16.043 20 14.6154V5.38462C19.9985 3.957 19.4307 2.58828 18.4212 1.5788C17.4117 0.569324 16.043 0.00152714 14.6154 0ZM18.4615 14.6154C18.4615 15.6354 18.0563 16.6137 17.335 17.335C16.6137 18.0563 15.6354 18.4615 14.6154 18.4615H5.38462C4.36455 18.4615 3.38627 18.0563 2.66497 17.335C1.94368 16.6137 1.53846 15.6354 1.53846 14.6154V5.38462C1.53846 4.36455 1.94368 3.38627 2.66497 2.66497C3.38627 1.94368 4.36455 1.53846 5.38462 1.53846H14.6154C15.6354 1.53846 16.6137 1.94368 17.335 2.66497C18.0563 3.38627 18.4615 4.36455 18.4615 5.38462V14.6154ZM16.1538 5C16.1538 5.22821 16.0862 5.45129 15.9594 5.64104C15.8326 5.83079 15.6524 5.97868 15.4416 6.06602C15.2307 6.15335 14.9987 6.1762 14.7749 6.13168C14.5511 6.08715 14.3455 5.97726 14.1841 5.81589C14.0227 5.65452 13.9128 5.44893 13.8683 5.2251C13.8238 5.00128 13.8467 4.76928 13.934 4.55844C14.0213 4.3476 14.1692 4.1674 14.359 4.04061C14.5487 3.91383 14.7718 3.84615 15 3.84615C15.306 3.84615 15.5995 3.96772 15.8159 4.18411C16.0323 4.4005 16.1538 4.69398 16.1538 5Z" fill="#0E1C29"/>
              </svg>
              <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.1984 18.708L11.6817 8.46654L18.112 1.39287C18.2574 1.22894 18.3324 1.01429 18.3206 0.795459C18.3088 0.576631 18.2113 0.371261 18.0491 0.223876C17.8869 0.0764899 17.6732 -0.00103252 17.4542 0.00811552C17.2353 0.0172636 17.0287 0.112345 16.8794 0.272745L10.7541 7.01017L6.53906 0.386215C6.4639 0.267909 6.36009 0.170487 6.23726 0.102975C6.11442 0.0354622 5.97654 4.34416e-05 5.83638 9.8516e-08H0.839524C0.690203 -7.25204e-05 0.543608 0.0400033 0.415091 0.116031C0.286574 0.192058 0.180862 0.301241 0.109023 0.432146C0.0371852 0.563051 0.001864 0.710864 0.00675812 0.860105C0.0116522 1.00935 0.0565817 1.15453 0.136842 1.28044L6.65357 11.5209L0.223246 18.5997C0.148154 18.6804 0.0898196 18.7752 0.0516225 18.8785C0.0134254 18.9819 -0.00387451 19.0918 0.00072596 19.202C0.00532643 19.3121 0.0317359 19.4202 0.0784229 19.52C0.12511 19.6198 0.191146 19.7094 0.272705 19.7835C0.354263 19.8576 0.449722 19.9148 0.553547 19.9518C0.657373 19.9887 0.7675 20.0047 0.877547 19.9988C0.987594 19.9929 1.09537 19.9652 1.19463 19.9173C1.2939 19.8694 1.38267 19.8023 1.4558 19.7199L7.58111 12.9824L11.7962 19.6064C11.8719 19.7237 11.976 19.8201 12.0988 19.8867C12.2216 19.9533 12.3592 19.9879 12.4988 19.9874H17.4957C17.6449 19.9874 17.7913 19.9473 17.9196 19.8713C18.048 19.7953 18.1536 19.6862 18.2254 19.5555C18.2972 19.4248 18.3326 19.2771 18.3278 19.1281C18.3231 18.979 18.2784 18.8339 18.1984 18.708ZM12.9558 18.3218L2.35628 1.66562H5.37521L15.9789 18.3218H12.9558Z" fill="#0E1C29"/>
              </svg>
            </div>

          </div>
        </header> 

        <Summary/> 

        <div className='flex overflow-hidden w-full justify-center items-center p-[16px] rounded-[20px] max-w-[1280px] bg-[#f6fbff] border-[#f6fbff] whiteBlockShadow'>
          <img src={screenshot1} className='rounded-[20px] w-full h-[832px] object-cover'/>     
        </div>

        <div className='flex flex-col w-full max-w-[1280px] gap-y-[20px]'>
          <span>The primary goal of <strong>Alter</strong> is to provide businesses with an intuitive and modern SaaS AI Framer template, seamlessly combining advanced features with a sleek and professional design—helping them capture leads and build anticipation for their products or services.</span>
          <span>With its robust AI-powered features and user-friendly interface, <strong>Alter</strong> has redefined how businesses generate interest, engage with their audience, and streamline their SaaS growth.</span>
        </div>

        <div className='flex overflow-hidden w-full justify-center items-center p-[16px] rounded-[20px] max-w-[1280px] bg-[#f6fbff] border-[#f6fbff] whiteBlockShadow'>
          <img src={screenshot2} className='rounded-[20px] w-full h-[832px] object-cover'/>     
        </div>

        <div className='flex overflow-hidden w-full justify-center items-center p-[16px] rounded-[20px] max-w-[1280px] bg-[#f6fbff] border-[#f6fbff] whiteBlockShadow'>
          <img src={screenshot3} className='rounded-[20px] w-full h-[832px] object-cover'/>     
        </div>

        <div className='flex overflow-hidden w-full justify-center items-center p-[16px] rounded-[20px] max-w-[1280px] bg-[#f6fbff] border-[#f6fbff] whiteBlockShadow'>
          <img src={screenshot4} className='rounded-[20px] w-full h-[832px] object-cover'/>     
        </div>

        <div className='flex flex-col w-full max-w-[1280px] gap-y-[20px]'>
          In conclusion, Alter is the ultimate solution for businesses and startups seeking a professional, feature-rich, and customizable SaaS AI Framer template. With its sleek design, advanced functionality, and ease of use, Alter allows businesses to attract and engage their audience effectively, setting the stage for successful product launches and growth.
        </div>

      </div>
    </div>
  )
}

export default Project
