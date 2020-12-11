import { css } from '@linaria/core'
import { ress } from './ress'

export const globals = css`
  :global() {
    ${ress}
  }
`
