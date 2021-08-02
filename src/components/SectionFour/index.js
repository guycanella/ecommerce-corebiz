import React, { useState } from "react";
import * as S from './styled';

function SectionFour() {

    const [state, setState] = useState('form');
    const [nameColor, setNameColor] = useState('#BDBDBD')
    const [emailColor, setEmailColor] = useState('#BDBDBD')
    const [nameVis, setNameVis] = useState('hidden')
    const [emailVis, setEmailVis] = useState('hidden')
    const [nameInput, setNameInput] = useState('');
    const [emailInput, setEmailInput] = useState('');

    const failMsg = '#D7182A';
    const succMsg = '#BDBDBD';

    function handleSubmit(e) {
        let name = false;
        let input = false;

        if (nameInput === '') {
            setNameColor(failMsg);
            setNameVis('visible');
        } else {
            setNameColor(succMsg);
            setNameVis('hidden');
            name = true;
        }

        let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if ((emailInput !== '') && (re.test(String(emailInput).toLowerCase()))) {
            setEmailColor(succMsg);
            setEmailVis('hidden');
            input = true;
        } else {
            setEmailColor(failMsg);
            setEmailVis('visible');
        }

        if (name && input){
            setState('newsMsg');
            return true
        }else{
            e.preventDefault();
            return false
        }
    }

    function validateName(e){
        if (e.target.value !== ''){
            setNameColor(succMsg);
            setNameVis('hidden');
        }else{
            setNameColor(failMsg);
            setNameVis('visible');
        }
    }

    function validateEmail(e){
        let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if ((e.target.value !== '') && (re.test(String(e.target.value).toLowerCase()))) {
            setEmailColor(succMsg);
            setEmailVis('hidden');
        } else {
            setEmailColor(failMsg);
            setEmailVis('visible');
        }
    }

    return (
        <S.newsletter>

            {state === 'form' && (
                <>
                    <h4>Participe de nossas news com promoções e novidades!</h4>
                    <S.newsForm onSubmit={handleSubmit}>
                        <S.formItem>
                            <S.Input onFocus={validateName} onChange={validateName} onInput={e => setNameInput(e.target.value)} borderColor={nameColor} type="text" name="name" placeholder="Digite seu nome"></S.Input>
                            <S.msgError vis={nameVis}>Preencha com seu nome completo</S.msgError>
                        </S.formItem>
                        <S.formItem>
                            <S.Input onFocus={validateEmail} onChange={validateEmail} onInput={e => setEmailInput(e.target.value)} borderColor={emailColor} type="text" name="email" placeholder="Digite seu e-mail"></S.Input>
                            <S.msgError vis={emailVis}>Preencha com um e-mail válido</S.msgError>
                        </S.formItem>
                        <S.formItem>
                            <S.formButton type="submit">Eu quero!</S.formButton>
                        </S.formItem>
                    </S.newsForm>
                </>
            )}

            {state === 'newsMsg' && (
                <>
                    <S.newsMsg>
                        <p>
                            Seu e-mail foi cadastrado com sucesso!<br />
                            A partir de agora você receberá as novidades e ofertas exclusivas.
                        </p>
                        <S.formButton>Cadastrar novo e-mail</S.formButton>
                    </S.newsMsg>
                </>
            )}

        </S.newsletter>
    );
}

export default SectionFour;