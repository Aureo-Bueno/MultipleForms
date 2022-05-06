import e from 'express';
import { ChangeEvent, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { SelectOption } from '../../components/SelectOption';
import { Theme } from '../../components/Theme';
import { useForm, FormActions } from '../../context/FormContext';
import * as S from './styles';

export const FormLevelProgram = () => {
    const navigate =  useNavigate();
    const {state, dispatch} = useForm();

    useEffect(() => {
        if (state.name === '') {
            navigate('/');
        }else{
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 2
            })
        }
    }, []);

    const handleNextStep = () => {
        if (state.name !== '') {
            navigate('/third');
        }else{
            alert('Preencha os dados.');
        }
        
    }

    const setLevel = (level: number) => {
        dispatch({
            type: FormActions.setLevel,
            payload: level
        });
    }

    
    
    return (
        <Theme>
            <S.Container>
                <p>Passo 2/3</p>
                <h1>{state.name}, o que melhor descreve você?</h1>
                <p>Escolha a opção que melhor condiz com seu estado atual.</p>
                <hr />

                <SelectOption
                    title="Sou iniciante"
                    description="Comecei a programar há menos de 2 anos"
                    selected={state.level === 0}
                    onClick={()=>setLevel(0)}
                />
                
                <SelectOption
                    title="Sou desenvolvedor"
                    description="Comecei a programar há 2 anos ou mais"
                    selected={state.level === 1}
                    onClick={()=>setLevel(1)}
                />

                <Link to="/" className="backButton">Voltar</Link>
                <button onClick={handleNextStep}>Próximo</button>
            </S.Container>
        </Theme>
    );
}