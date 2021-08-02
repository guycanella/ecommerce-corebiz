import { useState } from "react";
import React from "react-dom";
import * as S from './styled';
import axios from "axios";
import StarRatings from 'react-star-ratings';

function SectionThree() {

    const [products, setProducts] = useState([]);

    let innerWidth = window.innerWidth;

    axios.get('https://corebiz-test.herokuapp.com/api/v1/products').then(response => {
        setProducts(response.data);
    }).catch(err => {
        console.log(err);
    });

    function convertBrCurrency(value) {
        return value.toString().slice(0, -2) + "," + value.toString().slice(-2);
    }

    function incrementShoppingCart(event) {
        const id = event.target.id;
        localStorage.setItem(`produto${id}`, JSON.stringify(products[id - 1]));
        window.location.reload();
    }

    return (
        <>
            <S.mainProducts>
                <h4>Mais Vendidos</h4>
                <hr/>
                <S.productsCarousel>
                    {products.slice(0, innerWidth < 600 ? 2 : 4 ).map((product,i) => {
                        return (
                            <S.productItem key={product.productId}>
                                {product.productId === 2 || product.productId === 3 ? <S.offSale></S.offSale> : ""}
                                <img alt={product.productName} src={product.imageUrl} />
                                <p>
                                    <S.textStyle fontWeight="600" Color="#7A7A7A">{product.productName}</S.textStyle><br />
                                    <StarRatings
                                        rating={product.stars}
                                        starRatedColor="red"
                                        numberOfStars={5}
                                        name='rating'
                                        starDimension="15px"
                                        starSpacing="1px"
                                    />
                                </p>
                                <p>
                                    <S.textStyle fontSize="18px" fontWeight="700">por R$ {convertBrCurrency(product.price)}</S.textStyle><br />
                                    <S.textStyle fontSize="11px" Color="#7A7A7A">{product.installments[0] !== undefined ? `ou em ${product.installments[0].quantity}x de R$ ${convertBrCurrency(product.installments[0].value)}` : ""}</S.textStyle>
                                </p>
                                <S.Button id={product.productId} type="button" onClick={incrementShoppingCart}>COMPRAR</S.Button>
                            </S.productItem>
                        );
                    })}
                </S.productsCarousel>
            </S.mainProducts>
        </>
    );
}

export default SectionThree;