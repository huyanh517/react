import React, { useState } from 'react'
import { InputIcon } from './InputIcon'

export const Input = (
  {
    type,
    placeHolder,
    ariaLabel,
    onChange,
    isShowIcon,
    isShowHidePassword
  }) => {

  const [passwordShow, setPasswordShow] = useState(false);

  const togglePasswordHandler = () => {
    setPasswordShow(passwordShow ? false : true);
  };

  return (
    <>
      {isShowIcon ? <InputIcon /> : null}
      <input
        className="header-search__input"
        type={isShowHidePassword ? (passwordShow ? "text" : "password") : type}
        placeholder={placeHolder}
        aria-label={ariaLabel}
        onChange={onChange}
      />
      {isShowHidePassword ?
        <i
          class="toggle-password ion-eye"
          onClick={togglePasswordHandler}
          style={{cursor: "pointer"}}
        >
        </i> : null}
    </>
  )
}
