import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/button/Button';
import { Input } from 'shared/ui/input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm: FC<LoginFormProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Input type='text' className={cls.input} placeholder={t('Enter username')} autofocus />
      <Input type='text' className={cls.input} placeholder={t('Enter password')} />
      <Button className={cls.loginBtn}>{t('Login')}</Button>
    </div>
  );
};
