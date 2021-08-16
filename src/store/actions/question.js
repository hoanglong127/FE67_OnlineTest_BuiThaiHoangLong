import axios from "axios";
import createAction from ".";
import actionType from "./type";

export const fetchQuestions = (dispatch) => {
  axios({
    method: "GET",
    url: "https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/questions",
  })
    .then((res) => {
      dispatch(createAction(actionType.SET_QUESTIONS, res.data));
    })
    .catch((err) => {
      console.log(err);
    });
};
