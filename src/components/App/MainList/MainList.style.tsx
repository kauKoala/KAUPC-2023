import styled from "@emotion/styled";
import { SMALL_WIDTH } from "@/styles/layouts";

export const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  background-color: #ffffff10;
  padding: 16px 32px;
  border-radius: 12px;
  margin-top: 32px;
  -webkit-box-shadow: 2px 2px 4px 2px rgba(66, 66, 66, 0.1);
  box-shadow: 2px 2px 4px 2px rgba(66, 66, 66, 0.1);

  @media screen and (max-width: ${SMALL_WIDTH}) {
    padding: 16px 24px;
  }
  li {
    font-size: 16px;
  }
`;