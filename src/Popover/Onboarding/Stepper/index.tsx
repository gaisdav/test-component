import React, { FC } from 'react';
import { Stepper as MuiStepper} from '@material-ui/core';
import { TSlides } from '../Slide';
import { Step } from './styles';

interface Props {
  steps: TSlides;
  activeStep: number;
  setActiveStep:(value: number) => void;
}

export const Stepper: FC<Props> = ({
  steps,
  activeStep,
  setActiveStep,
}) => {
  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };
  return (
    <MuiStepper nonLinear activeStep={activeStep}>
      {steps.map((step, index) => (
        <Step
          key={step.title}
          onClick={handleStep(index)}
          active={index === activeStep}
        />
      ))}
    </MuiStepper>
  );
}
