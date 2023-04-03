import { useState } from "react";
import { useDispatch } from "react-redux";
import { createPH } from "../../features/partshouse/phSlice";

const PartshouseForm = () => {
  const [name, setName] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(createPH({ name }));
    setName("");
  };

  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="text">Partshouse</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-block" type="submit">
            Add a Parthouse
          </button>
        </div>
      </form>
    </section>
  );
};

export default PartshouseForm;
