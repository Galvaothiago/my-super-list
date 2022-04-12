import { createContext, ReactNode, useState } from "react";
import { AddPopup } from "../addPopup";

interface AddPurchaseProp {
    showPopup: boolean,
    handleAddPopup: () => void
}
interface ChildrenProp {
    children: ReactNode
} 

export const AddPurchaseContext = createContext({} as AddPurchaseProp)

export function AddPurchaseProvide({ children }: ChildrenProp) {
    const [ showPopup, setShowPopup ] = useState<boolean>(false);

    const handleAddPopup = () => {
        setShowPopup(oldState => !oldState)
    }
    return (
        <AddPurchaseContext.Provider
            value={{
                showPopup,
                handleAddPopup
            }}
        >
            { children }
            { showPopup && <AddPopup />}
        </AddPurchaseContext.Provider>
    )
}