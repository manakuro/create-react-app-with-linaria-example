import React from 'react'
import logo from './logo.svg'
import { styled } from '@linaria/react'

const App: React.FC = () => {
  return (
    <Container>
      <AppHeader>
        <Img src={logo} alt="logo" />
        <Paragraph>
          Edit <code>src/App.tsx</code> and save to reload.
        </Paragraph>
        <Link
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </Link>
      </AppHeader>
    </Container>
  )
}

const Container = styled.div`
  text-align: center;
`

const AppHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

const Img = styled.img`
  height: 40vmin;
  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
    animation: App-logo-spin infinite 20s linear;
  }

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`

const Paragraph = styled.p``

const Link = styled.a`
  color: #61dafb;
`

export default App
