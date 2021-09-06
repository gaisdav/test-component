/// <reference types="react" />
import { TypographyProps as MuiTypographyProps } from '@material-ui/core';
import { DefaultTheme, FlattenInterpolation, ThemedStyledProps } from 'styled-components';
declare type ColorLabelVariants = 'info' | 'success' | 'warning' | 'error' | 'default';
export interface LabelProps extends MuiTypographyProps {
    type?: ColorLabelVariants;
    children?: string | JSX.Element;
}
export declare type LabelColorMapType = Record<ColorLabelVariants, FlattenInterpolation<ThemedStyledProps<{}, DefaultTheme>>>;
export {};
