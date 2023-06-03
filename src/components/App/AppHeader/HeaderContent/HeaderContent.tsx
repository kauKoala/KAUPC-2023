import React from "react";
import * as S from './HeaderContent.style';
import { FaReact } from 'react-icons/fa';

export const HeaderContent = () => {
    return(
        <S.Root>
            <S.Wrapper flex="rowStart">
                <h1>제 3회  한국항공대학교 프로그래밍 경진대회</h1>
                <div>
                    <a href="#info">대회 규칙</a>
                    <a href="#rule">대회 정보</a>
                    <a href="#apply">유의 사항</a>
                </div>
            </S.Wrapper> 
        </S.Root>
    )
}