import e from 'express';
import { ChangeEvent, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Theme } from '../../components/Theme';
import { useForm, FormActions } from '../../context/FormContext';
import * as S from './styles';

export const FormName = () => {
    const navigate =  useNavigate();
    const {state, dispatch} = useForm();

    useEffect(() => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 1
        })
    }, []);

    const handleNextStep = () => {
        if (state.name !== '') {
            navigate('/second');
        }else{
            alert('Preencha os dados.');
        }
        
    }

    const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setName,
            payload: e.target.value
        });
    }
    
    return (
        <Theme>
            <S.Container>
                <p>Passo 1/3</p>
                <h1>Vamos começar com o seu nome</h1>
                <p>Preencha o campo abaixo com o seu nome completo.</p>
                <hr />

                <label htmlFor="">
                    Seu nome completo 
                    <input
                      type="text"
                      autoFocus
                      value={state.name}
                      onChange={handleChangeName}
                    />
                </label>

                <button onClick={handleNextStep}>Próximo</button>
            </S.Container>
        </Theme>
    );
}