import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to="/dialogs/1">Sanya</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/2">Vlad</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/3">Sergey</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>im crying rn</div>
                <div className={s.message}>hahaha</div>
            </div>
        </div>
    );
};

export default Dialogs;