import { Theme, useTheme } from 'app/providers/themeProvider';
import { ButtonHTMLAttributes } from 'react';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/button/Button';

interface ThemeSwitcherProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const ThemeSwitcher = (props: ThemeSwitcherProps) => {
  const { className, ...restProps } = props;
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === Theme.DARK;

  return (
    <Button
      className={classNames('', {}, [className])}
      theme={ButtonTheme.CLEAR}
      onClick={toggleTheme}
      {...restProps}
    >
      {isDark ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
};
