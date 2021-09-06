import React, { useCallback } from 'react';
import { Tooltip } from '../Tooltip';
import { Badge } from './styles';
export var Counter = function (_a) {
    var _b = _a.count, count = _b === void 0 ? 0 : _b, _c = _a.type, type = _c === void 0 ? 'error' : _c, _d = _a.isError, isError = _d === void 0 ? false : _d, children = _a.children;
    var formatNumber = function (value, isShowError) {
        if (isShowError) {
            return '!';
        }
        var abs = Math.abs(value);
        if (abs && abs > 999) {
            var formattedValue = Math.sign(value) * parseFloat((abs / 1000).toFixed(1)) + "K";
            return formattedValue.replace('.', ',');
        }
        return value;
    };
    var badgeContent = useCallback(function () { return (formatNumber(count, isError)); }, [count, isError]);
    return (React.createElement(Tooltip, { title: "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F", placement: "bottom", disableHoverListener: !isError },
        React.createElement(Badge, { max: 999, badgeContent: badgeContent(), color: type, count: count, showZero: true }, children)));
};
