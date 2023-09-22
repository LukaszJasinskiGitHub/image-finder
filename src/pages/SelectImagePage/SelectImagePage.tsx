import React, { FC, useContext, useMemo } from 'react';
import { Box, Card, CardActions, IconButton, LinearProgress, Tooltip } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

import { UserContext } from '../../context/UserContext/UserContext';
import { RoutesVars } from '../../const/constRoutes';
import { getImage } from '../../api/services/ImageService';
import { Image } from '../../Interfaces';

const SelectImagePage: FC = () => {
  const navigate = useNavigate();
  const { user, actions: { saveUser } } = useContext(UserContext);

  const { isLoading, refetch } = useQuery({
    queryKey: ['getImage', user.name, user.preferedTopic],
    queryFn: () => getImage(user.preferedTopic),
    onSuccess: (data: Image) => { saveUser({ ...user, img: data.urls.thumb }); },
    onError: () => { toast.error('Error during image loading.'); },
    retry: false,
  });

  const handleOnAcceptClick = () => { navigate(RoutesVars.USER_DETAILS); };
  const handleOnRejectClick = () => { refetch(); };

  const imageUrl = useMemo(() => user.img, [user.img]);

  if (isLoading) return <LinearProgress />;

  return (
    <div>
      <Box sx={{ height: '80vh', display: 'flex', alignItems: 'center', justifyContent: ' center' }}>
        <Card sx={{ width: 345, background: "#ede7e7" }}>
          {!!user.img ? (
            <img
              style={{ height: 250, width: '100%' }}
              alt="Image to select"
              src={imageUrl}
            />) :
            (
              <div style={{ fontSize: 20, height: 200, width: '100%', display: 'flex', alignItems: 'center', justifyContent: ' center' }}>
                Upps no image found...
              </div>
            )}
          <CardActions sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
            <Tooltip title="Accept picture">
              <IconButton color='success' onClick={handleOnAcceptClick}>
                <CheckCircleIcon sx={{ width: 50, height: 50 }} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Reject picture">
              <IconButton color='error' onClick={handleOnRejectClick}>
                <CancelIcon sx={{ width: 50, height: 50 }} />
              </IconButton>
            </Tooltip>
          </CardActions>
        </Card>
      </Box>
    </div >
  );
};

export default SelectImagePage;
