export function TodoModel(id, title, description, important, done, isOvertimed ) {
    let todo = this;

    todo.id = id || Date.now().toString()
    todo.title = title || 'Todo Title';
    todo.description = description || ''
    todo.isDone = done || false
    todo.isOvertimed = isOvertimed || false
    todo.isImportant = important || false;
    
        todo.getId = () => todo.id
        todo.getTitle = () => todo.title
        todo.getDescription = () => todo.description
        todo.getDone = () => todo.isDone
        todo.getOvertimed = () => todo.isOvertimed
        todo.getImportant = () => todo.isImportant

        todo.setId= newId => todo.id = newId
        todo.setTitle = newTitle => todo.title = newTitle
        todo.setDescription = newDescription => todo.description = newDescription
        todo.setDone = newDoneState => todo.isDone = newDoneState
        todo.setOvertimed = newOvertaimeState => todo.isOvertimed = newOvertaimeState
        todo.setImportant = newImportantState => todo.isImportant = newImportantState
    

}