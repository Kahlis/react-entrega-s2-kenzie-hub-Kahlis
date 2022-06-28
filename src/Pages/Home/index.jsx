import React, { useState } from "react";
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
    const [currentSkillLevel, setCurrentSkillLevel] = useState(0);
    const [currentTechName, setCurrentTechName] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState("");

    const closeModal = () => {
        setIsModalOpen(false);
        setCurrentTechName("");
        setCurrentSkillLevel(0);
    };

    const openModal = (title, techName, skill) => {
        setIsModalOpen(true);
        setModalTitle(title);
        setCurrentTechName(techName);
        setCurrentSkillLevel(skill);
    };

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
                <TechItem
                    techName={"React JSX"}
                    skillLevel={0}
                    openModal={openModal}
                />
                <TechItem
                    techName={"React JS"}
                    skillLevel={1}
                    openModal={openModal}
                />
                <TechItem techName={"React JS"} skillLevel={1} />
                <TechItem techName={"React JS"} skillLevel={1} />
                <TechItem techName={"React JS"} skillLevel={1} />
                <TechItem techName={"React JS"} skillLevel={1} />
                <TechItem techName={"React JS"} skillLevel={1} />
                <TechItem techName={"React JS"} skillLevel={1} />
                <TechItem techName={"React JS"} skillLevel={1} />
            </TechContainer>
            {isModalOpen && (
                <Modal
                    title={modalTitle}
                    name={currentTechName}
                    skill={currentSkillLevel}
                    closeModal={closeModal}
                />
            )}
        </CenteredContent>
    );
}

export default Home;
