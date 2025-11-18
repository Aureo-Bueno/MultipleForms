import { Link } from "react-router-dom";
import * as S from "./styles";
import ProfileIcon from "../svgs/profile.svg?react";
import BookIcon from "../svgs/book.svg?react";
import MailIcon from "../svgs/mail.svg?react";

type SideBarItemProps = {
  title: string;
  description: string;
  icon: "profile" | "book" | "mail";
  path: string;
  active: boolean;
};

export function SideBarItem({
  title,
  description,
  icon,
  path,
  active,
}: SideBarItemProps) {
  const iconMap = {
    profile: ProfileIcon,
    book: BookIcon,
    mail: MailIcon,
  };

  const IconComponent = iconMap[icon];

  return (
    <S.Container>
      <S.Info>
        <Link to={path}>
          <S.Title>{title}</S.Title>
          <S.Description>{description}</S.Description>
        </Link>
      </S.Info>
      <S.IconArea active={active}>
        {IconComponent && <IconComponent fill="white" width={24} height={24} />}
      </S.IconArea>
      <S.Point active={active}></S.Point>
    </S.Container>
  );
}
