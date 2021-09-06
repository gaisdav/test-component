import { FC } from 'react';
declare type ButtonType = 'back' | 'next';
interface ButtonProps {
    label: string;
    type?: ButtonType;
    onClick?: () => void;
    callback?: () => void;
}
export declare type TActions = Array<ButtonProps>;
export interface SlideProps {
    title: string;
    content?: string;
    actions?: TActions;
    stepper?: JSX.Element;
}
export declare type TSlides = Array<SlideProps>;
export declare const Slide: FC<SlideProps>;
export {};
