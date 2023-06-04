import Image from 'next/image';
import Head from 'next/head';
import { useRef, useEffect } from "react";
import Lottie from "lottie-web";
import styled from '@emotion/styled';
import LottieContainer from '@/components/UI/LottieContainer/LottieContainer';
import { InfoSection } from '@/components/Sections/InfoSection/InfoSection';
import { RuleSection } from '@/components/Sections/RuleSection/RuleSection';
import { TitleSection } from '@/components/Sections/TitleSection/TitleSection';
import { Flex } from '@/components/UI/FlexBox';
import { ApplySection } from '@/components/Sections/ApplySection/ApplySection';
import { Divder } from '@/components/UI/Divider/Divder';

export const Wrapper = styled(Flex)`
  width: 100%;
  height: 100%;
`;

export const Background = styled.div`
  opacity: 0.32 !important;
  border-radius: 16px;
  display: flex;
  justify-content: flex-end;
  overflow: hidden;
  display: inline-block;
  text-align: right;

  svg {
    position: fixed;
    top: 0;
    left: 0;
    height: 100% !important;
    width: 100%
  }
`;

export default function Home() {

  return (
    <>
      <Background>
        <LottieContainer path={"/lottie/purple_computer.json"} />
      </Background>
      <Wrapper flex={'columnCenter'}>
        <TitleSection />
        <div id="rule">
          <Divder />
        </div>
        <RuleSection />
        <div id="info">
          <Divder />
        </div>
        <InfoSection />
        <div id="apply">
          <Divder />
        </div>
        <ApplySection />
      </Wrapper>
    </>
  );
}