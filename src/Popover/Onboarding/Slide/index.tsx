import React, { FC } from 'react';
import {
  Container,
  Title,
  Content,
  Bottom,
  Button,
  Buttons,
  Stepper,
} from './styles';

type ButtonType = 'back' | 'next';

interface ButtonProps {
  label: string;
  type?: ButtonType;
  onClick?: () => void;
  callback?: () => void;
}

export type TActions = Array<ButtonProps>;

export interface SlideProps {
  title: string;
  content?: string;
  actions?: TActions;
  stepper?: JSX.Element;
}

export type TSlides = Array<SlideProps>;

export const Slide: FC<SlideProps> = ({
  title,
  content,
  actions,
  stepper,
}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Content>{content}</Content>
      {actions && (
        <Bottom>
          {stepper && (
            <Stepper>
              {stepper}
            </Stepper>
          )}
          <Buttons>
            { actions.map((action) => {
              const handleClick = () => {
                action.onClick?.();
                action.callback?.();
              };
              return (
                <Button assign="plain" key={action.label} onClick={handleClick}>
                  {action.label}
                </Button>
              );
            })}
          </Buttons>
        </Bottom>
      )}
    </Container>
  );
}
