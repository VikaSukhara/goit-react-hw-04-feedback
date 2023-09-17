import { Button } from "./Feedback.styled";
export const FeedbackOption = ({ option, onLeaveFeedback }) => {
  return (
    <div>
        <Button name={option.name} 
        onClick={ onLeaveFeedback} 
        type="button"> {option.name} </Button>
    </div>
  );
};
