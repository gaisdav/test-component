import React from 'react';
import { Stepper as MuiStepper } from '@material-ui/core';
import { Step } from './styles';
export var Stepper = function (_a) {
    var steps = _a.steps, activeStep = _a.activeStep, setActiveStep = _a.setActiveStep;
    var handleStep = function (step) { return function () {
        setActiveStep(step);
    }; };
    return (React.createElement(MuiStepper, { nonLinear: true, activeStep: activeStep }, steps.map(function (step, index) { return (React.createElement(Step, { key: step.title, onClick: handleStep(index), active: index === activeStep })); })));
};
