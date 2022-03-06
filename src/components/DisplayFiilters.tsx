import { useDisplayFilters } from "../hooks/useDisplayFilters";

export const DisplayFilters: React.FC = () => {
  const displayFilters = useDisplayFilters();

  return (
    <>
      {displayFilters.map((displayFilter) => (
        <div key={displayFilter.text} style={{ marginLeft: 5, marginRight: 5 }}>
          <span>{displayFilter.text}</span>
          <button onClick={displayFilter.onClose}>x</button>
        </div>
      ))}
    </>
  );
};
