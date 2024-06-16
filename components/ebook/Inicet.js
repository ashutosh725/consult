"use client";

import H1 from "../../public/inicetb.png";
import Image from "next/image";

const list = [
  {
    id: 1,
    title: `Allocated Seats (Institute and Subject/Specialty) of the 1st Round`,
    pdf: '/Website-INICET_Jan_24_1st_Round.pdf',
  },
  {
    id: 2,
    title: `Allocated Seats (Institute and Subject/Specialty) of the 02nd Round`,
    pdf: '/Website-INICET_Jan_24_2nd_Round.pdf',
  },
  {
    id: 3,
    title: `ALL PARTICIPATING AIIMS`,
    pdf: '/2_INI-CET Prospectus Part B JAN 2024 Session AIIMS.pdf',
  },
  {
    id: 4,
    title: `PROSPECTUS PART-B`,
    pdf: '/4. Part B Prospectus PGIMER Chandigar MDMS.pdf',
  },
  {
    id: 5,
    title: `Seat Position for admission to PG courses of INIs for INI-CET January 2024 session.`,
    pdf: '/3_FINAL SEAT POSITION INICET JANUARY 2023 SESSION -09.11.2023.pdf',
  },
  {
    id: 6,
    title: `Online PG Seat Allocation Process`,
    pdf: '/2024_JULY_INI-CET_1st_Online Seat Allocation_1.3_How to fill_1st Round.pdf',
  },
  {
    id: 7,
    title: `INI-CET July Session Sequence Preference Order`,
    pdf: '/INI-CET July Preference Sequence bynscx.pdf',
  },
  {
    id: 8,
    title: `Schedule of Online Seat Allocation for admission`,
    pdf: '/1-Counselling_Schedule_INICET_July_2024.pdf',
  },
  {
    id: 9,
    title: `Round 1 Cut Off General Category 2023`,
    pdf: '/INICET (Jan) 2023 Bynscx education.pdf',
  },
  {
    id: 10,
    title: `Round 2 Cut Off General Category 2023`,
    pdf: '/INICET (July) 2023 R1 & R2 Cut Off.pdf',
  },
  {
    id: 11,
    title: `Cut Off General Category 2024`,
    pdf: '/DOC-20240614-WA0001.pdf',
  },
  {
    id: 12,
    title: `Guidelines/Principles for 200 Point Roster creation and seat allocation.`,
    pdf: '/12_Guidelines_for_200_Point_Roster_creation_and_seat_allocation.pdf',
  },
  {
    id: 13,
    title: `Seat Leaving Penalty`,
    pdf: '/Seat Leaving Penalty_INIs.pdf',
  },
  {
    id: 14,
    title: `FAQ's`,
    pdf: '/3-FAQs_INICET_July_2024.pdf',
  },
];

const Inicet = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto">
        <div className="flex border-2 shadow-md gap-10 p-4">
          <div className="w-full lg:w-[50%]">
            <div className="cursor-pointer">
              <Image src={H1} alt="" className="h-full w-full object-cover" />
            </div>
          </div>
          <div className="w-full lg:w-[50%] flex flex-col gap-4">
            <h4 className="text-[25px] font-Jost cursor-pointer text-secondary font-semibold">
              INI-CET July 2024 Counselling Guidance E-Book
            </h4>
            <ul className="list-disc pl-4 flex flex-col gap-2">
              {list.map((item) => (
                <li key={item.id} className="text-blue-500">
                  <a href={item.pdf} download>{item.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inicet;
