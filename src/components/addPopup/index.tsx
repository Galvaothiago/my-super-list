import { Container, ContainerAddItem, ExitButton, Modal } from "./styles";
import { IoClose } from 'react-icons/io5'
import { useContext, useState } from "react";
import { AddPurchaseContext } from "../context/AddPurchaseContext";

import { Form } from 'react-bootstrap'

export function AddPopup() {
    const  { handleAddPopup } = useContext(AddPurchaseContext)
    const [ isChecked, setIsChecked ] = useState<boolean>(false)

    console.log(isChecked)
    return (
        <Container>
            <Modal>
                <ExitButton>
                    <div onClick={handleAddPopup}>
                        <IoClose />
                    </div>
                </ExitButton>
                <Form>
                    <Form.Group className="mb-3" controlId="tituloIdForm">
                        <Form.Label>Título</Form.Label>
                        <Form.Control size="lg" type="text" placeholder="Dê um titulo para sua compra..." />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="tituloIdForm">
                        <Form.Label>Mercado</Form.Label>
                        { isChecked ?
                                <Form.Control disabled size="lg" type="text" placeholder="Nome do mercado..." /> : 
                                <Form.Control size="lg" type="text" placeholder="Nome do mercado..." /> }
                        <Form.Check 
                            type="checkbox"
                            id="check-1"
                            label="ainda não sei"
                            onChange={() => setIsChecked(oldState => !oldState)}
                        />
                    </Form.Group>
                </Form>

                <ContainerAddItem>
                    
                </ContainerAddItem>
            </Modal>
        </Container>
    )
}