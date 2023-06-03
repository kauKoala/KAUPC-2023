import React,{ ReactNode } from "react";
import * as S from './LinkBox.style';

export type LinkBoxProps = {
    children: ReactNode;
}

export const LinkBox = ({children}: LinkBoxProps) => {
    return(
        <S.Root>
            {children}
        </S.Root>
    )
}