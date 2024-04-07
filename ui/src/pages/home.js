import BookmarTable from "components/bookmarks/bookmark-table";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setDescription, setTitle } from "store/website";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTitle("IT Assets Management"));
    dispatch(setDescription("a"));
  }, [dispatch]);

  return (
    <BookmarTable />
  )
};

export default Home;
