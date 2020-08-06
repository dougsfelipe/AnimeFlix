const URL = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://appreactflix.herokuapp.com';

export default {
  URL,
};
