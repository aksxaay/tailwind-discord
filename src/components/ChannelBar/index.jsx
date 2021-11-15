// this is a hook
import { useState } from 'react';
import { BsHash } from 'react-icons/bs';
import { FaChevronDown, FaChevronRight, FaPlus } from 'react-icons/fa';

// some hard-coded lame shit
const topics = ['tailwind-css', 'react'];
const questions = ['jit-compilation', 'purge-files', 'dark-mode'];
const random = ['variants', 'plugins'];


const ChannelBar = () => {
  return (
    <div className='channel-bar shadow-lg'>
      <ChannelBlock />
      <div className='channel-container'>
        {/* <Dropdown header='Topics' selections={topics} />
        <Dropdown header='Questions' selections={questions} />
        <Dropdown header='Random' selections={random} /> */}
      </div>
    </div>
  );
};


const ChannelBlock = () => (
  <div className='channel-block'>
    <h5 className='channel-block-text'>Channels</h5>
  </div>
);


export default ChannelBar