import Link from "next/link";
import { paginationNums } from "../../helpers/paginationNums";

type Props = {
  currentPage: number;
  maxPage: number;
  nthPageHref: (n: number) => string;
};

type PaginationLinkProps = {
  children: React.ReactNode;
  href: string;
  isActive: boolean;
};

const PaginationLink: React.FC<PaginationLinkProps> = ({
  children,
  href,
  isActive,
}) => {
  return (
    <Link href={href}>
      <a className={"button" + (isActive ? " is-primary" : "")}>{children}</a>
    </Link>
  );
};

const TripleDotPage: React.FC = () => {
  return <a className="button">...</a>;
};

export const Pagination: React.FC<Props> = ({
  currentPage,
  maxPage,
  nthPageHref,
}) => {
  return (
    <div>
      {/* TOOD will do for now */}
      {paginationNums(currentPage, maxPage).map((page) =>
        page === "..." ? (
          <TripleDotPage />
        ) : (
          <PaginationLink
            isActive={page === currentPage}
            href={nthPageHref(page)}
            key={page}
          >
            {page}
          </PaginationLink>
        )
      )}
    </div>
  );
};
