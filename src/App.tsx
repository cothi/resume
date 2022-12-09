import React, { useEffect } from 'react'
import styled from 'styled-components'
import * as color from './utils/color'
import Snowfall from 'react-snowfall'
import { Link } from 'react-router-dom'
import { basename } from 'path'

const Main = styled.div`
    background-color: ${color.mainBgColor};
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const IntroText = styled.div`
    font-size: 24px;
    color: #fff;
`

const LinkWrapper = styled.div`
    display: flex;
    font-size: 24px;
    width: 100%;
    justify-content: space-between;
`

const ContentWrapper = styled.div`
    display: flex;
    height: 30%;
    width: 50%;
    flex-direction: column;
    justify-content: space-between;
`

function App() {
    const mainText = "Hi, I'm Cothi \\(^o^)/ I'm Blockchain Developer"
    let index = 0
    let count = 0

    const intervalAnimationText = () => {
        const text = document.querySelector('#text') as HTMLElement

        let currentText = ''
        let letter = ''

        const type = () => {
            currentText = mainText
            letter = currentText.slice(index, ++index)

            if (index === 23) {
                text.innerHTML += '<br/>'
            }

            text.innerHTML += letter
            if (letter.length === currentText.length) {
                count++
            }
            setTimeout(type, 150)
        }
        type()
    }
    useEffect(() => {
        intervalAnimationText()
    }, [])

    return (
        <Main>
            <Snowfall snowflakeCount={100} />
            <ContentWrapper>
                <IntroText id="text"></IntroText>
                <LinkWrapper>
                    <Link to="/portfolio">Portfolio</Link>
                    <a href="https://github.com/cothi" target="_blank">
                        Github
                    </a>
                    <a href="https://wooong-dev.tistory.com/" target="_blank">
                        Blog
                    </a>
                </LinkWrapper>
            </ContentWrapper>
        </Main>
    )
}

export default App
