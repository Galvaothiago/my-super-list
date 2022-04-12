import { Container, ExitButton, Modal, Title } from "./styles";
import { IoClose } from 'react-icons/io5'
import { useContext } from "react";
import { AddPurchaseContext } from "../context/AddPurchaseContext";
export function AddPopup() {
    const  { handleAddPopup } = useContext(AddPurchaseContext)
    return (
        <Container>
            <Modal>
                <ExitButton>
                    <div onClick={handleAddPopup}>
                        <IoClose />
                    </div>
                </ExitButton>
                <Title>
                    <span>Add purchase</span>
                </Title>
            </Modal>
        </Container>
    )
}