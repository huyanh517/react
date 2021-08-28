import React from 'react'
import './main-title.css'
import { Button } from '../Button/Button'
import classNames from 'classnames';

export const MainTitle = (
  { children,
    className,
    btnLabel,
    type = '',
    btnProps = {}
  }) => {
  
  const classes = classNames('main-title spacing', {
    'main-title__search': type === 'search',
    'd-flex tcl-jc-between tcl-ais-center': btnLabel
  }, className) 
  
  return (
    <div className={classes}>
        <h2>{children}</h2>
        {btnLabel && <Button {...btnProps}>{btnLabel}</Button>}
    </div>
  )
}
