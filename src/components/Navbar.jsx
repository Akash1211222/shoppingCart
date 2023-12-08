import React from 'react'
import { FaOpencart } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
      <div>
          <div className=' flex flex-row justify-between'>
              <NavLink to="/">
                  <div>
                  <img src="https://e7.pngegg.com/pngimages/757/376/png-clipart-shopping-open-woman-woman-people-monochrome.png" width= "80px"  alt="" />
                  </div>
             </NavLink>
              <div>
                  
                  <NavLink to ="/">
                      <div>
                      <p>Home</p>
                      </div>
                  </NavLink>
                  
                  <NavLink to="/cart">
                      <div>
                      <FaOpencart />
                      </div>
                  </NavLink>
                        
                      
                  
              </div>
          </div>
    </div>
  )
}

export default Navbar