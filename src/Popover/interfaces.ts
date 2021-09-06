import { TooltipProps as MuiTooltipProps } from '@material-ui/core';
import { TSlides } from './Onboarding/Slide'

export interface TooltipProps extends MuiTooltipProps {
  type?: TooltipTypeVariants;
}

export interface PopoverProps extends TooltipProps{
  open: boolean;
  content: string | TSlides;
  arrow?: boolean;
}

export type TooltipTypeVariants = 'helper' | 'onboarding';
