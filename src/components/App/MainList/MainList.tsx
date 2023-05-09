import React, { ReactNode } from 'react';
import * as S from './MainList.style'

export type MainListProps = {
    children: ReactNode;
};

const MainList = ({ children }: MainListProps) => {
    return(
        <>
            <S.Wrapper>
                {children}
            </S.Wrapper>
        </>
    )
};

export default MainList;