import React, { useContext, useState } from "react";
import { Content as Content, ModalType } from "./type";

interface AppContextProps {
    content: Content;
    setContent: React.Dispatch<React.SetStateAction<Content>>;

    
    setModalSelectedItem: React.Dispatch<React.SetStateAction<any>>;
    setShowModal:React.Dispatch<React.SetStateAction<boolean>>


    showModal: boolean;
    modalType: ModalType | null;
    modalArgs: any[];
    openModal: (type: ModalType, ...args: any[]) => void;
    closeModal: () => void;
    children: React.ReactNode;
}

export const AppContext = React.createContext<AppContextProps>({} as AppContextProps);

export const useAppContext = () => useContext<AppContextProps>(AppContext);

const AppProvider: React.FC<AppContextProps> = ({ children }) => {

    const [content, setContent] = useState<Content>({
        items: [],
    });
    const [showModal, setShowModal] = useState<boolean>(false);
    const [modalType, setModalType] = useState<ModalType | null>(null)
    const [modalArgs, setModalArgs] = useState<any[]>([])



    const [modalSelectedItem, setModalSelectedItem] = useState<any>(null)




    const openModal = (type: ModalType, ...args: any[]) => {
        setModalType(type)
        setModalArgs(args)
        setShowModal(true)
    }

    const closeModal = () => {
        setShowModal(false)
    }

    const contextValue: AppContextProps = {
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
    }

    return (
        <AppContext.Provider
            value={contextValue}
        >
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;
