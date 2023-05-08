import Image from 'next/image';
import Head from 'next/head';
import { useRef, useEffect } from "react";
import Lottie from "lottie-web";
import styled from '@emotion/styled';
import LottieContainer from '@/components/UI/LottieContainer/LottieContainer';

export default function Home() {

  return (
    <>
        <LottieContainer path={"/lottie/handphone.json"} />
    </>
  );
}