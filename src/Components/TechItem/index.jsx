import React from "react";
import { Item } from "./style";

function TechItem({ techName, skillLevel }) {
    return (
        <Item>
            <h2>{techName}</h2>
            <h3>{skillLevel}</h3>
        </Item>
    );
}

export default TechItem;
