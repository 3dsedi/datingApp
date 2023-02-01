import { Pagination, PaginationItem } from "reactstrap";
import React from "react";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
interface Props {
  totalPages: number;
  currentPage: number;
  setCurrentPage: (number: number) => void;
}

export const Pages = ({ totalPages, currentPage, setCurrentPage }: Props) => {
  return (
    <>
      <div
       className="backward"
        onClick={() => {
          currentPage === 1
            ? setCurrentPage(1)
            : setCurrentPage(currentPage - 1);
        }}
      >
        <MdArrowBackIos />
      </div>
      <div
        className='forward'
        onClick={() => {
          currentPage === totalPages
            ? setCurrentPage(totalPages)
            : setCurrentPage(currentPage + 1);
        }}
      >
        <MdArrowForwardIos />
      </div>
    </>
  );
};
