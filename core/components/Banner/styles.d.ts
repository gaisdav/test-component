export declare const ContainerColorVariants: {
    info: import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<import("styled-components").DefaultTheme>>;
    success: import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<import("styled-components").DefaultTheme>>;
    warning: import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<import("styled-components").DefaultTheme>>;
    error: import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<import("styled-components").DefaultTheme>>;
    default: import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<import("styled-components").DefaultTheme>>;
    gradient: import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<import("styled-components").DefaultTheme>>;
};
interface Props {
    color: keyof typeof ContainerColorVariants;
}
export declare const Container: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, Props, never>;
export declare const Title: import("styled-components").StyledComponent<import("@material-ui/core/OverridableComponent").OverridableComponent<import("@material-ui/core").TypographyTypeMap<{}, "span">>, import("styled-components").DefaultTheme, {
    variant: "body2";
}, "variant">;
export declare const ButtonContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
interface ButtonProp {
    hasMargin: boolean;
}
export declare const Button: import("styled-components").StyledComponent<import("@material-ui/core").ExtendButtonBase<import("@material-ui/core").ButtonTypeMap<{}, "button">>, import("styled-components").DefaultTheme, import("../Button").IButtonProps & ButtonProp, never>;
export {};
