import React from 'react';
interface CounterProps {
    count?: number;
    type?: 'error' | 'warning';
    isError?: boolean;
    children: React.ReactNode;
}
export declare const Counter: ({ count, type, isError, children, }: CounterProps) => JSX.Element;
export {};
