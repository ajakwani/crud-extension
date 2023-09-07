define('CRUD.Main.Model', [
    'SCModel',
    'Utils'
], function (SCModelModule, Utils) {
    'use strict';

    var SCModel = SCModelModule.SCModel;

    function CRUDMainModel(model, options){
        SCModel.call(this, model, options);

        this.urlRoot = function urlRoot () {
            return Utils.getAbsoluteUrl(getExtensionAssetsPath("Modules/Main/SuiteScript2/Main.Service.ss"), true)
        }
    }

    CRUDMainModel.prototype = Object.create(SCModel.prototype);

    CRUDMainModel.prototype.constructor = CRUDMainModel;

    return CRUDMainModel
})