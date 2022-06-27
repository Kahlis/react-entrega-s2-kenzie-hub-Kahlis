import React from "react";
import { Link } from "react-router-dom";
import Modal from "../../Components/Modal";
import TechItem from "../../Components/TechItem";
import {
    CenteredContent,
    StyledHeader,
    Horizontal,
    Welcome,
    TechContainer,
} from "./style";

function Home() {
    return (
        <CenteredContent>
            <StyledHeader>
                <h1>Kenzie Hub</h1>
                <Link to={"/login"}>
                    <button className="back-btn">Sair</button>
                </Link>
            </StyledHeader>
            <Horizontal />
            <Welcome>
                <h2>Olá, Matheus Arruda</h2>
                <h3>Terceiro módulo (React)</h3>
            </Welcome>
            <Horizontal />
            <StyledHeader>
                <h3>Tecnologias</h3>
                <Link to={"/login"}>
                    <button className="new-tech">+</button>
                </Link>
            </StyledHeader>
            <TechContainer>
                <TechItem techName={"React JS"} skillLevel={"Intermediário"} />
                <TechItem techName={"React JS"} skillLevel={"Intermediário"} />
                <TechItem techName={"React JS"} skillLevel={"Intermediário"} />
                <TechItem techName={"React JS"} skillLevel={"Intermediário"} />
                <TechItem techName={"React JS"} skillLevel={"Intermediário"} />
                <TechItem techName={"React JS"} skillLevel={"Intermediário"} />
                <TechItem techName={"React JS"} skillLevel={"Intermediário"} />
                <TechItem techName={"React JS"} skillLevel={"Intermediário"} />
                <TechItem techName={"React JS"} skillLevel={"Intermediário"} />
            </TechContainer>
            {/*<Modal />*/}
        </CenteredContent>
    );
}

export default Home;
