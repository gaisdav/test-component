import React, { FC } from 'react';

import { MatIcon } from './styles';

interface IIconProps {
  iconName?: string;
}

export const Icon: FC<IIconProps> = ({ iconName= 'check' }) => {
  return (
    <MatIcon role="img">{iconName}</MatIcon>
  );
}
