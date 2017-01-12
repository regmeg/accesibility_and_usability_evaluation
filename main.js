//self invocing function
(function () {
    "use strict";
    //create a module for tab switching
    let main_app = {
        //define the main function
        burger_bind: function () {
          let _this = this;
          let burger = document.querySelector('div.burger');
          let nav = document.querySelector('nav');
          let toogle_state = false;
          let toggle_the_menu =  function () {
                        console.log("togglin")
                    if (toogle_state) {
                      hide_the_menu();
                    } else {
                      display_the_menu();
                    }
          };
          let  display_the_menu = function () {

                    nav.style.display = "block";
                    burger.style.backgroundColor = "white";
                    toogle_state = true;
          };
          let hide_the_menu = function () {
                    nav.style.display = "none";
                    burger.style.backgroundColor = "";
                    toogle_state = false;
          };
          let init = function() {
            console.log("init")
            burger.addEventListener("click", toggle_the_menu);
          };
          return init;
        },
        //init the the event binding the actions to the burger
        init: function () {
            main_app.burger_bind()();
        }
    }
    //launch the application which binds the buttons once window is loaded
    window.addEventListener("load", function(){
          main_app.init();
    });;

})();
