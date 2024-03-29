import React from "react";
import { ModalBackground, StyledModal } from "./style";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { api } from "../../data/api";

function Modal({ title, item, closeModal, user, loadTechs }) {
    const { register, handleSubmit, setValue } = useForm();

    const deleteItem = () => {
        api.delete(`/users/techs/${item.id}/`, {
            headers: { authorization: `Bearer ${user.token}` },
        })
            .then(function (response) {
                loadTechs();
                closeModal("Tecnologia deletada com sucesso", "success");
            })
            .catch(function (error) {
                toast(error.response.data.message, {
                    position: "bottom-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined,
                    theme: "dark",
                    type: "error",
                });
            });
    };

    const submitEnter = (data) => {
        if (item.title !== "") {
            api.put(
                `/users/techs/${item.id}/`,
                {
                    status: data.status,
                },
                {
                    headers: { authorization: `Bearer ${user.token}` },
                }
            )
                .then(function (response) {
                    closeModal("Alteração feita com sucesso", "success");
                    closeModal();
                })
                .catch(function (error) {
                    toast(error.response.data.message, {
                        position: "bottom-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: false,
                        progress: undefined,
                        theme: "dark",
                        type: "error",
                    });
                });
        } else {
            api.post(`/users/techs/`, data, {
                headers: { authorization: `Bearer ${user.token}` },
            })
                .then(function (response) {
                    closeModal("Tecnologia adicionada com sucesso", "success");
                })
                .catch(function (error) {
                    toast(error.response.data.message, {
                        position: "bottom-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: false,
                        progress: undefined,
                        theme: "dark",
                        type: "error",
                    });
                });
        }
    };

    return (
        <>
            <ModalBackground
                onClick={() => {
                    closeModal();
                }}
            />
            <StyledModal name={item.title}>
                <header>
                    <span className="title">{title}</span>
                    <button
                        onClick={() => {
                            closeModal();
                        }}
                    >
                        X
                    </button>
                </header>
                <form onSubmit={handleSubmit(submitEnter)}>
                    <label>Nome</label>
                    <input
                        type="text"
                        {...register("title")}
                        defaultValue={item.title}
                        disabled={item.title !== "" ? true : false}
                        className={item.title !== "" ? "disabled" : ""}
                    />
                    <label>Selecionar status</label>
                    <select
                        defaultValue={item.status}
                        onChange={(e) =>
                            setValue("select", e.target.value, {
                                shouldValidate: true,
                            })
                        }
                        {...register("status")}
                    >
                        <option value={"Iniciante"}>Iniciante</option>
                        <option value={"Intermediário"}>Intermediário</option>
                        <option value={"Avançado"}>Avançado</option>
                    </select>
                    <div className="action">
                        <button className="submit">
                            {item.title !== ""
                                ? "Salvar alterações"
                                : "Cadastrar Tecnologia"}
                        </button>
                        <button
                            className="delete"
                            type="button"
                            onClick={() => {
                                deleteItem();
                            }}
                        >
                            Excluir
                        </button>
                    </div>
                </form>
            </StyledModal>
            <ToastContainer />
        </>
    );
}

export default Modal;
