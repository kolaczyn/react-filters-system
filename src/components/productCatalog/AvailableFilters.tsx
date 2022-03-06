import { useContext } from "react";
import { FiltersContext } from "../../hooks/useFilters";
import useFiltersApi from "../../api/useFiltersApi";
import { Loading } from "../common/Loading";

export const AvailableFilters = () => {
  const { isLoading, data } = useFiltersApi();
  const { state: flitersState, dispatch } = useContext(FiltersContext);
  const activeStatuses = flitersState.statuses;

  const isStatusActive = (statusId) => activeStatuses.includes(statusId);

  const handleStatusClick = (statusId) => {
    if (isStatusActive(statusId)) {
      dispatch({ type: "REMOVE_STATUS", payload: statusId });
    } else {
      dispatch({ type: "ADD_STATUS", payload: statusId });
    }
  };

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <hr />
      {data.map((filter) => (
        <button
          onClick={() => handleStatusClick(filter.id)}
          className={isStatusActive(filter.id) ? `is-active button` : "button"}
          key={filter.id}
        >
          {filter.name}
        </button>
      ))}
    </>
  );
};
