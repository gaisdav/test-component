"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Label = exports.ColorLabelVariants = void 0;
var styled_components_1 = __importStar(require("styled-components"));
var core_1 = require("@material-ui/core");
exports.ColorLabelVariants = {
    info: (0, styled_components_1.css)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    ", ";\n  "], ["\n    ", ";\n  "])), function (_a) {
        var _b = _a.theme.custom.lightTheme.colors.label, color = _b.color, backgroundColor = _b.backgroundColor;
        return (0, styled_components_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      color: ", ";\n      background: ", ";\n    "], ["\n      color: ", ";\n      background: ", ";\n    "])), color.info, backgroundColor.info);
    }),
    success: (0, styled_components_1.css)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    ", ";\n  "], ["\n    ", ";\n  "])), function (_a) {
        var _b = _a.theme.custom.lightTheme.colors.label, color = _b.color, backgroundColor = _b.backgroundColor;
        return (0, styled_components_1.css)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      color: ", ";\n      background: ", ";\n    "], ["\n      color: ", ";\n      background: ", ";\n    "])), color.success, backgroundColor.success);
    }),
    warning: (0, styled_components_1.css)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    ", ";\n  "], ["\n    ", ";\n  "])), function (_a) {
        var _b = _a.theme.custom.lightTheme.colors.label, color = _b.color, backgroundColor = _b.backgroundColor;
        return (0, styled_components_1.css)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n      color: ", ";\n      background: ", ";\n    "], ["\n      color: ", ";\n      background: ", ";\n    "])), color.warning, backgroundColor.warning);
    }),
    error: (0, styled_components_1.css)(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n    ", ";\n  "], ["\n    ", ";\n  "])), function (_a) {
        var _b = _a.theme.custom.lightTheme.colors.label, color = _b.color, backgroundColor = _b.backgroundColor;
        return (0, styled_components_1.css)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n      color: ", ";\n      background: ", ";\n    "], ["\n      color: ", ";\n      background: ", ";\n    "])), color.error, backgroundColor.error);
    }),
    default: (0, styled_components_1.css)(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n    ", ";\n  "], ["\n    ", ";\n  "])), function (_a) {
        var _b = _a.theme.custom.lightTheme.colors.label, color = _b.color, backgroundColor = _b.backgroundColor;
        return (0, styled_components_1.css)(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n      color: ", ";\n      background: ", ";\n    "], ["\n      color: ", ";\n      background: ", ";\n    "])), color.default, backgroundColor.default);
    }),
};
exports.Label = (0, styled_components_1.default)(core_1.Typography)(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  width: fit-content;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  border-radius: 300px;\n  font-size: 12px;\n  line-height: 16px;\n  \n  *:first-child {\n    font-size: 18px;\n    line-height: 18px;\n    margin: 0;\n    width: 18px;\n    height: 18px;\n  }\n  \n  padding: ", ";\n\n  ", ";\n"], ["\n  width: fit-content;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  border-radius: 300px;\n  font-size: 12px;\n  line-height: 16px;\n  \n  *:first-child {\n    font-size: 18px;\n    line-height: 18px;\n    margin: 0;\n    width: 18px;\n    height: 18px;\n  }\n  \n  padding: ", ";\n\n  ", ";\n"])), function (props) { return (typeof props.children === 'string' ? '4px 12px' : '3px'); }, function (_a) {
    var _b = _a.type, type = _b === void 0 ? 'default' : _b;
    return (0, styled_components_1.css)(templateObject_11 || (templateObject_11 = __makeTemplateObject(["", "; "], ["", "; "])), exports.ColorLabelVariants[type]);
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12;
