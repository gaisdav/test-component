import { FC } from 'react';
interface IIconButtonProps {
    assign?: 'outlined' | 'plain';
    size?: 'small' | 'medium' | 'large';
    onClick: () => void;
    startIcon?: JSX.Element;
}
export declare const IconButton: FC<IIconButtonProps>;
export {};
