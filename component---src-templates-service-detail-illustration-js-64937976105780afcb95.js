(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{167:function(e,t,n){"use strict";n.r(t);n(175),n(176),n(51);var a=n(0),i=n.n(a),o=n(185),r=n(195),l=n(243),c=n(235),d=n(236),s=n(202),u=n(239),m=n(170),p=n(169),f=n(173),g=Object(p.default)(f.a).withConfig({displayName:"tabbed-images-sectionstyled__TextColumn",componentId:"mxnlg9-0"})(["margin-bottom:20px;"]),h=n(181),y=n(226);var b=function(e){var t=e.illustration,n=t.title,a=t.images;return i.a.createElement(h.a,null,i.a.createElement(g,{width:1},i.a.createElement(m.a,{text:n,type:"h6"})),i.a.createElement(y.a,{images:a}))};n.d(t,"query",function(){return x});var x="3802854497";t.default=function(e){var t=e.data,n=t.overviewPage,a=t.page,p=t.steps,f=a.pageTitle,g=a.pageDescription,h=a.slug,y=a.title,x=a.body,v=a.guaranteeTitle,w=a.guaranteeBody,_=a.features,C=a.featuresTitle,k=a.prices,E=a.buyText,I=a.buyLink,N=a.detailImages,j=a.headerIllustration,S=a.illustrations,O=a.previousLink,T=a.previousTitle,L=n.highlightedKnowledgeStep,z=n.whyTitle,q=n.whyBody,B=n.whyImage,R=n.whyLinkText,P=n.whyLinkTo,F=o.a.processData(p);return i.a.createElement(r.a,{pageTitle:f,pageDescription:g,pagePath:h},i.a.createElement(l.a,{backbuttonText:T,backbuttonLink:O,subtitle:y,body:i.a.createElement(m.a,{type:"body",text:x}),features:_,featuresTitle:C,prices:k,buyText:E,buyLink:I,images:N,headerImage:j}),i.a.createElement(d.a,null),i.a.createElement(c.a,{title:v,body:w}),S&&S.map(function(e,t){return i.a.createElement(b,{key:t.toString(),illustration:e})}),i.a.createElement(u.a,{title:z,summary:q,image:B,text:R,url:P}),i.a.createElement(s.a,{highlightedStep:L,steps:F}))}},181:function(e,t,n){"use strict";var a=n(169),i=n(177),o=Object(a.default)(i.a).withConfig({displayName:"section-containerstyled__StyledRow",componentId:"sc-1oln0m-0"})(["background-color:",";padding-top:",";padding-bottom:",";"],function(e){var t=e.theme,n=e.backgroundColor;return t.colors[n]},function(e){return e.noTopPadding?"":"80px"},function(e){return e.noBottomPadding?"":"104px"});t.a=o},184:function(e,t,n){"use strict";var a=n(0),i=n.n(a),o=n(171),r=n.n(o),l=n(169),c=n(172),d=n(170);function s(){var e=r()(["\n    margin-bottom: 20px;\n  "]);return s=function(){return e},e}function u(){var e=r()(["\n    margin-bottom: 20px;\n  "]);return u=function(){return e},e}function m(){var e=r()(["\n    margin-bottom: 20px;\n  "]);return m=function(){return e},e}var p=l.default.div.withConfig({displayName:"stepstyled__Container",componentId:"j6dywz-0"})([""]),f=Object(l.default)(d.a).withConfig({displayName:"stepstyled__Title",componentId:"j6dywz-1"})(["margin-bottom:5px;",";"],c.a.phone(m())),g=Object(l.default)(d.a).withConfig({displayName:"stepstyled__Subtitle",componentId:"j6dywz-2"})(["margin-bottom:15px;",";"],c.a.phone(u())),h=Object(l.default)(d.a).withConfig({displayName:"stepstyled__Body",componentId:"j6dywz-3"})(["margin-bottom:15px;",";"],c.a.phone(s())),y=n(179);t.a=function(e){var t=e.className,n=e.title,a=e.subtitle,o=e.body,r=e.slug,l=e.index,c=e.idPostFix,d=e.onClick,s=e.selected;return i.a.createElement(p,{className:t,id:a+"-"+c,onClick:d},n&&i.a.createElement(f,{type:"h6",text:l+1+". "+n,color:s?"orange":"grey4"}),i.a.createElement(g,{type:"h1",tag:"h3",text:a}),i.a.createElement(h,{type:"body",text:o}),r&&i.a.createElement(y.a,{text:"探索更多",to:r,type:"medium",chevron:!0}))}},188:function(e,t,n){"use strict";n(175),n(176),n(51),n(213);var a=n(0),i=n.n(a),o=n(169),r=n(170),l=o.default.ul.withConfig({displayName:"checkliststyled__Ul",componentId:"sc-1uxbkw6-0"})(["",""],function(e){return e.dots&&"list-style: disc !important;"}),c=o.default.li.withConfig({displayName:"checkliststyled__Li",componentId:"sc-1uxbkw6-1"})([""," &:not(:last-child){margin-bottom:12px;}"],function(e){return!e.dots&&"display: flex;"}),d=Object(o.default)(r.a).withConfig({displayName:"checkliststyled__StyledText",componentId:"sc-1uxbkw6-2"})(["flex:1;margin-left:10px;span{font-size:13px;line-height:20px;display:block;margin-top:5px;}"]),s=Object(o.default)(r.a).withConfig({displayName:"checkliststyled__Title",componentId:"sc-1uxbkw6-3"})(["margin-bottom:10px;"]),u=n(178);t.a=function(e){var t=e.className,n=e.items,a=e.small,o=e.title,r=e.dots;return i.a.createElement("div",{className:t},o&&i.a.createElement(s,{text:o,type:"bodySm"}),n&&i.a.createElement(l,{dots:r},n.map(function(e,t){return i.a.createElement(c,{dots:r,key:t.toString()},!r&&i.a.createElement(u.a,{checklist:!0,size:a?"small":"medium",type:"checkmark",color:"orange"}),i.a.createElement(d,{type:a?"bodyXs":"bodySm",dangerouslySetInnerHTML:{__html:e}}))})))}},190:function(e,t,n){"use strict";var a=n(0),i=n.n(a),o=n(169),r=n(170),l=Object(o.default)(r.a).withConfig({displayName:"pricestyled__Title",componentId:"yail1g-0"})(["display:block;"]),c=Object(o.default)(r.a).withConfig({displayName:"pricestyled__StyledTextPrice",componentId:"yail1g-1"})(["display:flex;align-items:flex-end;span{display:block;font-size:13px;line-height:1;margin-left:5px;}"]);t.a=function(e){var t=e.className,n=e.ids,a=e.text,o=e.price,r="",d="";return"0"===o?r="免费":(r="$"+o,d=i.a.createElement(l,{text:a||"起价为",type:"bodyXs",className:n&&n.labelId})),i.a.createElement("div",{className:t},d,i.a.createElement(c,{className:n&&n.priceId,color:"orange",tag:"div",text:r,type:"h1"}))}},191:function(e,t,n){"use strict";var a=n(0),i=n.n(a),o=n(169).default.div.withConfig({displayName:"circle-iconstyled__Container",componentId:"lqjori-0"})(["background-color:",";border-radius:50%;display:flex;height:60px;width:60px;> *{margin:auto;}"],function(e){var t=e.theme;return e.selected?t.colors.orange:t.colors.grey2}),r=n(178);t.a=function(e){var t=e.className,n=e.onClick,a=e.type,l=e.selected;return i.a.createElement(o,{className:t,onClick:n,selected:l},i.a.createElement(r.a,{type:a,color:l?"white":"lightBlue",size:"large"}))}},193:function(e,t,n){"use strict";var a=n(0),i=n.n(a),o=n(171),r=n.n(o),l=n(169),c=n(172),d=n(170),s=n(179),u=n(180);function m(){var e=r()(["\n    margin-right: 4%;\n    margin-top: -16%;\n    width: 37%;\n  "]);return m=function(){return e},e}function p(){var e=r()(["\n    margin-right: -2%;\n    margin-top: -9%;\n    width: 41%;\n  "]);return p=function(){return e},e}var f=Object(l.default)(u.a).withConfig({displayName:"headingstyled__BackgroundImage",componentId:"sc-321456-0"})(["margin-top:-7%;margin-right:5%;position:absolute;right:0;top:0;z-index:-1;width:31%;",";",";"],c.a.tablet(p()),c.a.phone(m())),g=(Object(l.default)(d.a).withConfig({displayName:"headingstyled__BoldBodyText",componentId:"sc-321456-1"})(["font-weight:bold;"]),Object(l.default)(d.a).withConfig({displayName:"headingstyled__Subtitle",componentId:"sc-321456-2"})(["max-width:540px;margin-bottom:16px;"])),h=Object(l.default)(d.a).withConfig({displayName:"headingstyled__Title",componentId:"sc-321456-3"})(["height:24px;max-width:540px;margin-bottom:5px;"]),y=(Object(l.default)(d.a).withConfig({displayName:"headingstyled__BodyText",componentId:"sc-321456-4"})(["max-width:430px;"]),Object(l.default)(s.a).withConfig({displayName:"headingstyled__StyledLink",componentId:"sc-321456-5"})(["height:24px;margin-bottom:5px;"]));t.a=function(e){var t=e.body,n=e.title,a=e.subtitle,o=e.backbuttonLink,r=e.backbuttonText,l=e.className,c=e.image,d=e.subtitleHeading;return i.a.createElement("div",{className:l},c&&i.a.createElement(f,{src:"/images/"+c,alt:"illustration"}),!r&&n&&i.a.createElement(h,{tag:"h1",type:"h6",text:n,color:"orange"}),r&&i.a.createElement(y,{tag:d?"h2":"h1",to:o,text:r||"返回",color:"orange",reversedChevron:!0}),i.a.createElement(g,{tag:!n&&!r||d?"h1":"h2",type:"h1Xl",text:a}),t)}},194:function(e,t,n){"use strict";n(37),n(175),n(176),n(82),n(52),n(84),n(218),n(51);var a=n(174),i=n.n(a),o=n(0),r=n.n(o),l=n(169),c=n(221),d=l.default.span.withConfig({displayName:"carouselstyled__Dot",componentId:"sc-1ac1e0q-0"})(["background-color:",";border-radius:50%;cursor:pointer;display:inline-block;height:14px;width:14px;&:not(:last-child){margin-right:14px;}"],function(e){var t=e.selected,n=e.theme;return t?n.colors.orange:n.colors.grey2}),s=Object(l.default)(c.a).withConfig({displayName:"carouselstyled__StyledCarousel",componentId:"sc-1ac1e0q-1"})([".slider-control-bottomcenter{margin-top:20px;top:100%;}"]);t.a=function(e){var t=e.children,n=e.activeStep,a=i()(e,["children","activeStep"]);return r.a.createElement(s,Object.assign({slideIndex:n||0,renderBottomCenterControls:function(e){var t=e.currentSlide,n=e.goToSlide,a=e.slideCount;return r.a.createElement(r.a.Fragment,null,Array.from(Array(a).keys()).map(function(e){return r.a.createElement(d,{key:e.toString(),onClick:function(){return n(e)},selected:e===t})}))},renderCenterLeftControls:null,renderCenterRightControls:null,wrapAround:!0},a),t)}},196:function(e,t,n){"use strict";var a=n(174),i=n.n(a),o=n(0),r=n.n(o),l=n(171),c=n.n(l),d=n(169),s=n(172),u=n(197);function m(){var e=c()(["\n    padding: 80px 0;\n  "]);return m=function(){return e},e}function p(){var e=c()(["\n    background-size: cover;\n  "]);return p=function(){return e},e}var f=Object(d.default)(u.a).withConfig({displayName:"header-containerstyled__StyledHeaderContainer",componentId:"sc-1q1mn87-0"})(["background-color:",";background-image:",";background-position:center;background-repeat:no-repeat;background-size:contain;padding:72px 0;overflow:hidden;position:relative;z-index:0;",";",";"],function(e){var t=e.backgroundColor,n=e.image,a=e.theme;return n?"#fee2cd":a.colors[t]},function(e){var t=e.image;return t?"url('/images/"+t+"')":""},s.a.desktop(p()),s.a.phone(m()));t.a=function(e){var t=e.children,n=i()(e,["children"]);return r.a.createElement(f,n,t)}},197:function(e,t,n){"use strict";var a=n(174),i=n.n(a),o=n(0),r=n.n(o),l=n(169),c=n(201),d=Object(l.default)(c.Flex).withConfig({displayName:"containerstyled__StyledContainer",componentId:"sc-18tmjwr-0"})(["flex-direction:column;"]);t.a=function(e){var t=e.children,n=i()(e,["children"]);return r.a.createElement(d,n,t)}},198:function(e,t,n){"use strict";n(37),n(189);var a=n(174),i=n.n(a),o=n(0),r=n.n(o),l=n(186),c=n(169),d=n(178),s=c.default.button.withConfig({displayName:"buttonstyled__StyledButton",componentId:"sc-1t1uv2u-0"})(["align-items:center;background-color:",";border:none;cursor:pointer;display:flex;justify-content:space-between;outline:none;padding:6px 12px 6px 15px;user-select:none;width:",";> *{vertical-align:middle;}&:hover,&:active,&:focus{background-color:",";}"],function(e){return e.theme.colors.petrolBlue},function(e){return e.fullWidth?"100%":""},function(e){return e.theme.colors.orange}),u=Object(c.default)(d.a).withConfig({displayName:"buttonstyled__Chevron",componentId:"sc-1t1uv2u-1"})(["margin-left:6px;"]),m=n(170);t.a=function(e){var t=e.text,n=e.link,a=i()(e,["text","link"]);return/^\/(?!\/)/.test(n)?r.a.createElement(l.Link,{to:n},r.a.createElement(s,Object.assign({type:"button"},a),r.a.createElement(m.a,{text:t,type:"body",as:"span",color:"white"}),r.a.createElement(u,{type:"chevronRight",color:"white"}))):r.a.createElement("a",{href:n},r.a.createElement(s,Object.assign({type:"button"},a),r.a.createElement(m.a,{text:t,type:"body",as:"span",color:"white"}),r.a.createElement(u,{type:"chevronRight",color:"white"})))}},202:function(e,t,n){"use strict";var a=n(0),i=n.n(a),o=n(177),r=(n(37),n(175),n(176),n(51),n(8)),l=n.n(r),c=n(171),d=n.n(c),s=n(169),u=n(172),m=n(184),p=n(191),f=n(173);function g(){var e=d()(["\n    &:last-child {\n      padding-bottom: 70px;\n    }\n  "]);return g=function(){return e},e}function h(){var e=d()(["\n    display: none;\n  "]);return h=function(){return e},e}function y(){var e=d()(["\n      flex-direction: column;\n      display: ",";\n    "]);return y=function(){return e},e}function b(e){var t=e.visible;return Object(s.css)(["display:",";",";"],t[1]?"flex":"none",u.a.phone(y(),t[0]?"flex":"none"))}var x=s.default.div.withConfig({displayName:"steps-summarystyled__Container",componentId:"u1aod4-0"})(["background-color:",";display:flex;flex-direction:row;padding-bottom:90px;padding-top:85px;"],function(e){return e.theme.colors.white}),v=Object(s.default)(f.a).withConfig({displayName:"steps-summarystyled__DesktopColumn",componentId:"u1aod4-1"})(["",";"],u.a.phone(h())),w=Object(s.default)(p.a).withConfig({displayName:"steps-summarystyled__Icon",componentId:"u1aod4-2"})(["",";flex-shrink:0;position:relative;cursor:pointer;"],b),_=s.default.div.withConfig({displayName:"steps-summarystyled__StepContainer",componentId:"u1aod4-3"})(["display:flex;position:relative;&:not(:last-child){padding-bottom:70px;}",";"],u.a.phone(g())),C=Object(s.default)(m.a).withConfig({displayName:"steps-summarystyled__StyledStep",componentId:"u1aod4-4"})(["",";cursor:pointer;margin-left:25px;padding-top:15px;width:100%;"],b),k=s.default.div.withConfig({displayName:"steps-summarystyled__Line",componentId:"u1aod4-5"})(["background-color:",";height:100%;margin-left:29px;position:absolute;width:2px;",":last-child &{display:none;}"],function(e){return e.theme.colors.grey2},_),E=["search","write","submit","share"],I=function(e){function t(t){var n;n=e.call(this,t)||this;var a=t.highlightedStep;return n.state={currentStep:a||0},n}return l()(t,e),t.prototype.render=function(){var e=this,t=this.props.steps,n=this.state.currentStep;return i.a.createElement(x,null,i.a.createElement(f.a,{width:.5},t.map(function(t,a){return i.a.createElement(_,{key:a.toString()},i.a.createElement(k,null),i.a.createElement(w,{onClick:function(){return e.setState({currentStep:a})},type:E[a],selected:n===a,visible:[!0,!0]}),i.a.createElement(C,{onClick:function(){return e.setState({currentStep:a})},selected:n===a,index:a,title:t.title,idPostFix:"summary-desktop",visible:[!1,!0]}),i.a.createElement(C,Object.assign({onClick:function(){return e.setState({currentStep:a})},selected:!0,index:a,idPostFix:"summary-mobile",visible:[!0,!1]},t)))})),i.a.createElement(v,{width:.5},i.a.createElement(m.a,{subtitle:t[n].subtitle,body:t[n].body,slug:t[n].slug,idPostFix:"summary2"})))},t}(i.a.Component);t.a=function(e){var t=e.highlightedStep,n=e.steps;return i.a.createElement(o.a,null,i.a.createElement(I,{highlightedStep:t,steps:n}))}},204:function(e,t,n){"use strict";var a=n(0),i=n.n(a),o=n(171),r=n.n(o),l=n(169),c=n(172),d=n(170),s=n(173),u=n(179),m=n(205),p=n(180);function f(){var e=r()(["\n    align-items: flex-start;\n    flex-direction: column;\n  "]);return f=function(){return e},e}function g(){var e=r()(["\n    width:100%;\n  "]);return g=function(){return e},e}function h(){var e=r()(["\n    padding-left: 5%;\n  "]);return h=function(){return e},e}var y=l.default.div.withConfig({displayName:"guaranteestyled__BadgeContainer",componentId:"s1qkkf-0"})(["align-items:center;display:flex;"]),b=Object(l.default)(p.a).withConfig({displayName:"guaranteestyled__Badge",componentId:"s1qkkf-1"})(["padding-right:5%;",";"],c.a.phone(h())),x=Object(l.default)(m.a).withConfig({displayName:"guaranteestyled__StyledLine",componentId:"s1qkkf-2"})(["margin:12px 0;height:50%;"]),v=(Object(l.default)(u.a).withConfig({displayName:"guaranteestyled__StyledLink",componentId:"s1qkkf-3"})(["padding-left:0.5em;display:inline;"]),Object(l.default)(d.a).withConfig({displayName:"guaranteestyled__Title",componentId:"s1qkkf-4"})(["padding-right:20px;"])),w=Object(l.default)(d.a).withConfig({displayName:"guaranteestyled__BodyText",componentId:"s1qkkf-5"})(["padding-left:8px;padding-right:8px;",";"],c.a.phone(g())),_=Object(l.default)(s.a).withConfig({displayName:"guaranteestyled__ColumnStyled",componentId:"s1qkkf-6"})(["flex-direction:row;align-items:center;",";"],c.a.phone(f()));t.a=function(e){var t=e.title,n=e.body;return i.a.createElement(i.a.Fragment,null,t?i.a.createElement(_,{width:4/12,px:0},i.a.createElement(y,null,i.a.createElement(b,{src:"/images/badge.svg",alt:"badge"}),i.a.createElement(v,{text:t,tag:"h2",type:"h6",color:"orange"}))):"",i.a.createElement(_,{width:8/12,px:0},t?i.a.createElement(x,{vertical:[!1,!0]}):"",i.a.createElement(w,{type:"bodySm",color:"grey4",dangerouslySetInnerHTML:{__html:n}})))}},206:function(e,t,n){"use strict";n(37),n(175),n(176),n(51);var a=n(174),i=n.n(a),o=(n(215),n(8)),r=n.n(o),l=n(0),c=n.n(l),d=n(219),s=n(225),u=n(171),m=n.n(u),p=n(169),f=n(172),g=n(170),h=n(178);function y(){var e=m()(["\n    margin-bottom: 0px;\n    padding-bottom: 5px;\n    padding-top: 8px;\n  "]);return y=function(){return e},e}function b(){var e=m()(["\n    justify-content: start;\n  "]);return b=function(){return e},e}var x,v=p.default.div.withConfig({displayName:"tabsstyled__ChevronContainer",componentId:"sc-1fbzq2e-0"})(["position:absolute;",";",";top:0;z-index:3;height:100%;align-items:center;justify-content:center;display:flex;height:100%;width:40px;"],function(e){return e.right&&"right: 0; background-image: linear-gradient(to left, #ffffff 20%, #ffffff00)"},function(e){return e.left&&"left: 0; background-image: linear-gradient(to right, #ffffff 20%, #ffffff00)"}),w=p.default.div.withConfig({displayName:"tabsstyled__TabsContainer",componentId:"sc-1fbzq2e-1"})(["width:100%;display:flex;flex-direction:row;justify-content:center;overflow:-moz-scrollbars-none;overflow-x:auto;overflow-y:hidden;-ms-overflow-style:none;&::-webkit-scrollbar{display:none;}",";"],f.a.tablet(b())),_=p.default.div.withConfig({displayName:"tabsstyled__TabContainer",componentId:"sc-1fbzq2e-2"})(["display:inline-block;flex-shrink:0;cursor:pointer;z-index:2;&:not(:last-child){margin-right:48px;}margin-bottom:0px;:first-child{margin-left:24px;}:last-child{padding-right:24px;}"]),C=Object(p.default)(g.a).withConfig({displayName:"tabsstyled__Tab",componentId:"sc-1fbzq2e-3"})(["border-bottom:",";margin-bottom:0;padding-bottom:9px;padding-top:10px;a{color:",";}",";"],function(e){return e.active&&"2px solid"},function(e){return e.theme.colors.petrolBlue},f.a.phone(y())),k=Object(p.default)(h.a).withConfig({displayName:"tabsstyled__Chevron",componentId:"sc-1fbzq2e-4"})(["flex-shrink:0;display:block;cursor:pointer;"]),E=Object(p.default)(k).withConfig({displayName:"tabsstyled__StyledChevron",componentId:"sc-1fbzq2e-5"})([""]),I=function(e){function t(t){var n;return(n=e.call(this,t)||this).onScroll=function(){var e=x,t=e.offsetWidth,a=e.scrollLeft,i=a<5,o=a>e.scrollWidth-t-5;n.setState({scrolledLeft:i,scrolledRight:o})},n.scrollTabs=function(e){d.a.to(n.tabsContainerRef.current,1,{scrollTo:{x:n.tabsContainerRef.current.scrollLeft+70*e},ease:"Power2.easeOut"})},n.tabsContainerRef=c.a.createRef(),n.state={overflowed:!0,scrolledLeft:!0,scrolledRight:!1},n}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){console.log(s.a),x=this.tabsContainerRef.current,this.setState({overflowed:x.scrollWidth>x.clientWidth}),window.addEventListener("resize",this.checkOverflow.bind(this))},n.checkOverflow=function(){this.setState({overflowed:x.scrollWidth>x.clientWidth})},n.render=function(){var e=this,t=this.props,n=t.activeIndex,a=t.items,o=t.onClick,r=i()(t,["activeIndex","items","onClick"]),l=this.state,d=l.overflowed,s=l.scrolledLeft,u=l.scrolledRight;return c.a.createElement(c.a.Fragment,null,!s&&c.a.createElement(v,{fade:!s,left:!0},c.a.createElement(E,{type:"chevronRight",color:"grey3",size:"medium",rotation:180,onClick:function(){return e.scrollTabs(-1)}})),c.a.createElement(w,Object.assign({onScroll:this.onScroll,ref:this.tabsContainerRef},r),a.map(function(e,t){return c.a.createElement(_,{key:t.toString()},c.a.createElement(C,{onClick:function(){return o&&o(t)},active:n===t,text:e,type:"bodySm",color:"grey3"}))})),!u&&d&&c.a.createElement(v,{fade:!u,right:!0},!u&&c.a.createElement(E,{type:"chevronRight",color:"grey3",size:"medium",onClick:function(){return e.scrollTabs(1)}})))},t}(c.a.Component);t.a=I},226:function(e,t,n){"use strict";n(51);var a=n(8),i=n.n(a),o=n(171),r=n.n(o),l=n(0),c=n.n(l),d=n(169),s=n(172),u=n(180),m=n(173),p=n(206);function f(){var e=r()(["\n    padding: 0;\n  "]);return f=function(){return e},e}var g=Object(d.default)(m.a).withConfig({displayName:"tabbed-images__TabsColumn",componentId:"sc-9icffo-0"})(["align-items:center;background-color:",";border-bottom:2px solid ",";flex-direction:row;position:relative;",";"],function(e){var t=e.transparent,n=e.theme;return!t&&n.colors.grey1},function(e){return e.theme.colors.grey2},s.a.phone(f())),h=Object(d.default)(m.a).withConfig({displayName:"tabbed-images__ImageColumn",componentId:"sc-9icffo-1"})(["align-items:center;background-color:",";margin-top:",";"],function(e){var t=e.transparent,n=e.theme;return!t&&n.colors.grey1},function(e){return e.transparent&&"24px"}),y=Object(d.default)(u.a).withConfig({displayName:"tabbed-images__StyledImage",componentId:"sc-9icffo-2"})(["max-width:100%;"]),b=Object(d.default)(p.a).withConfig({displayName:"tabbed-images__StyledTabs",componentId:"sc-9icffo-3"})(["margin-bottom:-2px;"]),x=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={currentTab:0},n}return i()(t,e),t.prototype.render=function(){var e=this,t=this.props,n=t.images,a=t.transparent,i=n.map(function(e){return e.title}),o=this.state.currentTab;return c.a.createElement(c.a.Fragment,null,c.a.createElement(g,{width:1,transparent:a},c.a.createElement(b,{activeIndex:o,items:i,onClick:function(t){e.setState({currentTab:t})}})),c.a.createElement(h,{width:1,transparent:a},c.a.createElement(y,{src:"/images/"+n[o].image,alt:n[o].alt})))},t}(c.a.Component);t.a=x},235:function(e,t,n){"use strict";n(189);var a=n(0),i=n.n(a),o=n(204),r=n(181);t.a=function(e){var t=e.title,n=e.body,a=e.color,l=e.link,c=e.linkText;return i.a.createElement(r.a,{color:a},i.a.createElement(o.a,{title:t,body:n,link:l,linkText:c}))}},236:function(e,t,n){"use strict";var a=n(0),i=n.n(a),o=n(177),r=n(205);t.a=function(){return i.a.createElement(o.a,null,i.a.createElement(r.a,null))}},239:function(e,t,n){"use strict";var a=n(174),i=n.n(a),o=n(0),r=n.n(o),l=n(171),c=n.n(l),d=n(169),s=n(172),u=n(170),m=n(187),p=n(180),f=n(173);function g(){var e=c()(["\n    display: block;\n    max-width: 100%;\n    width: 100%;\n    height: auto;\n    \n    @media all and (-ms-high-contrast:none) {\n      height: 100% !important; /* IE11 */\n      max-height: 496px; /* IE11 */\n    }\n  "]);return g=function(){return e},e}function h(){var e=c()(["\n    width: 100%;\n    order: 1;\n  "]);return h=function(){return e},e}function y(){var e=c()(["\n    margin-bottom: 40px;\n  "]);return y=function(){return e},e}var b=Object(d.default)(f.a).withConfig({displayName:"image-text-sectionstyled__TextColumn",componentId:"bhxoej-0"})(["justify-content:center;",";"],s.a.phone(y())),x=Object(d.default)(u.a).withConfig({displayName:"image-text-sectionstyled__Title",componentId:"bhxoej-1"})(["margin-bottom:15px;"]),v=Object(d.default)(u.a).withConfig({displayName:"image-text-sectionstyled__Body",componentId:"bhxoej-2"})(["margin-bottom:15px;"]),w=Object(d.default)(m.a).withConfig({displayName:"image-text-sectionstyled__StyledExternalLink",componentId:"bhxoej-3"})(["margin-bottom:15px;"]),_=Object(d.default)(f.a).withConfig({displayName:"image-text-sectionstyled__ImageColumn",componentId:"bhxoej-4"})(["width:50%;order:0;",";"],s.a.phone(h())),C=Object(d.default)(p.a).withConfig({displayName:"image-text-sectionstyled__StyledImage",componentId:"bhxoej-5"})(["display:block;width:100%;height:auto;max-width:90%;@media all and (-ms-high-contrast:none){height:100% !important;max-height:496px;}",";"],s.a.phone(g())),k=n(181);t.a=function(e){var t=e.image,n=e.title,a=e.summary,o=e.text,l=e.url,c=i()(e,["image","title","summary","text","url"]);return r.a.createElement(k.a,c,r.a.createElement(_,{width:.5},r.a.createElement(C,{src:"/images/"+t,alt:n})),r.a.createElement(b,{width:.5},r.a.createElement(x,{type:"h4",text:n,color:"orange"}),r.a.createElement(v,{type:"body",text:a}),l?r.a.createElement(w,{target:"_self",underline:!0,text:o,to:l,type:"medium",chevron:!0}):""))}},243:function(e,t,n){"use strict";n(175),n(176),n(51);var a=n(0),i=n.n(a),o=n(196),r=n(171),l=n.n(r),c=n(169),d=n(172),s=n(193),u=n(188),m=n(194),p=n(180);function f(){var e=l()(["\n    margin-top: 20px;\n  "]);return f=function(){return e},e}var g=Object(c.default)(m.a).withConfig({displayName:"product-detail-headerstyled__StyledCarousel",componentId:"sc-81gpnn-0"})(["margin-top:32px;"]),h=Object(c.default)(s.a).withConfig({displayName:"product-detail-headerstyled__StyledHeading",componentId:"sc-81gpnn-1"})(["margin-bottom:32px;"]),y=Object(c.default)(u.a).withConfig({displayName:"product-detail-headerstyled__StyledChecklist",componentId:"sc-81gpnn-2"})(["margin-bottom:32px;"]),b=c.default.div.withConfig({displayName:"product-detail-headerstyled__Prices",componentId:"sc-81gpnn-3"})(["display:flex;margin-bottom:16px;& > *:not(:first-child){padding-left:64px;}"]),x=Object(c.default)(p.a).withConfig({displayName:"product-detail-headerstyled__StyledImage",componentId:"sc-81gpnn-4"})(["max-height:100%;max-width:100%;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);"]),v=c.default.div.withConfig({displayName:"product-detail-headerstyled__TabbedImagesContainer",componentId:"sc-81gpnn-5"})(["",";"],d.a.phone(f())),w=c.default.div.withConfig({displayName:"product-detail-headerstyled__ImageContainer",componentId:"sc-81gpnn-6"})(["height:340px;width:100%;"]),_=n(177),C=n(173),k=n(190),E=n(198),I=n(226),N=n(183);t.a=function(e){var t=e.backbuttonLink,n=e.backbuttonText,a=e.body,r=e.subtitle,l=e.title,c=e.features,d=e.featuresTitle,s=e.prices,u=e.buyText,m=e.buyLink,p=e.images,f=e.headerImage,j=e.tabs;return i.a.createElement(o.a,null,i.a.createElement(_.a,null,i.a.createElement(C.a,{width:7/12},i.a.createElement(h,{backbuttonText:n,backbuttonLink:t,body:a,subtitle:r,title:l,image:f,subtitleHeading:!0}),c&&i.a.createElement(y,{items:c,title:d}),i.a.createElement(b,null,s&&s.map(function(e,t){return i.a.createElement(k.a,{key:t.toString(),text:e.title,price:e.price})})),i.a.createElement(E.a,{text:u,link:Object(N.a)(m),id:"btn-buy"})),i.a.createElement(C.a,{width:4/12},j?i.a.createElement(v,null,i.a.createElement(I.a,{images:p,transparent:!0})):i.a.createElement(g,null,p&&p.map(function(e,t){return i.a.createElement(w,{key:t.toString()},i.a.createElement(x,{src:"/images/"+e.image,alt:e.alt}))})))))}}}]);
//# sourceMappingURL=component---src-templates-service-detail-illustration-js-64937976105780afcb95.js.map