import styled from 'styled-components'
import Header from "../components/Header"
import Footer from "../components/Footer"

const StyledMain = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 0px;
gap: 24px;

position: relative;
width: 1280px;
height: 832px;
overflow-y: scroll;

background: #FFFFFF;
`

const MainPage = () => {
    return (
        <StyledMain>
            <Header />
            <Footer />
        </StyledMain>
    )
}

export default MainPage