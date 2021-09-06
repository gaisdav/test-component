var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import { Step as MuiStep } from '@material-ui/core';
export var Step = styled(MuiStep)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 8px;\n  height: 8px;\n  padding: 0;\n  margin: 0 6px;\n  border-radius: 50%;\n  cursor: pointer;\n  \n  &.MuiStep-root:first-child {\n    margin-left: 0;\n  }\n  &.MuiStep-root:last-child {\n    margin-right: 0;\n  }\n\n  background-color: ", ";\n"], ["\n  width: 8px;\n  height: 8px;\n  padding: 0;\n  margin: 0 6px;\n  border-radius: 50%;\n  cursor: pointer;\n  \n  &.MuiStep-root:first-child {\n    margin-left: 0;\n  }\n  &.MuiStep-root:last-child {\n    margin-right: 0;\n  }\n\n  background-color: ", ";\n"])), function (_a) {
    var theme = _a.theme, active = _a.active;
    if (active) {
        return theme.custom.lightTheme.colors.background.default;
    }
    return theme.custom.lightTheme.colors.typographyAndIcons.inverse.disabled;
});
var templateObject_1;
