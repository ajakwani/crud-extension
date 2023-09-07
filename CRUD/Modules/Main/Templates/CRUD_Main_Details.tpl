<tr>
    <td>{{model.internalid}}</td>
    <td>{{model.memberName}}</td>
    <td>{{model.memberRole}}</td>
    <td>{{model.phone}}</td>
    <td>{{model.stack}}</td>
    <td>{{model.age}}</td>
    <td>{{model.gender}}</td>
    <td>
        <a class="Main-Table-Edit-Link" href="/anas/{{model.internalid}}">{{translate 'Edit'}}</a>
        <button class="Main-Table-Delete-Button" data-action="delete" data-id="{{model.internalid}}">{{translate 'Delete'}}</button>
    </td>
</tr>