import styled from '@emotion/styled';
import * as S from './LottieContainer.style'
import { useRef, useEffect } from "react";
import Lottie from "lottie-web";

export type LottieContainerProps = {
  path: string;
}

export const LottieContainer = ({ path }: LottieContainerProps) => {
  const lottieContainer = useRef<HTMLDivElement>(null);

    useEffect(() => {
        Lottie.loadAnimation({
        container: lottieContainer.current as HTMLDivElement,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: path,
        });

        return () => Lottie.destroy();
    }, []);

  return(
    <>
      <S.Root ref={lottieContainer} />
    </>
  )
}

export default LottieContainer;