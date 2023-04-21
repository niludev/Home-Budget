import React from "react";
import Button from "../../atoms/Button/Button";
import TableAction from "../TableAction/TableAction";
import { Item, ID } from "../../../type";
import { useAppContext } from "../../../AppContext";

interface DataTableProps { }

const TableBody: React.FC<DataTableProps> = () => {
    const {
        content,
        setContent,
        setShowModal,
        setModalSelectedItem
    } = useAppContext();


    const handleEditData = (item: Item) => {
        setModalSelectedItem(item);
        setShowModal(true);
    };

    const handleDeleteData = (id: ID) => {
        const contentsCopy = { ...content };
        contentsCopy.items = contentsCopy.items.filter((item) => {
            return item.id !== id;
        });
        setContent(contentsCopy);
    };

    return (
        <tbody>
            {(content || {}).items?.map((item) => {
                return (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.what}</td>
                        <td>{item.forWhat}</td>
                        <td>
                            {item.howMuch.toLocaleString("de-DE", {
                                style: "currency",
                                currency: "EUR",
                                minimumFractionDigits: 2,
                            })}
                        </td>
                        <td>{item.inWhichCategory}</td>
                        <td>{item.date.toDateString()}</td>
                        <td>
                            <div className="btn-group">
                                <Button
                                    text="Edit"
                                    className="btn btn-active btn-xs"
                                    onClick={() => handleEditData(item)}
                                />
                                <Button
                                    text="Delete"
                                    className="btn btn-xs"
                                    onClick={() => handleDeleteData(item.id)}
                                />
                            </div>
                        </td>
                    </tr>
                );
            })}
            <TableAction/>
        </tbody>
    )
}

export default TableBody;