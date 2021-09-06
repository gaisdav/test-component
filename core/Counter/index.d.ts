import { FC } from 'react';
interface CounterProps {
    count?: number;
    type?: 'error' | 'warning';
    isError?: boolean;
}
export declare const Counter: FC<CounterProps>;
export {};
