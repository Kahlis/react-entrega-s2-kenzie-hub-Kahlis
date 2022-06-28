import React from "react";
import { ModalBackground, StyledModal } from "./style";
import { useForm } from "react-hook-form";

function Modal({ title, name, skill, closeModal }) {
    const { register, handleSubmit, setValue } = useForm();
    const submitEnter = (data) => {
        console.log(data);
    };

    return (
        <>
            <ModalBackground
                onClick={() => {
                    closeModal();
                }}
            />
            <StyledModal name={name}>
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
                    <input type="text" {...register("name")} value={name} />
                    <label>Selecionar status</label>
                    <select
                        value={skill}
                        onChange={(e) =>
                            setValue("select", e.target.value, {
                                shouldValidate: true,
                            })
                        }
                        {...register("skillLevel")}
                    >
                        <option value={0}>Iniciante</option>
                        <option value={1}>Intermediário</option>
                        <option value={2}>Avançado</option>
                    </select>
                    <div className="action">
                        <button className="submit">
                            {name !== ""
                                ? "Salvar alterações"
                                : "Cadastrar Tecnologia"}
                        </button>
                        <button className="delete">Excluir</button>
                    </div>
                </form>
            </StyledModal>
        </>
    );
}

export default Modal;
