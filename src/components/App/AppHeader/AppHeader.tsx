import React from "react";
import * as S from './AppHeader.style';
import { HeaderContent } from "./HeaderContent/HeaderContent";

export const AppHeader = () => {
    return(
        <S.HeaderContainer>
            <HeaderContent />
        </S.HeaderContainer>
    )
}