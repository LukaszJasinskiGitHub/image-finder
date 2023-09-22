import React, { FC, useContext } from 'react';
import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import { UserContext } from '../../context/UserContext/UserContext';
import { useNavigate } from 'react-router-dom';
import { RoutesVars } from '../../const/constRoutes';

const UserDetailsPage: FC = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  const handleOnClick = () => {
    navigate(RoutesVars.ADD_USER_DETAILS);
  };

  if (!user.preferedTopic) {
    navigate(RoutesVars.ADD_USER_DETAILS);
  }

  return (
    <div>
      <Box sx={{ maxWidth: 1488, height: '100vh', display: 'flex', alignItems: 'center', justifyContent: ' center' }}>
        <Card sx={{ width: 345, background: "#ede7e7" }}>
          {!!user.img ? (
            <img
              style={{ height: 200, width: '100%' }}
              alt="Image selected by user"
              src={user.img}
            />) :
            <div style={{ fontSize: 20, height: 200, width: '100%', display: 'flex', alignItems: 'center', justifyContent: ' center' }}>
              No result found...
            </div>
          }

          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Name: {user.name}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              Surname: {user.surname}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={handleOnClick}>Update data</Button>
          </CardActions>
        </Card>
      </Box>
    </div>
  );
};

export default UserDetailsPage;