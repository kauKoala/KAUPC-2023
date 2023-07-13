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

    /* a {
        postion: fixed;
        z-index: 2;
    } */

    .sponsorContainer {
        width: 100%;
        display: flex;
        justify-content: space-between; 
    }

    .sponsorBox {
        width: auto;
        padding: 0.0rem 2.0rem 0.0rem 2.0rem;
    }

    /* .oner {
        padding-left: 2.0rem;
    }
    .sponsor {
        padding-right: 2.0rem;
    } */

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