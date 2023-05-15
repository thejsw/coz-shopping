import styled from 'styled-components'
import { RxHamburgerMenu } from 'react-icons/rx'

const StyledHeader = styled.div`
    position: relative;
    width: 1280px;
    height: 80px;

    background: #FFFFFF;
    box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);
`

const StyledH1 = styled.h1`
    position: absolute;
    left: 11.17%;
    right: 70.86%;
    /* top: 31.48%;
    bottom: 31.48%; */

    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 88.02%;
    display: flex;
    align-items: center;

    color: #000000;
`

const MenuIcon = styled(RxHamburgerMenu)`

    display: flex;
    align-items: center;
    position: absolute;
    /* left: 5.88%; */
    right: 5.88%;
    top: 8.33%;
    bottom: 8.33%;
`

const Header = () => {
    return (
    <StyledHeader>
        <StyledH1>COZ Shopping</StyledH1>
        <MenuIcon />
    </StyledHeader>
    )
}

export default Header