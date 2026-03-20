/* ORGanizer for Salesforce - v10000.0.10.1 
 * Author: Enrico Murru (https://organizer.solutions/)
 * Copyright 2016-2025
 */
!function(exports,global){define("organizer-apis",["global","constants","jquery","salesforce-client","popup-utils"],function($G,$C,$,$SalesforceClient,PopupUtils){"use sctrict";function _initBackground(globalOrgDescribes){}function _initContentListener(){}$G.chrome,$G.window;String.prototype.format||(String.prototype.format=function(){var args=arguments;return this.replace(/{(\d+)}/g,function(match,number){return"undefined"!=typeof args[number]?args[number]:match})});PopupUtils.newDebugger("ORGanizer: APIs");return{initBackground:_initBackground,initContentListener:_initContentListener}}),global.true=exports}({},function(){return this}());