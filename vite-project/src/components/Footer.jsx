import styled from 'styled-components'

const StyledFooter = styled.div`
box-sizing: border-box;

position: relative;
height: 58px;

background: #FFFFFF;
border-top: 1px solid rgba(0, 0, 0, 0.1);
`

const StyledFooterWordsKor = styled.div`
position: absolute;
left: 44.14%;
right: 44.14%;
top: 18.97%;
bottom: 50%;

font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 88.02%;

display: flex;
align-items: center;

color: #888888;
`
const StyledFooterWordsEng = styled.div`
position: absolute;
left: 42.66%;
right: 42.73%;
top: 50%;
bottom: 18.97%;

font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 88.02%;
/* or 11px */

display: flex;
align-items: center;

color: #888888;
`

const Footer = () => {
    return (
    <StyledFooter>
        <StyledFooterWordsKor>개인정보 처리방침 | 이용 약관</StyledFooterWordsKor>
        <StyledFooterWordsEng>All rights reserved @ Codestates</StyledFooterWordsEng>
    </StyledFooter>
    )
}

export default Footer