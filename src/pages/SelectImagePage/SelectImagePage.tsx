import React, { FC, useContext, useMemo, useState } from 'react';
import { Alert, Box, Card, CardActions, IconButton, LinearProgress, Tooltip } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { UserContext } from '../../context/UserContext/UserContext';
import { RoutesVars } from '../../const/constRoutes';
import { getImage } from '../../api/services/ImageService';
import { ImageApiResponse, Image } from '../../Interfaces';

const SelectImagePage: FC = () => {
  const navigate = useNavigate();
  const { user, actions: { saveUser } } = useContext(UserContext);
  const [images, setImages] = useState<Image[]>();
  const [imageToDisplay, setImageToDisplay] = useState<number>(1);

  if (!user.preferedTopic) {
    navigate(RoutesVars.ADD_USER_DETAILS);
  }

  const { isLoading, isError } = useQuery({
    queryKey: ['getImage', user.name, user.preferedTopic],
    queryFn: () => getImage(user.preferedTopic),
    onSuccess: (data: ImageApiResponse) => {
      setImages([...data.results]);
      saveUser({ ...user, img: data.results[0]?.urls.thumb });
    },
  });

  const handleOnAcceptClick = () => {
    navigate(RoutesVars.USER_DETAILS);
  };

  const handleOnRejectClick = () => {
    images && saveUser({ ...user, img: images[imageToDisplay]?.urls.thumb });
    images && setImageToDisplay(prev => prev + 1);
  };

  const imageUrl = useMemo(() => user.img, [user.img]);

  if (isLoading) <LinearProgress />;
  if (isError) <Alert color='error' />;

  return (
    <div>
      <Box sx={{ height: '80vh', display: 'flex', alignItems: 'center', justifyContent: ' center' }}>
        <Card sx={{ width: 345, background: "#ede7e7" }}>
          {!!user.img ? (
            <img
              style={{ height: 200, width: '100%' }}
              alt="Image selected by user"
              src={imageUrl}
            />) :
            (
              <div style={{ fontSize: 20, height: 200, width: '100%', display: 'flex', alignItems: 'center', justifyContent: ' center' }}>
                No result found...
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
