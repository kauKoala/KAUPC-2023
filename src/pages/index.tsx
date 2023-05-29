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

  /* 리본 CSS */
.container {
  width: 100%;
  --d: 6px; /* folded part */
  --c: rgb(31, 31, 141); /* color */
  --f: 24px; /* ribbon font-size */
  position: relative;
}
.container::before {
  content: attr(data-ribbon);
  font-size: var(--f);
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(29.29%, -100%) rotate(45deg);
  transform-origin: bottom left;
  padding: 5px 35px calc(var(--d) + 5px);
  background: linear-gradient(rgba(0, 0, 0, 0.5) 0 0) bottom/100% var(--d)
    no-repeat var(--c);
  clip-path: polygon(
    0 0,
    100% 0,
    100% 100%,
    calc(100% - var(--d)) calc(100% - var(--d)),
    var(--d) calc(100% - var(--d)),
    0 100%
  );
  -webkit-mask: linear-gradient(
        135deg,
        transparent calc(50% - var(--d) * 0.707),
        #fff 0
      )
      bottom left,
    linear-gradient(-135deg, transparent calc(50% - var(--d) * 0.707), #fff 0)
      bottom right;
  -webkit-mask-size: 300vmax 300vmax;
  -webkit-mask-composite: destination-in;
  mask-composite: intersect;
};

@media screen and (max-width: 800px) {
  .container::before {
    content: none;
  }
}
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
        <Divder />
        <InfoSection />
        <Divder />
        <RuleSection />
        <Divder />
        <ApplySection />
      </Wrapper>
    </>
  );
}