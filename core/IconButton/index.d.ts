/// <reference types="react" />
interface Props {
    assign?: 'outlined' | 'plain';
    size?: 'small' | 'medium' | 'large';
    onClick: () => void;
    startIcon?: JSX.Element;
}
export declare function IconButton({ assign, size, onClick, startIcon, }: Props): JSX.Element;
export {};
