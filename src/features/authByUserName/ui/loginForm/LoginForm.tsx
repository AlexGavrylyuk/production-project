import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/button/Button';
import { Input } from 'shared/ui/input/Input';
import { Text, TextTheme } from 'shared/ui/text/Text';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginByUsername } from '../../model/services/loginByUsername/LoginByUsername';
import { loginActions } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { username, password, isLoading, error } = useSelector(getLoginState);

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const onLogin = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, username, password]);

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Text title={t('Authorization form')} />
      {error && <Text text={t('Login form error')} theme={TextTheme.ERROR} />}
      <Input
        type='text'
        className={cls.input}
        placeholder={t('Enter username')}
        autofocus
        value={username}
        onChange={onChangeUsername}
      />
      <Input
        type='text'
        className={cls.input}
        placeholder={t('Enter password')}
        value={password}
        onChange={onChangePassword}
      />
      <Button className={cls.loginBtn} onClick={onLogin} disabled={isLoading}>{t('Login')}</Button>
    </div>
  );
});
LoginForm.displayName = 'LoginForm';
