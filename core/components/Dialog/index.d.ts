import { FC } from 'react';
interface IDialogProps {
    isOpen: boolean;
    isScrollable?: boolean;
    onClose: () => void;
    title?: JSX.Element | string;
    content?: JSX.Element | string;
    actions?: JSX.Element;
}
export declare const Dialog: FC<IDialogProps>;
export {};
