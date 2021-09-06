var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import { Typography } from '../../../Typography';
import { Button as MiuButton } from '../../../Button';
export var Container = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
export var Title = styled(Typography).attrs({ variant: 'h5' })(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  color: ", ";\n  margin-bottom: 15;\n"], ["\n  color: ", ";\n  margin-bottom: 15;\n"])), function (props) { return props.theme.custom.lightTheme.colors.typographyAndIcons.inverse.active; });
export var Content = styled(Typography).attrs({ variant: 'body3' })(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n color: ", ";\n"], ["\n color: ", ";\n"])), function (props) { return props.theme.custom.lightTheme.colors.typographyAndIcons.inverse.active; });
export var Bottom = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  justify-content: flex-end;\n  flex-direction: row;\n"], ["\n  display: flex;\n  justify-content: flex-end;\n  flex-direction: row;\n"])));
export var Button = styled(MiuButton)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  color: ", ";\n"], ["\n  color: ", ";\n"])), function (props) { return props.theme.custom.pallete.primary[200]; });
export var Buttons = styled.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  "], ["\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  "])));
export var Stepper = styled.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  align-self: center;\n  flex: 1 1 auto;\n"], ["\n  align-self: center;\n  flex: 1 1 auto;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
