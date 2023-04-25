import { useState } from "react";
import { TypeOrder } from "../types/IOrder";

export const useSortableTable = (data: TypeOrder[]) => {
    const [tableData, setTableData] = useState(data);
    const [sortOrder, setSortOrder] = useState('asc')
    const sorted = [...tableData].sort((a, b) => {
        return (
          a.subject.title.toString().localeCompare(b.subject.title.toString(), "en", {
            numeric: true,
          }) * (sortOrder === "asc" ? 1 : -1)
        );
      });
      setTableData(sorted);
      setSortOrder(sortOrder === "asc" ? "desc" : "asc")

    return [tableData]
  };
  