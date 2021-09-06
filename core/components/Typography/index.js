var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { css } from 'styled-components';
import { Typography as MuiTypography } from '@material-ui/core';
/**
 * TODO:
 * сейчас есть проблема с типографикой
 * если попытаться в верхеуровневом компоненте поменять какой-то из стилей указанных ниже,
 * этого сделать не выйдет, т.к. селекторы используемые нами в этом компоненте
 * будут выше по приоритету, пока можно решить только добавив !important к соответствующему свойству
 * надо найти другое решение
 * Пример
 * const RedCaption = styled(Typography).attrs({ variant: 'caption' })`
 *   color: red;
 * `; - не будет работать
 *
 * const RedCaption = styled(Typography).attrs({ variant: 'caption' })`
 *   color: red !important;
 * `; - будет работать
 */
export var Typography = styled(MuiTypography)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", ";\n"], ["\n  ", ";\n"])), function (_a) {
    var typographyAndIcons = _a.theme.custom.lightTheme.colors.typographyAndIcons;
    return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    color: ", ";\n    font-style: normal;\n    font-weight: normal;\n    h1& {\n      font-weight: 500;\n      font-size: 64px;\n      line-height: 82px;\n    }\n    h2& {\n      font-weight: 500;\n      font-size: 48px;\n      line-height: 62px;\n    }\n    h3& {\n      font-size: 34px;\n      line-height: 44px;\n    }\n    h4& {\n      font-weight: bold;\n      font-size: 24px;\n      line-height: 32px;\n    }\n    h5& {\n      font-weight: bold;\n      font-size: 20px;\n      line-height: 28px;\n    }\n\n    &.MuiTypography-subtitle1, &.MuiTypography-subtitle2, &.MuiTypography-subtitle3 {\n      font-weight: 500;\n    }\n    &.MuiTypography-subtitle1 {\n      font-size: 18px;\n      line-height: 24px;\n    }\n    &.MuiTypography-subtitle2 {\n      font-size: 16px;\n      line-height: 22px;\n    }\n    &.MuiTypography-subtitle3 {\n      font-size: 14px;\n      line-height: 20px;\n    }\n\n    &.MuiTypography-body1 {\n      font-size: 18px;\n      line-height: 24px;\n    }\n    &.MuiTypography-body2 {\n      font-size: 16px;\n      line-height: 22px;\n    }\n    &.MuiTypography-body3 {\n      font-size: 14px;\n      line-height: 20px;\n    }\n\n    &.MuiTypography-caption {\n      font-size: 12px;\n      font-weight: 400;\n      line-height: 16px;\n      color: ", ";\n    }\n\n    &.MuiTypography-overline {\n      font-size: 10px;\n      font-weight: 700;\n      line-height: 16px;\n      letter-spacing: 1.2px;\n      text-transform: uppercase;\n      color: ", ";\n    }\n  "], ["\n    color: ", ";\n    font-style: normal;\n    font-weight: normal;\n    h1& {\n      font-weight: 500;\n      font-size: 64px;\n      line-height: 82px;\n    }\n    h2& {\n      font-weight: 500;\n      font-size: 48px;\n      line-height: 62px;\n    }\n    h3& {\n      font-size: 34px;\n      line-height: 44px;\n    }\n    h4& {\n      font-weight: bold;\n      font-size: 24px;\n      line-height: 32px;\n    }\n    h5& {\n      font-weight: bold;\n      font-size: 20px;\n      line-height: 28px;\n    }\n\n    &.MuiTypography-subtitle1, &.MuiTypography-subtitle2, &.MuiTypography-subtitle3 {\n      font-weight: 500;\n    }\n    &.MuiTypography-subtitle1 {\n      font-size: 18px;\n      line-height: 24px;\n    }\n    &.MuiTypography-subtitle2 {\n      font-size: 16px;\n      line-height: 22px;\n    }\n    &.MuiTypography-subtitle3 {\n      font-size: 14px;\n      line-height: 20px;\n    }\n\n    &.MuiTypography-body1 {\n      font-size: 18px;\n      line-height: 24px;\n    }\n    &.MuiTypography-body2 {\n      font-size: 16px;\n      line-height: 22px;\n    }\n    &.MuiTypography-body3 {\n      font-size: 14px;\n      line-height: 20px;\n    }\n\n    &.MuiTypography-caption {\n      font-size: 12px;\n      font-weight: 400;\n      line-height: 16px;\n      color: ", ";\n    }\n\n    &.MuiTypography-overline {\n      font-size: 10px;\n      font-weight: 700;\n      line-height: 16px;\n      letter-spacing: 1.2px;\n      text-transform: uppercase;\n      color: ", ";\n    }\n  "])), typographyAndIcons.default.active, typographyAndIcons.default.inactive, typographyAndIcons.default.inactive);
});
var templateObject_1, templateObject_2;
