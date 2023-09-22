import React, { FC, useContext } from 'react';
import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { UserContext } from '../../context/UserContext/UserContext';
import AddDetailsForm from './components/AddDetailsForm';
import { User } from '../../Interfaces';
import { RoutesVars } from '../../const/constRoutes';

const AddUserDetailsPage: FC = () => {
  const navigate = useNavigate();
  const { user, actions: { saveUser } } = useContext(UserContext);

  const handleAddUserDetails = (user: User) => {
    saveUser(user);
    navigate(RoutesVars.SELECT_IMAGE);
  };

  return (
    <div>
      <Box sx={{ px: 2, maxWidth: 700, m: '0 auto' }}>
        <Typography
          sx={{ mb: 3, textAlign: 'center', fontSize: 32, fontStyle: 'italic', fontWeight: 'bold', textTransform: 'uppercase' }}>
          Fill user details
        </Typography>
        <AddDetailsForm {...{ formSubmit: handleAddUserDetails, submitText: 'Confirm', user }} />
      </Box>
    </div>
  );
};

export default AddUserDetailsPage;