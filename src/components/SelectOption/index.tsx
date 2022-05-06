import * as C from './styles';

type Props = {
    title: string;
    description: string;
    selected: boolean;
    onClick: () => void;
}

export const SelectOption = ({title, description, selected, onClick}: Props) => {
    return (
        <C.Container onClick={onClick} selected={selected}>
            <C.Info>
                <C.Title>{title}</C.Title>
                <C.Description>{description}</C.Description>
            </C.Info>
        </C.Container>
    );
}