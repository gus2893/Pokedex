(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{151:function(e,t,a){e.exports=a(297)},297:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(30),l=a.n(c),o=a(56),i=a(25),d=a(123),u=a(124),m=a(125),p=a(140),s=a(126),b=a(141),E=a(139),h=function(e){var t=e.pokemon,a=e.details,n=e.picture;if(!t)return null;var c,l=n?t.sprites.front_default:t.sprites.back_default,o="";return t.types[1]?(c=t.types[0].type.name,o=t.types[1].type.name):c=t.types[0].type.name,a?r.a.createElement("div",null,t.name," #",t.id,r.a.createElement("br",null),r.a.createElement("br",null),"Weight: ",(t.weight/4.536).toFixed(0),"lbs",r.a.createElement("br",null),"Height: ",(10*t.height).toFixed(0),"cm",r.a.createElement("br",null),"Types: ",r.a.createElement("br",null),c,r.a.createElement("br",null),o):r.a.createElement("div",null,r.a.createElement("div",{style:{float:"right"}},"#",t.id),r.a.createElement("br",null),r.a.createElement(E.a,{src:l}),t.name,r.a.createElement("br",null))},f=a(83),k=a.n(f),v=a(136),g=a(137),y=a.n(g).a.create({baseURL:"https://pokeapi.co/api/v2/"}),w=a(300),C=a(303),x=a(301),O=a(304),j=a(32),S=a(302),R=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={next:!1,prev:!0,details:!1,picture:!0},a.componentDidMount=function(){a.props.fetchPokemon(1)},a.navigate=function(e){a.props.fetchPokemon(e),a.setState({prev:e-1===0})},a}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.props.pokemon;return r.a.createElement(w.a,{align:"center"},r.a.createElement(C.a,{align:"center",compact:!0,inverted:!0,color:"red",style:{borderRadius:"50px"}},r.a.createElement(C.a,{align:"center",padded:"very",inverted:!0,color:"black",style:{borderRadius:"18px"}},r.a.createElement(C.a,{size:"large",padded:!0,style:{backgroundColor:"lightgrey"}},r.a.createElement(h,{pokemon:t.pokemonData,details:this.state.details,picture:this.state.picture}))),r.a.createElement(x.a,null),r.a.createElement(x.a,null),r.a.createElement(O.a,{columns:3},r.a.createElement(O.a.Row,null,r.a.createElement(O.a.Column,{width:1}),r.a.createElement(O.a.Column,{width:13},r.a.createElement(O.a.Column,{verticalAlign:"middle",align:"left",style:{paddingLeft:"35px",paddingBottom:"4px"}},r.a.createElement(j.a,{bordered:!0,inverted:!0,color:"black",name:"caret up",disabled:this.state.next,onClick:function(){return e.navigate(t.pokemonId+1)}})),r.a.createElement(j.a,{bordered:!0,inverted:!0,color:"black",name:"caret left",disabled:this.state.picture,onClick:function(){return e.setState({picture:!0})}}),r.a.createElement(j.a,{bordered:!0,inverted:!0,color:"black",name:"circle",style:{paddingLeft:"35px"}}),r.a.createElement(j.a,{bordered:!0,inverted:!0,color:"black",name:"caret right",disabled:!this.state.picture,onClick:function(){return e.setState({picture:!1})}}),r.a.createElement(S.a,{content:"A",circular:!0,color:"black",compact:!0,floated:"right",onClick:function(){return e.setState({details:!0})}}),r.a.createElement(S.a,{content:"B",circular:!0,color:"black",compact:!0,floated:"right",onClick:function(){return e.setState({details:!1})}}),r.a.createElement(O.a.Column,{width:1,verticalAlign:"middle",style:{paddingRight:"88px",paddingTop:"4px"}},r.a.createElement(j.a,{bordered:!0,inverted:!0,color:"black",name:"caret down",disabled:this.state.prev,onClick:function(){return e.navigate(t.pokemonId-1)}})),r.a.createElement(x.a,null),r.a.createElement(O.a.Column,{width:9},r.a.createElement(S.a,{size:"mini",content:"Select",circular:!0,color:"black",compact:!0}),r.a.createElement(S.a,{size:"mini",content:"Start",circular:!0,color:"black",compact:!0}))),r.a.createElement(O.a.Column,{width:1})),r.a.createElement(O.a.Row,null))))}}]),t}(n.Component),P=Object(o.b)(function(e){return{pokemon:e.pokemon}},{fetchPokemon:function(e){return function(){var t=Object(v.a)(k.a.mark(function t(a){var n;return k.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.get("pokemon/".concat(e));case 2:n=t.sent,a({type:"FETCH_POKEMON",payload:{pokemonData:n.data,pokemonId:e}});case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}})(R),A=Object(i.c)({pokemon:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_POKEMON":return t.payload;default:return e}}}),F=Object(i.d)(A,Object(i.a)(d.a));l.a.render(r.a.createElement(o.a,{store:F},r.a.createElement(P,null)),document.querySelector("#root"))}},[[151,1,2]]]);
//# sourceMappingURL=main.14c3a7b1.chunk.js.map