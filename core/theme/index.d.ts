interface ButtonBackGroundColor {
    active: string;
    hovered: string;
    focused: string;
    pressed: string;
    disabled: string;
}
interface ButtonBorderColor {
    active: string;
    hovered: string;
    focused: string;
    pressed: string;
    disabled: string;
}
interface BasePalleteColor {
    50?: string;
    100?: string;
    200?: string;
    300?: string;
    400?: string;
    500?: string;
    600?: string;
    700?: string;
    800?: string;
    900?: string;
}
interface Mode {
    colors: {
        background: {
            default: string;
            inverse: string;
            brand: string;
            controls: string;
            errorTextField: string;
            error: string;
            warning: string;
            success: string;
            link: string;
            white: string;
            progressBar: string;
            progressBarFilled: string;
        };
        typographyAndIcons: {
            default: {
                active: string;
                inactive: string;
                disabled: string;
                error: string;
                warning: string;
                success: string;
                link: string;
                purple: string;
                byzantine: string;
                teal: string;
            };
            inverse: {
                active: string;
                inactive: string;
                disabled: string;
            };
            brand: {
                active: string;
                inactive: string;
                disabled: string;
            };
            custom: {
                title: string;
            };
        };
        button: {
            backgroundColor: {
                contained: ButtonBackGroundColor;
                outlined: ButtonBackGroundColor;
                plain: ButtonBackGroundColor;
            };
            borderColor: {
                contained: ButtonBorderColor;
                outlined: ButtonBorderColor;
                plain: ButtonBorderColor;
            };
        };
        borders: {
            divider: string;
            border: string;
            borderFocusedTextField: string;
            borderFocusedControl: string;
            borderError: string;
        };
        states: {
            hover: string;
            focused: string;
            activated: string;
            dragged: string;
            selected: string;
            pressed: string;
        };
        label: {
            color: {
                info: string;
                success: string;
                warning: string;
                error: string;
                default: string;
            };
            backgroundColor: {
                info: string;
                success: string;
                warning: string;
                error: string;
                default: string;
            };
        };
        boxShadow: {
            paper: {
                alignTop: string;
                alignBottom: string;
            };
        };
    };
}
declare module '@material-ui/core/styles/createTheme' {
    interface Theme {
        custom: {
            lightTheme: Mode;
            fontFamily: {
                beelineIcons: string;
            };
            border: {
                radius8: string;
                radius12: string;
            };
            pallete: {
                primary: BasePalleteColor;
            };
        };
    }
    interface ThemeOptions extends Theme {
    }
}
declare module '@material-ui/core/TextField' {
    interface TextFieldPropsSizeOverrides {
        large: true;
    }
}
export declare const theme: import("@material-ui/core/styles").Theme;
export {};
