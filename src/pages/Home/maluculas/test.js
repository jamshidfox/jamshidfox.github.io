import React from "react"
import ReactPaginate from "react-paginate"

const CustomTable = ({
  count,
  handlePagination,
  changeCount
}) => {
  handlePagination = (id) => {
    changeCount(id.selected + 1)
  }
  return (
    <div className="d-flex justify-content-center">
        <ReactPaginate
          pageCount={count}
          nextLabel="Next"
          breakLabel="..."
          previousLabel="Previous"
          activeClassName="active"
          breakClassName="page-item"
          breakLinkClassName="page-link"
          onPageChange={(page) => handlePagination(page)}
          pageClassName={"page-item"}
          nextLinkClassName={"page-link"}
          nextClassName={"page-item next"}
          previousClassName={"page-item prev"}
          previousLinkClassName={"page-link"}
          pageLinkClassName={"page-link"}
          containerClassName={"pagination react-paginate justify-content-end p-1"}
        />
    </div>
  )
}

export default CustomTable
