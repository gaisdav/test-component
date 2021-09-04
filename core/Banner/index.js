import React from 'react';
import { Container, Title, Button, ButtonContainer, } from './styles';
export var Banner = function (_a) {
    var title = _a.title, _b = _a.color, color = _b === void 0 ? 'info' : _b, actions = _a.actions;
    return (React.createElement(Container, { color: color },
        React.createElement(Title, null, title),
        actions && (React.createElement(ButtonContainer, null, actions.map(function (action) { return (React.createElement(Button, { hasMargin: actions.length > 1, size: "small", assign: "outlined", onClick: action.onClick }, action.label)); })))));
};
