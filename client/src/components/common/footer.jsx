import React from 'react';

function Footer() {
  return (
    <footer className="bg-blue-800 text-white p-4 font-size-14 font-[Arial] justify-around flex  flex-wrap ">
      <div className="mb-6">
        <h3 className="mb-3 text-amber-500">About Us</h3>
        <p className="mb-3">Welcome to our Fleet Tracking System.</p><br />
        <p></p>
      </div>
      <div className="mb-6">
        <h3 className="mb-3 text-amber-500">Quick Links</h3>
        <ul className="p-0">
          <li className="mb-2"><a href="#" className='text-white-300 hover:bg-amber-400'>Home</a></li>
          <li className="mb-2"><a href="#" className='text-white-300 hover:bg-amber-400'>Track</a></li>
          <li className="mb-2"><a href="#" className='text-white-300 hover:bg-amber-400'>Contact</a></li>
        </ul>
      </div>
      <div>
        <h3 className="mb-3 text-amber-500">Contact</h3>
        <p className="mb-3">Email: abc@gmail.com</p>
        <p className="mb-3">Phone: +123 456 7890</p>
      </div>
    </footer>
  );
}

export default Footer;
