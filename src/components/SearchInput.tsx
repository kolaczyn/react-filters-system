import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { FiltersContext } from "../api/useFilters";

const SearchInput: React.FC = ({}) => {
  const router = useRouter();
  const { state, dispatch } = useContext(FiltersContext);
  const { search } = state;
  const [text, setText] = useState(search);

  useEffect(() => {
    if (search === "") {
      setText("");
    }
  }, [search]);

  const handleClick = () => {
    router.push(`/search?${text}`);
    dispatch({ type: "SET_SEARCH", payload: text });
  };
  return (
    <div>
      <input
        className="input"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="button is-primary" onClick={handleClick}>
        search
      </button>
    </div>
  );
};
export default SearchInput;
