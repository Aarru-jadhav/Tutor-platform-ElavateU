import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 py-28 mt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-black">About Us</h2>
          <p className="text-[16px] font-medium">
            We provide the best online classes and resources for students around the world. 
            Join us and start your learning journey today.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-black">Quick Links</h2>
          <ul className="space-y-4 text-[16px] font-medium">
            <li><a href="#" className="hover:text-orange-600 transition">Home</a></li>
            <li><a href="#" className="hover:text-orange-600 transition">Courses</a></li>
            <li><a href="#" className="hover:text-orange-600 transition">About</a></li>
            <li><a href="#" className="hover:text-orange-600 transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-black">Contact Us</h2>
          <ul className="space-y-4 text-[16px] font-medium">
            <li>Email: support@example.com</li>
            <li>Phone: +1 (555) 123-4567</li>
            <li>Location: 123 Learning St, Knowledge City</li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-300 mt-8 pt-4 text-center text-sm font-medium">
        © {new Date().getFullYear()} Your Company Name. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
