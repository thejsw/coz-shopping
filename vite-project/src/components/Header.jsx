import styled from 'styled-components'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx'

const StyledHeader = styled.div`
    position: relative;
    height: 80px;

    background: #FFFFFF;
    box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);
`

const StyledH1 = styled.h1`
    position: absolute;
    left: 11.17%;
    right: 70.86%;

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
    right: 5.88%;
    top: 8.33%;
    bottom: 8.33%;
`

const ModalContent = styled.div`
    width: 160px;
    height: 110px;
    box-shadow: 0px 0px 6px 0px #00000040;
    background-color: #FFFF;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    margin-top: 70px;
    z-index: 3;
    margin-left:82%;

    &::before {
    content: "";
    position: absolute;
    top: -10px;
    left: 50%;
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-left: 10px solid #fff;
    transform: translateX(-50%);
    z-index: 3;
  }
`

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
      
    const openModalHandler = () => {
      setIsOpen(!isOpen)
    };

    return (
    <StyledHeader>
        <Link to ="/"><StyledH1>COZ Shopping</StyledH1></Link>
        <MenuIcon onClick={openModalHandler}/>
        {isOpen ? (
          <ModalContent>
          
            <div id ="menu">
              <p id= "modallist">000님, 안녕하세요!</p>
              <Link to="/itemlistpage" style={{ textDecoration: "none" }}>상품리스트 페이지</Link>
              <Link to="/bookmarkpage" style={{ textDecoration: "none" }}>북마크 페이지</Link>
              </div> 
          </ModalContent>
          ): null}
    </StyledHeader>
    )
}

export default Header