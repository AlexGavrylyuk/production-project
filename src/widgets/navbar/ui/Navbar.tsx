import { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/button/Button';
import { Modal } from 'shared/ui/modal/Modal';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = (props) => {
  const { className } = props;
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { t } = useTranslation();

  const onToggleModal = useCallback(() => {
    setIsAuthModalOpen((prev) => !prev);
  }, []);

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Button
        className={cls.links}
        theme={ButtonTheme.CLEAR_INVERTED}
        onClick={onToggleModal}
      >
        {t('Login')}
      </Button>
      <Modal isOpen={isAuthModalOpen} onClose={onToggleModal}>
        Lorem ipsum dolor sit amet
        consectetur adipisicing elit.
        Illum quod cupiditate tempora veniam dignissimos
        error dolorum nobis ducimus quaerat, obcaecati
        quam aperiam sunt accusantium quae sed ipsum
        minima eius! Laboriosam placeat ab,
        sapiente ut exercitationem in
      </Modal>
    </div>
  );
};
