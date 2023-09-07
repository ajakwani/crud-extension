<header class="Main-List-Header">
    <h2 class="Main-List-Title">{{translate 'Tech Team Members'}}</h2>
    <a class="Main-List-Button-New" href="anas/add">{{translate 'Add New Member'}}</a>
</header>

<div class="Main-List-Table">
    <table>
        <thead>
            <tr>
                <th>{{transale 'Internal ID'}}</th>
                <th>{{translate 'Member Name'}}</th>
                <th>{{translate 'Member Role'}}</th>
                <th>{{translate 'Phone'}}</th>
                <th>{{translate 'Stack'}}</th>
                <th>{{translate 'Age'}}</th>
                <th>{{translate 'Gender'}}</th>
            </tr>
        </thead>
        <tbody data-view="CRUD.Main.Collection.View"></tbody>
    </table>
</div>