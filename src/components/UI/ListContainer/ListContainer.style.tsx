import styled from "@emotion/styled";
import { SMALL_WIDTH } from "@/styles/layouts";
import { Flex } from "@/components/UI/FlexBox";

export const Root = styled(Flex)`
  width: 100%;
`;

export const Wrapper = styled(Flex)`
  
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.6);
  position: relative;
  top: 32px;
  box-shadow: 3px 3px 10px 5px #999999d0;
  width: 90%;
  height: auto;
  border-radius: 8px;
  padding: 0.0rem 0.0rem 1.0rem 2.0rem;

  @media screen and (max-width: ${SMALL_WIDTH}) {
    padding: 16px 24px;
  }

  li {
    line-height: 200%;
    font-size: 24px;
    width: 90%;
  }

  svg {

  }

  h2 {

  }


`;