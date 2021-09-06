import React, { FC } from 'react';
import { PopoverProps } from './interfaces';
import { Tooltip } from './styles';
import { Helper } from './Helper';
import { Onboarding } from './Onboarding';
import { TSlides } from './Onboarding/Slide';

export const Popover: FC<PopoverProps> = ({
  type = 'helper',
  open,
  content,
  arrow,
  children,
  ...props
}) => {
  const contentType = type as string === 'onboarding'
    ? <Onboarding slides={content as TSlides} />
    : <Helper title={content as string} />;
  return (
    <Tooltip
      {...props}
      title={contentType}
      type={type}
      open={open}
      arrow={arrow}
    >
      {children}
    </Tooltip>
  );
}
