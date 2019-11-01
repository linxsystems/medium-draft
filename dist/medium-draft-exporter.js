/*!
 * medium-draft
 * Version - 0.5.18
 * Author - Brijesh Bittu <brijeshb42@gmail.com> (http://bitwiser.in/)
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("draft-convert"),require("react")):"function"==typeof define&&define.amd?define(["draft-convert","react"],t):"object"==typeof exports?exports.MediumDraftExporter=t(require("draft-convert"),require("react")):e.MediumDraftExporter=t(e.DraftConvert,e.React)}(this,function(e,t){return function(e){function t(r){if(n[r])return n[r].exports;var c=n[r]={i:r,l:!1,exports:{}};return e[r].call(c.exports,c,c.exports,t),c.l=!0,c.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/static/",t(t.s=3)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=t.Block={UNSTYLED:"unstyled",PARAGRAPH:"unstyled",OL:"ordered-list-item",UL:"unordered-list-item",H1:"header-one",H2:"header-two",H3:"header-three",H4:"header-four",H5:"header-five",H6:"header-six",CODE:"code-block",BLOCKQUOTE:"blockquote",PULLQUOTE:"pullquote",ATOMIC:"atomic",BLOCKQUOTE_CAPTION:"block-quote-caption",CAPTION:"caption",TODO:"todo",IMAGE:"atomic:image",BREAK:"atomic:break",VIDEO:"atomic:video"},c=t.Inline={BOLD:"BOLD",CODE:"CODE",ITALIC:"ITALIC",STRIKETHROUGH:"STRIKETHROUGH",UNDERLINE:"UNDERLINE",HIGHLIGHT:"HIGHLIGHT"},a=t.Entity={LINK:"LINK"};t.HYPERLINK="hyperlink",t.HANDLED="handled",t.NOT_HANDLED="not_handled",t.KEY_COMMANDS={addNewBlock:function(){return"add-new-block"},changeType:function(){return"changetype:"+(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"")},showLinkInput:function(){return"showlinkinput"},unlink:function(){return"unlink"},toggleInline:function(){return"toggleinline:"+(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"")},deleteBlock:function(){return"delete-block"}};t.default={Block:r,Inline:c,Entity:a}},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.setRenderOptions=t.options=t.entityToHTML=t.blockToHTML=t.styleToHTML=void 0;var r=n(2),c=function(e){return e&&e.__esModule?e:{default:e}}(r),a=n(1),l=n(0),o=t.styleToHTML=function(e){switch(e){case l.Inline.ITALIC:return c.default.createElement("em",{className:"md-inline-"+e.toLowerCase()});case l.Inline.BOLD:return c.default.createElement("strong",{className:"md-inline-"+e.toLowerCase()});case l.Inline.STRIKETHROUGH:return c.default.createElement("strike",{className:"md-inline-"+e.toLowerCase()});case l.Inline.UNDERLINE:return c.default.createElement("u",{className:"md-inline-"+e.toLowerCase()});case l.Inline.HIGHLIGHT:return c.default.createElement("span",{className:"md-inline-"+e.toLowerCase()});case l.Inline.CODE:return c.default.createElement("code",{className:"md-inline-"+e.toLowerCase()});default:return null}},i=t.blockToHTML=function(e){var t=e.type,n=t.toLowerCase();switch(t){case l.Block.H1:return c.default.createElement("h1",{className:"md-block-"+n});case l.Block.H2:return c.default.createElement("h2",{className:"md-block-"+n});case l.Block.H3:return c.default.createElement("h3",{className:"md-block-"+n});case l.Block.H4:return c.default.createElement("h4",{className:"md-block-"+n});case l.Block.H5:return c.default.createElement("h5",{className:"md-block-"+n});case l.Block.H6:return c.default.createElement("h6",{className:"md-block-"+n});case l.Block.BLOCKQUOTE_CAPTION:case l.Block.CAPTION:return{start:'<p class="md-block-'+n+'"><caption>',end:"</caption></p>"};case l.Block.IMAGE:var r=e.data;return{start:'<figure class="md-block-image'+(e.text.length>0?" md-block-image-has-caption":"")+'"><img src="'+r.src+'" alt="'+e.text+'" /><figcaption class="md-block-image-caption">',end:"</figcaption></figure>"};case l.Block.VIDEO:var a=e.data;return{start:'<figure class="md-block-video'+(e.text.length>0?" md-block-image-has-caption":"")+'"<video width="400" controls src="'+a.src+'" /><figcaption class="md-block-video-caption">',end:"</figcaption></figure>"};case l.Block.ATOMIC:return{start:'<figure class="md-block-'+n+'">',end:"</figure>"};case l.Block.TODO:var o=e.data.checked||!1,i="",u="";return o?(i='<input type=checkbox disabled checked="checked" />',u="md-block-todo-checked"):(i="<input type=checkbox disabled />",u="md-block-todo-unchecked"),{start:'<div class="md-block-'+t+" "+u+'">'+i+"<p>",end:"</p></div>"};case l.Block.BREAK:return c.default.createElement("hr",{className:"md-block-"+t});case l.Block.BLOCKQUOTE:return c.default.createElement("blockquote",{className:"md-block-"+t});case l.Block.OL:return{element:c.default.createElement("li",null),nest:c.default.createElement("ol",{className:"md-block-"+t})};case l.Block.UL:return{element:c.default.createElement("li",null),nest:c.default.createElement("ul",{className:"md-block-"+t})};case l.Block.UNSTYLED:return e.text.length<1?c.default.createElement("p",{className:"md-block-"+t},c.default.createElement("br",null)):c.default.createElement("p",{className:"md-block-"+t});case l.Block.CODE:return{element:c.default.createElement("pre",{className:"md-block-"+t}),nest:c.default.createElement("div",{className:"md-block-code-container"})};default:return null}},u=t.entityToHTML=function(e,t){return e.type===l.Entity.LINK?c.default.createElement("a",{className:"md-inline-link",href:e.data.url,target:"_blank",rel:"noopener noreferrer"}):t},s=t.options={styleToHTML:o,blockToHTML:i,entityToHTML:u};t.setRenderOptions=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s;return(0,a.convertToHTML)(e)};t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s;return(0,a.convertToHTML)(t)(e)}}])});