import { useContext, useEffect, useState } from "react";
import { FiltersContext } from "../api/useFilters";

const SearchInput: React.FC = ({}) => {
  const { state, dispatch } = useContext(FiltersContext);
  const { search } = state;
  const [text, setText] = useState(search);

  useEffect(() => {
    if (search === "") {
      setText("");
    }
  }, [search]);

  const handleClick = () => {
    dispatch({ type: "SET_SEARCH", payload: text });
  };
  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleClick}>search</button>
    </>
  );
};
export default SearchInput;
