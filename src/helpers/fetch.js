export const postData = (url, data) => fetch(url, {
  method: 'POST',
  credentials: 'same-origin',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
});

// presumes JSON response
export const checkStatus = (response) => {
  if (!response.ok) {
    const error = new Error();
    // save http request error properties
    error.response = response;
    return response.json().then((serverResponse) => {
      // save server error
      error.message = serverResponse.message || serverResponse.error || 'Request failed';
      // explicitly reject the promise chain, next call will be catch()
      throw error;
    });
  }
  // continue to next then()
  return response;
};


export const parseBody = response => response.json();
