import React from "react";
import * as S from './HeaderContent.style';
import { FaReact } from 'react-icons/fa';

export const HeaderContent = () => {
    return(
        <S.Root>
            <S.Wrapper flex="rowStart">
                <h1>제 3회  한국항공대학교 프로그래밍 경진대회</h1>
                <p>대회 규칙</p>
                <p>대회 정보</p>
                <p>유의 사항</p>
            </S.Wrapper> 
        </S.Root>
    )
}