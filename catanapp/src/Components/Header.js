import React from 'react'

const headerStyle    = { 
    background: "#2a748c",
    color: "#c2e6f2",
    textAlign: "center",
    padding: 15    
};

export default function Header() {
    return (
        <header style={headerStyle} >
            <h1>Catan Event Generator</h1>
        </header>
    )
}
