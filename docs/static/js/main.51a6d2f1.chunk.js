(this["webpackJsonpbc-data-literacy-self-assessment"]=this["webpackJsonpbc-data-literacy-self-assessment"]||[]).push([[0],{12:function(e,t,a){e.exports={container:"Survey_container__2evTy",survey:"Survey_survey__1mvDL",restartButton:"Survey_restartButton__5nfCE",decoration:"Survey_decoration__3-shX"}},13:function(e,t,a){e.exports={home:"Home_home__2-H-W",contentContainer:"Home_contentContainer__gssob",introContent:"Home_introContent__3sNMF"}},153:function(e,t,a){},157:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(29),i=a.n(o),r=(a(67),a(1)),l=a(3),u=a.n(l),c=a(7),d=a.n(c),m=a(11),p=a(159);function f(e,t){return h.apply(this,arguments)}function h(){return(h=Object(m.a)(d.a.mark((function e(t,a){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return t=e.sent,e.next=5,t.text();case 5:t=e.sent,a(t);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e){return s.a.createElement("a",{href:e.href,target:"_blank"},e.children)}function v(){if(localStorage){if(localStorage.uuid)return localStorage.uuid;var e=Object(p.a)();return localStorage.uuid=e,e}return Object(p.a)()}var b="rgb(63, 42, 86)",y="rgb(78, 91, 115)",x=a(30),w=a.n(x),_=a(31),k=a.n(_),E=a(32),S=a.n(E);function I(e){return s.a.createElement("div",{className:S.a.header},s.a.createElement("img",{src:w.a,alt:""}),s.a.createElement("img",{src:k.a,alt:""}))}var j=a(8),D=a(33),A=(a(153),a(154),a(12)),L=a.n(A);function O(e){Object(n.useEffect)((function(){var t=document.createElement("button");t.innerHTML=e.t.Restart,t.onclick=o,t.className=L.a.restartButton+" light",document.querySelector(".sv_nav").appendChild(t)}),[]);var t=j.StylesManager.ThemeColors.default;t["$main-color"]=y,t["$main-hover-color"]=b,t["$text-color"]="black",t["$body-container-background-color"]="white",j.StylesManager.applyTheme();var a=new j.Model(D);function o(){e.startSurvey(!1)}function i(){return(i=Object(m.a)(d.a.mark((function t(a){var n,s,o;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setSurveyResults(a.data),(n=new URLSearchParams).append("results",JSON.stringify(a.data)),n.append("uuid",v()),s={method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:n},t.next=7,fetch("https://us-central1-data-literacy-assessment.cloudfunctions.net/storeResults",s);case 7:return o=t.sent,t.next=10,o.text();case 10:o=t.sent,console.log(o);case 12:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return a.locale=e.t.getLocale,s.a.createElement("div",{className:L.a.container},s.a.createElement("div",{className:L.a.survey},s.a.createElement(j.Survey,{model:a,onComplete:function(e){return i.apply(this,arguments)}})))}var C=a(61),P=a(34),R=a.n(P),T=a(35),N=a(36),q=a(4),W=a.n(q);function F(e){var t=Object(n.useState)(null),a=Object(r.a)(t,2),o=a[0],i=a[1],l=Object(n.useState)(null),c=Object(r.a)(l,2),d=c[0],m=c[1],p=Object(n.useState)(null),h=Object(r.a)(p,2),v=h[0],b=h[1],y=Object(n.useState)(null),x=Object(r.a)(y,2),w=x[0],_=x[1],k=Object(n.useState)(null),E=Object(r.a)(k,2),S=E[0],I=E[1],j=Object(n.useState)(null),D=Object(r.a)(j,2),A=D[0],L=D[1],O=Object(n.useState)(null),P=Object(r.a)(O,2),q=P[0],F=P[1],z=Object(n.useState)(null),H=Object(r.a)(z,2),B=H[0],Y=H[1];return Object(n.useEffect)((function(){e.surveyResults&&(function(){var t;T.forEach((function(a){var n=0,s=0;for(var o in a.skills)a.skills[o].includes(e.surveyResults[o])&&s++,n++;var i=s/n;(!t||i>t.personaPercentage)&&(t=Object(C.a)({personaPercentage:i},a))})),i(t),f(e.markdown.personas[t.title.replace(/\s/g,"")],L)}(),function(){var t=0;for(var a in e.surveyResults)"number"===typeof e.surveyResults[a]&&(t+=e.surveyResults[a]);var n=N.find((function(e){if(t>=e.score.min&&t<=e.score.max)return!0}));m(n),f(e.markdown.literacyLevels[n.title.replace(/\s/g,"")],F),f(e.markdown.courses[n.title.replace(/\s/g,"")+"Courses"],Y)}()),f(e.markdown.AssessmentResults,b),f(e.markdown.DataPersona,_),f(e.markdown.DataLiteracyLevel,I)}),[e.surveyResults]),s.a.createElement("div",{className:W.a.resultsPage},s.a.createElement("h1",{className:W.a.title},e.t["Assessment results"]),s.a.createElement(u.a,{source:v}),s.a.createElement("button",{className:W.a.saveAsPDF+" light",onClick:function(){var t=document.getElementById("root"),a={filename:e.t["Data Literacy and Persona Assessment"]+".pdf",image:{type:"jpeg",quality:.98},pagebreak:{mode:"avoid-all"}};R()().set(a).from(t).save()}},s.a.createElement("i",{className:"material-icons"},"cloud_download")," ",e.t["Download as pdf"]),o&&d&&s.a.createElement(s.a.Fragment,null,s.a.createElement("h2",{className:W.a.resultTypeHeading},"1. ",e.t["Data Persona"]),s.a.createElement("div",{className:W.a.resultBox},s.a.createElement("div",{className:W.a.emoji},o.emoji),s.a.createElement("div",null,s.a.createElement("h3",null,e.t[o.title].toUpperCase()),s.a.createElement(u.a,{source:A}))),s.a.createElement(u.a,{source:w}),s.a.createElement("h2",{className:W.a.resultTypeHeading},"2. ",e.t["Data Literacy Level"]),s.a.createElement("div",{className:W.a.resultBox},s.a.createElement("div",{className:W.a.emoji},d.emoji),s.a.createElement("div",null,s.a.createElement("h3",null,e.t[d.title].toUpperCase()),s.a.createElement(u.a,{source:q}))),s.a.createElement(u.a,{source:S}),s.a.createElement("h2",{className:W.a.resultTypeHeading},"3. ",e.t["Proposed Curriculum"]),s.a.createElement(u.a,{source:B,renderers:{link:g}})))}var z=a(37),H=a.n(z),B=a(38),Y=a.n(B),U=a(39),G=a.n(U);function M(e){return s.a.createElement("div",{className:G.a.footer},s.a.createElement("img",{src:H.a,alt:""}),s.a.createElement("img",{src:Y.a,alt:""}))}var J=a(13),$=a.n(J),Q=a(40),V=a.n(Q);function X(e){var t=Object(n.useState)(!1),a=Object(r.a)(t,2),o=a[0],i=a[1],l=Object(n.useState)(null),c=Object(r.a)(l,2),d=c[0],m=c[1],p=Object(n.useState)(null),h=Object(r.a)(p,2),g=h[0],b=h[1],y=Object(n.useState)(null),x=Object(r.a)(y,2),w=x[0],_=x[1],k=Object(n.useState)(null),E=Object(r.a)(k,2),S=E[0],j=E[1];return Object(n.useEffect)((function(){f(e.markdown.HowDataLiterateAreYou,b),f(e.markdown.Purpose,_),f(e.markdown.WhoShouldUseThisTool,j),v()}),[e.markdown.HowDataLiterateAreYou,e.markdown.Purpose,e.markdown.WhoShouldUseThisTool]),s.a.createElement("div",{className:$.a.home,style:{backgroundImage:"url(".concat(V.a,")")}},s.a.createElement(I,null),!d&&s.a.createElement(s.a.Fragment,null,!o&&s.a.createElement("div",{className:$.a.contentContainer},s.a.createElement("h1",null,e.t["Data Literacy Self-Assessment Tool"]),s.a.createElement("div",{className:$.a.introContent},s.a.createElement("div",null,s.a.createElement("h2",null,e.t["How Data Literate Are You?"]),s.a.createElement(u.a,{source:g})),s.a.createElement("div",null,s.a.createElement("h2",null,e.t.Purpose),s.a.createElement(u.a,{source:w})),s.a.createElement("div",null,s.a.createElement("h2",null,e.t["Who Should Use this Tool"]),s.a.createElement(u.a,{source:S}),s.a.createElement("button",{onClick:function(){return i(!0)}},e.t["Start Assessment"])))),o&&s.a.createElement(O,{t:e.t,setSurveyResults:m,startSurvey:i})),d&&s.a.createElement(F,{t:e.t,surveyResults:d,markdown:e.markdown}),s.a.createElement(M,null))}var K={getLocale:"en",getOppositeLocale:"fr",getOppositeLang:"Fran\xe7ais",getSwitchLangWarning:"Changer de langue maintenant fera red\xe9marrer l'enqu\xeate, \xeates-vous s\xfbr de vouloir le faire ?\n\nSwitching languages now will cause the survey to restart, are you sure you'd like to do this?","Data Literacy Self-Assessment Tool":"Data Literacy Self-Assessment Tool","How Data Literate Are You?":"How Data Literate Are You?",Purpose:"Purpose","Who Should Use this Tool":"Who Should Use this Tool","Start Assessment":"Start Assessment",Restart:"Restart","Assessment results":"Assessment results","Data Persona":"Data Persona","Data Literacy Level":"Data Literacy Level","Front Line":"Front Line",Analyst:"Analyst","Data Scientist":"Data Scientist","Data Governor":"Data Governor",Architect:"Architect","Business Translator":"Business Translator",Foundational:"Foundational",Capable:"Capable",Advanced:"Advanced",Leading:"Leading","Proposed Curriculum":"Proposed Curriculum","Download as pdf":"Download as pdf"},Z=a(41),ee=a.n(Z),te=a(42),ae=a.n(te),ne=a(43),se=a.n(ne),oe=a(44),ie=a.n(oe),re=a(45),le=a.n(re),ue=a(46),ce=a.n(ue),de=a(47),me=a.n(de),pe=a(48),fe=a.n(pe),he=a(49),ge=a.n(he),ve=a(50),be=a.n(ve),ye=a(51),xe=a.n(ye),we=a(52),_e=a.n(we),ke=a(53),Ee=a.n(ke),Se=a(54),Ie=a.n(Se),je=a(55),De=a.n(je),Ae=a(56),Le=a.n(Ae),Oe=a(57),Ce=a.n(Oe),Pe=a(58),Re=a.n(Pe),Te=a(59),Ne=a.n(Te),qe=a(60),We=a.n(qe);function Fe(){return s.a.createElement(X,{t:K,markdown:{HowDataLiterateAreYou:ee.a,Purpose:ae.a,WhoShouldUseThisTool:se.a,AssessmentResults:ie.a,DataPersona:le.a,DataLiteracyLevel:ce.a,personas:{FrontLine:me.a,Analyst:fe.a,DataScientist:ge.a,DataGovernor:be.a,Architect:xe.a,BusinessTranslator:_e.a},literacyLevels:{Foundational:Ee.a,Capable:Ie.a,Advanced:De.a,Leading:Le.a},courses:{FoundationalCourses:Ce.a,CapableCourses:Re.a,AdvancedCourses:Ne.a,LeadingCourses:We.a}}})}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(Fe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},30:function(e,t,a){e.exports=a.p+"static/media/data_literacy_bcps.4b3cf954.png"},31:function(e,t,a){e.exports=a.p+"static/media/DataLiteracyLogo.3b6505cd.png"},32:function(e,t,a){e.exports={header:"Header_header__1IQH7"}},33:function(e){e.exports=JSON.parse('{"pages":[{"name":"about_you_page","elements":[{"type":"radiogroup","name":"aboutYou","title":{"default":"What best describes your relation to data?"},"isRequired":true,"choices":[{"value":0,"text":{"default":"I gather or create data through program or service delivery."}},{"value":1,"text":{"default":"I interpret trends and patterns in datasets, and communicate conclusions and recommendations to others."}},{"value":4,"text":{"default":"I use advanced analytics (e.g., inferential statistics, algorithms, data mining) to develop solutions to business problems."}},{"value":2,"text":{"default":"I make operational and strategic planning decisions based on data-derived insights."}},{"value":3,"text":{"default":"I manage government data throughout its entire lifecycle."}},{"value":5,"text":{"default":"I design, implement and maintain the architecture for datasets, databases and data warehouses."}}]}],"title":{"default":"About You"}},{"name":"data_culture_page","elements":[{"type":"radiogroup","name":"dataCulture","title":{"default":"What best describes your knowledge of how data is used your organization?"},"isRequired":true,"choices":[{"value":0,"text":{"default":"I am unsure how my organization or area collects, manages, or uses data."}},{"value":1,"text":{"default":"I understand the workflow to collect, manage, analyze and apply data to solve business problems."}},{"value":2,"text":{"default":"I understand the data management processes in my organization, from creation and initial storage to archiving and deletion."}},{"value":3,"text":{"default":"I develop data management policies in my organization to promote the preservation, protection, access, re-use and shareability of government data assets."}}]}],"title":{"default":"Data Culture"}},{"name":"data_ethics_and_security_page","elements":[{"type":"radiogroup","name":"dataEthicsAndSecurity","title":{"default":"What best describes your familiarity with data ethics and security?"},"isRequired":true,"choices":[{"value":0,"text":{"default":"I am unsure about guidelines on the responsible use and sharing of data."}},{"value":1,"text":{"default":"I understand key elements about responsible use and sharing of data, like completing a Privacy Impact Assessment (PIA). "}},{"value":2,"text":{"default":"I regularly identify ethics or security risks around data collection or usage, and establish controls to ensure data confidentiality, integrity, and security."}},{"value":3,"text":{"default":"I have developed or overseen compliance with privacy protection policies and procedures."}}]}],"title":{"default":"Data Ethics and Security"}},{"name":"ask_questions_page","elements":[{"type":"radiogroup","name":"askQuestions","title":{"default":"What best describes your ability to formulate research questions?"},"isRequired":true,"choices":[{"value":0,"text":{"default":"I am beginning to learn about the kinds of problems that can be solved by using data."}},{"value":1,"text":{"default":"I am able to formulate questions that can be answered with simple data queries."}},{"value":2,"text":{"default":"I develop projects based on questions that need complex data queries and multiple iterations to resolve."}},{"value":3,"text":{"default":"I regularly translate business needs into analytic or reporting requirements, including progress monitoring and performance evaluation."}}]}],"title":{"default":"Asking the Right Questions"}},{"name":"find_page","elements":[{"type":"radiogroup","name":"find","title":{"default":"What best describes the data sources / strategies you use to find data?"},"isRequired":true,"choices":[{"value":0,"text":{"default":"I use search engines like Google to search for data."}},{"value":1,"text":{"default":"I know a few data portals and public databases, and can choose the most relevant ones to help me with my work."}},{"value":2,"text":{"default":"I use advanced methods and software to collect and combine data from multiple sources to solve business problems."}},{"value":3,"text":{"default":"I know when the available data cannot solve a given problem, and can generate or obtain new data if needed."}}]}],"title":{"default":"Finding Data","fr":"Recherche de donn\xe9es"}},{"name":"clean_page","elements":[{"type":"radiogroup","name":"clean","title":{"default":"What best describes the strategies you use to clean data?"},"isRequired":true,"choices":[{"value":0,"text":{"default":"I did not know that data might need to be checked, cleaned or normalized. I use data as is."}},{"value":1,"text":{"default":"I can identify common data quality issues (e.g. empty fields, duplicates) and manually fix invalid records and errors."}},{"value":2,"text":{"default":"I always make sure that my data is clean, easy-to-access, and machine readable."}},{"value":3,"text":{"default":"I can use automated scripts to detect duplication, fix invalid records, or address empty fields."}}]}],"title":{"default":"Cleaning Data"}},{"name":"manage_page","elements":[{"type":"radiogroup","name":"manage","title":{"default":"What best describes the strategies you use to manage data?"},"isRequired":true,"choices":[{"value":0,"text":{"default":"I am beginning to learn about managing datasets."}},{"value":1,"text":{"default":"I can collect, edit and store simple datasets in a spreadsheet, and I am familiar with the importance of documenting datasets using appropriate metadata descriptors (e.g., author, date created, access rights)."}},{"value":2,"text":{"default":"I can design, implement or manage large databases (e.g., big data, real-time dashboards) and I follow data management standards."}},{"value":3,"text":{"default":"I can integrate collected data into information systems, set up data pipelines or improve the interoperability of data, and I can help creation or maintain data dictionaries."}}]}],"title":{"default":"Managing Data"}},{"name":"analyze_page","elements":[{"type":"radiogroup","name":"analyze","title":{"default":"What best describes how you analyze data?"},"isRequired":true,"choices":[{"value":0,"text":{"default":"I use basic summaries of data to read information."}},{"value":1,"text":{"default":"I am familiar with common descriptive statistics to identify basic relationships, trends and patterns in data."}},{"value":2,"text":{"default":"I can use advanced and inferential statistics to identify significant relationships, such as linear regressions and decision trees."}},{"value":3,"text":{"default":"I can use predictive or machine learning techniques, such as clustering, forecasting, and natural language processing."}}]}],"title":{"default":"Analyze Data"}},{"name":"visualize_page","elements":[{"type":"radiogroup","name":"visualize","title":{"default":"What best describes how you visualize data?"},"isRequired":true,"choices":[{"value":0,"text":{"default":"I am beginning to learn about data visualization techniques. I usually choose standard visualizations based on what looks best."}},{"value":1,"text":{"default":"I can represent basic information in a table or graph (e.g., pie charts, bar graphs)."}},{"value":2,"text":{"default":"I design interactive charts or dashboards using static data, and choose visualizations from a range of options (e.g., treemaps, ribbons)."}},{"value":3,"text":{"default":"I design sophisticated visualizations that update automatically with real-time data."}}]}],"title":{"default":"Visualize Data"}},{"name":"communicate_page","elements":[{"type":"radiogroup","name":"communicate","title":{"default":"What best describes how you communicate data insights?"},"isRequired":true,"choices":[{"value":0,"text":{"default":"I am beginning to learn about how to communicate data findings, or how the data fits into a broader context."}},{"value":1,"text":{"default":"I can develop basic reports or prepare simple visual summaries that illustrate and support the main data insights."}},{"value":2,"text":{"default":"I can create complex reports that identify key takeaway points and make recommendations."}},{"value":3,"text":{"default":"I can use data and visualizations to build a compelling narrative that is tailored to the audience."}}]}],"title":{"default":"Communicating with Data"}},{"name":"assess_and_interpret_page","elements":[{"type":"radiogroup","name":"assessAndInterpret","title":{"default":"What best describes your ability to critically assess and interpret data insights?"},"isRequired":true,"choices":[{"value":0,"text":{"default":"I take reports and visualizations at face value without questioning their accuracy and message."}},{"value":1,"text":{"default":"I am aware that data needs to be critically assessed, but am not comfortable doing so myself."}},{"value":2,"text":{"default":"I can critically assess the accuracy, assumptions, reliability and validity of data when presented as evidence (e.g., correlation is not causation)."}},{"value":3,"text":{"default":"I have the knowledge needed to meaningfully interpret and translate data insights into action, new ideas, or innovative solutions."}}]}],"title":{"default":"Assessing & Interpreting Data Outputs"}}],"showProgressBar":"bottom"}')},35:function(e){e.exports=JSON.parse('[{"title":"Front Line","emoji":"\ud83d\udccb","skills":{"aboutYou":[0]}},{"title":"Analyst","emoji":"\ud83d\udca1","skills":{"aboutYou":[1]}},{"title":"Data Scientist","emoji":"\ud83d\udcbb","skills":{"aboutYou":[4]}},{"title":"Data Governor","emoji":"\ud83d\udd11","skills":{"aboutYou":[3]}},{"title":"Architect","emoji":"\ud83d\udee0\ufe0f","skills":{"aboutYou":[5]}},{"title":"Business Translator","emoji":"\ud83e\udd1d","skills":{"aboutYou":[2]}}]')},36:function(e){e.exports=JSON.parse('[{"title":"Foundational","emoji":"\ud83c\udfc5","score":{"min":0,"max":5}},{"title":"Capable","emoji":"\ud83c\udfc6","score":{"min":6,"max":15}},{"title":"Advanced","emoji":"\u2b50","score":{"min":16,"max":25}},{"title":"Leading","emoji":"\ud83c\udf1f","score":{"min":26,"max":35}}]')},37:function(e,t,a){e.exports=a.p+"static/media/BCDataLiteracy.96d8ef8d.png"},38:function(e,t,a){e.exports=a.p+"static/media/bcgovlogo.cc7acf13.jpg"},39:function(e,t,a){e.exports={footer:"Footer_footer__-3VhM"}},4:function(e,t,a){e.exports={resultsPage:"Persona_resultsPage__27-25",title:"Persona_title__3i9U1",saveAsPDF:"Persona_saveAsPDF__AE_Nk",resultTypeHeading:"Persona_resultTypeHeading__QNBGk",resultBox:"Persona_resultBox__1ROHG",emoji:"Persona_emoji__R3_Vv"}},40:function(e,t,a){e.exports=a.p+"static/media/bg.d344d357.png"},41:function(e,t,a){e.exports=a.p+"static/media/HowDataLiterateAreYou.ca303147.md"},42:function(e,t,a){e.exports=a.p+"static/media/Purpose.57eec7fb.md"},43:function(e,t,a){e.exports=a.p+"static/media/WhoShouldUseThisTool.7c67b6d3.md"},44:function(e,t,a){e.exports=a.p+"static/media/AssessmentResults.916b05d8.md"},45:function(e,t,a){e.exports=a.p+"static/media/DataPersona.4056dbab.md"},46:function(e,t,a){e.exports=a.p+"static/media/DataLiteracyLevel.2f4ebeb8.md"},47:function(e,t,a){e.exports=a.p+"static/media/FrontLine.02856d1f.md"},48:function(e,t,a){e.exports=a.p+"static/media/Analyst.1cab0a4e.md"},49:function(e,t,a){e.exports=a.p+"static/media/DataScientist.ab1617da.md"},50:function(e,t,a){e.exports=a.p+"static/media/DataGovernor.3da3e288.md"},51:function(e,t,a){e.exports=a.p+"static/media/Architect.40be2dc3.md"},52:function(e,t,a){e.exports=a.p+"static/media/BusinessTranslator.b7bf47d0.md"},53:function(e,t,a){e.exports=a.p+"static/media/Foundational.cec1e8ec.md"},54:function(e,t,a){e.exports=a.p+"static/media/Capable.c98a3b95.md"},55:function(e,t,a){e.exports=a.p+"static/media/Advanced.f9388525.md"},56:function(e,t,a){e.exports=a.p+"static/media/Leading.f28d7387.md"},57:function(e,t,a){e.exports=a.p+"static/media/FoundationalCourses.955c51ea.md"},58:function(e,t,a){e.exports=a.p+"static/media/CapableCourses.cf4c692f.md"},59:function(e,t,a){e.exports=a.p+"static/media/AdvancedCourses.d59e2eca.md"},60:function(e,t,a){e.exports=a.p+"static/media/LeadingCourses.537bf893.md"},62:function(e,t,a){e.exports=a(157)},67:function(e,t,a){}},[[62,1,2]]]);
//# sourceMappingURL=main.51a6d2f1.chunk.js.map
