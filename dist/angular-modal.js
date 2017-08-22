;(function() {
	var app = angular.module('ngModal', []);
	app.directive('kopModal', function (modalService) {
		  return {
		    restrict: 'A',
		    template : 
		    	'  <div class="modal fade" id="{{modalId}}" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
				    <div class="modal-dialog" role="document">
				      <div class="modal-content">
				        <div class="modal-header">
				          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
				          <h4 class="modal-title">{{modaltitle}}</h4>
				        </div>
				        <div class="modal-body">
				          <div ng-transclude> </div>
				        </div>
				        <div class="modal-footer">
				          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
				          <button type="button" class="btn btn-primary">Save changes</button>
				        </div>
				      </div>
				    </div>
				  </div>'
		    ,
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