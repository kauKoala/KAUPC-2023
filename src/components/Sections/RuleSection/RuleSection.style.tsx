import styled from "@emotion/styled";

export const Root = styled.div`
    width: 100%;
    height: 100%;

    h2 {
      font-size: 3.0rem;
      color: gray;
    }

    svg {
      
    }
`;

export const Background = styled.div`
  opacity: 0.32 !important;
  border-radius: 16px;
  display: flex;
  justify-content: flex-end;
  overflow: hidden;
  display: inline-block;
  text-align: right;
  
  svg {
    position: fixed;
    top: 0;
    left: 0;
    height: 100% !important;
    width: 100%
  }
`;