import { memo } from "react";
import Header from "../header";
import Footer from '../footer';

const masterLayout = ({children, isLoggedIn, ...props}) => {
    return (
    <div {...props}>
    <Header isLoggedIn = {isLoggedIn} />
    {children}
    <Footer/>
    </div>
    )
}

export default memo(masterLayout);