import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div id='navbar'>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" className="bi-apple" viewBox="0 0 16 16">
              <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282"/>
            </svg>
            </span>
          </a>
        </div>
        <div className="flex-1 justify-center items-center">
          <a href="/" className="btn btn-primary btn-sm">
            All Product
          </a>
        </div>
        <div className="flex gap-2">
          <a
            href="/CartPage" className="btn btn-outline btn-sm" 
            style={{ backgroundColor: 'black', color: 'white',
             borderColor: 'black' }}>
            Cart
          </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar