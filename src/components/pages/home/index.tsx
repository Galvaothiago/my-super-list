import { BannerInfo } from "../../bannerInfo";
import {  Button, Container, ContainerButton, IconButton } from "./styles";
import { BsPlus } from 'react-icons/bs'
import { VscHistory } from 'react-icons/vsc'
import { LastPurchaseBanner } from "../../lastPurchaseDone";

export function Home() {
    return (
        <Container>
            <BannerInfo />
            <ContainerButton>
                <Button 
                    path={"/assets/cart1.png"}
                    position={"right center"}
                    percent={40}
                >
                    <IconButton>
                        <BsPlus />
                    </IconButton>
                    <span>Add new purchase</span>
                </Button>
                <Button
                    path={"/assets/cart2.png"}
                    position={"left center"}
                    percent={35}
                >
                    <IconButton>
                        < VscHistory />
                    </IconButton>
                    <span>All my purchases</span>
                </Button>
            </ContainerButton>
            <LastPurchaseBanner />
        </Container>
    )
}