define('CRUD.Main', [
    'CRUD.Main.List.View', 'CRUD.Main.Edit.View'
], function (CRUDMainListView, CRUDMainEditView) {
    'use strict';

    return {
        mountToApp: function (container) {
            console.log("This is my extension")

            var PageType = container.getComponent('PageType');

            PageType.registerPageType({
                name: 'CRUDPageType',
                routes: ['anas'],
                view: CRUDMainListView,
                defaultTemplate: {
                    name: 'CRUD_Default_Template.tpl',
                    displayName: 'CRUD Default Template'
                }
            });

            PageType.registerPageType({
                name: 'CRUDPOSTPage',
                routes: ['anas/add', 'anas/:id'],
                view: CRUDMainEditView,
                defaultTemplate: {
                    name: 'CRUD_Main_Edit.tpl',
                    displayName: 'CRUD Main Edit',
                }
            })

            PageType.registerTemplate({
                pageTypes: ['CRUDPageType'],
                template: {
                    name: 'CRUD_Alternate_Template.tpl',
                    displayName: 'CRUD Alternate Template',
                }
            })
        }
    }
});