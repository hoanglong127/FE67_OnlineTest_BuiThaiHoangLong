import actionType from "../actions/type";

const initialState = {
  questionList: [],
  answerList: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SET_QUESTIONS:
      return {
        ...state,
        questionList: action.payload,
      };
    case actionType.PUSH_ANSWER: {
      const cloneAnswerList = [...state.answerList];
      const foundIndex = cloneAnswerList.findIndex(
        (item) => item.questionId === action.payload.questionId
      );

      if (foundIndex === -1) {
        cloneAnswerList.push(action.payload);
      } else {
        cloneAnswerList[foundIndex].answer = action.payload.answer;
      }

      return {
        ...state,
        answerList: cloneAnswerList,
      };
    }
    default:
      return { ...state };
  }
};

export default reducer;
