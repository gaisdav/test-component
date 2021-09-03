import React from 'react';
import { MatIcon } from './styles';
Icon.defaultProps = {
    iconName: 'check',
};
export function Icon(_a) {
    var iconName = _a.iconName;
    return (React.createElement(MatIcon, { role: "img" }, iconName));
}
