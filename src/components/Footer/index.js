import React from "react";
import * as S from './styled';
import vtex from '../../img/vtexLogo.png'
import corebizMini from '../../img/corebizMiniLogo.png'

function Footer() {

    return (
        <>
            <S.footerParent>
                <S.footerDiv>
                    <h4>Localização</h4>
                    <hr/>
                    <p>
                        Avenida Andrômeda, 2000. Bloco 6 e 8 <br />
                        Alphavile SP <br />
                        brasil@corebiz.ag <br />
                        +55 11 3090 1039
                    </p>
                </S.footerDiv>
                <S.footerDiv>
                    <S.footerButton><i class="bi bi-envelope-fill"></i><span>ENTRE EM CONTATO</span></S.footerButton>
                    <S.footerButton><i class="bi bi-headset"></i><span>FALE COM O NOSSO CONSULTOR ONLINE</span></S.footerButton>
                </S.footerDiv>
                <S.footerDiv flex>
                    <S.logos>
                        <p>Created by</p>
                        <img alt="Created by Corebiz" src={corebizMini} />
                    </S.logos>
                    <S.logos>
                        <p>Powered by</p>
                        <img alt="Powered by VTEX" src={vtex} />
                    </S.logos>
                </S.footerDiv>
            </S.footerParent>
        </>
    );
}

export default Footer;