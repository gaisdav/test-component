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
import { Tooltip } from './styles';
import { Helper } from './Helper';
import { Onboarding } from './Onboarding';
export var Popover = function (_a) {
    var _b = _a.type, type = _b === void 0 ? 'helper' : _b, open = _a.open, content = _a.content, arrow = _a.arrow, children = _a.children, props = __rest(_a, ["type", "open", "content", "arrow", "children"]);
    var contentType = type === 'onboarding'
        ? React.createElement(Onboarding, { slides: content })
        : React.createElement(Helper, { title: content });
    return (React.createElement(Tooltip, __assign({}, props, { title: contentType, type: type, open: open, arrow: arrow }), children));
};
