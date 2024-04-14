"use client"
import { useState } from 'react';
import { FaWhatsapp } from "react-icons/fa6";
import { FaLongArrowAltRight } from "react-icons/fa";
import ContactModel from './ContactModel';

const Chat = () => {

  const [contactmodel, setContactModel] = useState(false);

    const handleOpenContactModel = () => {
      setContactModel(true);
    };
  
    const handleCloseContactModel = () => {
      setContactModel(false);
    };

  const [isVisible, setIsVisible] = useState(true);

  const handleArrowClick = () => {
    setIsVisible(!isVisible); // Toggles the visibility state
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '7742727811';
    const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}`;
    window.location.href = whatsappLink;
  };

  return (
    <div>
      <div className='bg-[#000000] fixed cursor-pointer left-0 md:top-[32%] top-[47%] z-50  px-[11px]   py-3' onClick={handleArrowClick}>
        <FaLongArrowAltRight className='text-white  font-bold text-[25px]' />
      </div>

      {/* Buttons that toggle visibility */}
      {isVisible && (
        <div className="fixed left-0 md:top-[60%] top-[75%] z-50">
          <ul className='list-none flex flex-col justify-center items-center gap-0 m-0 p-0'>
            <li className="flex flex-col items-center gap-0">
              <button onClick={handleOpenContactModel} className='bg-[#7761DF] px-6 py-3 tracking-wider text-white transform -rotate-90 origin-top-left' >
                contact us
              </button>
            </li>
          </ul>
          <div onClick={handleWhatsAppClick} className='bg-[#00d084] fixed cursor-pointer left-0 md:top-[60%] top-[75%] z-50 px-3 py-4'>
            <FaWhatsapp className='text-white  font-bold text-[25px]' />
          </div>
        </div>
      )}

     
{contactmodel && <ContactModel handleCloseContactModel={handleCloseContactModel} handleOpenContactModel={handleOpenContactModel}/>}
    </div>
  );
};

export default Chat;
