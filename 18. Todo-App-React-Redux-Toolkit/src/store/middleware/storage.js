const localStorageMiddleware = store => next => action => {
    const result = next(action);
    localStorage.removeItem('todos');
    localStorage.setItem('todos', JSON.stringify(store.getState().todos));
    return result;
}

export default localStorageMiddleware