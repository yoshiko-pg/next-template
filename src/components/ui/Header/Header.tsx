import React from 'react'
import cx from 'clsx'

import styles from './Header.module.css'

type Props = {
  className?: string
}

export const Header = ({ className }: Props) => (
  <header className={cx(styles.header, className)}>Header</header>
)
