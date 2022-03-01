(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[111],{7221:function(n,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/forms",function(){return r(6761)}])},6761:function(n,e,r){"use strict";r.r(e),r.d(e,{default:function(){return y}});var t=r(5893),i=r(7294);function o(n){document.querySelectorAll(".formButtonOption").forEach((function(n){n.classList.remove("active")})),n.currentTarget.classList.add("active")}var s=r(7379);function a(){var n,e,r=(n=["\n  padding: 1rem;\n  border-radius: 1rem;\n  background: var(--background);\n  width: 100%;\n  // remove this height\n  height: 90%;\n  box-shadow: 1px 1px 3px var(--text-title);\n  position: absolute;\n  bottom: -50px;\n  left: -50px;\n\n  .inputsInLine {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    gap: 1rem;\n  }\n\n  input,\n  select {\n    padding: 1rem;\n    color: white;\n    background: var(--text-body);\n    border-radius: 0.5rem;\n    margin: 1rem 0;\n    border: none;\n    font-weight: bold;\n\n    outline-color: var(--hue);\n    flex: 1;\n  }\n\n  p {\n    font-weight: bold;\n    color: var(--text-body);\n    margin-top: 1rem;\n  }\n\n  .gender,\n  .deficiency {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    flex-direction: row;\n    justify-content: flex-start;\n    margin-bottom: 1rem;\n\n    gap: 1rem;\n\n    div {\n      input {\n        margin-right: 1rem;\n      }\n    }\n  }\n\n  button {\n    position: absolute;\n    right: 20px;\n    bottom: 20px;\n\n    border: 0;\n    border-radius: 0.4rem;\n    padding: 1rem;\n    color: #fff;\n    background: var(--hue);\n    cursor: pointer;\n    font-weight: bold;\n\n    &:hover {\n      filter: brightness(0.9);\n    }\n  }\n"],e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));return a=function(){return r},r}var d=s.ZP.form.withConfig({componentId:"sc-d67a5409-0"})(a());function c(){return(0,t.jsxs)(d,{method:"POST",action:"http://localhost:333/students",children:[(0,t.jsxs)("div",{className:"inputsInLine",children:[(0,t.jsx)("input",{type:"text",placeholder:"Nome completo do aluno",required:!0}),(0,t.jsx)("input",{type:"date",required:!0})]}),(0,t.jsxs)("div",{className:"inputsInLine",children:[(0,t.jsx)("input",{type:"email",placeholder:"E-mail",required:!0}),(0,t.jsx)("input",{type:"tel",placeholder:"(11) 12345-6789",pattern:"([0-9]{2}) [0-9]{5}-[0-9]{4}",required:!0})]}),(0,t.jsxs)("div",{className:"inputsInLine",children:[(0,t.jsx)("input",{type:"text",placeholder:"CPF: Apenas os n\xfameros"}),(0,t.jsxs)("select",{name:"courses",id:"courses",children:[(0,t.jsx)("option",{value:"id_do_curso",children:"Desenvolvimento de Sistemas"}),(0,t.jsx)("option",{value:"id_do_curso",children:"Marketing Digital"}),(0,t.jsx)("option",{value:"id_do_curso",children:"Administra\xe7\xe3o"})]})]}),(0,t.jsx)("p",{children:"Gen\xearo"}),(0,t.jsxs)("div",{className:"gender",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("input",{type:"radio",id:"man",name:"gender",value:"Homem",onChange:function(){},checked:!0}),(0,t.jsx)("label",{htmlFor:"man",children:"Homem"})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("input",{type:"radio",id:"woman",name:"gender",value:"Mulher",onChange:function(){}}),(0,t.jsx)("label",{htmlFor:"woman",children:"Mulher"})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("input",{type:"radio",id:"another",name:"gender",value:"Outro",onChange:function(){}}),(0,t.jsx)("label",{htmlFor:"another",children:"Outro"})]})]}),(0,t.jsx)("p",{children:"Possu\xed alguma defici\xeancia?"}),(0,t.jsxs)("div",{className:"deficiency",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("input",{type:"radio",id:"positive",name:"deficiency",value:"Homem",onChange:function(){},checked:!0}),(0,t.jsx)("label",{htmlFor:"positive",children:"Sim"})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("input",{type:"radio",id:"negative",name:"deficiency",value:"Mulher",onChange:function(){}}),(0,t.jsx)("label",{htmlFor:"negative",children:"N\xe3o"})]}),(0,t.jsx)("input",{type:"text",placeholder:"Se sim, qual?"})]}),(0,t.jsx)("button",{type:"submit",children:"Cadastrar"})]})}function l(){var n,e,r=(n=["\n  padding: 1rem;\n  border-radius: 1rem;\n  background: var(--background);\n  width: 100%;\n  // remove this height\n  height: 550px;\n  box-shadow: 1px 1px 3px var(--text-title);\n  position: absolute;\n  bottom: -20px;\n  left: -50px;\n\n  .inputsInLine {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    gap: 1rem;\n  }\n\n  input,\n  select {\n    padding: 1rem;\n    color: white;\n    background: var(--text-body);\n    border-radius: 0.5rem;\n    margin: 1rem 0;\n    border: none;\n    font-weight: bold;\n\n    outline-color: var(--hue);\n    flex: 1;\n  }\n\n  p {\n    font-weight: bold;\n    color: var(--text-body);\n    margin-top: 1rem;\n  }\n\n  .gender {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    flex-direction: row;\n    justify-content: flex-start;\n    margin-bottom: 1rem;\n\n    gap: 1rem;\n\n    div {\n      input {\n        margin-right: 1rem;\n      }\n    }\n  }\n\n  button {\n    position: absolute;\n    right: 20px;\n    bottom: 20px;\n\n    border: 0;\n    border-radius: 0.4rem;\n    padding: 1rem;\n    color: #fff;\n    background: var(--hue);\n    cursor: pointer;\n    font-weight: bold;\n\n    &:hover {\n      filter: brightness(0.9);\n    }\n  }\n"],e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));return l=function(){return r},r}var u=s.ZP.form.withConfig({componentId:"sc-6eba36a4-0"})(l());function p(){return(0,t.jsxs)(u,{method:"POST",action:"http://localhost:333/teachers",children:[(0,t.jsxs)("div",{className:"inputsInLine",children:[(0,t.jsx)("input",{type:"text",placeholder:"Nome completo do Professor",required:!0}),(0,t.jsx)("input",{type:"date",required:!0})]}),(0,t.jsxs)("div",{className:"inputsInLine",children:[(0,t.jsx)("input",{type:"email",placeholder:"E-mail",required:!0}),(0,t.jsx)("input",{type:"tel",placeholder:"(11) 12345-6789",pattern:"([0-9]{2}) [0-9]{5}-[0-9]{4}",required:!0})]}),(0,t.jsxs)("div",{className:"inputsInLine",children:[(0,t.jsx)("input",{type:"text",placeholder:"CPF: Apenas os n\xfameros"}),(0,t.jsxs)("select",{name:"courses",id:"courses",children:[(0,t.jsx)("option",{value:"id_do_curso",children:"Desenvolvimento de Sistemas"}),(0,t.jsx)("option",{value:"id_do_curso",children:"Marketing Digital"}),(0,t.jsx)("option",{value:"id_do_curso",children:"Administra\xe7\xe3o"})]})]}),(0,t.jsx)("p",{children:"Gen\xearo"}),(0,t.jsxs)("div",{className:"gender",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("input",{type:"radio",id:"man",name:"gender",value:"Homem",onChange:function(){},checked:!0}),(0,t.jsx)("label",{htmlFor:"man",children:"Homem"})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("input",{type:"radio",id:"woman",name:"gender",value:"Mulher",onChange:function(){}}),(0,t.jsx)("label",{htmlFor:"woman",children:"Mulher"})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("input",{type:"radio",id:"another",name:"gender",value:"Outro",onChange:function(){}}),(0,t.jsx)("label",{htmlFor:"another",children:"Outro"})]})]}),(0,t.jsx)("button",{type:"submit",children:"Cadastrar"})]})}function m(){var n,e,r=(n=["\n  padding: 1rem;\n  border-radius: 1rem;\n  background: var(--background);\n  width: 100%;\n  // remove this height\n  height: 550px;\n  box-shadow: 1px 1px 3px var(--text-title);\n  position: absolute;\n  bottom: -20px;\n  left: -50px;\n\n  input,\n  select,\n  textarea {\n    padding: 1rem;\n    color: white;\n    background: var(--text-body);\n    border-radius: 0.5rem;\n    margin: 1rem 0;\n    border: none;\n    font-weight: bold;\n\n    outline-color: var(--hue);\n    width: 100%;\n  }\n\n  textarea {\n    max-width: 100%;\n    min-width: 100%;\n    max-height: 200px;\n    min-height: 200px;\n  }\n\n  p {\n    font-weight: bold;\n    color: var(--text-body);\n    margin-top: 1rem;\n  }\n\n  button {\n    position: absolute;\n    right: 20px;\n    bottom: 20px;\n\n    border: 0;\n    border-radius: 0.4rem;\n    padding: 1rem;\n    color: #fff;\n    background: var(--hue);\n    cursor: pointer;\n    font-weight: bold;\n\n    &:hover {\n      filter: brightness(0.9);\n    }\n  }\n"],e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));return m=function(){return r},r}var h=s.ZP.form.withConfig({componentId:"sc-447568e2-0"})(m());function x(){return(0,t.jsxs)(h,{method:"POST",action:"http://localhost:333/courses",children:[(0,t.jsx)("input",{type:"text",placeholder:"T\xedtulo do curso",required:!0}),(0,t.jsx)("textarea",{name:"description",id:"description",rows:10,placeholder:"Descri\xe7\xe3o do curso (Opcional)"}),(0,t.jsx)("p",{children:"Per\xedodo "}),(0,t.jsxs)("select",{name:"courses",id:"courses",children:[(0,t.jsx)("option",{value:"Manh\xe3",children:"Manh\xe3"}),(0,t.jsx)("option",{value:"Tarde",children:"Tarde"}),(0,t.jsx)("option",{value:"Noite",children:"Noite"})]}),(0,t.jsx)("button",{type:"submit",children:"Cadastrar"})]})}var f=r(9808),g=r(1664),b=r(2343);function j(n,e){(null==e||e>n.length)&&(e=n.length);for(var r=0,t=new Array(e);r<e;r++)t[r]=n[r];return t}function v(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var r=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=r){var t,i,o=[],s=!0,a=!1;try{for(r=r.call(n);!(s=(t=r.next()).done)&&(o.push(t.value),!e||o.length!==e);s=!0);}catch(d){a=!0,i=d}finally{try{s||null==r.return||r.return()}finally{if(a)throw i}}return o}}(n,e)||function(n,e){if(!n)return;if("string"===typeof n)return j(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return j(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(){var n=v(i.useState({form:(0,t.jsx)(x,{}),img:(0,t.jsx)("img",{src:"assets/course.png",alt:"forms draw"}),description:(0,t.jsxs)("h1",{children:["A op\xe7\xe3o ",(0,t.jsx)("span",{children:'"Curso"'})," faz a cria\xe7\xe3o de um novo curso. Apenas o campo de descri\xe7\xe3o n\xe3o \xe9 obrigat\xf3rio."]})}),2),e=n[0],r=n[1];return(0,t.jsxs)(f.SFormsPage,{children:[(0,t.jsx)("div",{className:"closeLink",children:(0,t.jsx)(g.default,{href:"/",children:(0,t.jsx)(b.bjh,{size:"3ch"})})}),(0,t.jsx)("div",{className:"formsContainer",children:(0,t.jsxs)("div",{className:"formOptions",children:[(0,t.jsxs)("div",{className:"options",children:[(0,t.jsx)("button",{className:"formButtonOption active",onClick:function(n){o(n),r({form:(0,t.jsx)(x,{}),img:(0,t.jsx)("img",{src:"assets/course.png",alt:"forms draw"}),description:(0,t.jsxs)("h1",{children:["A op\xe7\xe3o ",(0,t.jsx)("span",{children:'"Curso"'})," faz a cria\xe7\xe3o de um novo curso. Apenas o campo de descri\xe7\xe3o n\xe3o \xe9 obrigat\xf3rio."]})})},children:"Curso"}),(0,t.jsx)("button",{className:"formButtonOption",onClick:function(n){o(n),r({form:(0,t.jsx)(c,{}),img:(0,t.jsx)("img",{src:"assets/student.png",alt:"forms draw"}),description:(0,t.jsxs)("h1",{children:["A op\xe7\xe3o ",(0,t.jsx)("span",{children:'"Estudante"'})," permite a cria\xe7\xe3o de um novo aluno. Todos os campos exceto o de descri\xe7\xe3o de defici\xeancia s\xe3o obrigat\xf3rios."]})})},children:"Estudante"}),(0,t.jsx)("button",{className:"formButtonOption",onClick:function(n){o(n),r({form:(0,t.jsx)(p,{}),img:(0,t.jsx)("img",{src:"assets/teacher.png",alt:"forms draw"}),description:(0,t.jsxs)("h1",{children:["A op\xe7\xe3o ",(0,t.jsx)("span",{children:'"Professor"'})," permite a cria\xe7\xe3o de um novo instrutor. Todos os campos s\xe3o obrigat\xf3rios."]})})},children:"Professor"})]}),e.form]})}),(0,t.jsxs)("div",{className:"formsInformations",children:[e.description,e.img]})]})}},9808:function(n,e,r){"use strict";function t(){var n,e,r=(n=["\n  width: 100%;\n\n  background: var(--background);\n  padding: 2rem 1rem;\n  position: relative;\n  z-index: 999;\n\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n\n  .closeLink {\n    cursor: pointer;\n    pointer-events: fill;\n    width: 30px;\n    height: 30px;\n    position: absolute;\n    z-index: 1;\n    right: 20px;\n    top: 20px;\n  }\n\n  .formsContainer {\n    flex-basis: 60%;\n\n    display: flex;\n    justify-content: center;\n    align-items: flex-end;\n    flex-direction: column;\n    padding: 1rem;\n\n    .formOptions {\n      width: 80%;\n      height: 650px;\n      position: relative;\n      margin: 1rem;\n      background: var(--hue);\n      border-radius: 2rem;\n\n      .options {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        width: 80%;\n        margin: 2rem auto;\n\n        button {\n          border: 2px solid limegreen;\n          padding: 1rem;\n          cursor: pointer;\n          background: var(--hue);\n          text-transform: uppercase;\n          color: #fff;\n          font-weight: bold;\n          flex: 1;\n\n          transition: background 0.3s;\n\n          &.active {\n            background: green;\n          }\n        }\n      }\n    }\n  }\n\n  .formsInformations {\n    flex: 1;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0 1rem;\n\n    h1 {\n      text-align: center;\n      color: var(--text-title);\n      font-size: 1.5rem;\n      width: 70%;\n      margin-bottom: 5rem;\n      span {\n        color: var(--text-body);\n      }\n    }\n\n    img {\n      width: 300px;\n    }\n  }\n\n  @media (max-width: 900px) {\n    flex-direction: column;\n    align-items: center;\n    justify-content: baseline;\n  }\n"],e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));return t=function(){return r},r}r.r(e),r.d(e,{SFormsPage:function(){return i}});var i=r(7379).ZP.div.withConfig({componentId:"sc-2f15f7c4-0"})(t())}},function(n){n.O(0,[228,949,774,888,179],(function(){return e=7221,n(n.s=e);var e}));var e=n.O();_N_E=e}]);