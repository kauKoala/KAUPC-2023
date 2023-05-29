import React from "react";
import * as S from './TitleSection.style'
import ListContainer from "@/components/UI/ListContainer/ListContainer";
import SubTitle from "@/components/UI/SubTitle/SubTitle";
import { MdOutlineMonitor } from "react-icons/md";

export const TitleSection = () => {
    return(
        <S.Root flex={"columnCenter"}>
            <h1>KAUPC 2023</h1>
            <h3>제 3회 한국항공대학교 프로그래밍 경진대회</h3>
            <S.SmallBoxWrapper flex={"rowCenter"}>
                <ListContainer>
                    <SubTitle title="대회 일시">
                        
                    </SubTitle>
                    <p>접수 마감 : 11월 3일 (수) 자정</p>
                    <p>대회일 : 11월 6일 (토) / 14:00 ~ 17:00</p>
                </ListContainer>
                <ListContainer>
                    <SubTitle title="참가 자격">
                        
                    </SubTitle>
                    <p>2023년도 2학기 한국항공대학교에 재학중인 모든 학부생 (전공 무관, 대학원생 참가 불가)</p>
                </ListContainer>
                <ListContainer>
                    <SubTitle title="참가 신청">
                        
                    </SubTitle>
                    <p>오픈채팅방</p>
                    <p>네이버 폼</p>
                </ListContainer>
            </S.SmallBoxWrapper>
        </S.Root>
    );
};