import { AppFilterContext } from "../../context/AppFilterContext";
import SearchInput from "../SearchInput";
import { AppHeader } from "./AppHeader";

type Props = {
  children: React.ReactNode;
};

export const AppBody: React.FC<Props> = ({ children }) => {
  return (
    <AppFilterContext>
      <div className="container">
        <AppHeader />
        {children}
      </div>
    </AppFilterContext>
  );
};
