import axios from 'axios';

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNmNhNzJmMzM3Y2JmZWMwOTRkZWIzYWNiNGVmNWQzOCIsIm5iZiI6MTczNTcwNzI5Ni4zOTgwMDAyLCJzdWIiOiI2Nzc0Y2FhMDJlZmJmM2I0MWQ5Mjk0NDYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.QC_jMYUAfi9iHFqVWgRYbD5ajfWAsZOtTceSVjnw0XU'
  }
});

export default instance;
