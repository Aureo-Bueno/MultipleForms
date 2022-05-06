import { Link } from 'react-router-dom';
import * as S from './styles';
import {ReactComponent as ProfileIcon} from '../../components/svgs/profile.svg';
import {ReactComponent as BookIcon} from '../../components/svgs/book.svg';
import {ReactComponent as MailIcon} from '../../components/svgs/mail.svg';


type Props = {
    title: string;
    description: string;
    icon: string;
    path: string;
    active: boolean;
}
export const SideBarItem = ({ title, description, icon, path, active }: Props) => {
    return (
        <S.Container>
            <S.Info>
                <Link to={path}>
                    <S.Title>{title}</S.Title>
                    <S.Description>{description}</S.Description>
                </Link>
            </S.Info>
            <S.IconArea active={active}>
                    {icon === 'profile' &&
                        <ProfileIcon fill="white" width={24} height={24} />
                    }
                    {icon === 'book' &&
                        <BookIcon fill="white" width={24} height={24} />
                    }
                    {icon === 'mail' &&
                        <MailIcon fill="white" width={24} height={24} />
                    }
                </S.IconArea>
            <S.Point active={active}></S.Point>
        </S.Container>
    );
}