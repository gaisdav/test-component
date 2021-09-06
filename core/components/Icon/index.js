import React from 'react';
import { MatIcon } from './styles';
export var Icon = function (_a) {
    var _b = _a.iconName, iconName = _b === void 0 ? 'check' : _b;
    return (React.createElement(MatIcon, { role: "img" }, iconName));
};
