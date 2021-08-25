import React from 'react'

export const ItemThumbnail = ({ thumbnail }) => {
  return (
    <div className="media-left">
      <a href="/#">
        <img
          className="media-object"
          src={thumbnail}
          alt="charmander"
        />
      </a>
    </div>
  )
}
