import styled from "styled-components";

export const CenteredContent = styled.div`
    padding: 20px;
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .header {
        display: flex;
        width: 90vw;
        max-width: 325px;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    h1 {
        color: #ff577f;
        font-size: 23px;
    }

    h2 {
        margin: 5px auto 25px auto;
        font-family: "Inter";
        font-style: normal;
        font-weight: 700;
        font-size: 14.439px;
        line-height: 22px;

        color: #f8f9fa;
    }

    main {
        height: auto;
        width: 90vw;
        max-width: 325px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 15px;
    }

    .form {
        height: 80%;
        width: 100%;
        background-color: #212529;
        padding: 20px 13px;
        display: flex;
        flex-direction: column;
    }

    form {
        gap: 13px;
        display: flex;
        flex-direction: column;
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

    input::placeholder {
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 26px;

        color: #868e96;
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

    textarea {
        background: #343b41;
        border: 1px solid #f8f9fa;
        border-radius: 4px;
        padding: 8px;

        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 21px;

        border: none;
        outline: none;
        color: #f8f9fa;
        resize: vertical;
    }

    textarea:focus {
        outline: 2px solid #454d54;
    }

    textarea::placeholder {
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 26px;

        color: #868e96;
    }

    button {
        margin-top: 10px;
        background-color: #ff577f;
        padding: 0px 23px;

        width: 100%;
        height: 38px;

        /* color-primary */

        background: #ff577f;
        /* color-primary */

        border: 1.2182px solid #ff577f;
        border-radius: 4.06066px;

        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 12.8347px;
        line-height: 21px;

        color: #ffffff;
    }

    .no-account {
        margin: 35px auto 10px auto;

        font-family: "Inter";
        font-style: normal;
        font-weight: 600;
        font-size: 10px;
        line-height: 14px;

        color: #868e96;
    }

    .register-btn {
        background-color: #868e96;
        border: none;
    }

    .back-btn {
        font-family: "Inter";
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 28px;

        text-align: center;
        color: #f8f9fa;

        padding: 0px 16px;
        gap: 10px;

        width: 68px;
        height: 40px;

        background: #212529;
        border-radius: 4px;
        border: none;
    }
`;
