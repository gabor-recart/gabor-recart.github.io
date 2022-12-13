/*! For license information please see klaviyo-integration.8f341992c956b93591e1.js.LICENSE.txt */
"use strict";(self.webpackChunk_ghostmonitor_gm_tracking_js=self.webpackChunk_ghostmonitor_gm_tracking_js||[]).push([["klaviyo-integration"],{"./app/main/modules/integrations/klaviyo/klaviyo.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"init\": () => (/* binding */ init)\n/* harmony export */ });\n/* harmony import */ var _ghostmonitor_gm_frontend_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ghostmonitor/gm-frontend-logger */ \"./node_modules/@ghostmonitor/gm-frontend-logger/dist/logger.js\");\n/* harmony import */ var _ghostmonitor_gm_frontend_logger__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ghostmonitor_gm_frontend_logger__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var local_storage_fallback__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! local-storage-fallback */ \"./node_modules/local-storage-fallback/lib/index.js\");\n/* harmony import */ var _tracking_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../tracking-api */ \"./app/main/tracking-api.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ \"./app/main/modules/integrations/klaviyo/utils.ts\");\n\n\n\n\nconst logger = new (_ghostmonitor_gm_frontend_logger__WEBPACK_IMPORTED_MODULE_0___default())();\nlogger.addLogger(new _ghostmonitor_gm_frontend_logger__WEBPACK_IMPORTED_MODULE_0__.ConsoleLogger({\n  urlParam: '_klaviyo'\n}));\nasync function init(_ref) {\n  let {\n    window,\n    shopperId,\n    datadogLogger\n  } = _ref;\n  try {\n    var _storage$getItem;\n    logger.addLogger(datadogLogger);\n    if (!window._learnq) {\n      logger.debug('Klaviyo tracking client is not initialized');\n      return;\n    }\n    if ((0,_utils__WEBPACK_IMPORTED_MODULE_3__.base64CookieContains)('__kla_id', '$email')) {\n      logger.debug('Klaviyo tracking cookie already contains email');\n      return;\n    }\n    const klaviyoEmail = (_storage$getItem = local_storage_fallback__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getItem('klaviyo_email')) === null || _storage$getItem === void 0 ? void 0 : _storage$getItem.replace(/\"/g, '');\n    if (klaviyoEmail) {\n      logger.debug('Profile identified', {\n        email: klaviyoEmail\n      });\n      window._learnq.push(['identify', {\n        $email: klaviyoEmail\n      }]);\n      return;\n    }\n    if (!shopperId) {\n      logger.debug('No shopper id found');\n      return;\n    }\n    const data = await _tracking_api__WEBPACK_IMPORTED_MODULE_2__.getKlaviyoEmail(shopperId);\n    if (data.email) {\n      local_storage_fallback__WEBPACK_IMPORTED_MODULE_1__[\"default\"].setItem('klaviyo_email', data.email);\n      window._learnq.push(['identify', {\n        $email: data.email\n      }]);\n      logger.debug('Profile identified', {\n        email: data.email\n      });\n      return;\n    }\n    window.addEventListener('recart:popup-email-step-cta-click', event => {\n      local_storage_fallback__WEBPACK_IMPORTED_MODULE_1__[\"default\"].setItem('klaviyo_email', event.detail.email);\n      window._learnq.push(['identify', {\n        $email: event.detail.email\n      }]);\n      logger.debug('Profile identified by popup', {\n        email: event.detail.email\n      });\n    });\n    window.addEventListener('recart:landing-page-email-step-cta-click', event => {\n      local_storage_fallback__WEBPACK_IMPORTED_MODULE_1__[\"default\"].setItem('klaviyo_email', event.detail.email);\n      window._learnq.push(['identify', {\n        $email: event.detail.email\n      }]);\n      logger.debug('Profile identified by landing paeg', {\n        email: event.detail.email\n      });\n    });\n    logger.debug('No klaviyo email found for shopper');\n  } catch (error) {\n    logger.error('KlaviyoError', {\n      error\n    });\n  }\n}\n\n//# sourceURL=webpack://@ghostmonitor/gm-tracking-js/./app/main/modules/integrations/klaviyo/klaviyo.ts?")},"./app/main/modules/integrations/klaviyo/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "base64CookieContains": () => (/* binding */ base64CookieContains)\n/* harmony export */ });\n/* harmony import */ var core_js_modules_web_dom_exception_stack_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-exception.stack.js */ "./node_modules/core-js/modules/web.dom-exception.stack.js");\n/* harmony import */ var core_js_modules_web_dom_exception_stack_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_exception_stack_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils */ "./app/main/utils.ts");\n\n\nfunction base64CookieContains(cookie, property) {\n  var _window;\n  const cookieValue = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getCookie)(cookie);\n  if (!cookieValue) {\n    return false;\n  }\n  let decodedCookie;\n  if ((_window = window) !== null && _window !== void 0 && _window.atob) {\n    decodedCookie = window.atob(cookieValue);\n  } else {\n    const buf = Buffer.from(cookieValue, \'base64\');\n    decodedCookie = buf.toString();\n  }\n  return !!JSON.parse(decodedCookie)[property];\n}\n\n//# sourceURL=webpack://@ghostmonitor/gm-tracking-js/./app/main/modules/integrations/klaviyo/utils.ts?')}}]);