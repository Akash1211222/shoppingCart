import React from 'react'
import Home from '../pages/Home'

const Product = ({post}) => {
  return (
      <div>
          <div>
              <p>{ post.title}</p>
          </div>
          <div>
              <p>
                  {post.description} 
              </p>
          </div>
          <div>
              <img src={post.image} />
          </div>
          <div>
              <p>{post.price }</p>
          </div>
          
    </div>
  )
}

export default Product