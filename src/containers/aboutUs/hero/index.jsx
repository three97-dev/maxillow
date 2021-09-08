import React, { useRef } from 'react';
import { getSrcSet, useWindowSize } from '../../../hooks/getWidth';
import AboutBg from './../../../images/pattern5.png';
import AboutBg2 from './../../../images/pattern6.svg';
import ArrowDownWhite from './../../../images/ArrowDownWhite.png';

import './index.scss';

function HeroSection({
  backgroundColor = 'primary',
  shadeLess,
  marBot,
  ...props
}) {
  const { mainHeading, shortDescription, ctaText, heroImage } =
    props.data.edges[0].node;
  const imgRef = useRef(null);
  const imgSize = useWindowSize(imgRef);

  const backgroundColorMapper = {
    primary: '#EB6024',
    bgSecondary: '#5765CE',
    grey: '#64555A',
  };

  return (
    <div className={`${marBot ? 'common-hero-main-container' : ''}`}>
      <div
        className={`bg-cover bg-no-repeat py-10 lg:py-16 z-20`}
        style={{
          backgroundImage: `url(${
            shadeLess ? AboutBg2 : AboutBg
          }), linear-gradient(
          180deg
          , ${backgroundColorMapper[backgroundColor]} ${
            shadeLess ? 80 : 75
          }%, white ${shadeLess ? 80 : 75}%)`,
          backgroundPosition: 'left center',
        }}
      >
        <div className='container mx-auto max-w-7xl xl:min-h-screen flex flex-col justify-center pb-6 lg:pb-0'>
          <div className='flex lg:flex-row flex-col-reverse justify-center items-center'>
            <div className='w-6/12 lg:w-1/2'>
              <img
                className='w-full'
                ref={imgRef}
                srcSet={getSrcSet(heroImage?.file?.url, imgSize?.width)}
                alt=''
                loading='lazy'
              />
            </div>
            <div className='w-8/12 lg:w-3/4 flex-1 text-center  p-4 abosulte m-4 lg:m-0 lg:px-8'>
              {props.miniHeading && (
                <h2 className='text-white uppercase mb-2'>
                  {props.miniHeading}
                </h2>
              )}
              <h1 className='uppercase mb-3 text-white'>{mainHeading}</h1>
              <p className='text-white'>{shortDescription}</p>
              <div className='text-center py-6 hidden lg:block'>
                <a href='#main-content'>
                  <h2 className='flex-1 text-white uppercase mb-2'>
                    {ctaText}
                  </h2>
                  <button>
                    <img src={ArrowDownWhite} alt='' />
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className='text-center pt-6 block lg:hidden mb-8'>
            <a href='#main-content'>
              <h2 className='flex-1 text-white uppercase mb-2'>{ctaText}</h2>
              <button>
                <img src={ArrowDownWhite} alt='' />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
