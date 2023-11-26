export interface Props {
  currentPage: number;
  pageLength: number;
  nextPage: () => void;
  prevPage: () => void;
}
