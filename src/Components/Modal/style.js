import styled from "styled-components";

export const ModalBackground = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: black;
    opacity: 0.7;
    z-index: 1000;
    position: absolute;
`;

export const StyledModal = styled.div`
    width: 90vw;
    display: flex;
    flex-direction: column;
    position: absolute;
    z-index: 10000;

    header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 0 auto;
        padding: 15px;
        width: 100%;
        height: 48px;

        background: #343b41;
        border-radius: 6px 6px 0px 0px;
    }

    header button {
        font-family: "Nunito";
        font-style: normal;
        font-weight: 600;
        font-size: 13px;
        line-height: 21px;

        color: #868e96;
        background-color: transparent;
        border: none;
    }

    .title {
        font-family: "Inter";
        font-style: normal;
        font-weight: 700;
        font-size: 11px;
        line-height: 19px;

        color: #f8f9fa;
    }

    form {
        display: flex;
        flex-direction: column;
        padding: 15px 15px 20px 15px;
        width: 90vw;
        height: auto;
        background-color: #212529;
        gap: 10px;
    }

    label {
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 11px;

        color: #f8f9fa;
    }

    input {
        height: 42px;
        padding: 8px;
        gap: 8px;
        background: #343b41;
        border: 1px solid #f8f9fa;
        border-radius: 4px;

        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 21px;

        border: none;
        outline: none;
        color: #f8f9fa;
    }

    input:focus {
        outline: 2px solid #454d54;
    }

    select {
        height: 42px;
        padding: 8px;
        gap: 8px;
        background: #343b41;
        border-radius: 4px;

        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 21px;

        border: none;
        outline: none;

        color: #f8f9fa;
    }

    .action {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 10px;
    }

    .submit {
        margin-top: 25px;
        background-color: #ff577f;

        width: ${(props) => (props.name !== "" ? "60%" : "100%")};
        height: 38px;

        background: #ff577f;
        border: 2px solid #ff577f;
        border-radius: 4px;

        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 21px;

        color: #ffffff;
    }

    .delete {
        display: ${(props) => (props.name !== "" ? "inline-block" : "none")};
        margin-top: 25px;
        background-color: #ff577f;

        width: 35%;
        height: 38px;

        /* color-primary */

        background: #868e96;
        /* color-primary */

        border: 1px solid #868e96;
        border-radius: 4px;

        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 13px;
        line-height: 21px;

        color: #ffffff;
    }
`;
