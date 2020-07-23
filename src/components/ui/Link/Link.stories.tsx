/* eslint-disable import/no-default-export */
import React from 'react'

/* eslint-disable @typescript-eslint/no-unused-vars */
import { action } from '@storybook/addon-actions'
/* eslint-enable @typescript-eslint/no-unused-vars */

import { Link } from './Link'

export default {
  title: 'ui/Link',
}

export const Default = () => <Link>Link Button</Link>

export const Href = () => <Link href="/">Normal Link</Link>

export const OnClick = () => <Link onClick={action('onClick')}>Button</Link>

export const Disabled = () => (
  <Link href="/" disabled>
    Disabled Button
  </Link>
)

export const WithoutStyle = () => (
  <Link href="/" withoutStyle>
    Link without Link style
  </Link>
)
