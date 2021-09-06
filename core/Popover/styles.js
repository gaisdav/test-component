var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import styled from 'styled-components';
import { Tooltip as MuiTooltip } from '@material-ui/core';
// const TooltipTypeVariants:TooltipStylesMapType = {
//   helper: css`
//     padding: 12px 16px;
//     width: 400px;
//     max-width: 480px;
//   `,
//   onboarding: css`
//       padding: 20px 24px 16px;
//       min-width: 320px;
//   `,
// };
export var Tooltip = styled(function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (React.createElement(MuiTooltip, __assign({}, props, { classes: { popper: className } })));
})(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  & .MuiTooltip-tooltip {\n    border-radius: ", ";\n    color: ", ";\n    background: ", ";\n    padding: ", ";\n    min-width: ", ";\n    max-width: ", ";\n  }\n  & .MuiTooltip-arrow {\n    color: ", ";\n  }\n"], ["\n  & .MuiTooltip-tooltip {\n    border-radius: ", ";\n    color: ", ";\n    background: ", ";\n    padding: ", ";\n    min-width: ", ";\n    max-width: ", ";\n  }\n  & .MuiTooltip-arrow {\n    color: ", ";\n  }\n"])), function (props) { return props.theme.custom.border.radius12; }, function (props) { return props.theme.custom.lightTheme.colors.typographyAndIcons.inverse.active; }, function (props) { return props.theme.custom.lightTheme.colors.background.inverse; }, function (_a) {
    var type = _a.type;
    if (type === 'helper') {
        return '12px 16px';
    }
    return '20px 24px 16px;';
}, function (_a) {
    var type = _a.type;
    if (type === 'helper') {
        return '368px';
    }
    return '272px;';
}, function (_a) {
    var type = _a.type;
    if (type === 'helper') {
        return '448px';
    }
    return '';
}, function (props) { return props.theme.custom.lightTheme.colors.background.inverse; });
var templateObject_1;
