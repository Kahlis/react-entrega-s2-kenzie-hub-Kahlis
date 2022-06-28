import React from "react";
import { skills } from "../../data/skills";
import { Item } from "./style";

function TechItem({ item, openModal, setCurrentItem }) {
    return (
        <Item
            onClick={() => {
                openModal("Tecnologia Detalhes", item);
                setCurrentItem(item);
            }}
        >
            <h2>{item.title}</h2>
            <h3>{item.status}</h3>
        </Item>
    );
}

export default TechItem;
