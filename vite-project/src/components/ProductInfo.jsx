import styled from 'styled-components'
import ProductsList from '../assets/productsList/ProductsList'

const StyledTitle = styled.h1`
/* position: absolute; */
left: 15.17%;
right: 70.86%;

width: 179px;
height: 38px;

font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 29px;
display: flex;
align-items: center;

color: #000000;


/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
`

const StyledMain = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
`

const StyledProductInfo = styled.div`
    position: relative;
    width: 264px;
    height: 264px;
    margin: 10px 24px;
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
            <StyledTitle>상품리스트</StyledTitle>
        <StyledMain>
                {ProductsList.map((product) => (
                    <StyledProductInfo key={product.id}>
                        <StyledImg src={product.image} alt={product.name} />
                        <ProductName>{product.name}</ProductName>
                        <ProductDiscount>{product.discount}</ProductDiscount>
                        <ProductPrice>{product.price}</ProductPrice>
                    </StyledProductInfo>
                ))}
        </StyledMain>

        </div>
    )
}

export default ProductInfo