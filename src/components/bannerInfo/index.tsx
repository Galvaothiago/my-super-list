import { Container, InfoPurchase} from "./styles";

import { CartUI } from "../cartUI";
export function BannerInfo() {
    return (
        <Container>
            <span>Your next purchase:</span>
            <InfoPurchase>
                <div>
                    <h4>Title of the purchase</h4>
                    <p>supermarket name</p>
                </div>
                <CartUI quantity={4} />
            </InfoPurchase>
        </Container>
    )

}