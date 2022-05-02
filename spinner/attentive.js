/*! RECART 89f1010 2022-05-02T11:40:42.895Z */
"use strict";
(self["webpackChunkgm_tracking_js"] = self["webpackChunkgm_tracking_js"] || []).push([[0],{

/***/ 492:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(270);

function init(_ref) {
  let {
    window,
    pixel
  } = _ref;
  const attentiveId = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getCookie)('__attentive_id');
  let shouldSend = !!attentiveId;

  if (shouldSend && window.sessionStorage) {
    shouldSend = window.sessionStorage.getItem('recart__attentive_id') !== attentiveId;
  }

  if (!shouldSend) return;
  pixel('attentive_id', {
    attentiveId: attentiveId
  });

  if (window.sessionStorage) {
    window.sessionStorage.setItem('recart__attentive_id', attentiveId);
  }
}

/***/ })

}]);