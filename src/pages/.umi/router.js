import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';
import RendererWrapper0 from '/Users/mac/Desktop/guess1.6/my-project/src/pages/.umi/LocaleWrapper.jsx'

let Router = require('dva/router').routerRedux.ConnectedRouter;

let routes = [
  {
    "path": "/user",
    "component": dynamic({ loader: () => import('../../layouts/UserLayout'), loading: require('/Users/mac/Desktop/guess1.6/my-project/src/components/PageLoading/index').default }),
    "routes": [
      {
        "path": "/user",
        "redirect": "/user/login",
        "exact": true
      },
      {
        "path": "/user/login",
        "component": dynamic({ loader: () => import('../User/Login'), loading: require('/Users/mac/Desktop/guess1.6/my-project/src/components/PageLoading/index').default }),
        "exact": true
      },
      {
        "path": "/user/register",
        "component": dynamic({ loader: () => import('../User/Register'), loading: require('/Users/mac/Desktop/guess1.6/my-project/src/components/PageLoading/index').default }),
        "exact": true
      },
      {
        "path": "/user/register-result",
        "component": dynamic({ loader: () => import('../User/RegisterResult'), loading: require('/Users/mac/Desktop/guess1.6/my-project/src/components/PageLoading/index').default }),
        "exact": true
      },
      {
        "component": () => React.createElement(require('/Users/mac/Desktop/guess1.6/my-project/node_modules/_umi-build-dev@1.2.7@umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
      }
    ]
  },
  {
    "path": "/",
    "component": dynamic({ loader: () => import('../../layouts/BasicLayout'), loading: require('/Users/mac/Desktop/guess1.6/my-project/src/components/PageLoading/index').default }),
    "Routes": [require('../Authorized').default],
    "authority": [
      "admin",
      "user"
    ],
    "routes": [
      {
        "path": "/",
        "redirect": "/userLoginInfo",
        "exact": true
      },
      {
        "path": "/userLoginInfo",
        "icon": "form",
        "name": "userLoginInfo",
        "component": dynamic({ loader: () => import('../UserLoginInfo/TableList'), loading: require('/Users/mac/Desktop/guess1.6/my-project/src/components/PageLoading/index').default }),
        "exact": true
      },
      {
        "path": "/guessManage",
        "icon": "table",
        "name": "guessManage",
        "routes": [
          {
            "path": "/guessManage/userTotal",
            "name": "userTotal",
            "component": dynamic({ loader: () => import('../List/TableList'), loading: require('/Users/mac/Desktop/guess1.6/my-project/src/components/PageLoading/index').default }),
            "exact": true
          },
          {
            "path": "/guessManage/orderList",
            "name": "orderList",
            "component": dynamic({ loader: () => import('../List/TableList'), loading: require('/Users/mac/Desktop/guess1.6/my-project/src/components/PageLoading/index').default }),
            "exact": true
          },
          {
            "path": "/guessManage/errorList",
            "name": "errorList",
            "component": dynamic({ loader: () => import('../List/TableList'), loading: require('/Users/mac/Desktop/guess1.6/my-project/src/components/PageLoading/index').default }),
            "exact": true
          },
          {
            "path": "/guessManage/leagueTotal",
            "name": "leagueTotal",
            "component": dynamic({ loader: () => import('../List/TableList'), loading: require('/Users/mac/Desktop/guess1.6/my-project/src/components/PageLoading/index').default }),
            "exact": true
          },
          {
            "path": "/guessManage/paramSet",
            "name": "paramSet",
            "component": dynamic({ loader: () => import('../List/TableList'), loading: require('/Users/mac/Desktop/guess1.6/my-project/src/components/PageLoading/index').default }),
            "exact": true
          },
          {
            "path": "/guessManage/ruleSet",
            "name": "ruleSet",
            "component": dynamic({ loader: () => import('../List/TableList'), loading: require('/Users/mac/Desktop/guess1.6/my-project/src/components/PageLoading/index').default }),
            "exact": true
          },
          {
            "path": "/guessManage/happySet",
            "name": "happySet",
            "component": dynamic({ loader: () => import('../List/TableList'), loading: require('/Users/mac/Desktop/guess1.6/my-project/src/components/PageLoading/index').default }),
            "exact": true
          },
          {
            "component": () => React.createElement(require('/Users/mac/Desktop/guess1.6/my-project/node_modules/_umi-build-dev@1.2.7@umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
          }
        ]
      },
      {
        "path": "/mManage",
        "icon": "dollar",
        "name": "mManage",
        "routes": [
          {
            "path": "/mManage/history",
            "name": "history",
            "component": dynamic({ loader: () => import('../List/TableList'), loading: require('/Users/mac/Desktop/guess1.6/my-project/src/components/PageLoading/index').default }),
            "exact": true
          },
          {
            "path": "/mManage/total",
            "name": "total",
            "component": dynamic({ loader: () => import('../List/TableList'), loading: require('/Users/mac/Desktop/guess1.6/my-project/src/components/PageLoading/index').default }),
            "exact": true
          },
          {
            "path": "/mManage/order",
            "name": "order",
            "component": dynamic({ loader: () => import('../List/TableList'), loading: require('/Users/mac/Desktop/guess1.6/my-project/src/components/PageLoading/index').default }),
            "exact": true
          },
          {
            "path": "/mManage/set",
            "name": "set",
            "component": dynamic({ loader: () => import('../List/TableList'), loading: require('/Users/mac/Desktop/guess1.6/my-project/src/components/PageLoading/index').default }),
            "exact": true
          },
          {
            "component": () => React.createElement(require('/Users/mac/Desktop/guess1.6/my-project/node_modules/_umi-build-dev@1.2.7@umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
          }
        ]
      },
      {
        "path": "/accoutManage",
        "icon": "user",
        "name": "accoutManage",
        "routes": [
          {
            "path": "/accoutManage/rolePermission",
            "name": "rolePermission",
            "component": dynamic({ loader: () => import('../List/TableList'), loading: require('/Users/mac/Desktop/guess1.6/my-project/src/components/PageLoading/index').default }),
            "exact": true
          },
          {
            "path": "/accoutManage/backAccout",
            "name": "backAccout",
            "component": dynamic({ loader: () => import('../List/TableList'), loading: require('/Users/mac/Desktop/guess1.6/my-project/src/components/PageLoading/index').default }),
            "exact": true
          },
          {
            "component": () => React.createElement(require('/Users/mac/Desktop/guess1.6/my-project/node_modules/_umi-build-dev@1.2.7@umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
          }
        ]
      },
      {
        "path": "/dashboard",
        "name": "dashboard",
        "icon": "dashboard",
        "routes": [
          {
            "path": "/dashboard/analysis",
            "name": "analysis",
            "component": dynamic({ loader: () => import('../Dashboard/Analysis'), loading: require('/Users/mac/Desktop/guess1.6/my-project/src/components/PageLoading/index').default }),
            "exact": true
          },
          {
            "path": "/dashboard/monitor",
            "name": "monitor",
            "component": dynamic({ loader: () => import('../Dashboard/Monitor'), loading: require('/Users/mac/Desktop/guess1.6/my-project/src/components/PageLoading/index').default }),
            "exact": true
          },
          {
            "path": "/dashboard/workplace",
            "name": "workplace",
            "component": dynamic({ loader: () => import('../Dashboard/Workplace'), loading: require('/Users/mac/Desktop/guess1.6/my-project/src/components/PageLoading/index').default }),
            "exact": true
          },
          {
            "component": () => React.createElement(require('/Users/mac/Desktop/guess1.6/my-project/node_modules/_umi-build-dev@1.2.7@umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
          }
        ]
      },
      {
        "path": "/form",
        "icon": "form",
        "name": "form",
        "routes": [
          {
            "path": "/form/basic-form",
            "name": "basicform",
            "component": dynamic({ loader: () => import('../Forms/BasicForm'), loading: require('/Users/mac/Desktop/guess1.6/my-project/src/components/PageLoading/index').default }),
            "exact": true
          },
          {
            "path": "/form/step-form",
            "name": "stepform",
            "component": dynamic({ loader: () => import('../Forms/StepForm'), loading: require('/Users/mac/Desktop/guess1.6/my-project/src/components/PageLoading/index').default }),
            "hideChildrenInMenu": true,
            "routes": [
              {
                "path": "/form/step-form",
                "redirect": "/form/step-form/info",
                "exact": true
              },
              {
                "path": "/form/step-form/info",
                "name": "info",
                "component": dynamic({ loader: () => import('../Forms/StepForm/Step1'), loading: require('/Users/mac/Desktop/guess1.6/my-project/src/components/PageLoading/index').default }),
                "exact": true
              },
              {
                "path": "/form/step-form/confirm",
                "name": "confirm",
                "component": dynamic({ loader: () => import('../Forms/StepForm/Step2'), loading: require('/Users/mac/Desktop/guess1.6/my-project/src/components/PageLoading/index').default }),
                "exact": true
              },
              {
                "path": "/form/step-form/result",
                "name": "result",
                "component": dynamic({ loader: () => import('../Forms/StepForm/Step3'), loading: require('/Users/mac/Desktop/guess1.6/my-project/src/components/PageLoading/index').default }),
                "exact": true
              },
              {
                "component": () => React.createElement(require('/Users/mac/Desktop/guess1.6/my-project/node_modules/_umi-build-dev@1.2.7@umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
              }
            ]
          },
          {
            "path": "/form/advanced-form",
            "name": "advancedform",
            "authority": [
              "admin"
            ],
            "component": dynamic({ loader: () => import('../Forms/AdvancedForm'), loading: require('/Users/mac/Desktop/guess1.6/my-project/src/components/PageLoading/index').default }),
            "exact": true
          },
          {
            "component": () => React.createElement(require('/Users/mac/Desktop/guess1.6/my-project/node_modules/_umi-build-dev@1.2.7@umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
          }
        ]
      },
      {
        "path": "/list",
        "icon": "table",
        "name": "list",
        "routes": [
          {
            "path": "/list/table-list",
            "name": "searchtable",
            "component": dynamic({ loader: () => import('../List/TableList'), loading: require('/Users/mac/Desktop/guess1.6/my-project/src/components/PageLoading/index').default }),
            "exact": true
          },
          {
            "path": "/list/basic-list",
            "name": "basiclist",
            "component": dynamic({ loader: () => import('../List/BasicList'), loading: require('/Users/mac/Desktop/guess1.6/my-project/src/components/PageLoading/index').default }),
            "exact": true
          },
          {
            "path": "/list/card-list",
            "name": "cardlist",
            "component": dynamic({ loader: () => import('../List/CardList'), loading: require('/Users/mac/Desktop/guess1.6/my-project/src/components/PageLoading/index').default }),
            "exact": true
          },
          {
            "path": "/list/search",
            "name": "searchlist",
            "component": dynamic({ loader: () => import('../List/List'), loading: require('/Users/mac/Desktop/guess1.6/my-project/src/components/PageLoading/index').default }),
            "routes": [
              {
                "path": "/list/search",
                "redirect": "/list/search/articles",
                "exact": true
              },
              {
                "path": "/list/search/articles",
                "name": "articles",
                "component": dynamic({ loader: () => import('../List/Articles'), loading: require('/Users/mac/Desktop/guess1.6/my-project/src/components/PageLoading/index').default }),
                "exact": true
              },
              {
                "path": "/list/search/projects",
                "name": "projects",
                "component": dynamic({ loader: () => import('../List/Projects'), loading: require('/Users/mac/Desktop/guess1.6/my-project/src/components/PageLoading/index').default }),
                "exact": true
              },
              {
                "path": "/list/search/applications",
                "name": "applications",
                "component": dynamic({ loader: () => import('../List/Applications'), loading: require('/Users/mac/Desktop/guess1.6/my-project/src/components/PageLoading/index').default }),
                "exact": true
              },
              {
                "component": () => React.createElement(require('/Users/mac/Desktop/guess1.6/my-project/node_modules/_umi-build-dev@1.2.7@umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
              }
            ]
          },
          {
            "component": () => React.createElement(require('/Users/mac/Desktop/guess1.6/my-project/node_modules/_umi-build-dev@1.2.7@umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
          }
        ]
      },
      {
        "path": "/profile",
        "name": "profile",
        "icon": "profile",
        "routes": [
          {
            "path": "/profile/basic",
            "name": "basic",
            "component": dynamic({ loader: () => import('../Profile/BasicProfile'), loading: require('/Users/mac/Desktop/guess1.6/my-project/src/components/PageLoading/index').default }),
            "exact": true
          },
          {
            "path": "/profile/advanced",
            "name": "advanced",
            "authority": [
              "admin"
            ],
            "component": dynamic({ loader: () => import('../Profile/AdvancedProfile'), loading: require('/Users/mac/Desktop/guess1.6/my-project/src/components/PageLoading/index').default }),
            "exact": true
          },
          {
            "component": () => React.createElement(require('/Users/mac/Desktop/guess1.6/my-project/node_modules/_umi-build-dev@1.2.7@umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
          }
        ]
      },
      {
        "name": "result",
        "icon": "check-circle-o",
        "path": "/result",
        "routes": [
          {
            "path": "/result/success",
            "name": "success",
            "component": dynamic({ loader: () => import('../Result/Success'), loading: require('/Users/mac/Desktop/guess1.6/my-project/src/components/PageLoading/index').default }),
            "exact": true
          },
          {
            "path": "/result/fail",
            "name": "fail",
            "component": dynamic({ loader: () => import('../Result/Error'), loading: require('/Users/mac/Desktop/guess1.6/my-project/src/components/PageLoading/index').default }),
            "exact": true
          },
          {
            "component": () => React.createElement(require('/Users/mac/Desktop/guess1.6/my-project/node_modules/_umi-build-dev@1.2.7@umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
          }
        ]
      },
      {
        "name": "exception",
        "icon": "warning",
        "path": "/exception",
        "routes": [
          {
            "path": "/exception/403",
            "name": "not-permission",
            "component": dynamic({ loader: () => import('../Exception/403'), loading: require('/Users/mac/Desktop/guess1.6/my-project/src/components/PageLoading/index').default }),
            "exact": true
          },
          {
            "path": "/exception/404",
            "name": "not-find",
            "component": dynamic({ loader: () => import('../Exception/404'), loading: require('/Users/mac/Desktop/guess1.6/my-project/src/components/PageLoading/index').default }),
            "exact": true
          },
          {
            "path": "/exception/500",
            "name": "server-error",
            "component": dynamic({ loader: () => import('../Exception/500'), loading: require('/Users/mac/Desktop/guess1.6/my-project/src/components/PageLoading/index').default }),
            "exact": true
          },
          {
            "path": "/exception/trigger",
            "name": "trigger",
            "hideInMenu": true,
            "component": dynamic({ loader: () => import('../Exception/TriggerException'), loading: require('/Users/mac/Desktop/guess1.6/my-project/src/components/PageLoading/index').default }),
            "exact": true
          },
          {
            "component": () => React.createElement(require('/Users/mac/Desktop/guess1.6/my-project/node_modules/_umi-build-dev@1.2.7@umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
          }
        ]
      },
      {
        "name": "account",
        "icon": "user",
        "path": "/account",
        "routes": [
          {
            "path": "/account/center",
            "name": "center",
            "component": dynamic({ loader: () => import('../Account/Center/Center'), loading: require('/Users/mac/Desktop/guess1.6/my-project/src/components/PageLoading/index').default }),
            "routes": [
              {
                "path": "/account/center",
                "redirect": "/account/center/articles",
                "exact": true
              },
              {
                "path": "/account/center/articles",
                "component": dynamic({ loader: () => import('../Account/Center/Articles'), loading: require('/Users/mac/Desktop/guess1.6/my-project/src/components/PageLoading/index').default }),
                "exact": true
              },
              {
                "path": "/account/center/applications",
                "component": dynamic({ loader: () => import('../Account/Center/Applications'), loading: require('/Users/mac/Desktop/guess1.6/my-project/src/components/PageLoading/index').default }),
                "exact": true
              },
              {
                "path": "/account/center/projects",
                "component": dynamic({ loader: () => import('../Account/Center/Projects'), loading: require('/Users/mac/Desktop/guess1.6/my-project/src/components/PageLoading/index').default }),
                "exact": true
              },
              {
                "component": () => React.createElement(require('/Users/mac/Desktop/guess1.6/my-project/node_modules/_umi-build-dev@1.2.7@umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
              }
            ]
          },
          {
            "path": "/account/settings",
            "name": "settings",
            "component": dynamic({ loader: () => import('../Account/Settings/Info'), loading: require('/Users/mac/Desktop/guess1.6/my-project/src/components/PageLoading/index').default }),
            "routes": [
              {
                "path": "/account/settings",
                "redirect": "/account/settings/base",
                "exact": true
              },
              {
                "path": "/account/settings/base",
                "component": dynamic({ loader: () => import('../Account/Settings/BaseView'), loading: require('/Users/mac/Desktop/guess1.6/my-project/src/components/PageLoading/index').default }),
                "exact": true
              },
              {
                "path": "/account/settings/security",
                "component": dynamic({ loader: () => import('../Account/Settings/SecurityView'), loading: require('/Users/mac/Desktop/guess1.6/my-project/src/components/PageLoading/index').default }),
                "exact": true
              },
              {
                "path": "/account/settings/binding",
                "component": dynamic({ loader: () => import('../Account/Settings/BindingView'), loading: require('/Users/mac/Desktop/guess1.6/my-project/src/components/PageLoading/index').default }),
                "exact": true
              },
              {
                "path": "/account/settings/notification",
                "component": dynamic({ loader: () => import('../Account/Settings/NotificationView'), loading: require('/Users/mac/Desktop/guess1.6/my-project/src/components/PageLoading/index').default }),
                "exact": true
              },
              {
                "component": () => React.createElement(require('/Users/mac/Desktop/guess1.6/my-project/node_modules/_umi-build-dev@1.2.7@umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
              }
            ]
          },
          {
            "component": () => React.createElement(require('/Users/mac/Desktop/guess1.6/my-project/node_modules/_umi-build-dev@1.2.7@umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
          }
        ]
      },
      {
        "component": dynamic({ loader: () => import('../404'), loading: require('/Users/mac/Desktop/guess1.6/my-project/src/components/PageLoading/index').default }),
        "exact": true
      },
      {
        "component": () => React.createElement(require('/Users/mac/Desktop/guess1.6/my-project/node_modules/_umi-build-dev@1.2.7@umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
      }
    ]
  },
  {
    "component": () => React.createElement(require('/Users/mac/Desktop/guess1.6/my-project/node_modules/_umi-build-dev@1.2.7@umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
  }
];
window.g_plugins.applyForEach('patchRoutes', { initialValue: routes });

export default function() {
  return (
<RendererWrapper0>
          <Router history={window.g_history}>
      { renderRoutes(routes, {}) }
    </Router>
        </RendererWrapper0>
  );
}
