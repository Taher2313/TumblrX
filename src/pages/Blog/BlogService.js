/* eslint-disable no-underscore-dangle */
import { useDispatch } from 'react-redux';
import {
  setBlogHandle, setBlogTitle, setNumOfFollowers, setRadar, setRadarIsMounted, 
  setAvatar, setId, setInitialLoading, setNumOfDrafts, setNumOfPosts,
} from '../../redux/blog';
import api from '../../api/api';
import { useHistory } from 'react-router-dom';

const useBlogHandler = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  /**
   * this function makes a get request to the server to get some blog info of a certain blog
   * @function fetchBlogData
   * @param {string} blogName
   * @return {void} return nothing
   */
  const fetchBlogData = async (blogName) => {
    try {
      const response = await api.get(`/api/blog/${blogName}`);
      if (response.data.ownBlog) {
        dispatch(setBlogHandle(response.data.handle));
        dispatch(setBlogTitle(response.data.title));
        dispatch(setAvatar(response.data.avatar));
        dispatch(setId(response.data._id));
        dispatch(setNumOfFollowers(response.data.NumOfFollowers));
        dispatch(setNumOfDrafts(response.data.NumOfDrafts));
        dispatch(setNumOfPosts(response.data.NumOfPosts));
        dispatch(setInitialLoading(false));
      } else {
        history.push('/notfound');
      }
    } catch (err) {
      history.push('/notfound');
      console.log(`Error: ${err.message}`);
    }
  };
  const fetchRadar = async () => {
    try {
      const response = await api.get('/api/user/explore/1/for-you');
      dispatch(setRadar(response.data['for-youPosts']));
      dispatch(setRadarIsMounted(true));
    } catch (err) {
      if (err.response) {
        // Not in the 200 response range
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      } else {
        console.log(`Error: ${err.message}`);
      }
    }
  };
  return {
    fetchBlogData,
    fetchRadar,
  };
};
export default useBlogHandler;
