import { ButtonClasses } from '@material-ui/core';
declare const ButtonSizeVariants: {
    small: import("styled-components").FlattenSimpleInterpolation;
    medium: import("styled-components").FlattenSimpleInterpolation;
    large: import("styled-components").FlattenSimpleInterpolation;
};
declare const ButtonColorVariants: {
    contained: import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<any>>;
    outlined: import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<any>>;
    plain: import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<any>>;
};
interface Props extends ButtonClasses {
    assign?: keyof typeof ButtonColorVariants;
    size?: keyof typeof ButtonSizeVariants;
}
export declare const Button: import("styled-components").StyledComponent<import("@material-ui/core").ExtendButtonBase<import("@material-ui/core").ButtonTypeMap<{}, "button">>, any, Props, never>;
export {};
