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
		  template:'<div class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button><h4 class="modal-title">{{$ctrl.modaltitle}}</h4></div><div class="modal-body"><div ng-transclude></div></div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Close</button></div></div></div></div>'
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
