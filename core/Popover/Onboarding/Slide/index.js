import React from 'react';
import { Container, Title, Content, Bottom, Button, Buttons, Stepper, } from './styles';
export var Slide = function (_a) {
    var title = _a.title, content = _a.content, actions = _a.actions, stepper = _a.stepper;
    return (React.createElement(Container, null,
        React.createElement(Title, null, title),
        React.createElement(Content, null, content),
        actions && (React.createElement(Bottom, null,
            stepper && (React.createElement(Stepper, null, stepper)),
            React.createElement(Buttons, null, actions.map(function (action) {
                var handleClick = function () {
                    var _a, _b;
                    (_a = action.onClick) === null || _a === void 0 ? void 0 : _a.call(action);
                    (_b = action.callback) === null || _b === void 0 ? void 0 : _b.call(action);
                };
                return (React.createElement(Button, { assign: "plain", key: action.label, onClick: handleClick }, action.label));
            }))))));
};
