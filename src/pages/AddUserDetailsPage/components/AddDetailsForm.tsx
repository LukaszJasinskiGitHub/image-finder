import React, { useState } from 'react';
import { Button, MenuItem, Select, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';

import { User } from '../../../Interfaces';
import { PreferredTopicsKeys, PreferredTopicsList, PreferredTopicsOptions } from '../../../const/constPreferredTopics';

interface Props {
  formSubmit: (user: User) => void;
  submitText: string;
  user?: User;
}

const defaultUser = {
  name: '',
  surname: '',
  preferedTopic: '',
  img: '',
};

const AddDetailsForm: React.FC<Props> = ({ user = defaultUser, formSubmit, submitText }) => {
  const initialCustomTopic = !PreferredTopicsList.includes(user.preferedTopic) ? user.preferedTopic : '';
  const [customTopic, setCustomTopic] = useState(initialCustomTopic);

  const formik = useFormik({
    initialValues: {
      name: user.name,
      surname: user.surname,
      preferedTopic: PreferredTopicsList.includes(user.preferedTopic) ? user.preferedTopic : PreferredTopicsKeys.OTHER,
      img: user.img,
    },
    onSubmit: (values) => {
      const user: User = {
        name: values.name,
        surname: values.surname,
        preferedTopic: values.preferedTopic !== PreferredTopicsKeys.OTHER ? values.preferedTopic : customTopic,
        img: values.img,
      };

      formSubmit(user);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        fullWidth
        required
        autoFocus
        id="name"
        name="name"
        label="Name"
        value={formik.values.name}
        onChange={formik.handleChange}
        sx={{ marginBottom: '12px' }}
      />
      <TextField
        fullWidth
        required
        id="surname"
        name="surname"
        label="Surname"
        value={formik.values.surname}
        onChange={formik.handleChange}
        sx={{ mb: '12px' }}
      />

      <Typography sx={{ fontSize: 14, fontStyle: 'italic', mt: 0 }}>
        Select Preferred Topic
      </Typography>
      <Select
        fullWidth
        id="preferedTopic"
        name="preferedTopic"
        label="Select Preferred Topic"
        value={formik.values.preferedTopic}
        onChange={formik.handleChange}
        sx={{ mb: '12px' }}
      >
        {PreferredTopicsOptions.map((option) => (
          <MenuItem key={option.key} value={option.key}>
            {option.name}
          </MenuItem>
        ))}
      </Select>

      {formik.values.preferedTopic === "OTHER" && (
        <>
          <Typography sx={{ mt: 2, mb: 1, fontWeight: 'bold' }}>
            Insert your topic
          </Typography>
          <TextField
            fullWidth
            required
            id="customTopic"
            name="customTopic"
            value={customTopic}
            onChange={(event) => { setCustomTopic(event.target.value); }}
            sx={{ mb: '12px' }}
          />
        </>
      )}

      <Button color="primary" variant="contained" type="submit" fullWidth >
        {submitText}
      </Button>
    </form>
  );
};

AddDetailsForm.defaultProps = {
  user: {
    name: '',
    surname: '',
    preferedTopic: '',
    img: '',
  },
};

export default AddDetailsForm;
