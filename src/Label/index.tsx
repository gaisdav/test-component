import React from 'react';
import { LabelProps } from './interfaces';
import { StyledLabel } from './styles';

export function Label({
  type = 'default',
  children = '',
  ...props
}: LabelProps) {
  return (
    <StyledLabel
      {...props}
      type={type}
    >
      {children}
    </StyledLabel>
  );
}
