// package metadata file for Meteor.js
var packageName = 'angular-tools:ng-jsoneditor';
var where = 'client'; // where to install: 'client' or 'server'. For both, pass nothing.
var version = '0.0.1';
var summary = 'Angular version of the insanely cool jsoneditor';
var gitLink = 'https://github.com/angular-tools/ng-jsoneditor';
var documentationFile = 'README.md';

// Meta-data
Package.describe({
  name: packageName,
  version: version,
  summary: summary,
  git: gitLink,
  documentation: documentationFile
});

Package.onUse(function(api) {
  api.versionsFrom(['METEOR@0.9.0', 'METEOR@1.0']); // Meteor versions

  api.use('angular:angular@1.2.0', where); // Dependencies
  api.use('dataflows:jsoneditor@0.0.1', where); // Dependencies

  api.addFiles('ng-jsoneditor.js', where); // Files in use
});   
