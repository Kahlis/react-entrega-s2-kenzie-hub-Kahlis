/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../../Components/Modal";
import TechItem from "../../Components/TechItem";
import { api } from "../../data/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
    CenteredContent,
    StyledHeader,
    Horizontal,
    Welcome,
    TechContainer,
} from "./style";

function Home({ userData, setUserData }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentItem, setCurrentItem] = useState({});
    const [modalTitle, setModalTitle] = useState("");
    const [techs, setTechs] = useState([]);

    const closeModal = (title = "", type = "") => {
        setIsModalOpen(false);
        if (title !== "" && type !== "") {
            toast(title, {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: "dark",
                type: type,
            });
        }
    };

    const user = JSON.parse(localStorage.getItem("userData"));

    const loadTechs = () => {
        api.get(`/users/${user.user.id}`).then(function (response) {
            setTechs(response.data.techs);
        });
    };

    useEffect(() => {
        loadTechs();
    }, [techs]);

    // useEffect(() => {
    //     setTechs(user.user.techs);
    // }, []);

    const openModal = (title, item) => {
        setIsModalOpen(true);
        setModalTitle(title);
        setCurrentItem(
            item !== undefined ? item : { title: "", status: "Iniciante" }
        );
    };

    return (
        <CenteredContent>
            <StyledHeader>
                <h1>Kenzie Hub</h1>
                <Link to={"/login"}>
                    <button
                        className="back-btn"
                        onClick={() => {
                            localStorage.clear();
                        }}
                    >
                        Sair
                    </button>
                </Link>
            </StyledHeader>
            <Horizontal />
            <Welcome>
                <h2>Olá, {user.user.name}</h2>
                <h3>{user.user.course_module}</h3>
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
            <TechContainer techLength={user.user.techs.length}>
                {techs.map((item) => {
                    return (
                        <TechItem
                            key={item.id}
                            item={item}
                            openModal={openModal}
                            setCurrentItem={setCurrentItem}
                        />
                    );
                })}
                {techs.length < 1 ? <p>Nenhuma tecnologia cadastrada</p> : ""}
            </TechContainer>
            {isModalOpen && (
                <Modal
                    title={modalTitle}
                    item={currentItem}
                    closeModal={closeModal}
                    user={user}
                    loadTechs={loadTechs}
                />
            )}
            <ToastContainer />
        </CenteredContent>
    );
}

export default Home;
