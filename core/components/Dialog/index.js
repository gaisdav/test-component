import React from 'react';
import { Icon } from '../Icon';
import { IconButton } from '../IconButton';
import { Dialog as MuiDialog, DialogTitle, Title, DialogContent, DialogContentText, DialogActions, } from './styles';
export var Dialog = function (_a) {
    var title = _a.title, content = _a.content, actions = _a.actions, isOpen = _a.isOpen, onClose = _a.onClose, _b = _a.isScrollable, isScrollable = _b === void 0 ? false : _b;
    return (React.createElement(MuiDialog, { open: isOpen },
        React.createElement(DialogTitle, { variant: "h5" },
            React.createElement(Title, null, title),
            React.createElement(IconButton, { assign: "plain", size: "small", onClick: onClose, startIcon: React.createElement(Icon, { iconName: "close" }) })),
        content && (React.createElement(DialogContent, { dividers: isScrollable },
            React.createElement(DialogContentText, { variant: "body2" }, content))),
        actions && React.createElement(DialogActions, null, actions)));
};
