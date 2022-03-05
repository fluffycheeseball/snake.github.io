(this["webpackJsonpreact-snake"]=this["webpackJsonpreact-snake"]||[]).push([[0],{15:function(e,t,n){e.exports=n(22)},20:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var r,a=n(0),i=n(9),o=n(12),c=n(13),s=n(1),l=n(10),u=n(6),d=n(14),v=n(11),f=n(7),m=n.n(f),h=(n(20),n(2)),g=function(e,t){return Math.floor(Math.random()*(t-e+1))+e},b=function(e,t){var n=0;return function(){var r;(r=n,Date.now()-r<e)||(t(),n=Date.now())}},y=function(e){return e[0]},p=function(e){return e[e.length-1]};function w(e,t,n,r,a,i,o){var c=!(arguments.length>7&&void 0!==arguments[7])||arguments[7];if("undefined"===typeof c&&(c=!0),"undefined"===typeof i&&(i=5),"number"===typeof i)i={tl:i,tr:i,br:i,bl:i};else{var l={tl:0,tr:0,br:0,bl:0};i=Object.keys(l).reduce((function(e,t){return Object(s.a)(Object(s.a)({},e),{},Object(h.a)({},t,e[t]||l[t]))}),i)}e.beginPath(),e.moveTo(t+i.tl,n),e.lineTo(t+r-i.tr,n),e.quadraticCurveTo(t+r,n,t+r,n+i.tr),e.lineTo(t+r,n+a-i.br),e.quadraticCurveTo(t+r,n+a,t+r-i.br,n+a),e.lineTo(t+i.bl,n+a),e.quadraticCurveTo(t,n+a,t,n+a-i.bl),e.lineTo(t,n+i.tl),e.quadraticCurveTo(t,n,t+i.tl,n),e.closePath(),o&&e.fill(),c&&e.stroke()}!function(e){e.up="up",e.right="right",e.left="left",e.down="down"}(r||(r={}));var k={up:r.down,right:r.left,left:r.right,down:r.up},O=function(e){return function(t){return e.x===t.x&&e.y===t.y}};function E(e,t){return e<0?t.board/t.pixel-1:e*t.pixel>=t.board?0:e}function x(e,t,n){var a,i=r.up,o=r.down,c=r.right,l=r.left,u=(a={},Object(h.a)(a,i,{y:E(t.y-1,n)}),Object(h.a)(a,o,{y:E(t.y+1,n)}),Object(h.a)(a,c,{x:E(t.x+1,n)}),Object(h.a)(a,l,{x:E(t.x-1,n)}),a);return t.direction!==e&&(t.isCorner=!0,t.radius={tl:e===c&&t.direction===i||e===o&&t.direction===l?n.pixel/2:0,tr:e===o&&t.direction===c||e===l&&t.direction===i?n.pixel/2:0,br:e===l&&t.direction===o||e===i&&t.direction===c?n.pixel/2:0,bl:e===i&&t.direction===l||e===c&&t.direction===o?n.pixel/2:0}),Object(s.a)(Object(s.a)(Object(s.a)({},t),u[e]),{},{isCorner:!1,radius:0})}var j=function(e,t){return{value:t[g(0,t.length-1)],y:g(1,e),x:g(1,e)}},S=function(e,t,n){for(var r=j(t,n);e.some(O(r));)r=j(t,n);return r};var C="react-snake-best-score",N=Math.floor(30)-2,P=["\ud83c\udf51","\ud83c\udf4e","\ud83c\udf4f","\ud83c\udf50","\ud83c\udf53","\ud83e\udd5d"],T=[{x:5,y:1,direction:"right",isCorner:!1,radius:0},{x:4,y:1,direction:"right",isCorner:!1,radius:0},{x:3,y:1,direction:"right",isCorner:!1,radius:0}],A={snake:T,moves:[r.right],fruit:S(T,N,P),isPlaying:!1,isGameOver:!1,score:0,bestScore:JSON.parse(localStorage.getItem(C)||"0")},G=0,D=function(e){Object(d.a)(n,e);var t=Object(v.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state=A,a.handleKeyUp=function(e){var t=e.code;if("Space"===t&&a.state.isPlaying)a.isPaused||a.togglePlay();else{var n=function(e){switch(e){case"KeyW":case"ArrowUp":return r.up;case"KeyS":case"ArrowDown":return r.down;case"KeyA":case"ArrowLeft":return r.left;case"KeyD":case"ArrowRight":return r.right;default:return null}}(t);n&&a.setDirection(n)}},a.handleJoyStickClick=function(e){return function(t){t.preventDefault(),a.setDirection(e)}},a.drawPixel=function(e,t,n){var i=e.direction,o=r,c=o.up,s=o.down,l=o.left,u=o.right,d=0===t,v=t===n.length-1;return d?w(a.ctx,11*e.x,11*e.y,11,11,{tl:i===c||i===l?5.5:0,tr:i===c||i===u?5.5:0,bl:i===s||i===l?5.5:0,br:i===s||i===u?5.5:0},!0,!1):e.isCorner&&"object"===typeof e.radius?w(a.ctx,11*e.x,11*e.y,11,11,e.radius,!0,!1):v?w(a.ctx,11*e.x,11*e.y,11,11,{tl:i===s||i===u?5.5:0,tr:i===s||i===l?5.5:0,bl:i===c||i===u?5.5:0,br:i===c||i===l?5.5:0},!0,!1):void a.ctx.fillRect(11*e.x,11*e.y,11,11)},a.draw=function(){a.clear(),a.state.snake.forEach((function(e,t){var n=!t;a.ctx.fillStyle=n?"#011627":t%2?"#E71D36":"#FF9F1C",a.drawPixel(e,t,a.state.snake)})),a.ctx.font="".concat(11*1.4,"px Segoe UI Emoji"),a.ctx.fillText(a.state.fruit.value,11*a.state.fruit.x-6,11*a.state.fruit.y+12)},a.play=function(){a.state.isPlaying&&!a.state.isGameOver&&(a.move(),a.draw()),G=window.requestAnimationFrame(a.play)},a.togglePlay=function(){!a.state.isGameOver&&G&&a.setState({isPlaying:!a.state.isPlaying})},a.clear=function(){return a.ctx.clearRect(0,0,330,330)},a.reset=function(){a.setState(Object(s.a)(Object(s.a)({},A),{},{bestScore:JSON.parse(localStorage.getItem(C)||"0")}),a.draw)},a.stop=function(){window.cancelAnimationFrame(G),G=0},a.start=function(){G&&a.stop(),a.setState({isPlaying:!0},a.play)},a.move=function(){a.setState((function(e){var t=e.moves.shift(),n=Object(c.a)(e.snake),r=t||y(e.snake).direction;n.unshift(Object(s.a)(Object(s.a)({},x(r,y(e.snake),{board:330,pixel:11})),{},{direction:r})),n.pop();var i=Object(o.a)(n),l=i[0],u=i.slice(1),d=O(l);if(u.some(d))return a.stop(),Object(s.a)(Object(s.a)({},e),{},{snake:n,move:t,isPlaying:!1,isGameOver:!0});if(d(e.fruit)){var v=p(n);n.push(x(k[v.direction],v,{board:330,pixel:11}));var f=e.score+1,m=f>e.bestScore?f:e.bestScore;return f>=m&&localStorage.setItem(C,JSON.stringify(f)),Object(s.a)(Object(s.a)({},e),{},{snake:n,move:t,score:f,bestScore:m,fruit:S(n,N,P)})}return Object(s.a)(Object(s.a)({},e),{},{snake:n,move:t})}))},a.move=b(500,a.move),a.draw=b(1/60*1e3,a.draw),document.addEventListener("keyup",a.handleKeyUp),a}return Object(u.a)(n,[{key:"ctx",get:function(){return document.getElementById("canvas").getContext("2d")}},{key:"isPaused",get:function(){return!this.state.isPlaying&&!this.state.isGameOver}}]),Object(u.a)(n,[{key:"componentWillUnmount",value:function(){document.removeEventListener("keyup",this.handleKeyUp),this.stop()}},{key:"componentDidMount",value:function(){this.draw()}},{key:"render",value:function(){return a.createElement("div",{className:"game"},a.createElement("div",{className:"canvas-container",style:{width:330,height:330}},this.renderOverlay(),a.createElement("div",{onClick:this.togglePlay},a.createElement("canvas",{id:"canvas",width:330,height:330})),a.createElement("div",{className:"under-canvas"},"Jude SNAKE 1987"),this.renderControls()))}},{key:"renderOverlay",value:function(){return!this.state.isGameOver&&this.state.isPlaying?null:a.createElement("div",null,a.createElement("div",{className:"canvas-overlay"}),a.createElement("div",{className:"overlay-message"},!this.state.isGameOver&&a.createElement("img",{src:"mstile-150x150.png",alt:"snake logo",className:"snake-img"}),a.createElement("div",null,this.state.isGameOver?"GAME OVER":"REACT SNAKE"),a.createElement("div",null,this.state.isGameOver?a.createElement("button",{className:"overlay-button",onClick:this.reset},"NEW GAME"):a.createElement("button",{className:"overlay-button",onClick:this.start},G?"RESUME":"START"))))}},{key:"renderControls",value:function(){var e=this,t=Object.keys(r),n=this.state.score>=this.state.bestScore;return a.createElement("div",{className:"controls"},a.createElement("div",null,a.createElement("div",{className:m()("score",{"score--best":n}),style:{background:this.state.isPlaying?"#2EC4B6":"#accac7"}},this.state.score),a.createElement("div",{className:m()("best-score",{"best-score--beaten":n})},a.createElement("span",{className:"best-score-label"},"best: "),a.createElement("span",null,this.state.bestScore))),a.createElement("div",{className:"directional-container"},t.map((function(t){return a.createElement("button",{key:t,className:"control ".concat(t),disabled:!e.state.isPlaying,onClick:e.handleJoyStickClick(t)},a.createElement("div",{className:"control-text"},"\u2191"))}))))}},{key:"setDirection",value:function(e){var t=p(this.state.moves)||y(this.state.snake).direction;t===e||t===k[e]||this.setState((function(t){return{moves:t.moves.concat(e)}}),this.move)}}]),n}(a.Component),K=(n(21),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function J(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.render(a.createElement(D,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/react-snake",window.location.toString()).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/react-snake","/service-worker.js");K?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):J(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):J(e)}))}}()}},[[15,1,2]]]);
//# sourceMappingURL=main.33b03441.chunk.js.map