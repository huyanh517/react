import React from 'react'

export const Button = ({ icon, value, className }) => {
  return (
    <button className={`btn ${className}`} icon>
      {icon}
      {value}
    </button>
  )
}
