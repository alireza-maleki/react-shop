export const dataReducer = (
  state = { post: [], loading: false, error: "" },
  action
) => {
  switch (action.type) {
    case "product":
      return { ...state, post: action.payload, loading: false };
    case "getDataSuccess":
      return { ...state, loading: true };
    default:
      return state;
  }
};

export const productInformationReducer = (state = [], action) => {
  switch (action.type) {
    case "productInformation":
      return action.payload;
    default:
      return state;
  }
}

export const detailReducer = (state = [], action) => {
  switch (action.type) {
    case "detail":
      return action.payload;
    default:
      return state;
  }
};

export const searchReducer = (state = "", action) => {
  switch (action.type) {
    case "productSearch":
      return action.payload;
    default:
      return state;
  }
};

export const addToCardReducer = (state = [], action) => {
  switch (action.type) {
    case "addToCard":
      const product = state.find((item) => item.id === action.payload.id);

      if (product) {
        product.qty += 1;
        const products = state.filter(
          (item) => item.id !== action.payload.id
        );
        console.log(products);
        return [...products, product];
      }
      action.payload.qty = 1;

      return [...state, action.payload];

    case "removeInCard":
      return state.filter((item) => item.id !== action.payload.id);

    default:
      return state;
  }
};

export const plusReducer = (state = 1, action) => {
  switch (action.type) {
    case "plus":
      return action.payload.qty += 1;

    case "mines":
      if (action.payload.qty > 1) {
        return (action.payload.qty -= 1);
      }

    case "plusPrice":
      return action.payload;

    case "minesPrice":
      return action.payload;

    default:
      return state;
  }
};

export const nextReducer = (state = false, action) => {
  switch (action.type) {
    case "next":     
      return action.payload;
    default:
      return state;
  }
}

export const postNameReducer = (state = "", action) => {
  switch (action.type) {
    case "postName":   
      return action.payload;
    default:
      return state;
  }
}

export const postEmailReducer = (state = "", action) => {
  switch (action.type) {
    case "postEmail":   
      return action.payload;
    default:
      return state;
  }
}

export const postPasswordReducer = (state = "", action) => {
  switch (action.type) {
    case "postPassword":   
      return action.payload;
    default:
      return state;
  }
}

export const postRepeatPasswordReducer = (state = "", action) => {
  switch (action.type) {
    case "postRepeatPassword":   
      return action.payload;
    default:
      return state;
  }
}

export const loginReducer = (state = false, action) => {
  switch (action.type) {
    case "login":  
      return action.payload; 
    default:
      return state;
  }
}

  export const userExistReducer = (state = "", action) => {
    switch (action.type) {
      case "userExist":   
        return action.payload;
      default:
        return state;
    }
  }

export const postErrorReducer = (state = "", action) => {
  switch (action.type) {
    case "postError":    
      return action.payload;
    default:
      return state;
  }
}

export const invalidErrorReducer = (state = "", action) => {
  switch (action.type) {
    case "invalidError":    
      return action.payload;
    default:
      return state;
  }
}

export const mainDataReducer = (state = [], action) => {
  switch (action.type) {
    case "mainData":  
      return action.payload;
    default:
      return state;
  }
}

export const setAddressreducer = (state = false, action) => {
  switch (action.type) {
    case "address":     
      return action.payload;
    default:
      return state;
  }
}

