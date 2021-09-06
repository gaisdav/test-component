import { FC } from 'react';
import { TSlides } from '../Slide';
interface Props {
    steps: TSlides;
    activeStep: number;
    setActiveStep: (value: number) => void;
}
export declare const Stepper: FC<Props>;
export {};
