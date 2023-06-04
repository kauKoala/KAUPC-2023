import { SMALL_WIDTH } from "@/styles/layouts";
import styled from "@emotion/styled";

export const Root = styled.div`
    width: 100%;
    height: 100%;

    h2 {
      font-size: 3.0rem;
      color: gray;
    }

    img {
      width: 17.5rem;
      height: 17.5rem;
    }

    .koalaContainer {
      width: 100%;
      display: flex;
      /* justify-content: space-between; */
      align-items: flex-end;
    }

    .container {
      flex-grow: 1;
    }

    @media screen and (max-width: ${SMALL_WIDTH}) {
      img {
        display: none;
      }
    }
`;