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
                <div className='container'>
                    <SubTitle title='📆 대회 일정'>
                    </SubTitle>
                    <li>접수 마감: 2023년 9월 14일 (수요일) 18:00</li>
                    <li>대회 진행: 2023년 9월 17일 (토요일) 14:00 ~ 17:00</li>
                    <li>대회 장소: 과학실 4층 전산실</li>
                    <li>스코어보드 발표: 대회 종료 직후 공개</li>
                    <SubTitle title='🏅 대회 경품'>
                    </SubTitle>
                    <li>총장상 (1팀): 상금 50만원</li>
                    <li>대상 (2팀): 상금 30만원</li>
                    <li>최우수상 (3팀): 상금 20만원</li>
                    <li>우수상 (4팀): 상금 10만원</li>
                    <li>특별상: 베스킨라빈스 싱글 기프티콘</li>
                </div>
            </ListContainer>
        </S.Root>
    )
};