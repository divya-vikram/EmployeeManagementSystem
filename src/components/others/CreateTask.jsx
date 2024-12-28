import React from 'react'

export const CreateTask = () => {
  return (
    <div className='mt-7 rounded bg-[#1C1C1C] p-5 '>
            <h1 className='text-2xl font-medium mb-10 bg-blue-500 p-2 w-full h-[145%] text-center rounded'>Task Manager</h1>
            <form className='flex flex-wrap w-full items-start justify-between'>
                <div className='w-1/2'>
                    <div className='mt-5'>
                        <h3 className='text-xl text-white-300 mb-0.5'>Task</h3>
                        <input className='text-xl px-2 py-1 w-4/5 outline-none bg-transparent border-[1px] border-gray-400' type="text" placeholder='Enter Your Task Name'/>
                    </div>
                    
                    
                    <div>
                        <h3 className='text-xl text-white-300 mb-0.5'>Assign to:</h3>
                        <input className='text-sm px-2 py-1 w-4/5 outline-none bg-transparent border-[1px] border-gray-400' />
                    </div>
                    <div>
                        <h3 className='text-xl text-white-300 mb-0.5'>Date:</h3>
                        <input className='text-sm px-2 py-1 w-4/5 outline-none bg-transparent border-[1px] border-gray-400' type="datetime"/>
                    </div>
                    <div>
                        <h3 className='text-xl text-white-300 mb-0.5'>Category</h3>
                        <input className='text-sm px-2 py-1 w-4/5 outline-none bg-transparent border-[1px] border-gray-400' type="text"  />
                    </div>
                </div>
                <div className='w-2/5 flex flex-col items-start mt-6'>
                    <h3 className='text-xl text-white-300 mb-0.5'>Description</h3>
                    <textarea className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400' name="" id="" cols="22" placeholder='Enter the task Description'></textarea>
                </div>
                <button className='bg-red-300 py-3 px-5 hover:bg-red-500 rounded-xl ml-[25%] text-sm mt-28 w-[50%]'>Create Task</button>
            </form>
        </div>
  )
}
