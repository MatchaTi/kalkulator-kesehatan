import React, { useState } from 'react';

const Target = () => {
  const [target, setTarget] = useState('');

  const handleTarget = (e) => {
    setTarget(e);
    console.info(target);
  };

  return (
    <div>
      <h3 className='mb-2 text-xl font-medium'>Target</h3>
      <div className='mb-5'>
        <ul className='grid w-full gap-2 md:grid-cols-3'>
          <li>
            <input
              type='radio'
              onChange={(e) => handleTarget(e.target.value)}
              id='beratBadan'
              name='target'
              value='beratBadan'
              className='peer hidden'
              required
            />
            <label
              htmlFor='beratBadan'
              className='inline-flex w-full cursor-pointer items-center justify-between rounded bg-secondary p-2 font-medium text-gray-300 shadow-sm peer-checked:bg-darkBlue peer-checked:text-white'
            >
              <div className='w-full text-center'>
                <h2>Menurunkan berat badan</h2>
              </div>
            </label>
          </li>
          <li>
            <input
              onChange={(e) => handleTarget(e.target.value)}
              type='radio'
              id='masaOtot'
              name='target'
              value='masaOtot'
              className='peer hidden'
            />
            <label
              htmlFor='masaOtot'
              className='inline-flex w-full cursor-pointer items-center justify-between rounded bg-secondary p-2 font-medium text-gray-300 shadow-sm peer-checked:bg-darkBlue peer-checked:text-white'
            >
              <div className='w-full text-center'>
                <h2>Meningkatkan masa otot </h2>
              </div>
            </label>
          </li>
          <li>
            <input
              type='radio'
              onChange={(e) => handleTarget(e.target.value)}
              id='atlit'
              name='target'
              value='atlit'
              className='peer hidden'
              required
            />
            <label
              htmlFor='atlit'
              className='inline-flex h-full w-full cursor-pointer items-center justify-between rounded bg-secondary p-2 font-medium text-gray-300 shadow-sm peer-checked:bg-darkBlue peer-checked:text-white'
            >
              <div className='w-full text-center'>
                <h2>Aktivitas Tinggi</h2>
              </div>
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Target;
