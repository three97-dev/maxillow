import React from 'react';

// Assets and styles
import './index.scss';
import homeBgPattern from '../../../images/homeBgPattern.svg';
import PatternBlue from '../../../images/pattern-blue.svg';
import Pattern from '../../../images/pattern.svg';

const ProcedureContainer = ({ children, patternGroupTwo }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${homeBgPattern})`,
      }}
      className='procedure-main-container relative overflow-hidden pb-20 md:pb-32 lg:pb-24 z-10'
      id='main-content'
    >
      {patternGroupTwo ? (
        <>
          <img src={Pattern} className='procedure-2-image' alt="" />
        </>
      ) : (
        <>
          <img src={Pattern} className='procedure-horizontal-image' alt="" />
          <img src={Pattern} className='procedure-left-image' alt="" />
          <img src={Pattern} className='procedure-left-image-2' alt="" />
        </>
      )}
      {children}
      {patternGroupTwo ? (
        <img src={Pattern} className='procedure-2-footer-image' alt="" />
      ) : (
        <img src={PatternBlue} className='procedure-footer-image' alt="" />
      )}
    </div>
  );
};

export default ProcedureContainer;
