import React from 'react'
import cx from 'clsx'

import { Centering } from '@/components/ui/Centering'
import { Loading } from '@/components/ui/Loading'

import styles from './Suspense.module.css'

type Props = {
  children: React.ReactNode
  className?: string
  fallback?: React.ReactNode
}

export const Suspense = ({ children, className, fallback }: Props) => (
  <React.Suspense
    fallback={
      typeof fallback === 'undefined' ? (
        <Centering vertical horizontal className={cx(className, styles.suspense)}>
          <Loading />
        </Centering>
      ) : (
        fallback
      )
    }
  >
    {children}
  </React.Suspense>
)
