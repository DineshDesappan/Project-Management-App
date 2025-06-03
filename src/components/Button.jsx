import React from 'react'

function Button({children, ...props}) {
  return (
    <button {...props} className="bg-stone-700 text-xs md:text-base rounded px-4 py-2 text-stone-400 hover:bg-stone-500 hover:text-stone-50">{children}</button>
  )
}

export default Button