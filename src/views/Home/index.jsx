import React, { Component } from "react";
import { connect } from "react-redux";
import FillInBlank from "../../components/FillInBlank";
import MultipleChoice from "../../components/MultipleChoice";
import { fetchQuestions } from "../../store/actions/question";

class Home extends Component {
  handleSubmit = () => {
    const totalScore = this.props.userAnswers.reduce(
      (total, item) => (item.answer.exact ? (total += 1) : total),
      0
    );

    alert(`Tổng điểm: ${totalScore}/${this.props.questions.length}`);
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-danger text-center my-4">Online Test</h1>

        {this.props.questions.map((item) => {
          if (item.questionType === 1) {
            return <MultipleChoice key={item.id} question={item} />;
          }
          return <FillInBlank key={item.id} question={item} />;
        })}

        <button className="btn btn-info mb-4" onClick={this.handleSubmit}>
          Nộp bài
        </button>
      </div>
    );
  }

  componentDidMount() {
    this.props.dispatch(fetchQuestions);
  }
}

const mapStateToProps = (state) => ({
  questions: state.question.questionList,
  userAnswers: state.question.answerList,
});

export default connect(mapStateToProps)(Home);
