'use client';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import N1 from '../../public/Neet-pg-2023-768x519.jpg'
import C1 from '../../public/bellavita_icon1-150x150-1.png'
import C2 from '../../public/state-wise-eligibility.svg'
import C3 from '../../public/Expert-Counselling.svg'
import C4 from '../../public/Transparent-process-01.svg'
import C5 from '../../public/Personalised-Guidence.svg'
import C6 from '../../public/Alert-and-Notification-01.svg'
import S1 from '../../public/Alert-and-Notification-01.svg'
import Image from 'next/image'
import Link from 'next/link';
const Assistance = () => {
    const settings = {
      
        infinite: true, // Set to true for infinite loop
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 1000, // Set autoplay speed in milliseconds (e.g., 3000ms = 3 seconds)
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
            
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              initialSlide: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
        ],
      };
  return (
    <>
    <div className='bg-[#c6e2d8] py-20'>
      <div className='container mx-auto'>
        <div className='flex justify-center items-center '>
            <h3 className='text-[#28bd86] text-[25px] font-Open font-[500]'>Register today for end to end
NEET PG Counselling Assistance</h3>
        </div>
        <div className='flex flex-col lg:flex-row justify-center items-center gap-5 mt-10'>
            <div className='w-full lg:w-[50%]'>
                <div>
                    <Image src={N1} alt='' className='w-full h-full object-cover'/>
                </div>
            </div>
            <div className='w-full lg:w-[50%] grid grid-cols-1 md:grid-cols-3 justify-start items-start gap-5 lg:gap-0'>
                <div className='bg-white lg:h-[300px] h-full rounded-lg shadow-lg flex flex-col justify-center items-center gap-5 py-10 px-7'>
                    <span className='bg-[#1b5fc1] text-white p-2 rounded-md'>1</span>
                    <h5 className='text-[16px]  text-center font-Open font-semibold'>{`NEET PG Counselling Assistance`}</h5>
                    <p className='text-[14px] text-center'>{` All India Quota | State Quota | Private College & Deemed Universities`}</p>
                </div>
                <div className='bg-white lg:h-[300px] h-full rounded-lg shadow-lg flex flex-col justify-center items-center gap-5 py-10 px-7'>
                    <span className='bg-[#1b5fc1] text-white p-2 rounded-md'>2</span>
                    <h5 className='text-[16px] text-center font-Open font-semibold'>{`NRI/Management Quota Admissions`}</h5>
                    <p className='text-[14px] text-center'>{` NRI Quota | Management Quota | IP Quota`}</p>
                </div>
                <div className='bg-white lg:h-[300px] h-full rounded-lg shadow-lg flex flex-col justify-center items-center gap-5 py-10 px-7'>
                    <span className='bg-[#1b5fc1] text-white p-2 rounded-md'>3</span>
                    <h5 className='text-[16px] text-center font-Open font-semibold'>{`Low Budget MD/MS Admission`}</h5>
                    <p className='text-[14px] text-center'>{` Good Stipend | Pay Hostel Fees Only*`}</p>
                </div>
            </div>
        </div>
        <div className='flex justify-center items-center gap-5 mt-7'>
<button className='bg-[#1b5fc1] hover:bg-[#28bd86] px-7 py-2 rounded-full text-white'>Register Now</button>
<button className='bg-[#28bd86] hover:bg-[#1b5fc1] px-7 py-2 rounded-full text-white'>Get Call Back</button>
        </div>
        {/* <div className='flex justify-center items-center'>
        <div className='lg:w-[1024px] md:w-[768px] xl:w-[1280px] w-full overflow-hidden mx-auto'>
          <Slider {...settings}>
            {technologiesList.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col justify-start items-start py-10 px-10 cursor-pointer"
                  style={{ margin: '0 10px' }} 
                >
                  <div className='flex justify-center items-center'>
                    <Image src={item.img} width={85} height={85} alt='' className='object-contain rounded-full' />
                  </div>
                  <h3 className='uppercase text-[16px] text-center font-medium pt-5'>{item.Technology}</h3>
                </div>
              );
            })}
          </Slider>
        </div>
      </div> */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-5'>
            <div className= ' h-[350px] bg-transparent shadow-2xl hover:shadow-[#1b5fc1] rounded-lg flex flex-col justify-center items-center gap-5 p-5'>
<div>
    <Image src={C1} alt='' className='w-full h-[100px] object-cover'/>
</div>
<h5 className='text-[15px] text-[#28bd86] text-center font-Open font-semibold'>{`COLLEGE PREDICTOR`}</h5>
<p className='text-[14px] text-center'>{`Get rank based college and course prediction`}</p>
            </div>
       
        <div className= ' h-[350px] bg-transparent shadow-2xl hover:shadow-[#1b5fc1] rounded-lg flex flex-col justify-center items-center gap-5 p-5'>
<div>
    <Image src={C2} alt='' className='w-full h-[100px] object-cover'/>
</div>
<h5 className='text-[15px] text-[#28bd86] text-center font-Open font-semibold'>{`COUNSELLING ELIGIBILITY`}</h5>
<p className='text-[14px] text-center'>{`Check your eligibility for All India/State/ Private University Counselling`}</p>
            </div>
        <div className= ' h-[350px] bg-transparent shadow-2xl hover:shadow-[#1b5fc1] rounded-lg flex flex-col justify-center items-center gap-5 p-5'>
<div>
    <Image src={C3} alt='' className='w-full h-[100px] object-cover'/>
</div>
<h5 className='text-[15px] text-[#28bd86] text-center font-Open font-semibold'>{`EXPERT COUNSELLORS`}</h5>
<p className='text-[14px] text-center'>{`Our team comprises of experts with more than a decade’s experience`}</p>
            </div>
            <div className= ' h-[350px] bg-transparent shadow-2xl hover:shadow-[#1b5fc1] rounded-lg flex flex-col justify-center items-center gap-5 p-5'>
<div>
    <Image src={C4} alt='' className='w-full h-[100px] object-cover'/>
</div>
<h5 className='text-[15px] text-[#28bd86] text-center font-Open font-semibold'>{`TRANSPARENT PROCESS`}</h5>
<p className='text-[14px] text-center'>{`No beating around the bush. Get straight and transparent analysis.`}</p>
            </div>
            <div className= ' h-[350px] bg-transparent shadow-2xl hover:shadow-[#1b5fc1] rounded-lg flex flex-col justify-center items-center gap-5 p-5'>
<div>
    <Image src={C5} alt='' className='w-full h-[100px] object-cover'/>
</div>
<h5 className='text-[15px] text-[#28bd86] text-center font-Open font-semibold'>{`PERSONOLISED GUIDANCE`}</h5>
<p className='text-[14px] text-center'>{`Each candidate is provided a personalised tailor made service`}</p>
            </div>
            <div className= ' h-[350px] bg-transparent shadow-2xl hover:shadow-[#1b5fc1] rounded-lg flex flex-col justify-center items-center gap-5 p-5'>
<div>
    <Image src={C6} alt='' className='w-full h-[100px] object-cover'/>
</div>
<h5 className='text-[15px] text-[#28bd86] text-center font-Open font-semibold'>{`ALERTS & NOTIFICATION`}</h5>
<p className='text-[14px] text-center'>{`Date, Time & Other NEET Updates & Notification on SMS & Email`}</p>
            </div>
            </div>
      </div>
    </div>
<div className='bg-[#F7FDFB] py-20'>
    <div className='container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            <div className='p-5 bg-white rounded-md flex flex-col justify-center items-center gap-6 '>
                <h3 className='text-[18px] text-center font-semibold font-Open'>{`Low Budget MD/MS College Admission`}</h3>
                <p className='text-[16px] text-center'>{`Filter your search for colleges and courses according to your budget`}</p>
                <Link href={'/'} className='text-[#28bd86]'>Choose Now</Link>
            </div>
            <div className='p-5 bg-[#28bd86] text-white rounded-md flex flex-col justify-center items-center gap-6 '>
                <h3 className='text-[18px] text-center font-semibold font-Open'>{`MD/MS Counselling Assistance`}</h3>
                <p className='text-[16px] text-center'>{`Not just by helping students, we also help parents to understand the ongoing trend in the medical profession & filter out the most suitable course as-well as colleges in your preferred budget. This will help them to choose the right course.

Get Consultation`}</p>
                <Link href={'/'} className='text-[#fff]'>Get Consultation</Link>
            </div>
            <div className='p-5 bg-[#1b5fc1] text-white rounded-md flex flex-col justify-center items-center gap-6 '>
                <h3 className='text-[18px] text-center font-semibold font-Open'>{`NRI/Management Quota PG Admission`}</h3>
                <p className='text-[16px] text-center'>{`Get proper guidance and documentation support required for NRI/Management quota PG counselling. Enroll now to get India’s best MD/MS admission assistance

Get Consultation`}</p>
                <Link href={'/'} className='text-[#fff]'>Register</Link>
            </div>
        </div>
    </div>
</div>

    <div className='bg-white py-20'>
<div className='container mx-auto'>
    <div className='flex flex-col justify-center items-center gap-2'>
        <h3 className='text-[25px] font-Open font-semibold'>{`NEET PG 2024 COUNSELLING PROCESS`}</h3>
        <p className='text-center text-[18px] font-Jost font-[500]'>{`PG medical counseling begins with basic registration and choice filling /choice locking with the concerned counselling authorities which is followed by seat allotment and reporting to the allotted institute.`}</p>
    </div>
    <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  justify-start items-start gap-5 pt-10 '>
                <div className='bg-[#28bd86] lg:h-[300px] h-full rounded-lg shadow-lg flex flex-col justify-start items-center gap-5 py-10 px-7'>
                    <span className='bg-white p-3 rounded-md'>1</span>
                    <h5 className='text-[18px]  text-white text-center font-Open font-semibold'>{`Registration`}</h5>
                    <p className='text-[16px] text-white text-center'>{`Based on eligibility of NEET score and    Domicile, participants can register with MCC and  State counselling authorities.`}</p>
                </div>
                <div className='bg-[#1b5fc1] lg:h-[300px] h-full rounded-lg shadow-lg flex flex-col justify-start items-center gap-5 py-10 px-7'>
                    <span className='bg-white p-3 rounded-md'>2</span>
                    <h5 className='text-[18px] text-white text-center font-Open font-semibold'>{`Choice filling`}</h5>
                    <p className='text-[16px] text-white text-center'>{`Based on the marks and preferences the candidate may choose as many specialties and lock that choice.`}</p>
                </div>
                <div className='bg-[#28bd86] lg:h-[300px] h-full rounded-lg shadow-lg flex flex-col justify-start items-center gap-5 py-10 px-7'>
                    <span className='bg-white p-3 rounded-md'>3</span>
                    <h5 className='text-[18px] text-white text-center font-Open font-semibold'>{`Seat allotment`}</h5>
                    <p className='text-[16px] text-center text-white'>{`Counselling authorities will allot the seat based on Merit and Preferences`}</p>
                </div>
                <div className='bg-[#1b5fc1] lg:h-[300px] h-full rounded-lg shadow-lg flex flex-col justify-start items-center gap-5 py-10 px-7'>
                    <span className='bg-white  p-3 rounded-md'>4</span>
                    <h5 className='text-[18px] text-white text-center font-Open font-semibold'>{`Reporting`}</h5>
                    <p className='text-[16px] text-white text-center'>{`Report to the allotted medical institute along with the required documents and DD and complete the joining formalities.`}</p>
                </div>
            </div>
</div>
    </div>

    <div className='bg-[#d1e4dd] py-20'>
        <div className='container mx-auto'>
            <div className='flex flex-col lg:flex-row justify-center items-center gap-10'>
                <div className='w-full lg:w-[50%] flex flex-col justify-start items-start gap-3'>
                    <h2 className='text-[48px] font-Open font-bold  text-[#1b5fc1] '>Rounds of counselling</h2>
                    <h3 className='text-[28px] font-Open font-bold  text-[#28bd86] '>There are mainly three rounds of counselling followed by Stray round-</h3>
                    <span className='w-[150px] h-[5px] bg-[#28bd86] '></span>
                    <div className='mt-5'>
                        <button className='bg-[#1b5fc1] border-2 border-white py-2 px-7 rounded-md text-white'>Start Now</button>
                    </div>
                </div>
                <div className='w-full lg:w-[50%] flex flex-col justify-start items-start gap-8'>
                    <div className='flex justify-center items-start gap-3'>
                        <div className='bg-[#28bd86] rounded-full text-black p-3 flex justify-center items-center '>
                            <p className='font-bold'>1</p>
                        </div>
<div>
<p className='font-bold text-[#28bd86] text-[28px]'>Round 1</p>
                        <p>{`The journey of dreams begins with round 1 counselling – Select your options wisely.`}</p>
                        <p className='text-[20px] text-[#eead55] pt-4'>{`Not satisfied with allotment – free exit is there`}</p>
</div>
                    </div>
                    <div className='flex justify-center items-start gap-3'>
                        <div className='bg-[#eead55] rounded-full text-black p-3 flex justify-center items-center '>
                            <p className='font-bold'>2</p>
                        </div>
<div>
<p className='font-bold text-[#eead55] text-[28px]'>Round 2</p>
                        <p>{`Choose your options carefully –any mistakes can end your hope

`}</p>
                    
</div>
                    </div>
                    <div className='flex justify-center items-start gap-3'>
                        <div className='bg-[#e68845] rounded-full text-black p-3 flex justify-center items-center '>
                            <p className='font-bold'>3</p>
                        </div>
<div>
<p className='font-bold text-[#e68845] text-[28px]'>Mop- Up Round</p>
                        <p>{`For participants who haven’t got any seats in earlier rounds can participate with limited available options.`}</p>
                    
</div>
                    </div>
                    <div className='flex justify-center items-start gap-3'>
                        <div className='bg-[#e68845] rounded-full text-black p-3 flex justify-center items-center '>
                            <p className='font-bold'>4</p>
                        </div>
<div>
<p className='font-bold text-[#e68845] text-[28px]'>Stray round</p>
                        <p>{`A college level counselling for left out residual seats`}</p>
                    
</div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    </>
  )
}

export default Assistance
