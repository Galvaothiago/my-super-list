import { Container, Menu, Text } from './styles'
import { HiOutlineMenuAlt1 } from 'react-icons/hi'
import { ProfilePhoto } from '../profilePhoto'
export function Header() {
    return (
        <Container>
            <Menu>
                < HiOutlineMenuAlt1 />
            </Menu>
            <Text>Hey, Thiago G.</Text>
            <ProfilePhoto />
        </Container>
    )
}