import * as actionTypes from "./actionTypes";
export const saveResult = result => {
  //you can put the logic here or the reducer
  //updatedresult = result * 2
  //or you can put it in the reducer before a new state is returned as redux suggests
  return {
    type: actionTypes.STORE_RESULT,
    value: result
  };
};

export const storeResult = result => {
  return dispatch => {
    setTimeout(() => {
      dispatch(saveResult(result));
    }, 3000);
  };
};

export const deleteResult = id => {
  return {
    type: actionTypes.DELETE_RESULT,
    resId: id
  };
};
