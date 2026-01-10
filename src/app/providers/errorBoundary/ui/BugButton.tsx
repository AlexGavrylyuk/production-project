import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/button/Button';

interface BugButtonProps {
  className?: string;
}

// Component for testing error boundary
export const BugButton: FC<BugButtonProps> = (props) => {
  const { className = '' } = props;
  const [error, setError] = useState<boolean>(false);
  const { t } = useTranslation();

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  const onThrow = () => {
    setError(true);
  };

  return (
    <Button className={classNames('', {}, [className])} onClick={onThrow}>
      {
        t('Throw error')
      }
    </Button>
  );
};
