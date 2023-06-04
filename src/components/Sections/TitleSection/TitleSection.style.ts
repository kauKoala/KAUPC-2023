import { Flex } from "@/components/UI/FlexBox";
import { SMALL_WIDTH } from "@/styles/layouts";
import styled from "@emotion/styled";

export const Root = styled(Flex)`
    width: 100%;
    height: 100%;
    padding-top: 4.0rem;
    
    h1 {
        font-size: 5.5rem;
    };

    h3 {
        font-size: 3.5rem;
    };

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