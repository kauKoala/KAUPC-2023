import React from "react";
import * as S from './ApplySection.style';
import ListContainer from "@/components/UI/ListContainer/ListContainer";
import SubTitle from "@/components/UI/SubTitle/SubTitle";
import MainTitle from "@/components/UI/MainTitle/MainTitle";

export const ApplySection = () => {
    return(
        <>
        <S.Root>   
            <ListContainer>
                <MainTitle title={"🏆 대회 접수"} description="">

                </MainTitle>
                <div className="container">
                    <SubTitle title="🚨 참가자 유의사항">
                    </SubTitle>
                    <li>본 대회는 대학원생과 휴학생의 참여가 불가능하며, 한국항공대학교 학부 재학생 신분으로 제한됩니다.</li>
                    <li>대회 상위 10명은 경인지역 6개대학 연합 프로그래밍 경시대회 Shake! 본선 진출의 기회가 주어집니다.</li>
                    <li>참가자 전원에게는 학생활동 마일리지가 지급됩니다.</li>
                    <li>참가 접수는 7월 25일(화) 18:00까지 가능하며, 접수 마감기한을 넘긴 경우에는 대회 참여가 어려울 수 있습니다.</li>
                </div>
            </ListContainer>
        </S.Root>
        </>
    )
}