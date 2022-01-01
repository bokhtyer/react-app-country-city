import React from 'react';
import  '../components/Preeloader.css';

export default function CustomPageLoader(props) {

    return (
        props.pageLoader ? <>
                <div className="overlayed"/>
                <div className="loader" />
            </>
            : ""
    );
}