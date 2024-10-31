import { memo } from "react";
import Header from "../header";
import Footer from '../footer';
import { useState } from "react";
import Login from "../../Login";

const MasterLayout = ({children,...props}) => {
    const [isLogInFormOpen, setLogInFormOpen] = useState(false);

    const openLogin = () => {
        if (!isLogInFormOpen) setLogInFormOpen(true);
    };

    const closeLogin = () => {
        if (isLogInFormOpen) setLogInFormOpen(false);
    };

    return (
    <div {...props}>
    <Header openLogin={openLogin}/>
    {children}
    <Footer/>
    <Login isOpen={isLogInFormOpen} onclose={closeLogin}/>
    </div>
    )
}

export default memo(MasterLayout);