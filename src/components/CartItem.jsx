import React from 'react'
import { FcDeleteDatabase } from "react-icons/fc";

function CartItem({item, itemIndex}) {
  return (
      <div>
          <div>
              <div>
                  <img src="{item.image}" alt="" />
              </div>
              <div>
                  <h1>{item.title}</h1>
                  <h1>{item.desxription}</h1>
                  <div>
                      <p>{item.price}</p>
                  </div>
                  <div><FcDeleteDatabase/></div>
              </div>
          </div>
    </div>
  )
}

export default CartItem