import React from 'react'

const MenuNavBar = () => {
  return (
    <div  className='p-4 border'>
        <ul className='flex m-2  text-center justify-center'>
            <li className='mr-5 font-bold'>All Categories</li>
            <li className='mr-5'>Cars</li>
            <li className='mr-5'>Motorcycles</li>
            <li className='mr-5'>Mobile Phones</li>
            <li className='mr-5'>For Sale:House & Apartments</li>
            <li className='mr-5'>Scooter</li>
            <li className='mr-5'>Commercial & Other Vehicles</li>
            <li className='mr-5'>For Rent: Houses & Apartments</li>
        </ul>
    </div>
  )
}

export default MenuNavBar;
