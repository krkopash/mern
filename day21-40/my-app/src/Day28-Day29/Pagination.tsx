type Props = {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
};

const Pagination = ({ page, totalPages, onChange }: Props) => {
  return (
    <div className="pagination">
      <button disabled={page === 1} onClick={() => onChange(page - 1)}>
        ◀
      </button>

      <span>
        Page {page} of {totalPages}
      </span>

      <button
        disabled={page === totalPages}
        onClick={() => onChange(page + 1)}
      >
        ▶
      </button>
    </div>
  );
};

export default Pagination;
