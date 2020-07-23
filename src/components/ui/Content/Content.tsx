import React from 'react'
import cx from 'clsx'

import styles from './Content.module.css'

type Props = {
  children: React.ReactNode
  className?: string
}

export const Content = ({ children, className }: Props) => (
  <div className={cx(styles.content, className)}>{children}</div>
)
