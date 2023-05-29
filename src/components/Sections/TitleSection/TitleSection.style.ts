import { Flex } from "@/components/UI/FlexBox";
import styled from "@emotion/styled";

export const Root = styled(Flex)`
    width: 100%;
    height: 100%;
    padding-top: 2.0rem;

    h1{
        font-size: 5.5rem;
    };

    h3 {
        font-size: 3.5rem;
    };

`;

export const SmallBoxWrapper = styled(Flex)`
    width: 93%;

    h2 {
        color: black;
        font-size: 2.0rem;
        line-height: 1.75rem;
        font-weigth: 600;
    }

    p {
        font-size: 1.5rem;
    }
`;