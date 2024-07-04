import React from "react";

export function CardRow ({ children }) {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-4">{children}</div>
    );    

};