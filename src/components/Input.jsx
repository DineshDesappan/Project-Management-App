import React from 'react'

const classes = 'w-full p-1 border-b-2 border-stone-300 rounded-sm bg-stone-200  focus:outline-none text-stone-800' 
function Input({label, ref, textArea, ...props}) {
  return (
    <div className='flex flex-col gap-1 my-4'>
        <label className="text-sm font-bold uppercase text-stone-500" htmlFor="">{label}</label>
        {textArea? <textarea ref={ref} className={classes} {...props}/> : <input ref={ref} className={classes} {...props}/>}

    </div>
  )
}

export default Input