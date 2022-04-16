import { BadgeItems, IconCart } from "./styles";
import { BsCart3 } from 'react-icons/bs'

interface CartProps {
    quantity: number
}


export function CartUI({ quantity }: CartProps) {
    return (
        <IconCart>
            <BadgeItems>{ quantity }</BadgeItems>
            <BsCart3 />
        </IconCart>
    )
}