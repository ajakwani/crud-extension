/**
 * @NApiVersion 2.x
 * @NModuleScope TargetAccount
 */

define(['N/record',  'N/search'], function (record, search) {
  "use strict";

  var MainModel = {
    get: function(request){
      var type = 'customrecord4';

      var filters = [];

      var columns = ['internalid', 'custrecord1', 'custrecord2', 'custrecord3', 'custrecord4', 'custrecord5', 'custrecord6'];

      if(request.parameters.internalid) {
        filters.push({
          name: 'internalid',
          operator: search.Operator.IS,
          values: request.parameters.internalid
        });
      }

      var searchResults  = search.create({
        type: type,
        filters: filters,
        columns: columns
      }).run().getRange({start: 0, end: 1000});

      var mappedResults = searchResults.map(function(result) {
        return {
          internalid: result.getValue('internalid'),
          memberName: result.getValue('custrecord1'),
          memberRole: result.getValue('custrecord2'),
          phone: result.getValue('custrecord3'),
          stack: result.getValue('custrecord4'),
          age: result.getValue('custrecord5'),
          gender: result.getValue('custrecord6')
        }
      });

      return mappedResults.length == 1 ? mappedResults[0] : mappedResults
    },

    post: function (request) {
      var body = JSON.parse(request.body);

      var techTeamMember = record.create({
        type: 'customrecord4'
      });

      techTeamMember.setValue({
        fieldId: 'custrecord1',
        value: body.memberName
      })

      techTeamMember.setValue({
        fieldId: 'custrecord2',
        value: body.memberRole
      })

      techTeamMember.setValue({
        fieldId: 'custrecord3',
        value: body.phone
      })

      techTeamMember.setValue({
        fieldId: 'custrecord4',
        value: body.stack
      })

      techTeamMember.setValue({
        fieldId: 'custrecord5',
        value: body.age
      })

      techTeamMember.setValue({
        fieldId: 'custrecord6',
        value: body.gender
      })

      return techTeamMember.save()

    },

    put: function (request) {
    var body = JSON.parse(request.body);

    var myRecord = record.load({
      type: 'customrecord4',
      id: request.parametrs.internalid
    });

    myRecord.setValue({
      fieldId: 'custrecord1',
      value: body.memberName
    });

    myRecord.setValue({
      fieldId: 'custrecord2',
      value: body.memberRole
    });

    myRecord.setValue({
      fieldId: 'custrecord3',
      value: body.phone
    });

    myRecord.setValue({
      fieldId: 'custrecord4',
      value: body.stack
    });

    myRecord.setValue({
      fieldId: 'custrecord5',
      value: body.age
    });

    myRecord.setValue({
      fieldId: 'custrecord6',
      value: body.gender
    });

    }
  }

  return MainModel
});

  //   put: function (data) {
  //     if (!data) {
  //       throw new Error("No Data Submitted");
  //     }

  //     if (!data.internalid) {
  //       throw new Error("No Internal ID submitted.");
  //     } else {
  //       var myNewRecord = record.load({
  //         type: "customrecord4",
  //         id: data.internalid,
  //       });

  //       myNewRecord.setValue({
  //         fieldId: "custrecord1",
  //         value: data.name,
  //       });

  //       myNewRecord.setValue({
  //         fieldId: "custrecord2",
  //         value: data.role,
  //       });

  //       myNewRecord.setValue({
  //         fieldId: "custrecord3",
  //         value: data.phone,
  //       });

  //       myNewRecord.setValue({
  //         fieldId: "custrecord4",
  //         value: data.stack,
  //       });

  //       myNewRecord.setValue({
  //         fieldId: "custrecord5",
  //         value: data.age,
  //       });

  //       myNewRecord.setValue({
  //         fieldId: "custrecord6",
  //         value: data.gender,
  //       });

  //       return myNewRecord.save();
  //     }
  //   },

  //   delete: function(internalid) {
  //     if(!internalid){
  //       throw new Error("No Internal ID Submitted.");
  //     }
      
  //     var deleteRecord =  record.delete({
  //       type: "customrecord4",
  //       id: internalid
  //     });

  //     return deleteRecord;
  //   }
  // };
