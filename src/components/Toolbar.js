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
        window.location.pathname = props.t.getOppositeLocale !== "en" ? `/bc-data-literacy-self-assessment/${props.t.getOppositeLocale}` : "/bc-data-literacy-self-assessment";
    }

    return (
        <a className={styles.toolBar} onClick={switchLang}>{props.t.getOppositeLocale.toUpperCase()}</a>       
    );
}
