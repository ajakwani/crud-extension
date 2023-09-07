define('CRUD.Main.List.View', [
    'PageType.Base.View',
    'CRUD.Main.Collection',
    'CRUD.Main.Collection.View',
    'CRUD_Default_Template.tpl'
], function (
    PageTypeBaseView,
    CRUDMainCollection,
    CRUDMainCollectionView,
    CRUDDefaultTemplate
) {
    'use strict';

    return PageTypeBaseView.PageTypeBaseView.extend({
        template: CRUDDefaultTemplate,

        initialize: function initialize() {
            this.collection = new CRUDMainCollection();
        },

        beforeShowContent: function beforeShowContent() {
            this.childViews = {
                'CRUD.Main.Collection.View': function () {
                    return new CRUDMainCollectionView({
                        collection: this.collection
                    })
                }
            }

            return this.collection.fetch()
        }
    })
});