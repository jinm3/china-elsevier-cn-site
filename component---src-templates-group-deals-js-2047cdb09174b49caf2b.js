(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{163:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),o=n(195),r=(n(175),n(176),n(51),n(171)),l=n.n(r),c=n(169),d=n(172),s=n(173),u=n(170);function m(){var e=l()(["\n    &:not(:last-child) {\n      margin-bottom: 40px;\n      padding: 0 8px;\n    }\n  "]);return m=function(){return e},e}function p(){var e=l()(["\n    padding: 0 16px;\n  "]);return p=function(){return e},e}var g=Object(c.default)(s.a).withConfig({displayName:"deals-2col-sectionstyled__StyledColumn",componentId:"sc-1axb8ls-0"})(["padding:0 24px;",";",";"],d.a.tablet(p()),d.a.phone(m())),h=Object(c.default)(u.a).withConfig({displayName:"deals-2col-sectionstyled__StyledTitle",componentId:"sc-1axb8ls-1"})(["margin-bottom:35px;"]),y=n(180);function f(){var e=l()(["\n    width: 114px;\n  "]);return f=function(){return e},e}var b=c.default.div.withConfig({displayName:"deals-summarystyled__Container",componentId:"sc-1qvgovt-0"})(["text-align:center;"]),v=Object(c.default)(y.a).withConfig({displayName:"deals-summarystyled__StyledImage",componentId:"sc-1qvgovt-1"})(["margin-bottom:8px;height:180px;max-width:180px;",";"],d.a.phone(f())),w=Object(c.default)(u.a).withConfig({displayName:"deals-summarystyled__Title",componentId:"sc-1qvgovt-2"})(["margin-bottom:4px;"]),x=function(e){var t=e.image,n=e.title,i=e.body,o=e.color;return a.a.createElement(b,null,a.a.createElement(v,{src:"/images/"+t+".svg",alt:t,type:t}),a.a.createElement(w,{color:o,type:"h6",text:n}),a.a.createElement(u.a,{type:"bodyXs",text:i}))},C=n(181),E=function(e){var t=e.items,n=e.title;return a.a.createElement(C.a,{backgroundColor:"brown1"},a.a.createElement(s.a,{width:1},a.a.createElement(h,{text:n,type:"h3"})),t.map(function(e,t){return a.a.createElement(g,{key:t.toString(),width:.5},a.a.createElement(x,e))}))};n(37);function _(){var e=l()(["\n    padding: 0 8px;\n\n    &:last-child {\n      margin-bottom: 0;\n    }\n  "]);return _=function(){return e},e}function j(){var e=l()(["\n    padding: 0 16px;\n  "]);return j=function(){return e},e}var k=Object(c.default)(s.a).withConfig({displayName:"deals-3col-sectionstyled__StyledColumn",componentId:"sc-10sgqi3-0"})(["padding:0 24px;margin-bottom:40px;",";",";"],d.a.tablet(j()),d.a.phone(_())),T=Object(c.default)(u.a).withConfig({displayName:"deals-3col-sectionstyled__StyledTitle",componentId:"sc-10sgqi3-1"})(["margin-bottom:35px;"]),S=function(e){var t=e.items,n=e.title;return a.a.createElement(C.a,null,a.a.createElement(s.a,{width:1},a.a.createElement(T,{text:n,type:"h3"})),t.map(function(e,t){return a.a.createElement(k,{key:t.toString(),width:1/3},a.a.createElement(x,Object.assign({},e,{color:"petrolBlue"})))}))},I=n(8),O=n.n(I),N=n(197),q=Object(c.default)(N.a).withConfig({displayName:"deals-video-sectionstyled__StyledContainer",componentId:"sc-64lm7i-0"})(["max-width:600px;margin:0 auto;width:100%;"]),P=Object(c.default)(N.a).withConfig({displayName:"deals-video-sectionstyled__VideoContainer",componentId:"sc-64lm7i-1"})(["position:relative;padding-bottom:56.25%;height:0;margin:30px;iframe{position:absolute;top:0;left:0;width:100%;height:100%;}"]),B=Object(c.default)(y.a).withConfig({displayName:"deals-video-sectionstyled__StyledImage",componentId:"sc-64lm7i-2"})(["max-width:600px;cursor:pointer;"]),D=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={visible:!1},n}return O()(t,e),t.prototype.render=function(){var e=this,t=this.props,n=t.url,i=t.image,o=this.state.visible;return a.a.createElement(q,null,o?a.a.createElement(P,null,a.a.createElement("iframe",{title:"团购",width:"560",height:"315",src:n,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})):a.a.createElement(B,{src:"/images/"+i+".png",alt:i,onClick:function(){return e.setState({visible:!0})}}))},t}(a.a.Component),V=Object(c.default)(u.a).withConfig({displayName:"link-sectionstyled__StyledTitle",componentId:"sc-1jm3ufd-0"})(["margin-bottom:16px;"]),J=Object(c.default)(u.a).withConfig({displayName:"link-sectionstyled__StyledBody",componentId:"sc-1jm3ufd-1"})(["margin-bottom:20px;"]),F=n(187),L=function(e){var t=e.title,n=e.body,i=e.linkText,o=e.url;return a.a.createElement(C.a,{backgroundColor:"blue1"},a.a.createElement(s.a,{width:1},a.a.createElement(V,{text:t,type:"h2"}),n&&a.a.createElement(J,{text:n,type:"body"}),a.a.createElement(F.a,{text:i,to:o,type:"medium",chevron:!0})))},A=n(185),G=n(183);n.d(t,"query",function(){return U});var U="116692709";t.default=function(e){var t=e.data.page,n=t.pageTitle,i=t.pageDescription,r=t.slug,l=t.dealsJourneyTitle,c=t.dealsBenefitsTitle,d=t.dealsWhyTitle,s=t.dealsLinkTitle,u=t.dealsLinkText,m=Object(G.a)("dealsVideo");return A.a.isChinese()&&(m=Object(G.a)("dealsVideoCn")),a.a.createElement(o.a,{pageTitle:n,pageDescription:i,pagePath:r},a.a.createElement(D,{url:m,image:"video_thumbnail"}),a.a.createElement(E,{items:[{id:"group-deal",title:"团购旨在帮助机构达到学术出版的最高标准",image:"hands"},{id:"publish-error-free",title:"始终如一发表准确无误、书写规范的论文，使您的机构达到国际一流水平",image:"badge-2"}],title:l}),a.a.createElement(S,{items:[{id:"pre-paid-account-vouchers",title:"含有优惠券的预付费账户",body:"因此，您的研究人员可以便捷地享受服务，而无需面对麻烦的支付事宜",image:"vouchers"},{id:"unique-access-code",title:"唯一访问代码",body:"让研究人员轻松上传文件",image:"document"},{id:"10-credit",title:"10% 抵用金",body:"为您的机构提供物有超值的服务",image:"credit"},{id:"long-term-validity",title:"长期有效",body:"抵用金和价格的有效期为 24 个月",image:"calendar"},{id:"fixed-prices-for-services",title:"服务价格固定",body:"直到您的机构用完抵用金",image:"prices"}],title:c}),a.a.createElement(E,{items:[{id:"plus-100",title:"在最高级别的科学出版领域拥有 100 多年经验",image:"plus100"},{id:"success",title:"与我们博士学历的母语编辑人员携手合作，以实现您的机构应有的成功",image:"success"}],title:d}),a.a.createElement(L,{title:s,linkText:u,url:"mailto:webshop_support@elsevier.com"}))}},181:function(e,t,n){"use strict";var i=n(169),a=n(177),o=Object(i.default)(a.a).withConfig({displayName:"section-containerstyled__StyledRow",componentId:"sc-1oln0m-0"})(["background-color:",";padding-top:",";padding-bottom:",";"],function(e){var t=e.theme,n=e.backgroundColor;return t.colors[n]},function(e){return e.noTopPadding?"":"80px"},function(e){return e.noBottomPadding?"":"104px"});t.a=o},197:function(e,t,n){"use strict";var i=n(174),a=n.n(i),o=n(0),r=n.n(o),l=n(169),c=n(201),d=Object(l.default)(c.Flex).withConfig({displayName:"containerstyled__StyledContainer",componentId:"sc-18tmjwr-0"})(["flex-direction:column;"]);t.a=function(e){var t=e.children,n=a()(e,["children"]);return r.a.createElement(d,n,t)}}}]);
//# sourceMappingURL=component---src-templates-group-deals-js-2047cdb09174b49caf2b.js.map