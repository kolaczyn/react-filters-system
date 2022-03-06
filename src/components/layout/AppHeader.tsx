import SearchInput from "../SearchInput";
import NextLink from "next/link";

export const AppHeader: React.FC = () => {
  return (
    <header className="is-flex is-flex-direction-row is-justify-content-space-between">
      <NextLink href="/">
        <a>
          <b className="is-size-2">AppLogo</b>
        </a>
      </NextLink>

      <SearchInput />
    </header>
  );
};
