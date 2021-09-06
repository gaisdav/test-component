import React, { useState } from 'react';
import { Slide } from './Slide';
import { Stepper } from './Stepper';
export var Onboarding = function (_a) {
    var _b;
    var slides = _a.slides;
    var _c = useState(0), activeStep = _c[0], setActiveStep = _c[1];
    var maxSteps = slides.length;
    var handleNext = function (callback) {
        setActiveStep(function (prevActiveStep) {
            if (prevActiveStep === maxSteps - 1) {
                return prevActiveStep;
            }
            return prevActiveStep + 1;
        });
        callback === null || callback === void 0 ? void 0 : callback();
    };
    var handleBack = function (callback) {
        setActiveStep(function (prevActiveStep) {
            if (prevActiveStep === 0) {
                return prevActiveStep;
            }
            return prevActiveStep - 1;
        });
        callback === null || callback === void 0 ? void 0 : callback();
    };
    var activeSlide = slides[activeStep];
    (_b = activeSlide.actions) === null || _b === void 0 ? void 0 : _b.map(function (action) {
        if (action.type === 'next') {
            action.callback = handleNext;
        }
        if (action.type === 'back') {
            action.callback = handleBack;
        }
        return action;
    });
    return (React.createElement(Slide, { key: activeSlide.title, title: activeSlide.title, content: activeSlide.content, actions: activeSlide.actions, stepper: maxSteps > 1 ? (React.createElement(Stepper, { steps: slides, activeStep: activeStep, setActiveStep: setActiveStep })) : undefined }));
};
