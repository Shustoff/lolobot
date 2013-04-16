basePath = '../../';

files = [
  JASMINE,
  JASMINE_ADAPTER,
  'js/libs/jquery.js',
  'js/libs/underscore.js',
  'js/libs/bootstrap-modal.js',
  'js/libs/easyTooltip.js',
  'js/libs/angular.js',
  'test/libs/angular/angular-mocks.js',

  "js/data/skills.js",
  "js/data/masteries.js",
  "js/data/runes.js",
  "js/data/spells.js",
  "js/data/items.js",
  "js/data/images.js",
  "js/data/characters.js",
  "js/data/tooltip-items.js",
  "js/data/tooltip-masteries.js",
  "js/data/tooltip-skills.js",   
  "js/data/tooltip-spells.js",
  "js/data/tooltip-runes.js",
  
  'js/routes.js',
  'js/services.js',
  'js/filters.js',
  'js/directives.js',
  'js/controllers.js',

  'test/specs/controllersSpec.js',
  'test/specs/directivesSpec.js',
  'test/specs/filtersSpec.js',
  'test/specs/servicesSpec.js'
];

autoWatch = true;

browsers = ['Chrome'];

junitReporter = {
  outputFile: 'test_out/unit.xml',
  suite: 'unit'
};
