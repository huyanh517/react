import classNames from 'classnames';
import React, { useState } from 'react'
import { IconSearch } from '../IconSearch';
import "./input.css"

export const Input = (
  {
    label,
    type = "text",
    ariaLabel,
    className,
    icon = <IconSearch />,
    ...restProps
  }) => {

  const [localType, setLocalType] = useState(type)
  // const [classIcon, setClassIcon] = useState('ion-eye')

  const passwordToggleHandler = () => {
    if (localType === 'password') {
      setLocalType("text")
      // setClassIcon("ion-eye")
    } else if (localType === 'text') {
      setLocalType('password')
      // setClassIcon("ion-eye-disabled")
    }
  }

  const classIcon = classNames('toggle-password', {
    'ion-eye': localType === 'password' ,
    'ion-eye-disabled': localType === 'text'
  })

  const classSearch = classNames('input-search__input', className)

  if (type === 'search') {
    return (
      <div className="input-search">
        {icon}
        <input
          className={classSearch}
          type={localType}
          name="query"
          {...restProps}       
        />
      </div>
    )
  }

  return (
    <div className="form-control">
      {label && <label htmlFor="">{label}</label>}
      {
        type === "password" &&
        <i
          className={classIcon}
          onClick={passwordToggleHandler}>
        </i>
      }
      <input
        type={localType}
        {...restProps}
        className={className}
      />
    </div>
  )
}
