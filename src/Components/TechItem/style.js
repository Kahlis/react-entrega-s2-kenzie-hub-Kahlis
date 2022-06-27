import styled from "styled-components";

export const Item = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
    align-items: center;
    width: 100%;
    min-height: 53px;
    background-color: #121214;

    h2 {
        font-family: "Inter";
        font-style: normal;
        font-weight: 700;
        font-size: 14.2123px;
        line-height: 24px;

        color: #f8f9fa;
    }

    h3 {
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 12.182px;
        line-height: 22px;
        text-align: right;

        color: #868e96;
    }
`;
