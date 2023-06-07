import React,{ ReactNode } from "react";
import Link from "next/link";
import * as S from './LinkBox.style';

export type LinkBoxProps = {
    link: string;
    children: ReactNode;
}

export const LinkBox = ({link, children}: LinkBoxProps) => {
    return(
        <S.Root>
            <Link href={link} target="_blank">
                {children} 
            </Link>
        </S.Root>
    )
}