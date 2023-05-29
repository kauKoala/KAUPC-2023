import React from "react";
import * as S from './ApplySection.style';
import ListContainer from "@/components/UI/ListContainer/ListContainer";
import SubTitle from "@/components/UI/SubTitle/SubTitle";

export const ApplySection = () => {
    return(
        <>
        <S.Root>   
            <ListContainer>
                <div className="container">
                    <SubTitle title="참가자 유의사항">
                    </SubTitle>
                    <li>본 대회는 대학원생의 참여가 불가능하며, 한국항공대학교 학부 재학 & 휴학생 신분으로 제한됩니다.</li>
                    <li>대회 상위 3~4팀은 경인지역 연합 프로그래밍 경시대회 Shake! 본선 진출의 기회가 주어집니다.</li>
                    <li>본 대회는 Naver D2의 후원으로 진행되어, 경품 수령을 위해서는 Naver D2에서 제공하는 네이버 채용정보 관련 메일링 수신에 동의해야 합니다.</li>
                    <li>참가 접수는 11월 3일(수) 자정까지 가능하며, 접수 마감기한을 넘긴 경우에는 대회 참여가 어려울 수 있습니다.</li>
                </div>
            </ListContainer>
        </S.Root>
        </>
    )
}