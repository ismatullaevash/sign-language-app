import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import ShowImage from './showimage';

storiesOf('ShowImage/show', module)
  .add('main', () => <ShowImage />)
  
