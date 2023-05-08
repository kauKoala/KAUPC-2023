import React, { ReactNode } from 'react';
import * as S from './SubTitle.style'
import { MdOutlineMonitor } from "react-icons/md";

export type SubTitleProps = {
    children: ReactNode;
    title: string;
}

const SubTitle = ({children, title}: SubTitleProps) => {

    return(
        <>
            <S.SubTitleWrapper>
                {children}
                <S.SubtitleText>
                    <h2>{title}</h2>
                </S.SubtitleText>
            </S.SubTitleWrapper>
        </>
    )
};

export default SubTitle;