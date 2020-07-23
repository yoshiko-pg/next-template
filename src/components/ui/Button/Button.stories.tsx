/* eslint-disable import/no-default-export */
import React from 'react'

/* eslint-disable @typescript-eslint/no-unused-vars */
import { action } from '@storybook/addon-actions'
/* eslint-enable @typescript-eslint/no-unused-vars */

import { Button } from './Button'

export default {
  title: 'ui/Button',
}

export const Default = () => (
  <>
    <Button>button</Button>
    <Button disabled>button</Button>
    <Button href="/" loading>
      button
    </Button>
  </>
)

export const Sub = () => (
  <>
    <Button color="sub">button</Button>
    <Button color="sub" disabled>
      button
    </Button>
    <Button href="/" color="sub" loading>
      button
    </Button>
  </>
)

export const Danger = () => (
  <>
    <Button color="danger">button</Button>
    <Button color="danger" disabled>
      button
    </Button>
    <Button href="/" color="danger" loading>
      button
    </Button>
  </>
)

export const SizeS = () => (
  <>
    <Button size="s">button</Button>
    <Button size="s" loading>
      button
    </Button>
  </>
)

export const SizeM = () => (
  <>
    <Button size="m">button</Button>
    <Button size="m" loading>
      button
    </Button>
  </>
)

export const SizeL = () => (
  <>
    <Button size="l">button</Button>
    <Button size="l" loading>
      button
    </Button>
  </>
)
