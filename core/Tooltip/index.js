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
/**
 * TODO не подсказываются атрибуты. Нжуно описать типы.
 */
export var Tooltip = styled(function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (React.createElement(MuiTooltip, __assign({}, props, { classes: { popper: className } })));
})(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  & .MuiTooltip-tooltip {\n    background: ", ";\n    border-radius: ", ";\n    font-size: 12px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 16px;\n    letter-spacing: 0.4px;\n    text-align: center;\n  }\n"], ["\n  & .MuiTooltip-tooltip {\n    background: ", ";\n    border-radius: ", ";\n    font-size: 12px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 16px;\n    letter-spacing: 0.4px;\n    text-align: center;\n  }\n"])), function (props) { return props.theme.custom.lightTheme.colors.background.inverse; }, function (props) { return props.theme.custom.border.radius8; });
var templateObject_1;
