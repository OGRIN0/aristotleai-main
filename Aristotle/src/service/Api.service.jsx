
import axios from 'axios';
const config = {
  api: 'http://localhost:7000',
  options: {
    headers: { 'content-type': 'application/json' },
  },
};
const httpGet = (endpoint, baseUrl) => {
  var urlBase = baseUrl ? baseUrl : config.api;
  return axios.get(`${urlBase}${endpoint}`, {
    ...config.options,
  })
    .then((response) => handleResponse(response))
    .then((response) => response)
    .catch((error) => {
      console.error(error);
      throw Error(error);
    });
};

const httpPost = (endpoint, data) => {
  return axios.post(`${config.api}${endpoint}`,
    "data=" + JSON.stringify(data)
  )
    .then((response) => handleResponse(response))
    .then((response) => response)
    .catch((error) => {
      console.error(error);
      throw Error(error);
    });
};

const httpPut = (endpoint, data) => {
  return fetch(`${config.api}${endpoint}`, {
    method: 'put',
    body: data ? JSON.stringify(data) : null,
    ...config.options,
  })
    .then((response) => handleResponse(response))
    .then((response) => response)
    .catch((error) => {
      console.error(error);
      throw Error(error);
    });
};

const httpDelete = (endpoint, data) => {
  return fetch(`${config.api}${endpoint}`, {
    method: 'delete',
    ...config.options,
  })
    .then((response) => handleResponse(response))
    .then((response) => response)
    .catch((error) => {
      console.error(error);
      throw Error(error);
    });
};

const handleResponse = (response) => {
  // You can handle 400 errors as well.
  if (response.status === 200) {
    return response.data;
  } else {
    return response.data;

    // throw Error(response | 'error');
  }
};

const convertString = (obj) => {
  console.log(obj)
  for (let o in obj)
    try {
      obj[o] = obj[o].toString();
    } catch (error) { }
  console.log(obj)
  return obj;
}
const convertDatatype = (obj, dataType) => {
  console.log(obj)
  for (let o in obj) {
    try {
      if (dataType[o] == "String")
        obj[o] = obj[o].toString();
      if (dataType[o] == "int")
        obj[o] = Number(obj[o]) || 0;
      if (dataType[o] == "bool")
        obj[o] = obj[o].Number();
    } catch (error) { }
  }
  console.log(obj)
  return obj;
}
const data = { convertString, convertDatatype }
export default { httpGet, httpPost, httpPut, httpDelete, data };
