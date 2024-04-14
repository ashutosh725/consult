"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";


const faqList = [
  {
    id: 1,
    question: 'NEET Result 2024 Out',
    answer: `In the NEET 2024 Exam, a total of 20,38,596 students appeared, with 11,45,976 successfully qualifying, resulting in an overall qualifying percentage of 56.21%. The National Testing Agency (NTA) has released the NEET 2023 Toppers list, which is based on the All India Ranks achieved in the NTA NEET Score Card and Result 2023. Seat allotment for respective courses will be determined by the marks obtained in the NEET Result 2024.`,
  },
  
  {
    id: 2,
    question: 'NEET Result 2024 Toppers',
    answer: `In the recently announced NEET Result 2024, Prabhanjan J from Tamil Nadu and Bora Varun Chakravarthi from Andhra Pradesh secured the coveted AIR 1 rank, both scoring a perfect 720/720 marks and achieving a remarkable percentile of 99.999901. Kaustav Bauri from Tamil Nadu secured the third position (AIR 3), while Pranjal Aggarwal from Punjab secured the fourth position (AIR 4). These students showcased exceptional performance in the NEET 2024 Exam.
    `,
  },
  {
    id: 3,
    question: 'NEET Result 2023 Statistics',
    answer: `According to the NEET Result 2024 press release, this year, a total of 881,967 male students, 1,156,618 female students, and 11 transgender students appeared for the NEET 2024 Exam. Out of them, 490,374 males, 655,599 females, and 3 transgender students have qualified as per the NEET Result 2023. The overall pass percentage for the NEET 2023 Exam stands at 56.21%, as mentioned in the press release accompanying the NEET Result.`,
  
  },
 
 
  
  
];
const FaqList = () => {
  const [expanded, setExpanded] = useState(faqList[0].id);

  const handleChange = (panel) => () => {
    setExpanded((prevExpanded) =>
      prevExpanded === panel ? null : panel
    );
  };

  return (
    <div className=' bg-white md:px-10 px-4 pb-4'>
      <div className=' '>
        <div className='  flex flex-col justify-center items-center  '>
         
         

          <div className='  w-full shadow-md  bg-slate-100'>
            {faqList.map((item) => (
              <div key={item.id} className='mb-4'>
                <div
                  className={`border-b-2 ${
                    expanded === item.id ? 'border-b-0' : ''
                  }`}
                >
                  <div
                    className='cursor-pointer py-3 px-4 flex  justify-between items-start '
                    onClick={handleChange(item.id)}
                  >
                    <h2 className=' text-[16px] font-semibold tracking-wide'>{item.question}</h2>
                    <span className='text-[16px] font-bold'><MdKeyboardArrowDown/></span>
                  </div>
                </div>
                {expanded === item.id && (
                  <div className='py-3 px-4'>
                    <p className=' text-[14px] font-normal '>{item.answer}</p>
                    <div className='flex flex-col lg:flex-row justify-start items-start gap-2'>
                      <span className=' text-[14px] font-normal'>{item.p} </span>
                      <a href={item.url} target="_blank" rel="noopener noreferrer" className='text-blue-600 lg:text-[16px] text-[12px] font-normal'>
                        {item.url}
                      </a>
                    </div>
                    <div className='flex flex-col justify-start items-start gap-3'>
                      <span className='lg:text-[16px]  text-[14px] font-normal'>{item.li1}<a href={item.url1} rel="noopener noreferrer" className='text-blue-600'>
                        {item.url1}
                      </a></span>
                      <span className=' text-[14px] font-normal'>{item.li2}</span>
                      <span className=' text-[14px] font-normal'>{item.li3}</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


export default FaqList
