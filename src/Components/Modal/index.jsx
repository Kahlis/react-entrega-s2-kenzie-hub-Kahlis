import React from "react";
import { ModalBackground, StyledModal } from "./style";

function Modal() {
    return (
        <>
            <ModalBackground />
            <StyledModal>
                s
                <header>
                    <span className="title">Cadastrar Tecnologia</span>
                    <button>X</button>
                </header>
                <form>
                    <label>Nome</label>
                    <input type="text" />
                    <label>Selecionar status</label>
                    <select>
                        <option>Iniciante</option>
                        <option>Intermediário</option>
                        <option>Avançado</option>
                    </select>
                    <button className="submit">Cadastrar Tecnologia</button>
                </form>
            </StyledModal>
        </>
    );
}

export default Modal;
