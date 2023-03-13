import { useDispatch } from "react-redux";
import { deletePH } from "../features/partshouse/phSlice";

const GoalItem = ({ goal }) => {
  const dispatch = useDispatch();

  return (
    <div className="goal">
      <div>{new Date(goal.createdAt).toLocaleString("en-US")}</div>
      <h2>{goal.text}</h2>
      <button onClick={() => dispatch(deletePH(goal._id))} className="close">
        X
      </button>
    </div>
  );
};

export default GoalItem;
