import React, { ReactNode } from 'react'
import { css } from '@emotion/css'

interface Props {
    children: ReactNode
}

const Body = (props: Props) => {
  return (
    <div className={bodyStyle}>
        {props.children}
    </div>
  )
}

export default Body

const bodyStyle = css`
    flex: 1;
    height: calc(100vh - 150px);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px;

`;