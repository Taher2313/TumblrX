// import configureStore from '../../redux/store';
import api from '../../../api/api';

const getConversations = async () => {
  try {
    const response = await api.get(`/api/user/chat/reterive-conversations`);
    return response.data; 
  } catch (err) {
    if (err.response) {
      // Not in the 200 response range
      console.log(err.response.data);
      console.log(err.response.status);
      console.log(err.response.headers);
    } else {
      console.log(`Error: ${err.message}`);
    }
    return [];
  }
};

const search = async (name) => {
  try {
    const response = await api.get(`/api/blog/search?q=${name}`);
    return response.data;     
  } catch (err) {
    if (err.response) {
      // Not in the 200 response range
      console.log(err.response.data);
      console.log(err.response.status);
      console.log(err.response.headers);
    } else {
      console.log(`Error: ${err.message}`);
    }
    return [];
  }
};

export { getConversations, search};