import React from 'react';
import { storiesOf } from '@storybook/react';
import TodoItems from '../src/compornents/Todoitem';
import { withInfo } from '@storybook/addon-info';

storiesOf('TodoItems', module)
  .addDecorator(withInfo)
  .add(
    'Default', 
    () => (
      <TodoItems  
      item={{title: "demo", idDone: false}}/>
    )
  )