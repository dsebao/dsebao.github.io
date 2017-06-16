// Avoid `console` errors in browsers that lack a console.
if (!(window.console && console.log)) {
    (function() {
        var noop = function() {};
        var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'markTimeline', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
        var length = methods.length;
        var console = window.console = {};
        while (length--) {
            console[methods[length]] = noop;
        }
    }());
}

// Place any jQuery/helper plugins in here.
  var world = anima.js(),
      item = world.add(document.querySelector('.logo-so'))
  
item
    .animate({
      rotate: [0, 180, 180],
      delay: 2000,
    }, 400, 'easeInOutExpo')
    .animate({
      rotate: [0, 180, 180],
      delay: 2000,
    }, 400, 'easeInOutExpo')
    .infinite()


