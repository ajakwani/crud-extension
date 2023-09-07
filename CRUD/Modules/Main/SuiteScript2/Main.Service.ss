/**
* @NApiVersion 2.x
* @NModuleScope Public
*/
    
define([
    './Main.Model'
], function (
    MainModel
) {
    'use strict';

    function service (context) {
        var response = {};

        switch(context.request.method) {
            case 'GET':
                response = MainModel.get(context.request)
                break;
        
            case 'POST':
                response = MainModel.post(context.request)
                break;

            case 'PUT':
                response = MainModel.put(context.request)
                break;

            // case 'DELETE':
            //     response = MainModel.delete(context.request)
            //     break;
        }

        context.response.write(JSON.stringify(response));
    }

    return {
        service: service
    }
})