import React, { FC, useContext } from 'react';
import { Box, Button, Card, CardActions, CardContent, Tooltip, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { UserContext } from '../../context/UserContext/UserContext';
import { RoutesVars } from '../../const/constRoutes';

const UserDetailsPage: FC = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  const handleOnClick = () => { navigate(RoutesVars.ADD_USER_DETAILS); };

  return (
    <div>
      <Box sx={{ height: '80vh', display: 'flex', alignItems: 'center', justifyContent: ' center' }}>
        <Card sx={{ width: 345, background: "#ede7e7" }}>
          {!!user.img ? (
            <img
              style={{ height: 250, width: '100%' }}
              alt="Image selected by user"
              src={user.img}
            />) : (
            <div style={{ fontSize: 20, height: 200, width: '100%', display: 'flex', alignItems: 'center', justifyContent: ' center' }}>
              Select your image...
            </div>
          )}
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <strong>Name: </strong>{user.name}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              <strong>Surname: </strong> {user.surname}
            </Typography>
          </CardContent>
          <CardActions sx={{ display: 'flex', justifyContent: ' center', fontWeight: 'bold' }}>
            <Tooltip title="Fill user details">
              <Button variant="outlined" size="large" sx={{ fontWeight: 'bold', fontSize: 16, mb: 2 }} onClick={handleOnClick}>Update data</Button>
            </Tooltip>
          </CardActions>
        </Card>
      </Box>
    </div>
  );
};

export default UserDetailsPage;