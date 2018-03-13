
Template.main.helpers({
  todos: () => {
    return Todos.find();
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
  }
});
