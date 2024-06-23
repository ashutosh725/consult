"use client";
import Script from "next/script";
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { IoClose } from "react-icons/io5";

const StockModel = ({ handleCloseStockModel, item, pdfUrl }) => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    address: '',
  });
  const [formValid, setFormValid] = useState(false);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  useEffect(() => {
    validateForm();
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const validateForm = () => {
    const { name, mobile, email, address } = formData;
    if (name.trim() !== '' && mobile.trim() !== '' && email.trim() !== '' && address.trim() !== '') {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  };

  const handleDownload = () => {
    window.open(pdfUrl, '_blank');
  };

  const makePayment = async ({ productId = null }) => {
    try {
      setIsProcessingPayment(true);
      const response = await fetch("/api/razorpay", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ productId, ...formData, price: item.price }),
      });
  
      const data = await response.json();
      console.log("Payment initiation response:", data);
  
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_ID,
        name: data.name,
        currency: data.currency,
        amount: data.amount,
        order_id: data.id,
        description: `Payment for ${item.Title} (${item.price})`, // Dynamic description based on item details
        prefill: {
          name: 'NscxEducation',
          email: formData.email,
          contact: formData.mobile,
        },
        handler: function (response) {
          alert("Payment successful");
          handleDownload();
          console.log("payment successfully")
          setIsProcessingPayment(false);
        },
        modal: {
          ondismiss: function () {
            alert("Payment failed. Please try again. Contact support for help");
            console.log("payment failed")
            setIsProcessingPayment(false);
          }
        }
      };
  
      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.error("Error during payment initialization:", error);
      alert("Something went wrong. Please try again later.");
      setIsProcessingPayment(false);
    }
  };
  

  return (
    <div>
      <Script
        id="razorpay-checkout-js"
        src="https://checkout.razorpay.com/v1/checkout.js"
      />
      <div
        id="default-modal"
        className={`flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] bg-[rgba(0,0,0,0.40)] max-h-full`}
      >
        <div className='relative bg-white md:p-12 p-8 rounded-md shadow-md'>
          <div className='flex flex-col h-[500px] md:h-full overflow-y-scroll lg:overflow-y-hidden lg:flex-row lg:w-[900px] w-full pt-5 gap-10'>
            <div className='w-full lg:w-[50%]'>
              <div>
                <Image src={item.img} alt='' className='w-full h-full object-cover' />
              </div>
              <h4 className='text-[20px] font-semibold font-Jost'>Neet UG 2024 {item.Title} Counselling Guidance E-Book</h4>
              <p className='text-[15px] font-Jost text-justify'>{item.description}</p>
              <p className='py-3 font-medium text-secondary'>₹ {item.price}</p>
            </div>
            <div className='w-full lg:w-[50%] '>
              <form className="flex flex-col gap-3">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name*"
                    className="p-3 outline-none border border-gray-300 rounded-md w-full"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="mobile"
                    placeholder="Mobile No*"
                    className="p-3 outline-none border border-gray-300 rounded-md w-full"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email*"
                    className="p-3 outline-none border border-gray-300 rounded-md w-full"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="address"
                    placeholder="Full Address*"
                    className="p-3 outline-none border border-gray-300 rounded-md w-full"
                    value={formData.address}
                    onChange={handleChange}
                    required
                  />
                </div>
              </form>
              <div className='flex justify-center items-center mt-6 gap-10'>
                <button
                  onClick={() => makePayment({ productId: "example_ebook" })}
                  className={`py-2 px-5 lg:w-[200px] w-full bg-primary font-medium text-secondary rounded-md ${!formValid || isProcessingPayment ? 'opacity-50 cursor-not-allowed' : ''}`}
                  disabled={!formValid || isProcessingPayment}
                >
                  {isProcessingPayment ? "Processing..." : "Buy Now"}
                </button>
              </div>
            </div>
          </div>
          <div className='absolute top-2 right-1'>
            <IoClose onClick={handleCloseStockModel} className='text-[30px] font-bold cursor-pointer' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StockModel;
