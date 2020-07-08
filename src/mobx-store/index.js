import { observable, action, computed } from 'mobx';

const model = {
	name: '',
	content: '',
	complete: false,
}

class MobxStore {
    @observable todos = [
        Object.assign({}, model, { name: 'Test 1', content: 'lol kek'}),
        Object.assign({}, model, { name: 'Test 2', content: 'lol kek 2'}),
        Object.assign({}, model, { name: 'Test 3', content: 'lol kek 3'}),
    ];
    @observable selected = null;
    @observable isNew = false;
    @observable search = '';

    @computed get count() {
        return this.todos.length;
    }

    @computed get filtredTodos() {
            const _search = this.search.toLowerCase();
            return this.todos
                .filter(todo =>
                    !!~todo.name.toLowerCase().indexOf(_search)
                    || !!~todo.content.toLowerCase().indexOf(_search)
                )
    }

    @action.bound addToList() {
        if (!this.isNew) {
            this.selected = null;
            return;
        }
        
        this.todos.push({
            ...model,
            ...this.selected,
        });

        if (this.isNew) {
            this.isNew = false;
        }
    }

    @action.bound select(item, isNew = false) {
        this.selected = isNew ? { ...model } : item;
        this.isNew = isNew;
    }

    // @action.bound changeSelectProps(prop, value) {
    //     this.selected[prop] = value;
    // }

    @action.bound changeSearch(value) {
        this.search = value;
    }

    // @action.bound toggleCheckbox(index, value) {
    //     this.todos[index].complete = value;
    // }
}

const state = new MobxStore();

export { model, MobxStore };
export default state;
