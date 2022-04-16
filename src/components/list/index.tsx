import { Container } from "./styles";
import { VscTrash } from 'react-icons/vsc'
import { useEffect, useState } from "react";

interface ListProps {
    id?: number,
    content: string,
    funcDelete: (item: string) => void
}

const colors = [
    '#14213d',
    '#fca311',
    '#1985a1',
    '#bfdbf7',
    '#ba181b'
]

export function List({content, id, funcDelete }: ListProps) {
    const [ color, setColor ] = useState<string>(colors[0])

    const chooseRandoColor = (arrColors: string[]) => {
        const random = Math.round(Math.random() * (arrColors.length - 1))
        
        return colors[random]
    }

    useEffect(() => {
        const color = chooseRandoColor(colors)
        setColor(color)
    }, [])

    return (
        <Container bg={color}>
            <span>{id}</span>
            <p>{content}</p>
            < VscTrash onClick={() => funcDelete(content)}/>
        </Container>
    )
}