// import React, { useState } from 'react';
// import logo from './assets/tw logo.png';
// import { FaSearch, FaBars } from 'react-icons/fa';

// const App = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <div className='min-h-screen bg-gradient-to-r from-blue-400 to-emerald-400'>
//       <header className='flex justify-between items-center py-6 px-8 md:px-32 bg-white shadow-md'>

//         {/* Logo */}
//         <a href='#'>
//           <img src={logo} alt='Logo' className='w-52 hover:scale-105 transition-all' />
//         </a>

//         {/* Desktop Menu */}
//         <ul className='hidden xl:flex items-center gap-12 font-semibold text-base'>
//           <li className='p-3 hover:bg-sky-300 bg-white rounded-md transition-all cursor-pointer hover:scale-105'>Home</li>
//           <li className='p-3 hover:bg-sky-300 bg-white rounded-md transition-all cursor-pointer hover:scale-105'>Products</li>
//           <li className='p-3 hover:bg-sky-300 bg-white rounded-md transition-all cursor-pointer hover:scale-105'>Explore</li>
//           <li className='p-3 hover:bg-sky-300 bg-white rounded-md transition-all cursor-pointer hover:scale-105'>Contact</li>
//         </ul>

//         {/* Search Bar */}
//         <div className='relative hidden md:flex items-center justify-center gap-3'>
//           <FaSearch className="absolute left-3 text-gray-500 text-xl hover:scale-105 transition-all" />
//           <input 
//             type="text" 
//             placeholder="Search..."  
//             className='py-2 pl-10 rounded-xl border-2 border-sky-400 bg-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500' 
//           />
//         </div>

//         {/* Hamburger Icon (visible on mobile only) */}
//         <div className="xl:hidden">
//           <FaBars 
//             className="text-2xl cursor-pointer text-gray-500 hover:scale-105 transition-all" 
//             onClick={() => setIsMenuOpen(!isMenuOpen)} 
//           />
//         </div>
//       </header>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <ul className="xl:hidden bg-white w-full flex flex-col items-center py-6 gap-4 font-semibold text-lg shadow-md">
//           <li className='cursor-pointer hover:bg-sky-400 w-full text-center p-3 hover:text-white'>Home</li>
//           <li className='cursor-pointer hover:bg-sky-400 w-full text-center p-3 hover:text-white'>Products</li>
//           <li className='cursor-pointer hover:bg-sky-400 w-full text-center p-3 hover:text-white'>Explore</li>
//           <li className='cursor-pointer hover:bg-sky-400 w-full text-center p-3 hover:text-white'>Contact</li>
//         </ul>
//       )}
//     </div>
//   );
// };

// export default App;
import React, { useState } from 'react';
import logo from './assets/tw logo.png';
import { FaSearch, FaBars } from 'react-icons/fa';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='min-h-screen bg-gradient-to-r from-sky-300 via-blue-200 to-green-200






'>
      <header className='flex justify-between items-center py-6 px-8 md:px-32 bg-white shadow-md'>

        {/* Logo */}
        <a href='#'>
          <img src={logo} alt='Logo' className='w-52 hover:scale-105 transition-all' />
        </a>

        {/* Desktop Menu */}
        <ul className='hidden xl:flex items-center gap-12 font-semibold text-base'>
          <li className='p-3 hover:bg-sky-300 bg-white rounded-md transition-all cursor-pointer hover:scale-105'>Home</li>
          <li className='p-3 hover:bg-sky-300 bg-white rounded-md transition-all cursor-pointer hover:scale-105'>Products</li>
          <li className='p-3 hover:bg-sky-300 bg-white rounded-md transition-all cursor-pointer hover:scale-105'>Explore</li>
          <li className='p-3 hover:bg-sky-300 bg-white rounded-md transition-all cursor-pointer hover:scale-105'>Contact</li>
        </ul>

        {/* Search Bar */}
        <div className='relative hidden md:flex items-center justify-center gap-3'>
          <FaSearch className="absolute left-3 text-gray-500 text-xl hover:scale-105 transition-all" />
          <input 
            type="text" 
            placeholder="Search..."  
            className='py-2 pl-10 rounded-xl border-2 border-sky-400 bg-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500' 
          />
        </div>

        {/* Hamburger Icon (visible on mobile only) */}
        <div className="xl:hidden">
          <FaBars 
            className="text-2xl cursor-pointer text-gray-500 hover:scale-105 transition-all" 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
          />
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="xl:hidden bg-white w-full flex flex-col items-center py-6 gap-4 font-semibold text-lg shadow-md">
          <li className='cursor-pointer hover:bg-sky-400 w-full text-center p-3 hover:text-white'>Home</li>
          <li className='cursor-pointer hover:bg-sky-400 w-full text-center p-3 hover:text-white'>Products</li>
          <li className='cursor-pointer hover:bg-sky-400 w-full text-center p-3 hover:text-white'>Explore</li>
          <li className='cursor-pointer hover:bg-sky-400 w-full text-center p-3 hover:text-white'>Contact</li>
        </ul>
      )}
    </div>
  );
};

export default App;

