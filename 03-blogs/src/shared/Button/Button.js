import React from 'react'
import './button.css'
import classNames from 'classnames'
import { IconLoading } from '../IconLoading'

export const Button = (
  {
    type = "default",
    size,
    loading,
    loadingPos = "left",
    htmlType,
    as,
    className,
    children,
    ...restProps
  }) => {
    
  const classes = classNames("btn", {
    "btn-default": (type === "default"),
    "btn-primary": (type === "primary"),
    "btn-category": (type === "category"),
    "btn-size-large": size === "large",
    "btn-size-medium": size === "medium",
    "btn-size-small": (size === "small")
  }, className)

  const content = (
    <>
      {loading && (loadingPos === "left") && <IconLoading />}
      {children}
      {loading && loadingPos === "right" && <IconLoading />}
    </>
  )

  const injectedProps = {
    className: classes,
    type: htmlType,
    ...restProps
  }

  if (as === "a") {
    return (
      <a {...injectedProps}>{content}</a>
    )
  }

  return (
    <button {...injectedProps}>{content}</button>
  )
}

