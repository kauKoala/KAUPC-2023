import { SMALL_WIDTH } from "@/styles/layouts";
import styled from "@emotion/styled";

export const Root = styled.div`
    width: auto;
    height: 100%;

    h3 {
        font-size: 2.5rem;
        margin-top: 1.0rem;
    }

    h4 {
        font-size: 2.0rem;
        line-height: 140%;
    }

    .sponsorContainer {
        width: 100%;
        display: flex;
        justify-content: space-between; 

        position: relative;
        z-index: 2;
    }

    .sponsorBox {
        width: auto;
        padding: 0.0rem 2.0rem 0.0rem 2.0rem;
    }

    .startlink-img {
        width: 140px;
        height: 35px;
    }

    @media screen and (max-width: 800px) {
        width: 100%;

        h3 {
            font-size: 2.0rem;
        }
        h4 {
            font-size: 1.5rem;
        }
        .sponsorBox {
            width: 100%;
            padding-left: 2.0rem;
        }
    }
`;