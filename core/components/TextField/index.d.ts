import { TextField as MuiTextField, StandardTextFieldProps } from '@material-ui/core';
declare const TextFieldSizeVariants: {
    small: import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<import("styled-components").DefaultTheme>>;
    medium: import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<import("styled-components").DefaultTheme>>;
    large: import("styled-components").FlattenSimpleInterpolation;
};
export interface TextFieldProps extends StandardTextFieldProps {
    size?: keyof typeof TextFieldSizeVariants;
}
export declare const TextField: import("styled-components").StyledComponent<typeof MuiTextField, import("styled-components").DefaultTheme, {}, never>;
export {};
