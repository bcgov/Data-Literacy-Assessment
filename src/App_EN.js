import React from 'react';
import Home from './Home';
import dictionary from './dictionaries/en';

import HowDataLiterateAreYou from './content/en/HowDataLiterateAreYou.md';
import Purpose from './content/en/Purpose.md';
import WhoShouldUseThisTool from './content/en/WhoShouldUseThisTool.md';

import AssessmentResults from './content/en/AssessmentResults.md';
import DataPersona from './content/en/DataPersona.md';
import DataLiteracyLevel from './content/en/DataLiteracyLevel.md';

import FrontLine from './content/en/personas/FrontLine.md';
import Analyst from './content/en/personas/Analyst.md';
import DataScientist from './content/en/personas/DataScientist.md';
import DataGovernor from './content/en/personas/DataGovernor.md';
import Architect from './content/en/personas/Architect.md';
import BusinessTranslator from './content/en/personas/BusinessTranslator.md';

import Foundational from './content/en/literacyLevels/Foundational.md';
import Capable from './content/en/literacyLevels/Capable.md';
import Advanced from './content/en/literacyLevels/Advanced.md';
import Leading from './content/en/literacyLevels/Leading.md';

import FoundationalCourses from './content/en/courses/FoundationalCourses.md';
import CapableCourses from './content/en/courses/CapableCourses.md';
import AdvancedCourses from './content/en/courses/AdvancedCourses.md';
import LeadingCourses from './content/en/courses/LeadingCourses.md';

export default function App_EN() {
    return (
        <Home
            t={dictionary}
            markdown={{
                HowDataLiterateAreYou,
                Purpose,
                WhoShouldUseThisTool,
                AssessmentResults,
                DataPersona,
                DataLiteracyLevel,
                personas: {
                    FrontLine,
                    Analyst,
                    DataScientist,
                    DataGovernor,
                    Architect,
                    BusinessTranslator
                },
                literacyLevels: {
                    Foundational,
                    Capable,
                    Advanced,
                    Leading
                },
                courses: {
                    FoundationalCourses,
                    CapableCourses,
                    AdvancedCourses,
                    LeadingCourses
                }
            }}
        />
    );
}
