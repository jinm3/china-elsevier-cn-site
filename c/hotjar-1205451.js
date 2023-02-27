window.hjSiteSettings = window.hjSiteSettings || {"site_id":1205451,"r":0.4872492452050265,"rec_value":0.0,"state_change_listen_mode":"automatic","record":true,"continuous_capture_enabled":true,"recording_capture_keystrokes":false,"session_capture_console":false,"session_capture_console_consent":false,"anonymize_digits":true,"anonymize_emails":true,"suppress_all":false,"suppress_text":false,"suppress_location":false,"user_attributes_enabled":false,"legal_name":null,"privacy_policy_url":null,"deferred_page_contents":[],"record_targeting_rules":[],"feedback_widgets":[],"heatmaps":[],"polls":[{"id":706622,"created_epoch_time":1625151354,"skin":"dark","background":"#333333","effective_show_branding":true,"position":"right","content":{"version":2,"questions":[{"uuid":"36954ddd-5752-4b78-82a5-a4be607e8df3","type":"rating-scale-7","text":"How helpful was this blog post?","required":true,"scaleCount":7,"labels":[{"text":"Not at all helpful"},{"text":"Extremely helpful"}],"next":"question:1cefbdf8-75cc-4063-9886-0eb715aef3cb"},{"uuid":"1cefbdf8-75cc-4063-9886-0eb715aef3cb","type":"single-open-ended-multiple-line","text":"If you could change just one thing about this page, what would it be?","required":true,"next":"thankYou"}],"thankyou":"Thank you for your feedback!"},"ask_for_consent":false,"language":"en","display_condition":"delay","display_delay":3,"persist_condition":"response","targeting_percentage":100,"targeting":[{"component":"url","match_operation":"exact","name":null,"negate":false,"pattern":"https://scientific-publishing.webshop.elsevier.com/research-process/importance-literature-review-research-writing/","rule_type":null},{"component":"device","match_operation":"exact","name":null,"negate":false,"pattern":"phone","rule_type":null},{"component":"url","match_operation":"exact","name":null,"negate":false,"pattern":"https://scientific-publishing.webshop.elsevier.com/publication-recognition/what-good-h-index/","rule_type":null},{"component":"device","match_operation":"exact","name":null,"negate":false,"pattern":"desktop","rule_type":null},{"component":"url","match_operation":"exact","name":null,"negate":false,"pattern":"https://scientific-publishing.webshop.elsevier.com/publication-recognition/what-corresponding-author/","rule_type":null},{"component":"url","match_operation":"simple","name":null,"negate":false,"pattern":"https://scientific-publishing.webshop.elsevier.com/research-process/what-is-research-gap/amp","rule_type":null},{"component":"device","match_operation":"exact","name":null,"negate":false,"pattern":"tablet","rule_type":null},{"component":"url","match_operation":"exact","name":null,"negate":false,"pattern":"https://scientific-publishing.webshop.elsevier.com/research-process/what-is-research-gap/","rule_type":null}],"show_legal":false,"uuid":"d932600d-f5aa-4e87-b436-a4ae208826a5","logo_url":null,"invite":{"close":"No thanks","button":"Yes, I will give feedback","description":"Tell us what you think about this page by taking our quick Survey.","title":"Your feedback is important to us!"},"invite_enabled":false,"button_color":"#00C764","display_type":"popover"}],"integrations":{"optimizely":{"tag_recordings":false},"google_optimize":{"tag_recordings":false}},"features":["settings.billing_v2","ingestion.http.page_content","client_script.safe_date","heatmap.continuous.manual_retaker","feedback.embeddable_widget","error_reporting","survey.image_question","feedback.widgetV2","feedback.widget_telemetry","client_script.metrics"]};

!function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=221)}({221:function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}r.r(t);var a,o=function(){function e(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e3;n(this,e),this.send=t,this.batchSize=r,this.flushInterval=i,this.buffer=[],this.flushTimer=null}var t,r,a;return t=e,(r=[{key:"getBuffer",value:function(){return this.buffer}},{key:"add",value:function(e){var t=this;this.buffer.push(e),this.buffer.length>=this.batchSize?this.flush():this.flushTimer||(this.flushTimer=setTimeout((function(){t.flush()}),this.flushInterval))}},{key:"flush",value:function(){this.buffer.length>0&&(this.send(this.buffer),this.buffer=[]),this.flushTimer&&(clearTimeout(this.flushTimer),this.flushTimer=null)}}])&&i(t.prototype,r),a&&i(t,a),e}();function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var l,f=function(){try{return"performance"in window&&"now"in window.performance}catch(e){return!1}},d={version:1,metricsUrl:(null===(a=window._hjSettings)||void 0===a?void 0:a.metricsUrl)||"https://csmetrics.hotjar.com",features:{metrics:{flag:"client_script.metrics",sampling:.1},debug:{flag:"client_script.metrics.debug",sampling:.5}},browser:{hasPerformance:!1,hasDebug:!1},buffer:{bufferSize:40,flushInterval:2e3}},h={isDebugEnabled:!1,isMetricsEnabled:!1,loggedMetrics:{},genericTags:{}},g=function(e,t,r){h.loggedMetrics[e]=u(u({},h.loggedMetrics[e]),{},c({},t,r))},b=function(e){return e&&(e.task||e.reason||e.module)||"value"},p=function(e,t){var r=b(t),n=h.loggedMetrics[e],i=n&&n[r]||{};return{tagName:r,start:i.start,end:i.end,total:i.total}},m=function(e){var t,r=null!==(t=e.tag)&&void 0!==t?t:void 0;return h.isDebugEnabled?u(u(u({},r),e.extraTags),h.genericTags):r},v=function(e){if(!l)return!1;var t=h.isMetricsEnabled||h.isDebugEnabled;return e?t&&e.flush:t},w=function(e){var t=!1,r="v=".concat(d.version),n=h.isDebugEnabled?"".concat(d.metricsUrl,"?").concat(r,"&debug=true"):"".concat(d.metricsUrl,"?").concat(r),i=JSON.stringify(e);if("sendBeacon"in navigator)try{t=navigator.sendBeacon.bind(navigator)(n,i)}catch(e){}if(!1===t)try{var a=new XMLHttpRequest;a.open("POST",n),a.timeout=1e4,a.send(i)}catch(e){}d.browser.hasDebug&&console.debug("New metric/log: ",e)},j={getState:function(){return u({},h)},start:function(){try{d.browser={hasPerformance:f(),hasDebug:/hjDebug=1/.test(location.search)};var e=window.hjSiteSettings||{},t=e.features,r=e.site_id,n=new Set(t),i=d.features,a=i.debug,s=i.metrics;h.genericTags={site_id:r},h.isDebugEnabled=n.has(a.flag)&&Math.random()<=a.sampling,h.isMetricsEnabled=n.has(s.flag)&&Math.random()<=s.sampling,l=new o(w,d.buffer.bufferSize,d.buffer.flushInterval)}catch(e){console.debug("Error in metrics.start",{error:e})}},reset:function(){h.loggedMetrics={}},stop:function(){h.isDebugEnabled=!1,h.isMetricsEnabled=!1,h.genericTags={}},count:function(e,t){var r=t.incr,n=t.tag,i=t.extraTags;try{var a=b(n),o=h.loggedMetrics[e],s=(o&&o[a]||0)+((null==r?void 0:r.value)||1);if(h.loggedMetrics[e]=u(u({},o),{},c({},a,s)),v(r)){var f={name:e,type:"count",value:s,tags:m({tag:n,extraTags:i})};l.add(f)}}catch(e){}},time:function(){try{if(!d.browser.hasPerformance)return;return performance.now()}catch(e){}},timeStart:function(e,t){try{var r=j.time(),n=p(e,t),i=n.start,a=n.tagName;if(i)return;return g(e,a,{start:r}),r}catch(e){}},timeEnd:function(e,t){var r=t.tag,n=t.incr,i=t.extraTags;try{var a=j.time();if(!a)return;var o,s=p(e,r),u=s.start,c=s.tagName,f=s.total;if(n){var d=n.start&&a-n.start;g(e,c,{total:o=d?(f||0)+d:f})}else o=u?a-u:void 0,g(e,c,{start:u,end:a});if(o&&v(n)){var h={name:e,type:"distribution",value:Math.round(o),tags:m({tag:r,extraTags:i})};l.add(h)}return a}catch(t){console.debug("Failed to send timer metric: ",{name:e,tag:r,error:t})}}};window.hj=window.hj||function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];(window.hj.q=window.hj.q||[]).push(t)},window.hj.metrics=j,hj.metrics.start(),hj.metrics.timeStart("time-to-first-event",null),window.hjBootstrap=window.hjBootstrap||function(e,t,r){var n=["bot","google","headless","baidu","bing","msn","duckduckbot","teoma","slurp","yandex","phantomjs","pingdom","ahrefsbot"].join("|"),i=new RegExp(n,"i"),a=window.navigator||{userAgent:"unknown"},o=a.userAgent?a.userAgent:"unknown";if(i.test(o))return hj.metrics.count("session-rejection",{tag:{reason:"bot"}}),void console.warn("Hotjar not launching due to suspicious userAgent:",o);var s="http:"===window.location.protocol,u=Boolean(window._hjSettings.preview);if(s&&!u)return hj.metrics.count("session-rejection",{tag:{reason:"https"}}),void console.warn("For security reasons, Hotjar only works over HTTPS. Learn more: https://help.hotjar.com/hc/en-us/articles/115011624047");var c=function(e,t,r){window.hjBootstrapCalled=(window.hjBootstrapCalled||[]).concat(r),window.hj&&window.hj._init&&window.hj._init._verifyInstallation&&hj._init._verifyInstallation()};c(0,0,r);var l=window.document,f=l.head||l.getElementsByTagName("head")[0];hj.scriptDomain=e;var d=l.createElement("script");d.async=1,d.src=hj.scriptDomain+t,d.charset="utf-8",f.appendChild(d),c.revision="3a2a5e8befe7",window.hjBootstrap=c},window.hjBootstrap("https://script.hotjar.com/","modules.7cafb00353603cadd6c4.js","1205451"),window.hjLazyModules=window.hjLazyModules||{SURVEY_V2:{js:"survey-v2.1e5f534f2d9615c69bb6.js"},SURVEY_BOOTSTRAPPER:{js:"survey-bootstrapper.642b22de383746adb81d.js"},SURVEY_ISOLATED:{js:"survey-isolated.4a46876e6eecafa8c7e9.js"},HEATMAP_RETAKER:{js:"heatmap-retaker.9507261aafe8db67d188.js"},SURVEY_INVITATION:{js:"survey-invitation.247afd68edace36072b2.js"},NOTIFICATION:{js:"notification.6f0ff98268bbd2a1997e.js"},INCOMING_FEEDBACK:{js:"incoming-feedback.5443f8bc7d3ee3d7ca99.js"},PREACT_INCOMING_FEEDBACK:{js:"preact-incoming-feedback.a0eb7ed46fb2cd468c84.js"},SENTRY:{js:"sentry.fc52f252e00af9ca6e28.js"}}}});
