<div class="alert-placeholder" data-type="alert-placeholder"></div>
<form>
    <fieldset>
        <div data-validation="control-group">
            <label for="memberName">{{translate 'Member Name'}}</label>
            <div data-validation="control">
                <input type = "text" name="memberName" id="memberName" value="{{model.memberName}}" >
            </div>
        </div>

        <div data-validation="control-group">
            <label for="memberRole">{{translate 'Member Role'}}</label>
            <div data-validation="control">
                <input type = "text" name="memberRole" id="memberRole" value="{{model.memberRole}}" >
            </div>
        </div>

        <div data-validation="control-group">
            <label for="phone">{{translate 'Phone Number'}}</label>
            <div data-validation="control">
                <input type = "text" name="phone" id="phone" value="{{model.phone}}" >
            </div>
        </div>

        <div data-validation="control-group">
            <label for="stack">{{translate 'Stack'}}</label>
            <div data-validation="control">
                <input type = "text" name="stack" id="stack" value="{{model.stack}}" >
            </div>
        </div>

        <div data-validation="control-group">
            <label for="age">{{translate 'Age'}}</label>
            <div data-validation="control">
                <input type = "text" name="age" id="age" value="{{model.age}}" >
            </div>
        </div>

        <div data-validation="control-group">
            <label for="gender">{{translate 'Gender'}}</label>
            <div data-validation="control">
                <input type = "text" name="gender" id="gender" value="{{model.gender}}" >
            </div>
        </div>
    </fieldset>
    <button type="submit">{{translate 'Add / Update'}}</button>
</form>