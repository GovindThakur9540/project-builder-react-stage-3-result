(this["webpackJsonpquiz-stage3"]=this["webpackJsonpquiz-stage3"]||[]).push([[0],{36:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),i=n(28),r=n.n(i),a=(n(36),n(31)),o=n(9),l=n(10),u=n(12),j=n(11),d=n(8),h=n(0),b=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"home-container",children:[Object(h.jsx)("h1",{children:"Quiz App"}),Object(h.jsx)("button",{children:Object(h.jsx)(d.b,{to:"/QuizComponent",className:"link",children:"Play"})})]})}}]),n}(s.Component),p=n(30),x=n.n(p),O=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).previousQues=function(){0===s.state.indexValue?alert("You need to start from here!"):s.state.indexValue>0&&s.setState({indexValue:s.state.indexValue-1})},s.nextQues=function(){s.state.indexValue<9?(s.setState({indexValue:s.state.indexValue+1}),setTimeout(s.hide,600)):alert("All Question Completed Click on Quit to Know Your result")},s.hide=function(){document.getElementById("answers").style.display="none"},s.checkAnswer=function(e){var t=e.target.value,n=document.getElementById("answers");console.log(s.state.datas[s.state.indexValue].answer+" "+t),s.props.isAttempt(),s.state.datas[s.state.indexValue].answer===t?(n.innerText="Correct",n.style.backgroundColor="green",n.style.display="block",s.nextQues(),s.setState({correct:s.state.correct+1}),s.props.checkCorrect()):(n.innerText="Wrong",n.style.backgroundColor="red",n.style.animation="hideIt 1s forwards",n.style.display="block",s.nextQues())},s.state={indexValue:0,datas:[],attempt:0},s}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;x.a.get("https://my-json-server.typicode.com/Naveen132895/quiz-api/questions").then((function(t){e.setState({datas:t.data})}))}},{key:"render",value:function(){var e=this.state.datas.length,t=this.state.datas[this.state.indexValue];return console.log(this.state.correct),Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:"main-container",children:e>0?Object(h.jsxs)("div",{className:"quiz-container",children:[Object(h.jsx)("h1",{children:"Question"}),Object(h.jsxs)("div",{className:"question-container",children:[Object(h.jsxs)("h4",{children:[t.id," of 10"]}),Object(h.jsx)("h3",{children:t.question})]}),Object(h.jsxs)("div",{className:"options",id:"options",children:[Object(h.jsx)("button",{className:"button",onClick:this.checkAnswer,value:t.options[0],children:t.options[0]}),Object(h.jsx)("button",{className:"button",onClick:this.checkAnswer,value:t.options[1],children:t.options[1]}),Object(h.jsx)("button",{className:"button",onClick:this.checkAnswer,value:t.options[2],children:t.options[2]}),Object(h.jsx)("button",{className:"button",onClick:this.checkAnswer,value:t.options[3],children:t.options[3]})]}),Object(h.jsxs)("div",{className:"buttons",children:[Object(h.jsx)("button",{onClick:this.previousQues,children:"Previous"}),Object(h.jsx)("button",{onClick:this.nextQues,children:"Next"}),Object(h.jsx)("button",{children:Object(h.jsx)(d.b,{to:"/ResultComponent",className:"link",children:"Quit"})})]}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{id:"answers"})})]}):Object(h.jsx)("div",{})})})}}]),n}(s.Component),m=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(e){return Object(o.a)(this,n),t.call(this,e)}return Object(l.a)(n,[{key:"render",value:function(){return console.log(this.props),Object(h.jsxs)("div",{className:"result-main-container",children:[Object(h.jsx)("i",{class:"fa fa-check-circle","aria-hidden":"true"}),Object(h.jsx)("h1",{className:"result",children:"Result"}),Object(h.jsxs)("div",{className:"result-container",children:[10*this.props.correct<60?Object(h.jsx)("h3",{children:"You need more practice!"}):Object(h.jsx)("h3",{children:"Well Done!"}),Object(h.jsxs)("h2",{children:["Your Score: ",10*this.props.correct]}),Object(h.jsxs)("p",{children:["Total number of question:",Object(h.jsx)("span",{children:"10"})]}),Object(h.jsxs)("p",{children:["Number of attempted question:",Object(h.jsx)("span",{children:this.props.attempt})]}),Object(h.jsxs)("p",{children:["Number of Correct Answers:",Object(h.jsx)("span",{children:this.props.correct})]}),Object(h.jsxs)("p",{children:["Number of Wrong Answers:",Object(h.jsx)("span",{children:10-this.props.correct})]})]}),Object(h.jsxs)("div",{className:"button-container",children:[Object(h.jsx)("button",{children:Object(h.jsx)(d.b,{to:"/QuizComponent",className:"link",children:"Play Again"})}),Object(h.jsx)("button",{children:Object(h.jsx)(d.b,{to:"/project-builder-react-stage-3-result",className:"link",children:"Back to Home"})})]})]})}}]),n}(s.Component),v=n(2),f=(n(61),function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).checkCorrect=function(){e.setState({correct:e.state.correct+1})},e.isAttempt=function(){e.setState({attempt:e.state.attempt+1})},e.state={correct:0,attempt:0},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(d.a,{children:Object(h.jsxs)(v.c,{children:[Object(h.jsx)(v.a,{exact:!0,path:"/project-builder-react-stage-3-result",children:Object(h.jsx)(b,{})}),Object(h.jsx)(v.a,{path:"/QuizComponent",children:Object(h.jsx)(O,{checkCorrect:this.checkCorrect,isAttempt:this.isAttempt})}),Object(h.jsx)(v.a,{path:"/ResultComponent",children:Object(h.jsx)(m,Object(a.a)({},this.state))})]})})})}}]),n}(s.Component)),k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,63)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),s(e),c(e),i(e),r(e)}))};r.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(f,{})}),document.getElementById("root")),k()}},[[62,1,2]]]);
//# sourceMappingURL=main.660f6992.chunk.js.map