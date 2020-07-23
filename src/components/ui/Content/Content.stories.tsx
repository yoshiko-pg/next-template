/* eslint-disable import/no-default-export */
import React from 'react'

/* eslint-disable @typescript-eslint/no-unused-vars */
import { action } from '@storybook/addon-actions'
/* eslint-enable @typescript-eslint/no-unused-vars */

import { Content } from './Content'

export default {
  title: 'ui/Content',
}

export const Default = () => <Content>The first story for the Content component!</Content>
