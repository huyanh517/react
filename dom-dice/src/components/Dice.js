import React from 'react'
import "./Dice.css"
import Img1 from "./dice1.png"
import Img2 from "./dice2@2x.png"
import Img3 from "./dice3@2x.png"
import Img4 from "./dice4@2x.png"
import Img5 from "./dice5@2x.png"
import Img6 from "./dice6@2x.png"
import { useState } from 'react'

const IMAGES = [
  Img1,
  Img2,
  Img3,
  Img4,
  Img5,
  Img6,
]

console.log(Img1)

export const Dice = () => {

  const [firstImgSrc, setFirstImgSrc] = useState("")
  const [secondImgSrc, setSecondImgSrc] = useState("")
  const [isClicked, setIsClicked] = useState(false)

  const clickButtonHandler = () => {
    setIsClicked(true)
    setFirstImgSrc(IMAGES[Math.floor(Math.random() * (IMAGES.length))])
    setSecondImgSrc(IMAGES[Math.floor(Math.random() * (IMAGES.length))])
  }

  return (
    <div className="container">
      <div className="logo"><img src="/images/diceeLogo@2x.png" alt="" /></div>
      <div className="list-dice">
        <img
          className="dice-1"
          src={isClicked ? firstImgSrc : IMAGES[Math.floor(Math.random() * (IMAGES.length))]}
          alt=""
        />
        <img
          id="dice-2"
          src={isClicked ? secondImgSrc : IMAGES[Math.floor(Math.random() * (IMAGES.length))]}
          alt=""
        />
      </div>
      <button
        onClick={clickButtonHandler}
        className="roll-dice">
        Roll Dice
      </button>
    </div>
  )
}
