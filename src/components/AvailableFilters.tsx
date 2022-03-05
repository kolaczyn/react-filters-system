import { useContext } from "react";
import { FiltersContext } from "../api/useFilters";
import useFiltersApi from "../api/useFiltersApi";

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
    <h2>loading</h2>
  ) : (
    <>
      <hr />
      {data.map((filter) => (
        <button
          onClick={() => handleStatusClick(filter.id)}
          className={isStatusActive(filter.id) ? `active` : ""}
          key={filter.id}
        >
          {filter.name}
        </button>
      ))}
    </>
  );
};