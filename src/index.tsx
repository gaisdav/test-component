import React, { FC } from 'react';
import { IComponent } from './interfaces';

const SayHello: FC<IComponent> = ({ name }) => (
  <div>Hey {name}, say hello to TypeScript.</div>
);

export default SayHello;