import { useSelectedFilters as useSelectedFilters } from "../../hooks/useSelectedFilters";

export const SelectedFilters: React.FC = () => {
  const selectedFilters = useSelectedFilters();

  return (
    <>
      {selectedFilters.map((filter) => (
        <div key={filter.text} style={{ marginLeft: 5, marginRight: 5 }}>
          <span>{filter.text}</span>
          <button onClick={filter.onClose}>x</button>
        </div>
      ))}
    </>
  );
};
