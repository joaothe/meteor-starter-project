
Template.main.helpers({
  todos: () => {
    return Todos.find({}, {sort: {createdAt: -1}});
  }

});

Template.main.events({
  "submit .new-todo": (event) => {
    const text = event.target.text.value;

    Todos.insert({
      text: text,
      createdAt: new Date()
    });

    event.target.text.value = '';

    return false;
  },

  "click .toggle-checking": function(){
    Todos.update(this._id, {$set:{checked: ! this.checked}});
  },

  "click .delete-todo": function(){
    if(confirm('Are you sure?'))
    Todos.remove(this._id);
  }

});

Accounts.ui.config({
  passwordSignupFields: "USERNAME_ONLY"
});
