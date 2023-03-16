import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import PartshouseForm from "../components/PartshouseForm";
import Spinner from "../components/Spinner";
import { getPH, reset } from "../features/partshouse/phSlice";
import Navbar from "../components/Navbar";
import PartshouseItem from "../components/PartshouseItem";

const Home = ({ user }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { ph, isLoading, isError, message } = useSelector(
    (state) => state.partshouses
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    if (!user) {
      navigate("/login");
    } else {
      dispatch(getPH());
    }

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <Navbar user={user} />
      <section className="heading">
        <p>Partshouse Home</p>
      </section>
      <PartshouseForm />
      <section className="content">
        {ph.length > 0 ? (
          <div className="goals">
            {ph.map((ph) => (
              <PartshouseItem key={ph._id} ph={ph} />
            ))}
          </div>
        ) : (
          <h3>You do not have any Partshouses yet</h3>
        )}
      </section>
    </div>
  );
};

export default Home;
