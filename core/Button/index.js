var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { css } from 'styled-components';
import { Button as MuiButton } from '@material-ui/core';
var ButtonSizeVariants = {
    small: css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      padding: 8px 16px;\n      height: 36px;\n      .MuiButton-label {\n        font-size: 14px;\n        line-height: 20px;\n      }\n  "], ["\n      padding: 8px 16px;\n      height: 36px;\n      .MuiButton-label {\n        font-size: 14px;\n        line-height: 20px;\n      }\n  "]))),
    medium: css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      padding: 13px 20px;\n      height: 48px;\n      .MuiButton-label {\n        font-size: 16px;\n        line-height: 22px;\n      }\n  "], ["\n      padding: 13px 20px;\n      height: 48px;\n      .MuiButton-label {\n        font-size: 16px;\n        line-height: 22px;\n      }\n  "]))),
    large: css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      padding: 16px 24px;\n      height: 56px;\n      .MuiButton-label {\n        font-size: 18px;\n        line-height: 24px;\n      }\n  "], ["\n      padding: 16px 24px;\n      height: 56px;\n      .MuiButton-label {\n        font-size: 18px;\n        line-height: 24px;\n      }\n  "]))),
};
var ButtonColorVariants = {
    contained: css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n     ", ";\n  "], ["\n     ", ";\n  "])), function (_a) {
        var _b = _a.theme.custom.lightTheme.colors, backgroundColor = _b.button.backgroundColor, typographyAndIcons = _b.typographyAndIcons;
        return css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n      background-color: ", ";\n      border: none;\n      &:hover {\n        box-shadow: none;\n        background-color: ", ";\n      }\n      &:focus {\n        box-shadow: none;\n        background-color: ", ";\n      }\n      &:active {\n        background-color: ", ";\n      }\n      &:disabled {\n        background-color: ", ";\n      }\n     .MuiButton-label {\n        color: ", ";\n     }\n    "], ["\n      background-color: ", ";\n      border: none;\n      &:hover {\n        box-shadow: none;\n        background-color: ", ";\n      }\n      &:focus {\n        box-shadow: none;\n        background-color: ", ";\n      }\n      &:active {\n        background-color: ", ";\n      }\n      &:disabled {\n        background-color: ", ";\n      }\n     .MuiButton-label {\n        color: ", ";\n     }\n    "])), backgroundColor.contained.active, backgroundColor.contained.hovered, backgroundColor.contained.focused, backgroundColor.contained.pressed, backgroundColor.contained.active, typographyAndIcons.default.active);
    }),
    outlined: css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n     ", ";\n  "], ["\n     ", ";\n  "])), function (_a) {
        var _b = _a.theme.custom.lightTheme.colors, _c = _b.button, backgroundColor = _c.backgroundColor, borderColor = _c.borderColor, borders = _b.borders, typographyAndIcons = _b.typographyAndIcons;
        return css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n        border: 1px solid ", ";\n        background-color: ", ";\n        &:hover {\n          box-shadow: none;\n          background-color: ", ";\n          border-color:  ", ";\n        }\n\n        &:focus {\n          box-shadow: none;\n          background-color: ", ";\n          border-color:  ", ";\n        }\n\n        &:active {\n          background-color: ", ";\n          border-color:  ", ";\n        }\n\n        &:disabled {\n          background-color: ", ";\n          border-color:  ", ";\n        }\n\n       .MuiButton-label {\n          color: ", ";\n          border-color:  ", ";\n       }\n     "], ["\n        border: 1px solid ", ";\n        background-color: ", ";\n        &:hover {\n          box-shadow: none;\n          background-color: ", ";\n          border-color:  ", ";\n        }\n\n        &:focus {\n          box-shadow: none;\n          background-color: ", ";\n          border-color:  ", ";\n        }\n\n        &:active {\n          background-color: ", ";\n          border-color:  ", ";\n        }\n\n        &:disabled {\n          background-color: ", ";\n          border-color:  ", ";\n        }\n\n       .MuiButton-label {\n          color: ", ";\n          border-color:  ", ";\n       }\n     "])), borders.border, backgroundColor.outlined.active, backgroundColor.outlined.hovered, borderColor.outlined.hovered, backgroundColor.outlined.focused, borderColor.outlined.focused, backgroundColor.outlined.pressed, borderColor.outlined.pressed, backgroundColor.outlined.active, borderColor.outlined.active, typographyAndIcons.default.active, borderColor.outlined.disabled);
    }),
    plain: css(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n    ", ";\n  "], ["\n    ", ";\n  "])), function (_a) {
        var _b = _a.theme.custom.lightTheme.colors, _c = _b.button, backgroundColor = _c.backgroundColor, borderColor = _c.borderColor, typographyAndIcons = _b.typographyAndIcons;
        return css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n      border: none;\n      background-color: ", ";\n      color: ", ";\n      &:hover {\n        background-color: ", ";\n      }\n\n      &:focus {\n        background-color: ", ";\n        box-shadow: 0 0 0 1px ", ";\n      }\n\n      &:active {\n        border: none;\n        background-color: ", ";\n      }\n\n      &:disabled {\n        background-color: ", ";\n        color: ", ";\n      }\n\n      .MuiButton-label {\n        color: ", "\n      }\n    "], ["\n      border: none;\n      background-color: ", ";\n      color: ", ";\n      &:hover {\n        background-color: ", ";\n      }\n\n      &:focus {\n        background-color: ", ";\n        box-shadow: 0 0 0 1px ", ";\n      }\n\n      &:active {\n        border: none;\n        background-color: ", ";\n      }\n\n      &:disabled {\n        background-color: ", ";\n        color: ", ";\n      }\n\n      .MuiButton-label {\n        color: ", "\n      }\n    "])), backgroundColor.plain.active, typographyAndIcons.default.link, backgroundColor.plain.hovered, backgroundColor.plain.focused, borderColor.plain.focused, backgroundColor.plain.pressed, backgroundColor.plain.disabled, typographyAndIcons.default.link, typographyAndIcons.default.link);
    }),
};
export var Button = styled(MuiButton)(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n  min-width: 40px;\n  box-shadow: none;\n  font-style: normal;\n  text-transform: none;\n  font-weight: 500;\n  letter-spacing: 0;\n  text-align: center;\n\n  ", ";\n\n  .MuiButton-startIcon > *:first-child {\n    font-size: 24px;\n    padding-right: 8px;\n  }\n  .MuiButton-startIcon > div {\n    text-transform: initial;\n  }\n  .MuiButton-startIcon {\n    margin: 0;\n  }\n  &:disabled {\n    opacity: 0.48;\n  }\n\n  ", ";\n  ", ";\n"], ["\n  min-width: 40px;\n  box-shadow: none;\n  font-style: normal;\n  text-transform: none;\n  font-weight: 500;\n  letter-spacing: 0;\n  text-align: center;\n\n  ", ";\n\n  .MuiButton-startIcon > *:first-child {\n    font-size: 24px;\n    padding-right: 8px;\n  }\n  .MuiButton-startIcon > div {\n    text-transform: initial;\n  }\n  .MuiButton-startIcon {\n    margin: 0;\n  }\n  &:disabled {\n    opacity: 0.48;\n  }\n\n  ", ";\n  ", ";\n"])), function (_a) {
    var _b = _a.theme.custom, border = _b.border, lightTheme = _b.lightTheme;
    return css(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n    border-radius: ", ";\n    color: ", ";\n  "], ["\n    border-radius: ", ";\n    color: ", ";\n  "])), border.radius12, lightTheme.colors.typographyAndIcons.default.active);
}, function (_a) {
    var size = _a.size;
    return css(templateObject_11 || (templateObject_11 = __makeTemplateObject([" ", "; "], [" ", "; "])), ButtonSizeVariants[size || 'small']);
}, function (_a) {
    var assign = _a.assign;
    return css(templateObject_12 || (templateObject_12 = __makeTemplateObject([" ", "; "], [" ", "; "])), ButtonColorVariants[assign || 'contained']);
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13;