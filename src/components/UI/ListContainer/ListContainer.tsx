import React, { ReactNode } from 'react';
import * as S from './ListContainer.style'

export type ListContainerProps = {
    children: ReactNode;
};

const ListContainer = ({ children }: ListContainerProps) => {
    return(
        <>
            <S.Root flex={'rowCenter'}>
                <S.Wrapper flex={'columnStart'}>
                    {children}
                </S.Wrapper>
            </S.Root>
        </>
    )
};

export default ListContainer;