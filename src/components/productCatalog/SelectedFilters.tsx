import { useSelectedFilters as useSelectedFilters } from "../../hooks/useSelectedFilters";

type Props = {
  children: React.ReactNode;
  onClose: () => any;
};

const SelectedFilter: React.FC<Props> = ({ children, onClose }) => {
  return (
    <button className="button is-light is-small" onClick={onClose}>
      <span>{children}</span>
    </button>
  );
};

export const SelectedFilters: React.FC = () => {
  const selectedFilters = useSelectedFilters();

  return (
    <div>
      {selectedFilters.map((filter) => (
        <SelectedFilter onClose={filter.onClose} key={filter.text}>
          {filter.text}
        </SelectedFilter>
      ))}
    </div>
  );
};
