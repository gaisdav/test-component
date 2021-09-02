import React, { FC } from 'react';
import { LabelProps } from './interfaces';
import { StyledLabel } from './styles';

export const Label: FC<LabelProps> = ({
  type = 'default',
  children = '',
  ...props
}) => {
  return (
    <StyledLabel
      {...props}
      type={type}
    >
      {children}
    </StyledLabel>
  );
}
