import React, { useEffect, useState } from "react";
import './Table.scss'
import { TypeOrder } from "../../types/IOrder";
import RowTable from './RowTable.view'
import '../ErrorTab/ErrorTab.scss'

interface ITableView {
	data: TypeOrder[],
	isLoading: boolean
}

const TableView = (props: ITableView): JSX.Element => {
	const { data, isLoading } = props;
	const [tableData, setTableData] = useState(data);
	const [sortOrder, setSortOrder] = useState('desc')

	useEffect(() => {
		setTableData(data)
	}, [data])

	const handleSorting = () => {
		const sorted = [...tableData].sort((a, b) => {
			return (
				a.subject.title.toString().localeCompare(b.subject.title.toString(), "en", {
					numeric: true,
				}) * (sortOrder === "asc" ? 1 : -1)
			);
		});
		setTableData(sorted);
		setSortOrder(sortOrder === "asc" ? "desc" : "asc")
	}

	return (
		<div className="table-container">
			{
				isLoading ? <div className="loader">...</div> : (
					<>
						{
							!tableData.length && (
								<div className="error-tab d-flex d-center">
									<div className='error-tab__no-items'>No Items</div>
								</div>
							)
						}
						{
							!!tableData.length && (
								<table width="100%" cellSpacing={0}>
									<thead>
										<tr>
											<th colSpan={2}>
												<div className="d-flex table-container__headline">
													DATE & TIME
												</div>
											</th>
											<th colSpan={6}>
												<div className="d-flex table-container__headline cursor" onClick={() => handleSorting()}>
													SUBJECT
												</div>
											</th>
											<th colSpan={2}>
												<div className="d-flex table-container__headline">
													COMMUNICATION TYPE
												</div>
											</th>
											<th colSpan={2}>
												<div className="d-flex table-container__headline">
													ORDER #
												</div>
											</th>
											<th colSpan={2}>
												<div className="d-flex table-container__headline">
												</div>
											</th>
										</tr>
									</thead>
									<RowTable tableData={tableData} />
								</table>
							)
						}
					</>
				)
			}
		</div>
	)
}

export default TableView;
