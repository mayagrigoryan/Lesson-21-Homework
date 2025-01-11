import React, {useContext} from 'react'
import { MyContext } from '../../context/context';
import style from './AddToBasket.module.css'

function AddToBasket({ product }) {
  const { addToBasket } = useContext(MyContext);
  return (
    <button className={style.addToBasket} onClick={() => addToBasket(product)}>Add to Cart</button>
  )
}

export default AddToBasket