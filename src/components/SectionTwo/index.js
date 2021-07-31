import React from 'react-dom';
import { Carousel } from 'react-bootstrap';
import banner from '../../img/banner.png';

function SectionTwo() {

    const shadeHeight = window.screen.height/2;

    return (
        <>
            <Carousel style={{height: shadeHeight}} controls={false}>
                <Carousel.Item>
                    <div  style={{height: shadeHeight}} className="shadeScreen">
                    </div>
                    <img
                        className="d-block w-50"
                        src={banner}
                        alt="Buying with credit card"
                        style={{height: shadeHeight, marginLeft: '50%'}}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner}
                        alt="Buying with credit card"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner}
                        alt="Buying with credit card"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner}
                        alt="Buying with credit card"
                    />
                </Carousel.Item>
            </Carousel>
        </>
    );
}

export default SectionTwo;