import { useState } from "react";
import { Container, ContainerHeader, ContainerList } from "./styles";
import { IoMdArrowBack } from 'react-icons/io'
import { Link } from "react-router-dom";
import { List } from "../../components/list";


export function AddPurchase() {
    const [ item, setItem ] = useState<string>('')
    const [ listItems, setListItems ] = useState<string[]>([])

    const isListEmpty = listItems.length === 0

    const transformCapitalLetter = (content: string) => {
        let arrContent = [...content]
        const firstLetter = arrContent[0].toUpperCase()
        arrContent.shift()

        return firstLetter + arrContent.join('')

    }

    const insertItems = (item: string) => {
        const isEmpty = item == ''
        const hasOnlyWhiteSpace = item.trim() == ''

        if(!isEmpty && !hasOnlyWhiteSpace) {
            const itemTransform = transformCapitalLetter(item.trim())

            setListItems([...listItems, itemTransform])
        }
    }

    const removeItem = (itemToRemove: string) => {
        const newArrList = listItems.filter(item => {
            return item !== itemToRemove
        })

        setListItems(newArrList)
    }

    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault()
        insertItems(item)
        
        setItem('')
    }

    return (
        <Container>
            <ContainerHeader>
                <Link to="/">
                    < IoMdArrowBack />
                </Link>
                <p>Items: <span>{listItems.length}</span></p>
                <form onSubmit={e => handleSubmit(e)}>
                    <input type="text" onChange={(event) => setItem(event.target.value)} placeholder="Adicione itens à sua lista..." value={item}/>
                    <button onClick={(event) => handleSubmit(event)}type="submit">Add</button>
                </form>
            </ContainerHeader>
            <ContainerList>
                <div>
                    { listItems.map((item, index) => <List key={`${item}-${index}`} funcDelete={removeItem} content={item} />) }
                   { !isListEmpty && <footer>
                        <button onClick={() => console.log} >Salvar compra</button>
                    </footer>}
                </div>
            </ContainerList>
        </Container>
    )
}