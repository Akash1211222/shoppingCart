import React from 'react'
import { useState } from 'react';
import Spinner from '../components/Spinner';
import Product from '../components/Product';
import { useEffect } from 'react';

const Home = () => {

    const API_URL = "https://fakestoreapi.com/products";

    const [loading, setLoading] = useState(false)
    const [post, setPost] = useState([])
    
    async function fetchProductData() {
        setLoading(true);

        try {
            const res = await fetch(API_URL);
            const data = await res.json();
            setPost(data);
        } catch (e) {
            console.log("Erroir aaa gya kya kraga")
            setPost([]);
        }
        setLoading(false);
    }


    useEffect(() => {
      
        fetchProductData();
    },[])


  return (
      <div>
          
          {
              loading ? <Spinner /> : post.length > 0 ?
                  
                  (<div >
                      {
                          post.map((post) => {
                              <Product key={post.id} post={post} />
                          })
                      }
              </div>):
                  <div>
                    <p>NO Data Found</p>
                  </div>
          }

    </div>
  )
}
 export default Home