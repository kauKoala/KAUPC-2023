import styled from "@emotion/styled";
import React from "react";
import { SMALL_WIDTH } from "@/styles/layouts";

export const SubtitleText = styled.div`
  font-size: 60px;
  color: white;
  font-weight: 700;
  margin-bottom: 42px;
  line-height: 1.2;
  text-shadow: 4px 4px 4px #312a7c;
  @media screen and (max-width: ${SMALL_WIDTH}) {
    font-size: 32px;
    margin-bottom: 20px;
  }
`;

export const SubTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;
  margin: 40px 0 16px 0;
  svg {
    margin-right: 12px;
  }
  &:first-child {
    margin-top: 16px;
  }
  @media screen and (max-width: ${SMALL_WIDTH}) {
    font-size: 22px;
    margin: 24px 0 12px 0;
    line-height: 1.5;
  }
`;