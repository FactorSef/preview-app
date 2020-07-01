import React from 'react';
import './App.scss';
import { List } from './components/List';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Textarea } from './components/Textarea';

const model = {
	name: '',
	content: '',
	complete: false,
}

const App = (props) => {
	const [todos, setTodos] = React.useState([
		Object.assign({}, model, { name: 'Test 1', content: 'lol kek'}),
		Object.assign({}, model, { name: 'Test 2', content: 'lol kek 2'}),
		Object.assign({}, model, { name: 'Test 3', content: 'lol kek 3'}),
	]);
	const [selected, setSelected] = React.useState(null);
	const [isNew, setIsNew] = React.useState(false);
	const [search, setSearch] = React.useState('');

	const handleSelected = (index) => (item) => {
		if (isNew) {
			setTodos([
				...todos,
				selected,
			]);
		}

		if (index < 0) {
			setSelected(null);
			setIsNew(false);
			return;
		}

		setSelected(item);
	}

	const handleChange = (index) => (value) => {
		const nextTodos = [...todos];
		nextTodos[index].complete = value;
		setTodos(nextTodos);
		console.log(index, value, todos)
	}

	const changeNew = prop => value => {
		setSelected({
			...selected,
			[prop]: value
		});
	}

	const getFiltred = () => {
		const _search = search.toLowerCase();
		
		// -1 => ~-1 => 0 => !!0 => false
		// 0 => ~0 => -1 => !!-1 => true
		// 1 => ~1 => -2 => !!-2 => true

		return todos.filter(todo => !!~todo.name.toLowerCase().indexOf(_search) || !!~todo.content.toLowerCase().indexOf(_search))
	}

	return (
		<div className="layout">
			<div className="layout-header">
				<h1>ToDo List</h1>
			</div>
			<div className="layout-wrap">
				<main className="layout-main">
					<div className="header">
						<Input value={search} onChange={setSearch} />
						<Button onClick={() => {
							setSelected(Object.assign({}, model))
							setIsNew(true);
						}}>
							Добавить новый
						</Button>
					</div>
					<List items={getFiltred()} onSelect={handleSelected} onChange={handleChange}/>
				</main>
				<aside className="layout-right">
					{selected && (
						<React.Fragment>
							<div className="header">
								{isNew ? (
										<Input value={selected.name} onChange={changeNew('name')}></Input>
									) : (
										<h2>{selected.name}</h2>
								)}
								<Button onClick={handleSelected(-1)}>{isNew ? 'Добавить' : 'Закрыть'}</Button>
							</div>
							{isNew ? (
								<Textarea value={selected.content} onChange={changeNew('content')} />
							) : (
								<pre>
									{selected.content}
								</pre>
							)}
						</React.Fragment>
					)}
				</aside>
			</div>
		</div>
	);
};

export default App;
