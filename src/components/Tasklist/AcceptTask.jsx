import 'react'

export const AcceptTask = () => {
  return (
    <div className='h-full w-[300px] flex-shrink-0 bg-yellow-400 rounded-xl p-5'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-500 text-sm px-3 py-1 rounded'>High</h3>
                <h4 className='text-sm'>20 feb 2020</h4>
              </div>
              <h2 className='mt-5 text-2xl font-semibold'>Lorem ipsum dolor sit amet consectetur.</h2>
              <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt iste ad odit harum dolore voluptatum illo?</p>
            <div className='flex justify-between mt-4'>
                <button className='py-1 px-2 text-sm bg-green-300'>Mark as Complete</button>
                <button className='py-1 px-2 text-sm bg-red-300'>Mark as Failed</button>
            </div>
    </div>
  )
}
export default AcceptTask
