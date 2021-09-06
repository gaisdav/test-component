import React, { FC, useCallback } from 'react';
import { Tooltip } from '../Tooltip';
import { Badge } from './styles';

interface CounterProps {
  count?: number;
  type?: 'error' | 'warning';
  isError?: boolean;
}

export const Counter: FC<CounterProps> = ({
  count = 0,
  type = 'error',
  isError = false,
  children,
}) => {
  const formatNumber = (value: number, isShowError: boolean) => {
    if (isShowError) {
      return '!';
    }
    const abs = Math.abs(value);
    if (abs && abs > 999) {
      const formattedValue = `${Math.sign(value) * parseFloat((abs / 1000).toFixed(1))}K`;
      return formattedValue.replace('.', ',');
    }
    return value;
  };

  const badgeContent = useCallback(() => (formatNumber(count, isError)), [count, isError]);

  return (
    <Tooltip
      title="Не удалось получить уведомления"
      placement="bottom"
      disableHoverListener={!isError}
    >
      <Badge
        max={999}
        badgeContent={badgeContent()}
        color={type}
        count={count}
        showZero
      >
        {children}
      </Badge>
    </Tooltip>
  );
};
