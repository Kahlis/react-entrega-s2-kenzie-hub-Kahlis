import React from "react";
import { skills } from "../../database/skills";
import { Item } from "./style";

function TechItem({ techName, skillLevel, openModal }) {
    return (
        <Item
            onClick={() => {
                openModal("Tecnologia Detalhes", techName, skillLevel);
            }}
        >
            <h2>{techName}</h2>
            <h3>{skills[skillLevel]}</h3>
        </Item>
    );
}

export default TechItem;
