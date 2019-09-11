(function($) {
  var app = {
    init: function() {
      app.handleClick();
    },
    getData: () => {
      let promise = new Promise((res, rej) => {
        $.ajax({
          headers: {
            accept: "application/json; odata=verbose"
          },
          type: "GET",
          url: "http://localhost:8080/nps",
          success: function(items) {
            console.log("SUCCESS\n", items);
            res();
          },
          error: error => {
            console.log("ERROR\n", error);
            rej();
          }
        });
      });
      return promise;
    },
    handleClick: () => {
      $("#getData").on("click", function() {
        app.getData();
      });
    }
  };

  $(window).on("load", () => {
    app.init();
  });
})(window.jQuery);
