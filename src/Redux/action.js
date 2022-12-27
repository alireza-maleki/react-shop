import axios from "axios";

export const getData = () => async (dispatch, getState) => {
  dispatch({ type: "getDataSuccess" });
  try {
    const { data } = await axios.get("https://fakestoreapi.com/products");
    dispatch({ type: "product", payload: [...data] });
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};

export const productInformation = (params) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(
      `https://fakestoreapi.com/products/${params}`
    );
    console.log(data);
    dispatch({ type: "productInformation", payload: [data] });
  } catch (error) {
    console.log(error.message);
  }
};

export const searchBar = (x) => (dispatch, getState) => {
  dispatch({ type: "productSearch", payload: x });
};

export const addToCard = (product) => (dispatch, getState) => {
  dispatch({ type: "addToCard", payload: product });
};

export const removeInCard = (product) => (dispatch, getState) => {
  dispatch({ type: "removeInCard", payload: product });
};

export const plusToProduct = (product, stock) => (dispatch, getState) => {
  const help = stock -= 1;
  dispatch({ type: "plus", payload: product, help });
};

export const minesToProduct = (product, stock) => (dispatch, getState) => {
   const help = stock += 1;
  dispatch({ type: "mines", payload: product, help });
};

export const nextButton = () => (dispatch, getState) => {
  dispatch({ type: "next", payload: true });
};

export const postName = (event) => (dispatch, getState) => {
  dispatch({ type: "postName", payload: event });
};

export const postEmail = (event) => (dispatch, getState) => {
  dispatch({ type: "postEmail", payload: event });
};

export const postPassword = (event) => (dispatch, getState) => {
  dispatch({ type: "postPassword", payload: event });
};

export const postRepeatPassword = (event) => (dispatch, getState) => {
  dispatch({ type: "postRepeatPassword", payload: event });
};

export const postData = (userData) => async (dispatch, getState) => {
  try {
    await axios.post("http://95.216.184.20:9000/api/users", userData).then(
      (response) => {
        console.log(response);
        console.log(response.data.token);
      },
      (error) => {
        console.log(error);
        console.log(error.message);
        console.log(error.response.data.message);
        dispatch({ type: "postError", payload: error.message });
        dispatch({ type: "userExist", payload: error.response.data.message });
      }
    );
  } catch (error) {
    console.log(error.message);
  }
};

export const loginUserData = (userData) => async (dispatch, getState) => {
  try {
    await axios.post("http://95.216.184.20:9000/api/users/login", userData).then(
      (response) => {
        console.log(response);
        dispatch({ type: "mainData", payload: response })
        // console.log(response.data.token);
      },
      (error) => {
        console.log(error);
        // console.log(error.message);
        console.log(error.response.data.message);
        dispatch({ type: "postError", payload: error.message });
        dispatch({ type: "invalidError", payload: error.response.data.message });
      }
    );
  } catch (error) {
    console.log(error.message);
  }
}

export const login = () => (dispatch, getState) => {
  dispatch({ type: "login", payload: true });
};

export const setAddress = () => (dispatch, getState) => {
  dispatch({ type: "address", payload: true })
}

