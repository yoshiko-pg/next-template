import React from 'react'
import cx from 'clsx'

import styles from './Centering.module.css'

type Props = {
  children: React.ReactNode
  className?: string
  horizontal?: boolean
  vertical?: boolean
}

export const Centering = ({ children, className, horizontal, vertical }: Props) => (
  <div
    className={cx(
      styles.centering,
      {
        [styles.horizontal]: horizontal,
        [styles.vertical]: vertical,
      },
      className,
    )}
  >
    {children}
  </div>
)
