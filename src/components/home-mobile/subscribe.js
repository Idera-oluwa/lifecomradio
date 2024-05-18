import React from 'react'

const subscribe = () => {
  return (
    <div className='mt-[5rem] flex flex-col items-center'>
        <p className='font-semibold text-white leading-[21.78px] text-[18px] text-center'>Subscribe to stay updated</p>
        <p className='text-[12px] font-normal text-white leading-[14.5px] text-center w-[336px] mt-[0.5rem]'>Be the first to get information on added shows and podcasts on Lifecom radio 87.7fm</p>
        <form
       action="https://formspree.io/f/xgegqzod"
       method="POST"
        className='flex flex-row mt-[2rem]'>
                <input type='text' name='text' placeholder='Email address' className='w-[209px] h-[42px] outline outline-[1px] outline-[#324A5F] text-[10px] font-medium text-[#CCC9DC] leading-[12px] bg-transparent px-[1rem] rounded-[4px]'/>
                <button  type="submit" className='bg-[#324A5F] w-[50px] h-[45px] flex items-center justify-center ml-[0.5rem] rounded-[4px] cursor-pointer mt-[-0.1rem]'>
                 <img src='/images/home/subs-btn.svg' alt='' className='w-[16px] h-[16px]'/>
                </button>
            </form>
    </div>
  )
}

export default subscribe