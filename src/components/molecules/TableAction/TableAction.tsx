import React from "react";
import { useAppContext } from "../../../AppContext";
import { useState } from "react";
import { enumToArray } from "../../../utils";
import { What, Category, Item } from "../../../type";
import { EExpenseCategory, EIncomeCategory } from "../../../enums";
import Input from "../../atoms/Input/Input";
import Select from "../../atoms/Select/Select";

interface TableActionProps {
}

const TableAction: React.FC<TableActionProps> = () => {

    const {
        content,
        setContent,
        setShowModal,
        setModalSelectedItem
    } = useAppContext();

    const [selectedNewType, setSelectedNewType] = useState<What>(What.Expense);
    const [selectedNewTitle, setSelectedNewTitle] = useState<string>("");
    const [selectedNewAmount, setSelectedNewAmount] = useState<number>(0);
    const [selectedNewCategory, setSelectedNewCategory] = useState<Category>();
    const [currentDate, setCurrentDate] = useState<Date>(new Date());

    const handleSubmitData = () => {
        const newId =
            content.items.length > 0
                ? content.items[content.items.length - 1].id + 1
                : 1;

        const newItem: Item = {
            id: newId,
            what: selectedNewType,
            forWhat: selectedNewTitle,
            howMuch: selectedNewAmount,
            inWhichCategory: selectedNewCategory,
            date: currentDate,
        };

        const contentsCopy = { ...content };

        contentsCopy.items.push(newItem);

        setContent(contentsCopy);

        setSelectedNewType(What.Expense);
        setSelectedNewTitle("");
        setSelectedNewAmount(0);
        setSelectedNewCategory(EExpenseCategory.DebtPayments);
        setCurrentDate(new Date());
    };

    return (
        <tr>
            <td />
            <td>
                <Select
                    name="type"
                    required={true}
                    className="select select-bordered w-full"
                    value={selectedNewType}
                    onChange={(e) => {
                        setSelectedNewType(e.target.value as any);
                    }}
                    fistOptionText="Type"
                    options={enumToArray(What).map(([text, value]) => ({
                        text,
                        value,
                        disabled: false,
                    }))}
                />
            </td>
            <td>
                <Input
                    name={"title"}
                    type={"text"}
                    placeholder={"Type here"}
                    required={true}
                    value={selectedNewTitle}
                    className={"input input-bordered w-full"}
                    onChange={(e) => {
                        setSelectedNewTitle(e.target.value);
                    }}
                />
            </td>
            <td>
                <div className="form-control w-full">
                    <label className="input-group w-full">
                        <Input
                            name={"amount"}
                            type={"number"}
                            required={true}
                            value={selectedNewAmount}
                            placeholder={"0.01"}
                            className={"input input-bordered w-full"}
                            onChange={(e) => {
                                setSelectedNewAmount(parseFloat(e.target.value));
                            }}
                        />
                        <span>€</span>
                    </label>
                </div>
            </td>
            <td>
                <Select
                    name={"categoryOfType"}
                    required={false}
                    className={"select select-bordered w-full"}
                    value={selectedNewCategory}
                    onChange={(e) => {
                        setSelectedNewCategory(e.target.value as any);
                    }}
                    fistOptionText="Category"
                    options={enumToArray(
                        selectedNewType === What.Expense
                            ? EExpenseCategory
                            : EIncomeCategory
                    ).map(([text, value]) => ({
                        text,
                        value,
                        disabled: false,
                    }))}
                />
            </td>
            <td>
                <Input
                    name={"date"}
                    type={"date"}
                    required={true}
                    value={currentDate.toISOString().substring(0, 10)}
                    className={"input input-bordered w-full"}
                    onChange={(e) => {
                        setCurrentDate(new Date(e.target.value));
                    }}
                />
            </td>
            <td>
                <div className="btn-group">
                    <button onClick={handleSubmitData} className="btn">
                        Add
                    </button>
                </div>
            </td>
        </tr>
    );
};

export default TableAction;
