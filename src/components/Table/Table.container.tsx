import { useSelector } from "react-redux";
import TableView from "./Table.view";
import { Store } from "../../types/Store";
import { useLocation } from "react-router-dom";

const TableContainer = (): JSX.Element => {
    const order = useSelector((_: Store) => _.order.data || {})
    const isLoading = useSelector((_:Store) => _.order.pending)
    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
    };
    const query = useQuery();
    const tab = query.get('tab')
    const renderRow = () => {
        switch (tab) {
            case '3':
                return order?.orders_AAA?.sent
            default:
                return order?.orders_A || []
        }
    }

    return <TableView data={renderRow()} isLoading={isLoading}/>
}

export default TableContainer;