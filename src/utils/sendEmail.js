import axios from 'axios';

export const sendEmail = async formData => {
  const data = axios.post('/api/form', formData);
  return data;
};
