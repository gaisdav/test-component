import React, { FC } from 'react';

import { StyledIconButton } from './styles';

interface IIconButtonProps {
  assign?: 'outlined' | 'plain';
  size?: 'small' | 'medium' | 'large';
  onClick: () => void;
  startIcon?: JSX.Element;
}

export const IconButton: FC<IIconButtonProps> = ({
  assign = 'outlined',
  size = 'small',
  onClick,
  startIcon,
}) => {
  return (
    <StyledIconButton
      assign={assign}
      size={size}
      onClick={onClick}
      startIcon={startIcon}
    />
  );
}
