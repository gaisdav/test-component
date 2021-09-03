import React from 'react';
import { StyledIconButton } from './styles';
export function IconButton(_a) {
    var _b = _a.assign, assign = _b === void 0 ? 'outlined' : _b, _c = _a.size, size = _c === void 0 ? 'small' : _c, onClick = _a.onClick, startIcon = _a.startIcon;
    return (React.createElement(StyledIconButton, { assign: assign, size: size, onClick: onClick, startIcon: startIcon }));
}
