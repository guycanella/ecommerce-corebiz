import React from 'react-dom';
import { Carousel } from 'react-bootstrap';
import banner from '../../img/banner.png';
import * as S from './styled'

function SectionTwo() {

    const shadeHeight = window.screen.height / 2;

    return (
        <>
            <S.carousel style={{ height: shadeHeight }} controls={false}>
                {[...Array(4)].map((e,i) => {

                    return (
                        <Carousel.Item key={i}>
                            <S.shadeScreen style={{ height: shadeHeight }}>
                                <S.text>
                                    <h2>Olá, o que está buscando?</h2>
                                    <h1>Criar ou migrar seu e-commerce?</h1>
                                </S.text>
                            </S.shadeScreen>
                            <img
                                className="d-block w-50"
                                src={banner}
                                alt="Buying with credit card"
                                style={{ height: shadeHeight, marginLeft: '50%' }}
                            />
                        </Carousel.Item>
                    )
                })}
            </S.carousel>
        </>
    );
}

export default SectionTwo;