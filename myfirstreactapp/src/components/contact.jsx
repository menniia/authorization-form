import React, { useState } from "react";

const Contact = () => {
    const password = "dontTryThis";
    const [authorized, setAuthorized] = useState(false);
    
    
    const handleSubmit = e => {
        const enterPassword = e.target.querySelector("input[type='password']").value;
        const auth = enterPassword === password;
        setAuthorized(auth);
    }

    const login = (
        <form action="#" onSubmit={handleSubmit}>
            <input type="password" placeholder="Password"/>
            <input type="submit" />
        </form>
    )

    const contactIno = (
        <ul>
            <li>client@example.com</li>
            <li>555.555.5555</li>
        </ul>
    )

    return (
        <div id="authorization">
            <h1>{authorized ? "Contact" : "Enter your password"}</h1>
            {authorized ? contactIno : login}
        </div>
    )

}

export default Contact;