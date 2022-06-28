/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../../Components/Modal";
import TechItem from "../../Components/TechItem";
import { api } from "../../data/api";
import {
    CenteredContent,
    StyledHeader,
    Horizontal,
    Welcome,
    TechContainer,
} from "./style";

function Home({ userData, setUserData }) {
    const [currentSkillLevel, setCurrentSkillLevel] = useState(0);
    const [currentTechName, setCurrentTechName] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentItem, setCurrentItem] = useState({});
    const [modalTitle, setModalTitle] = useState("");

    const closeModal = () => {
        setIsModalOpen(false);
        setCurrentTechName("");
        setCurrentSkillLevel(0);
    };

    const openModal = (title, item) => {
        setIsModalOpen(true);
        setModalTitle(title);
        setCurrentTechName(item !== undefined ? item.title : "");
        setCurrentSkillLevel(item !== undefined ? item.status : "Iniciante");
        setCurrentItem(
            item !== undefined ? item : { title: "", status: "Iniciante" }
        );
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
                <h2>Olá, {userData.user.name}</h2>
                <h3>{userData.user.course_module}</h3>
            </Welcome>
            <Horizontal />
            <StyledHeader>
                <h3>Tecnologias</h3>
                <button
                    className="new-tech"
                    onClick={() => {
                        openModal("Cadastrar Tecnologia", undefined);
                    }}
                >
                    +
                </button>
            </StyledHeader>
            <TechContainer techLength={userData.user.techs.length}>
                {userData.user.techs.map((item) => {
                    return (
                        <TechItem
                            key={item.id}
                            item={item}
                            openModal={openModal}
                            setCurrentItem={setCurrentItem}
                        />
                    );
                })}
                {userData.user.techs.length < 1 ? (
                    <p>Nenhuma tecnologia cadastrada</p>
                ) : (
                    ""
                )}
            </TechContainer>
            {isModalOpen && (
                <Modal
                    title={modalTitle}
                    item={currentItem}
                    closeModal={closeModal}
                />
            )}
        </CenteredContent>
    );
}

export default Home;
