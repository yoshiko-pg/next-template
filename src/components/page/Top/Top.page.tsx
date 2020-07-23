import React from 'react'

import { ErrorBoundary } from '@/components/functional/ErrorBoundary'
import { Suspense } from '@/components/functional/Suspense'
import { Header } from '@/components/ui/Header'
import { Content } from '@/components/ui/Content'

import { Top } from './Top'

export const TopPage = () => (
  <>
    <Header />

    <Content>
      <ErrorBoundary>
        <Suspense>
          <Top />
        </Suspense>
      </ErrorBoundary>
    </Content>
  </>
)
