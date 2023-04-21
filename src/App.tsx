import { useState, useEffect, FormEvent, MouseEventHandler } from "react";

import Button from "./components/atoms/Button/Button";
import Input from "./components/atoms/Input/Input";
import Modal from "./components/organisms/Modal/Modal";

import { Category, ID, Item, Content, What, tabs, ModalType } from "./type";
import DataTable from "./components/templates/DataTable/DataTable";
import { useAppContext } from "./AppContext";

function App() {

  const {
    content,
    setContent,
    openModal
  } = useAppContext();

  const [currentTab, setCurrentTab] = useState<number>(0);

  /*   const handleSubmitData = () => {
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
    }; */

  useEffect(() => {
    console.log(content);
  }, [content]);

  /*   const handleEditData = (item: Item) => {
      setModalSelectedItem(item);
      setShowModal(true);
    }; */

  /*   const saveEditedData = () => {
      const newContent = { ...content };
  
      newContent.items = newContent.items.map((item) => {
        if (item.id !== modalSelectedItem?.id) return item;
  
        return modalSelectedItem;
      });
  
      setContent(newContent);
    }; */

  const handleDeleteData = (id: ID) => {
    const contentsCopy = { ...content };
    contentsCopy.items = contentsCopy.items.filter((item) => {
      return item.id !== id;
    });
    setContent(contentsCopy);
  };

  const renderTabs = () => {
    switch (currentTab) {
      case 1:
        return (
          <div className="p-2">
            <Input
              type={"file"}
              onChange={handleFileChange}
              className={"file-input file-input-bordered w-full max-w-full"}
            />
          </div>
        );

      default:
        return <DataTable />;
    }
  };

  /*   const handleFormSubmit = () => {
      console.log({
        selectedNewType,
        selectedNewTitle,
        selectedNewAmount,
        selectedNewCategory,
        currentDate,
      });
    }; */

  const handleFileChange = (e: any) => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = (e) => {
      setContent(JSON.parse(e.target?.result?.toString() || ""));
    };
  };

  return (
    <>
      <div className="mockup-window border border-base-300 m-32 shadow-2xl">
        <div className="border-t border-base-300">
          <div className="tabs">
            {tabs.map((tab, idx) => (
              <Button
                className={`tab tab-lifted ${idx === currentTab && "tab-active"
                  }`}
                onClick={() => setCurrentTab(idx)}
                key={idx}
              >
                {tab}
              </Button>
            ))}
          </div>
          {renderTabs()}
          <button onClick={() => openModal(ModalType.EditItem)}></button>
        </div>
      </div>

      <Modal />
    </>
  );
}

export default App;
