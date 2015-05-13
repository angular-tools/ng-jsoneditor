# ng-jsoneditor

Angular version of the insanely cool [jsoneditor](https://github.com/josdejong/jsoneditor)

## Requirements

- AngularJS
- [Jsoneditor](https://github.com/josdejong/jsoneditor)

## Usage

You can get it from [Bower](http://bower.io/)

```sh
bower install angular-tools/ng-jsoneditor
```

This will copy the ng-jsoneditor.js files into a `bower_components` folder, along with its dependencies. Load the script files in your application:

```html
<script src="/static/bower_components/angularjs/angular.min.js"></script>
<script src="/static/bower_components/jsoneditor/dist/jsoneditor.min.js"></script>
<script src="/static/bower_components/ng-jsoneditor/ng-jsoneditor.js"></script>
```

Add the 'ng.jsoneditor' module as a dependency to your application module:

```javascript
var myAppModule = angular.module('MyApp', ['ng.jsoneditor']);
```

Finally, add the directive to your html:

```html
<div ng-jsoneditor ng-model="obj.data" options="obj.options" style="width: 400px; height: 300px;"></div>
```

## Demo

[Try this fiddle](http://)

#Sample code

```javascript
myAppModule.controller('MyController', [ '$scope', function($scope) {
  $scope.obj = {data: json, options: { mode: 'tree' }};
  
  $scope.btnClick = function() {
    $scope.obj.options.mode = 'code'; //should switch you to code view
  }
});
```
### Working with ng-model

Any changes to Jsoneditor or ng-model are reflected instantly.

Instead of `editor.get()` now you can simply access your `ng-model`, or `$scope.obj.data` in this case, to get or set values.

### Jsoneditor direct access

For more interaction with the Jsoneditor instance in the directive, we provide a direct access to it.
Using

```html
<div ng-jsoneditor="editorLoaded" ></div>
```

the `$scope.editorLoaded` function will be called with the [Jsoneditor instance](https://github.com/josdejong/jsoneditor/blob/master/docs/api.md) as first argument

```javascript
myAppModule.controller('MyController', [ '$scope', function($scope) {

  $scope.editorLoaded = function(jsonEditor){
        jsonEditor.expandAll()
  };

}]);
```

### Licence

[You are free to do whatever you want to do with this](LICENSE.md)
