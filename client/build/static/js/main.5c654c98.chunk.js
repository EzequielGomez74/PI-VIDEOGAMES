(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{49:function(e,t,c){},50:function(e,t,c){},59:function(e,t,c){},83:function(e,t,c){},84:function(e,t,c){},85:function(e,t,c){},86:function(e,t,c){},87:function(e,t,c){},88:function(e,t,c){},89:function(e,t,c){},90:function(e,t,c){},93:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),i=c(21),r=c.n(i),s=(c(49),c(9)),l=c(4),o=(c(50),c(0));var j=function(){return Object(o.jsxs)("div",{className:"navbar-div",children:[Object(o.jsx)(s.c,{to:"/",children:Object(o.jsx)("button",{children:"Intro"})}),Object(o.jsx)(s.c,{to:"/videogames",children:Object(o.jsx)("button",{children:"Videogames"})}),Object(o.jsx)(s.c,{to:"/crearjuego",children:Object(o.jsx)("button",{children:"CrearJuego"})}),Object(o.jsx)(s.c,{to:"/about",children:Object(o.jsx)("button",{children:"About"})})]})},d=c.p+"static/media/videogame.6a3ef65f.png";c(59);var b=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(j,{}),Object(o.jsxs)("div",{className:"container-about",children:[Object(o.jsx)("h1",{children:"PI HENRY VIDEOGAMES 2022"}),Object(o.jsx)("h1",{children:"EZEQUIEL GOMEZ"}),Object(o.jsx)("div",{className:"div-foto",children:Object(o.jsx)("img",{src:d,alt:"foto"})})]})]})},u=c(14),O=c(2),m=c(13),h=c(6),x=c(12),p=c.n(x),g=(c(83),c(29)),f=c(42);function v(){return function(e){return p.a.get("/videogames/").then((function(t){console.log(t),e({type:"GET_ALL_GAMES",payload:t.data})})).catch((function(e){return e}))}}var y=function(e){var t=Object(h.c)(),c=Object(a.useState)({form:"Must complete the form"}),n=Object(m.a)(c,2),i=n[0],r=n[1],s=Object(a.useState)({name:"",description:"",releaseDate:"",rating:0,genres:[],platforms:[]}),l=Object(m.a)(s,2),d=l[0],b=l[1],x=function(e){var t={};return e.name?e.name.length<4&&(t.name="Game Name must have at least 4 characters"):t.name="Game Name is required",e.description?e.description.length<8&&(t.description="Description must have at least 8 characters"):t.description="Description is required",e.rating?/^[1-5]$/.test(e.rating)||(t.rating="Rating must be between 1 and 5"):t.rating="Rating is required",t};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(j,{}),Object(o.jsx)("div",{className:"main-add",children:Object(o.jsxs)("div",{className:"container-add",children:[Object(o.jsx)("h2",{children:"CREA TU JUEGO!!!-"}),Object(o.jsx)("div",{className:"div-cont",children:Object(o.jsxs)("form",{onSubmit:function(c){c.preventDefault(),x(d);var a=[];if(d.genres.length<1&&a.push("Genres is required"),d.platforms.length<1&&a.push("Platforms is required"),Object.values(i).length||a.length)return alert(Object.values(i).concat(a).join("\n"));p.a.post("http://localhost:3001/videogame",d).then((function(e){return console.log(e.data)})),alert("".concat(d.name," Creado Correctamente")),t(v()),e.history.push("/videogames")},onChange:function(e){"genres"===e.target.parentNode.parentNode.id&&(e.target.checked?b((function(t){return Object(O.a)(Object(O.a)({},t),{},{genres:d.genres.concat(e.target.value)})})):b((function(t){return Object(O.a)(Object(O.a)({},t),{},{genres:d.genres.filter((function(t){return e.target.value!==t}))})}))),"platforms"===e.target.parentNode.parentNode.id&&(e.target.checked?b((function(t){return Object(O.a)(Object(O.a)({},t),{},{platforms:d.platforms.concat(e.target.name)})})):b((function(t){return Object(O.a)(Object(O.a)({},t),{},{platforms:d.platforms.filter((function(t){return e.target.name!==t}))})}))),"checkbox"!==e.target.type&&b((function(t){return Object(O.a)(Object(O.a)({},t),{},Object(u.a)({},e.target.name,e.target.value))})),r(x(Object(O.a)(Object(O.a)({},d),{},Object(u.a)({},e.target.name,e.target.value))))},children:[Object(o.jsx)("label",{htmlFor:"name",className:"title-name",children:Object(o.jsx)("strong",{children:"Name: "})}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{className:"name",placeholder:"Name",type:"text",id:"name",name:"name",autoComplete:"off"}),Object(o.jsx)("br",{}),Object(o.jsx)("label",{htmlFor:"description",className:"title-name",children:Object(o.jsx)("strong",{children:"Description: "})}),Object(o.jsx)("br",{}),Object(o.jsx)("textarea",{className:"name",name:"description",placeholder:"Description...",id:"description",cols:"30",rows:"3"}),Object(o.jsx)("br",{}),Object(o.jsx)("label",{htmlFor:"date",className:"title-name",children:Object(o.jsx)("strong",{children:"Release Date: "})}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{name:"releaseDate",className:"dt",type:"date",id:"date",required:!0}),Object(o.jsx)("br",{}),Object(o.jsx)("label",{htmlFor:"rating",className:"title-name",children:Object(o.jsx)("strong",{children:"Rating: "})}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{name:"rating",className:"dt",placeholder:"Rate from 1 to 5",type:"tel",id:"rating",maxLength:"1",autoComplete:"off"}),Object(o.jsx)("br",{}),Object(o.jsx)("label",{className:"title-name",children:Object(o.jsx)("strong",{children:"Genres:"})}),Object(o.jsxs)("div",{id:"genres",className:"genres-div",children:[Object(o.jsxs)("div",{className:"Action",children:[Object(o.jsx)("input",{name:"Action",value:"2",type:"checkbox",id:"Action"}),Object(o.jsx)("label",{htmlFor:"Action",children:"Action."})]}),Object(o.jsxs)("div",{className:"indie",children:[Object(o.jsx)("input",{name:"Indie",value:"1",type:"checkbox",id:"Indie"}),Object(o.jsx)("label",{htmlFor:"Indie",children:"Indie."})]}),Object(o.jsxs)("div",{className:"Adventure",children:[Object(o.jsx)("input",{name:"Adventure",value:"3",type:"checkbox",id:"Adventure"}),Object(o.jsx)("label",{htmlFor:"Adventure",children:"Adventure."})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("input",{name:"RPG",value:"4",type:"checkbox",id:"RPG"}),Object(o.jsx)("label",{htmlFor:"RPG",children:"RPG."})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("input",{name:"Strategy",value:"5",type:"checkbox",id:"Strategy"}),Object(o.jsx)("label",{htmlFor:"Strategy",children:"Strategy."})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("input",{name:"Shooter",value:"6",type:"checkbox",id:"Shooter"}),Object(o.jsx)("label",{htmlFor:"Shooter",children:"Shooter."})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("input",{name:"Casual",value:"7",type:"checkbox",id:"Casual"}),Object(o.jsx)("label",{htmlFor:"Casual",children:"Casual."})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("input",{name:"Simulation",value:"8",type:"checkbox",id:"Simulation"}),Object(o.jsx)("label",{htmlFor:"Simulation",children:"Simulation."})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("input",{name:"Puzzle",value:"9",type:"checkbox",id:"Puzzle"}),Object(o.jsx)("label",{htmlFor:"Puzzle",children:"Puzzle."})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("input",{name:"Arcade",value:"10",type:"checkbox",id:"Arcade"}),Object(o.jsx)("label",{htmlFor:"Arcade",children:"Arcade."})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("input",{name:"Platformer",value:"11",type:"checkbox",id:"Platformer"}),Object(o.jsx)("label",{htmlFor:"Platformer",children:"Platformer."})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("input",{name:"Racing",value:"12",type:"checkbox",id:"Racing"}),Object(o.jsx)("label",{htmlFor:"Racing",children:"Racing."})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("input",{name:"Massively-Multiplayer",value:"13",type:"checkbox",id:"Massively-Multiplayer"}),Object(o.jsx)("label",{htmlFor:"Massively-Multiplayer",children:"Massively-Multiplayer."})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("input",{name:"Sports",value:"14",type:"checkbox",id:"Sports"}),Object(o.jsx)("label",{htmlFor:"Sports",children:"Sports."})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("input",{name:"Fighting",value:"15",type:"checkbox",id:"Fighting"}),Object(o.jsx)("label",{htmlFor:"Fighting",children:"Fighting."})]})]}),Object(o.jsxs)("label",{className:"title-name",children:[Object(o.jsx)("strong",{children:"Platforms: "})," "]}),Object(o.jsxs)("div",{id:"platforms",className:"plat-div",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("input",{name:"PC",type:"checkbox",id:"PC"}),Object(o.jsx)("label",{htmlFor:"PC",children:"PC."})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("input",{name:"iOS",type:"checkbox",id:"iOS"}),Object(o.jsx)("label",{htmlFor:"iOS",children:"iOS."})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("input",{name:"Android",type:"checkbox",id:"Android"}),Object(o.jsx)("label",{htmlFor:"Android",children:"Android."})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("input",{name:"macOS",type:"checkbox",id:"macOS"}),Object(o.jsx)("label",{htmlFor:"macOS",children:"macOS."})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("input",{name:"PlayStation 4",type:"checkbox",id:"PlayStation 4"}),Object(o.jsx)("label",{htmlFor:"PlayStation 4",children:"PlayStation 4."})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("input",{name:"PlayStation 5",type:"checkbox",id:"PlayStation 5"}),Object(o.jsx)("label",{htmlFor:"PlayStation 5",children:"PlayStation 5."})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("input",{name:"XBOX",type:"checkbox",id:"XBOX"}),Object(o.jsx)("label",{htmlFor:"XBOX",children:"XBOX."})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("input",{name:"PS Vita",type:"checkbox",id:"PS Vita"}),Object(o.jsx)("label",{htmlFor:"PS Vita",children:"PS Vita."})]})]}),Object(o.jsx)("br",{}),Object(o.jsx)("div",{className:"div-but-form",children:Object(o.jsx)("button",{type:"submit",children:"Create"})})]})})]})})]})},N=c.p+"static/media/created.d285bd71.jpg";c(84);function S(e){var t=Object(h.c)(),c=Object(h.d)((function(e){return e.gameDetails})),n=e.match.params.idVideogame;return Object(a.useEffect)((function(){var e;return t((e=n,function(t){p.a.get("/videogame/".concat(e)).then((function(e){console.log(e),t({type:"GET_VIDEOGAME_DETAIL",payload:e.data})})).catch((function(e){return e}))})),function(){return t((function(e){e({type:"CLEAN"})}))}}),[t,n]),Object(o.jsxs)("div",{className:"container-detail",children:[Object(o.jsx)(j,{}),Object(o.jsx)("div",{className:"details-div",children:c?Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{className:"title",children:c.name}),c.background_image?Object(o.jsx)("div",{className:"div-img",children:Object(o.jsx)("img",{src:c.background_image,alt:"Videogame"})}):Object(o.jsx)("div",{className:"div-img",children:Object(o.jsx)("img",{src:N,alt:"Videogame"})}),Object(o.jsxs)("p",{children:[Object(o.jsx)("strong",{children:"Release Date"}),":"," ","".concat(c.releaseDate||"None")]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("strong",{children:"Rating"}),": \u2605 ","".concat(c.rating)]}),c.description&&c.genres&&c.platforms?Object(o.jsxs)("div",{className:"div-descr",children:[Object(o.jsx)("p",{className:"descripcion",children:c.description.replace(/(<([^>]+)>)/gi,"")}),Object(o.jsxs)("p",{children:[Object(o.jsx)("strong",{children:"Genres"}),":"," ","".concat(c.genres.join(", "))]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("strong",{children:"Platforms"}),":"," ","".concat("string"===typeof c.platforms?c.platforms:c.platforms.join(", "))]}),Object(o.jsx)(s.c,{to:"/videogames",children:Object(o.jsx)("button",{children:"Volver"})})]}):Object(o.jsx)("h1",{children:"Cargando"})]}):Object(o.jsx)("h1",{children:"Cargando"})})]})}c(85);function E(){return Object(o.jsxs)("div",{className:"MyImage",children:[Object(o.jsx)("img",{className:"theImage",src:"",alt:""}),Object(o.jsx)(s.b,{to:"/videogames",children:Object(o.jsx)("button",{className:"myButton",children:"INSERT COIN"})})]})}var A=c.p+"static/media/CodePen-404-Page.a4d44b49.gif";var P=function(){return Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("img",{src:A,alt:""})})};c(86);var C=Object(h.b)(null,{searchByName:function(e){return function(t){return p.a.get("/videogames?name=".concat(e)).then((function(e){console.log(e),t({type:"SEARCH_BY_NAME",payload:e.data})})).catch((function(e){return e}))}},getAllGames:v,volverAhome:function(){return function(e){e({type:"VOLVER_A_HOME"})}}})((function(e){var t=e.searchByName,c=e.volverAhome,n=Object(a.useState)({buscar:""}),i=Object(m.a)(n,2),r=i[0],s=i[1];return Object(o.jsxs)("div",{className:"searchbar-div",children:[Object(o.jsx)("input",{className:"bar-btn",name:"buscar",placeholder:"busc\xe1 tu juego...",onChange:function(e){s(Object(u.a)({},e.target.name,e.target.value))},value:r.buscar,autoComplete:"off"}),Object(o.jsx)("button",{className:"btn",onClick:function(){t(r.buscar),s({buscar:""})},children:"Buscar"}),Object(o.jsx)("button",{className:"btn",onClick:function(){c(),s({buscar:""})},children:"Volver a Todos"})]})}));c(87);function k(e){var t=e.id,c=e.name,a=e.rating,n=e.genres,i=e.image;return Object(o.jsxs)("div",{className:"container-game",children:[Object(o.jsx)("div",{className:"title-game",children:c}),Object(o.jsx)("div",{className:"game-div",children:i?Object(o.jsx)("img",{src:"".concat(i),alt:"Videogame",className:"Img"}):Object(o.jsx)("img",{src:N,alt:"Videogame",className:"Img"})}),Object(o.jsx)("div",{className:"infoRating",children:Object(o.jsxs)("p",{children:[Object(o.jsx)("strong",{children:"Rating"}),": \u2605 ","".concat(a)]})}),Object(o.jsx)("div",{className:"infoContGenres",children:Object(o.jsxs)("p",{className:"",children:[Object(o.jsx)("strong",{children:"Genres :"})," ","".concat("string"===typeof n?n:n.join(", "))]})}),Object(o.jsx)("div",{className:"div-button",children:t&&Object(o.jsx)(s.b,{to:"/videogame/".concat(t),children:Object(o.jsx)("button",{className:"Link",children:"Details"})})})]})}c(88);function R(e){var t=e.cardPerPage,c=e.totalCards,a=e.paginate,n=e.currentPage;Math.ceil(c/t)<n&&a(1);for(var i=[],r=1;r<=Math.ceil(c/t);r++)i.push(r);return Object(o.jsx)("div",{className:"pag-div",children:Object(o.jsx)("ul",{children:i.length>1&&i.map((function(e,t){return Object(o.jsx)("li",{children:Object(o.jsx)("button",{className:"pag-btn",onClick:function(){return a(e)},children:e})},t)}))})})}c(89);var _=Object(h.b)((function(e){return{genres:e.genres}}),{orderBy:function(e){return function(t){console.log(e),t({type:"ORDER_BY",payload:e})}},filterBy:function(e){return function(t){console.log(e),t({type:"FILTER_BY",payload:e})}}})((function(e){var t=e.orderBy,c=e.genres,a=e.filterBy;return Object(o.jsxs)("div",{className:"container-div",children:[Object(o.jsxs)("select",{className:"selectCont",onChange:function(e){a(e.target.value)},name:"",id:"",children:[Object(o.jsx)("option",{className:"option",value:"default",children:"TODOS..."}),Object(o.jsx)("optgroup",{className:"optionGroup",label:"DataBase",children:Object(o.jsx)("option",{className:"option",value:"DB",children:"CREADOS"})}),Object(o.jsx)("optgroup",{className:"optionGroup",label:"API",children:Object(o.jsx)("option",{className:"option",value:"API",children:"API"})}),Object(o.jsx)("optgroup",{className:"optionGroup",label:"GENRES",children:c&&c.map((function(e){return Object(o.jsx)("option",{value:e.name,children:e.name},e.name)}))})]}),Object(o.jsxs)("select",{className:"selectCont",onChange:function(e){t(e.target.value)},name:"",id:"",children:[Object(o.jsx)("option",{className:"option",value:"default",children:"ORDEN..."}),Object(o.jsxs)("optgroup",{className:"optionGroup",label:"Rating",children:[Object(o.jsx)("option",{className:"option",value:"asc",children:"Mayor a Menor"}),Object(o.jsx)("option",{className:"option",value:"desc",children:"Menor a Mayor"})]}),Object(o.jsxs)("optgroup",{className:"optionGroup",label:"Alphabetic",children:[Object(o.jsx)("option",{className:"option",value:"A-Z",children:"A - Z"}),Object(o.jsx)("option",{className:"option",value:"Z-A",children:"Z - A"})]})]})]})})),F=(c(90),c.p+"static/media/llorando.3ec0c111.gif"),D=c.p+"static/media/conecting.601aaa28.gif";function G(){console.log("se ejetuto el constructor");var e,t=Object(h.d)((function(e){return e.filtered})),c=Object(h.c)(),n=Object(a.useState)(1),i=Object(m.a)(n,2),r=i[0],s=i[1],l=Object(a.useState)(15),d=Object(m.a)(l,1)[0],b=r*d,u=b-d;e="string"===typeof t?t:t.slice(u,b);var O=function(e){s(e)};return Object(a.useEffect)((function(){console.log("se monto"),0===t.length&&(c(v()),c(function(){var e=Object(f.a)(Object(g.a)().mark((function e(t){var c;return Object(g.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get("/genres");case 3:return c=e.sent,console.log(c),e.abrupt("return",t({type:"GET_GENRES",payload:c.data}));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()))}),[t.length,c]),Object(a.useEffect)((function(){return function(){return console.log("se desmonto")}}),[]),Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)(j,{}),Object(o.jsx)(C,{}),Object(o.jsx)(_,{}),Object(o.jsx)(R,{cardPerPage:d,totalCards:t.length,paginate:O,currentPage:r}),Object(o.jsx)("div",{className:"games-div",children:e.length>=1?e.map((function(e){return Object(o.jsx)(k,{name:e.name,rating:e.rating,genres:e.genres,image:e.background_image,id:e.id},e.id)})):"string"===typeof e?Object(o.jsx)("div",{children:Object(o.jsx)("img",{className:"nonono",src:F,alt:""})}):Object(o.jsx)("div",{children:Object(o.jsx)("img",{className:"loading",src:D,alt:""})})}),Object(o.jsx)(R,{cardPerPage:d,totalCards:t.length,paginate:O,currentPage:r})]})}var B=function(){return Object(o.jsx)(s.a,{children:Object(o.jsxs)(l.c,{children:[Object(o.jsx)(l.a,{exact:!0,path:"/",component:E}),Object(o.jsx)(l.a,{exact:!0,path:"/videogames",component:G}),Object(o.jsx)(l.a,{exact:!0,path:"/crearjuego",component:y}),Object(o.jsx)(l.a,{exact:!0,path:"/videogame/:idVideogame",component:S}),Object(o.jsx)(l.a,{exact:!0,path:"/about",component:b}),Object(o.jsx)(l.a,{path:"*",component:P})]})})},I=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,94)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,i=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),i(e),r(e)}))},M=c(23),T=c(19),V={gamesBackUp:[],gameDetails:{},genres:[],filtered:[]};var L=c(43),U=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||M.b,X=Object(M.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ALL_GAMES":return Object(O.a)(Object(O.a)({},e),{},{allGames:t.payload,gamesBackUp:t.payload,filtered:t.payload});case"CLEAN":return Object(O.a)(Object(O.a)({},e),{},{gameDetails:{}});case"VOLVER_A_HOME":return Object(O.a)(Object(O.a)({},e),{},{filtered:e.gamesBackUp});case"GET_VIDEOGAME_DETAIL":return Object(O.a)(Object(O.a)({},e),{},{gameDetails:t.payload});case"SEARCH_BY_NAME":return Object(O.a)(Object(O.a)({},e),{},{filtered:t.payload});case"GET_GENRES":return Object(O.a)(Object(O.a)({},e),{},{genres:t.payload});case"FILTER_BY":return"default"===t.payload?Object(O.a)(Object(O.a)({},e),{},{filtered:e.gamesBackUp}):"DB"===t.payload?Object(O.a)(Object(O.a)({},e),{},{filtered:e.gamesBackUp.filter((function(e){return"string"===typeof e.id}))}):"API"===t.payload?Object(O.a)(Object(O.a)({},e),{},{filtered:e.gamesBackUp.filter((function(e){return"number"===typeof e.id}))}):Object(O.a)(Object(O.a)({},e),{},{filtered:e.gamesBackUp.filter((function(e){return e.genres.find((function(e){return e===t.payload}))}))});case"ORDER_BY":return"A-Z"===t.payload?Object(O.a)(Object(O.a)({},e),{},{filtered:Object(T.a)(e.filtered).sort((function(e,t){return e.name>t.name?1:e.name<t.name?-1:0}))}):"Z-A"===t.payload?Object(O.a)(Object(O.a)({},e),{},{filtered:Object(T.a)(e.filtered).sort((function(e,t){return e.name>t.name?-1:e.name<t.name?1:0}))}):"desc"===t.payload?Object(O.a)(Object(O.a)({},e),{},{filtered:Object(T.a)(e.filtered).sort((function(e,t){return e.rating-t.rating}))}):"asc"===t.payload?Object(O.a)(Object(O.a)({},e),{},{filtered:Object(T.a)(e.filtered).sort((function(e,t){return t.rating-e.rating}))}):Object(O.a)(Object(O.a)({},e),{},{filtered:e.gamesBackUp});default:return e}}),U(Object(M.a)(L.a))),w=X,z=c(44);c.n(z).a.config(),p.a.defaults.baseURL=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API||"http://localhost:3001",r.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(h.a,{store:w,children:Object(o.jsx)(B,{})})}),document.getElementById("root")),I()}},[[93,1,2]]]);
//# sourceMappingURL=main.5c654c98.chunk.js.map