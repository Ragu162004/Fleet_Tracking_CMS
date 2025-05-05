import React from 'react'
//import './footer.css'

function footer() {
  return (
    
  <footer className="bg-black text-white p-4 d-flex justify-space-between font-size-14 font-family: Arial mb-0 position-relative">
  <div className="w-0.3">
    <h3 className="mb-0.3 text-amber-500">About Us</h3>
    <p>Welcome to our Fleet Tracking System</p>

  </div>
  <div className="w-0.3">
    <h3 className="mb-0.1 text-amber-500 ">Quick Links</h3>
    <ul className="p-4">
      <li><a href="#">Home</a></li>
      <li><a href="#">Track</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </div>
  <div className="w-0.3">
    <h3 className="mb-0.1 text-amber-500">Contact</h3>
    <p>Email: abc@example.com</p>
    <p>Phone: +123 456 7890</p>
  </div>
</footer>


    
  )
}
export default footer;
