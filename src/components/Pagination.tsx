type Props = {
  currentPage: number;
  maxPage: number;
  navigationLink?: string;
};

export const Pagination: React.FC<Props> = ({
  currentPage,
  maxPage,
  navigationLink,
}) => {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === maxPage;

  return (
    <div>
      {!isFirstPage && <div>{currentPage - 1}</div>}
      <div>{currentPage}</div>
      {!isLastPage && <div>{currentPage + 1}</div>}
    </div>
  );
};
