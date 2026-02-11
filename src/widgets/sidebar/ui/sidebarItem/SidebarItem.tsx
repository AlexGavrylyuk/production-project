import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/appLink/AppLink';
import { SidebarItemType } from '../../model/items';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
  const { path, text, Icon } = item;
  return (
    <AppLink to={path} theme={AppLinkTheme.PRIMARY} className={classNames(cls.item, { [cls.collapsed]: collapsed })}>
      <Icon className={cls.icon} />
      <span className={cls.link}>{text}</span>
    </AppLink>
  );
});

SidebarItem.displayName = 'SidebarItem';
