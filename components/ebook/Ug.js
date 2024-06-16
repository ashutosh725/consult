"use client"
import React, { useState } from "react";
import H1 from '../../public/him.jpg'
import H2 from '../../public/h2.jpg'
import H3 from '../../public/h3.jpg'
import H4 from '../../public/h4.jpg'
import H5 from '../../public/h5.jpg'
import H6 from '../../public/h6.jpg'
import H7 from '../../public/h7.jpg'
import H8 from '../../public/h8.jpg'
import H9 from '../../public/h9.jpg'
import H10 from '../../public/h10.jpg'
import H11 from '../../public/h11.jpg'
import H12 from '../../public/h12.jpg'
import H13 from '../../public/h13.jpg'
import H14 from '../../public/h14.jpg'
import H15 from '../../public/h15.jpg'
import H16 from '../../public/h16.jpg'
import H17 from '../../public/h17.jpg'

import Image from 'next/image'
import StockModel from "./StockModel";

const listitems = [
    {
        id: 1,
        Title: ` Himachal Pradesh  State `,
        description: `Atal Medical and Research University in Himachal Pradesh organizes an annual counseling session for NEET UG, with the objective of addressing category-specific cutoffs, as well as the criteria for private university management quotas and NRI seats for the academic year 2023-24. This detailed guide serves as a valuable resource for prospective candidates, aiding them in making informed decisions and effectively prioritizing their choices during the counseling process for the upcoming 2024-25 session.`,
        img: H1,
        pdf: "/hp_ebook.pdf",
        price: 499,
    }, 
    {
        id: 2,
        Title: `Deemed University AIQ`,
        description: `Discover the NEET UG MCC AIQ E-Books for a captivating and enriching learning journey. Dive into comprehensive e-books that detail All India Quota (AIQ) cutoffs for government colleges across all states. Download these valuable resources to gain crucial insights and enhance your preparation for the NEET UG exam. Elevate your learning with innovative e-books crafted to optimize your study experience and boost your success in the medical entrance exam. Get ready to excel with these insightful and well-structured e-books tailored for NEET UG aspirants.`,
        img: H2,
        pdf: "/MCC-AIQ-UG_CUTOFF_2023-24.pdf",
        price: 999,
    },
   

    {
        id: 3,
        Title: ` Kerala State`,
        description: `Kerala CEE conducts annual counseling for NEET UG, aiming to cover category-wise cutoffs, private management quota, and NRI seat cutoffs for 2023-24. This comprehensive guide assists in decision-making and choice prioritization for the upcoming 2024-25 session counseling.`,
        img: H3,
        pdf: "/kerala_e_book_cut_off_govt_private_2023_24_icccbharat.pdf",
        price: 499,
    },
    {
        id: 4,
        Title: `Maharashtra State `,
        description: `The State Common Entrance Test Cell Maharashtra's counseling e-book is a comprehensive resource meticulously curated to provide insights into cutoff scores for various categories. It offers detailed information on cutoffs, helping candidates understand the minimum scores required for admission to different courses and institutions. This invaluable guide assists aspirants in navigating the counseling process with clarity, enabling them to make informed decisions regarding course preferences and prioritization. With its focus on transparency and accessibility, the e-book equips candidates with the necessary tools to effectively plan their academic journey and secure admission to their desired programs`,
        img: H4,
        pdf: "/MH_MBBS_UG_2023-24.pdf",
        price: 499,
    },
    {
        id: 5,
        Title: `MCC EBOOK all State `,
        description: `The Medical Counselling Committee's undergraduate counseling e-book serves as a concise yet comprehensive guide, particularly focusing on management quota cutoffs and associated fees. This invaluable resource provides aspiring medical students with detailed information regarding the minimum scores required for admission under the management quota across various medical institutions. Additionally, it outlines the fee structure applicable to these seats, ensuring transparency and clarity for prospective candidates and their families. By presenting this essential information in an accessible format, the e-book empowers students to make informed decisions during the counseling process, enabling them to pursue their medical education aspirations effectively.`,
        img: H5,
        pdf: "/MCC_NEETUG_2023-2024_CUTOFF_.pdf",
        price: 499,
    },
    {
        id: 6,
        Title: `Chattisgarh State `,
        description: `The Directorate of Medical Education (DME) in Chhattisgarh is responsible for conducting NEET UG counseling for government and private medical colleges in the state 2023-2024. It's crucial for candidates to stay updated with the official notifications and guidelines issued by the DME Chhattisgarh to ensure they adhere to the counseling schedule and procedures effectively.`,
        img: H6,
        pdf: "/mbbs_chattisgarh_ug_cutoff_2023_24_e-book_lak.pdf",
        price: 499,
    },
    {
        id: 7,
        Title: `Gujarat State `,
        description: `Gujarat ACPUGMEC conducts annual counseling for NEET UG, aiming to cover category-wise cutoffs, private university management quota, and NRI seat cutoffs for 2023-24. This comprehensive guide assists in decision-making and choice prioritization for the upcoming 2024-25 session counseling.`,
        img: H7,
        pdf: "/gujarat_mbbs_ebook_for_govt_private_gmers_college_2023_24_icccbharat.pdf",
        price: 499,
    },
    {
        id: 8,
        Title: `West Bengal State `,
        description: `The West Bengal Medical Counseling Committee (WBMCC) has been established with the primary aim of providing clarity on category-specific cutoffs, along with outlining the criteria for private university management quotas and NRI seats for the academic year 2023-24. This meticulously crafted guide serves as an indispensable resource for aspiring candidates, empowering them to make well-informed decisions and strategically prioritize their choices during the counseling process for the forthcoming 2024-25 session.`,
        img: H8,
        pdf: "/WB_23-24_ABJ.pdf",
        price: 499,
    },
    {
        id: 9,
        Title: `Madhya Pradesh State `,
        description: `Madhya Pradesh DME conducts annual counseling for NEET UG, aiming to cover category-wise cutoffs, private university management quota, and NRI seat cutoffs for 2023-24. This comprehensive guide assists in decision-making and choice prioritization for the upcoming 2024-25 session counseling.`,
        img: H9,
        pdf: "/madhya_pradesh_ebook_for_government_private_colleges_cutoff_2023_24_icccbharat.pdf",
        price: 499,
    },

    {
        id: 10,
        Title: ` Karnatka state`,
        description: `The Karnataka Examination Authority's counseling e-book offers a concise yet comprehensive overview of management quota cutoffs and associated fees. This valuable resource provides aspiring candidates with detailed insights into the minimum scores required for admission under the management quota in various institutions across Karnataka. Additionally, it outlines the fee structure associated with these seats, ensuring transparency and clarity for prospective students. By presenting this crucial information in an accessible format, the e-book facilitates informed decision-making, enabling candidates to effectively navigate the counseling process and confidently pursue their academic goals.`,
        img: H10,
        pdf: "/KEA_NEETUG_CUTOFF_E-BOOK_2023-24.pdf",
        price: 499,
    },
    {
        id: 11,
        Title: `Jammu & Kashmir EBOOK `,
        description: `JKBOPEE conducts counseling for NEET UG in Jammu and Kashmir. This e-book provides the government colleges' cutoffs for the academic year 2023-24, offering the latest insights and updates to effectively guide your NEET UG journey. Gain essential information to confidently navigate the NEET UG admissions process with this resource. Stay informed and make informed decisions about your medical education in Jammu and Kashmir.`,
        img: H11,
        pdf: "/UG_E-BOOK_JK_23-24.pdf",
        price: 499,
    },

    {
        id: 12,
        Title: `Andhra Pradesh State`,
        description: `Explore the annual counseling conducted by Andhra Pradesh Dr. YSR University of Health Sciences (dr.ysruhs) for NEET UG, specifically focusing on private colleges' management quota (MQ) seat cutoffs for the 2023-24 academic year. Stay informed about the latest updates and official notifications regarding seat availability and cutoff scores. It's crucial to seek expert guidance to navigate through the counseling process effectively. Make informed decisions about your NEET UG admissions by staying updated with the latest information and seeking advice from knowledgeable sources.`,
        img: H12,
        pdf: "/AP-MBBSNEETUG_CUTOFF_23-24.pdf",
        price: 499,
    },{
        id: 13,
        Title: ` Pondicherry State`,
        description: `Discover the latest information on Puducherry MBBS NEET UG cutoff scores, seat matrix, and fees for the academic year 2023-24. Gain insights into the qualifying scores required for admission, available seat distributions across different medical colleges in Puducherry, and the associated fee structure. Make well-informed decisions about pursuing MBBS studies in Puducherry by accessing comprehensive details about cutoffs, seat availability, and fees for the upcoming academic session. Stay updated and plan your NEET UG application process effectively with this essential information.`,
        img: H13,
        pdf: "/pondicherry_neetug_2023-24.pdf",
        price: 499,
    },
    {
        id: 14,
        Title: `Uttar Pradesh State `,
        description: `The Directorate General of Medical Education (DGME) in Uttar Pradesh conducts annual counseling for NEET UG admissions. Navigate the competitive landscape of NEET UG admissions in Uttar Pradesh with exclusive insights into management seat cutoffs for private colleges in the academic session 2023-24. This comprehensive guide empowers aspirants to make informed decisions and prioritize their choices effectively for the upcoming academic year 2024-25. Stay updated and informed about NEET UG admissions in Uttar Pradesh with this valuable resource.`,
        img: H14,
        pdf: "/uttar_pradesh-neetug_-_2023-24.pdf",
        price: 499,
    },

    {
        id: 15,
        Title: `Odisha State `,
        description: `The Odisha Joint Entrance Examination aims to provide comprehensive information on category-specific cutoffs, as well as the criteria for private university management quotas and NRI seats for the academic year 2023-24. This detailed guide serves as a valuable resource for prospective candidates, assisting them in making informed decisions and effectively prioritizing their choices during the counseling process for the upcoming 2024-25 session.`,
        img: H15,
        pdf: "/odisha-neetug-2023-24.pdf",
        price: 499,
    },
    {
        id: 16,
        Title: `Assam State `,
        description: `Embark on your NEET UG journey with confidence using the Assam DME e-book 2023-24, designed to provide the latest insights and updates essential for effective preparation. This e-book from Assam DME offers valuable resources tailored to guide you towards success in NEET UG. Stay informed and prepared with the latest insights, ensuring you have the tools and information needed to excel in your medical entrance exam. Enhance your readiness and boost your confidence with this comprehensive e-book designed to support your NEET UG journey`,
        img: H16,
        pdf: "/ASSAM_NEETUG_2023-24.pdf",
        price: 499,
    },
    {
        id: 17,
        Title: `Telegana State`,
        description: `Telangana KNRUHS conducts annual counseling for NEET UG, aiming to cover category-wise cutoffs, private management quota seat cutoffs for 2023-24. This comprehensive guide assists in decision-making and choice prioritization for the upcoming 2024-25 session counseling.`,
        img: H17,
        pdf: "/TS_MANAGEMENT_QUOTA_EBOOK_LAK.pdf",
        price: 499,
    },
]

const Ug = () => {
    const [stockModel, setStockModel] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const handleOpenStockModel = (item) => {
        setSelectedItem(item); 
        setStockModel(true);
    };
    
    const handleCloseStockModel = () => {
        setStockModel(false);
    };

  return (
    <div className='py-20'>
   <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5  gap-x-3 gap-y-10 mx-4'>
{
    listitems.map((item, index)=>{
        return <div key={index} className='border-2 shadow-md'>
        <div onClick={() => handleOpenStockModel(item)} className='cursor-pointer'>
            <Image src={item.img} alt='' className='h-full w-full object-cover'/>
        </div>
        <div className='p-4'>
            <h4 onClick={() => handleOpenStockModel(item)} className='text-[20px] font-Jost cursor-pointer hover:text-secondary font-semibold text-center'>Neet UG 2024 {item.Title} Counselling Guidance E-Book</h4>
            <p className='text-center text-secondary font-Jost font-medium text-[16px] pt-3'>₹ {item.price}</p>
        </div>
    </div>
    })
}

   </div>
   {stockModel && <StockModel item={selectedItem}      pdfUrl={selectedItem.pdf}  handleCloseStockModel={handleCloseStockModel} handleOpenStockModel={handleOpenStockModel} />}
    </div>
  )
}

export default Ug
