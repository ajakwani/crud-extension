define('CRUD.Main.Collection.View',[
    'SCCollectionView',
    'CRUD.Main.Details.View',
    'CRUD_Main_Collection.tpl',
    'jQuery'
], function (
    SCCollectionViewModule,
    CRUDMainDetailsView,
    CRUDMainCollectionTemplate,
    jQuery
) {
    'use strict';

    var SCCollectionView = SCCollectionViewModule.SCCollectionView;

    function CRUDMainCollectionView(options) {
        SCCollectionView.call(this, options.collection);

        this.collection = options.collection;

        this.template = CRUDMainCollectionTemplate
    }

    CRUDMainCollectionView.prototype = Object.create(SCCollectionView.prototype);
    CRUDMainCollectionView.prototype.constructor = CRUDMainCollectionView;

    CRUDMainCollectionView.prototype.getCellViewsPerRow = function () {
        return 1
    }

    CRUDMainCollectionView.prototype.getCellViewInstance = function (model) {
        return new CRUDMainDetailsView({
            model: model
        })
    }

    CRUDMainCollectionView.prototype.getContext = function () {
        return {}
    }

    return CRUDMainCollectionView
})