import styled from "@emotion/styled";
import React from "react";
import { SMALL_WIDTH } from "@/styles/layouts";

export const SubtitleText = styled.div`
  font-size: 2.5rem;
  color: blue;
  font-weight: 700;
  line-height: 1.2;
  @media screen and (max-width: ${SMALL_WIDTH}) {
    font-size: 2.0rem;
    margin-bottom: 1.0rem;
  }
`;

export const SubTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 1.0rem 0 1.0rem 0;
  margin-top: 0.25rem;

  svg {
    font-size: 3.6rem;
    margin-right: 1.0rem;
  }

  @media screen and (max-width: ${SMALL_WIDTH}) {
    font-size: 2.0rem;
    line-height: 1.5rem;
  }
`;