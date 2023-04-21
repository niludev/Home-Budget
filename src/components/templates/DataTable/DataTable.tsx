import React from "react";
import TableHeader from "../../molecules/TableHeader/TableHeader";
import TableBody from "../../molecules/TableBody/TableBody";

import { useAppContext } from "../../../AppContext";

interface DataTableProps {}

const DataTable: React.FC<DataTableProps> = () => {

/*   const {
    content,
        setContent,
        showModal,
        modalType,
        modalArgs,
        openModal,
        closeModal,

        setShowModal,
        setModalSelectedItem,
        children
  } = useAppContext(); */

  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <TableHeader/>
        <TableBody/>
      </table>
    </div>
  );
};

export default DataTable;
