'use client';
import React, { useState } from 'react';
import { Search } from './components/Search';

import { useSearchParams } from 'next/navigation';
import { CustomMotionDiv } from '@/app/components/common/CustomMotionDiv';
import { Blur } from './components/common/Blur';

const Home = () => {
  const searchParams = useSearchParams();
  const channelId = searchParams.get('channelId');

  const hasChannelId = channelId !== null;

  return (
    <>
      <Blur
        position={'absolute'}
        bottom={0}
        right={-40}
        style={{ filter: 'blur(100px)' }}
        rotate={'45deg'}
      />
      <Blur
        position={'absolute'}
        top={140}
        left={10}
        style={{ filter: 'blur(100px)' }}
        rotate={'45deg'}
      />
      <CustomMotionDiv showPage={hasChannelId}>
        another awesome component
      </CustomMotionDiv>
      <CustomMotionDiv showPage={!hasChannelId}>
        <Search />
      </CustomMotionDiv>
    </>
  );
};

export default Home;
