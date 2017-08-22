;(function() {
	var app = angular.module('ngModal', []);
	app.component('kopModal', {
		  bindings : {
		    modaltitle : "<"
		  },
		  transclude : true,
		  controller : function (kopModalService) {
		    var ctrl = this;
		    kopModalService.moveIdsDownALevel();
		  },
		  templateUrl: 'modal.html'
		});
	app.service("kopModalService", function () {

	  this.moveIdsDownALevel = function () {
	    var modals = angular.element(document).find("kop-modal");
	    for (var i=0; i<modals.length; i++) {
	      if (modals.eq(i).attr("id")) {
	        id = modals.eq(i).attr("id");
	        modals.eq(i).removeAttr("id");
	        modals.eq(i).children().eq(0).attr("id", id);
	      }
	    }
	    angular.element(document.querySelector('kop-modal'))
	  }

	});
})();
