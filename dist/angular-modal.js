;(function() {
	var app = angular.module('ngModal', []);
	app.directive('kopModal', function (modalService) {
		  return {
		    restrict: 'A',
		    templateUrl : '/templates/generalModalD.html',
		    transclude : true,
		    scope: true,
		    link: function(scope, element, attr) {
		      var modalId = modalService.generateId(24);
		      scope.modalId = modalId;
		      scope.modaltitle = attr["modaltitle"];
		      attr.$set("data-toggle", "modal");
		      attr.$set("data-target", "#" + modalId);
		      modalService.setModal(modalId);
		      scope.dismiss = function() {
		          // element.modal.close();


		      };
		    }
		  }
		});
	app.service("modalService",function ModalService ($timeout) {
		  this.setModal = function (id) {
		    // using passed ID, extract the DOM element w jqLite
		    // Remember to use timeout to ensure post is linked
		    $timeout(function () {
		        var body = angular.element(document).find('body');
		        var modal = (angular.element(document.querySelector("#" + id)));
		        modal.remove();
		        body.append(modal);

		    }, 0);
		  }


		  this.generateId = function(l) {

		      var id = "I";
		      var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
		      for (var i = 0; i < l; i++)
		        id += possible.charAt(Math.floor(Math.random() * possible.length));
		      return id;

		  }
		});

})();