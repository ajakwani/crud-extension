define('CRUD.Main.Details.View', [
    'SCView',
    'CRUD_Main_Details.tpl'
], function (
    SCViewModule,
    CRUDMainDetailsTemplate
) {
    'use strict';

    var SCView = SCViewModule.SCView;

    function CRUDMainDetailsView (options) {
        SCView.call(this, options);

        this.model = options.model;

        this.tempalte = CRUDMainDetailsTemplate
    }

    CRUDMainDetailsView.prototype = Object.create(SCView.prototype);
    CRUDMainDetailsView.prototype.constructor = CRUDMainDetailsView;

    CRUDMainDetailsView.prototype.getContext = function () {
        return {
            model: this.model,
        }
    }

    return CRUDMainDetailsView
})