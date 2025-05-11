import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import useSingleData from '../../core/api/hooks/useSignleData';
import UserAvatar from './UserAvatar';
import useNotification from '../../core/components/Notification/useNotifiaction';
import MySkeleton from '../../core/components/Skelaton/MySkelaton';
import MetaTitle from '../../core/components/Metatitle/MetaTitle';
import useAuthStore from '../../store/authStore';
import GeneralInformation from './GeneralInformation';
import UserSecurityInformation from './UserSecurityInformation';
import NoDataFound from '../../core/Element/NoDataFound/NoDataFound';

const Profile = () => {
  const { email } = useAuthStore()
  const { showNotification } = useNotification();
  const { data: userDataApi, isLoading, isError, error } = useSingleData(
    'user',
    'userProfile',
    email
  );


  // const { data: transactionData, isLoading: transactionLoading } = useSingleData(
  //   '/payment',
  //   'userTransactions',
  //   email
  // );
  if (isLoading) {
    return (
      <Stack px={10}>
        <MetaTitle title='My Profile' />s
        <Stack
          direction={'row'}
          spacing={3}
          sx={{ mt: 10, justifyContent: 'center', alignItems: 'center', mb: 2 }}
        >
          <MySkeleton variant="rectangular" style={{ width: '200px', height: '280px' }} />
          <MySkeleton variant="rectangular" style={{ width: '450px', height: '280px' }} />
          <MySkeleton variant="rectangular" style={{ width: '450px', height: '280px' }} />
        </Stack>
        <MySkeleton variant="rectangular" style={{ width: '100%', height: '480px' }} />
      </Stack>
    );
  }
  // console.log('this is the data', userDataApi)
  if (isError) {
    return (
      <div>Error: {error.message}</div>
    );
  }
  const { name, phone, user_id, classes } = userDataApi
  return (
    <div className="pt-10 w-full md:px-16 pb-8 bg-blue-gray-50">
      <MetaTitle title='My Profile' />
      <div>
        <h1 className='text-[#4E18CD] text-[2rem] pt-2 font-medium'>User Profile</h1>
        <p className='text-md text-gray-800'>This section allows you to edit your profile information, such as your name, email address, and profile picture.</p>
      </div>
      {userDataApi ? <div className="flex flex-col md:flex-row gap-5 md:gap-5 my-2">
        <UserAvatar name={name} phone={phone} userId={user_id} />
        <div className="flex flex-col md:flex-row gap-5 flex-1">
          <GeneralInformation firstName={name} lastName={name} studentClass={classes} stateName={"India"} />
          <UserSecurityInformation phone={phone} email={email} />
        </div>
      </div> : <NoDataFound />}

    </div >
  );
};

export default Profile;
