import React, { Component } from "react";
import { connect } from "react-redux";
import createAction from "../../store/actions";
import actionType from "../../store/actions/type";

class MultipleChoice extends Component {
  handlePushAnswer = (item) => {
    const userAnswer = {
      questionId: this.props.question.id,
      answer: {
        content: item.content,
        exact: item.exact,
      },
    };

    this.props.dispatch(createAction(actionType.PUSH_ANSWER, userAnswer));
  };

  render() {
    const { id, content, answers } = this.props.question;

    return (
      <div className="mb-4">
        <h5>
          Câu {id}: {content}
        </h5>
        {answers.map((item) => (
          <div key={item.id} className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name={`answer-${id}`}
              id={`answer-${id + item.id}`}
              onChange={() => this.handlePushAnswer(item)}
            />
            <label
              className="form-check-label"
              htmlFor={`answer-${id + item.id}`}
            >
              {item.content}
            </label>
          </div>
        ))}
      </div>
    );
  }
}

export default connect()(MultipleChoice);
