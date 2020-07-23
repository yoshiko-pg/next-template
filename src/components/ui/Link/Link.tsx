import React from 'react'
import cx from 'clsx'
import RouterLink from 'next/link'

import styles from './Link.module.css'

type LinkProps = Omit<React.ComponentProps<'a'>, 'href'> & {
  children: React.ReactNode
  className?: string
  disabled?: boolean
  href: React.ComponentProps<typeof RouterLink>['href']
  as?: string
  withoutStyle?: boolean
}

type ButtonProps = React.ComponentProps<'button'> & {
  children: React.ReactNode
  className?: string
  withoutStyle?: boolean
}

type Props = LinkProps | ButtonProps

const Link = (props: Props) => {
  const { children, className, disabled, withoutStyle = false, ...rest } = props

  const allClassName = cx(
    styles.reset,
    { [styles.link]: !withoutStyle, [styles.disabled]: disabled },
    className,
  )

  // hrefがなかったらButtonPropsになる
  const isButton = (p: FixMeAny): p is ButtonProps => typeof p.href === 'undefined'
  if (isButton(props)) {
    return (
      <button
        className={allClassName}
        disabled={disabled}
        type="button"
        role="link"
        {...(rest as ButtonProps)}
      >
        {children}
      </button>
    )
  }

  const { href, as, ...domProps } = rest as LinkProps

  // disabled link
  if (disabled) {
    return (
      <span className={allClassName} {...domProps}>
        {children}
      </span>
    )
  }

  // external link
  if (typeof href === 'string' && /^http/.test(href)) {
    return (
      <a href={href} className={allClassName} {...domProps}>
        {children}
      </a>
    )
  }

  // link
  if (typeof href === 'string' && href.includes('[') && !as) {
    throw new Error(`動的リンクにはasを設定してください： ${href}`)
  }
  return (
    <RouterLink href={href} as={as}>
      <a className={allClassName} {...domProps}>
        {children}
      </a>
    </RouterLink>
  )
}

export { Link }
