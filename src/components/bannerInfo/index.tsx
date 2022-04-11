import { BadgeItems, Container, IconCart, InfoPurchase} from "./styles";
import { BsCart3 } from 'react-icons/bs'
export function BannerInfo() {
    return (
        <Container>
            <span>Your next purchase:</span>
            <InfoPurchase>
                <div>
                    <h4>Title of the purchase</h4>
                    <p>supermarket name</p>
                </div>
                <IconCart>
                    <BsCart3 />
                    <BadgeItems>{10}</BadgeItems>
                </IconCart>
            </InfoPurchase>
        </Container>
    )

}