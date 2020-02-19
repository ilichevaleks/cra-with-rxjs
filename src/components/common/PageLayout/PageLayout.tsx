import React, { forwardRef, HTMLAttributes } from 'react'
import classNames from 'lib/classNames'

export interface PageLayoutProps extends HTMLAttributes<HTMLDivElement> {}

const PageLayout = forwardRef<HTMLDivElement, PageLayoutProps>(
  function PageLayout(props, ref) {
    const { className, ...other } = props
    return (
      <div
        className={
          classNames(
            'page-layout',
            className
          )
        }
        ref={ref}
        {...other}
      />
    )
  }
)

export default PageLayout
