import { Container, Icon } from "./styles";
import { BsFillCalendarCheckFill } from 'react-icons/bs'

export function LastPurchaseBanner() {
    return (
        <Container>
            <div>
                <p>Your last purchase:</p>
                <Icon>
                    < BsFillCalendarCheckFill />
                    <time>11/04</time>
                </Icon>
            </div>
            <div>
                <span>R$104,00</span>
            </div>
        </Container>
    )
}