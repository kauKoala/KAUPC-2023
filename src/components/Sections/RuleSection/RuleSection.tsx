import * as S from './RuleSection.style'
import LottieContainer from '@/components/UI/LottieContainer/LottieContainer';
import React from "react"
import { AiOutlineCalendar, AiOutlineTrophy } from "react-icons/ai";
import ListContainer from '@/components/UI/ListContainer/ListContainer';
import SubTitle from "@/components/UI/SubTitle/SubTitle";
import MainTitle from '@/components/UI/MainTitle/MainTitle';

export const RuleSection = () => {
    return(
        <S.Root>
            <ListContainer>
                <MainTitle title={"📢 대회 안내"} description={"※모든 대회는 비대면 온라인 환경에서 진행되며, 대회 일시는 주최측 사정에 의해 변경될 수 있습니다."}>

                </MainTitle>
                <div className='koalaContainer'>
                    <div className='container'>
                        <SubTitle title='📆 대회 일정'>
                        </SubTitle>
                        <li>접수 마감: 2023년 7월 25일 (화요일) 18:00</li>
                        <li>접수 가능 인원: 최대 80명으로 선착순 마감</li>
                        <li>대회 장소: 강의동 1층 107, 108호</li>
                        <li>스코어보드 발표: 대회 종료 직후 공개</li>
                        <SubTitle title='🏅 대회 경품'>
                        </SubTitle>
                        <li>1등 : 상금 70만원</li>
                        <li>2등 : 상금 60만원</li>
                        <li>3등 : 상금 50만원</li>
                        <li>4등 : 상금 40만원</li>
                        <li>5등 : 상금 30만원</li>
                        <li>6 ~ 10등 : 상금 20만원</li>
                        <li>11 ~ 15등 : BHC 뿌링클 치킨 + 1.25L 기프티콘</li>
                    </div>
                    {/* <img src='icons/koala.svg' /> */}
                </div>
            </ListContainer>
        </S.Root>
    )
};