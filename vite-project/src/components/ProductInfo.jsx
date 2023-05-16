import styled from 'styled-components'
import product from '../assets/Products/상품_애플워치 스트랩.png';

const StyledProductInfo = styled.div`
    position: relative;
    width: 264px;
    height: 264px;
`

const StyledImg = styled.img`
position: absolute;
left: 0%;
right: 0%;
top: 0%;
bottom: 0%;
`

const ProductName = styled.div`
    position: absolute;
    left: 0%;
    right: 18.94%;
    top: 81.82%;
    bottom: 9.09%;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 800;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;

    color: #000000;
`

const ProductDiscount = styled.div`
position: absolute;
left: 81.06%;
right: 0%;
top: 81.82%;
bottom: 9.09%;

font-family: 'Inter';
font-style: normal;
font-weight: 800;
font-size: 16px;
line-height: 19px;
display: flex;
align-items: center;
text-align: right;

color: #452CDD;
`
const ProductPrice = styled.div`
position: absolute;
left: 0%;
right: -0.76%;
top: 90.91%;
bottom: 0%;

font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 19px;
display: flex;
align-items: center;
text-align: right;

color: #000000;
`

const ProductInfo = () => {
    return (
        <div>
            <StyledProductInfo>
                <StyledImg src={product} alt='애플워치 스트랩' />
                <ProductName>애플워치 스트랩</ProductName>
                <ProductDiscount>20%</ProductDiscount>
                <ProductPrice>150,000원</ProductPrice>
            </StyledProductInfo>
        </div>
    )
}

export default ProductInfo