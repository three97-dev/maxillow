import React, { useRef } from 'react';
import { getSrcSet, useWindowSize } from '../../../hooks/getWidth';

function Service(props) {
  const data = props.data.edges[0].node;
  const imgRef = useRef(null);
  const imgSize = useWindowSize(imgRef);

  return (
    <div className='global-x-spacing p-4 py-24'>
      <div className='flex flex-col max-w-3xl m-auto items-center'>
        <div className='w-sm flex-1'>
          <h3 className='text-center py-3'>{data.title}</h3>
          <h2 className='py-1 text-center'>{data.description}</h2>
        </div>
      </div>
      <div className='border-t border-secondary max-w-lg mx-auto w-48 lg:w-60 my-6' />
      <div className='flex flex-col lg:flex-row  justify-center items-center flex-nowrap lg:justify-between mt-16'>
        {data.images.map((v, i) => {
          return (
            <img
              key={`image-key-${i}`}
              ref={imgRef}
              className='w-44 lg:w-72 mb-12 lg:mb-0'
              srcSet={getSrcSet(v.file.url, imgSize.width)}
              alt=''
            />
          );
        })}
      </div>
    </div>
  );
}

export default Service;
