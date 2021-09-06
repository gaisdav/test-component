export declare const CounterColorVariants: {
    warning: import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<import("styled-components").DefaultTheme>>;
    error: import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<import("styled-components").DefaultTheme>>;
};
interface Props {
    count?: number;
    color: keyof typeof CounterColorVariants;
}
export declare const Badge: import("styled-components").StyledComponent<import("@material-ui/core/OverridableComponent").OverridableComponent<import("@material-ui/core").BadgeTypeMap<"span", {}>>, import("styled-components").DefaultTheme, Props, never>;
export {};
