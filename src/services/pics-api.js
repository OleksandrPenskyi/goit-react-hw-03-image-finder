/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';
const API_KEY = '21631018-2260b91e787408b7a6b929027';

const getPics = (searchValue, currentPage) => {
  return axios
    .get(
      `/?q=${searchValue}&page=${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(response => response.data.hits);
};

export default { getPics };
