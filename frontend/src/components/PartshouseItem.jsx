import { useDispatch } from "react-redux";
import { deletePH } from "../features/partshouse/phSlice";

const PartshouseItem = ({ ph }) => {
  const dispatch = useDispatch();

  return (
    <div className="ph">
      <div>{new Date(ph.createdAt).toLocaleString("en-US")}</div>
      <h2>{ph.name}</h2>
      <button onClick={() => dispatch(deletePH(ph._id))} className="close">
        X
      </button>
    </div>
  );
};

export default PartshouseItem;
