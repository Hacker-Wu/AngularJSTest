var mydirective = angular.module("mymodule",[] );//set a function name and set a empty arr instead param

mymodule.directive ("myTag",function(){ //setup owner tag and set a feedback fuc
	return {
		restrict:'E',
		template:"This is my first angularjs test",
		replace:true
	}
});