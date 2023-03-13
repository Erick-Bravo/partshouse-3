import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import GoalForm from "../components/GoalForm";
import Spinner from "../components/Spinner";
import { getPH, reset } from "../features/partshouse/phSlice"
import GoalItem from "../components/GoalItem";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { ph, isLoading, isError, message } = useSelector((state) => state.partshouses);

  useEffect(() => {
    if(isError) {
      console.log(message)
    }
    if (!user) {
      navigate("/login");
    } else {
      dispatch(getPH());
    };

    return () => {
      dispatch(reset());
    }
  }, [user, navigate, isError, message, dispatch]);

  if(isLoading) {
    return <Spinner />
  }

  return <div>
    <section className="heading">
      <h1>Welcome {user && user.email}</h1>
      <p>Partshouse Home</p>
    </section>
      <GoalForm />
      <section className="content">
        {/* {ph.length > 0 ? (
          <div className="goals">
            {ph.map((ph) => (
              <GoalItem key={goal._id} goal={goal} />
            ))}
          </div>
        ) : (<h3>You do not have any Partshouses yet</h3>)} */}
      </section>
  </div>;
};

export default Home;
