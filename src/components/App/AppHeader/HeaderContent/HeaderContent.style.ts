import { Flex } from "@/components/UI/FlexBox";
import styled from "@emotion/styled";

export const Root = styled.div`
  padding: 2.0rem 2.2rem 2.0rem 2.2rem;
 /*  background-color: #B578B5; */
  background-color: white;
  font-size: 1.0rem;

  @media screen and (max-width: 800px) {
    display: none;
  }
`

export const Wrapper = styled(Flex)`
  width: 100%;
  height: 100%;
`;