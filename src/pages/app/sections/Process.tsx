import '../App.css'

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
                <div className="flex flex-col flex-[40%] shrink grow bg-[#F6FBFF] whiteBlockShadow p-[20px] rounded-[20px]">
                    <div className='flex justify-center items-center bg-[#0E1C29] w-[50px] h-[50px] font-semibold rounded-full text-[#FFFFFF]'>01</div>
                    <h3 className='text-[24px] text-[#0E1C29] font-medium mt-[20px]'>Let's Get In Touch</h3>
                    <span className='text-[16px] text-[#0E1C29] mt-[10px]'>Start by reaching out through our contact page. Fill out the form or book a call to discuss your project.</span>
                    <div className='w-full h-[0px] border-[#5E788F80] border-0 border-b-1 border-dashed mt-[15px]'></div>
                    <button className='flex text-[12px] font-medium w-[66px] h-[30px] bg-[#E1E7EC] rounded-full justify-center items-center ml-auto mt-[20px]'>Step 1</button>
                </div>
                <div className="flex flex-col flex-[40%] shrink grow bg-[#F6FBFF] whiteBlockShadow p-[20px] rounded-[20px]">
                    <div className='flex justify-center items-center bg-[#0E1C29] w-[50px] h-[50px] font-semibold rounded-full text-[#FFFFFF]'>02</div>
                    <h3 className='text-[24px] text-[#0E1C29] font-medium mt-[20px]'>Grab Your Designs</h3>
                    <span className='text-[16px] text-[#0E1C29] mt-[10px]'>Tell me your unique vision, and I’ll create stunning, functional designs that perfectly align with your goals.</span>
                    <div className='w-full h-[0px] border-[#5E788F80] border-0 border-b-1 border-dashed mt-[15px]'></div>
                    <button className='flex text-[12px] font-medium w-[66px] h-[30px] bg-[#E1E7EC] rounded-full justify-center items-center ml-auto mt-[20px]'>Step 2</button>
                </div>
                <div className="flex flex-col flex-[40%] shrink grow bg-[#F6FBFF] whiteBlockShadow p-[20px] rounded-[20px]">
                    Step3
                </div>
                <div className="flex flex-col flex-[40%] shrink grow bg-[#F6FBFF] whiteBlockShadow p-[20px] rounded-[20px]">
                    Step4
                </div>
            </div>
        </section>
    )
}