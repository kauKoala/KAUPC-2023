import {
    DEFAULT_FLEX_BOX_PRESET,
    FlexVariant,
    FlexStyleConfig,
    StyleConfigKeys,
    FlexStyle,
    CustomFlexStyleConfig,
  } from './index';
  import { css } from '@emotion/react';
  
  export const getVariantStyle = (variant: FlexVariant): FlexStyleConfig => {
    return DEFAULT_FLEX_BOX_PRESET[variant];
  };
  
  export const getCustomStyleWithKeys = <K extends StyleConfigKeys>(
    config: FlexStyleConfig,
    customStyle?: CustomFlexStyleConfig
  ): FlexStyleConfig => {
    const totalConfig: FlexStyleConfig = Object.assign({}, config);
  
    if (customStyle) {
      for (const k in customStyle) {
        const key = k as K;
        if (customStyle[key]) totalConfig[key] = customStyle[key]!!;
      }
  
      return totalConfig;
    }
  
    return config;
  };
  
  export const StyleController = (variant: FlexVariant, customStyle?: CustomFlexStyleConfig) => {
    const config = getVariantStyle(variant);
    const style = getCustomStyleWithKeys(config, customStyle);
  
    return css`
      display: flex;
      flex-direction: ${style?.direction};
      flex-wrap: ${style?.wrap};
      flex-grow: ${style?.grow};
      align-items: ${style?.align};
      justify-content: ${style?.justify};
    `;
  };