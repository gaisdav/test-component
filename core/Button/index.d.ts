import { ButtonTypeMap } from '@material-ui/core';
declare const ButtonSizeVariants: {
    small: import("styled-components").FlattenSimpleInterpolation;
    medium: import("styled-components").FlattenSimpleInterpolation;
    large: import("styled-components").FlattenSimpleInterpolation;
};
declare const ButtonColorVariants: {
    contained: import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<import("styled-components").DefaultTheme>>;
    outlined: import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<import("styled-components").DefaultTheme>>;
    plain: import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<import("styled-components").DefaultTheme>>;
};
declare type BaseButtonProps = ButtonTypeMap['props'];
interface Props extends BaseButtonProps {
    props?: {};
    assign?: keyof typeof ButtonColorVariants;
    size?: keyof typeof ButtonSizeVariants;
}
export declare const Button: import("styled-components").StyledComponent<import("@material-ui/core").ExtendButtonBase<ButtonTypeMap<{}, "button">>, import("styled-components").DefaultTheme, Props, never>;
export {};
