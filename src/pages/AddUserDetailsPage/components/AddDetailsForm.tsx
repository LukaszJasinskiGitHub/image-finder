import React, { useState } from 'react';
import { Button, MenuItem, Select, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';

import { User } from '../../../Interfaces';
import { PreferredTopicsOptions } from '../../../const/constPreferredTopics';

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
  const [customTopic, setCustomTopic] = useState('');

  const formik = useFormik({
    initialValues: {
      name: user.name,
      surname: user.surname,
      preferedTopic: user.preferedTopic,
      img: user.img,
    },
    onSubmit: (values) => {
      const user: User = {
        name: values.name,
        surname: values.surname,
        preferedTopic: values.preferedTopic !== "OTHER" ? values.preferedTopic : customTopic,
        img: values.img,
      };
      { console.log(formik.values); }
      formSubmit(user);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        fullWidth
        required
        id="name"
        name="name"
        label="Name"
        value={formik.values.name}
        onChange={formik.handleChange}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
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
        error={formik.touched.surname && Boolean(formik.errors.surname)}
        helperText={formik.touched.surname && formik.errors.surname}
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
            error={formik.touched.preferedTopic && Boolean(formik.errors.preferedTopic)}
            helperText={formik.touched.preferedTopic && formik.errors.preferedTopic}
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
