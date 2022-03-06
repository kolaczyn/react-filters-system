import Link from "next/link";

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
      {/* <a className={"button" + isActive ? " is-active" : ""}>{children}</a> */}
      <a className={"button" + (isActive ? " is-primary" : "")}>{children}</a>
    </Link>
  );
};

// <Link href={nthPageHref(currentPage - 1)}>
//   <a className="button">{currentPage - 1}</a>
// </Link>

export const Pagination: React.FC<Props> = ({
  currentPage,
  maxPage,
  nthPageHref,
}) => {
  const showFirstPageLink = currentPage === 1;
  const isLastPage = currentPage === maxPage;

  return (
    <div>
      {/* TOOD will do for now */}
      {[1, 2, maxPage - 1, maxPage].map((pageNum) => (
        <PaginationLink
          isActive={pageNum === currentPage}
          href={nthPageHref(pageNum)}
          key={pageNum}
        >
          {pageNum}
        </PaginationLink>
      ))}
    </div>
  );
};
