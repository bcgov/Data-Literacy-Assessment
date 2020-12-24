import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { getMarkdown, getUUID } from './helpers';
import Header from './components/Header';
import Survey from './components/Survey';
import Persona from './components/Persona';
import Footer from './components/Footer';
import styles from './Home.module.css';
import bg from './content/images/bg.png';

export default function Home(props) {

    const [startedSurvey, startSurvey] = useState(false);
    const [surveyResults, setSurveyResults] = useState(null);

    const [howDataLiterate, setHowDataLiterate] = useState(null);
    const [purpose, setPurpose] = useState(null);
    const [whoShouldUse, setWhoShouldUse] = useState(null);

    useEffect(() => {
        getMarkdown(props.markdown.HowDataLiterateAreYou, setHowDataLiterate);
        getMarkdown(props.markdown.Purpose, setPurpose);
        getMarkdown(props.markdown.WhoShouldUseThisTool, setWhoShouldUse);
        getUUID();
    },[props.markdown.HowDataLiterateAreYou, props.markdown.Purpose, props.markdown.WhoShouldUseThisTool]);

    return (
        <div className={styles.home} style={{backgroundImage: `url(${bg})`}}>
            <Header/>
            {!surveyResults &&
                <React.Fragment>
                    {!startedSurvey &&
                        <div className={styles.contentContainer}>
                            <h1>{props.t["Data Literacy Self-Assessment Tool"]}</h1>
                            <div className={styles.introContent}>
                                <div>
                                    <h2>{props.t["How Data Literate Are You?"]}</h2>
                                    <ReactMarkdown source={howDataLiterate}/>
                                </div>
                                <div>
                                    <h2>{props.t["Purpose"]}</h2>
                                    <ReactMarkdown source={purpose}/>
                                </div>
                                <div>
                                    <h2>{props.t["Who Should Use this Tool"]}</h2>
                                    <ReactMarkdown source={whoShouldUse}/>
                                    <button onClick={() => startSurvey(true)}>{props.t["Start Assessment"]}</button>
                                </div>
                            </div>
                        </div>
                    }
                    {startedSurvey &&
                        <Survey t={props.t} setSurveyResults={setSurveyResults} startSurvey={startSurvey}/>
                    }
                </React.Fragment>
            }
            {surveyResults &&
                <Persona t={props.t} surveyResults={surveyResults} markdown={props.markdown}/>
            }
            <Footer/>
        </div>
    );
}
