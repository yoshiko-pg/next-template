import React from 'react'
import Link from 'next/link'
import cx from 'clsx'

import { Loading } from '@/components/ui/Loading'

import styles from './Button.module.css'

type Props = {
  onClick?: () => void
  children: React.ReactNode
  className?: string
  color?: 'main' | 'sub' | 'danger'
  size?: 's' | 'm' | 'l'
  loading?: boolean
  disabled?: boolean
  type?: 'submit' | 'reset' | 'button'
  href?: string
  as?: string
}

const Button = ({
  children,
  className,
  color = 'main',
  size = 'm',
  loading = false,
  disabled = false,
  type = 'button',
  href,
  as,
  ...props
}: Props) => {
  const allClassName = cx(styles.button, className, {
    [styles.main]: color === 'main',
    [styles.sub]: color === 'sub',
    [styles.danger]: color === 'danger',
    [styles.s]: size === 's',
    [styles.m]: size === 'm',
    [styles.l]: size === 'l',
    [styles.loading]: loading,
    [styles.disabled]: disabled,
  })

  const content = (
    <span className={styles.inner}>
      {children}
      {loading && <Loading className={styles.loadingCircle} />}
    </span>
  )

  // button
  if (!href) {
    return (
      // eslint-disable-next-line react/button-has-type
      <button className={allClassName} disabled={disabled} type={type} {...props}>
        {content}
      </button>
    )
  }

  // disabled link
  if (disabled) {
    return (
      <div className={allClassName} {...props}>
        {content}
      </div>
    )
  }

  // link
  return (
    <Link href={href} as={as} {...props}>
      <a className={allClassName} href={href} role="button" {...props}>
        {content}
      </a>
    </Link>
  )
}

export { Button }
