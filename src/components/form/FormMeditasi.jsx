import React, { useState } from 'react';
import { SeaWave, blobAnimation, forestAudio, sunriseAudio, forest, pantai, sunrise } from '../../assets';
import { FormLayout } from '../../layout';
import { RelaxTimer, generateQuotes } from '../../utils';
import TitleMeditasi from '../title/TitleMeditasi';

const FormMeditasi = () => {
  const [status, setStatus] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const pilihan = {
    durasi: [
      {
        value: 900,
        label: '15 Menit',
      },
      {
        value: 1800,
        label: '30 Menit',
      },
      {
        value: 2700,
        label: '45 Menit',
      },
    ],
    tema: [
      { value: 'pantai-meditasi', label: 'Pantai', audio: SeaWave, bg: pantai },
      { value: 'forest-meditasi', label: 'Hutan', audio: forestAudio, bg: forest },
      { value: 'sunrise-meditasi', label: 'Matahari Terbit', audio: sunriseAudio, bg: sunrise },
    ],
  };

  const [input, setInput] = useState({
    durasi: 900,
    tema: 'pantai-meditasi',
    quotes: generateQuotes(),
  });

  const handleInput = (e) => {
    e.preventDefault();
    setStatus(true);
  };

  const durationHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.name == 'durasi' ? parseInt(e.target.value) : e.target.value });
  };

  const pauseHandler = () => {
    setIsPaused(!isPaused);
  };

  return (
    <div>
      <FormLayout>
        <div>
          <TitleMeditasi />
        </div>
        <div
          className={`${
            status ? `fixed top-0 left-0 h-screen w-full bg-transparent` : 'relative w-auto md:w-96'
          } mx-auto flex items-center justify-center rounded-lg transition-all duration-1000 ease-in-out`}
        >
          <img
            src={pilihan.tema.filter((e) => e.value == input.tema).map((item) => item.bg)}
            alt='gambar'
            className={`fixed top-0 left-0 -z-10 h-screen object-cover duration-1000 ease-in-out md:w-full ${
              status ? 'translate-x-0' : '-translate-x-full'
            } brightness-75`}
          />
          {status ? (
            <>
              <div className='flex flex-col items-center justify-center gap-10 p-1 text-center text-white md:gap-24'>
                <div className='relative flex h-80 w-80 items-center justify-center'>
                  <img src={blobAnimation} alt='animation' className='w-full' />
                  <RelaxTimer durasi={input.durasi} isPaused={isPaused} />
                </div>
                <button onClick={pauseHandler} className='rounded-full bg-white px-6 py-2 text-black shadow-sm'>
                  {isPaused ? 'Lanjut' : 'Jeda'}
                </button>
                <p className='text-lg'>{generateQuotes()}</p>
                <audio
                  src={pilihan.tema.filter((e) => e.value == input.tema).map((item) => item.audio)}
                  autoPlay
                  loop
                ></audio>
              </div>
            </>
          ) : (
            <form onSubmit={handleInput}>
              <div className='flex flex-col gap-10 rounded-lg bg-main p-2 md:p-10'>
                <div className='flex gap-10'>
                  {pilihan &&
                    Object.keys(pilihan).map((item, index) => {
                      return (
                        <div key={index}>
                          <p className='text-xl font-semibold capitalize text-white'>{item} : </p>
                          <select
                            name={item}
                            id={item}
                            onChange={durationHandler}
                            className='rounded-lg bg-white px-6 py-2 text-slate-600'
                          >
                            {item &&
                              pilihan[item].map((waktu, index) => {
                                return (
                                  <option key={index} value={waktu.value}>
                                    {waktu.label}
                                  </option>
                                );
                              })}
                          </select>
                        </div>
                      );
                    })}
                </div>
                <button type='submit' className='rounded-full bg-white px-6 py-2 shadow-sm'>
                  Mulai
                </button>
              </div>
            </form>
          )}
        </div>
      </FormLayout>
    </div>
  );
};

export default FormMeditasi;
