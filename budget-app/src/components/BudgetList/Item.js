import React from 'react'
import { useDispatch } from 'react-redux';
import { actDeleteBudget } from '../../actions';
import { formatPrice, calRatio } from './../../helper';

export const Item = ({ data, total }) => {
  const dispatch = useDispatch()
  let { name, price, id } = data

  const handleDelete = (id) => {
    dispatch(actDeleteBudget(id))
  }

  return (
    <div className="expenses__list">
      <div className="item clearfix">
        <div className="item__description">{name}</div>
        <div className="right clearfix">
          <div className="item__value">{formatPrice(price)}</div>
          {price < 0 &&
            <div className="item__percentage"> {calRatio(price, total)}%</div>
          }
          <div className="item__delete">
            <button
              className="item__delete--btn"
              onClick={() => handleDelete(id)}
            >
              <i className="ion-ios-close-outline"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
