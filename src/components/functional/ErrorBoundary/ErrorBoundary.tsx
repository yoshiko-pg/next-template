import React from 'react'

import { Centering } from '@/components/ui/Centering'
import { Link } from '@/components/ui/Link'

import styles from './ErrorBoundary.module.css'

type Props = {
  children: React.ReactNode
  fallback?: React.ReactNode
}

type State = {
  error: Error | null
}

class ErrorBoundary extends React.Component<Props, State> {
  state: State = {
    error: null,
  }

  componentDidCatch(error: Error) {
    this.setState({ error })
  }

  render() {
    const { children, fallback } = this.props
    const { error } = this.state

    if (!error) {
      return children
    }

    if (typeof fallback !== 'undefined') {
      return fallback
    }

    return (
      <Centering vertical horizontal className={styles.errorBoundary}>
        <p className={styles.error}>エラーが発生しました。画面を更新してください。</p>
        <Link onClick={() => window.location.reload()}>更新</Link>
      </Centering>
    )
  }
}

export { ErrorBoundary }
