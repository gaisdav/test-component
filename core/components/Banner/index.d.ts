import { FC } from 'react';
import { ContainerColorVariants } from './styles';
interface ButtonBannerProps {
    label: string;
    onClick?: () => void;
}
declare type TBannerActions = Array<ButtonBannerProps> & {
    0?: ButtonBannerProps;
    1?: ButtonBannerProps;
};
interface IBannerProps {
    title: string;
    color?: keyof typeof ContainerColorVariants;
    actions?: TBannerActions;
}
export declare const Banner: FC<IBannerProps>;
export {};
