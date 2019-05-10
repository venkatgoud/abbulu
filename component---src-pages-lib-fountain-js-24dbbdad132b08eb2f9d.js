(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{144:function(e,t,a){a(73),a(74),a(34),function(){var t={title_page:/^((?:title|credit|author[s]?|source|notes|draft date|date|contact|copyright)\:)/gim,scene_heading:/^((?:\*{0,3}_?)?(?:(?:int|ext|est|i\/e)[. ]).+)|^(?:\.(?!\.+))(.+)/i,scene_number:/( *#(.+)# *)/,transition:/^((?:FADE (?:TO BLACK|OUT)|CUT TO BLACK)\.|.+ TO\:)|^(?:> *)(.+)/,dialogue:/^([A-Z*_]+[0-9A-Z (._\-')]*)(\^?)?(?:\n(?!\n+))([\s\S]+)/,parenthetical:/^(\(.+\))$/,action:/^(.+)/g,centered:/^(?:> *)(.+)(?: *<)(\n.+)*/g,section:/^(#+)(?: *)(.*)/,synopsis:/^(?:\=(?!\=+) *)(.*)/,note:/^(?:\[{2}(?!\[+))(.+)(?:\]{2}(?!\[+))$/,note_inline:/(?:\[{2}(?!\[+))([\s\S]+?)(?:\]{2}(?!\[+))/g,boneyard:/(^\/\*|^\*\/)$/g,page_break:/^\={3,}$/,line_break:/^ {2}$/,emphasis:/(_|\*{1,3}|_\*{1,3}|\*{1,3}_)(.+)(_|\*{1,3}|_\*{1,3}|\*{1,3}_)/g,bold_italic_underline:/(_{1}\*{3}(?=.+\*{3}_{1})|\*{3}_{1}(?=.+_{1}\*{3}))(.+?)(\*{3}_{1}|_{1}\*{3})/g,bold_underline:/(_{1}\*{2}(?=.+\*{2}_{1})|\*{2}_{1}(?=.+_{1}\*{2}))(.+?)(\*{2}_{1}|_{1}\*{2})/g,italic_underline:/(?:_{1}\*{1}(?=.+\*{1}_{1})|\*{1}_{1}(?=.+_{1}\*{1}))(.+?)(\*{1}_{1}|_{1}\*{1})/g,bold_italic:/(\*{3}(?=.+\*{3}))(.+?)(\*{3})/g,bold:/(\*{2}(?=.+\*{2}))(.+?)(\*{2})/g,italic:/(\*{1}(?=.+\*{1}))(.+?)(\*{1})/g,underline:/(_{1}(?=.+_{1}))(.+?)(_{1})/g,splitter:/\n{2,}/g,cleaner:/^\n+|\n+$/,standardizer:/\r\n|\r/g,whitespacer:/^\t+|^ {3,}/gm},a=function(e){for(var a,s,n,p,r,i,c,l,h=function(e){return e.replace(t.boneyard,"\n$1\n").replace(t.standardizer,"\n").replace(t.cleaner,"").replace(t.whitespacer,"")}(e).split(t.splitter),u=h.length,o=[];u--;)if(a=h[u],t.title_page.test(a))for(i=0,c=(s=a.replace(t.title_page,"\n$1").split(t.splitter).reverse()).length;i<c;i++)n=s[i].replace(t.cleaner,"").split(/\:\n*/),o.push({type:n[0].trim().toLowerCase().replace(" ","_"),text:n[1].trim()});else if(s=a.match(t.scene_heading))(p=s[1]||s[2]).indexOf("  ")!==p.length-2&&((r=p.match(t.scene_number))&&(r=r[2],p=p.replace(t.scene_number,"")),o.push({type:"scene_heading",text:p,scene_number:r||void 0}));else if(s=a.match(t.centered))o.push({type:"centered",text:s[0].replace(/>|</g,"")});else if(s=a.match(t.transition))o.push({type:"transition",text:s[1]||s[2]});else if((s=a.match(t.dialogue))&&s[1].indexOf("  ")!==s[1].length-2){for(s[2]&&o.push({type:"dual_dialogue_end"}),o.push({type:"dialogue_end"}),i=0,c=(n=s[3].split(/(\(.+\))(?:\n+)/).reverse()).length;i<c;i++)(p=n[i]).length>0&&o.push({type:t.parenthetical.test(p)?"parenthetical":"dialogue",text:p});o.push({type:"character",text:s[1].trim()}),o.push({type:"dialogue_begin",dual:s[2]?"right":l?"left":void 0}),l&&o.push({type:"dual_dialogue_begin"}),l=!!s[2]}else(s=a.match(t.section))?o.push({type:"section",text:s[2],depth:s[1].length}):(s=a.match(t.synopsis))?o.push({type:"synopsis",text:s[1]}):(s=a.match(t.note))?o.push({type:"note",text:s[1]}):(s=a.match(t.boneyard))?o.push({type:"/"===s[0][0]?"boneyard_begin":"boneyard_end"}):t.page_break.test(a)?o.push({type:"page_break"}):t.line_break.test(a)?o.push({type:"line_break"}):o.push({type:"action",text:a});return o},s=function e(t,a){return e.parse(t,a)};s.parse=function(e,t,s){return function(e,t,s){void 0===s&&"function"==typeof t&&(s=t,t=void 0);var n,p,r,i=a(e),c=i.length,l={},h=[],u=[];function o(e,t){l[e]=t}for(;c--;)switch((n=i[c]).type){case"title":o(n.type,n.text),h.push("<h1>"+n.text+"</h1>"),p=n.text.replace("<br />"," ").replace(/<(?:.|\n)*?>/g,"");break;case"credit":o(n.type,n.text),h.push('<p class="credit">'+n.text+"</p>");break;case"author":case"authors":o(n.type,n.text),h.push('<p class="authors">'+n.text+"</p>");break;case"source":o(n.type,n.text),h.push('<p class="source">'+n.text+"</p>");break;case"notes":o(n.type,n.text),h.push('<p class="notes">'+n.text+"</p>");break;case"draft_date":o(n.type,n.text),h.push('<p class="draft-date">'+n.text+"</p>");break;case"date":o(n.type,n.text),h.push('<p class="date">'+n.text+"</p>");break;case"contact":o(n.type,n.text),h.push('<p class="contact">'+n.text+"</p>");break;case"copyright":o(n.type,n.text),h.push('<p class="copyright">'+n.text+"</p>");break;case"scene_heading":u.push("<h3"+(n.scene_number?' id="'+n.scene_number+'">':">")+n.text+"</h3>");break;case"transition":u.push("<h2>"+n.text+"</h2>");break;case"dual_dialogue_begin":u.push('<div class="dual-dialogue">');break;case"dialogue_begin":u.push('<div class="dialogue'+(n.dual?" "+n.dual:"")+'">');break;case"character":u.push("<h4>"+n.text+"</h4>");break;case"parenthetical":u.push('<p class="parenthetical">'+n.text+"</p>");break;case"dialogue":u.push("<p>"+n.text+"</p>");break;case"dialogue_end":case"dual_dialogue_end":u.push("</div> ");break;case"section":u.push('<p class="section" data-depth="'+n.depth+'">'+n.text+"</p>");break;case"synopsis":u.push('<p class="synopsis">'+n.text+"</p>");break;case"note":u.push("\x3c!-- "+n.text+"--\x3e");break;case"boneyard_begin":u.push("\x3c!-- ");break;case"boneyard_end":u.push(" --\x3e");break;case"action":u.push("<p>"+n.text+"</p>");break;case"centered":u.push('<p class="centered">'+n.text+"</p>");break;case"page_break":u.push("<hr />");break;case"line_break":u.push("<br />")}return r={title:p,title_info:l,html:{title_page:h.join(""),script:u.join("")},tokens:t?i.reverse():void 0},"function"==typeof s?s(r):r}(e,t,s)},s.regex=t,e.exports=s}.call(this)}}]);
//# sourceMappingURL=component---src-pages-lib-fountain-js-24dbbdad132b08eb2f9d.js.map