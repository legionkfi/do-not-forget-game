import React from 'react'
import { css } from '@emotion/css'

const Header = () => {
  return (
    <div className={headerContainer}>
        <p className={headerLogo}>🧠 DoNotForget Game</p>
        <p className={headerOptions}>About</p>
    </div>
  )
}

export default Header

const headerContainer = css`
    padding: 18px 16px;
    background-color: #064663;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
`

const headerLogo = css`
    font-size: 24px;
    font-weight: 700;
`;

const headerOptions = css`
    font-size: 20px;
    font-weight: 400;
`;