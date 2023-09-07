define('CRUD.Main.Edit.View',[
    'PageType.Base.View',
    'CRUD.Main.Form.View',
    'CRUD.Main.Model',
    'CRUD_Main_Edit.tpl',
    'jQuery'
], function (
    PageTypeBaseView,
    CRUDMainFormView,
    CRUDMainModel,
    CRUDMainEditTemplate,
    jQuery
) {
    'use strict';

    return PageTypeBaseView.PageTypeBaseView.extend({
        template: CRUDMainEditTemplate,

        initialize: function initialize () {
            this.model = new CRUDMainModel();
        },

        beforeShowContent: function beforeShowContent () {
            this.childViews = {
                'CRUD.Main.Form.View': function () {
                    return new CRUDMainFormView({
                        model: this.model
                    })
                }
            }

            if (!!Number(this.options.routerArguments[0])) {
                return this.model.fetch({
                    data: {internalid: this.options.routerArguments[0]}
                })
            }
            else{
                return jQuery.Deferred().resolve();
            }
        }
    })
})