import React from 'react';

function Footer() {
  return (
    <footer className="bg-slate-900 text-white p-6 text-center border-t-1 border-slate-800 drop-shadow-lg">
      <div className="container mx-auto">
        <p className="mb-4">© 2025 Your Company Name. All Rights Reserved.</p>
        <div className="space-x-6">
          <a href="#" className="hover:text-gray-400">Privacy Policy</a>
          <a href="#" className="hover:text-gray-400">Terms of Service</a>
          <a href="#" className="hover:text-gray-400">Kontakta oss</a>
        </div>
      </div>
    </footer>
  );
}


export default Footer;