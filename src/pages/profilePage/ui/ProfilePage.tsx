import { profileReducer } from 'entities/profile';
import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/dynamicModuleLoader/DynamicModuleLoader';

const reducers: ReducerList = {
  profile: profileReducer,
};

interface ProfilePageProps {
  className?: string;
}

const ProfilePage: FC<ProfilePageProps> = ({ className }) => {
  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames('', {}, [className])}>
        <h1>ProfilePage</h1>
      </div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
