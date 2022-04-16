
import {  Button, Container, ContainerButton, IconButton } from "./styles";
import { BsPlus } from 'react-icons/bs'
import { VscHistory } from 'react-icons/vsc'

import { useContext } from "react";
import { Link } from "react-router-dom";
import { BannerInfo } from "../../components/bannerInfo";
import { AddPurchaseContext } from "../../components/context/AddPurchaseContext";
import { LastPurchaseBanner } from "../../components/lastPurchaseDone";

export function Home() {
    const { handleAddPopup } = useContext(AddPurchaseContext)
    
    return (
        <Container>
            <BannerInfo />
            <ContainerButton>
                <Link to="AddPurchase">
                    <Button 
                        path={"/assets/cart1.png"}
                        position={"right center"}
                        percent={40}
                    // onClick={handleAddPopup}
                    >


                        <IconButton>
                            <BsPlus />
                        </IconButton>
                        <span>Add new purchase</span>
                    </Button>
                </Link>
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