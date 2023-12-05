import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AnimationLoader from "../components/animationLoader";
import GetStudents from "../components/getStudents";
import { myDataActions } from "../features/studentSlice";
import { getAllStudents } from "../service/studentApi";

const ListStudents: React.FC = () => {
  const dispatch = useDispatch();
  const {
    loading = false,
    error = null,
    data = [],
  } = useSelector((state: any) => state.students || {});

  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(myDataActions.getDataStart());

      try {
        const response = await getAllStudents();
        dispatch(myDataActions.getDataSuccess(response.data));
        console.log(response.data);
      } catch (err) {
        dispatch(myDataActions.getDataFailure(err));
      } finally {
        setTimeout(() => {
          setShowLoader(false);
        }, 1000);
      }
    };

    fetchData();
  }, [dispatch]);

  if (loading || showLoader) {
    return <AnimationLoader />;
  }

  return (
    <div>
      {error && <p>Error: {error}</p>}
      {data && <GetStudents data={data} />}
    </div>
  );
};

export default ListStudents;
