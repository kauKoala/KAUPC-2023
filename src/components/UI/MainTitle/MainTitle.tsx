import React, { ReactNode } from "react";
import * as S from './MainTitle.style';

export type MainTitleProps = {
    title: ReactNode;
    description: string;
    children: ReactNode;
}

export const MainTitle = ({title, description, children}: MainTitleProps) => {
    return(
        <S.Root>
            <h1>{title}</h1>
            <p>{description}</p>
        </S.Root>
    );
};

export default MainTitle;