define('CRUD.Main.Form.View' ,[
    'Backbone',
    'SCFormView',
    'Utils',
    'CRUD_Main_Form.tpl'
], function (
    Backbone,
    SCFormViewModule,
    Utils,
    CRUDMainFormTemplate
) {
    'use strict';

    var SCFormView = SCFormViewModule.SCFormView;

    function CRUDMainFormView (options) {
        SCFormView.call(this, options.model);

        // sync event occurs when data has been sent or received from server
        this.formModel.on('sync', function () {
            Backbone.history.navigate('anas', {trigger: true});
        });

        this.template = CRUDMainFormTemplate;
    }

    CRUDMainFormView.prototype = Object.create(SCFormView.prototype)
    CRUDMainFormView.prototype.constructor = CRUDMainFormView;

    CRUDMainFormView.prototype.getEvents = function () {
        // key is the event and value is callback to handle event
        return {
            'submit form': 'saveForm'
        }
    }

    CRUDMainFormView.prototype.saveForm = function (e) {
        e.preventDefault();

        var promise = SCFormView.prototype.saveForm.call(this, e);

        return promise
    }

    CRUDMainFormView.prototype.getFormValues = function (form) {
        var formValues = form.serializeObject();

        return {
            memberName: formValues.memberName,
            memberRole: formValues.memberRole,
            phone: formValues.phone,
            stack: formValues.stack,
            age: formValues.age,
            gender: formValues.gender
        }
    }

    CRUDMainFormView.prototype.getContext = function () {
        return {
            model: this.formModel
        }
    }

    return CRUDMainFormView
})