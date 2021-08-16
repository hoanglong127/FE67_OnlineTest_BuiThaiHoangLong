import React, { Component } from "react";
import { createRef } from "react";
import { connect } from "react-redux";
import createAction from "../../store/actions";
import actionType from "../../store/actions/type";

class FillInBlank extends Component {
  constructor(props) {
    super(props);
    this.myRef = createRef();
  }

  handlePushAnswer = (e) => {
    if (this.myRef.current) {
      clearTimeout(this.myRef.current);
    }

    this.myRef.current = setTimeout(() => {
      const { id, answers } = this.props.question;
      const userAnswer = {
        questionId: id,
        answer: {
          content: e.target.value.trim().toLowerCase(),
          exact: false,
        },
      };

      if (userAnswer.answer.content === answers[0].content.toLowerCase()) {
        userAnswer.answer.exact = true;
      }

      this.props.dispatch(createAction(actionType.PUSH_ANSWER, userAnswer));
    }, 300);
  };

  render() {
    const { id, content } = this.props.question;

    return (
      <div className="mb-4">
        <h5>
          Câu {id}: {content}
        </h5>
        <input
          type="text"
          className="form-control w-50"
          onChange={this.handlePushAnswer}
        />
      </div>
    );
  }
}

export default connect()(FillInBlank);
