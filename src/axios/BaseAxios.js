import axios from 'axios';
import CommonValues from '../common/CommonValues'

const instance = axios.create({
    baseURL: CommonValues.BASE_URL,
    timeout: CommonValues.TIME_OUT,
    headers: CommonValues.HEADERS
});

export default instance;