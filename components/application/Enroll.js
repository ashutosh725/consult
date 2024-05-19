import React from 'react'

const Enroll = () => {
  return (
    <div className='bg-[#9aaeb1]'>
      <div className='container mx-auto'>
        <div className='flex justify-center items-center py-16'>
            <h4 className='bg-[#f14f4d] flex justify-center items-center p-2 text-[30px] font-semibold text-white'>ENROL WITH US TO AVAIL OUR SERVICES</h4>
        </div>
       <div className='lg:w-[800px] w-full'>
       <div className=''>
         <h5 className='bg-[#f5f5f5] flex justify-start items-center p-3 text-[18px]  font-semibold text-[#111111]'>ENROLLMENT FORM</h5>
        </div>
        <div className='bg-white flex justify-center items-center w-full'>
            <form className="  flex flex-col  justify-start items-start gap-3 p-4 w-full">
                <div className='flex justify-center items-start gap-3 '>
                    <label className='text-[14px] text-[#000000]'>Student Name:</label>
                    <input type='text' placeholder='Student Name' className='outline-none border-[1px] placeholder:text-[#000000] placeholder:text-[14px] border-[#848484] bg-[#ffffff] rounded-[5px] p-2  '/>
                </div>
                <div className='flex justify-center items-center gap-3'>
                    <label className='text-[14px] text-[#000000]'>{`Father's Name:`}</label>
                    <input type='text' placeholder={`Father's Name`} className='outline-none border-[1px] placeholder:text-[#000000] placeholder:text-[14px] border-[#848484] bg-[#ffffff] rounded-[5px] p-2'/>
                </div>
                <div className='flex justify-center items-center gap-3'>
                    <label className='text-[14px] text-[#000000]'>{`Mother's Name:`}</label>
                    <input type='text' placeholder={`Mother's Name`} className='outline-none border-[1px] placeholder:text-[#000000] placeholder:text-[14px] border-[#848484] bg-[#ffffff] rounded-[5px] p-2'/>
                </div>
                <div className='flex justify-center items-center gap-3'>
                    <label className='text-[14px] text-[#000000]'>Date Of Birth:</label>
                    <input type='date'  className='outline-none border-[1px] placeholder:text-[#000000] placeholder:text-[14px] border-[#848484] bg-[#ffffff] rounded-[5px] p-2'/>
                </div>
                <div className='flex justify-center items-center gap-3'>
                    <label className='text-[14px] text-[#000000]'> Student Image:</label>
                    <input type='file'  className='outline-none border-[1px] placeholder:text-[#000000] placeholder:text-[14px] border-[#848484] bg-[#ffffff] rounded-[5px] p-2'/>
                </div>
                <div className='flex justify-center items-center gap-3'>
                    <label className='text-[14px] text-[#000000]'> Gender:</label>
<div className='flex gap-10'>
<div className='flex justify-center items-center gap-2'><input type='radio'  className='outline-none border-[1px] placeholder:text-[#000000] placeholder:text-[14px] border-[#848484] bg-[#ffffff] rounded-[5px] p-2'/>Male</div>
<div className='flex justify-center items-center gap-2'>                    <input type='radio'  className='outline-none border-[1px] placeholder:text-[#000000] placeholder:text-[14px] border-[#848484] bg-[#ffffff] rounded-[5px] p-2'/>Female</div>
</div>
                </div>
                <div className='flex justify-center items-center gap-3'>
                    <label className='text-[14px] text-[#000000]'>Category:</label>
<div className='flex gap-10 flex-wrap'>
<div className='flex justify-center items-center gap-2'><input type='radio'  className='outline-none border-[1px] placeholder:text-[#000000] placeholder:text-[14px] border-[#848484] bg-[#ffffff] rounded-[5px] p-2'/>General</div>
<div className='flex justify-center items-center gap-2'>                    <input type='radio'  className='outline-none border-[1px] placeholder:text-[#000000] placeholder:text-[14px] border-[#848484] bg-[#ffffff] rounded-[5px] p-2'/>OBC</div>
<div className='flex justify-center items-center gap-2'>                    <input type='radio'  className='outline-none border-[1px] placeholder:text-[#000000] placeholder:text-[14px] border-[#848484] bg-[#ffffff] rounded-[5px] p-2'/>SC</div>
<div className='flex justify-center items-center gap-2'>                    <input type='radio'  className='outline-none border-[1px] placeholder:text-[#000000] placeholder:text-[14px] border-[#848484] bg-[#ffffff] rounded-[5px] p-2'/>ST</div>
<div className='flex justify-center items-center gap-2'>                    <input type='radio'  className='outline-none border-[1px] placeholder:text-[#000000] placeholder:text-[14px] border-[#848484] bg-[#ffffff] rounded-[5px] p-2'/>PWD</div>
</div>
                </div>
                <div className='flex justify-center items-center gap-3'>
                    <label className='text-[14px] text-[#000000]'>Address:</label>
                    <input type='text' placeholder='Address' className='outline-none border-[1px] placeholder:text-[#000000] placeholder:text-[14px] border-[#848484] bg-[#ffffff] rounded-[5px] p-2'/>
                </div>
                <div className='flex justify-center items-center gap-3'>
                    <label className='text-[14px] text-[#000000]'>Domicile:</label>
                    <input type='text' placeholder='Domicile' className='outline-none border-[1px] placeholder:text-[#000000] placeholder:text-[14px] border-[#848484] bg-[#ffffff] rounded-[5px] p-2'/>
                </div>
                <div className='flex justify-center items-center gap-3'>
                    <label className='text-[14px] text-[#000000]'>Email:</label>
                    <input type='text' placeholder='Email' className='outline-none border-[1px] placeholder:text-[#000000] placeholder:text-[14px] border-[#848484] bg-[#ffffff] rounded-[5px] p-2'/>
                </div>
                <div className='flex justify-center items-center gap-3'>
                    <label className='text-[14px] text-[#000000]'>Phone:</label>
<div className='flex justify-center items-center gap-5'>
<input type='text' placeholder='Phone' className='outline-none border-[1px] placeholder:text-[#000000] placeholder:text-[14px] border-[#848484] bg-[#ffffff] rounded-[5px] p-2'/>
<input type='text' placeholder='Phone' className='outline-none border-[1px] placeholder:text-[#000000] placeholder:text-[14px] border-[#848484] bg-[#ffffff] rounded-[5px] p-2'/>
<input type='text' placeholder='Phone' className='outline-none border-[1px] placeholder:text-[#000000] placeholder:text-[14px] border-[#848484] bg-[#ffffff] rounded-[5px] p-2'/>
</div>
                </div>
                <div className='flex justify-center items-center gap-3'>
                    <label className='text-[14px] text-[#000000]'> Service:</label>
<div className='flex gap-10'>
<div className='flex justify-center items-center gap-2'><input type='checkbox'  className='outline-none border-[1px] placeholder:text-[#000000] placeholder:text-[14px] border-[#848484] bg-[#ffffff] rounded-[5px] p-2'/>Engineering</div>
<div className='flex justify-center items-center gap-2'>                    <input type='checkbox'  className='outline-none border-[1px] placeholder:text-[#000000] placeholder:text-[14px] border-[#848484] bg-[#ffffff] rounded-[5px] p-2'/>MBBS</div>
<div className='flex justify-center items-center gap-2'><input type='checkbox'  className='outline-none border-[1px] placeholder:text-[#000000] placeholder:text-[14px] border-[#848484] bg-[#ffffff] rounded-[5px] p-2'/>MD/MS/PG DIPLOMA</div>
<div className='flex justify-center items-center gap-2'>                    <input type='checkbox'  className='outline-none border-[1px] placeholder:text-[#000000] placeholder:text-[14px] border-[#848484] bg-[#ffffff] rounded-[5px] p-2'/>BDS & MDS</div>
<div className='flex justify-center items-center gap-2'><input type='checkbox'  className='outline-none border-[1px] placeholder:text-[#000000] placeholder:text-[14px] border-[#848484] bg-[#ffffff] rounded-[5px] p-2'/>DM/MCH/DNBSS</div>
</div>
                </div>
                <div className='flex justify-center items-start gap-3 '>
                    <label className='text-[14px] text-[#000000]'>School Name:</label>
                    <input type='text' placeholder='School Name' className='outline-none border-[1px] placeholder:text-[#000000] placeholder:text-[14px] border-[#848484] bg-[#ffffff] rounded-[5px] p-2  '/>
                </div>
                <div className='flex justify-center items-start gap-3 '>
                    <label className='text-[14px] text-[#000000]'>Coaching Institute Name:</label>
                    <input type='text' placeholder='Coaching Institute Name' className='outline-none border-[1px] placeholder:text-[#000000] placeholder:text-[14px] border-[#848484] bg-[#ffffff] rounded-[5px] p-2  '/>
                </div>
                <div className='flex justify-center items-center gap-3'>
                    <label className='text-[14px] text-[#000000]'> Board:</label>
<div className='flex gap-10 flex-wrap'>
<div className='flex justify-center items-center gap-2'><input type='radio'  className='outline-none border-[1px] placeholder:text-[#000000] placeholder:text-[14px] border-[#848484] bg-[#ffffff] rounded-[5px] p-2'/>CBSE</div>
<div className='flex justify-center items-center gap-2'>                    <input type='radio'  className='outline-none border-[1px] placeholder:text-[#000000] placeholder:text-[14px] border-[#848484] bg-[#ffffff] rounded-[5px] p-2'/>ICSE</div>
<div className='flex justify-center items-center gap-2'>                    <input type='radio'  className='outline-none border-[1px] placeholder:text-[#000000] placeholder:text-[14px] border-[#848484] bg-[#ffffff] rounded-[5px] p-2'/>Any Other</div>
<div className='flex justify-center items-center gap-2'>                    <input type='radio'  className='outline-none border-[1px] placeholder:text-[#000000] placeholder:text-[14px] border-[#848484] bg-[#ffffff] rounded-[5px] p-2'/>Appeared in 12th</div>
<div className='flex justify-center items-center gap-2'>                    <input type='radio'  className='outline-none border-[1px] placeholder:text-[#000000] placeholder:text-[14px] border-[#848484] bg-[#ffffff] rounded-[5px] p-2'/>Appearing in 12th</div>
</div>
                </div>
                <div className='flex justify-center items-start gap-3 '>
                    <label className='text-[14px] text-[#000000]'>Other Board Name:</label>
                    <input type='text' placeholder='Board Name:' className='outline-none border-[1px] placeholder:text-[#000000] placeholder:text-[14px] border-[#848484] bg-[#ffffff] rounded-[5px] p-2  '/>
                </div>
                <div className='flex justify-start items-center gap-5 my-5'>
                    <button className='py-2 px-5 bg-blue-400 text-white rounded-md hover:bg-red-400'>Submit</button>
                    <button className='py-2 px-5 bg-red-400 text-white rounded-md hover:bg-blue-400'>Reset</button>
                </div>
            </form>
        </div>
       </div>
      </div>
    </div>
  )
}

export default Enroll
