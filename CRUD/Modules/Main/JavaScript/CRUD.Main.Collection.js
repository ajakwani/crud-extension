define('CRUD.Main.Collection', [
    'SCCollection',
    'CRUD.Main.Model',
    'Utils'
], function (
    SCCollectionModule,
    CRUDMainModel,
    Utils
) {
    'use strict';

    var SCCollection = SCCollectionModule.SCCollection;

    function CRUDMainCollection(models, options) {
        SCCollection.call(this, models, options);

        this.model = CRUDMainModel;
        this.url = function () {
            return Utils.getAbsoluteUrl(getExtensionAssetsPath("Modules/Main/SuiteScript2/Main.Service.ss"), true)
        }
    }

    CRUDMainCollection.prototype = Object.create(SCCollection.prototype);
    CRUDMainCollection.prototype.constructor = CRUDMainCollection;

    return CRUDMainCollection
})