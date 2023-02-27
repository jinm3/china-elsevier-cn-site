(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    170: function (e, t, a) {
      'use strict';
      var n = a(174),
        i = a.n(n),
        r = a(0),
        l = a.n(r),
        o = a(169),
        c = a(227);
      t.a = function (e) {
        var t = e.tag,
          a = e.children,
          n = e.text,
          r = e.type,
          s = i()(e, ['tag', 'children', 'text', 'type']),
          m = o.default[t || c.a.tagMap[r]].withConfig({
            displayName: 'text__StyledText',
            componentId: 'sc-12bfj1m-0',
          })(['', ';'], c.a.styles[r]);
        return (
          m || console.error("Text type '" + r + "' does not exist"),
          l.a.createElement(m, s, n || a)
        );
      };
    },
    172: function (e, t, a) {
      'use strict';
      a.d(t, 'a', function () {
        return r;
      });
      a(82), a(52), a(271), a(58);
      var n = a(169),
        i = a(251).a.metrics,
        r = Object.keys(i).reduce(function (e, t) {
          var a = i[t] / 16;
          return (
            (e[t] = function () {
              return Object(n.css)(
                ['@media (max-width:', 'em){', ';}'],
                a,
                n.css.apply(void 0, arguments)
              );
            }),
            e
          );
        }, {});
    },
    173: function (e, t, a) {
      'use strict';
      a(37);
      var n = a(174),
        i = a.n(n),
        r = a(0),
        l = a.n(r),
        o = a(169),
        c = a(201),
        s = Object(o.default)(c.Box).withConfig({
          displayName: 'columnstyled__StyledColumn',
          componentId: 'egdhjg-0',
        })(['display:flex;flex-direction:column;']);
      t.a = function (e) {
        var t = e.width,
          a = i()(e, ['width']);
        return l.a.createElement(
          s,
          Object.assign({ px: 2, width: [1].concat(t) }, a)
        );
      };
    },
    177: function (e, t, a) {
      'use strict';
      a(37);
      var n = a(174),
        i = a.n(n),
        r = a(0),
        l = a.n(r),
        o = a(169),
        c = a(201),
        s = Object(o.default)(c.Flex).withConfig({
          displayName: 'rowstyled__StyledRow',
          componentId: 'sc-7co133-0',
        })(['justify-content:center;']),
        m = Object(o.default)(c.Flex).withConfig({
          displayName: 'rowstyled__InnerContainer',
          componentId: 'sc-7co133-1',
        })([
          'flex-wrap:wrap;margin-left:auto;margin-right:auto;position:relative;width:100%;',
        ]),
        p = o.default.div.withConfig({
          displayName: 'rowstyled__OuterContainer',
          componentId: 'sc-7co133-2',
        })(['max-width:1440px;width:100%;']);
      t.a = function (e) {
        var t = e.children,
          a = e.wide,
          n = e.className,
          r = e.noPadding,
          o = i()(e, ['children', 'wide', 'className', 'noPadding']),
          c = [
            '16px',
            '24px',
            '24px',
            a ? '32px' : 'calc(' + 100 / 12 + '% + 32px)',
          ];
        return l.a.createElement(
          s,
          { className: n },
          l.a.createElement(
            p,
            null,
            l.a.createElement(m, Object.assign({ px: r ? 0 : c }, o), t)
          )
        );
      };
    },
    178: function (e, t, a) {
      'use strict';
      a(37);
      var n = a(174),
        i = a.n(n),
        r = a(0),
        l = a.n(r),
        o = a(169).default.svg.withConfig({
          displayName: 'icon__StyledIcon',
          componentId: 'sc-176u6wh-0',
        })(
          [
            'color:',
            ';height:',
            ';width:',
            ';display:inline-block;margin-top:',
            ';transform:',
            ';',
          ],
          function (e) {
            var t = e.color;
            return e.theme.colors[t];
          },
          function (e) {
            return e.size;
          },
          function (e) {
            return e.size;
          },
          function (e) {
            return e.checklist ? '2px' : '';
          },
          function (e) {
            var t = e.rotation;
            return t ? 'rotateZ(' + t + 'deg)' : '';
          }
        ),
        c = {
          tiny: '0.8rem',
          small: '1rem',
          medium: '1.25rem',
          large: '1.8rem',
          huge: '3rem',
        };
      t.a = function (e) {
        var t = e.size,
          a = e.type,
          n = i()(e, ['size', 'type']),
          r = c[t] || c.medium;
        return l.a.createElement(
          o,
          Object.assign({ size: r }, n),
          l.a.createElement('use', { xlinkHref: '#' + (a || 'checkmark') })
        );
      };
    },
    179: function (e, t, a) {
      'use strict';
      a(249), a(37);
      var n = a(174),
        i = a.n(n),
        r = a(0),
        l = a.n(r),
        o = a(250),
        c = a(183),
        s = a(187),
        m = a(185),
        p = { extraSmall: 'bodyXs', small: 'bodySm', medium: 'body' };
      t.a = function (e) {
        var t,
          a = e.to,
          n = e.onClick,
          r = i()(e, ['to', 'onClick']);
        if ((m.a.isInternal(a) || (t = Object(c.a)(a)), t))
          return l.a.createElement(
            s.a,
            Object.assign({ onClick: n, to: t }, r)
          );
        var d = a ? null : n ? 'button' : 'span',
          u = void 0 === a || '' === a || a.endsWith('/') ? a : a + '/',
          h = r.chevron,
          g = r.color,
          f = r.noHover,
          v = r.reversedChevron,
          b = r.tag,
          y = r.text,
          x = r.type,
          w = r.underline,
          E = i()(r, [
            'chevron',
            'color',
            'noHover',
            'reversedChevron',
            'tag',
            'text',
            'type',
            'underline',
          ]);
        return l.a.createElement(
          o.b,
          Object.assign(
            { as: d, noHover: f ? 1 : 0, onClick: n, to: u, underline: w },
            E
          ),
          (h || v) &&
            l.a.createElement(o.a, {
              type: 'chevronRight',
              color: '' + (g || 'petrolBlue'),
              size: 'small',
              rotation: v && 180,
            }),
          l.a.createElement(o.c, {
            tag: b || 'span',
            text: y,
            type: x ? p[x] : 'body',
            color: '' + (g || 'petrolBlue'),
          })
        );
      };
    },
    180: function (e, t, a) {
      'use strict';
      a(37);
      var n = a(174),
        i = a.n(n),
        r = a(0),
        l = a.n(r);
      t.a = function (e) {
        var t = e.alt,
          a = i()(e, ['alt']);
        return l.a.createElement('img', Object.assign({ alt: t }, a));
      };
    },
    183: function (e, t, a) {
      'use strict';
      a.d(t, 'a', function () {
        return l;
      });
      a(37);
      var n = {
          apiUrl: 'https://cn.order.webshop.elsevier.com/login-status.cfm',
          loginUrl:
            'https://cn.order.webshop.elsevier.com/login.cfm?returnUri={returnUri}&prompt=none',
          myDeskUrl:
            'https://cn.order.webshop.elsevier.com/customer/mydesk.cfm',
          myAuthorServices:
            'http://cn.order.webshop.elsevier.com/customer/my-author-services.cfm',
          myProfile:
            'https://cn.order.webshop.elsevier.com/customer/myprofile.cfm',
          logout: 'https://cn.order.webshop.elsevier.com/logout.cfm',
          phdUploadLink:
            'https://cn.order.webshop.elsevier.com/languageservices/languageediting-phd-theses/checkout.cfm?step=upload',
          phdPlusUploadLink:
            'https://cn.order.webshop.elsevier.com/languageservices/languageediting-phd-theses-plus/checkout.cfm?step=upload',
          aboutWebShopLink: 'https://cn.order.webshop.elsevier.com',
          articleOffprintsBuyLink:
            'https://cn.order.webshop.elsevier.com/myarticleservices/offprints/',
          articlePostersBuyLink:
            'https://cn.order.webshop.elsevier.com/myarticleservices/articlepublications/articleposter/',
          journalCoverPosterBuyLink:
            'https://cn.order.webshop.elsevier.com/myarticleservices/articlepublications/journalcoverposter/',
          journalIssuesBuyLink:
            'https://cn.order.webshop.elsevier.com/myarticleservices/journalissues/',
          publicationRecognitionBuyLink:
            'https://cn.order.webshop.elsevier.com/myarticleservices/publication-recognition/',
          academicInfoGraphicsBuyLink:
            'https://cn.order.webshop.elsevier.com/illustration-services/academic-infographics/project_create_step1.cfm',
          basicLanguageEditingUploadLink:
            'https://cn.order.webshop.elsevier.com/languageservices/languageediting/checkout.cfm?step=upload',
          latexLanguageEditingUploadLink:
            'https://cn.order.webshop.elsevier.com/languageservices/languageediting-latex/checkout.cfm?step=upload',
          plusLanguageEditingUploadLink:
            'https://cn.order.webshop.elsevier.com/languageservices/languageeditingplus/checkout.cfm?step=upload',
          translationServiceUploadLink:
            'https://cn.order.webshop.elsevier.com/languageservices/translationservices/checkout.cfm?step=upload',
          translationExpressServiceUploadLink:
            'https://cn.order.webshop.elsevier.com/languageservices/languageediting-express/checkout.cfm?step=upload',
          scientificIllustrationBuyLink:
            'https://cn.order.webshop.elsevier.com/illustration-services/illustrations/project_create_step1.cfm',
          blog: 'https://scientific-publishing.webshop.elsevier.com/',
          blogCn: 'https://cn.scientific-publishing.webshop.elsevier.com/',
          termsAndConditions:
            'https://www.elsevier.com/legal/elsevier-website-terms-and-conditions/',
          help: 'https://service.elsevier.com/app/home/supporthub/webshop/',
          contact:
            'https://service.elsevier.com/app/contact/supporthub/webshop/',
          privacy: 'https://www.elsevier.com/legal/privacy-policy/',
          cookiesGoogleAnalyticsPrivacy:
            'https://www.google.com/analytics/learn/privacy.html',
          cookiesDoubleClickPrivacy:
            'https://support.google.com/dfp_premium/answer/2839090?hl=en',
          cookiesAdobeLiveDocs:
            'https://livedocs.adobe.com/coldfusion/7/htmldocs/wwhelp/wwhimpl/js/html/wwhelp.htm?href=00001159.htm',
          cookiesGoogleAnalyticsAdvertisersPolicy:
            'https://support.google.com/analytics/bin/answer.py?hl=en&answer=2700409',
          cookiesFacebookPolicy: 'https://www.facebook.com/policies/cookies/',
          cookiesOptimizelyPolicy: 'https://www.optimizely.com/privacy/',
          groupDealsContact: 'mailto:webshop_support@elsevier.com',
          afterPublicationMendely:
            'https://www.mendeley.com/universal-claim/?routeTo=/profiles/me&referrer=md',
          afterPublictionResearcherAcademy:
            'https://researcheracademy.elsevier.com/',
          journalFinder: 'https://journalfinder.elsevier.com/',
          mendely: 'https://www.mendeley.com/',
          mendelyReference:
            'https://www.mendeley.com/reference-management/reference-manager/',
          researchAcademy: 'https://researcheracademy.elsevier.com/',
          citationPluginMendely:
            'https://www.mendeley.com/reference-management/citation-plugin/',
          facebook: 'https://www.facebook.com/elsevierauthorservices/',
          linkedin: 'https://www.linkedin.com/company/elsevier-authorservices',
          twitter: 'https://twitter.com/ElsevierConnect/',
          youtube: 'https://www.youtube.com/channel/UCeg3r-A2cTOUNHB1vvKBT9g',
          pinterest: 'https://pinterest.com/elsevierauthorservices/',
          localeCn: 'https://cn.order.webshop.elsevier.com',
          localeGlobal: 'http://cn.order.webshop.elsevier.com',
          dealsVideo:
            'https://www.youtube.com/embed/gHLFOgaUbl4?rel=0&autoplay=1',
          dealsVideoCn:
            '//player.bilibili.com/player.html?aid=756267364&bvid=BV1Wr4y1M7Bc&cid=288416207&page=1',
          cookielaw: '09f2817d-4a32-4ec5-af8f-18c7202d6cba',
          adobedtm:
            'https://assets.adobedtm.com/4a848ae9611a/3b7120286094/launch-e7a51022b5ec.min.js',
        },
        i = {
          apiUrl:
            'https://order.webshop.elsevier-estreet.staging.ritense.com/login-status.cfm',
          loginUrl:
            'https://order.webshop.elsevier-estreet.staging.ritense.com/login.cfm?returnUri={returnUri}&prompt=none',
          myDeskUrl:
            'https://order.webshop.elsevier-estreet.staging.ritense.com/customer/mydesk.cfm',
          myAuthorServices:
            'http://cn.order.webshop.elsevier.com/customer/my-author-services.cfm',
          myProfile:
            'https://order.webshop.elsevier-estreet.staging.ritense.com/customer/myprofile.cfm',
          logout:
            'https://order.webshop.elsevier-estreet.staging.ritense.com/logout.cfm',
          phdUploadLink:
            'https://order.webshop.elsevier-estreet.staging.ritense.com/languageservices/languageediting-phd-theses/checkout.cfm?step=upload',
          phdPlusUploadLink:
            'https://order.webshop.elsevier-estreet.staging.ritense.com/languageservices/languageediting-phd-theses-plus/checkout.cfm?step=upload',
          aboutWebShopLink:
            'https://order.webshop.elsevier-estreet.staging.ritense.com',
          articleOffprintsBuyLink:
            'https://order.webshop.elsevier-estreet.staging.ritense.com/myarticleservices/offprints/',
          articlePostersBuyLink:
            'https://order.webshop.elsevier-estreet.staging.ritense.com/myarticleservices/articlepublications/articleposter/',
          journalCoverPosterBuyLink:
            'https://order.webshop.elsevier-estreet.staging.ritense.com/myarticleservices/articlepublications/journalcoverposter/',
          journalIssuesBuyLink:
            'https://order.webshop.elsevier-estreet.staging.ritense.com/myarticleservices/journalissues/',
          publicationRecognitionBuyLink:
            'https://order.webshop.elsevier-estreet.staging.ritense.com/myarticleservices/publication-recognition/',
          academicInfoGraphicsBuyLink:
            'https://order.webshop.elsevier-estreet.staging.ritense.com/illustration-services/academic-infographics/project_create_step1.cfm',
          basicLanguageEditingUploadLink:
            'https://order.webshop.elsevier-estreet.staging.ritense.com/languageservices/languageediting/checkout.cfm?step=upload',
          latexLanguageEditingUploadLink:
            'https://order.webshop.elsevier-estreet.staging.ritense.com/languageservices/languageediting-latex/checkout.cfm?step=upload',
          plusLanguageEditingUploadLink:
            'https://order.webshop.elsevier-estreet.staging.ritense.com/languageservices/languageeditingplus/checkout.cfm?step=upload',
          translationServiceUploadLink:
            'https://order.webshop.elsevier-estreet.staging.ritense.com/languageservices/translationservices/checkout.cfm?step=upload',
          translationExpressServiceUploadLink:
            'https://order.webshop.elsevier-estreet.staging.ritense.com/languageservices/languageediting-express/checkout.cfm?step=upload',
          scientificIllustrationBuyLink:
            'https://order.webshop.elsevier-estreet.staging.ritense.com/illustration-services/illustrations/project_create_step1.cfm',
          localeCn: 'https://zh-uat-order-elsevier.onelink-translations.com',
          localeGlobal:
            'http://order.webshop.elsevier-estreet.staging.ritense.com',
          cookielaw: '09f2817d-4a32-4ec5-af8f-18c7202d6cba-test',
          adobedtm:
            'https://assets.adobedtm.com/4a848ae9611a/3b7120286094/launch-bfb0bdf10da9-staging.min.js',
        },
        r =
          (Object.assign({}, n, i),
          function () {
            return n;
          });
      function l(e) {
        if (!e) return null;
        var t = r()[e];
        return t || (console.error(new Error('No url for key ' + e)), null);
      }
    },
    185: function (e, t, a) {
      'use strict';
      a.d(t, 'b', function () {
        return r;
      });
      a(85), a(93), a(30), a(82), a(92), a(55), a(51);
      var n = a(183);
      var i = /(href\=")(.*?)("\>)/gm;
      function r(e) {
        var t = e.match(i);
        return (
          t &&
            t.length > 0 &&
            t.forEach(function (t) {
              var a = t.replace('href="', '').replace('">', '');
              e = e.replace(a, Object(n.a)(a));
            }),
          e
        );
      }
      function l(e) {
        if (e) {
          var t = e;
          return (
            '/' === t.substr(-1) && (t = t.substr(0, t.length - 1)),
            '/' === t.substr(0, 1) && (t = t.substr(1)),
            t.replace(/\//g, ':')
          );
        }
        return 'home';
      }
      var o = !1;
      t.a = {
        isInternal: function (e) {
          return /^\/(?!\/)/.test(e);
        },
        processData: function (e) {
          return e.edges.map(function (e) {
            return e.node;
          });
        },
        isChinese: function () {
          if ('undefined' != typeof window) {
            var e =
              !!window.location.hostname &&
              window.location.hostname.split('.')[0];
            if (e && ['cn'].indexOf(e) > -1) return !0;
          }
          return !1;
        },
        adobePageName: l,
        adobePageLoad: function (e, t) {
          var a = 'dev';
          (a = 'prod'),
            'object' == typeof pageDataTracker &&
              ((pageData = {
                page: {
                  name: l(e),
                  productName: 'ws',
                  businessUnit: 'els:stmj:pbdv',
                  type: t ? 'cp-ca' : 'ec-sc',
                  environment: a,
                },
                visitor: { accessType: 'ae:anon::guest' },
              }),
              o
                ? pageDataTracker.trackEvent('newPage', {
                    page: { name: l(e), type: t ? 'cp-ca' : 'ec-sc' },
                  })
                : pageDataTracker.trackPageLoad(),
              (o = !0));
        },
      };
    },
    186: function (e, t, a) {
      'use strict';
      a.r(t),
        a.d(t, 'graphql', function () {
          return h;
        }),
        a.d(t, 'StaticQueryContext', function () {
          return d;
        }),
        a.d(t, 'StaticQuery', function () {
          return u;
        });
      var n = a(0),
        i = a.n(n),
        r = a(1),
        l = a.n(r),
        o = a(200),
        c = a.n(o);
      a.d(t, 'Link', function () {
        return c.a;
      }),
        a.d(t, 'withPrefix', function () {
          return o.withPrefix;
        }),
        a.d(t, 'navigate', function () {
          return o.navigate;
        }),
        a.d(t, 'push', function () {
          return o.push;
        }),
        a.d(t, 'replace', function () {
          return o.replace;
        }),
        a.d(t, 'navigateTo', function () {
          return o.navigateTo;
        });
      var s = a(247),
        m = a.n(s);
      a.d(t, 'PageRenderer', function () {
        return m.a;
      });
      var p = a(49);
      a.d(t, 'parsePath', function () {
        return p.a;
      });
      var d = i.a.createContext({}),
        u = function (e) {
          return i.a.createElement(d.Consumer, null, function (t) {
            return e.data || (t[e.query] && t[e.query].data)
              ? (e.render || e.children)(e.data ? e.data.data : t[e.query].data)
              : i.a.createElement('div', null, 'Loading (StaticQuery)');
          });
        };
      function h() {
        throw new Error(
          'It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.'
        );
      }
      u.propTypes = {
        data: l.a.object,
        query: l.a.string.isRequired,
        render: l.a.func,
        children: l.a.func,
      };
    },
    187: function (e, t, a) {
      'use strict';
      a(37), a(273), a(249);
      var n = a(174),
        i = a.n(n),
        r = a(0),
        l = a.n(r),
        o = a(169).default.a.withConfig({
          displayName: 'external-linkstyled__StyledExternalLink',
          componentId: 'sc-184tvl8-0',
        })(
          [
            'background:none;border:none;display:inline-block;outline:none;padding:0;user-select:none;text-decoration:none;> *{vertical-align:middle;}> span{border-bottom:',
            ';}&:hover,&:active,&:focus{> span{border-color:',
            ';}}',
          ],
          function (e) {
            return e.underline ? '2px solid transparent' : 'none';
          },
          function (e) {
            return e.theme.colors.petrolBlue;
          }
        ),
        c = a(170),
        s = a(250),
        m = { extraSmall: 'bodyXs', small: 'bodySm', medium: 'body' };
      t.a = function (e) {
        var t = e.chevron,
          a = e.reversedChevron,
          n = e.color,
          r = e.onClick,
          p = e.text,
          d = e.to,
          u = e.type,
          h = e.underline,
          g = i()(e, [
            'chevron',
            'reversedChevron',
            'color',
            'onClick',
            'text',
            'to',
            'type',
            'underline',
          ]),
          f = d ? null : r ? 'button' : 'span',
          v =
            void 0 === d ||
            '' === d ||
            d.endsWith('/') ||
            d.startsWith('mailto:')
              ? d
              : d + '/';
        return l.a.createElement(
          o,
          Object.assign({ as: f, onClick: r, href: v, underline: h }, g),
          (t || a) &&
            l.a.createElement(s.a, {
              type: 'chevronRight',
              color: '' + (n || 'petrolBlue'),
              size: 'small',
              rotation: a && 180,
            }),
          l.a.createElement(c.a, {
            text: p,
            type: u ? m[u] : 'body',
            as: 'span',
            color: '' + (n || 'petrolBlue'),
          })
        );
      };
    },
    195: function (e, t, a) {
      'use strict';
      a(81);
      var n = a(8),
        i = a.n(n),
        r = a(252),
        l = a(0),
        o = a.n(l),
        c = a(1),
        s = a.n(c),
        m = a(253),
        p = a.n(m),
        d = a(186),
        u = a(169),
        h = a(251),
        g = a(171),
        f = a.n(g);
      function v() {
        var e = f()([
          "\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n  }\n  ol, ul {\n    list-style: none;\n  }\n  blockquote, q {\n    quotes: none;\n  }\n  blockquote:before, blockquote:after,\n  q:before, q:after {\n    content: '';\n    content: none;\n  }\n  a {\n    text-decoration: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n",
        ]);
        return (
          (v = function () {
            return e;
          }),
          e
        );
      }
      var b = Object(u.createGlobalStyle)(v());
      function y() {
        var e = f()([
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  \n  body {\n    font-family: Arial, Helvetica, Lucida Sans Unicode, Microsoft Sans Serif, Segoe UI Symbol, STIXGeneral, Cambria Math, Arial Unicode MS, sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  #ot-sdk-btn.ot-sdk-show-settings {\n    color: #007398 !important;\n    background-color: transparent !important;\n    border: 0 !important;\n    border-bottom: 0.075rem solid transparent !important;\n    padding: 0 !important;\n    font-size: 14px !important;\n}\n',
        ]);
        return (
          (y = function () {
            return e;
          }),
          e
        );
      }
      function x(e, t, a, n) {
        return (
          void 0 === a && (a = 'normal'),
          void 0 === n && (n = 'normal'),
          '\n    @font-face{\n      font-family: ' +
            e +
            ';\n      src: url(/fonts/' +
            t +
            '.otf) format("opentype"),\n      url(/fonts/' +
            t +
            '.woff) format("woff");\n\n      font-style: ' +
            n +
            ';\n      font-weight: ' +
            a +
            ';\n    }\n  '
        );
      }
      var w = Object(u.createGlobalStyle)(
          y(),
          x(
            'elsevier-display-light',
            'elsevier-display-light',
            'light',
            'normal'
          ),
          x(
            'elsevier-display-light',
            'elsevier-display-light-italic',
            'light',
            'italic'
          ),
          x('nexus-sans', 'nexus-sans', 'normal', 'normal'),
          x('nexus-sans', 'nexus-sans-bold', 'bold', 'normal'),
          x('nexus-sans', 'nexus-sans-italic', 'normal', 'italic')
        ),
        E = function () {
          return o.a.createElement(
            'svg',
            {
              'aria-hidden': 'true',
              version: '1.1',
              xmlns: 'https://www.w3.org/2000/svg',
              style: { height: '0', position: 'absolute', width: '0' },
            },
            o.a.createElement(
              'defs',
              null,
              o.a.createElement(
                'symbol',
                { id: 'facebook', viewBox: '0 0 50 50' },
                o.a.createElement('path', {
                  d: 'M26.6666667,22.3333333 L30,22.3333333 L29.5833333,25.5 L26.6666667,25.5 L26.6666667,35 L22.34375,35 L22.34375,25.5 L20,25.5 L20,22.3333333 L22.34375,22.3333333 L22.34375,20.2057292 C22.34375,18.8203056 22.7083297,17.773007 23.4375,17.0638021 C24.1666703,16.3545971 25.3819359,16 27.0833333,16 L30,16 L30,19.1666667 L28.2291667,19.1666667 C27.5694411,19.1666667 27.1440982,19.265624 26.953125,19.4635417 C26.7621518,19.6614593 26.6666667,19.9913171 26.6666667,20.453125 L26.6666667,22.3333333 Z',
                  fill: '#007398',
                })
              ),
              o.a.createElement(
                'symbol',
                { id: 'linkedin', viewBox: '0 0 48 48' },
                o.a.createElement(
                  'g',
                  {
                    stroke: 'none',
                    strokeWidth: '1',
                    fill: 'none',
                    fillRule: 'evenodd',
                  },
                  o.a.createElement('path', {
                    d: 'M32.5208333,14 L15.4758333,14 C14.66,14 14,14.645 14,15.4408333 L14,32.5591667 C14,33.3558333 14.66,34 15.4758333,34 L32.5183333,34 C33.3341667,34 34,33.3558333 34,32.5591667 L34,15.4408333 C34,14.645 33.3341667,14 32.5183333,14 L32.5208333,14 Z M16.9633333,31.0433333 L19.9333333,31.0433333 L19.9333333,21.5 L16.9633333,21.5 L16.9633333,31.0433333 Z M18.4475,20.1941667 C17.4941667,20.1941667 16.7283333,19.4225 16.7283333,18.4733333 C16.7283333,17.525 17.495,16.7541667 18.4475,16.7541667 C19.3975,16.7541667 20.1675,17.525 20.1675,18.4733333 C20.1675,19.4225 19.3966667,20.1941667 18.4475,20.1941667 Z M31.04,31.0433333 L28.0775,31.0433333 L28.0775,26.4025 C28.0775,25.2958333 28.0558333,23.8716667 26.5341667,23.8716667 C24.9908333,23.8716667 24.7541667,25.0758333 24.7541667,26.3208333 L24.7541667,31.0433333 L21.7925,31.0433333 L21.7925,21.5 L24.6383333,21.5 L24.6383333,22.8008333 L24.6758333,22.8008333 C25.0733333,22.0508333 26.0408333,21.2591667 27.4841667,21.2591667 C30.4858333,21.2591667 31.0408333,23.2341667 31.0408333,25.805 L31.0408333,31.0433333 L31.04,31.0433333 Z',
                    fill: '#007398',
                  })
                )
              ),
              o.a.createElement(
                'symbol',
                { id: 'twitter', viewBox: '0 0 50 50' },
                o.a.createElement(
                  'g',
                  {
                    stroke: 'none',
                    strokeWidth: '1',
                    fill: 'none',
                    fillRule: 'evenodd',
                  },
                  o.a.createElement('path', {
                    d: 'M37.9510437,17.3817091 C37.0292071,17.7805403 36.0448731,18.0522377 35.008458,18.1762957 C36.0636223,17.5498539 36.8771301,16.562516 37.2614891,15.3844774 C36.2709054,15.9535039 35.1730345,16.3677142 34.0043332,16.5984006 C33.0699971,15.6151638 31.7408858,15 30.263864,15 C27.4337736,15 25.1390775,17.2586764 25.1390775,20.0412672 C25.1390775,20.4411237 25.1859506,20.8256011 25.2713637,21.1936741 C21.0111245,20.9957964 17.2352402,18.9821603 14.7082622,15.9381248 C14.263489,16.6783719 14.0145411,17.5385759 14.0145411,18.4756754 C14.0145411,20.2288922 14.9207533,21.7698775 16.2936128,22.6751935 C15.4530228,22.6485364 14.6624307,22.4209258 13.9728761,22.0436254 L13.9728761,22.106167 C13.9728761,24.5514431 15.7363443,26.590711 18.0831215,27.0551597 C17.6529311,27.168965 17.1987834,27.2304814 16.7331778,27.2304814 C16.4061081,27.2304814 16.0925795,27.1997232 15.7790509,27.1423079 C16.4363152,29.144666 18.3258198,30.6046547 20.5746844,30.6456657 C18.8247573,31.9980007 16.6071414,32.8038653 14.2186992,32.8038653 C13.8124661,32.8038653 13.4072747,32.780284 13,32.735172 C15.2801133,34.1654278 17.9664597,35 20.871547,35 C30.3024041,35 35.4532311,27.3145537 35.4532311,20.6605321 C35.4532311,20.4462501 35.4532311,20.2299175 35.4376068,20.0146101 C36.4386067,19.3081971 37.3125286,18.4151843 38,17.4022146 L37.9510437,17.3817091 Z',
                    fill: '#007398',
                  })
                )
              ),
              o.a.createElement(
                'symbol',
                { id: 'youtube', viewBox: '0 0 50 50' },
                o.a.createElement(
                  'g',
                  {
                    stroke: 'none',
                    strokeWidth: '1',
                    fill: 'none',
                    fillRule: 'evenodd',
                  },
                  o.a.createElement('path', {
                    d: 'M37.8535156,20.984375 C37.9511724,22.6718834 38,24.3437417 38,26 C38,27.6562583 37.9511724,29.3281166 37.8535156,31.015625 C37.8535156,32.0781303 37.5035842,32.9765588 36.8037109,33.7109375 C36.1038376,34.4453162 35.249354,34.8125 34.2402344,34.8125 C31.7337114,34.9375006 28.8203291,35 25.5,35 C22.1796709,35 19.2662886,34.9375006 16.7597656,34.8125 C15.750646,34.8125 14.8961624,34.4453162 14.1962891,33.7109375 C13.4964158,32.9765588 13.1464844,32.0781303 13.1464844,31.015625 C13.0488276,29.3281166 13,27.6562583 13,26 C13,24.9062445 13.0651035,23.2343862 13.1953125,20.984375 C13.1953125,19.9218697 13.537106,19.0234412 14.2207031,18.2890625 C14.9043003,17.5546838 15.750646,17.1875 16.7597656,17.1875 C19.1360796,17.0624994 21.902979,17 25.0605469,17 L25.9394531,17 C29.097021,17 31.8639204,17.0624994 34.2402344,17.1875 C35.249354,17.1875 36.1038376,17.5546838 36.8037109,18.2890625 C37.5035842,19.0234412 37.8535156,19.9218697 37.8535156,20.984375 Z M23.1074219,30.59375 L30.1875,26 L23.1074219,21.359375 L23.1074219,30.59375 Z',
                    id: 'ion-social-youtube---Ionicons',
                    fill: '#007398',
                  })
                )
              ),
              o.a.createElement(
                'symbol',
                { id: 'pinterest', viewBox: '0 0 48 48' },
                o.a.createElement(
                  'g',
                  {
                    stroke: 'none',
                    strokeWidth: '1',
                    fill: 'none',
                    fillRule: 'evenodd',
                  },
                  o.a.createElement('path', {
                    fill: '#007398',
                    d: 'M24,12c-6.6,0-12,5.4-12,12c0,5.1,3.2,9.4,7.6,11.2c-0.1-0.9-0.2-2.4,0-3.4\r c0.2-0.9,1.4-6,1.4-6S20.7,25,20.7,24c0-1.7,1-2.9,2.2-2.9c1,0,1.5,0.8,1.5,1.7c0,1-0.7,2.6-1,4c-0.3,1.2,0.6,2.2,1.8,2.2\r c2.1,0,3.8-2.2,3.8-5.5c0-2.9-2.1-4.9-5-4.9c-3.4,0-5.4,2.6-5.4,5.2c0,1,0.4,2.1,0.9,2.7c0.1,0.1,0.1,0.2,0.1,0.3\r c-0.1,0.4-0.3,1.2-0.3,1.4c-0.1,0.2-0.2,0.3-0.4,0.2c-1.5-0.7-2.4-2.9-2.4-4.6c0-3.8,2.8-7.3,7.9-7.3c4.2,0,7.4,3,7.4,6.9\r c0,4.1-2.6,7.5-6.2,7.5c-1.2,0-2.4-0.6-2.8-1.4c0,0-0.6,2.3-0.7,2.9c-0.3,1-1,2.3-1.5,3.1c1.1,0.3,2.3,0.5,3.6,0.5\r c6.6,0,12-5.4,12-12C36,17.4,30.6,12,24,12L24,12z',
                  })
                )
              ),
              o.a.createElement(
                'symbol',
                { id: 'globe', viewBox: '0 0 50 50' },
                o.a.createElement(
                  'g',
                  {
                    stroke: 'none',
                    strokeWidth: '1',
                    fill: 'none',
                    fillRule: 'evenodd',
                  },
                  o.a.createElement('rect', {
                    fill: '#FFFFFF',
                    x: '0',
                    y: '0',
                    width: '50',
                    height: '50',
                  }),
                  o.a.createElement(
                    'g',
                    { transform: 'translate(7.000000, 7.000000)' },
                    o.a.createElement('rect', {
                      fill: '#007398',
                      fillRule: 'nonzero',
                      width: '36',
                      height: '36',
                    }),
                    o.a.createElement('path', {
                      d: 'M30,18 C30,19.593758 29.7076053,21.0976492 29.122807,22.5117188 C28.5380088,23.9257883 27.7348979,25.1679634 26.7134503,26.2382813 C25.6920027,27.3085991 24.4951336,28.1757779 23.122807,28.8398438 C21.7504805,29.5039096 20.2846082,29.882812 18.7251462,29.9765625 C18.6627677,29.9765625 18.5964916,29.9804687 18.5263158,29.9882813 C18.45614,29.9960938 18.3898639,30 18.3274854,30 L18,30 C16.3469703,30 14.7914303,29.6835969 13.3333333,29.0507813 C11.8752364,28.4179656 10.6042939,27.5585992 9.52046784,26.4726563 C8.43664175,25.3867133 7.57895053,24.1171948 6.94736842,22.6640625 C6.31578632,21.2109302 6,19.6562583 6,18 C6,16.3437417 6.31578632,14.7890698 6.94736842,13.3359375 C7.57895053,11.8828052 8.43664175,10.6132867 9.52046784,9.52734375 C10.6042939,8.44140082 11.8752364,7.58203441 13.3333333,6.94921875 C14.7914303,6.31640309 16.3469703,6 18,6 L18.3274854,6 C18.3898639,6 18.45614,6.00390621 18.5263158,6.01171875 C18.5964916,6.01953129 18.6627677,6.0234375 18.7251462,6.0234375 C20.2846082,6.11718797 21.7504805,6.49609043 23.122807,7.16015625 C24.4951336,7.82422207 25.6920027,8.6914009 26.7134503,9.76171875 C27.7348979,10.8320366 28.5380088,12.0742117 29.122807,13.4882812 C29.7076053,14.9023508 30,16.406242 30,18 Z M27.7777778,21.8671875 C28.0116971,21.2734345 28.1910325,20.652347 28.3157895,20.0039063 C28.4405464,19.3554655 28.502924,18.6875034 28.502924,18 C28.502924,17.2812464 28.4327492,16.5820346 28.2923977,15.9023438 C28.1520461,15.2226529 27.9571163,14.578128 27.7076023,13.96875 L27.9883041,14.7421875 C27.9415202,14.7578126 27.6491255,14.8359368 27.1111111,14.9765625 C26.5730967,15.1171882 25.7271013,15.2578118 24.5730994,15.3984375 C24.6198833,15.8203146 24.6588692,16.2460916 24.6900585,16.6757813 C24.7212477,17.1054709 24.7368421,17.5468727 24.7368421,18 C24.7368421,18.5625028 24.7134505,19.1171848 24.6666667,19.6640625 C24.6198828,20.2109402 24.5653025,20.7421849 24.502924,21.2578125 C25.4074119,21.367188 26.1247537,21.4804682 26.6549708,21.5976563 C27.1851878,21.7148443 27.5594531,21.8046872 27.7777778,21.8671875 Z M12.6900585,18 C12.6900585,18.5468777 12.7134501,19.0781224 12.7602339,19.59375 C12.8070178,20.1093776 12.8693953,20.617185 12.9473684,21.1171875 C13.5555586,21.0703123 14.2144214,21.0312502 14.9239766,21 C15.6335318,20.9687498 16.4015553,20.9453126 17.2280702,20.9296875 L17.2280702,15.7265625 C16.3703661,15.7265625 15.578951,15.7109377 14.8538012,15.6796875 C14.1286513,15.6484373 13.4619913,15.6093752 12.8538012,15.5625 C12.8070173,15.953127 12.7680313,16.3515605 12.7368421,16.7578125 C12.7056529,17.1640645 12.6900585,17.5781229 12.6900585,18 Z M18.7251462,7.59375 L18.7251462,14.25 C19.5360664,14.2343749 20.2806984,14.2109377 20.9590643,14.1796875 C21.6374303,14.1484373 22.2651043,14.1093752 22.8421053,14.0625 C22.6549698,13.2187458 22.4249526,12.4335974 22.1520468,11.7070313 C21.8791409,10.9804651 21.5633546,10.3359403 21.2046784,9.7734375 C20.8460021,9.21093469 20.4561425,8.74218938 20.0350877,8.3671875 C19.614033,7.99218562 19.1773902,7.7343757 18.7251462,7.59375 Z M17.2280702,7.6171875 C16.7758262,7.7578132 16.3391834,8.01952934 15.9181287,8.40234375 C15.4970739,8.78515816 15.1111129,9.25390348 14.7602339,9.80859375 C14.409355,10.363284 14.0935687,11.0039026 13.8128655,11.7304688 C13.5321623,12.4570349 13.2982465,13.2343709 13.1111111,14.0625 C13.688112,14.1093752 14.3196847,14.1484373 15.005848,14.1796875 C15.6920112,14.2109377 16.4327446,14.2343749 17.2280702,14.25 L17.2280702,7.6171875 Z M17.2280702,22.4296875 C16.4639338,22.4453126 15.7543892,22.4648436 15.0994152,22.4882813 C14.4444412,22.5117189 13.8362601,22.5468748 13.2748538,22.59375 C13.4619892,23.3437538 13.695905,24.0429655 13.9766082,24.6914063 C14.2573113,25.339847 14.5691991,25.91406 14.9122807,26.4140625 C15.2553623,26.914065 15.6218304,27.3320296 16.0116959,27.6679688 C16.4015614,28.0039079 16.8070154,28.2421868 17.2280702,28.3828125 L17.2280702,22.4296875 Z M18.7251462,28.40625 C19.1462009,28.2812494 19.5555536,28.0507829 19.9532164,27.7148438 C20.3508792,27.3789046 20.7212458,26.96094 21.0643275,26.4609375 C21.4074091,25.960935 21.7153982,25.3828158 21.9883041,24.7265625 C22.2612099,24.0703092 22.4912271,23.3593788 22.6783626,22.59375 C22.1325509,22.5468748 21.5282684,22.5117189 20.8654971,22.4882813 C20.2027257,22.4648436 19.4892826,22.4453126 18.7251462,22.4296875 L18.7251462,28.40625 Z M18.7251462,20.9296875 C19.5516611,20.9453126 20.3196846,20.9687498 21.0292398,21 C21.738795,21.0312502 22.3898606,21.0703123 22.9824561,21.1171875 C23.0604292,20.617185 23.1228068,20.1093776 23.1695906,19.59375 C23.2163745,19.0781224 23.2397661,18.5468777 23.2397661,18 C23.2397661,17.5781229 23.2241717,17.1640645 23.1929825,16.7578125 C23.1617932,16.3515605 23.1228073,15.9453145 23.0760234,15.5390625 C22.4834278,15.6015628 21.824565,15.6484373 21.0994152,15.6796875 C20.3742654,15.7109377 19.5828503,15.7265625 18.7251462,15.7265625 L18.7251462,20.9296875 Z M27.4269006,13.359375 C26.8810889,12.2499945 26.1559499,11.2656293 25.251462,10.40625 C24.346974,9.5468707 23.3255418,8.86719 22.1871345,8.3671875 C22.6705677,9.05469094 23.0994133,9.87108902 23.4736842,10.8164062 C23.8479551,11.7617235 24.1442484,12.7968694 24.3625731,13.921875 C25.2982503,13.8124995 26.015592,13.6992193 26.5146199,13.5820312 C27.0136477,13.4648432 27.3177382,13.3906252 27.4269006,13.359375 Z M14.4210526,8.1328125 C13.7660786,8.36718867 13.1501004,8.66015449 12.5730994,9.01171875 C11.9960985,9.36328301 11.4580922,9.76562273 10.9590643,10.21875 C10.4600365,10.6718773 10.0039007,11.1679661 9.59064327,11.7070313 C9.17738585,12.2460964 8.82261357,12.8203095 8.52631579,13.4296875 C8.72904585,13.4921878 9.08771673,13.570312 9.60233918,13.6640625 C10.1169616,13.757813 10.8031146,13.851562 11.6608187,13.9453125 C11.9259273,12.7421815 12.3001925,11.6484424 12.7836257,10.6640625 C13.2670589,9.67968258 13.8128625,8.83594102 14.4210526,8.1328125 Z M7.98830409,14.8359375 C7.83235789,15.33594 7.7115014,15.8515598 7.62573099,16.3828125 C7.53996058,16.9140652 7.49707602,17.4531223 7.49707602,18 C7.49707602,18.6718784 7.55555497,19.3242156 7.67251462,19.9570313 C7.78947427,20.5898469 7.96491111,21.1953096 8.19883041,21.7734375 C8.43274971,21.7265623 8.82260936,21.6523443 9.36842105,21.5507813 C9.91423275,21.4492182 10.6237773,21.351563 11.497076,21.2578125 C11.4035083,20.7421849 11.3333336,20.2109402 11.2865497,19.6640625 C11.2397658,19.1171848 11.2163743,18.5625028 11.2163743,18 C11.2163743,17.5624978 11.2280701,17.1250022 11.251462,16.6875 C11.2748539,16.2499978 11.3177385,15.828127 11.380117,15.421875 C10.3664667,15.3124995 9.58284877,15.1992193 9.02923977,15.0820312 C8.47563076,14.9648432 8.12865567,14.8828127 7.98830409,14.8359375 Z M8.85380117,23.15625 C9.16569357,23.7031277 9.52046585,24.2148414 9.91812865,24.6914063 C10.3157915,25.1679711 10.7485357,25.6054668 11.2163743,26.0039063 C11.6842129,26.4023457 12.1871318,26.7617171 12.7251462,27.0820313 C13.2631606,27.4023454 13.8284571,27.6640615 14.4210526,27.8671875 C13.8596463,27.2421844 13.3567274,26.4921919 12.9122807,25.6171875 C12.467834,24.7421831 12.1052646,23.7734428 11.8245614,22.7109375 C11.0916143,22.7890629 10.4834332,22.8710933 10,22.9570313 C9.51656678,23.0429692 9.13450433,23.1093748 8.85380117,23.15625 Z M22.1871345,27.6328125 C23.2163794,27.1796852 24.1520426,26.5781288 24.994152,25.828125 C25.8362615,25.0781213 26.5380089,24.2109424 27.0994152,23.2265625 C26.8654959,23.1640622 26.5146222,23.0898442 26.0467836,23.0039063 C25.578945,22.9179683 24.970764,22.8281255 24.2222222,22.734375 C24.0038975,23.7187549 23.7193,24.6249959 23.3684211,25.453125 C23.0175421,26.2812541 22.6237839,27.0078094 22.1871345,27.6328125 Z',
                      fill: '#FFFFFF',
                    })
                  )
                )
              ),
              o.a.createElement(
                'symbol',
                { id: 'search', viewBox: '4.5 4.5 15 15' },
                o.a.createElement('title', null, 'search'),
                o.a.createElement('path', {
                  fill: 'currentColor',
                  d: 'M8.376 13.647c-0.729-0.758-1.131-1.767-1.131-2.838s0.402-2.081 1.131-2.838c0.729-0.758 1.699-1.176 2.73-1.176s2.001 0.417 2.73 1.176c0.729 0.758 1.131 1.767 1.131 2.838s-0.402 2.081-1.131 2.838c-0.729 0.758-1.699 1.176-2.73 1.176s-2.001-0.418-2.73-1.176zM18.415 17.494l-3.29-3.421c0.701-0.929 1.085-2.066 1.085-3.265 0-1.418-0.531-2.75-1.495-3.753s-2.246-1.555-3.61-1.555-2.645 0.552-3.61 1.555c-0.964 1.003-1.495 2.336-1.495 3.753s0.531 2.75 1.495 3.753c0.964 1.003 2.247 1.555 3.61 1.555 1.154 0 2.247-0.399 3.14-1.128l3.29 3.421 0.88-0.915z',
                })
              ),
              o.a.createElement(
                'symbol',
                { id: 'share', viewBox: '4.5 4.5 15 15' },
                o.a.createElement('title', null, 'share'),
                o.a.createElement('path', {
                  fill: 'currentColor',
                  d: 'M16 13.859c-0.82 0-1.555 0.385-2.060 0.992l-3.553-2.029c0.072-0.261 0.113-0.537 0.113-0.823s-0.041-0.562-0.113-0.823l3.553-2.029c0.504 0.607 1.239 0.992 2.060 0.992 1.516 0 2.75-1.311 2.75-2.922s-1.234-2.922-2.75-2.922c-1.516 0-2.75 1.311-2.75 2.922 0 0.263 0.036 0.517 0.098 0.76l-3.579 2.043c-0.503-0.579-1.22-0.944-2.019-0.944-1.516 0-2.75 1.311-2.75 2.922s1.234 2.922 2.75 2.922c0.798 0 1.516-0.365 2.019-0.944l3.579 2.043c-0.062 0.243-0.098 0.497-0.098 0.76 0 1.611 1.234 2.922 2.75 2.922s2.75-1.311 2.75-2.922c0-1.611-1.234-2.922-2.75-2.922zM16 5.625c0.827 0 1.5 0.715 1.5 1.594s-0.673 1.594-1.5 1.594c-0.827 0-1.5-0.715-1.5-1.594s0.673-1.594 1.5-1.594zM7.75 13.594c-0.827 0-1.5-0.715-1.5-1.594s0.673-1.594 1.5-1.594c0.827 0 1.5 0.715 1.5 1.594s-0.673 1.594-1.5 1.594zM16 18.375c-0.827 0-1.5-0.715-1.5-1.594s0.673-1.594 1.5-1.594c0.827 0 1.5 0.715 1.5 1.594s-0.673 1.594-1.5 1.594z',
                })
              ),
              o.a.createElement(
                'symbol',
                { id: 'submit', viewBox: '4.5 4.5 15 15' },
                o.a.createElement('title', null, 'submit'),
                o.a.createElement('path', {
                  fill: 'currentColor',
                  d: 'M14.955 8.414l-0.975-0.828-1.92 2.512-1.27-1.471-0.925 0.886 2.25 2.61 2.835-3.709h0.005zM11.965 16.974h1.25v-2.636h2.5v-1.318h-3.75v3.955zM16.71 14.458l-3.368 3.564h-5.382v-11.6h8.75v8.036zM6.71 5.105v14.236h7.152l4.098-4.339v-9.897h-11.25z',
                })
              ),
              o.a.createElement(
                'symbol',
                { id: 'write', viewBox: '4.5 4.5 15 15' },
                o.a.createElement('title', null, 'write'),
                o.a.createElement('path', {
                  fill: 'currentColor',
                  d: 'M17.559 7.406l-0.687 0.75-1.105-1.205 0.687-0.75c0.137-0.149 0.38-0.149 0.518 0l0.587 0.64c0.14 0.153 0.14 0.412 0 0.565zM12.272 13.181l-1.205 0.405-0.272-0.298 0.373-1.312 3.733-4.077 1.105 1.205-3.733 4.076zM18.421 5.901l-0.587-0.64c-0.297-0.327-0.695-0.506-1.119-0.506s-0.822 0.179-1.122 0.506l-5.498 6.008-1.274 4.468 4.099-1.379 2.283-2.493v6.281h-8.345v-11.25h5.79l1.001-1.178 0.15-0.162h-8.169v13.929h10.8v-8.962l1.991-2.175c0.619-0.675 0.619-1.773 0-2.449v0.002z',
                })
              ),
              o.a.createElement(
                'symbol',
                { id: 'checkmark', viewBox: '4.5 4.5 15 15' },
                o.a.createElement('title', null, 'checkmark'),
                o.a.createElement('path', {
                  fill: '#ff6c00',
                  d: 'M10.432 15.861c-0.142 0.137-0.301 0.206-0.478 0.206s-0.337-0.069-0.478-0.206l-2.976-2.877 0.957-0.925 2.498 2.415 6.643-6.474 0.903 0.925-7.068 6.936z',
                })
              ),
              o.a.createElement(
                'symbol',
                { id: 'time', viewBox: '4.5 4.5 15 15' },
                o.a.createElement('title', null, 'time'),
                o.a.createElement('path', {
                  fill: '#53565a',
                  d: 'M12.24 8.236h-1.2v3.999l3.047 1.895 0.626-1.043-2.473-1.537v-3.314zM14.982 15.177c-0.893 0.908-2.080 1.409-3.342 1.409-2.606 0-4.727-2.158-4.727-4.81s2.12-4.81 4.727-4.81c2.606 0 4.727 2.158 4.727 4.81 0 1.285-0.492 2.492-1.385 3.401zM11.639 5.794c-3.241 0-5.879 2.684-5.879 5.983s2.638 5.983 5.88 5.983c1.571 0 3.047-0.623 4.158-1.752 1.11-1.131 1.722-2.633 1.722-4.231 0-3.299-2.638-5.983-5.881-5.983z',
                })
              ),
              o.a.createElement(
                'symbol',
                { id: 'chevronRight', viewBox: '4.5 4.5 15 15' },
                o.a.createElement('title', null, 'chevron'),
                o.a.createElement('path', {
                  fill: 'currentColor',
                  d: 'M9.844 16.766l-0.766-0.766 4.156-4.156-4.156-4.156 0.766-0.766 4.922 4.922z',
                })
              ),
              o.a.createElement(
                'symbol',
                { id: 'cross', viewBox: '6 6 36 36' },
                o.a.createElement('title', null, 'cross'),
                o.a.createElement('path', {
                  d: 'M31.163 14.67L23.738 22.1l-7.43-7.432-1.952 1.958 7.425 7.432-7.425 7.426 1.951 1.958 7.431-7.432 7.425 7.432 1.958-1.958-7.431-7.426 7.43-7.432z',
                  fill: '#5C5C5C',
                  fillRule: 'evenodd',
                })
              )
            )
          );
        },
        C = (a(215), a(56)),
        k = a.n(C),
        z = u.default.div.withConfig({
          displayName: 'menu-controllerstyled__ChildContainer',
          componentId: 'kjufcf-0',
        })(['display:flex;flex-direction:column;justify-content:center;']),
        N = u.default.div.withConfig({
          displayName: 'menu-controllerstyled__Overlay',
          componentId: 'kjufcf-1',
        })([
          'background-color:#ebebebd9;display:none;height:100%;left:0;position:fixed;top:0;width:100%;z-index:10;@media (max-width:992px){display:block;}',
        ]),
        L = (a(55), a(269)),
        j = a.n(L),
        M = a(183),
        O =
          (a(189),
          a(51),
          Object(u.default)(d.Link).withConfig({
            displayName: 'hoverMenu__StyledLink',
            componentId: 'sc-1gvnrg8-0',
          })(['padding-bottom:16px;'])),
        _ = u.default.div.withConfig({
          displayName: 'hoverMenu__OuterContainer',
          componentId: 'sc-1gvnrg8-1',
        })(
          [
            'visibility:',
            ";position:absolute;right:0;margin:16px auto 0;z-index:8888889;padding:16px;border-top:2px solid #ff6c00;background:rgba(235,235,235,0.85);max-width:calc(100vw - 32px);&:before{position:absolute;top:-13px;right:0;content:' ';width:0;height:0;border-top:6.5px solid transparent;border-left:6.5px solid transparent;border-right:6.5px solid #ff6c00;border-bottom:6.5px solid #ff6c00;}",
          ],
          function (e) {
            return e.visible ? 'visible' : 'hidden';
          }
        ),
        S = u.default.div.withConfig({
          displayName: 'hoverMenu__InnerContainer',
          componentId: 'sc-1gvnrg8-2',
        })([
          "background:white;padding:16px;max-width:100%;text-align:left;white-space:nowrap;&:after{position:absolute;right:0;content:' ';width:0;height:0;border-top:6.5px solid transparent;border-left:6.5px solid transparent;top:-10px;border-right:6.5px solid #ebebeb;border-bottom:6.5px solid #ebebeb;}",
        ]),
        I = u.default.p.withConfig({
          displayName: 'hoverMenu__StyledText',
          componentId: 'sc-1gvnrg8-3',
        })(
          [
            'color:',
            ";font-family:nexus-sans;font-size:20px;line-height:28px;position:relative;width:fit-content;margin-bottom:16px !important;:after{background-color:transparent;transition:background-color 0.3s,bottom 0.2s;content:'';position:absolute;bottom:-4px;right:0;left:1px;height:2px;background-color:transparent;pointer-events:none;}&:hover{:after{background-color:#ff6c00 !important;}}",
          ],
          function (e) {
            return e.theme.colors.grey4;
          }
        ),
        F = (function (e) {
          function t(t) {
            var a;
            return ((a = e.call(this, t) || this).state = { visible: !1 }), a;
          }
          return (
            i()(t, e),
            (t.prototype.render = function () {
              var e = this,
                t = this.props,
                a = t.menuItems,
                n = t.to,
                i = t.label,
                r = this.state.visible;
              return o.a.createElement(
                O,
                {
                  onMouseEnter: function () {
                    return e.setState({ visible: !0 });
                  },
                  onMouseLeave: function () {
                    return e.setState({ visible: !1 });
                  },
                  className: 'anchor button-link-primary gh-nav-action',
                  to: n,
                  tabIndex: '0',
                  id: '5dfa035a-1b45-4b54-9bb8-dc50cf439c21',
                  'data-aa-region': 'aa-globalheader-navigation-link1',
                  'data-aa-name': 'aa-globalheader-navigation-Language editing',
                  label: i,
                },
                o.a.createElement('span', { className: 'anchor-text' }, i),
                o.a.createElement(
                  _,
                  { visible: r },
                  o.a.createElement(
                    S,
                    null,
                    a.map(function (e) {
                      return o.a.createElement(
                        d.Link,
                        { to: e.link },
                        o.a.createElement(I, null, e.title)
                      );
                    })
                  )
                )
              );
            }),
            t
          );
        })(o.a.Component),
        B = u.default.p.withConfig({
          displayName: 'mobile-menu-item__StyledText',
          componentId: 'o8dm48-0',
        })([
          "width:fit-content;margin-bottom:16px !important;:after{background-color:transparent;transition:background-color 0.3s,bottom 0.2s;content:'';position:absolute;bottom:-4px;right:0;left:1px;height:2px;background-color:transparent;pointer-events:none;}&:hover{:after{background-color:#ff6c00 !important;}}",
        ]),
        P = function (e) {
          var t = e.menuItems;
          return o.a.createElement(
            'div',
            null,
            t.map(function (e) {
              return o.a.createElement(
                d.Link,
                { to: e.link },
                o.a.createElement(
                  B,
                  { className: 'anchor button-link-primary gh-nav-action' },
                  e.title
                )
              );
            })
          );
        },
        T = a(185),
        D = u.default.header.withConfig({
          displayName: 'header__StyledHeader',
          componentId: 's055kz-0',
        })(['position:relative;&.open{z-index:1;}']),
        U = u.default.h2.withConfig({
          displayName: 'header__StyledTitle',
          componentId: 's055kz-1',
        })([
          'display:block;margin-block-start:0.67em;margin-block-end:0.67em;margin-inline-start:0px;margin-inline-end:0px;color:#53565a;font-size:24px;line-height:1.16667;font-weight:500;margin-left:16px !important;transition:font-size 0.3s,margin-left 0.3s;margin:0;padding:0;',
        ]),
        A = u.default.div.withConfig({
          displayName: 'header__StyledButtons',
          componentId: 's055kz-2',
        })([
          'a{margin-left:20px;line-height:2rem;&:first-child{margin-left:0;}}',
        ]),
        R = {
          translation: [
            { title: '翻译服务', link: '/language-translation-services/' },
            {
              title: '简体中文（加急）',
              link: '/language-translation-services/translate-chinese-simplified/',
            },
          ],
          languageEditing: [
            {
              title: '标准',
              link: '/language-editing-services/standard-edition/',
            },
            {
              title: '高级',
              link: '/language-editing-services/language-editing-plus/',
            },
            {
              title: '加急',
              link: '/language-editing-services/language-editing-express/',
            },
            {
              title: 'LaTeX',
              link: '/language-editing-services/latex-editing/',
            },
            {
              title: '博士论文',
              link: '/language-editing-services/phd-thesis-editing/standard/',
            },
            {
              title: '博士论文高级服务',
              link: '/language-editing-services/phd-thesis-editing/plus/',
            },
            { title: '团购', link: '/group-deals/' },
          ],
          webshop: [
            { title: '期刊', link: '/article-services/journal-issues/' },
            {
              title: '出版认可',
              link: '/article-services/publication-recognition/',
            },
          ],
        },
        q = u.default.p.withConfig({
          displayName: 'header__MobileMenuTitle',
          componentId: 's055kz-3',
        })(
          [
            'color:',
            '!important;width:fit-content;margin-bottom:16px !important;margin-top:',
            ' !important;',
          ],
          function (e) {
            return e.theme.colors.grey3;
          },
          function (e) {
            return !e.noMargin && '32px';
          }
        ),
        W = '',
        Z = (function (e) {
          function t(t) {
            var a;
            return ((a = e.call(this, t) || this).state = { user: '' }), a;
          }
          i()(t, e);
          var a = t.prototype;
          return (
            (a.componentDidMount = function () {
              if (T.a.isChinese()) {
                var e = Object(M.a)('blog'),
                  t = Object(M.a)('blogCn');
                j()("a[href$='" + e + "']").attr('href', t);
              }
            }),
            (a.render = function () {
              var e = this.props,
                t = e.menuOpen,
                a = e.setMenuOpen,
                n = e.popupOpen,
                i = e.setPopup,
                r = this.state.user;
              return (
                r.isLoggedIn &&
                  (W = (
                    ((W =
                      (W = r.customerFullname).match(/\b\w/g) || []).shift() ||
                      '') + (W.pop() || '')
                  ).toUpperCase()),
                o.a.createElement(
                  D,
                  {
                    id: 'gh-cnt',
                    className: 'highlight-none ' + (n ? 'open' : ''),
                  },
                  o.a.createElement(
                    'div',
                    {
                      id: 'gh-main-cnt',
                      className:
                        'u-flex-center-ver u-position-relative gh-sides-padding',
                    },
                    o.a.createElement(
                      d.Link,
                      {
                        id: 'gh-branding',
                        className: 'u-flex-center-ver',
                        to: '/',
                      },
                      o.a.createElement(
                        'svg',
                        {
                          role: 'img',
                          width: '58',
                          height: '64',
                          viewBox: '0 0 58 64',
                          version: '1.1',
                          xmlns: 'https://www.w3.org/2000/svg',
                          enableBackground: 'new 0 0 58 64',
                          xmlSpace: 'preserve',
                          className: 'gh-logo',
                          'aria-labelledby': 'gh-elsevier-logo-wordmark',
                          focusable: 'false',
                        },
                        o.a.createElement(
                          'title',
                          { id: 'gh-elsevier-logo-wordmark' },
                          'Elsevier logo with wordmark'
                        ),
                        o.a.createElement('path', {
                          d: 'M16.16 24.15c.62-.33.98-.73 1.04-1.2.1-.42-.28-.38-.37-.3-.35.28-.8.71-1.23 1a4.5 4.5 0 0 0-.6.08c-.05-.02-.11-.1-.08-.13.39-.25.82-.5 1.1-.83.18-.21.1-.4-.25-.44-.39-.06-.85.1-1.21.42-.61.52-.9 1.67-.96 2.4-.13.12-.17.12-.3.18a3.04 3.04 0 0 1 .32-2.37c.06-.15.02-.39-.2-.46-.13-.05-.19-.02-.25.12-.3.86-.82 1.23-1.55 1.77-.07.06-.73.42-.9.52-.58-.18-1.23-1.26-1.78-2.07a.5.5 0 0 0-.48-.21c-1.2.13-2.09.04-2.73-.9-.29-.39-.42-.46-.78-.12-.4.42-.8.74-1.2 1.08-.21.13-.36.09-.45-.18a7.57 7.57 0 0 1-.4-2.52c0-.36.04-.9.05-1.25a3.08 3.08 0 0 0-.76-.51C1.18 17.75.01 16.63 0 16.3c0-.08.06-.28.34-.44 1.47-.65 2.61-.1 3.05-.17.37-.03.49-.3.43-.83a2.9 2.9 0 0 1 .94-2.6c.5-.53.46-1.12.34-1.77-.06-.3-.13-.38-.43-.35-.8.18-.76.2-.91.9-.09.45-.25.91-.5 1.28-.32.51-.75.94-1.13 1.39-.13.18-.28.18-.47.06a2.62 2.62 0 0 1-1.03-3.31c.13-.35.32-.72.53-.91l.1.04c0 .06 0 .14-.02.2l-.24.74c-.3.87-.25 1.69.33 2.43.19.24.36.31.46.2.37-.37.75-.72 1.07-1.12.4-.45.51-1 .4-1.57a9.96 9.96 0 0 0-.11-.65c-.06-.31-.19-.29-.34-.1-.36.36-.53.65-.7 1.32a.52.52 0 0 1-.17.24.7.7 0 0 1-.08-.35c.1-.6.24-1.13.62-1.52.25-.27.19-.42-.05-.49-.86-.24-1.6-.48-2.25-1.28A.72.72 0 0 1 0 7.2c0-.17.09-.3.28-.44.76-.52 1.52-1.06 2.27-1.22.3-.06.46-.08.61-.1-.34-1.06-.7-2.33-.9-3.51 0-.24.17-.9.26-1.09.17-.02.37-.02.67.09.35.12.67.34.99.54.31.18.4.18.6-.1.35-.51.75-.96 1.28-1.23.18-.09.3-.15.42-.15.17 0 .3.1.47.36.29.47.54 1.01.8 1.5.3.51.62.54 1.08.21.51-.34.97-.67 1.44-1.06.44-.34.56-.34 1.04-.01.43.3.9.85 1.13 1.33.05.09 1.05-.45 1.08-.69.04-.43.16-.74.32-1.09.21-.43.51-.55.78-.55.25 0 .72.28 1.07.5l.76.44c.4.22.42.22.66-.15.27-.42.5-.5 1.06-.5 1.1 0 2.1.28 2.86 1.19.14.18.27.2.44.03.31-.32.6-.44 1.18-.44h1.02c.23 0 .38.02.59-.28.28-.4.6-.79 1.05-.79.72 0 1.66 1.01 2.14 1.88L27.2 2A5.12 5.12 0 0 0 25.32.82c-.44-.18-.63 0-.57.45.06.53.2 1.07.33 1.6.15.49.58.92 1.06 1.13l.03.18c-.08-.02-.18-.05-.3-.06a2.19 2.19 0 0 0-.94.03c-.6.15-1.15.41-1.69.64-.27.13-.27.2-.04.42.3.28.58.6.92.85.97.73 1.93.58 3 .17l.5-.17c.45-.08.93.1 1.3.44l1.08.97c.34.33.42.62.2 1.03-.35.69-.74 1.39-1.13 2.06a.67.67 0 0 1-.25.26c-.13-.1-.25-.35-.12-.57.48-.6.78-1.44.88-2.01.1-.56-.2-.82-.73-.68l-.45.17c-.19.07-.26 0-.3-.2-.07-.17-.16-.28-.22-.46-.12-.3-.3-.4-.55-.2-.45.28-.77.56-1.04 1a3.79 3.79 0 0 0-.42 2.33c.01.1.09.17.15.23a.43.43 0 0 0 .2-.2c.14-.35.23-.7.29-1.08.03-.21.06-.59.13-.78.05-.1.21-.06.3-.03.23.09.32.2.35.36-.45.57-.73 1.42-1.03 2.18-.05.1-.24.23-.36.23-.14-.01-.33-.13-.37-.25-.18-.48-.5-.95-.63-1.43-.33-1.63-.43-1.72-.5-1.82a10.02 10.02 0 0 0-2.42-2.76c-.08-.08-.12-.17-.18-.24.09-.04.16-.12.25-.15.31-.13.63-.25.95-.36.4-.15.68-.4.86-.77.11-.21.26-.42.38-.63.17-.3.15-.46-.07-.72a1.55 1.55 0 0 0-1.58-.49c-.61.15-.99.59-1.18 1.17-.08.2-.1.43-.1.65 0 .33.1.4.37.23.45-.37.95-.67 1.43-.99-.22.51-.54.91-.98 1.2-.3.19-.6.35-.9.52-.25.18-.34.1-.42-.2-.07-.32-.04-.65-.04-.97A2.12 2.12 0 0 0 19.35.97l-.79-.33a.76.76 0 0 0-.3.69c.06.87.19 1.5.34 2.24.14.3.47.42.81.48.2-.1.36-.38.09-.82l-.39-.77c-.04-.1-.09-.19-.12-.3-.01-.04-.03-.11 0-.16.05.02.1.02.2.12.5.54.9 1.15 1.16 1.91.1.3.01.42-.28.45-.66.06-1.33.1-1.97.24-1.05.22-1.4.6-1.78 1.3-.16.3-.24.49-.25.67.37.03.79.01 1.39-.1a3.98 3.98 0 0 0 1.44-.47c.28-.33.5-.66.92-.96.12-.09.4-.12.51-.06a5.5 5.5 0 0 1 2.75 2.7c.04.12.16.24.22.34.12.14.07.19-.1.18-.24-.07-.5-.13-.72-.22-.09-.04-.16-.18-.2-.28l-.22-.62c-.12-.25-.18-.25-.43-.16-.13.05-.27.1-.48.2-.18.07-.27.1-.31-.1-.06-.3-.14-.6-.21-.87-.12-.33-.25-.4-.57-.24-.6.31-1.04.77-1.34 1.37-.28.58-.39.98-.13 2.52.06.3.3.67.58.76l2.6.8c.13 0 .21.15.05.25-.32.22-.67.41-1 .62-.17.1-.26.05-.34-.1a2.04 2.04 0 0 0-1.07-.98c-.17-.08-.26-.05-.33.13-.12.28-.25.69-.36.98-.06.15-.13.21-.3.1-.74-.62-1.52-.65-2.43-.53-.45.06-.66.18-.55.63.25 1.25 1.34 1.83 2.27 2.23a.63.63 0 0 0 .32-.25c.14-.2.1-.4-.1-.58-.36-.31-1.12-.67-1.5-1.01-.06-.2.37-.38.6-.23.68.31 1.2.87 1.74 1.4.28.27.41.24.5-.15.1-.3.2-.76.29-1.1.05-.18.16-.12.2-.01.07.26.15.6.15.9 0 .32-.11.6-.2.9-.06.3-.29.46-.54.4-1.15-.11-2.02.43-2.73.45-.16 0-.5-.1-.67-.18-.25-.2.12-.22.2-.22.3 0 .75 0 .99-.13-.07-.1-.2-.21-.31-.29-.64-.52-1.36.03-1.91.31-.31.17-.33.21-.2.54.2.5.56.69 1.05.69.28 0 .55.04.84.03a1 1 0 0 0 .4-.1c.37-.14.7-.32 1.04-.47.42-.06.41.15.22.36l-.85.52c-.09.05-.19.08-.25.14-.12.09-.27.24-.25.3.06.11.18.23.32.28.4.12.8.18 1.18.27.62.12.88-.05 1.05-.66.09-.34.2-.66.36-.97.1-.2.22-.22.34-.02.42.78.86 1.54 1.31 2.3.08.17 0 .25-.16.23-.97-.1-1.93-.21-2.9-.36-.33-.05-.65-.26-.98-.4-.5-.23-1-.44-1.57-.42-.49.01-.77.3-.6.77.22.67.47 1.36.74 2.03.19.46.64.63 1.13.67.23.03.15-.13.09-.24l-.8-1.73c-.1-.29-.02-.33.14-.09.44.66.9 1.29 1.3 1.96.24.42-.06.54-.36.55-1.01-.1-1.93-.45-2.9-.82-.1-.04-.24-.25-.21-.34.18-.17.4 0 .6 0 .23.04.33-.06.24-.24a.92.92 0 0 0-.49-.45 5.97 5.97 0 0 0-1.44-.52c-.3-.06-.5.07-.44.34.08.35.24.66.42 1.02.05.1.05.24.02.34-.18-.01-.4.05-1.15-.27-.75-.31-.76-.52-.76-1.44 0-.2 0-.59.04-.77.08-.25.1-.3.33-.26.78.16 1.57.37 2.34.74.23.1.45.3.69.39.2.07.3 0 .27-.2a.7.7 0 0 0-.44-.6c-.82-.35-1.64-.74-2.46-1.07-.2-.08-.27-.17-.16-.38.33-.54.5-1.17.36-1.85 0-.05.06-.12.12-.18a.5.5 0 0 1 .37.46c.06.58.45.98.83 1.37.77.8.77.8 1.85.54.14-.02.24-.12.36-.2-.1-.08-.2-.22-.34-.28-.2-.1-.42-.16-.64-.25-.72-.27-.93-.78-.69-1.54a26 26 0 0 0 .67-2.09c.08-.33.1-.68.12-1.03 0-.2.15-.2.27-.22l1.57-.1c.4-.03.85-.5 1.01-.77l.52-.85a1.09 1.09 0 0 0-1.07-.16c.12-.39.28-.76.28-1.13 0-.24-.06-.53-.16-.78-.1-.24-.27-.28-.47-.13-.38.32-.7.7-.82 1.22s-.34 1.47-.23 1.64c.24-.18.56-.42.77-.48.1-.03.27-.01.36.06-.35.33-.77.6-1.16.8-.29.13-.4-.04-.35-.32.34-1.3.13-1.4.02-2.04a7.5 7.5 0 0 0-.97-2.24c-.14-.18-.36-.12-.66.24-.48.58-.6 1.07-.85 2.07l-.06.2-.34.3-.15-.17c.13-.46.27-.73.27-1.1 0-.45-.2-.77-.5-1.02-.37.24-.71.54-.8.7a.99.99 0 0 0 .02 1.14c.38.67.32 1.34.2 2.13l-.1-.03a8.88 8.88 0 0 0-.28-1.52c-.08-.32-.29-.59-.46-.87-.17-.25-.32-.79-.18-1.01.2-.35.83-.53 1.07-.85.25-.38.13-.54.45-.88.19-.23.6-.7.9-.54.9.45 1.86.55 2.87.42.43-.06.52-.05.64-.48.1-.36.15-.12.51-.24.61-.2.93-.75.93-1.4 0-.36.02-.73-.02-1.1-.03-.32-.15-.63-.25-.92-.08-.19-.21-.15-.3-.01-.25.33-.67.98-.9 1.34-.13.21-.24.42-.35.64-.06.17-.14.21-.29.05a3.26 3.26 0 0 0-.53-.46c-.33-.21-.36-.87-.23-1.29.14.08.24.24.33.45.12.28.18.6.4.7.29.15.58-.45.54-.86 0-.05-.03-.2-.1-.3-.32-.57-1.05-1.03-1.5-1.03-.52 0-.85.64-.64 1.25.06.16.12.28.2.43-1.23.65-1.56 1.06-2.05 1.63-.06.07-.12.27-.06.37.23.44.14.59-.33.85-.21.12-.5.23-.72.3-.03.02-.09-.03-.15-.04a.3.3 0 0 1 .06-.12c.3-.67.63-1.31.91-1.99.3-.73-.36-1.41-.95-1.64-.39-.15-.7-.06-.96.29-.65.78-.79 2.05.12 3.25.14.2.1.28-.13.3-.52.04-1.04.1-1.58.13a2.1 2.1 0 0 0-1.6.85c-.12.18-.28.22-.45.1-.41-.25-.76-.19-1.19.06-.7.37-1.52.66-1.97.66-.07 0-.16-.06-.22-.12.04-.06.1-.15.25-.2.43-.1.78-.21 1.16-.32.07-.07.1-.24.14-.31-.07-.1-.22-.23-.33-.24a5.28 5.28 0 0 0-1.09 0C2.16 6 1.46 6.44.86 7c-.28.28-.3.57 0 .8.7.5 1.45 1 2.4.75.66-.21 1.07-.7 1.5-1.18.36-.38.8-.83 1.22-.35.61.7.73 1.43 1.73 1.3.38-.04.54-.17.64-.53l.08-.43c.03-.28-.12-.42-.39-.31-.18.06-.34.16-.52.2-.1.03-.21-.01-.33-.04.01-.1.03-.24.1-.3.18-.12.4-.22.6-.31.75-.2 1.46-.35 2.2-.5a.64.64 0 0 1 .23 0l-.07.21c-.27.62-.63.81-1.12.93-.06.06-.18.2-.27.48-.31 1-.13 2.04.54 2.76.24.27.54.49.85.68.52.3.66.8.85 1.33.12.33.25.66.4.99-.42.3-.77.65-1.01 1.08-.1.1-.18.06-.24-.06l-.29-.71c-.26-.63-.7-1.03-1.4-1.09-.25-.02-.5-.06-.74-.09-.29-.03-.48.1-.58.43-.39 1.2-.02 2.24 1.13 2.88-.92.23-1.68.6-2.15 1.24.05.18.33.42.69.57.9.37 1.82.33 2.67.04.5-.18.52-.06.61.3l.25 1.12c.06.27-.09.42-.34.33-1.37-.4-3-1.06-4.18-1.85a6.2 6.2 0 0 0-1.55-.46c-.18.1-.33.23-.49.2a8.77 8.77 0 0 1-1.48-.52c-.24-.14-.25-.21.05-.25.46 0 1.3.2 1.73.2.42-.13.42-.2.16-.38-1.01-.8-2.15-.61-3.28-.42-.4.08-.43.27-.2.59 1.46 1.65 2.54 1.64 4.32 1.43 1.16.74 2.32 1.4 3.67 1.83l.03.2c-.97.06-1.88.22-2.76.4-.44.09-.53.36-.29.76.36.58.93.85 1.58 1.01.47.14.94.1 1.4-.09.54-.25.89-.7 1.4-.98.3-.16.8.02 1.1.1.46.15.9.35 1.37.42 1.86.25 3.84.42 5.57.28-.21.4-.36.78-.5 1.17-.09.24-.01.3.24.28.36-.01.72-.22.87-.5.03-.28.03-.53.09-.81.03-.15.07-.36.17-.38.07-.01.5.06.45.18-.15.44-.28.77-.46 1.2.16.03.33.06.5.06.7 0 .81-.1.78-.8a2.9 2.9 0 0 0-.09-.59c-.09-.52.02-.88.47-1.12.44-.22.9-.15 1.34-.1a8.2 8.2 0 0 1 3.79 1.71c.55.44.07 1.05.07 1.88 0 .52-.1 1.06-.09 1.33.02.43.2.66.36.78.48.37 1.01.74 1.52 1.07.52.34.78.55 1.4.76.14.04.32.04.44.03a1.6 1.6 0 0 0-.03-.64c-.3-.2-.72-.3-1.2-.46-.09-.03-.18-.15-.23-.26a.9.9 0 0 1 .35-.2l.78-.17c.06-.02.16-.1.2-.17-.04-.07-.1-.16-.16-.17-.32-.1-.74-.17-1.01-.24-.1-.03-.15-.12-.23-.21a.98.98 0 0 1 .38-.2l.8-.1a.42.42 0 0 0 .21-.13c-.03-.08-.07-.18-.13-.21-.17-.08-.99-.38-1.08-.47-.07-.07-.09-.17-.12-.3.12-.05.27-.1.38-.08l.67.01c.09 0 .2-.06.27-.13a.6.6 0 0 0-.18-.21c-.32-.2-.44-.34-.8-.5-.17-.1-.25-.2-.28-.41.12-.03.3-.05.45-.02.24.06.37.14.63.18.07.02.2-.01.28-.03a.28.28 0 0 0-.07-.2c-.1-.1-.23-.15-.35-.24-.18-.12-.49-.42-.67-.57-.06-.05-.03-.2-.04-.25l.2.01c.24.05.6.15.8.18.36.07.31.02.16-.24-.22-.2-.45-.33-.66-.56-.06-.08-.04-.21-.03-.32.34.02.69.18 1 .18.03-.06.05-.1.05-.18a5.1 5.1 0 0 0-.25-.6c-.09-.23.03-.32.2-.25.24.1.62.3.88.36.1.03.23 0 .36-.05-.12-.24-.26-.43-.42-.67-.03-.06 0-.15.05-.22.41.12.83.4 1.2.5.17.07.28 0 .32-.08.03-.1-.27-.4-.25-.52.01-.08.03-.1.07-.15l.7.22c.51.13.8.18.88.06.1-.03-.01-.27-.16-.55.4-.03.45.16 1.16.3.27.07 4.02-.46 5.54-.93.6-.2 1.3-.5 1.86-.76l.18.04c.43 1.1 1.34 1.44 2.27 1.54.27.03.56.05.85.06.27 0 .33-.07.25-.34a4.8 4.8 0 0 0-1.39-2.36l-.6-.37c-.26-.27-.23-.58.05-.8.48-.32 1.12-.63 1.6-.93.7-.45.94-1.14.9-1.87a.62.62 0 0 0-.26-.49.78.78 0 0 0-.36.25c-.19.4-.38.73-.55 1.08-.13.07-.27.1-.39.15-.03-.12-.1-.24-.07-.36.21-.62.76-1.12 1.12-1.52.15-.25-.07-.35-.18-.33-.4.09-.84.24-1.14.58a8.06 8.06 0 0 0-1.58 3.27c-.07.31-.2.42-.3.71-.13.44-.12.54.26.81.55.36 1.27.69 1.79 1.06.21.23.1.32-.12.31a2.07 2.07 0 0 1-1.5-.67c-.2-.22-.37-.36-.6-.39-.54.14-1.29.36-1.85.44-.32.06-.57.19-.74.49-.11.25-.34.3-.6.2-.4-.11-.8-.25-1.2-.34a4.5 4.5 0 0 0-2 .14c-.27.04-.33-.02-.25-.28.07-.33.18-.65.24-.97.01-.14.03-.35-.1-.42-.13.06-.32.09-.38.18-.21.31-.37.64-.57.98-.13.27-.18.27-.46.15a5.1 5.1 0 0 1-1.13-.69c-.27-.43-.56-.79-.7-1.16-.05-.1.1-.18.23-.18.3.24.66.54.93.8.18.2.24.4.36.66.03.06.32.05.37-.06.04-.1.09-.25.13-.46.1-.4.03-.95-.33-1.31-.44-.45-.74-.54-1.35-.96-.76-.52-.87-.49-1.15.02-.22.42-.37.88-.37 1.4.2 1.22.49 1.72 1.97 2.48a.41.41 0 0 1-.12.2c-.1.08-.15.13-.32.13-.52-.02-1.25-.03-1.82-.08-.16-.01-.26-.06-.3-.15a7.5 7.5 0 0 1 .66-5.4.9.9 0 0 1 .36-.39c.31-.16.8-.37 1.1-.5.18-.08.27-.02.35.16.13.48.18.82.22 1.23.02.25.03.5.13.55.24.1.45-.1.57-.3.45-.73.57-1.55.24-2.43-.03-.08.04-.24.13-.29 1.02-.41 1.97-.83 3-1.23.58-.03 1.32.03 2.35.2.17.02.53.32.9.53-.47.24-1.16.74-1.64 1.2-.13.14-.3.32-.18.7.4-.02.6-.13.9-.22.46-.13.75-.2 1.12-.2a2 2 0 0 1 .3.04.55.55 0 0 1-.14.31c-.13.12-.34.1-.49.18-.15.1-.3.25-.2.43.07.12.27.26.41.24.48-.03.92-.09 1.42-.24.22-.18 1.06-1.28.58-1.38-.27-.06-.85-.1-1.1-.23a.5.5 0 0 1 .3-.34c.26.04.56.12.96.16a5.9 5.9 0 0 0 1.97-.09c.27-.1.36-.2.27-.37a3.1 3.1 0 0 0-1.83-1.6c-.36-.1-.8-.02-1.17-.02l-3.22-.03c-.07 0-.15-.06-.22-.1.06-.05.12-.11.18-.14.3-.18.65-.33.95-.54.46-.31.75-.76.88-1.33a.55.55 0 0 0 0-.31c-.3-1.1-.9-1.9-2.15-2.04l-.62-.1c-.23-.02-.32.08-.32.29 0 .39.02.6 0 1 0 .2.1.27.33.3a7.7 7.7 0 0 1 1.7.49c.33.13.4.33 0 .67l-.9.64c-.16.1-.23.02-.25-.13-.02-.24-.02-.5-.06-.73a.5.5 0 0 0-.13-.23.66.66 0 0 0-.48.4c-.12.32-.2.62-.25.93a.98.98 0 0 1-.69.8c-.18.05-.34-.02-.31-.19.03-.2.07-.4.13-.6.29-.7.44-1.3.38-1.96a14.1 14.1 0 0 1-.1-1.38c-.02-.2.1-.38.3-.44.54-.21 1.05-.42 1.62-.6.19-.07.35.01.5.2l1.14 1.34c.3.32.38.31.64-.05.24-.34.5-.65.88-.86.2-.1.2-.29-.03-.38-.43-.16-.86-.25-1.31-.4-.1-.03-.21-.03-.32-.07-.07-.03-.16-.12-.16-.18s.09-.15.16-.18c.82-.29 1.5-.56 2.23-.84.2-.09.3-.25.27-.46-.02-.27-.1-.5-.14-.76-.04-.24-.2-.42-.45-.45-1-.1-1.6.18-2.28.88a.62.62 0 0 0-.16.55c.12.02.22.02.31-.01.48-.14.8-.28 1.07-.45.18-.2.32-.4.42-.4.06 0 .17.25.2.34-.1.12-.2.24-.99.58a22.83 22.83 0 0 1-4.38 1.51c-.2.02-.19-.11-.14-.2.28-.49.6-1 .91-1.52.3-.18.38-.1.27.18-.09.21-.2.4-.33.62-.03.2.06.25.18.23a1.68 1.68 0 0 0 1.24-1.49c0-.25-.12-.34-.38-.33-.38.03-.8.06-1.17.17-.7.18-1.12.67-1.35 1.31-.1.3-.16.6-.22.91-.06.33-.34.45-.63.61-.49.3-.74.24-1.16.32a6.9 6.9 0 0 0-1.05.24c0-.12-.03-.23 0-.3.24-.38.45-.75.7-1.1.35-.51.26-.8-.3-1a2.08 2.08 0 0 0-2.4.84c-.3.48-.52 1.05-.73 1.57-.13.31 0 .5.33.57.51.09 1.12-.1 1.58-.23-.03.15-.04.73-.09.85l-.3.65c-.19.32-.4.43-.75.26a15.8 15.8 0 0 1-1.57-.85c-.6-.35-1.18-.6-1.85-.6a.9.9 0 0 1-.2-.02c-.22-.05-.23-.12-.1-.26.17-.17.18-.34.08-.55l-.69-1.28a3.5 3.5 0 0 1-.33-.75c.17-.03.8.18.8.3.05.7.26 1.2.63 1.64.28.28.54.1.57-.18.05-.37-.45-.97.2-2.35.28-.62 1.14-1.68 1.7-1.68.3 0 .55.13.73.57.1.2.17.68.26.88.08.2.18.3.4.28.54-.07 1.29-.4 1.9-.48.39-.06.69.91.88 1.26.3.52.44.97.78.41.58-.8.85-1.7 1.47-1.98A4.33 4.33 0 0 1 39.05.5c.27.03.35.13.29.4-.05.16-.06.33-.1.5-.06.19.11.26.32.1.29-.17.5-.4.7-.66C40.78.28 41.3 0 42.32 0c.48 0 .85.1 1.28.25.33.12.38.17.29.5l-.29.96c-.1.44-.03.5.36.72.34.2.61.34.82.6a.7.7 0 0 0 .43-.15A5.17 5.17 0 0 1 47.06.79c.32-.18.4-.16.53.15.27.68.42 1.27.47 1.91.36-.42.78-.87 1.08-1.2C50.22.63 51.29.64 52.74 1c.36.1.08.46-.13.74l-.28.42c-.09.15-.16.16-.28.03-.18-.21-.36-.58-.54-.76-.33-.33-.91-.14-1.31.1a5.37 5.37 0 0 0-1.94 1.99 10.5 10.5 0 0 1-1.7 2.01c-.26.1-.26.09-.2-.18a7.15 7.15 0 0 0 1.18-3.71.89.89 0 0 0-.69.15c-1 .56-1.5 2.55-1.64 3.88-.03.28-.03.5-.28.64-.42.24-.58.34-1 .53-.1.02-.16 0-.25-.01.2-.88.06-1.5-.45-2.33-.09-.16-.2-.24-.39-.18-.1.06-.2.14-.43.32a3.77 3.77 0 0 0-1.18 2.89c0 .2.2.2.34.1.18-.15.27-.27.38-.46.25-.42.46-.86.7-1.28.04-.1.16-.17.25-.2.05.1.05.21.03.3l-.18.8a2.5 2.5 0 0 1-.8 1.1c-.07.1-.12.28.08.3.86.04 1.36-.06 2.1-.45.78-.4 1.3-.73 1.64-.69.23.03 1.4.37 1.5.45-.06.12-.15.16-.22.24-.12.1-.69.41-.94.62-.4.33-.54.48-.46 1.15.04.3.09.58.16.87.03.09.1.22.16.24.1 0 .2-.08.26-.15.33-.4.64-.84.97-1.24a.76.76 0 0 1 .2-.12c0 .08.02.15 0 .2-.07.49-.32.86-.62 1.22l-.2.25c-.26.37-.28.43-.02.8.3.44.35.93.25 1.4-.07.35-.18.87-.25 1.38-.63.29-1.27.7-1.8 1.06-.34.3-.4.54-.4.61.16.2.31.23.62.36.44.14 1.26-.03 1.41-.5.05-.11.1-.32.1-.51.16.03.3.03.34.16.16.5.3.84.62 1.17-.04.13-.1.23-.24.44-.19.31-.35.58-.62.52-.1-.01-.21-.04-.33-.04-.2 0-.4 0-.37.36.04.46.1.67 0 1.14-.06.26-.14.54-.4.53-.63-.05-1.04-.51-1.65-.5-.52.02-.88-.07-1.15-.2-.32-.17-.55-.35-.7-.44-2.53.42-5.32.93-7.49 1.4-.23.05-.22.2-.26.44-.12.55-.33 1.09-.42 1.64-.02.09.1.2.16.28.06-.06.15-.1.21-.18.13-.19.22-.41.37-.6.26-.28.94.02 1.06.4.1.23-.22.34-.2.6.02.22.34.42.34.7 0 .25-.1.41-.14.54.94.6 1.17 1.1 1.2 1.88.03.24.03.36.16.5.13.13.34.32.43.44.44.51.84 1.32 1.14 1.4.15.05.53.08.82.05l.06.16c-.1.23-.36.51-.6.59-.69.22-1.03-.81-1.4-1.4a5 5 0 0 0-.58-.77c-.3.33-.8 1.66-.76 2.29.2.85.7 1.69 1.03 2.3.23.38.68.51 1.12.68.37.13.64.2 1.02.09.2-.05.27-.06.36-.13l-.01-.77c.1-1.4.32-2.8.41-4 0-.32.24-.86.65-1.14.43-.3.6-.7.58-1.21a.95.95 0 0 1 .1-.5c.14-.28-.13-.28-.4-.32-.3-.05-.37-.16-.22-.43.28-.47.68-.87 1-1.32.2-.32.3-.55.37-.74-.08-.39-.05-.97.34-.99 1.27-.15 1.8-.04 2.61.57.05.08.06.2.06.3 0 .1.23.18.66.61.33.31.65 1.18.09 2.52.28.17.27.43.24.73-.02.26.06.3.3.39.3.1.46.28.71.9.22.6.87 2.17 1.25 6.02-.07 1.21-.28 2.1-.52 3.09.26 1.85.55 4.12.78 7.23.19 2.94.24 4.45.3 5.66.52.04.68.15.79-.29l.1-.41c.1-.29.39-.19.4-.03l.32.94c.07.27.15.44.25.7.35.48.5.06.5-.29.04-.3.04-.55.04-.82.06-.35.24-.37.37-.13l.46 1.09c.17.38.35.48.42.25.06-.31.07-.86.06-1.3-.07-.25-.18-.52-.22-.74 0-.3.24-.24.3-.15a34.9 34.9 0 0 1 1.63 2.13c.3.18.48-.13.4-.25-.02-.12-.17-.27-.17-.51.04-.38.4-.21.48-.07.33.33.55.76.74 1.11a.7.7 0 0 0 .3.15c.07-.1.1-.25.09-.35-.02-.12-.16-.4-.2-.53.14-.23.42.06.51.15.1.1.2.27.33.48.18.28.48.52 1.14.61.01.06.04.14.04.2-.09.06-.24.13-.64.2-.69.14-1.55.16-2.5.05a2.9 2.9 0 0 0-1.84.4c-.4.23-.8.2-1.27.18-.9-.04-1.8-.04-2.72-.06-1.9-.05-2.85.33-5 .44-.7 0-2.16-.36-2.16-.81 0-.31.18-.57.18-.73 0-.2-.04-.25-.22-.3-1.53-.27-3.04.08-4.43.34-1.18.18-1.8-.01-2.42-.5a3.13 3.13 0 0 1-.86-.91 12.22 12.22 0 0 0-2.39-2.27c-1-.8-2.27-2.25-3.06-3.25-.18-.21-.49-1.23-.6-1.52a3.06 3.06 0 0 1-.14-1.32c.12-.1.27-.22.38-.23.67-.02 1.5-.34 1.53-.54.07-.15-.04-.28-.17-.24-.35.06-.83.06-1.18 0-.2-.03-.44-.12-.53-.22.12-.15.2-.26.33-.33a3.51 3.51 0 0 0 1.56-.6.38.38 0 0 0-.04-.2c-.44-.02-.78-.02-1.27-.14a1.13 1.13 0 0 1-.48-.28c.13-.17.2-.23.36-.3.56-.18.97-.45 1.35-.8l-.01-.22c-.45-.01-1-.04-1.52-.16-.23-.12-.25-.14.01-.42.36-.09 1.02-.15 1.38-.27.27-.14.22-.37-.05-.45a8.2 8.2 0 0 1-1.3-.14c-.27-.24-.3-.26.05-.42l1.15-.24c.44-.15.37-.43 0-.54-.35-.04-.59-.12-.94-.18-.46-.23-.45-.25-.08-.4l.73-.2c.2-.05.4-.13.44-.28a.22.22 0 0 0-.02-.15c-.31-.09-.94-.03-1.22-.12-.1-.02-.2-.13-.26-.26l.27-.15c.34-.08.72-.23.99-.38a.87.87 0 0 0 .11-.25.65.65 0 0 0-.2-.1c-.36-.1-.57-.18-.93-.32-.2-.25-.19-.3.08-.41l.52-.14a3.33 3.33 0 0 0-.26-.52.52.52 0 0 0-.18-.18c-.3-.18-.73-.36-1.05-.57-.6-.37-1.23-.73-1.7-1.2a3.9 3.9 0 0 1-1.26-2.06c-.09-.5-.1-1.03-.01-1.52.06-.38.27-.78.47-1.14.08-.13.14-.25.06-.36-.3-.38-.55-.65-.93-1a1.58 1.58 0 0 0-.59-.3c-1.19-.21-1.92-.45-2.46-.38a1.9 1.9 0 0 0-.46.69c.1.4.3 1.02.31 1.53.44.05.96.2 1.5.5.43.28.53.43.7.96.37 1.2.47 2.73.73 4.37.23 1.56-.59 2.85-2.17 2.91-.86.04-1.56-.13-1.79-.71-.28-.82-.49-1.51-.76-2.33-1.12.28-2.3.66-3.5 1.24-1.05.5-1.91.98-3.02 1.43-2.11.87-4.44 1.4-6.53 1.4-1.1 0-2.33-.22-3.18-.56-.76-.3-1.03-.61-1.2-1.57a9.11 9.11 0 0 1-.04-2.46c.1-.8.23-1.36.78-2.86.24-.66.55-.97 1.06-1.23a5.6 5.6 0 0 1 2.76-.55c.33.02.76.07 1.06.2.6.22.69.7.71 1.3 0 .35.02.7-.01 1.05-.03.28-.02.39-.02.5.76.11 2.35.07 3.1-.1.62-.13.87-.23 2-.76.78-.35 1.84-1.14 3.07-1.78zM40.1 37.52c.07.15.24.9.24 1.16 0 .61-.05 1.17-.12 2.12-.1 1.24.03 2.5-.14 3.72-.07.6-.22 1.53-.17 2.35.01.33.06.42.25.46.6.14 1 .2 1.3.2.92 0 1.52-.42 1.44-.93a12.5 12.5 0 0 1-.43-3.44l.24-.02c.34 1.4.63 2.09.73 2.82.12.66 0 1.79.13 2.37 1.54.17 3.38.02 3.94-.1.14-1.26.1-2.55-.45-3.03-.23-.21-.92-.73-1.22-.93a6.89 6.89 0 0 1-1.64-1.82c-.66-1.04-.84-1.37-1.42-2.38-.54-.94-.9-1.75-1.27-2.3-.23-.37-.43-.6-.53-.7-.48-.15-.88-.2-1.4-.26-.65-.07-1.08-.14-1.45-.55-.32-.32-.45-.58-.26-1.01.1-.23-.03-.39-.2-.58-.19-.24-.14-.5.1-.68.57-.56 1.1-.84 1.85-1.04l-.12-.52c-.3.04-.63.13-1.23.13-.83 0-1.58-.34-1.88-1.43-.11-.39-.6-1.49-.74-1.98-.1-.3.01-.67.15-1.1-.26-.32-.48-.68-.7-.98-.45-.19-.99-.38-1.35-.82-.15-.18-.22-.19-.35-.1-.12.09-.15.22-.32.37-.16.14-.49.15-.8.02-.3-.12-.45-.43-.44-.73.03-.4.23-.75.05-.91-.31-.33-.6-.7-.23-.96.1-.09.33-.07.47-.14a1 1 0 0 0 .48-1.12c-.08-.33-.26-.48-.59-.51-.47-.03-.68-.27-.68-.58 0-.4.35-.57.67-.5.13.03.31.1.42.2.03.15.1.36.22.34.54-.06.96-.62.96-1.15 0-.18-.12-.27-.47-.19-.64.1-1.44.34-2.23.61-.44.15-.5.5-.26.9.08.09.14.2.2.3.1.16.06.28-.1.37l-.2.15c-.24.18-.27.38-.12.65.04.1.1.17.18.24.18.16.18.3.01.5a.76.76 0 0 0-.16.81c.07.23.25 1.53.25 1.78-.01.67.12 1.34.08 1.97-.03.46.2.86.64 1.36.48.53.83 1.01 1.48 1.64.77.73 1.19 1.6 1.26 2.67.03.5.27.68.75.94 1.01.28 1.36.85 1.48 1.62.2 1.37-.47 2.7-1.7 2.58-.63-.06-.94-.44-.94-.77 0-.35.18-.7.47-.8.05-.02.23 0 .27 0a.6.6 0 0 1 .03.22c0 .09-.12.14-.16.32-.03.12-.03.36.09.51.13.17.36.23.6.15.28-.09.47-.33.6-.58.57-1.03.28-2.25-.81-2.52-.35-.1-.85-.15-1.17.04-.68.42-1.26.66-1.83 1.18a.44.44 0 0 0-.14.33 55.93 55.93 0 0 0 .48 6.8c0 .49.36 1.1.5 1.18.4-.29.5-.58.85-1.13.17-.1.25-.04.3.11-.01.51-.11 1-.05 1.44.03.13.18.25.28.34.24-.22.25-.55.35-.8.27-.28.33.03.34.11-.02.33 0 .63.03.8.01.13.13.16.24.19.29-.58.66-1.1 1.13-1.42.28-.2.46-.03.3.25a7.09 7.09 0 0 0-.64 1.69 1 1 0 0 0 .28-.03c.06-.02.15-.04.18-.2.2-.5.31-.56.54-.2.1.34.25.58.45.68.3-.08.32-.44.44-.7.32.02.34.37.5.54.11.09 1.02.12 1.19.1l-.03-.53c-.02-1.06 0-1.91.07-2.96.08-1.1.2-2.23.26-3.2.04-.8.14-2.02.2-2.97zm14.98-20.44c-.24-.04-1.24-.1-1.51-.1-.22 0-.82 0-.84.31 0 .09.12.25.26.34.73.5 2.77.59 3.6.45.02-.2 0-.43-.07-.61-.2-.61-.95-1.15-1.64-1.37a5.65 5.65 0 0 0-2.22-.08l-.14-.37c.24-1.08.21-2.08.06-2.87-.09-.44-.2-.65-.44-1-.14-.2-.3-.19-.48-.04-.12.1-.24.23-.45.5-.69.84-.66 1.4-.54 2.66.08.06.17.12.4.12.22 0 .32-.1.35-.4.02-.42.12-.86.18-1.25.1.03.28.15.3.22.04.65-.17 1.33-.33 1.94.04.07.52.28.45.48-.06.15-.8.34-1.32.38a2.64 2.64 0 0 0-1.23-1.01c-.3-.12-.63-.22-.38-.42l.4-.16c.7-.29.47-.69.44-1.37-.03-.26-.13-.33-.37-.32-.35.02-.58.05-.87.2-.52.32-.92.85-1.3 1.28-.07.07-.22.04-.34.04.2-.63.46-1.32.66-1.88.07-.2.16-.4.38-.35 1.08.25 2.18.04 2.94-.72.32-.34.32-.5-.09-.79a2.54 2.54 0 0 0-2.3-.5c-.33.13-.55.32-.6.66-.03.2.97-.08 1.32-.05.1.01.17.1.24.15-.64.28-1.38.42-2 .6-.2.05-.28 0-.31-.2a.87.87 0 0 1 .31-.88c.47-.4.84-.87.94-1.5.06-.34-.22-.85-.37-1.14-.02-.08.02-.14.03-.2.39.1.94.36 1.27.6a2.83 2.83 0 0 0 1.97 2.18c.35.12.71.25 1.09.36.34.1.6.01.58-.36l-.02-.5c.3-.13.64-.23.72-.22.57.08 1.15.36 1.74.55.4.2.2.34-.08.3-.44-.07-.87-.2-1.29-.3-.27-.06-.49.06-.53.32.18.32 1 .7 1.3.82.44.16 2.1.35 2.08-.1a5.86 5.86 0 0 0-.2-1.32c-.1-.37-.42-.58-.77-.67a9 9 0 0 0-2.22-.26c-.18 0-.5.1-.8.26L52.95 9c-.16-.67-.48-.83-.98-1 .03-.2.03-.33.03-.54.44-.25.98-.67 1.19-1.02-.18-.17-.5-.26-.67-.32-.68-.24-.75-.5-1.21-.7a3 3 0 0 0-1.08-.27c-.34-.01-.8.08-.9.21-.05.09 0 .23.2.37.3.23.93.4 1.24.62.2.11.1.16-.03.18a3.09 3.09 0 0 1-1.22-.35c-.23-.12-.3-.22-.47-.28-.3-.1-.35-.02-.55.33-.15.25.03.38.24.5.72.4 1.25.63 2.16.73.1.1.12.27.15.47-.9-.12-1.2-.13-1.76-.33-.89-.48-1.6-.86-2.46-1.14-.16-.07-.22-.17-.04-.28.9-.54 1.76-1.2 2.67-1.7.13-.07.34-.04.5-.01.44.08.59.22 1.03.35.26.1.51.17.56-.07.13-.66.34-1.15.53-1.43.4-.61.97-.93 1.72-1.4C54.08.97 55 0 55.33 0c.9 0 1.8 1.63 1.98 2.24.12.44-.6.82-.12.82.42 0 .81.07.81.43 0 .63-.18 1.27-.5 1.73-.34.46-.7.96-1.16 1.27l.03.16c.78.58 1.63 1 1.63 1.88 0 .47-.13.8-.4 1.03-.21.18-.38.36-.36.63.03.61.07.95.03 1.55-.03.4-1.25.48-1.42.66a5 5 0 0 1-.34 3.04l.25.46c1.24.87 1.4 1.66 1.58 2.34-.34.33-.9.61-1.1.61-.8 0-2.57-.6-2.92-.65-.14.25-.06.48.12.98.16.45.46.76.46 1.18 0 .2-.03.52-.6.61a4.02 4.02 0 0 1-2.67-.73c-.16-.09-.3-.2-.46-.27-.27-.15-.61-.04-.7.27l-.18.6c-.1.33-.27.36-.72.27-1.27-.27-1.86-1.64-1.86-2.85.06-.25.26-.15.3-.03.08.59.34 1.16.53 1.64.24.46.54.71 1.04.77.1 0 .24-.19.36-.4.27-.57.52-.95.44-1.62-.03-.23-.1-.56-.27-.77-.08-.1-.21-.17-.36-.3.07-.11.18-.23.27-.2.56.2.98.2 1.33.01.22-.12.32-.27.47-.46.48-.12 1.27-.3 1.93-.39.9 0 1.7.12 2.37.42zM20.85 39.02c.48 0 1.06.24 1.05.76l-.1.26a.27.27 0 0 1-.12-.03c-.18-.39-.47-.61-.94-.52-.44.09-.82.31-1.1.62-.19.2.2.32.44.45l.5.3c0 .26-.68 2.16-.34 2.22.86.15 2-1.03 2.12-2.7-.03-.6.31-.9.97-1.12.78-.3 1.15-.65 1.02-1.5-.06-.42.18-.3.41-.65l.26-.28c.04.12.13.4.1.52-.18.69-.04 1.23.3 1.85l.64 1.66c.15.16.29.03.44.2.55 1.11 1.17 2.77 2.01 3.48.69.57 1.42 1.57 2.07 2.17.38.34.64 1.19 1.12 1.35.34.12.33.3.28.61-.06.38.1.45.24.45.23-.03.45-.09.69-.1.52.11.4.46.02.52-.26.03-.51-.02-.77-.02-.09.02-.18.06-.27.1.03.1.07.2.14.26.42.23.72.26 1.13.35.08 0 .14.06.23.09-.03.07-.12.23-.2.27-.13.02-.3.02-.46 0-.37-.08-.71-.24-1.06-.4-.12-.04-.2-.17-.31-.25-.09-.04-.2-.06-.3-.09 0 .12-.04.23-.03.33.08.16.25.44.18.5-.03.05-.27.2-.34.16-.3-.14-.54-.48-.82-.64-.36-.23-.69-.23-1.03.01-.35.24-.66.45-.99.64-.41.27-.85.7-1.34.7-.27 0-.94-.41-1.24-.5-.56-.18-.74-.2-1.34-.33-.5-.12-.94.07-1.45.24-.62.19-1.3.27-1.97.39-.38.07-.82 0-1.22-.02-.6-.02-1.18-.07-1.77-.06-.4 0-.82.07-1.2.2-.18.05-.37.08-.53.08-.27 0-.53-.07-.78-.24a1.14 1.14 0 0 0-.85-.16c-.28.06-.83.16-1.06-.05-.28-.28-.95-.84-1.33-.77-1.19.2-1.76.88-2.92.57-.82-.21-1.36-.4-2.16-.14-.2.08-.72-.04-.93-.01-.3.04-.4-.02-.36-.32l.03-.16c.05-.31-.25-.54-.55-.43-.33.1-.52.44-.83.6-.57.28-1.1.2-1.72-.04-.42-.18-.85-.1-1.25.1-.26.14-.68.75-.96.75-.1 0-.25-.16-.3-.3v-.29a2 2 0 0 1 .66-.61 3.75 3.75 0 0 1 2.28-.3c.36.06.75.1 1.09-.04.27-.12.55-.14.8-.27.45-.24.84-.45 1.35-.27.37-.17.57-.29.76-.57.09-.45-.07-.92.04-1.36.1-.4.27-.9.4-1.28.08-.2.22-.18.35-.16.36.53.8 1.03.58 1.52-.15.34.63.58.5.92-.13.26-.07.42.19.45l.2.02c.23 0 .24-.15.23-.44.01-1.64-.52-2.78-1.08-4.07-.23-.5-.19-1-.01-1.5l.34-1.02c.18-.48.58-.9 1.03-1.08.06-.01.23.06.27.14.73 1.03 1 2.28.64 3.52-.1.37-.18.76-.25 1.16-.02.1.01.2.03.3.07-.06.16-.12.22-.2.36-.54.73-1.07 1.02-1.65.28-.56.74-.79 1.32-.9.63-.13.81-.05.65.56-.1.36-.21.72-.33 1.04a2.07 2.07 0 0 1-1.06 1.29c-.36.2-.69.47-1 .7-.12.16-.15.15-.02.31.12.15.3.06.45-.03.59-.43 1.2-.77 1.8-1.1.22-.1.29-.02.27.24-.03.3-.07.71-.37.82-.33.11-.77.16-1.06.3a2 2 0 0 0-.5.43c-.2.3-.2.5-.36.82-.03.07 0 .19.01.3.1-.04.2-.04.27-.08.39-.28.6-.6.99-.9.3-.23.37-.2.49.17.04.12.13.22.25.33.12-.08.25-.15.34-.27.35-.52.57-1.56 1.03-2.25.08 0 .18.06.24.09.1.23-.03 1.02-.01 1.19.01.48.16.58.6.36.34-.17.65-.35.98-.53.36-.18.65-.04.44.24-.11.17-.28.3-.38.48-.06.1-.05.27-.06.4.1 0 .24.02.34-.03.27-.07.52-.19.78-.3.35-.16.71-.11 1.1 0 .37.13.75.22 1.1.32.29.07.61-.06.87-.18a9.28 9.28 0 0 1 1.58-.61 5.1 5.1 0 0 0 1.97-1.13c.13-.14.33-.21.48-.35.12-.1.22-.57.23-.72.1-.4-.06-1.34.02-1.76.05-.1.13-.32.2-.43l.17.05c.05.15.12.38.12.5-.03.72-.04 2.32-.12 3.02 0 .16-.28.42-.44.48-1.26.46-2.53.94-3.8 1.3-.57.16-1.2.07-1.8.08-.48 0-.95-.07-1.42-.04-.37.03-.9.37-1.28.43-1.04.16-1.94.09-2.97.28-.95.18-1.86.44-2.77.69-.24.07-.37.14-.57.28-.07.06-.09.17-.12.24.1.05.2.12.3.1.23-.02.42.05.66.02.56-.09 1.12-.15 1.7-.2.12 0 .28.08.39.16.28.19.56.25.88.18.34-.08.64.01.94.23.52.42.65.44 1.25.1.46-.25.97-.25 1.48-.22 1.14.06 2.2.23 3.23.42a2.2 2.2 0 0 0 2.12-.82c.29-.37.57-.73.8-1.09.19-.25.4-.42.7-.42.64-.01 1.3-.16 1.93-.12.36.03.53.36.53.57-.02.21-.1.34-.35.33-.49-.03-.97-.06-1.44-.12-.5-.04-.9.1-1.2.48-.16.18-.12.3.12.36.1.01.23.06.34.07.26.03.38.15.45.39.05.15.36.3.88.33.67.04 1.02.04 1.6-.15.24-.08.4-.36.57-.57.38-.55.64-.69 1.32-.55.48.09.8-.42 1.23-.39.79.1-.1-1.49-.6-2.01-.69-.51-1.24-1.52-1.84-2.27-.44-.55-.97-.76-1.35-1.43-.73-1.21-1.33-2.69-2.14-3.66-.32-.33-1.01-.1-1.35.08a.95.95 0 0 0-.4.28c.98.83 1.02 1.98.68 2.83-.1.27-.2.26-.48.15-.25-.09-.53-.2-.77-.31-.17-.09-.32-.05-.5.06-.74.45-1.65 1.06-1.8.91-.3-.3-.78-1.2-.75-1.66.02-.38.15-.7.29-.91a7.5 7.5 0 0 1-.96-.62l-.01-.33c.62-.6 1.46-1.18 2.11-1.18zm-18.72-8.7c.08.59.33 1.07.9 1.29.82.34 1.9.54 2.82.55 1.09.03 2.28-.06 3.56-.3a23.2 23.2 0 0 0 5.76-2.01 15.94 15.94 0 0 1 3.5-1.33 7.92 7.92 0 0 1 3.87-.1c.57.13.69.13.61-.28-.04-.27-.12-.54-.16-.82-.14-.96-.1-1.86-.46-2.68a1.11 1.11 0 0 0-.53-.49 3.16 3.16 0 0 0-.92-.28 6.5 6.5 0 0 0-1.94 0 9.74 9.74 0 0 0-2.92.9c-1 .49-2 1.04-2.75 1.49a7.9 7.9 0 0 1-4.06 1.17c-.95 0-1.58-.03-2.53-.13a9.04 9.04 0 0 1-3.73-1.03c-.26-.13-.4-.09-.5.18a8.37 8.37 0 0 0-.5 3.86zm44.49 10.5c-.33.05-1.02.14-1.42.16a1.9 1.9 0 0 1-.39-.05c.06-.12.1-.16.17-.19.49-.25 1.01-.48 1.37-.76.2-.15.16-.3.1-.43-.67.3-1.3.43-2.01.55-.05 0-.08-.05-.1-.08.55-.41 1.28-.74 1.68-1.1.27-.22.07-.28-.02-.37-.58.2-1.16.39-1.77.56a.7.7 0 0 1-.28-.03c0-.12.12-.17.22-.23a9.33 9.33 0 0 0 1.7-1.12l-.03-.15-.2-.02c-.47.08-1.51.23-2.08.29-.28 0-.23-.16-.18-.2.45-.2.8-.44 1.13-.79.12-.13.1-.25.06-.31-.54.25-1.16.26-1.52.3-.07-.09.02-.2.06-.24.44-.17.53-.31.76-.46.15-.1.47-.32.54-.44.03-.04.02-.16-.01-.2a7 7 0 0 1-1.33.32.67.67 0 0 1-.24-.04c.04-.1.06-.18.12-.21.62-.32.95-.45 1.39-.72.13-.09.25-.28.3-.39l-.04-.06c-.5.16-1.01.33-1.53.47-.1-.02-.15-.08-.24-.15a.61.61 0 0 1 .18-.18 8.17 8.17 0 0 0 2.83-1.63c.24-.2.45-.43.54-.61l-.07-.12c-1 .7-1.97 1.31-3.12 1.76-.23-.02-.18-.16-.1-.22.1-.1.4-.44.64-.76a9.03 9.03 0 0 0 2.62-1.51c.06-.06.09-.23.05-.34-.51.23-1.29.67-1.97.92L44.3 32c.03-.12.09-.23.16-.35.46-.3 1.12-.77 1.64-1.34.02-.07.05-.16 0-.24-.43.23-.91.4-1.35.55-.15-.1.03-.36.05-.42.63-.52.93-.86 1.24-1.3.06-.1.06-.19 0-.35-.35.25-.85.4-1.24.55l-.11-.03c-.02-.13 0-.1.04-.2.46-.42.85-.75 1.13-1.23.03-.05.02-.18-.03-.27-.38.13-.67.24-1.08.34a.32.32 0 0 1-.14-.03c.02-.13 0-.16.05-.26.28-.24.56-.57.82-.96.07-.1.06-.2.01-.27-.2.05-.56.1-.74.12-.08.02-.18-.07-.23-.16l.7-.5a.6.6 0 0 0 .12-.19c-.09-.04-.16-.09-.22-.07-.3.04-.58.07-.88.13-.66.14-.66.23-.72.42a14.63 14.63 0 0 1-.73 2.18c-.09.2-.2.39-.4.47-.28.14-.22.29-.3.56-.12.54-.2.5-.42 1.03a2.9 2.9 0 0 1-.62 1h-.15l-.05-.75c-.06-.5-.16-.39-.24-.9-.05-.45.06-.93.12-1.32.05-.45.1-1.23.1-1.67-.04-.03-.08-.1-.14-.14a.42.42 0 0 0-.14.2c-.09.34-.25.88-.3 1.23-.11.82.06 1.61 0 2.44a9.3 9.3 0 0 0-.1 2.58c.27-.03.25-.06.63-.21.5-.2.86-.27 1.37-.72.36-.31.3-.92.43-1.42.17-.6.4-.82.64-.92.07-.02.14.01.21.03-.14.34-.22.52-.35.88-.12.31-.24.82.1.88l.25.04c.02.06.02.15-.03.2-.32.31-.58.68-2.05 1.1-.17.05-.54.5-.56.67-.03.23-.03.5.02.88.15 1.47.88 2.85 1.7 4.21.69 1.16 1.2 2.04 1.95 2.8.35.32.72.56 1.3.29.31-.15.7-.39.8-.48.05-.06.06-.16.05-.25zm-20-21.16c.04.58-.07.73-.81.54-.78-.24-1.14-.16-1.64-.73-.3-.35-.68-.35-1-.02-.15.18-.26.36-.5.4-.04-.08-.09-.19-.06-.28.08-.34.29-.6.61-.76.23-.12.51-.2.75-.27.69-.27 1.03-.68 1.03-1.49 0-.46.14-.92.14-1.4 0-.34-.12-.45-.45-.34-.57.22-1.1.44-1.67.68-.2.08-.32.2-.4.38-.16.3-.26.6-.4.9-.13.17-.24.09-.28.02-.27-.43-.6-.88-.88-1.25-.25-.3-.25-.4.03-.61l.93-.81c.46-.43.64-1 .69-1.64v-.87c-.02-.38.06-.49.44-.44.27.03.54.1.76.22.42.18.84.42 1.26.64.22.14.38.33.4.61.01.33-.2.54-.5.42a9.2 9.2 0 0 0-1.41-.49c-.24-.06-.48.07-.52.3-.1.55.37.58.33.73-.12.39-.75.5-.84.86-.07.33-.07.54.22.48.79-.16 1.56-.65 2.17-.9.52-.22.79-.14.86.44.28 1.7.54 3.16.73 4.68zm12.3-5.4c.15.04.34.13.46.24.29.67.91 1.42 1.69 1.82.25.13.5.18.7.2.07-.3.2-.8.2-1.35 0-.43-.13-.9-.53-1.3a5.2 5.2 0 0 0-1.2-.9.51.51 0 0 0-.59.05c-.01.1-.01.25.05.34.19.33.65.63.85.94.07.32.05.3-.21.2a5.05 5.05 0 0 1-1.43-1.25c-.23-.26-.38-.26-.54.02a4.84 4.84 0 0 0-.72 2.15 2.2 2.2 0 0 0 1.2 2.3c.37.16.64.12.82-.23.19-.35.32-.65.44-1.04.06-.2.06-.28-.09-.46a6.61 6.61 0 0 0-.6-.67.87.87 0 0 0-.3-.24.4.4 0 0 0-.08.25c.01.31.06.63.07.94 0 .08-.01.2-.06.27a.61.61 0 0 1-.34-.4c-.2-.74-.17-1.39.21-1.88zM4.36 3.37l.58.69c.24.45.37.86.49 1.22.1.36.25.36.48.2.2-.15.36-.4.34-.7a2.33 2.33 0 0 0-.13-.63c-.2-.78-.06-1.44.62-1.93.23-.16.4-.42.31-.7-.1-.39-.19-.76-.34-1.12-.06-.16-.28-.2-.43-.12-.76.4-1.66 1.55-.97 2.51.03.06-.01.24-.06.34-.63-.63-1.87-1.91-2.24-1.88-.1.18-.18.55-.1 1.3.09.73.28 1.48.83 2.5.14.23.27.37.47.53.13.12.4.25.6.25.07-.16.08-.42.04-.6-.19-.68-.37-1.2-.6-1.83zm50.5 2.88c.53-.1.96-.25 1.16-.33.86-.33 1.43-.88 1.62-1.82.06-.25-.09-.39-.36-.46l-.56-.15c-.55-.16-.66.07-.87.6-.16.4-.33.86-.76 1.2-.13.11-.58-.22-.7-.3.84-.5 1.39-1.3 1.8-2.26.1-.18 0-.36-.19-.42-.27-.09-.55-.12-.86-.09a4.31 4.31 0 0 0-3.1 2.31c-.04.1 0 .33.07.36.12.05.42.02.55-.03.08-.01.12-.12.17-.2.35-.62.94-1 1.62-1.3.2-.1.27-.03.16.2-.13.17-1.35 1.03-1.38 1.15-.16.35.08.4.28.4l.37-.1c.13.64.52 1.06.97 1.24zm-18.5-.1c-.02.3-.13.47-.4.37-.56-.24-.9-.85-1.53-1.06-.23-.08-.37.13-.4.34-.1.64-.2 1.21-.2 1.45 0 .88.47 1.36.94 1.83.14.12.14.2-.01.27l-1.93 1.08c-.18.12-.4.15-.6 0-.19-.17-.25-.38-.19-.59.23-.97.39-1.97.64-2.92.4-1.5 1.05-2.01 2.14-2.15.39-.06.68-.06.98-.06.32 0 .46.06.5.35.04.2.05.42.05 1.09zm1.46 6.63c0-.73-.59-.94-.84-1.56-.24-.61-.46-.61-.95-.17-.56.53-.9.99-1.1 1.75a4.2 4.2 0 0 0 .02 2.1c.05.21.17.45.4.38a.4.4 0 0 0 .29-.4c0-.62.06-1.22.37-1.62.14-.18.2-.22.28-.27.1.15.06.33.06.36-.09.46-.16.93-.26 1.39-.06.31-.06.48.1.76.18.28.33.31.45.12.57-.91 1.18-2.22 1.18-2.84zM6.6 14.8a5.6 5.6 0 0 0-.4-1.8c-.24-.57-.6-.9-.84-.9-.22 0-.73.6-.9 1.09-.44 1.23-.2 2.23.51 3.41.1.15.3.43.57.15.22-.25.39-.43.6-.7.28-.33.47-.8.46-1.25zm26.94 19.3c-.13-1.03-.9-2.03-2.2-2.9-.27-.11-.3.07-.3.3.13 1.43.3 2.87.48 4.14.05.28.18.36.44.22.39-.18.76-.37 1.13-.58.34-.2.55-.39.45-1.18zm11.77-11.7c-.2-.5-.54-.71-1.04-.75-.5-.06-.92-.13-1.45-.21-.3.04-.5.28-.67.68.01.08.04.18.1.2.17.06.48.12.52.15.06.04.26.25.3.41-.04.14-.22.29-.45.33-.3.06-.3.3-.25.61.04.3.15.55.39.87.2-.12.3-.17.45-.33a.68.68 0 0 0 .2-.58c-.04-.65.32-1.12.77-1.55l.1.06c-.07.37-.27.64-.31 1.01-.1.76-.35 1.4-1.1 1.91.23.3.8.08.98-.1.31-.29.56-.63.68-1.06l.12-.38a.3.3 0 0 1 .1.03c.15.28-.06.85.04 1.26a.94.94 0 0 0 .37-.3c.28-.66.42-1.64.15-2.25zM54.73 7c-.13 0-.65.01-.8.04-.12.03-.18.31-.12.36.15.1.24.18.36.22.47.05.68.05 1.22.14.09.01.2.06.27.15-.05.04-.1.11-.2.13-1 .12-1.3.1-2-.37-.19-.08-.26.06-.2.24.1.34.38.62.9.83.41.18.81.4 1.23.39.64-.02 1.1-.06 1.63-.15.28-.04.56-.2.6-.34.05-.14 0-.45-.16-.65l-.38-.38c-.6-.63-.99-1.03-1.88-.94-.12.01-.3.33-.47.33zm.62 6.66c0-.37-.05-.64-.15-.97a1.7 1.7 0 0 0-1.48-1.22c-.37-.01-.55.06-.4.4.04.12.37.47.5.75.17.34.33.69.33.99a1 1 0 0 1-.09.4c-.22-.12-.34-.39-.39-.52-.1-.32-.12-.51-.22-.69-.09-.16-.2-.2-.25-.2-.14 0-.2.05-.21.24a2.87 2.87 0 0 0 1.57 2.87c.28.1.35.03.44-.22a6 6 0 0 0 .35-1.82zM6 9.8c-.14.53-.17.88-.15 1.18.01.38.2.7.55.86a6.7 6.7 0 0 0 3.33.52c.04 0 .15-.07.15-.1-.03-.23-.15-.27-.36-.33-.47-.16-1.73-.5-1.9-.7-.13-.18-.07-.37.14-.4.18-.02.37.01.55.09.31.15.58.35.9.53.1.06.22.17.34 0 .09-.15.18-.28-.02-.43l-.74-.58c-.64-.51-1.6-.75-2.8-.64zm22.87 8.28c-.05.11-.15.22-.26.35-.12-.12-.24-.2-.3-.33a24.03 24.03 0 0 1-1.2-4c-.02-.26.08-.35.3-.34.57.06 1.07.32 1.57.58.08.06.14.23.15.35.1 1.13-.04 2.4-.26 3.38zm-24.63 2.3l-.08-.04c.05-.68.4-1.65.27-1.9a1.4 1.4 0 0 0-.69.07c-.24.1-.34.34-.39.74-.06.89.08 1.8.27 2.6.06.3.18.33.4.12.57-.52 1.11-1.18 1.54-1.69.3-.39.35-.76.23-1.13-.1-.31-.31-.43-.54-.43-.25 0-.34.19-.4.38-.14.49-.37.84-.61 1.27zm46.18-2.05c.45 0 .82.09.94.13.54.2.78.44.88.63.1.18.1.27.1.36a.97.97 0 0 1-.89-.18c-.48-.45-1.18-.64-1.6-.45.03.31.33.7.58.9.84.65 1.58.76 2.48.55.15-.06.21-.27.2-.45-.03-.58.01-1.2-.54-1.7-.6-.57-1.46-.55-2.05-.3-.1.05-.25.12-.32.2.01.07.09.22.22.3zM29.62 2.48c.18-.04.1.04.05.2-.1.51-.4.91-.76 1.27-.2.18-.24.46-.1.6.26.24.56.03.76-.16.4-.45.65-1 .88-1.54.28-.67.22-1.5-.1-2.06-.17-.24-.43-.27-.63-.09a3.47 3.47 0 0 0-1.22 2.4c0 .13.01.37.1.42.46-.2.74-.7 1-1.03zm12.2 24.2c.05-.04.13 0 .16.02 0 .54.13 1.19.2 1.38a.62.62 0 0 0 .2-.14l.15-.73c.34-1.03.09-1.85-.34-2.79-.08-.18-.2-.2-.38-.12-.13.06-.24.15-.13.33.1.15.09.27 0 .42-.14.27-.24.56-.39.88-.06.2-.07.36-.09.6l-.15 3.7c.06.2.18.16.25.04.08-.2.14-.39.18-.6.1-.58.27-.6.3-1.18.05-.6.05-1.2.03-1.8zM7.94 3.83c-.01-.06 0-.2.02-.23l.62.1c.3.06.45.02.55-.21.17-.44.08-.84-.38-.93-.7-.13-1.4.1-2 .24-.39.13-.48.54-.2.82.45.43.88.86 1.35 1.24.38.31.83.39 1.27.3.2-.05.37-.18.37-.36a.5.5 0 0 0-.15-.36 1.35 1.35 0 0 0-.35-.2zm-.63 26.93c-.04.2-.13.37-.46.35a4.12 4.12 0 0 1-.9-.13c-.32-.09-.41-.21-.43-.33-.1-.6-.04-1.42.1-1.98.04-.1.38-.3.52-.38.43.05.77.12 1.08.2.12.07.36.43.38.48.06.19.06.4.06.6-.12.5-.27.93-.35 1.19zm33.4 18.05c.8.3 1.42.39 1.66.34.25-.05.4-.29.37-.54-.01-.22-.12-.4-.4-.48-.61-.13-1.24-.22-1.82-.43-.34-.1-.6-.09-.9.14-.46.35-.9.53-1.47.64a.7.7 0 0 0-.37.13c-.16.21-.12.36.13.5.99.09 1.92-.1 2.8-.3zM44 50.77c.5 0 .87-.1 1.21-.32a3 3 0 0 1 1.45-.64c.22-.04.44-.27.46-.45 0-.25-.2-.28-.37-.34-.48-.15-1.05-.13-1.54-.25-.16-.03-.39-.03-.52.07-1.03 1.04-1.23.8-1.72 1.31-.13.17-.13.38.23.47.28.07.64.13.8.15zm-17.12-39.1c0-.26.46-.66.71-.62.05.02.1.05.14.1l.1.54c.03.21.1.4.21.4.52.04 1.13-.32 1.42-.77.31-.48.53-1.03.79-1.55.24-.57.61-.22.48.13-.33.99-.74 2-1.06 2.97-.1.36-.15.38-.5.26l-1.65-.59a.85.85 0 0 1-.64-.87zm12.66 24.68c.27.13.25.08.61-.12a.82.82 0 0 0 .32-.58l-.1-2.17c0-.07-.1-.18-.14-.18-.3 0-.66-.06-.9.07-.46.25-.85.61-1.27.94-.16.16-.01.32.23.3.2-.08.43-.18.63-.29l.38-.2c0 .07-.01.13-.04.18-.36.4-.63.88-1.12 1.14-.13.02-.1.34.09.35.15-.02.45-.18.55-.26.3-.24.43-.39.73-.64.1.15.17.27.02.4l-.8.72c-.12.12-.03.24.11.22.21-.03.4-.12.57-.22.2-.13.37-.31.55-.5.01.02.12.13.1.14-.15.23-.32.45-.52.7zM13.95 11.2c-.12 1.21-.42 2.43-.96 2.98-.44-.84-.74-1.82-1.04-2.68.24-.3.54-.75.67-1.1.06-.17.16-.2.31-.08.36.33.67.6 1.02.88zm1.43 17.24a1 1 0 0 1-.55.69c-.21.1-.55.25-.94.25-.18 0-.31-.04-.34-.2-.1-.56-.23-1.08-.32-1.62-.01-.13.1-.3.21-.4.35-.33.8-.42 1.27-.45.1 0 .43.14.48.23.1.5.15.95.19 1.5zm-4.37-6.47c-.64.1-1.2.67-1.1.9.01.5.11.98.38 1.41.17.25.3.31.56.14a4.8 4.8 0 0 0 1.92-1.96c.12-.24-.13-.31-.37-.43-.32-.15-.66-.15-.84-.06-.18.09-.25.28-.28.43-.2.73-.24.75-.46 1a1.94 1.94 0 0 1 .19-1.43zm4.33 27.45c.04-.08.06-.14.13-.15.12-.02.4-.02.43 0 .57.16 1.1-.25 1.63-.33.12-.01.25-.03.39-.01.35.01.7.02 1.09-.08.16-.06.37.02.55.1.61.27 1.2.42 1.79.07.31-.21.62-.4.95-.57.55-.21.6.15.62.36a.52.52 0 0 1-.3.31c-1.9.68-3.54.69-5.67.43a4.8 4.8 0 0 1-1.61-.13zm-11.9-20c-.04.26.04.65.25.86l.09.09-.05.16a4.5 4.5 0 0 1-.98-.13c-.14-.05.25-.26.28-.5.07-.49.2-1.3.2-1.89 0-.1-.25-.2-.25-.3a.36.36 0 0 1 .12-.2c.7.17.8.16.94.49.14.3.27.8.48 1.16.04-.02.1-.04.13-.07.03-.33.02-.81.03-1.03.02-.18.1-.27.29-.27.15 0 .52.01.67.04.02.03.02.06.02.1 0 .1-.12.13-.15.14-.33.12-.35.15-.5 1.07l-.16 1.06c-.02.08-.04.24-.09.35-.09.01-.25 0-.28-.08-.23-.56-.53-1.16-.82-1.67l-.1-.01c-.08.22-.08.43-.13.64zm22 4.93c.03-.2.03-.42 0-.61-.12-.34-.27-.67-.22-.97.15-.52.26-1.06.21-1.6a6.74 6.74 0 0 1 .06-2c.18.06.32.18.36.3.05.21.1.42.1.61.07.57.02 1.12-.01 1.67-.09 1.08-.18 2.08-.15 3.14.02.16.05.37.1.52.14.33.07.67-.19 1.04l-.16-.07c-.12-.45-.42-1.06-.55-1.54-.02-.09 0-.16.12-.18.2-.04.33-.16.34-.3zm10.4-7.95c-.44-.04-.89-.43-.86-1.13-.22.3-.49.6-.73.71.02.24.61.58 1.02.75.23.31.4.46.7.8.18-.46.4-.85.47-1.1a3.55 3.55 0 0 0-.35-1.63c-.33-.37-.85-.68-1.36-1.01-.25.27.07.85.69 1.2-.14.38-.12.96.49 1.3zm-29.9-1.07c.31-.02.64-.07 1.01-.12.24-.06.51-.12.52-.42.02-.27-.3-.42-.52-.48a4.76 4.76 0 0 0-3.15.31c-.26.15-.49.3-.64.46-.24.26-.19.42-.01.56.2.15.49.31.86.4.05-.22.1-.58.17-.8.34-.56 1.3-.66 1.97-.68.16.03.16.23.03.27-.19.15-.57.12-.67.28 0 .17.16.23.43.21zm2.14 5.8c-.01-.12.13-.27.14-.35.03-.16.03-.38.03-.55.02-.43-.07-1.13-.07-1.55l.23-.15c.08-.03.14.02.23.1.2.2.65.7.86.89.02 0 .05-.05.06-.06v-.32c0-.22-.04-.38-.1-.62-.08-.27-.27-.46-.06-.48l.82-.06c-.08.16-.14.28-.17.52-.04.33-.1.63-.11.94.04.48.14.96.18 1.36 0 .03-.06.07-.12.1a.75.75 0 0 1-.23-.15c-.4-.4-.68-.77-1.2-1.26a.44.44 0 0 0-.07.22c.1.31.23.66.44.95.13.18.16.24-.17.36-.18.06-.48.14-.68.1zm14.62.09c.47-.29.66-1.26.54-1.73a.62.62 0 0 0-.16-.33c-.15-.15-.32-.1-.4.16-.09.37-.13.77-.18 1.12a3.5 3.5 0 0 0-1.06-.03c-.36.05-1.06.26-1.06.69 0 .7 1.61.54 2.32.12zm2.82-4.84a.8.8 0 0 0 .2.56c.72.75 1.71 1.53 2.34 1.68.56.15 1.03.48 1.37.93l.33.45c.24.3.55.5.97.56.07.02.16 0 .24 0-.06-.25-.06-.28-.24-.46-1.48-1.32-3.05-2.35-4.58-3.42-.15-.09-.42-.27-.63-.3zm-15.46 17v-.02c-.15-.63-.32-1.24-.48-1.85-.12-.22-.34-.06-.32.03-.16.45-.32.9-.46 1.37a.66.66 0 0 0 0 .42c.24.66.46 1.31.72 1.97.04.09.16.15.23.2.06-.08.15-.17.17-.25zm2.62-15.68c.04.12.1.27.12.41.01.1.01.18-.02.24-.01.03-.07.02-.13-.01-.31-.14-.66-.34-.94-.15-.1.07-.06.25.07.31l.88.36c.4.15.5.33.42.8-.07.45-.4.63-.79.74-.16.04-.33.06-.55.04-.03.14.01.3-.09.36-.07.04-.09.03-.16.06a3.86 3.86 0 0 1-.3-1.09c0-.09.03-.1.06-.13.13.04.25.22.45.41.24.08.65.15.71.08.12-.15.17-.24.17-.3 0-.1-.14-.2-.26-.25-.31-.17-.48-.23-.8-.36-.3-.12-.35-.39-.35-.64 0-.27.14-.56.57-.7.13-.05.37-.1.5-.14.04-.09.07-.39.07-.45.07-.01.2-.03.22.02zM6.44 8.86c-.6 0-.98-.16-1.58-.1-.43.03-.85.22-1.27.38-.25.12-.2.23.02.32.22.1.37.16.58.15 1.24-.1 2.63-.24 3.87-.36.07-.1.13-.18.2-.34-.47-.31-1.08-.25-1.65-.42zm14.24 18.51c-.06.03-.14.1-.29.26a.78.78 0 0 1-.25.18l-.17-.1.27-.65c.1-.25.2-.28.44-.12l.22.18c.18.15.42.27.64.17.21-.1.1-.4-.12-.51-.32-.2-.56-.26-.95-.5-.24-.14-.34-.35-.34-.65 0-.25.17-.55.49-.58.12-.03.27-.03.44-.03.21 0 .35-.03.48-.21.1-.13.21-.21.24-.07.08.36.03.75-.06.98-.07-.02-.12-.02-.18-.05-.19-.3-.44-.44-.65-.41-.2.03-.3.18-.15.34.27.28.65.43.97.61.46.25.43.6.37.85a.65.65 0 0 1-.67.54c-.24 0-.47-.06-.73-.23zm-.91-.92c.04.77-.58 1.05-1.02 1.04-.41 0-.65-.09-.79-.5-.07-.24-.15-.97-.2-1.24-.08-.1-.22-.14-.43-.2-.1-.02-.11-.1-.13-.19.15-.07.42-.15.61-.18.44-.07.44-.04.51.36.06.46.13.94.22 1.4.15.45.63.35.63-.03 0-.36.02-.77 0-1.15-.07-.09-.2-.28-.34-.41-.17-.2-.18-.26.06-.35.56-.22.6-.36.68.38.03.28.2.71.2 1.07zm.52 3.94l1.4-.33c.37-.1.58-.5.55-.85-.04-.27-.2-.42-.48-.48a3.8 3.8 0 0 0-1.8.25c-.05.48.12 1 .33 1.4zM7.43 25.42c-.18 0-.42.04-.6.09-.35.09-.53.12-.88.09-.2-.02-.52-.15-.71-.2-.21.02-.42.21-.5.51-.04.3.14.51.47.57.67.15 1.3.27 1.92.27.24 0 .27-.03.28-.23.03-.38.02-.7.02-1.1zm16-14.3a4.05 4.05 0 0 1-.87-.27c-.1-.03-.17-.27-.17-.4.03-.35-.06-.7 0-1.07.03-.2.14-.26.33-.22.27.06.52.12.78.2.34.14.85 1.08.7 1.41-.15.3-.42.34-.76.36zm-5.77 16.39a1 1 0 0 1-.28.27c-.33.22-.93.35-1.34.62-.2.14-.1-.34-.12-.52l-.21-1.12a1.46 1.46 0 0 0-.36-.6c-.12-.14.22-.2.39-.25l.65-.2c.24-.08.3.09.23.14-.33.24-.3.35-.26.66.05.3.05.63.06.88.05.12.12.28.21.39.2-.06.42-.21.42-.27l.05-.64c.24-.3.28-.15.32-.02.1.24.15.39.24.66zm.99-7.1c-.14-.43-.27-.88-.38-1.33-.03-.18.12-.28.29-.25.6.13 1.19.27 1.79.43.2.04.2.2.07.33-.39.4-.8.74-1.34.98-.27.15-.28.04-.43-.16zM44.56 4.55a4.4 4.4 0 0 0-.69-1.66c-.27-.34-.6-.37-.9-.06-.1.1-.19.2-.26.3-.3.38-.27.5.18.72.68.2 1.07.6 1.56 1.1zM12.78 43.4a2.8 2.8 0 0 0-.9.8c-.2.37-.42.72-.62 1.08-.07.17-.19.58-.24.85l.12.12a5 5 0 0 0 .88-.65c.51-.5.63-.97.91-1.97l.05-.12zM56.85 2.28c-.27-.56-.77-1.31-.98-1.58-.27-.34-.4-.37-.7-.06-.1.1-.2.2-.27.3-.3.37-.48.83.01.9.42.07.99 0 1.26.19.25.16.47.33.58.39zM6.15 29.15c-.08.73-.06.73-.06 1.24 0 .28.13.28.38.3.23.01.3-.2.35-.47l.15-1.01c.04-.33.06-.52-.14-.55-.37-.05-.65.18-.68.49zm3.9-13.52a3.86 3.86 0 0 1-.94-.33c-.5-.26-.98-.8-.9-1.3.04-.23.17-.3.37-.19.38.28.7.7.98 1 .23.23.4.5.5.82zm3.75 11.88c.01.2.18.79.24 1.13.03.18.07.32.33.29.34-.05.46-.2.41-.47-.04-.31-.12-.62-.18-.94-.06-.3-.19-.47-.46-.46-.28.03-.37.13-.34.45zM28.66 8.64c-.21.38-.4.76-.65 1.09-.19.27-.49.44-.76.67-.26.07-.27.05-.18-.21.39-.64.76-1.14 1.18-1.69.3-.16.41-.03.4.14zm20.06 10.38c0 .24-.04.46-.12.69l-.06.03c-.31-.78-1.06-2.04-1.01-2.17-.02-.09.18-.14.27-.12l.34.14c.2.46.4.9.58 1.43zM50.9 2.45c.04.01.16.04.25.12.15.12.17.26-.03.34-.47.22-1.26.64-1.77.83-.1.05-.21.06-.17-.12.1-.3 1.3-1.17 1.72-1.17zM33.79 24.18c-.33 0-.61.26-.61.52.01.29.38.6.71.6.3 0 .51-.2.51-.5.02-.36-.24-.62-.61-.62zM7.43 49.41c-.07 0-.2.22-.31.23-.4.03-.54.07-.54.24 0 .23.12.35.31.29.6-.18.74-.16 1.52-.1l.27-.32c-.09-.08-.16-.18-.27-.21a4.47 4.47 0 0 0-.98-.13zm35.22-28.78c-.13.08-.24.16-.2.31l.1.24c.23-.04.49-.06.73-.04.32.1.86.22 1.2.28.08.02.18-.07.24-.15.02-.01-.04-.07-.07-.13-.46-.46-1.23-.47-2-.5zM20.62 10.52l-.82-.36c-.05-.03-.08-.18-.03-.24.18-.27.37-.52.56-.76.1-.1.18-.09.23.04l.41 1.02c.08.2-.01.28-.35.3zM9.86 20.57c.2-.04.3.08.27.26-.02.1-.05.14-.21.22-.62.19-1.18.18-1.82.06-.2-.03-.33-.07-.36-.12a.38.38 0 0 1 .23-.16zM15.6 4.52c-.06.02-.13.07-.17.04-.53-.3-1.29-.7-1.77-1.01-.11-.16-.04-.22.11-.2.39.13 1.07.33 1.46.48.25.12.33.35.37.69zm8.15 11.68c.06.09.12.18-.05.45-.27.42-.34.85-.52 1.43-.04.12-.12.25-.18.34-.06.06-.15.08-.22.12-.02-.07-.06-.16-.05-.22l.54-1.76c.08-.21.24-.32.48-.36zm19.53-5.9a9.7 9.7 0 0 1-2.1-.74c-.23-.2-.19-.19.11-.2l1.97.53c.38.29.3.28.02.4zm-8.13 12.52a.67.67 0 0 0-.3-.37c-.1-.06-.29-.03-.4.06-.1.07-.23.18-.32.28-.15.21-.06.42.18.59.2.14.42.13.55-.06.12-.15.23-.26.29-.5zm-13.18-9.66c-.07.15-.09.3-.19.41-.27.32-.57.63-.86.94-.29.13-.3-.05-.27-.19.27-.5.65-.92 1-1.33.04-.04.15-.07.2-.04.05.03.08.1.12.2zm-11.3-2.75c-.07.05-1.13-1.6-1.26-1.94 0-.06.17-.18.26-.25.07.04.15.1.18.16.34.72.93 1.94.88 1.99zM10.22 17l-.45-.2c-.33.07-.6.22-.97.26-.39.03-.55-.05-.7-.15.06-.12.27-.24.58-.3.18-.03.97-.1 1.66-.04zm40.7-8.4l1.16.87c.12.08.1.24.15.34l-.26-.03c-.5-.25-1.02-.45-1.35-.94-.28-.41.18-.36.3-.24zm-29.38 1.43l-.13.2c-.05-.06-.12-.12-.15-.2-.1-.2-.1-.43-.12-.64-.06-.5-.03-.77.27-1.07.12-.14.22-.06.22.07.02.63-.01 1.02-.09 1.64zM14.1 8.21c.11.04.3 1.23.43 1.84.03.14.02.32 0 .45-.05.14-.1.17-.22.05-.2-.63-.3-1.27-.4-1.87-.04-.18-.04-.37.19-.47zm33.92 7.23c.48.27 1.04.75 1.27 1.03.06.06.03.22 0 .34-.08-.03-.17-.04-.23-.09-.4-.25-.77-.53-1.14-.79-.05-.04-.06-.33-.1-.39a.42.42 0 0 1 .2-.1zM26.15 5.14c.08.05.12.1.17.17a.42.42 0 0 1-.17.18c-.34.13-1.13.13-1.46-.06a1.02 1.02 0 0 1-.17-.2l.23-.13c.47-.1 1-.06 1.4.05zm9 1.92c.32.5.46.98.6 1.52 0 .03-.02.04-.02.12-.08-.05-.12-.06-.15-.1a2.8 2.8 0 0 1-.8-1.32c-.04-.12-.02-.22.13-.31.09.01.16.04.24.09zm-6.22 34.23c.38-.22.49-.39.83-.6.14-.08.12-.1.05-.23-.08-.15-.15-.15-.35-.1-.37.13-.52.22-.9.37-.16.06-.22.13-.05.25zM17.22 5.83c.46-.32.96-.49 1.47-.68.08-.02.2.01.29.09l-.18.16c-.4.28-.8.5-1.18.73-.12-.01-.3-.04-.4-.07a.3.3 0 0 1 0-.23zm-11.95 9.8c-.11-.54-.26-1.2-.17-1.68.03-.1.1-.2.21-.3.1.09.2.16.21.25.1.56-.06 1.2-.1 1.72l-.15.01zM31.3 3.56c.35-.28.93-.58 1.35-.79a5.05 5.05 0 0 1-1.38 1.47c-.03-.2-.1-.56.03-.68zm-6.4 20.89c0 .22.1.46.28.63.1-.08.18-.23.18-.3.04-.42.07-.85.07-1.29.05-.17-.2-.22-.26-.04-.1.33-.26.66-.27 1zm21.96 17.3l-1.85.62c.43.49 1.68.09 1.85-.62zM19.62 8.15c.03.49-.06 1.1-.33 1.55-.03.06-.1.1-.18.16-.03-.09-.12-.16-.1-.22.1-.5.23-1.1.35-1.6.02-.03.1-.06.14-.07zm25.9 35.36c.4 0 .78-.01 1.08-.1.27-.17.26-.52.35-.76l-.1-.03-.44.4c-.3.08-.57.14-.9.18-.06.06-.1.1-.14.18.05.07.1.12.16.13zm-3.7-19.82c.13-.29.25-.55.35-.82.02-.06-.07-.21-.18-.31a.78.78 0 0 0-.22.1 4 4 0 0 0-.58.88c.04.07.24.07.62.15zm-30.96-7.83l.39-1c.07-.02.13-.02.18.01.06.3.01.78-.02.97-.06.27-.16.43-.4.55a1.63 1.63 0 0 1-.15-.53zm22.57 7.34c-.27 0-.48.16-.5.4 0 .2.22.39.46.39.25-.02.44-.2.46-.42 0-.24-.15-.37-.42-.37zm-.24 2.46c0-.27-.16-.45-.45-.45-.23 0-.4.15-.4.36 0 .24.25.48.5.46.22 0 .35-.16.35-.37zm-1.01-2.52c0 .22-.14.35-.35.35-.28 0-.49-.17-.49-.43 0-.2.2-.4.4-.4.21-.02.44.18.44.48zm.18 1c-.24 0-.4.15-.4.35 0 .21.22.4.45.4.18 0 .35-.19.35-.4.01-.19-.17-.35-.4-.35zm-2.63 17.88c-.31 0-.58.15-.57.32.02.17.26.4.45.4.2 0 .31-.21.31-.48-.01-.2 0-.24-.19-.24zM10.67 4.18c-.15-.6-.08-1.14.07-1.75.25.52.27 1.36-.07 1.75zm22.5 17.52c-.16.1-.3.26-.28.33.02.12.15.23.23.35.12-.06.22-.2.27-.32.03-.07-.12-.2-.23-.36z',
                          fill: '#53565a',
                        }),
                        o.a.createElement('path', {
                          d: 'M52.8 56.98v2.97h.78c1.12 0 1.64-.6 1.64-1.49 0-.72-.35-1.48-1.83-1.48h-.59zm3.1 6.82a46.29 46.29 0 0 1-2.29-3.3h-.8v2.74l1.21.12v.48c-.56-.02-.95-.04-1.43-.04h-.86c-.48 0-.95.02-1.5.04v-.48l1.29-.12v-6.27l-1.3-.1v-.5c.7.03 1.2.05 1.6.05h1.8c1.58 0 2.95.55 2.95 1.98 0 1-.74 1.57-1.67 1.85a19.1 19.1 0 0 0 2.31 3.02l.79.08v.49l-2.1-.04zm-17.82-6.82l-1.26-.11v-.49l1.47.04h.86l1.52-.04v.48l-1.3.12v6.27l1.3.1v.49c-.56-.02-1.04-.04-1.52-.04h-.86c-.47 0-.95.02-1.5.04v-.49l1.29-.1v-6.27zm-3.01 0l-2.41 6.9h-.97l-2.4-6.9-.91-.11v-.49l1.63.04 1.85-.04v.48l-1.19.12 1.83 5.5 1.8-5.5-1.18-.11v-.49l1.52.04 1.28-.04v.48l-.85.12zM1.3 63.24v-6.27l-1.3-.1v-.5c.7.03 1.2.05 1.51.05H5.2l.1-.42h.52v2.11H5.3l-.2-1.14H2.58v2.84h1.86l.14-.84h.49v2.21h-.49l-.14-.83H2.58v2.24c0 .5.03.56.06.59.03.03.13.06.95.06h.74c.6 0 .89-.04 1.02-.17.14-.14.3-.52.5-1.35h.5l-.2 2.08H1.98c-.7 0-1.45.02-1.99.04v-.49l1.3-.1zm18.56-1.32c0 1.27-1.04 2.02-2.4 2.02-.7 0-1.37-.22-1.84-.52l-.13.58h-.5v-2.48h.5c.05.34.13.78.2 1.09.43.45 1.12.77 1.72.77.8 0 1.25-.46 1.25-1.18 0-1.68-3.51-1.7-3.51-4 0-1.22 1-1.92 2.28-1.92.5 0 1 .1 1.38.26l.15-.56h.49v2.17h-.5a8.49 8.49 0 0 0-.2-.96 2.13 2.13 0 0 0-1.17-.35c-.72 0-1.25.33-1.25 1.07 0 1.64 3.53 1.65 3.53 4zM9.18 63.24v-6.27l-1.3-.1v-.5c.7.03 1.2.05 1.52.05h.85l1.52-.04v.48l-1.3.11v5.68c0 .35 0 .48.07.54.03.04.42.05.88.05h.38c.68 0 .9-.07 1-.17.14-.15.33-.54.55-1.63h.5l-.15 2.36H9.8c-.75 0-1.36.02-1.92.04v-.48l1.3-.12zm13.54 0v-6.27l-1.3-.1v-.5c.7.03 1.2.05 1.6.05h3.6l.1-.42h.52v2.11h-.51l-.2-1.14h-2.52v2.84h1.85l.15-.84h.48v2.21h-.48l-.15-.82h-1.85v2.23c0 .5.02.56.05.59.04.03.13.06.95.06h.89c.6 0 .89-.04 1.01-.17.15-.14.31-.52.5-1.35h.51l-.21 2.08h-4.3c-.69 0-1.44.02-1.98.04v-.49l1.29-.1zm20.91 0v-6.27l-1.3-.1v-.5c.7.03 1.2.05 1.6.05h3.6l.11-.42h.51v2.11h-.5l-.2-1.14h-2.53v2.84h1.86l.14-.84h.49v2.21h-.49l-.14-.82h-1.86v2.23c0 .5.03.56.06.59.03.03.13.06.95.06h.76c.6 0 .87-.04 1-.17.14-.14.3-.52.5-1.35h.5l-.2 2.08h-4.16c-.7 0-1.45.02-2 .04v-.49l1.3-.1z',
                          fill: '#FF6C00',
                        })
                      ),
                      o.a.createElement(U, null, '作者服务')
                    ),
                    o.a.createElement(
                      'div',
                      { id: 'gh-nav-cnt', className: 'u-flex-center-ver' },
                      o.a.createElement(
                        'nav',
                        {
                          'aria-label': 'links',
                          className: 'gh-nav gh-nav-links gh-nav-h',
                        },
                        o.a.createElement(
                          'ul',
                          { className: 'gh-nav-list u-list-reset' },
                          //   o.a.createElement(
                          //     'li',
                          //     { className: 'gh-nav-item gh-move-to-spine' },
                          //     o.a.createElement(
                          //       'a',
                          //       {
                          //         className:
                          //           'anchor button-link-primary gh-nav-action',
                          //         href: Object(M.a)('blog'),
                          //         id: '5dfa035a-1b45-4b54-9bb8-dc50cf439c21',
                          //         'data-aa-region':
                          //           'aa-globalheader-navigation-link1',
                          //         'data-aa-name':
                          //           'aa-globalheader-navigation-Language editing',
                          //       },
                          //       o.a.createElement(
                          //         'span',
                          //         { className: 'anchor-text' },
                          //         '博客'
                          //       )
                          //     )
                          //   ),
                          o.a.createElement(
                            'li',
                            { className: 'gh-nav-item gh-move-to-spine' },
                            o.a.createElement(F, {
                              to: '/language-editing-services/language-editing/',
                              label: '语言校对',
                              menuItems: R.languageEditing,
                            })
                          ),
                          o.a.createElement(
                            'li',
                            { className: 'gh-nav-item gh-move-to-spine' },
                            o.a.createElement(F, {
                              to: '/language-translation-services/',
                              label: '翻译',
                              menuItems: R.translation,
                            })
                          ),
                          o.a.createElement(
                            'li',
                            { className: 'gh-nav-item gh-move-to-spine' },
                            o.a.createElement(F, {
                              to: '/article-services/',
                              label: 'Webshop',
                              menuItems: R.webshop,
                            })
                          )
                        )
                      ),
                      ' ',
                      o.a.createElement(
                        'nav',
                        {
                          'aria-label': 'utilities',
                          className: 'gh-nav gh-nav-utilities gh-nav-h',
                        },
                        o.a.createElement(
                          'ul',
                          { className: 'gh-nav-list u-list-reset' },
                          o.a.createElement(
                            'li',
                            { className: 'gh-nav-item gh-has-dd' },
                            o.a.createElement(
                              'div',
                              {
                                className: 'gh-ppvr u-clr-grey7',
                                id: 'gh-cart-dd',
                              },
                              o.a.createElement(
                                'div',
                                { className: 'gh-ppvr-trigger' },
                                o.a.createElement(
                                  'a',
                                  {
                                    href: 'https://cn.order.webshop.elsevier.com/authororders/mycart/',
                                    'aria-label': 'shoppping cart',
                                  },
                                  o.a.createElement(
                                    'button',
                                    {
                                      className:
                                        'button-link button-medium button-link-primary gh-nav-action gh-icon-btn',
                                      tabIndex: '0',
                                      id: 'aa-globalheader-shopping-chart',
                                      'data-aa-region':
                                        'aa-globalheader-shopping-chart',
                                      'data-aa-name':
                                        'aa-globalheader-shopping-chart',
                                      title: '购物车',
                                      'aria-expanded': 'false',
                                      type: 'button',
                                    },
                                    o.a.createElement(
                                      'svg',
                                      {
                                        focusable: 'false',
                                        role: 'img',
                                        'aria-label': '购物车',
                                        viewBox: '0 0 118 128',
                                        width: '22.125',
                                        height: '24',
                                        className: 'gh-icon icon-shopping-cart',
                                      },
                                      o.a.createElement('path', {
                                        d: 'm35.22 2e1c-2.23-6-8.93-12-16.62-12h-18.6v1e1h18.6c3.94 0 7.4 3.22 7.4 6.9v57.04c0 9.15 7.14 16.06 16.6 16.06h67.4v-1e1h-67.4c-4.01 0-6.6-2.38-6.6-6.06v-51.96h71.2c-0.77 1e1 -1.91 23.77-2.44 27.28-0.54 3.62-3.95 6.28-8.9 6.95-5.59 0.77-34.69 4.12-47.86 5.71v10.08c12.55-1.52 43.3-5.07 49.22-5.88 9.37-1.29 16.21-7.32 17.43-15.38 0.85-5.62 2.84-32.24 2.93-33.37l0.4-5.37h-82.76m64.78 84c-5.53 0-1e1 4.47-1e1 1e1 0 5.52 4.47 1e1 1e1 1e1 5.52 0 1e1 -4.48 1e1 -1e1 0-5.53-4.48-1e1 -1e1 -1e1m-64 0c-5.52 0-1e1 4.47-1e1 1e1 0 5.52 4.48 1e1 1e1 1e1s1e1 -4.48 1e1 -1e1c0-5.53-4.48-1e1 -1e1 -1e1',
                                      }),
                                      o.a.createElement(
                                        'rect',
                                        {
                                          x: '0',
                                          y: '0',
                                          width: '100%',
                                          height: '100%',
                                          stroke: 'none',
                                          opacity: '0',
                                        },
                                        o.a.createElement(
                                          'title',
                                          null,
                                          'Shopping Cart'
                                        )
                                      )
                                    ),
                                    o.a.createElement('span', {
                                      className: 'button-link-text',
                                    })
                                  )
                                )
                              )
                            )
                          )
                        )
                      )
                    ),
                    o.a.createElement(
                      'nav',
                      {
                        'aria-label': 'profile',
                        className: 'gh-nav gh-nav-utilities gh-nav-h',
                      },
                      o.a.createElement(
                        'ul',
                        { className: 'gh-nav-list u-list-reset' },
                        o.a.createElement(
                          'li',
                          { className: 'gh-nav-item gh-has-dd' },
                          o.a.createElement(
                            'div',
                            { className: 'gh-profile-container' },
                            o.a.createElement(
                              'div',
                              {
                                id: 'gh-profile-cnt',
                                className:
                                  'u-margin-left-m u-flex-center-ver gh-move-to-spine',
                              },
                              o.a.createElement(
                                'div',
                                {
                                  className:
                                    'gh-ppvr ' + (n ? 'gh-is-expanded' : ''),
                                  id: 'gh-profile-dd',
                                  'aria-label': '个人资料设置',
                                },
                                r.isLoggedIn
                                  ? o.a.createElement(
                                      o.a.Fragment,
                                      null,
                                      o.a.createElement(
                                        'button',
                                        {
                                          type: 'button',
                                          tabIndex: '0',
                                          'aria-label': '个人资料设置',
                                          title: '个人资料设置',
                                          className:
                                            'gh-avatar u-flex-center-ver gh-sm',
                                          onClick: i,
                                        },
                                        o.a.createElement(
                                          'span',
                                          { className: 'gh-initials' },
                                          o.a.createElement(
                                            'span',
                                            { className: 'gh-sr-only' },
                                            'User initials'
                                          ),
                                          W
                                        )
                                      )
                                    )
                                  : o.a.createElement(
                                      o.a.Fragment,
                                      null,
                                      o.a.createElement(
                                        'div',
                                        { className: 'gh-ppvr-trigger' },
                                        o.a.createElement(
                                          'a',
                                          {
                                            href: Object(M.a)('myDeskUrl'),
                                            'aria-label': '登入',
                                          },
                                          o.a.createElement(
                                            'button',
                                            {
                                              className:
                                                'button-link button-medium gh-icon-btn gh-move-to-spine button-link-primary gh-nav-action',
                                              id: 'gh-signin-btn',
                                              type: 'button',
                                            },
                                            o.a.createElement(
                                              'svg',
                                              {
                                                focusable: 'false',
                                                role: 'img',
                                                viewBox: '0 0 106 128',
                                                width: '19.875',
                                                height: '24',
                                                className:
                                                  'gh-icon icon-person',
                                              },
                                              o.a.createElement('path', {
                                                d: 'm11.07 1.2e2l0.84-9.29c1.97-18.79 23.34-22.93 41.09-22.93 17.74 0 39.11 4.13 41.08 22.84l0.84 9.38h10.04l-0.93-10.34c-2.15-20.43-20.14-31.66-51.03-31.66s-48.89 11.22-51.05 31.73l-0.91 10.27h10.03m41.93-102.29c-9.72 0-18.24 8.69-18.24 18.59 0 13.67 7.84 23.98 18.24 23.98s18.24-10.31 18.24-23.98c0-9.9-8.52-18.59-18.24-18.59zm0 52.29c-15.96 0-28-14.48-28-33.67 0-15.36 12.82-28.33 28-28.33s28 12.97 28 28.33c0 19.19-12.04 33.67-28 33.67',
                                              })
                                            )
                                          )
                                        )
                                      )
                                    ),
                                r.isLoggedIn
                                  ? o.a.createElement(
                                      o.a.Fragment,
                                      null,
                                      o.a.createElement(
                                        'div',
                                        {
                                          id: 'gh-ppvr-cnt-gh-profile-dd',
                                          className:
                                            'gh-ppvr-cnt gh-ppvr-right',
                                        },
                                        o.a.createElement(
                                          'div',
                                          { className: 'gh-ppvr-arrow-cnt' },
                                          o.a.createElement(
                                            'div',
                                            {
                                              className:
                                                'gh-ppvr-arrow gh-arrow-right',
                                            },
                                            o.a.createElement(
                                              'div',
                                              {
                                                className:
                                                  'u-position-relative',
                                              },
                                              o.a.createElement('div', {
                                                className: 'gh-ppvr-arrow-fill',
                                              })
                                            )
                                          )
                                        ),
                                        o.a.createElement(
                                          'div',
                                          { className: 'gh-ppvr-cnt-inner' },
                                          o.a.createElement(
                                            'div',
                                            {
                                              className:
                                                'gh-user-info u-flex-center-ver u-margin-bottom-m',
                                            },
                                            o.a.createElement(
                                              'div',
                                              {
                                                'aria-label': '',
                                                title: '',
                                                className:
                                                  'gh-avatar u-flex-center-ver gh-md',
                                              },
                                              o.a.createElement(
                                                'span',
                                                { className: 'gh-initials' },
                                                o.a.createElement(
                                                  'span',
                                                  { className: 'gh-sr-only' },
                                                  'User initials'
                                                ),
                                                W
                                              )
                                            ),
                                            o.a.createElement(
                                              'ul',
                                              {
                                                className:
                                                  'u-list-reset u-margin-left-s',
                                              },
                                              o.a.createElement(
                                                'li',
                                                { className: 'gh-user-fname' },
                                                r.customerFullname
                                              )
                                            )
                                          ),
                                          o.a.createElement(
                                            'ul',
                                            { className: 'gh-dd-nav' },
                                            o.a.createElement(
                                              'li',
                                              { className: 'gh-nav-item' },
                                              o.a.createElement(
                                                'a',
                                                {
                                                  className:
                                                    'anchor button-link-primary gh-nav-action',
                                                  href: Object(M.a)(
                                                    'myAuthorServices'
                                                  ),
                                                  tabIndex: '0',
                                                  id: '701fbc01-d0e7-494c-8f8d-38ab73963ffe',
                                                  'data-aa-region':
                                                    'aa-globalheader-profile2',
                                                  'data-aa-name':
                                                    'aa-globalheader-profile-Personalization',
                                                },
                                                o.a.createElement(
                                                  'span',
                                                  { className: 'anchor-text' },
                                                  'My author services'
                                                )
                                              )
                                            )
                                          ),
                                          o.a.createElement(
                                            A,
                                            { className: 'gh-dd-actions' },
                                            o.a.createElement(
                                              'a',
                                              {
                                                href: Object(M.a)('myProfile'),
                                                className:
                                                  'button button-medium button-tertiary',
                                                'aria-label': '查看账户',
                                              },
                                              o.a.createElement(
                                                'span',
                                                { className: 'button-text' },
                                                'View account'
                                              )
                                            ),
                                            o.a.createElement(
                                              'a',
                                              {
                                                href: Object(M.a)('logout'),
                                                className:
                                                  'button button-medium button-primary',
                                                'aria-label': '登出',
                                              },
                                              o.a.createElement(
                                                'span',
                                                { className: 'button-text' },
                                                'Sign out'
                                              )
                                            )
                                          )
                                        )
                                      )
                                    )
                                  : ''
                              )
                            )
                          )
                        )
                      )
                    ),
                    o.a.createElement(
                      'div',
                      { id: 'gh-mobile-menu' },
                      o.a.createElement(
                        'div',
                        {
                          className:
                            'gh-hamburger u-fill-grey7 u-margin-left-m',
                        },
                        o.a.createElement(
                          'button',
                          {
                            className:
                              'button-link button-medium u-flex-center-ver button-link-primary',
                            'aria-label': '切换手机菜单',
                            'aria-expanded': 'false',
                            type: 'button',
                            onClick: function () {
                              return a(!0);
                            },
                          },
                          o.a.createElement(
                            'svg',
                            {
                              className:
                                'gh-hamburger-svg-el gh-hamburger-closed',
                              role: 'img',
                              'aria-hidden': 'true',
                              height: '18',
                              width: '40',
                            },
                            o.a.createElement('path', {
                              d: 'M0 14h40v2H0zm0-7h40v2H0zm0-7h40v2H0z',
                            })
                          )
                        )
                      ),
                      o.a.createElement(
                        'div',
                        {
                          id: 'gh-drawer',
                          'aria-label': '手机菜单',
                          role: 'navigation',
                          style: {
                            right: t ? 0 : '-320px',
                            visibility: t ? 'visible' : 'hidden',
                            paddingBottom: '16px',
                          },
                        },
                        o.a.createElement(
                          'header',
                          {
                            id: 'gh-drawer-header',
                            className: 'u-padding-s-xs text-s',
                          },
                          o.a.createElement(
                            'div',
                            { className: 'gh-hamburger u-margin-left-s' },
                            o.a.createElement(
                              'button',
                              {
                                className:
                                  'button-link button-medium u-flex-center-ver button-link-primary',
                                'aria-label': '切换手机菜单',
                                'aria-expanded': 'true',
                                type: 'button',
                                onClick: function () {
                                  return a(!1);
                                },
                              },
                              o.a.createElement(
                                'svg',
                                {
                                  xmlns: 'https://www.w3.org/2000/svg',
                                  role: 'img',
                                  'aria-hidden': 'true',
                                  className: 'gh-hamburger-open',
                                  width: '20',
                                  height: '20',
                                  viewBox: '0 0 20 20',
                                },
                                o.a.createElement('rect', {
                                  x: '9.01',
                                  y: '-2.95',
                                  width: '1.97',
                                  height: '25.91',
                                  transform: 'translate(9.86 -4.29) rotate(45)',
                                }),
                                o.a.createElement('rect', {
                                  x: '9.01',
                                  y: '-2.95',
                                  width: '1.97',
                                  height: '25.91',
                                  transform: 'translate(24 9.86) rotate(135)',
                                })
                              )
                            )
                          ),
                          o.a.createElement(
                            'div',
                            { className: 'gh-dh-opt' },
                            r.isLoggedIn
                              ? o.a.createElement(
                                  'div',
                                  {
                                    'aria-label': '个人资料图片',
                                    title: '个人资料图片',
                                    className:
                                      'gh-avatar u-flex-center-ver u-margin-right-s gh-xs',
                                  },
                                  o.a.createElement(
                                    'span',
                                    { className: 'gh-initials' },
                                    o.a.createElement(
                                      'span',
                                      { className: 'gh-sr-only' },
                                      'User initials'
                                    ),
                                    W
                                  )
                                )
                              : '',
                            o.a.createElement(
                              'div',
                              { className: 'gh-dh-profile' },
                              r.isLoggedIn
                                ? ''
                                : o.a.createElement(
                                    'p',
                                    { className: 'u-margin-bottom-s' },
                                    'Make use of personalized features like alerts and saved searches'
                                  ),
                              o.a.createElement(
                                'div',
                                { className: 'gh-dh-actions' },
                                o.a.createElement(
                                  'a',
                                  {
                                    href: Object(M.a)('myDeskUrl'),
                                    'aria-label': '登入',
                                  },
                                  o.a.createElement(
                                    'button',
                                    {
                                      className:
                                        'button-link button-medium button-link-secondary',
                                      type: 'button',
                                    },
                                    o.a.createElement(
                                      'span',
                                      { className: 'button-link-text' },
                                      'Sign ',
                                      r.isLoggedIn ? 'out' : 'in'
                                    )
                                  )
                                )
                              )
                            )
                          )
                        ),
                        o.a.createElement('div', { id: 'gh-mob-inst-cnt' }),
                        o.a.createElement(
                          'nav',
                          {
                            'aria-label': 'links',
                            className: 'gh-nav gh-nav-links gh-nav-v',
                            style: { marginTop: '16px' },
                          },
                          o.a.createElement(
                            'ul',
                            { className: 'gh-nav-list u-list-reset' },
                            o.a.createElement(
                              'li',
                              { className: 'gh-nav-item' },
                              o.a.createElement(
                                d.Link,
                                {
                                  className:
                                    'anchor button-link-primary gh-nav-action',
                                  to: '/language-editing-services/language-editing/',
                                  tabIndex: '0',
                                  id: '5dfa035a-1b45-4b54-9bb8-dc50cf439c21-mobile',
                                  'data-aa-region':
                                    'aa-globalheader-navigation-link1',
                                  'data-aa-name':
                                    'aa-globalheader-navigation-Language editing',
                                  label: '语言校对',
                                },
                                o.a.createElement(
                                  q,
                                  { noMargin: !0, className: 'anchor-text' },
                                  '语言校对'
                                )
                              ),
                              o.a.createElement(P, {
                                menuItems: R.languageEditing,
                              })
                            ),
                            o.a.createElement(
                              'li',
                              { className: 'gh-nav-item' },
                              o.a.createElement(
                                d.Link,
                                {
                                  className:
                                    'anchor button-link-primary gh-nav-action',
                                  to: '/language-translation-services/',
                                  tabIndex: '0',
                                  id: 'e5d316d9-2ec3-45f5-9efb-8238f5f85f24-mobile',
                                  'data-aa-region':
                                    'aa-globalheader-navigation-link2',
                                  'data-aa-name':
                                    'aa-globalheader-navigation-Translation',
                                  label: '翻译',
                                },
                                o.a.createElement(
                                  q,
                                  { className: 'anchor-text' },
                                  '翻译'
                                )
                              ),
                              o.a.createElement(P, { menuItems: R.translation })
                            ),
                            o.a.createElement(
                              'li',
                              { className: 'gh-nav-item' },
                              o.a.createElement(
                                d.Link,
                                {
                                  className:
                                    'anchor button-link-primary gh-nav-action',
                                  to: '/article-services/',
                                  tabIndex: '0',
                                  id: 'bd478406-d74e-4dbf-8c8b-751215e3c7b2-mobile',
                                  'data-aa-region':
                                    'aa-globalheader-navigation-link4',
                                  'data-aa-name':
                                    'aa-globalheader-navigation-Webshop',
                                  label: 'Webshop',
                                },
                                o.a.createElement(
                                  q,
                                  { className: 'anchor-text' },
                                  'Webshop'
                                )
                              ),
                              o.a.createElement(P, { menuItems: R.webshop })
                            )
                            // o.a.createElement(
                            //   'li',
                            //   { className: 'gh-nav-item' },
                            //   o.a.createElement(
                            //     'a',
                            //     {
                            //       className:
                            //         'anchor button-link-primary gh-nav-action',
                            //       href: Object(M.a)('blog'),
                            //       tabIndex: '0',
                            //     },
                            //     o.a.createElement(
                            //       q,
                            //       { className: 'anchor-text' },
                            //       '博客'
                            //     )
                            //   )
                            // )
                          )
                        ),
                        r.isLoggedIn
                          ? o.a.createElement(
                              'nav',
                              {
                                'aria-label': 'links',
                                className:
                                  'gh-nav gh-nav-links u-margin-bottom-m gh-nav-v',
                              },
                              o.a.createElement(
                                'ul',
                                { className: 'gh-nav-list u-list-reset' },
                                o.a.createElement(
                                  'div',
                                  {
                                    className:
                                      'u-clr-grey4 u-margin-bottom-s gh-lbl',
                                  },
                                  'Settings'
                                ),
                                o.a.createElement(
                                  'ul',
                                  { className: 'gh-dd-nav' },
                                  o.a.createElement(
                                    'li',
                                    { className: 'gh-nav-item' },
                                    o.a.createElement(
                                      'a',
                                      {
                                        className:
                                          'anchor button-link-primary gh-nav-action',
                                        href: Object(M.a)('myAuthorServices'),
                                        tabIndex: '0',
                                      },
                                      o.a.createElement(
                                        'span',
                                        { className: 'anchor-text' },
                                        'My author services'
                                      )
                                    )
                                  ),
                                  o.a.createElement(
                                    'li',
                                    { className: 'gh-nav-item' },
                                    o.a.createElement(
                                      'a',
                                      {
                                        className:
                                          'anchor button-link-primary gh-nav-action',
                                        href: Object(M.a)('myProfile'),
                                        tabIndex: '0',
                                      },
                                      o.a.createElement(
                                        'span',
                                        { className: 'anchor-text' },
                                        'View account'
                                      )
                                    )
                                  )
                                )
                              )
                            )
                          : ''
                      )
                    )
                  ),
                  o.a.createElement('div', {
                    id: 'gh-sub-header',
                    className:
                      'u-flex-center-ver gh-sides-padding gh-move-to-spine',
                  }),
                  o.a.createElement('script', { id: 'gh-size-reducer' })
                )
              );
            }),
            t
          );
        })(l.PureComponent),
        H = (a(175), a(176), a(172)),
        G = a(173),
        X = a(177),
        K = a(178),
        V = a(180),
        J = a(170),
        Q = a(187);
      function Y() {
        var e = f()([
          '\n    margin-top: 40px;\n    order: 1;\n    flex: 1 40%;\n  ',
        ]);
        return (
          (Y = function () {
            return e;
          }),
          e
        );
      }
      function $() {
        var e = f()([
          '\n    display: block;\n    float: left;\n    margin-bottom: 5px;\n  ',
        ]);
        return (
          ($ = function () {
            return e;
          }),
          e
        );
      }
      function ee() {
        var e = f()([
          '\n    padding-bottom: 25px;\n    padding-top: 25px;\n  ',
        ]);
        return (
          (ee = function () {
            return e;
          }),
          e
        );
      }
      function te() {
        var e = f()([
          '\n    flex: 1 100%;\n    justify-content: center;\n    margin-top: 40px;\n  ',
        ]);
        return (
          (te = function () {
            return e;
          }),
          e
        );
      }
      function ae() {
        var e = f()([
          '\n    &:not(:last-child) {\n      margin-bottom: 25px;\n    }\n  ',
        ]);
        return (
          (ae = function () {
            return e;
          }),
          e
        );
      }
      function ne() {
        var e = f()(['\n    margin-bottom: 50px;\n    margin-top: 50px;\n  ']);
        return (
          (ne = function () {
            return e;
          }),
          e
        );
      }
      function ie() {
        var e = f()([
          '\n    justify-content: center;\n    margin-top: 6px;\n  ',
        ]);
        return (
          (ie = function () {
            return e;
          }),
          e
        );
      }
      function re() {
        var e = f()([
          '\n    flex: 1 100%;\n    flex-direction: column;\n    justify-content: center;\n  ',
        ]);
        return (
          (re = function () {
            return e;
          }),
          e
        );
      }
      function le() {
        var e = f()([
          '\n    padding-bottom: 25px;\n    text-align: center;\n  ',
        ]);
        return (
          (le = function () {
            return e;
          }),
          e
        );
      }
      function oe() {
        var e = f()(['\n    flex: 1 100%;\n   ']);
        return (
          (oe = function () {
            return e;
          }),
          e
        );
      }
      var ce = Object(u.default)(X.a).withConfig({
          displayName: 'footerstyled__FullWidthRow',
          componentId: 'zh8twx-0',
        })(['&,> *{max-width:none;}']),
        se = Object(u.default)(ce).withConfig({
          displayName: 'footerstyled__FootRow',
          componentId: 'zh8twx-1',
        })([
          'max-width:none;padding-bottom:25px;padding-top:25px;position:relative;',
        ]),
        me = u.default.div.withConfig({
          displayName: 'footerstyled__FootRowInner',
          componentId: 'zh8twx-2',
        })(['display:flex;flex-flow:row wrap;width:100%;']),
        pe = Object(u.default)(G.a).withConfig({
          displayName: 'footerstyled__FootTextColumn',
          componentId: 'zh8twx-3',
        })(['', ''], H.a.tablet(oe())),
        de = Object(u.default)(ce).withConfig({
          displayName: 'footerstyled__LanguageRow',
          componentId: 'zh8twx-4',
        })(
          ['align-items:center;padding-bottom:20px;padding-top:20px;', ';'],
          H.a.phone(le())
        ),
        ue = Object(u.default)(G.a).withConfig({
          displayName: 'footerstyled__LanguageColumn',
          componentId: 'zh8twx-5',
        })(['flex-direction:row;align-items:center;', ';'], H.a.tablet(re())),
        he = Object(u.default)(J.a).withConfig({
          displayName: 'footerstyled__LanguageText',
          componentId: 'zh8twx-6',
        })(['margin-right:1rem;']),
        ge = u.default.span.withConfig({
          displayName: 'footerstyled__LanguageSelectContainer',
          componentId: 'zh8twx-7',
        })(['display:flex;flex-direction:row;', ';'], H.a.tablet(ie())),
        fe = Object(u.default)(X.a).withConfig({
          displayName: 'footerstyled__NavigationRow',
          componentId: 'zh8twx-8',
        })(
          ['margin-bottom:80px;margin-top:20px;&,> *{max-width:none;}', ';'],
          H.a.phone(ne())
        ),
        ve = Object(u.default)(G.a).withConfig({
          displayName: 'footerstyled__NavigationColumn',
          componentId: 'zh8twx-9',
        })(['', ';'], H.a.phone(ae())),
        be = Object(u.default)(G.a).withConfig({
          displayName: 'footerstyled__SocialColumn',
          componentId: 'zh8twx-10',
        })(
          [
            'flex-direction:row;justify-content:flex-end;> a{margin-left:28px;:first-child{margin-left:0;}}',
            ';',
          ],
          H.a.tablet(te())
        ),
        ye = Object(u.default)(K.a).withConfig({
          displayName: 'footerstyled__SocialIcon',
          componentId: 'zh8twx-11',
        })(['']),
        xe = Object(u.default)(G.a).withConfig({
          displayName: 'footerstyled__SecurePaymentColumn',
          componentId: 'zh8twx-12',
        })(
          ['flex-direction:row;padding-bottom:40px;padding-top:70px;', ';'],
          H.a.tablet(ee())
        ),
        we = Object(u.default)(Q.a).withConfig({
          displayName: 'footerstyled__FootLinkText',
          componentId: 'zh8twx-13',
        })(['display:inline-block;margin-right:40px;', ';'], H.a.tablet($())),
        Ee = Object(u.default)(V.a).withConfig({
          displayName: 'footerstyled__RelxGroup',
          componentId: 'zh8twx-14',
        })(['margin-left:auto;margin-top:auto;margin-bottom:8px;width:110px;']),
        Ce = Object(u.default)(V.a).withConfig({
          displayName: 'footerstyled__Wordmark',
          componentId: 'zh8twx-15',
        })(['margin-top:auto;margin-right:auto;margin-bottom:8px;']),
        ke = Object(u.default)(G.a).withConfig({
          displayName: 'footerstyled__WordmarkColumn',
          componentId: 'zh8twx-16',
        })(['', ';'], H.a.tablet(Y())),
        ze = a(205),
        Ne = a(179),
        Le = Object(u.default)(Ne.a).withConfig({
          displayName: 'navigation-liststyled__StyledLink',
          componentId: 'yrln5y-0',
        })(['margin-bottom:10px;']),
        je = Object(u.default)(Q.a).withConfig({
          displayName: 'navigation-liststyled__StyledExternalLink',
          componentId: 'yrln5y-1',
        })(['margin-bottom:10px;']),
        Me = Object(u.default)(J.a).withConfig({
          displayName: 'navigation-liststyled__Title',
          componentId: 'yrln5y-2',
        })(['color:', ';margin-bottom:10px;'], function (e) {
          return e.theme.colors.grey4;
        }),
        Oe = function (e) {
          var t = e.activeClassName,
            a = e.items,
            n = e.title,
            i = e.chevron;
          return o.a.createElement(
            o.a.Fragment,
            null,
            n && o.a.createElement(Me, { type: 'body', text: n }),
            a.map(function (e, a) {
              var n = e.slug;
              return o.a.createElement(
                'div',
                { key: a.toString() },
                T.a.isInternal(n)
                  ? o.a.createElement(Le, {
                      activeClassName: t,
                      chevron: i,
                      to: n,
                      text: e.title,
                      type: i ? 'medium' : 'small',
                    })
                  : o.a.createElement(je, {
                      target: '_blank',
                      underline: !0,
                      to: Object(M.a)(n),
                      text: e.title,
                      rel: 'noopener noreferrer',
                      type: i ? 'medium' : 'small',
                    })
              );
            })
          );
        };
      function _e() {
        var e = f()([
          '\n    width: 33.3%;\n\n    &:not(:first-child) {\n      margin-left: 0px;\n    }\n\n    &:nth-child(-n+3) {\n      margin-bottom: 30px;\n    }\n  ',
        ]);
        return (
          (_e = function () {
            return e;
          }),
          e
        );
      }
      function Se() {
        var e = f()([
          '\n    margin: auto;\n    margin-bottom: 25px;\n    width: 100%;\n    text-align: center;\n  ',
        ]);
        return (
          (Se = function () {
            return e;
          }),
          e
        );
      }
      function Ie() {
        var e = f()([
          '\n    align-items: center;\n    flex-direction: row;\n    flex-wrap: wrap;\n  ',
        ]);
        return (
          (Ie = function () {
            return e;
          }),
          e
        );
      }
      var Fe = u.default.div.withConfig({
          displayName: 'secure-paymentstyled__Container',
          componentId: 'sc-19ycmcn-0',
        })(['display:flex;width:100%;', ';'], H.a.tablet(Ie())),
        Be = Object(u.default)(J.a).withConfig({
          displayName: 'secure-paymentstyled__StyledText',
          componentId: 'sc-19ycmcn-1',
        })(['margin-right:48px;', ';'], H.a.tablet(Se())),
        Pe = Object(u.default)(V.a).withConfig({
          displayName: 'secure-paymentstyled__StyledImage',
          componentId: 'sc-19ycmcn-2',
        })(
          [
            'height:30px;flex:0 0 auto;&:not(:first-child){margin-left:40px;}',
            ';',
          ],
          H.a.tablet(_e())
        ),
        Te = [
          'mastercard',
          'visa',
          'amex',
          'paypal',
          'unionpay',
          'alipay',
          'wechatpay-2',
        ],
        De = function () {
          return o.a.createElement(
            Fe,
            null,
            o.a.createElement(Be, { text: '安全支付', type: 'body' }),
            Te.map(function (e, t) {
              return o.a.createElement(Pe, {
                key: t.toString(),
                src: '/images/' + e + '.svg',
                alt: e + ' logo',
              });
            })
          );
        },
        Ue = a(209),
        Ae = [4 / 12, 0.25, 5 / 12],
        Re = ['服务', '支持', '关于'],
        qe = function (e) {
          var t = e.about,
            a = e.pages,
            n = e.services,
            i = e.socials,
            r = e.support,
            l = [n.concat(a), r, t];
          return o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(
              ce,
              { wide: !0 },
              o.a.createElement(xe, { width: 1 }, o.a.createElement(De, null)),
              o.a.createElement(ze.a, null)
            ),
            o.a.createElement(
              fe,
              { wide: !0 },
              l.map(function (e, t) {
                return o.a.createElement(
                  ve,
                  { key: t.toString(), width: Ae[t] },
                  o.a.createElement(Oe, { title: Re[t], items: e })
                );
              })
            ),
            o.a.createElement(ce, { wide: !0 }, o.a.createElement(ze.a, null)),
            o.a.createElement(
              de,
              { wide: !0 },
              o.a.createElement(
                ue,
                { width: [0.5, 0.5] },
                o.a.createElement(he, {
                  type: 'bodySm',
                  text: '选择语言/位置',
                }),
                o.a.createElement(
                  ge,
                  null,
                  o.a.createElement(K.a, { type: 'globe' }),
                  o.a.createElement(Q.a, {
                    text: '全球 - 英语',
                    to: Object(M.a)('localeGlobal'),
                    type: 'small',
                    underline: !0,
                  }),
                  o.a.createElement(
                    Ue.a,
                    { margin: { l: 2 } },
                    o.a.createElement(Q.a, {
                      text: '中国 - 简体中文',
                      to: Object(M.a)('localeCn'),
                      type: 'small',
                      underline: !0,
                    })
                  )
                )
              ),
              o.a.createElement(
                be,
                { width: [0.5, 0.5] },
                i.map(function (e, t) {
                  return o.a.createElement(
                    'a',
                    {
                      'aria-label': e.title,
                      href: Object(M.a)(e.slug),
                      key: t.toString(),
                    },
                    o.a.createElement(ye, { type: e.title, size: 'huge' })
                  );
                })
              )
            ),
            o.a.createElement(ze.a, { color: 'orange' }),
            o.a.createElement(
              se,
              { wide: !0 },
              o.a.createElement(
                me,
                null,
                o.a.createElement(
                  ke,
                  { width: 0.25 },
                  o.a.createElement(Ce, {
                    src: '/images/elsevier.svg',
                    alt: 'Elsevier wordmark',
                  })
                ),
                o.a.createElement(
                  pe,
                  { width: 5 / 12 },
                  o.a.createElement(
                    'div',
                    null,
                    o.a.createElement(we, {
                      text: '条款和条件',
                      to: 'https://www.elsevier.com/legal/elsevier-website-terms-and-conditions/',
                      target: '_blank',
                      type: 'extraSmall',
                      underline: !0,
                    }),
                    o.a.createElement(we, {
                      text: '运费与递送',
                      to: '/shipping-and-delivery/',
                      type: 'extraSmall',
                      underline: !0,
                    })
                  ),
                  o.a.createElement(
                    'div',
                    null,
                    o.a.createElement(J.a, {
                      type: 'bodyXs',
                      text: '本网站使用了 Cookies。要拒绝使用或了解更多相关信息，请访问我们的  ',
                      color: 'grey4',
                    }),
                    o.a.createElement(
                      'button',
                      {
                        id: 'ot-sdk-btn',
                        type: 'button',
                        className: 'ot-sdk-show-settings',
                      },
                      'Cookie Settings'
                    )
                  )
                ),
                o.a.createElement(
                  ke,
                  { width: 4 / 12 },
                  o.a.createElement(Ee, {
                    src: '/images/relx-no-group.svg',
                    alt: 'RELX logo',
                  })
                )
              )
            )
          );
        },
        We = (function (e) {
          function t(t) {
            var a;
            return (
              ((a = e.call(this, t) || this).setMenuOpen = function (e) {
                a.setState({ menuOpen: e }),
                  (document.body.style.overflow = e ? 'hidden' : 'auto');
              }),
              (a.state = { menuOpen: !1, popupOpen: !1 }),
              (a.setPopup = a.setPopup.bind(k()(k()(a)))),
              a
            );
          }
          i()(t, e);
          var a = t.prototype;
          return (
            (a.componentDidMount = function () {
              var e = this,
                t = this.state.menuOpen;
              this.setState({ popupOpen: !1 }),
                (document.body.style.overflow = t ? 'hidden' : 'auto'),
                window.addEventListener('resize', function () {
                  return e.setState({ popupOpen: !1 });
                }),
                document.body.addEventListener('click', function (t) {
                  (function e(t, a) {
                    return t && (a(t) ? t : e(t.parentNode, a));
                  })(t.target, function (e) {
                    return 'gh-ppvr-cnt-gh-profile-dd' === e.id;
                  }) || e.setState({ popupOpen: !1 });
                });
            }),
            (a.setPopup = function () {
              this.setState(function (e) {
                return { popupOpen: !e.popupOpen };
              });
            }),
            (a.render = function () {
              var e = this,
                t = this.props,
                a = t.children,
                n = t.services,
                i = t.pages,
                r = t.about,
                l = t.socials,
                c = t.support,
                s = this.state,
                m = s.menuOpen,
                p = s.popupOpen;
              return o.a.createElement(
                o.a.Fragment,
                null,
                o.a.createElement(Z, {
                  menuOpen: m,
                  setMenuOpen: this.setMenuOpen,
                  popupOpen: p,
                  setPopup: this.setPopup,
                }),
                m &&
                  o.a.createElement(N, {
                    onClick: function () {
                      return e.setMenuOpen(!1);
                    },
                  }),
                o.a.createElement(z, null, a),
                o.a.createElement(qe, {
                  about: r,
                  services: n,
                  pages: i,
                  socials: l,
                  support: c,
                })
              );
            }),
            t
          );
        })(l.PureComponent),
        Ze = (function (e) {
          function t() {
            return e.apply(this, arguments) || this;
          }
          i()(t, e);
          var a = t.prototype;
          return (
            (a.componentDidMount = function () {
              var e = document.createElement('script');
              (e.src =
                'https://authors.webshop.elsevier.com/assets/js/simulator-b1b929592b.min.js'),
                e.addEventListener('load', function () {
                  ELS.init();
                }),
                document.head.appendChild(e);
            }),
            (a.handleChangeClientState = function (e) {
              var t = this.props,
                a = t.pagePath,
                n = t.children,
                i = n && n.props && n.props.featuredService;
              if (e && e.scriptTags) {
                var r = e.scriptTags.find(function (e) {
                  return e.src === Object(M.a)('adobedtm');
                });
                r &&
                  (r.onload = function () {
                    return T.a.adobePageLoad(a, i);
                  });
              } else T.a.adobePageLoad(a, i);
            }),
            (a.render = function () {
              var e = this,
                t = this.props,
                a = t.children,
                n = t.pageTitle,
                i = t.pageDescription,
                l = t.pagePath;
              return o.a.createElement(d.StaticQuery, {
                query: '2561342282',
                render: function (t) {
                  var r = t.services,
                    c = t.pages,
                    s = t.footer,
                    m = s.socials,
                    d = s.support,
                    g = s.about,
                    f = T.a.processData(r),
                    v = T.a.processData(c);
                  return o.a.createElement(
                    u.ThemeProvider,
                    { theme: h.a },
                    o.a.createElement(
                      o.a.Fragment,
                      null,
                      o.a.createElement(
                        p.a,
                        {
                          charSet: 'utf-8',
                          defaultTitle: t.site.siteMetadata.siteTitle,
                          title: n + ' | ' + t.site.siteMetadata.siteTitle,
                          onChangeClientState: function (t, a) {
                            return e.handleChangeClientState(a);
                          },
                        },
                        o.a.createElement('html', { lang: 'en' }),
                        o.a.createElement('meta', {
                          name: 'description',
                          content: i,
                        }),
                        o.a.createElement('link', {
                          rel: 'canonical',
                          href: '' + t.site.siteMetadata.siteUrl + (l || '/'),
                        }),
                        o.a.createElement('meta', {
                          name: 'docsearch:version',
                          content: '2.0',
                        }),
                        o.a.createElement('meta', {
                          name: 'google-site-verification',
                          content:
                            'NpKJJn1040oSpfG_jkExBu-Ci4CdC-euoGfgZYq75EA',
                        }),
                        o.a.createElement('link', {
                          rel: 'apple-touch-icon',
                          sizes: '57x57',
                          href: 'https://cdn.elsevier.io/verona/includes/favicons/apple-touch-icon-57x57.png',
                        }),
                        o.a.createElement('link', {
                          rel: 'apple-touch-icon',
                          sizes: '114x114',
                          href: 'https://cdn.elsevier.io/verona/includes/favicons/apple-touch-icon-114x114.png',
                        }),
                        o.a.createElement('link', {
                          rel: 'apple-touch-icon',
                          sizes: '72x72',
                          href: 'https://cdn.elsevier.io/verona/includes/favicons/apple-touch-icon-72x72.png',
                        }),
                        o.a.createElement('link', {
                          rel: 'apple-touch-icon',
                          sizes: '144x144',
                          href: 'https://cdn.elsevier.io/verona/includes/favicons/apple-touch-icon-144x144.png',
                        }),
                        o.a.createElement('link', {
                          rel: 'apple-touch-icon',
                          sizes: '60x60',
                          href: 'https://cdn.elsevier.io/verona/includes/favicons/apple-touch-icon-60x60.png',
                        }),
                        o.a.createElement('link', {
                          rel: 'apple-touch-icon',
                          sizes: '120x120',
                          href: 'https://cdn.elsevier.io/verona/includes/favicons/apple-touch-icon-120x120.png',
                        }),
                        o.a.createElement('link', {
                          rel: 'apple-touch-icon',
                          sizes: '76x76',
                          href: 'https://cdn.elsevier.io/verona/includes/favicons/apple-touch-icon-76x76.png',
                        }),
                        o.a.createElement('link', {
                          rel: 'apple-touch-icon',
                          sizes: '152x152',
                          href: 'https://cdn.elsevier.io/verona/includes/favicons/apple-touch-icon-152x152.png',
                        }),
                        o.a.createElement('link', {
                          rel: 'apple-touch-icon',
                          sizes: '180x180',
                          href: 'https://cdn.elsevier.io/verona/includes/favicons/apple-touch-icon-180x180.png',
                        }),
                        o.a.createElement('link', {
                          rel: 'icon',
                          type: 'image/png',
                          href: 'https://cdn.elsevier.io/verona/includes/favicons/favicon-192x192.png',
                          sizes: '192x192',
                        }),
                        o.a.createElement('link', {
                          rel: 'icon',
                          type: 'image/png',
                          href: 'https://cdn.elsevier.io/verona/includes/favicons/favicon-160x160.png',
                          sizes: '160x160',
                        }),
                        o.a.createElement('link', {
                          rel: 'icon',
                          type: 'image/png',
                          href: 'https://cdn.elsevier.io/verona/includes/favicons/favicon-96x96.png',
                          sizes: '96x96',
                        }),
                        o.a.createElement('link', {
                          rel: 'icon',
                          type: 'image/png',
                          href: 'https://cdn.elsevier.io/verona/includes/favicons/favicon-16x16.png',
                          sizes: '16x16',
                        }),
                        o.a.createElement('link', {
                          rel: 'icon',
                          type: 'image/png',
                          href: 'https://cdn.elsevier.io/verona/includes/favicons/favicon-32x32.png',
                          sizes: '32x32',
                        }),
                        o.a.createElement('script', {
                          src: 'https://cdn.cookielaw.org/scripttemplates/otSDKStub.js',
                          type: 'text/javascript',
                          charset: 'UTF-8',
                          'data-domain-script': Object(M.a)('cookielaw'),
                        }),
                        o.a.createElement(
                          'script',
                          null,
                          'function OptanonWrapper() { }'
                        ),
                        o.a.createElement(
                          'script',
                          { type: 'text/javascript' },
                          '\n /*{literal}<![CDATA[*/window.lightningjs||function(c){function g(b,d){d&&(d+=(/\\?/.test(d)?"&":"?")+"lv=1");c[b]||function(){var i=window,h=document,j=b,g=h.location.protocol,l="load",k=0;(function(){function b(){a.P(l);a.w=1;c[j]("_load")}c[j]=function(){function m(){m.id=e;return c[j].apply(m,arguments)}var b,e=++k;b=this&&this!=i?this.id||0:0;(a.s=a.s||[]).push([e,b,arguments]);m.then=function(b,c,h){var d=a.fh[e]=a.fh[e]||[],j=a.eh[e]=a.eh[e]||[],f=a.ph[e]=a.ph[e]||[];b&&d.push(b);c&&j.push(c);h&&f.push(h);return m};return m};var a=c[j]._={};a.fh={};a.eh={};a.ph={};a.l=d?d.replace(/^\\/\\//,(g=="https:"?g:"http:")+"//"):d;a.p={0:+new Date};a.P=function(b){a.p[b]=new Date-a.p[0]};a.w&&b();i.addEventListener?i.addEventListener(l,b,!1):i.attachEvent("on"+l,b);var q=function(){function b(){return["<head></head><",c,\' onload="var d=\',n,";d.getElementsByTagName(\'head\')[0].",d,"(d.",g,"(\'script\')).",i,"=\'",a.l,"\'\\"></",c,">"].join("")}var c="body",e=h[c];if(!e)return setTimeout(q,100);a.P(1);var d="appendChild",g="createElement",i="src",k=h[g]("div"),l=k[d](h[g]("div")),f=h[g]("iframe"),n="document",p;k.style.display="none";e.insertBefore(k,e.firstChild).id=o+"-"+j;f.frameBorder="0";f.id=o+"-frame-"+j;/MSIE[ ]+6/.test(navigator.userAgent)&&(f[i]="javascript:false");f.allowTransparency="true";l[d](f);try{f.contentWindow[n].open()}catch(s){a.domain=h.domain,p="javascript:var d="+n+".open();d.domain=\'"+h.domain+"\';",f[i]=p+"void(0);"}try{var r=f.contentWindow[n];r.write(b());r.close()}catch(t) { \n f[i]=p+\'d.write("\'+b().replace(/"/g,String.fromCharCode(92)+\'"\')+\'");d.close();\'}a.P(2)};\n a.l&&setTimeout(q,0)})()}();c[b].lv="1";return c[b]}var o="lightningjs",k=window[o]=g(o);k.require=g;k.modules=c}({}); if(!navigator.userAgent.match(/Android|BlackBerry|BB10|iPhone|iPad|iPod|Opera Mini|IEMobile/i)) {window.usabilla_live = lightningjs.require("usabilla_live", "//w.usabilla.com/adc89b492324.js"); } else {window.usabilla_live = lightningjs.require("usabilla_live", "//w.usabilla.com/ba6e7c3ffee3.js"); }/*]]>{/literal}*/\n'
                        ),
                        o.a.createElement(
                          'script',
                          null,
                          'var _hmt = _hmt || [];\n  (function() {\n  var hm = document.createElement("script");\n  hm.src = "https://hm.baidu.com/hm.js?2a7cc334cdf90770ccbb1a38d57ea3d1";\n  var s = document.getElementsByTagName("script")[0];\n  s.parentNode.insertBefore(hm, s);\n})();'
                        ),
                        o.a.createElement('script', {
                          src: Object(M.a)('adobedtm'),
                        }),
                        o.a.createElement('script', null, 'var pageData = {}'),
                        o.a.createElement(
                          'script',
                          { type: 'application/ld+json' },
                          ' {\n  "@context": "https://schema.org",\n  "@type": "Organization",\n  "name": "Elsevier Author Services",\n  "alternateName": "Elsevier Webshop",\n  "url": "https://webshop.elsevier.com/",\n  "logo": "https://webshop.elsevier.com/images/elsevier.svg",\n  "sameAs": [\n    "https://www.facebook.com/elsevierauthorservices/",\n    "https://www.youtube.com/channel/UCeg3r-A2cTOUNHB1vvKBT9g",\n    "https://www.linkedin.com/company/elsevier-authorservices/",\n    "https://www.pinterest.com/elsevierauthorservices/"\n  ]\n}'
                        )
                      ),
                      o.a.createElement(
                        We,
                        {
                          title: t.site.siteMetadata.title,
                          services: f,
                          pages: v,
                          about: g,
                          socials: m,
                          support: d,
                        },
                        a
                      ),
                      o.a.createElement(b, null),
                      o.a.createElement(w, null),
                      o.a.createElement(E, null)
                    )
                  );
                },
                data: r,
              });
            }),
            t
          );
        })(l.PureComponent);
      Ze.propTypes = { children: s.a.node.isRequired };
      t.a = Ze;
    },
    205: function (e, t, a) {
      'use strict';
      var n = a(171),
        i = a.n(n),
        r = (a(274), a(169)),
        l = a(172);
      function o() {
        var e = i()(['\n    ', ';\n  ']);
        return (
          (o = function () {
            return e;
          }),
          e
        );
      }
      var c = { desktop: 'DESKTOP', phone: 'PHONE' };
      function s(e, t) {
        var a;
        return (
          '\n    height: ' +
          ((a =
            Array.isArray(e) && 2 === e.length
              ? t === c.phone
                ? e[0]
                : e[1]
              : Array.isArray(e)
              ? e[0]
              : e)
            ? '100%'
            : '2px') +
          ';\n    width: ' +
          (a ? '2px' : '100%') +
          ';\n  '
        );
      }
      var m = r.default.div.withConfig({
        displayName: 'linestyled__StyledLine',
        componentId: 'sc-19nb843-0',
      })(
        ['', ';background-color:', ';flex-shrink:0;', ';'],
        function (e) {
          return s(e.vertical, c.desktop);
        },
        function (e) {
          var t = e.color,
            a = e.theme;
          return a.colors[t] || a.colors.grey2;
        },
        l.a.phone(o(), function (e) {
          return s(e.vertical, c.phone);
        })
      );
      t.a = m;
    },
    209: function (e, t, a) {
      'use strict';
      var n = a(169).default.div.withConfig({
        displayName: 'spacing__Spacing',
        componentId: 'y1w9tx-0',
      })(
        ['', ';', ';', ';', ';', ';', ';', ';', ';'],
        function (e) {
          var t = e.margin;
          return t.b && 'margin-bottom: ' + 8 * t.b + 'px';
        },
        function (e) {
          var t = e.margin;
          return t.t && 'margin-top: ' + 8 * t.t + 'px';
        },
        function (e) {
          var t = e.margin;
          return t.l && 'margin-left: ' + 8 * t.l + 'px';
        },
        function (e) {
          var t = e.margin;
          return t.r && 'margin-right: ' + 8 * t.r + 'px';
        },
        function (e) {
          var t = e.padding;
          return t.b && 'padding-bottom: ' + 8 * t.b + 'px';
        },
        function (e) {
          var t = e.padding;
          return t.t && 'padding-top: ' + 8 * t.t + 'px';
        },
        function (e) {
          var t = e.padding;
          return t.l && 'padding-left: ' + 8 * t.l + 'px';
        },
        function (e) {
          var t = e.padding;
          return t.r && 'padding-right: ' + 8 * t.r + 'px';
        }
      );
      (n.defaultProps = { margin: {}, padding: {} }), (t.a = n);
    },
    227: function (e, t, a) {
      'use strict';
      var n = a(171),
        i = a.n(n),
        r = a(169),
        l = a(172);
      function o() {
        var e = i()(['\n    font-size: 18px;\n    line-height: 26px;\n  ']);
        return (
          (o = function () {
            return e;
          }),
          e
        );
      }
      function c() {
        var e = i()(['\n    font-size: 16px;\n    line-height: 24px;\n  ']);
        return (
          (c = function () {
            return e;
          }),
          e
        );
      }
      function s() {
        var e = i()(['\n    font-size: 18px;\n    line-height: 24px;\n  ']);
        return (
          (s = function () {
            return e;
          }),
          e
        );
      }
      function m() {
        var e = i()(['\n    font-size: 16px;\n    line-height: 24px;\n  ']);
        return (
          (m = function () {
            return e;
          }),
          e
        );
      }
      function p() {
        var e = i()(['\n    font-size: 20px;\n    line-height: 28px;\n  ']);
        return (
          (p = function () {
            return e;
          }),
          e
        );
      }
      function d() {
        var e = i()(['\n    font-size: 24px;\n    line-height: 32px;\n  ']);
        return (
          (d = function () {
            return e;
          }),
          e
        );
      }
      function u() {
        var e = i()(['\n    font-size: 16px;\n    line-height: 24px;\n  ']);
        return (
          (u = function () {
            return e;
          }),
          e
        );
      }
      function h() {
        var e = i()(['\n    font-size: 18px;\n    line-height: 22px;\n  ']);
        return (
          (h = function () {
            return e;
          }),
          e
        );
      }
      function g() {
        var e = i()(['\n    font-size: 24px;\n    line-height: 28px;\n  ']);
        return (
          (g = function () {
            return e;
          }),
          e
        );
      }
      function f() {
        var e = i()(['\n    font-size: 28px;\n    line-height: 32px;\n  ']);
        return (
          (f = function () {
            return e;
          }),
          e
        );
      }
      function v() {
        var e = i()(['\n    font-size: 36px;\n    line-height: 40px;\n  ']);
        return (
          (v = function () {
            return e;
          }),
          e
        );
      }
      function b() {
        var e = i()(['\n    font-size: 30px;\n    line-height: 34px;\n  ']);
        return (
          (b = function () {
            return e;
          }),
          e
        );
      }
      function y() {
        var e = i()(['\n    font-size: 28px;\n    line-height: 32px;\n  ']);
        return (
          (y = function () {
            return e;
          }),
          e
        );
      }
      var x = Object(r.css)(['color:', ';'], function (e) {
          var t = e.active,
            a = e.color,
            n = e.theme;
          return t ? n.colors.orange : n.colors[a] || n.colors.grey4;
        }),
        w = Object(r.css)(
          [
            '',
            ';font-family:elsevier-display-light;font-size:36px;line-height:40px;',
            ';',
          ],
          x,
          l.a.tablet(y())
        ),
        E = {
          h1: w,
          h1Xl: Object(r.css)(
            [
              '',
              ';',
              ' font-family:elsevier-display-light;font-size:42px;line-height:48px;',
              ';',
            ],
            x,
            w,
            l.a.tablet(b())
          ),
          h1Xxl: Object(r.css)(
            [
              '',
              ';font-family:elsevier-display-light;font-size:52px;line-height:58px;',
              ';',
            ],
            x,
            l.a.tablet(v())
          ),
          h2: Object(r.css)(
            [
              '',
              ';font-family:elsevier-display-light;font-size:30px;line-height:34px;',
              ';',
            ],
            x,
            l.a.tablet(f())
          ),
          h3: Object(r.css)(
            [
              '',
              ';font-family:elsevier-display-light;font-size:24px;line-height:28px;',
              ';',
            ],
            x,
            l.a.tablet(g())
          ),
          h4: Object(r.css)(
            [
              '',
              ';font-family:elsevier-display-light;font-size:20px;line-height:22px;',
              ';',
            ],
            x,
            l.a.tablet(h())
          ),
          h5: Object(r.css)(
            [
              '',
              ';font-family:elsevier-display-light;font-size:18px;line-height:26px;',
            ],
            x
          ),
          h6: Object(r.css)(
            [
              '',
              ';font-family:elsevier-display-light;font-size:20px;line-height:28px;',
              ';',
            ],
            x,
            l.a.tablet(u())
          ),
          h6Nb: Object(r.css)(
            [
              '',
              ';font-family:elsevier-display-light;font-size:20px;line-height:28px;',
            ],
            x
          ),
          streamer: Object(r.css)(
            [
              '',
              ';font-family:nexus-sans;font-style:italic;font-size:36px;line-height:48px;',
              ';',
            ],
            x,
            l.a.tablet(d())
          ),
          intro: Object(r.css)(
            [
              '',
              ';font-family:nexus-sans;font-size:24px;line-height:32px;',
              ';',
            ],
            x,
            l.a.tablet(p())
          ),
          header: Object(r.css)(
            [
              '',
              ';font-family:nexus-sans;font-weight:bold;font-size:16px;line-height:24px;',
              ';',
            ],
            x,
            l.a.tablet(m())
          ),
          list: Object(r.css)(
            [
              '',
              ';font-family:nexus-sans;font-size:24px;line-height:32px;',
              ';',
            ],
            x,
            l.a.tablet(s())
          ),
          listSm: Object(r.css)(
            [
              '',
              ';font-family:nexus-sans;font-size:20px;line-height:28px;',
              ';',
            ],
            x,
            l.a.tablet(c())
          ),
          body: Object(r.css)(
            [
              '',
              ';font-family:nexus-sans;font-size:20px;line-height:28px;strong{font-weight:bold;}',
              ';',
            ],
            x,
            l.a.tablet(o())
          ),
          bodySm: Object(r.css)(
            ['', ';font-family:nexus-sans;font-size:16px;line-height:24px;'],
            x
          ),
          bodyXs: Object(r.css)(
            [
              '',
              ';font-family:nexus-sans;font-size:14px;line-height:22px;display:inline-block;',
            ],
            x
          ),
          bodyXxs: Object(r.css)(
            [
              '',
              ';font-family:nexus-sans;font-size:10px;line-height:10px;display:inline-block;',
            ],
            x
          ),
          link: Object(r.css)(
            [
              'color:',
              ';border-bottom:2px solid transparent;&:hover,&:active,&:focus{border-bottom:2px solid ',
              ';}}',
            ],
            function (e) {
              return e.theme.colors.petrolBlue;
            },
            function (e) {
              return e.theme.colors.petrolBlue;
            }
          ),
        };
      t.a = {
        styles: E,
        tagMap: {
          h1: 'h1',
          h1Xl: 'h1',
          h1Xxl: 'h1',
          h2: 'h2',
          h3: 'h3',
          h4: 'h4',
          h5: 'h5',
          h6: 'h6',
          h6Nb: 'h6',
          streamer: 'p',
          intro: 'p',
          header: 'h5',
          list: 'li',
          listSm: 'li',
          body: 'p',
          bodySm: 'p',
          bodyXs: 'span',
          bodyXxs: 'span',
          link: 'a',
        },
      };
    },
    247: function (e, t, a) {
      var n;
      e.exports = ((n = a(261)) && n.default) || n;
    },
    250: function (e, t, a) {
      'use strict';
      a.d(t, 'c', function () {
        return o;
      }),
        a.d(t, 'a', function () {
          return c;
        }),
        a.d(t, 'b', function () {
          return s;
        });
      var n = a(169),
        i = a(186),
        r = a(178),
        l = a(170),
        o = Object(n.default)(l.a).withConfig({
          displayName: 'linkstyled__StyledText',
          componentId: 'sc-10wp8i7-0',
        })(['display:inline;']),
        c = Object(n.default)(r.a).withConfig({
          displayName: 'linkstyled__Chevron',
          componentId: 'sc-10wp8i7-1',
        })(['margin-right:6px;']),
        s = Object(n.default)(i.Link).withConfig({
          displayName: 'linkstyled__StyledLink',
          componentId: 'sc-10wp8i7-2',
        })(
          [
            'background:none;border:none;display:inline-block;outline:none;padding:0;user-select:none;text-decoration:none;> *{vertical-align:middle;}> span{border-bottom:',
            ';}&:hover,&:active,&:focus{> span{border-bottom:',
            ';}}',
          ],
          function (e) {
            return e.underline ? '2px solid' : 'none';
          },
          function (e) {
            return e.noHover ? 'none' : '2px solid';
          }
        );
    },
    251: function (e, t, a) {
      'use strict';
      var n = { desktop: 1120, tablet: 768, phone: 600 },
        i = {
          colors: {
            white: '#FFFFFF',
            orange: '#FF6C00',
            petrolBlue: '#007398',
            lightBlue: '#3679E0',
            secondary1: '#FFF0E4',
            secondary2: '#CDE4FF',
            grey4: '#53565A',
            grey3: '#B1B1B1',
            grey2: '#DCDCDD',
            grey1: '#F7F7F7',
            purple4: '#3C1276',
            purple3: '#661CCA',
            purple2: '#BB84FF',
            purple1: '#F5EDFF',
            blue4: '#073973',
            blue3: '#3679E0',
            blue2: '#ACD2FF',
            blue1: '#E9F3FF',
            green4: '#496E01',
            green3: '#8ED700',
            green2: '#C0F25D',
            green1: '#F9FFED',
            brown4: '#976500',
            brown3: '#FDD300',
            brown2: '#FFEC84',
            brown1: '#FFF9DB',
            red4: '#A92B1D',
            red3: '#F73E29',
            red2: '#FEB7B7',
            red1: '#FFECEC',
          },
          metrics: n,
          breakpoints: [n.phone, n.tablet, n.desktop],
        };
      a.d(t, 'a', function () {
        return i;
      });
    },
    252: function (e) {
      e.exports = {
        data: {
          site: {
            siteMetadata: {
              siteTitle: 'Elsevier',
              siteUrl: 'https://cn.webshop.elsevier.com',
              siteDescription:
                'Find More About Solutions for Scientific Research and Publishing Process for all Stages of Publishing Process with Elsevier’s WebShop.',
              siteKeywords: 'Elsevier Webshop',
            },
          },
          services: {
            edges: [
              {
                node: {
                  id: 'academic-infographics',
                  slug: '/illustration-services/academic-infographics/',
                  title: '学术信息图',
                },
              },
            ],
          },
          pages: {
            edges: [
              {
                node: {
                  id: 'article-services',
                  slug: '/article-services/',
                  title: 'Webshop 产品',
                },
              },
              {
                node: {
                  id: 'translation-services',
                  slug: '/language-translation-services/',
                  title: '翻译服务',
                },
              },
              {
                node: {
                  id: 'language-editing',
                  slug: '/language-editing-services/language-editing/',
                  title: '语言校对服务',
                },
              },
            ],
          },
          support: {
            edges: [
              {
                node: {
                  frontmatter: {
                    slug: '/shipping-and-delivery/',
                    title: '运费与递送',
                  },
                },
              },
            ],
          },
          about: {
            edges: [
              {
                node: {
                  frontmatter: {
                    title: '关于 Elsevier WebShop',
                    slug: '/about/',
                  },
                },
              },
            ],
          },
          footer: {
            socials: [
              { title: 'facebook', slug: 'facebook' },
              { title: 'linkedin', slug: 'linkedin' },
              { title: 'twitter', slug: 'twitter' },
              { title: 'youtube', slug: 'youtube' },
              { title: 'pinterest', slug: 'pinterest' },
            ],
            support: [
              { title: '运费与递送', slug: '/shipping-and-delivery/' },
              { title: '条款和条件', slug: 'termsAndConditions' },
              { title: '帮助', slug: 'help' },
              { title: '联系我们', slug: 'contact' },
            ],
            about: [
              { title: 'Elsevier 作者服务', slug: '/about/' },
              //   { title: '博客', slug: 'blog' },
              { title: '隐私政策', slug: 'privacy' },
              { title: '团购', slug: '/group-deals/' },
              { title: 'Cookies', slug: '/cookies/' },
            ],
          },
        },
      };
    },
    261: function (e, t, a) {
      'use strict';
      a.r(t);
      a(37);
      var n = a(0),
        i = a.n(n),
        r = a(1),
        l = a.n(r),
        o = a(74),
        c = a(3),
        s = function (e) {
          var t = e.location,
            a = c.default.getResourcesForPathnameSync(t.pathname);
          return i.a.createElement(
            o.a,
            Object.assign({ location: t, pageResources: a }, a.json)
          );
        };
      (s.propTypes = {
        location: l.a.shape({ pathname: l.a.string.isRequired }).isRequired,
      }),
        (t.default = s);
    },
  },
]);
//# sourceMappingURL=1-a58bc61ff079b4b23d28.js.map
