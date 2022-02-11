import React, { useEffect, useState } from 'react';

import {useWindowScroll} from "react-use";

const Scrolltop = () => {

    const {y: pageYOffset} = useWindowScroll()
    const [visible, setVisiblity] = useState(false)
    useEffect(() => {
        if(pageYOffset > 400) {
            setVisiblity(true)
        }else{
            setVisiblity(false)
        }
    }, [pageYOffset])
    const scrolltoTop  = () => window.scrollTo({top: 0, behavior: "smooth"})
    if(!visible){
        return false
    }
    return (
        <div className="Scroll__TOP" onClick={scrolltoTop}>
            <i className="fas fa-arrow-up"></i>
        </div>
    );
}

export default Scrolltop;
