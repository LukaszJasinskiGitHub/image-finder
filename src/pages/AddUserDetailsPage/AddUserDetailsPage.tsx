import React, { FC, useContext } from 'react';
import { Box } from '@mui/material';
import { UserContext } from '../../context/UserContext/UserContext';

const AddUserDetailsPage: FC = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <Box sx={{ px: 2, maxWidth: 1488, m: '0 auto' }}>
        AddUserDetailsPage
        {user.name}
      </Box>
    </div>
  );
};

export default AddUserDetailsPage;