var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { css } from 'styled-components';
import { Dialog as MuiDialog, DialogActions as MuiDialogActions, DialogContent as MuiDialogContent, } from '@material-ui/core';
import { Typography } from '../Typography';
export var Dialog = styled(MuiDialog)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: block;\n  \n  .MuiBackdrop-root {\n    background-color: transparent;\n  }\n  \n  .MuiDialog-paper {\n    width: 600px;\n    max-height: 50vh;\n    padding: 23px 0 16px;\n    box-shadow: ", ";\n    border-radius: ", ";\n  }\n"], ["\n  display: block;\n  \n  .MuiBackdrop-root {\n    background-color: transparent;\n  }\n  \n  .MuiDialog-paper {\n    width: 600px;\n    max-height: 50vh;\n    padding: 23px 0 16px;\n    box-shadow: ", ";\n    border-radius: ", ";\n  }\n"])), function (props) { return props.theme.custom.lightTheme.colors.boxShadow.paper; }, function (props) { return props.theme.custom.border.radius12; });
export var DialogTitle = styled(Typography)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  padding: 0 24px 13px;\n  display: flex;\n  flex-direction: row;\n"], ["\n  padding: 0 24px 13px;\n  display: flex;\n  flex-direction: row;\n"])));
export var DialogContent = styled(MuiDialogContent)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  ", ";\n  \n  ::-webkit-scrollbar {\n    width: 7px;\n    background-color: transparent;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: ", ";\n    border-radius: 16px;\n  }\n"], ["\n  ", ";\n  \n  ::-webkit-scrollbar {\n    width: 7px;\n    background-color: transparent;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: ", ";\n    border-radius: 16px;\n  }\n"])), function (_a) {
    var dividers = _a.dividers;
    return (dividers && css(templateObject_3 || (templateObject_3 = __makeTemplateObject([" overflow-y: auto;"], [" overflow-y: auto;"]))));
}, function (props) { return props.theme.custom.lightTheme.colors.typographyAndIcons.default.inactive; });
export var DialogContentText = styled(Typography)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  padding: 0 24px;\n  display: block;\n  word-break: break-all;\n  text-align: initial;\n"], ["\n  padding: 0 24px;\n  display: block;\n  word-break: break-all;\n  text-align: initial;\n"])));
export var DialogActions = styled(MuiDialogActions)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  padding: 16px 24px 0;\n"], ["\n  padding: 16px 24px 0;\n"])));
export var Title = styled.span(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  width: 100%;\n  align-items: center;\n"], ["\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  width: 100%;\n  align-items: center;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
