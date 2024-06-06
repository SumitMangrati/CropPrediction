import React from 'react'
import Dropbox1 from './Dropbox1'
import DropBox2 from './DropBox2'
import FormNumbers from './FormNumbers'

function Form() {
  return (
    <div>
    <div className='w-full flex align-middle items-center justify-center border-2 px-3 py-6 sm:py-6 px-[3rem] rounded-xl text-sm'>
        <form action="#" className='flex flex-col'>
            <Dropbox1/>
            <DropBox2/>
            <FormNumbers />
            <input type="submit" value="Recommend" className=' mt-4 text-white border-2 px-4 py-1 rounded-md cursor-pointer bg-green-600 hover:opacity-90 ' />
        </form>
    </div>
    <div>result</div>
    </div>
  )
}

export default Form