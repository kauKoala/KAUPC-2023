import React from "react";
import * as S from './TitleSection.style'
import ListContainer from "@/components/UI/ListContainer/ListContainer";
import SubTitle from "@/components/UI/SubTitle/SubTitle";
import { MdOutlineMonitor } from "react-icons/md";
import { LinkBox } from "@/components/UI/LinkBox/LinkBox";
import { SiNaver } from "react-icons/si";
import { RiKakaoTalkFill } from "react-icons/ri";
import { FcGoogle, FcAlarmClock } from "react-icons/fc";
import { BsFillCheckSquareFill } from "react-icons/bs"

export const TitleSection = () => {
    return(
        <S.Root flex={"columnCenter"}>
            {/* <div className="mainTitle">
                <div className="mainTitleText">
                    <h1>KAUPC</h1><h1>2023</h1>
                </div>
                <div className="mainTitleText">
                    <h3>제 3회 한국항공대학교</h3><h3>프로그래밍 경진대회</h3> 
                </div>
            </div> */}
            <S.MainTitle flex={"columnCenter"}>
                <h1>KAUPC 2023</h1>
                <h3>제 3회 한국항공대학교 프로그래밍 경진대회</h3>
            </S.MainTitle>
            <S.SmallBoxWrapper>
                <ListContainer>
                    <SubTitle title="⏰ 대회 일시">
                    </SubTitle>
                    <div className="titleSection">
                        <p>접수 마감 : 7월 25일 (화) 18:00</p>
                        <p>대회진행 : 7월 29일 (토) / 13:00 ~ 18:00 (대회 시작은 14시)</p>
                    </div>
                </ListContainer>
                <div className="mobile"/>
                <ListContainer>
                    <SubTitle title="✅ 참가 자격">
                    </SubTitle>
                    <p>2023년도 2학기 한국항공대학교에 재학중인 모든 학부생 (전공 무관, 휴학생과 대학원생 참가 불가)</p>
                </ListContainer>
                <div className="mobile"/>
                <ListContainer>
                    <SubTitle title="👨🏻‍💻 참가 신청">
                    </SubTitle>
                    <LinkBox link={'https://open.kakao.com/o/srmgu6uf'}>
                        <RiKakaoTalkFill />
                        <p>카카오톡 오픈채팅방</p>
                    </LinkBox>
                    <LinkBox link={'https://scm.kau.ac.kr/ko/program/all/view/1114'}>
                        <img src="icons/kau-removebg-preview.png" width='25' />
                        <p className="kaulink">역량관리시스템 바로가기</p>
                    </LinkBox>
                </ListContainer>
            </S.SmallBoxWrapper>
        </S.Root>
    );
};