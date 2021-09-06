import React from 'react';
import styled from 'styled-components';
import { Tooltip as MuiTooltip, TooltipProps } from '@material-ui/core';

/**
 * TODO не подсказываются атрибуты. Нжуно описать типы.
 */
export const Tooltip = styled(({ className, ...props }) => (
  <MuiTooltip {...props} classes={{ popper: className }} />
))<TooltipProps>`
  & .MuiTooltip-tooltip {
    background: ${(props) => props.theme.custom.lightTheme.colors.background.inverse};
    border-radius: ${(props) => props.theme.custom.border.radius8};
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0.4px;
    text-align: center;
  }
`;
