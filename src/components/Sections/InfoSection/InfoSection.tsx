import React from "react"
import { MdOutlineMonitor } from "react-icons/md";
import { RiErrorWarningLine } from "react-icons/ri"
import ListContainer from '@/components/UI/ListContainer/ListContainer';
import SubTitle from "@/components/UI/SubTitle/SubTitle";
import LottieContainer from '@/components/UI/LottieContainer/LottieContainer';
import * as S from "./InfoSection.style";


export const InfoSection = () => {
    return(
      <S.Root>
        <ListContainer>
          <div className="container">
            <SubTitle title='대회 진행'>
              <MdOutlineMonitor />
            </SubTitle>
            <li>본 대회는 3인 1팀으로 진행되면, 약 3시간동안 주어진 프로그래밍 문제를 해결하는 대회입니다.</li>
            <li>인터넷 검색을 이용하거나 미리 준비하는 코드를 사용해도 됩니다. 다만 구글링으로 가져온 코드는 반드시 주석으로 출처를 표기해야 합니다.</li>
            <li>대회 과정은 오프라인으로 진행되며, 진행 관련 문의는 대회 운영 카카오톡 오픈채팅방을 통해 건의할 수 있습니다.</li>
            <li>사용 가능 언어는 C, C++, Java, Python 3, PyPy3 으로 제한되며, 이외의 언어로는 참여가 어려울 수 있습니다.</li>
            <SubTitle title='유의사항'>
              <RiErrorWarningLine />
            </SubTitle>
            <li>대회가 종료된 후 소스코드 표절검사가 진행되며, 표절이 발견된 경우 관련 팀들은 실격됩니다.</li>
            <li>팀원이 아닌 사람과 문제에 대해 어떤 형태로든 커뮤니케이션 하는 것은 부정행위로 간주됩니다.</li>
            <li>같은 팀원이 아닌 사람에게 대회용 계정의 정보를 공유해서는 안 됩니다.</li>
            <li>위의 유의사항을 위반하는 경우 부정행위로 간주되어 실격되며, 수상했더라도 수상이 취소될 수 있습니다.</li>
            <li>기타 명시되지 않은 사항은 운영지느이 판단에 따라 결정할 수 있습니다.</li>
          </div>
        </ListContainer>
      </S.Root>
    )
}