import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/appLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = (props) => {
  const { className } = props;

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink to='/' theme={AppLinkTheme.PRIMARY} className={cls.mainLink}>
          Main
        </AppLink>
        <AppLink to='/about' theme={AppLinkTheme.PRIMARY} className={cls.aboutLink}>
          About
        </AppLink>
      </div>
    </div>
  );
};
