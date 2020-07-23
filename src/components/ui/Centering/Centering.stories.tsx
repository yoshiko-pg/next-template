/* eslint-disable import/no-default-export */
import React from 'react'

/* eslint-disable @typescript-eslint/no-unused-vars */
import { action } from '@storybook/addon-actions'
/* eslint-enable @typescript-eslint/no-unused-vars */

import { Centering } from './Centering'

export default {
  title: 'ui/Centering',
}

export const Default = () => <Centering>contents</Centering>

export const Vertical = () => <Centering vertical>contents</Centering>

export const Horizontal = () => <Centering horizontal>contents</Centering>

export const VerticalAndHorizontal = () => (
  <Centering vertical horizontal>
    contents
  </Centering>
)
