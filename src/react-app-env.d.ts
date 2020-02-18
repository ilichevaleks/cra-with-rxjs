/// <reference types="react-scripts" />

import { ReactElement, WeakValidationMap, ValidationMap } from 'react'
import { RouteComponentProps } from 'react-router-dom'

declare global {
  type FPC<P = {}> = FunctionPageComponent<P>

  interface FunctionPageComponent<Params = {}> {
    (props: {} & RouteComponentProps<Params>, context?: any): ReactElement | null
    propTypes?: WeakValidationMap<{}>
    contextTypes?: ValidationMap<any>
    defaultProps?: Partial<{}>
    displayName?: string
  }
}
