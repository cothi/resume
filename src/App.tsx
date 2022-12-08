import React from 'react'
import styled from 'styled-components'
import * as color from './utils/color'

const Main = styled.div`
    background: $color.color;
`
function App() {
    return (
        <Main>
            <header className="App-header"></header>
        </Main>
    )
}

export default App
