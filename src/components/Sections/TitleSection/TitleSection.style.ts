import { Flex } from "@/components/UI/FlexBox";
import { SMALL_WIDTH } from "@/styles/layouts";
import styled from "@emotion/styled";

export const MainTitle = styled(Flex)`
    width: 90%;

    h1{
        font-size: 5.5rem;
    }
    h3{
        padding-top: 1.0rem;
        font-size: 3.5rem;
    }

    @media screen and (max-width: 800px) {
        h1 {
            font-size: 4.0rem;
        }
        h3 {
            font-size: 2.0rem;
        }
    }
`;

export const Root = styled(Flex)`
    width: 100%;
    height: 100%;
    padding-top: 4.0rem;

    @media screen and (max-width: 800px) {
        width: 100%;
        flex-direction: column;
        padding-top: 2.0rem;
    }
`;

export const SmallBoxWrapper = styled.div`
    width: 93%;
    display: flex;
    flex-direction: row;
    padding-top: 2.0rem;

    h2 {
        color: black;
        font-size: 2.0rem;
        line-height: 1.75rem;
        font-weigth: 600;
        padding-top: 1.0rem;
    }

    p {
        font-size: 1.5rem;
    }

    img {
        width: 3.0rem;
        padding: 0 0.3rem 0 0.3rem;
    }

    .kaulink {
        padding-top: 0.5rem;
    }

    .iconContainer {
        font-size: 2.0rem;
        padding: 1.0rem 0.5rem 0 0;
    }    

    @media screen and (max-width: 800px) {
        width: 100%;
        flex-direction: column;

        .mobile {
            padding-top: 2.0rem;
        }
    }
`;