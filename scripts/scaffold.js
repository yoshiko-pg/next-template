#!/usr/bin/env node

/* eslint-disable */
const fs = require('fs')
const path = require('path')
const minimist = require('minimist')
/* eslint-enable */

const createDir = (dir) => {
  try {
    fs.mkdirSync(dir)
  } catch (e) {
    fs.mkdirSync(dir.replace(/\/[^/]+$/, ''))
    fs.mkdirSync(dir)
  }
}

const toUpperCamel = (str) => {
  return str[0].toUpperCase() + str.replace(/^./, '')
}

const toLowerCamel = (str) => {
  return str[0].toLowerCase() + str.replace(/^./, '')
}

const argv = minimist(process.argv.slice(2), {
  alias: {
    t: 'type',
    o: 'output',
    p: 'parent',
    h: 'help',
  },
  default: {
    type: 'component',
    parent: null,
    output: 'ui',
  },
})

const { type, output: rawOutput, parent, help } = argv

if (help || !argv._[0]) {
  // eslint-disable-next-line no-console
  console.log(`usage: ${path.basename(process.argv[1])} [options] <name>
  -t, --type: component or page (default: component)
  -o, --output: Output directory (default: ui)
  -p, --parent: Parent directory (optional)
`)
  process.exit(0)
}

const isPage = type === 'page'
const name = toUpperCamel(argv._[0])
const output = isPage ? 'page' : rawOutput
const outputDir = `components/${output}/${parent || name}`

const pageTemplate = `
/* eslint-disable import/no-default-export */
import { withAuth } from '@/pageHocs/withAuth'
import { ${name}Page } from '@/components/page/${name}'

export default withAuth(${name}Page)
`

const pageOuterTemplate = `
import React from 'react'

import { Header } from '@/components/ui/Header'
import { Content } from '@/components/ui/Content'

import { ${name} } from './${name}'

export const ${name}Page = () => (
  <>
    <Header />

    <Content>
      <${name} />
    </Content>
  </>
)
`

const pageInnerTemplate = `
import React from 'react'
import Head from 'next/head'

import styles from './${name}.module.css'

export const ${name} = () => {
  return (
    <>
      <Head>
        <title>${name}</title>
      </Head>

      <main className={styles.${toLowerCamel(name)}}>
        ${name}
      </main>
    </>
  )
}
`

const pageIndexTemplate = `
export * from './${name}.page'
`

const indexTemplate = `
export * from './${name}'
`

const componentTemplate = `
import React from 'react'
import cx from 'clsx'

import styles from './${name}.module.css'

type Props = {
  children: React.ReactNode
  className?: string
}

export const ${name} = ({ children, className }: Props) => (
  <div className={cx(styles.${toLowerCamel(name)}, className)}>
    {children}
  </div>
)
`

const cssTemplate = `.${toLowerCamel(name)} {
  /* TBD */
}
`

const storyTemplate = `
/* eslint-disable import/no-default-export */
import React from 'react'

/* eslint-disable @typescript-eslint/no-unused-vars */
import { action } from '@storybook/addon-actions'
/* eslint-enable @typescript-eslint/no-unused-vars */

import { ${name}${isPage ? 'Page' : ''} } from './${name}${isPage ? '.page' : ''}'

export default {
  title: '${output}/${parent ? `${parent}/` : ''}${name}',
}

export const Default = () => ${
  isPage ? `<${name}Page />` : `<${name}>The first story for the ${name} component!</${name}>`
}
`

// ============================================================================

const dir = `${__dirname}/../src/${outputDir}`

if (!parent) {
  createDir(dir)
  fs.writeFileSync(`${dir}/index.ts`, isPage ? pageIndexTemplate : indexTemplate)
}

if (isPage) {
  fs.writeFileSync(`${dir}/${name}.page.tsx`, pageOuterTemplate)
  fs.writeFileSync(`${dir}/${name}.tsx`, pageInnerTemplate)
  fs.writeFileSync(`${__dirname}/../src/pages/${toLowerCamel(name)}.ts`, pageTemplate)
} else {
  fs.writeFileSync(`${dir}/${name}.tsx`, componentTemplate)
}

fs.writeFileSync(`${dir}/${name}.stories.tsx`, storyTemplate)
fs.writeFileSync(`${dir}/${name}.module.css`, cssTemplate)
