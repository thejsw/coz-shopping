import styled from 'styled-components'
import ProductInfo from '../components/ProductInfo'

const StyledMain = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 0px;
gap: 24px;

position: relative;
height: 832px;
overflow-y: scroll;

background: #FFFFFF;
`

const MainPage = () => {
    return (
        <StyledMain>
            <ProductInfo />
        </StyledMain>
    )
}

export default MainPage