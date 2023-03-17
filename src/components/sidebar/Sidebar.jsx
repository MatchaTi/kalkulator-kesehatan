import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { GlobalContext } from '../../context/GlobalContext';

const Sidebar = () => {
  const { dataAplikasi } = useContext(GlobalContext);
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <aside className='font-Poppins'>
      <div
        className={`fixed left-0 top-0 right-0 z-10 mx-auto grid w-full grid-cols-3 items-center justify-between bg-white px-4 py-3 md:mx-0 md:w-72 md:grid-cols-1 md:px-0`}
      >
        <div className='col-span-2 md:py-10'>
          <Link to={'/'}>
            <h1 className='text-xl font-bold text-main md:pl-5'>Kalkulator Kesehatan</h1>
          </Link>
        </div>
        <div
          className={`absolute ${
            nav ? '-top-[1000px]' : 'top-0 text-4xl'
          }  left-0 flex h-screen w-full flex-col justify-center bg-white bg-opacity-75 font-medium text-gray-700 duration-500 ease-in-out sm:static md:justify-start `}
        >
          {dataAplikasi &&
            dataAplikasi.map((element, index) => {
              return (
                <Link to={element.path} key={index}>
                  <div className='group flex items-center gap-x-4 py-5 pl-4 hover:bg-main md:px-5'>
                    <img src={element.icon} alt='Kalkulator Kalori' className='w-10' />
                    <h2 className='text-lg font-semibold group-hover:text-white'>{element.title}</h2>
                  </div>
                </Link>
              );
            })}
        </div>
        <div className='justify-self-end'>
          <button onClick={handleNav} className='relative z-10 sm:hidden'>
            {nav ? <AiOutlineMenu /> : <AiOutlineClose />}
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
