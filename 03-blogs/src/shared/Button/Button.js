import React from 'react'

export const Button = ({ icon, value, type, size, onClick }) => {
  return (
    <button
      className={`btn btn-${type} btn-size-${size}`}
      onClick={onClick}
    >
      {icon}
      {value}
    </button>
  )
}
