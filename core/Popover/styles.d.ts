/// <reference types="react" />
import { DefaultTheme, FlattenInterpolation, ThemedStyledProps } from 'styled-components';
import { TooltipProps, TooltipTypeVariants as TooltipTypeVariantsType } from './interfaces';
export declare type TooltipStylesMapType = Record<TooltipTypeVariantsType, FlattenInterpolation<ThemedStyledProps<unknown, DefaultTheme>>>;
export declare const Tooltip: import("styled-components").StyledComponent<({ className, ...props }: any) => JSX.Element, DefaultTheme, TooltipProps, never>;
