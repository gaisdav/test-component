var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { css } from 'styled-components';
import { Typography } from '../Typography';
import { Button as MuiButton } from '../Button';
export var ContainerColorVariants = {
    info: css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    ", "\n  "], ["\n    ", "\n  "])), function (_a) {
        var background = _a.theme.custom.lightTheme.colors.background;
        return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        background: ", ";\n    "], ["\n        background: ", ";\n    "])), background.link);
    }),
    success: css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    ", "\n  "], ["\n    ", "\n  "])), function (_a) {
        var background = _a.theme.custom.lightTheme.colors.background;
        return css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n        background: ", ";\n    "], ["\n        background: ", ";\n    "])), background.success);
    }),
    warning: css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    ", "\n  "], ["\n    ", "\n  "])), function (_a) {
        var background = _a.theme.custom.lightTheme.colors.background;
        return css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n        background: ", ";\n    "], ["\n        background: ", ";\n    "])), background.warning);
    }),
    error: css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n    ", "\n  "], ["\n    ", "\n  "])), function (_a) {
        var background = _a.theme.custom.lightTheme.colors.background;
        return css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n        background: ", ";\n    "], ["\n        background: ", ";\n    "])), background.error);
    }),
    default: css(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n    ", "\n  "], ["\n    ", "\n  "])), function (_a) {
        var background = _a.theme.custom.lightTheme.colors.background;
        return css(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n        background: ", ";\n    "], ["\n        background: ", ";\n    "])), background.default);
    }),
    gradient: css(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n    ", "\n  "], ["\n    ", "\n  "])), function () { return css(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n      background: linear-gradient(22.62deg, #4330D8 -0.51%, #5C37D4 16.16%, #8147C5 38.82%, #914FBE 48.2%, #AC5BB1 62.53%, #D56F9E 86.89%);\n    "], ["\n      background: linear-gradient(22.62deg, #4330D8 -0.51%, #5C37D4 16.16%, #8147C5 38.82%, #914FBE 48.2%, #AC5BB1 62.53%, #D56F9E 86.89%);\n    "]))); }),
};
export var Container = styled.div(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n  position: absolute;\n  display: flex;\n  justify-content: space-between;\n  flex-direction: row;\n  flex-flow: row wrap;\n  max-width: 688px;\n  min-height: 36px;\n  padding: 16px 16px 0;\n  border-radius: ", ";\n  ", ";\n"], ["\n  position: absolute;\n  display: flex;\n  justify-content: space-between;\n  flex-direction: row;\n  flex-flow: row wrap;\n  max-width: 688px;\n  min-height: 36px;\n  padding: 16px 16px 0;\n  border-radius: ", ";\n  ", ";\n"])), function (props) { return props.theme.custom.border.radius12; }, function (_a) {
    var color = _a.color;
    return css(templateObject_13 || (templateObject_13 = __makeTemplateObject(["", ";"], ["", ";"])), ContainerColorVariants[color]);
});
export var Title = styled(Typography).attrs({ variant: 'body2' })(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  margin-right: 8px;\n  margin-bottom: 16px;\n"], ["\n  display: flex;\n  align-items: center;\n  margin-right: 8px;\n  margin-bottom: 16px;\n"])));
export var ButtonContainer = styled.div(templateObject_16 || (templateObject_16 = __makeTemplateObject(["\n  display: flex;\n  justify-content: flex-end;\n  margin-bottom: 16px;\n"], ["\n  display: flex;\n  justify-content: flex-end;\n  margin-bottom: 16px;\n"])));
export var Button = styled(MuiButton)(templateObject_17 || (templateObject_17 = __makeTemplateObject(["\n  margin-left: ", ";\n  font-size: 14px;\n  line-height: 20px;\n  border: transparent;\n  width: fit-content;\n  &:hover {\n    border-color: transparent;\n    background-color: transparent;\n  }\n  \n"], ["\n  margin-left: ", ";\n  font-size: 14px;\n  line-height: 20px;\n  border: transparent;\n  width: fit-content;\n  &:hover {\n    border-color: transparent;\n    background-color: transparent;\n  }\n  \n"])), function (_a) {
    var hasMargin = _a.hasMargin;
    return (hasMargin ? '8px' : 0);
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17;
