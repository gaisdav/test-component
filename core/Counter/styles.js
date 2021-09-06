var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { css } from 'styled-components';
import { Badge as MuiBadge } from '@material-ui/core';
export var CounterColorVariants = {
    warning: css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    ", ";\n  "], ["\n    ", ";\n  "])), function (_a) {
        var _b = _a.theme.custom.lightTheme.colors, background = _b.background, typographyAndIcons = _b.typographyAndIcons;
        return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      .MuiBadge-colorWarning {\n        color: ", ";\n        background: ", ";\n      }\n    "], ["\n      .MuiBadge-colorWarning {\n        color: ", ";\n        background: ", ";\n      }\n    "])), typographyAndIcons.default.active, background.brand);
    }),
    error: css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    ", ";\n  "], ["\n    ", ";\n  "])), function (_a) {
        var _b = _a.theme.custom.lightTheme.colors, background = _b.background, typographyAndIcons = _b.typographyAndIcons;
        return css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      .MuiBadge-colorError {\n        color: ", ";\n        background: ", ";\n      }\n    "], ["\n      .MuiBadge-colorError {\n        color: ", ";\n        background: ", ";\n      }\n    "])), background.white, typographyAndIcons.default.error);
    }),
};
export var Badge = styled(MuiBadge)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n.MuiBadge-badge {\n  display: flex;\n  align-items: center;\n  text-align: center;\n  min-width: 14px;\n  min-height: 14px;\n  height: 14px;\n  line-height: 14px;\n  font-size: 10px;\n  letter-spacing: 0.4px;\n  padding: ", ";\n}\n  ", ";\n"], ["\n.MuiBadge-badge {\n  display: flex;\n  align-items: center;\n  text-align: center;\n  min-width: 14px;\n  min-height: 14px;\n  height: 14px;\n  line-height: 14px;\n  font-size: 10px;\n  letter-spacing: 0.4px;\n  padding: ", ";\n}\n  ", ";\n"])), function (_a) {
    var count = _a.count;
    if (typeof (count) === 'undefined') {
        return 0;
    }
    if (Math.abs(count) > 9) {
        return '0 4px';
    }
    return 0;
}, function (_a) {
    var color = _a.color;
    return css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["", ""], ["", ""])), CounterColorVariants[color]);
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
