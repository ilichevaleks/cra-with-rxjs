import React, { forwardRef, ReactNode, ElementType } from 'react'
import classNames from 'utils/classNames'

export type GridItemsAlignment = 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline'

export type GridContentAlignment =
  | 'stretch'
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'space-between'
  | 'space-around'

export type GridDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse'

export type GridSpacing = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10

export type GridJustification =
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'

export type GridWrap = 'nowrap' | 'wrap' | 'wrap-reverse'

export type GridSize = 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

export interface GridProps {
  alignContent?: GridContentAlignment
  alignItems?: GridItemsAlignment
  className?: string
  children?: ReactNode
  component?: ElementType
  container?: boolean
  direction?: GridDirection
  item?: boolean
  justify?: GridJustification
  lg?: GridSize | boolean
  md?: GridSize | boolean
  sm?: GridSize | boolean
  spacing?: GridSpacing
  wrap?: GridWrap
  xl?: GridSize | boolean
  xs?: GridSize | boolean
  zeroMinWidth?: boolean
}

const Grid = forwardRef<HTMLElement, GridProps>(function Grid(props, ref) {
  const {
    alignContent = 'stretch',
    alignItems = 'stretch',
    className: classNameProp,
    component: Component = 'div',
    container = false,
    direction = 'row',
    item = false,
    justify = 'flex-start',
    lg = false,
    md = false,
    sm = false,
    spacing = 0,
    wrap = 'wrap',
    xl = false,
    xs = false,
    zeroMinWidth = false,
    ...other
  } = props

  const className = classNames(
    'grid',
    {
      'grid-container': container,
      'grid-item': item,
      'grid-zero-min-width': zeroMinWidth,
      [`grid-spacing-${spacing}`]: container && spacing !== 0,
      [`grid-direction-${direction}`]: direction !== 'row',
      [`grid-wrap-${wrap}`]: wrap !== 'wrap',
      [`grid-align-items-${alignItems}`]: alignItems !== 'stretch',
      [`grid-align-content-${alignContent}`]: alignContent !== 'stretch',
      [`grid-justify-${justify}`]: justify !== 'flex-start',
      [`grid-xs-${xs}`]: xs !== false,
      [`grid-sm-${sm}`]: sm !== false,
      [`grid-md-${md}`]: md !== false,
      [`grid-lg-${lg}`]: lg !== false,
      [`grid-xl-${xl}`]: xl !== false,
    },
    classNameProp
  )

  return <Component className={className} ref={ref} {...other} />
})

export default Grid
