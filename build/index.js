'use strict';

System.register(['https://cdn.rodin.io/v0.0.1/vendor/three/THREE.GLOBAL.js', 'https://cdn.rodin.io/v0.0.1/rodinjs/RODIN.js', 'https://cdn.rodin.io/v0.0.1/rodinjs/scene/SceneManager.js', 'https://cdn.rodin.io/v0.0.1/rodinjs/sculpt/CubeObject.js'], function (_export, _context) {
  "use strict";

  var THREE, RODIN, SceneManager, CubeObject, scene;
  return {
    setters: [function (_httpsCdnRodinIoV001VendorThreeTHREEGLOBALJs) {
      THREE = _httpsCdnRodinIoV001VendorThreeTHREEGLOBALJs.THREE;
    }, function (_httpsCdnRodinIoV001RodinjsRODINJs) {
      RODIN = _httpsCdnRodinIoV001RodinjsRODINJs;
    }, function (_httpsCdnRodinIoV001RodinjsSceneSceneManagerJs) {
      SceneManager = _httpsCdnRodinIoV001RodinjsSceneSceneManagerJs.SceneManager;
    }, function (_httpsCdnRodinIoV001RodinjsSculptCubeObjectJs) {
      CubeObject = _httpsCdnRodinIoV001RodinjsSculptCubeObjectJs.CubeObject;
    }],
    execute: function () {
      scene = SceneManager.get();
    }
  };
});