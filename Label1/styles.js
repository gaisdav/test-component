var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { css } from 'styled-components';
import { Typography as MiuTypography } from '@material-ui/core';
export var ColorLabelVariants = {
    info: css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    ", ";\n  "], ["\n    ", ";\n  "])), function (_a) {
        var _b = _a.theme.custom.lightTheme.colors.label, color = _b.color, backgroundColor = _b.backgroundColor;
        return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      color: ", ";\n      background: ", ";\n    "], ["\n      color: ", ";\n      background: ", ";\n    "])), color.info, backgroundColor.info);
    }),
    success: css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    ", ";\n  "], ["\n    ", ";\n  "])), function (_a) {
        var _b = _a.theme.custom.lightTheme.colors.label, color = _b.color, backgroundColor = _b.backgroundColor;
        return css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      color: ", ";\n      background: ", ";\n    "], ["\n      color: ", ";\n      background: ", ";\n    "])), color.success, backgroundColor.success);
    }),
    warning: css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    ", ";\n  "], ["\n    ", ";\n  "])), function (_a) {
        var _b = _a.theme.custom.lightTheme.colors.label, color = _b.color, backgroundColor = _b.backgroundColor;
        return css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n      color: ", ";\n      background: ", ";\n    "], ["\n      color: ", ";\n      background: ", ";\n    "])), color.warning, backgroundColor.warning);
    }),
    error: css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n    ", ";\n  "], ["\n    ", ";\n  "])), function (_a) {
        var _b = _a.theme.custom.lightTheme.colors.label, color = _b.color, backgroundColor = _b.backgroundColor;
        return css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n      color: ", ";\n      background: ", ";\n    "], ["\n      color: ", ";\n      background: ", ";\n    "])), color.error, backgroundColor.error);
    }),
    default: css(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n    ", ";\n  "], ["\n    ", ";\n  "])), function (_a) {
        var _b = _a.theme.custom.lightTheme.colors.label, color = _b.color, backgroundColor = _b.backgroundColor;
        return css(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n      color: ", ";\n      background: ", ";\n    "], ["\n      color: ", ";\n      background: ", ";\n    "])), color.default, backgroundColor.default);
    }),
};
export var Label = styled(MiuTypography)(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  width: fit-content;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  border-radius: 300px;\n  font-size: 12px;\n  line-height: 16px;\n  \n  *:first-child {\n    font-size: 18px;\n    line-height: 18px;\n    margin: 0;\n    width: 18px;\n    height: 18px;\n  }\n  \n  padding: ", ";\n\n  ", ";\n"], ["\n  width: fit-content;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  border-radius: 300px;\n  font-size: 12px;\n  line-height: 16px;\n  \n  *:first-child {\n    font-size: 18px;\n    line-height: 18px;\n    margin: 0;\n    width: 18px;\n    height: 18px;\n  }\n  \n  padding: ", ";\n\n  ", ";\n"])), function (props) { return (typeof props.children === 'string' ? '4px 12px' : '3px'); }, function (_a) {
    var _b = _a.type, type = _b === void 0 ? 'default' : _b;
    return css(templateObject_11 || (templateObject_11 = __makeTemplateObject(["", "; "], ["", "; "])), ColorLabelVariants[type]);
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12;
