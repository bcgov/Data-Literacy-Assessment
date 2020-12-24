import React from 'react';
import styles from './Toolbar.module.css';

export default function Toolbar(props) {

    function switchLang() {
        if (props.startedSurvey){
            if (window.confirm(props.t.getSwitchLangWarning)){
                switchLangPathname();
            }
        }
        else {
            switchLangPathname();
        }
    }

    function switchLangPathname() {
        window.location.pathname = props.t.getOppositeLocale !== "en" ? `/Data-Literacy-Assessment/${props.t.getOppositeLocale}` : "/Data-Literacy-Assessment";
    }

    return (
        <a className={styles.toolBar} onClick={switchLang}>{props.t.getOppositeLocale.toUpperCase()}</a>       
    );
}
