# angular-modal-directive
Angular module for inserting modals into an angularJS project without copying and pasting boiler plate bootstrap code. It also couples the modal launcher with the modal content

## Usefulness of this package
This is for projects using angularJS and bootstrap. It supplies a directive, with very little work, for adding a modal, a modal launcher, coupling them, and allowing the developer to not have to worry about encoding unique IDs into all of the modals and launchers on the page


## example
1.) include the module:

`npm install ng-modal --save`
```javascript
require("angular-modal-directive");

var app = angular.module('aquatechworld', ['ngModal']);
```

simply use the kop-modal directive in your html, after including the

Make the launcher (button to launch the modal) top level, and nest what you want to appear in the modal body underneath. 

Add title of the modal as an attribute of the launcher

```html
<button kop-modal 
launcherlabel="This appears on the button" modaltitle="Create New Table"
>
	<!-- this goes in the modal body -->
	<h1> This will be inside the modal body </h1>
	<div> 
		<p> Everything within the kop-modal directive will </p>
	</div>
	
</button>
```