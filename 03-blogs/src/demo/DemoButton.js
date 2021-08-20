import React from 'react'
import { Button } from '../shared/Button/Button'

export const DemoButton = () => {
  const clickHandler = () => {
    console.log("test")
  }

  return (
    <div className="tcl-container" style={{marginTop: "15px"}}>
      <Button
        type="primary"
        htmlType="submit"
        size="large"
        onClick={clickHandler}
        loading
        loadingPos=""
        className="custom"
        hehe="hi"
      >
        CLick me!
      </Button>
      <Button type="category" as="a" href="/">CLick</Button>
      <Button type=""> me!</Button>
    </div>
  )
}
