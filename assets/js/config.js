require.config({
  baseUrl: "/assets/js",
  paths: {
    backbone: "vendor/backbone/backbone",
    jquery: "vendor/jquery/dist/jquery",
    react: "vendor/react/react",
    "react-dom": "vendor/react/react-dom",
    requirejs: "vendor/requirejs/require",
    underscore: "vendor/underscore/underscore"
  },
  shim: {
    backbone: {
      deps: [
        "jquery",
        "underscore"
      ],
      exports: "Backbone"
    },
    jquery: {
      exports: "$"
    },
    underscore: {
      exports: "_"
    }
  },
  packages: [

  ]
});
 
require(["backbone", "router"], function(Backbone, Router) {
  new Router();
  Backbone.history.start();
});
