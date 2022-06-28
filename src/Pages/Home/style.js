import styled from "styled-components";
export const CenteredContent = styled.div`
    padding: 20px 20px 0 20px;
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const StyledHeader = styled.div`
    padding: 20px 0;
    display: flex;
    width: 90vw;
    max-width: 625px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    h1 {
        color: #ff577f;
        font-size: 23px;
    }

    h3 {
        font-family: "Inter";
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 18px;
        /* identical to box height, or 112% */

        /* grey-0 */

        color: #f8f9fa;
    }

    .new-tech {
        font-family: "Inter";
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 28px;

        text-align: center;
        color: #f8f9fa;

        width: 35px;
        height: 35px;

        background: #212529;
        border-radius: 4px;
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

export const Horizontal = styled.hr`
    width: 100vw;
    height: 1px;
    background-color: #212529;
    border: none;
`;

export const Welcome = styled.div`
    padding: 25px 15px;
    width: 100vw;
    max-width: 625px;
    height: auto;

    h2 {
        font-family: "Inter";
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 28px;

        color: #f8f9fa;
    }

    h3 {
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 22px;

        color: #868e96;
    }
`;

export const TechContainer = styled.ul`
    display: flex;
    flex-direction: column;
    padding: 8px;
    width: 105%;
    height: 54vh;
    max-width: 625px;
    overflow-y: auto;
    background: #212529;
    gap: 7px;

    ${(props) =>
        props.techLength < 1
            ? "justify-content: center; align-items: center;"
            : ""}

    p {
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 16px;
        text-align: center;
        color: #f8f9fa;
    }
`;
