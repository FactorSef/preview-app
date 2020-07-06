import React from 'react';
import './App.scss';
import { List } from './components/List';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Textarea } from './components/Textarea';

import { useGlobalState } from './store'

const App = (props) => {
	const [state, dispatch] = useGlobalState()
	const { todos, selected, isNew, search } = state;

	const handleSelected = (index) => (item) => {
		if (isNew) {
			dispatch({ type: 'AddToList', payload: selected })
		}

		if (index < 0) {
			dispatch({ type: 'Select' });
			return;
		}

		dispatch({ type: 'Select', payload: { item } });
	}

	const handleChange = (index) => (value) => {
		dispatch({ type: 'Toggle', payload: { index, value } });
	}

	const changeNew = prop => value => {
		dispatch({ type: 'ChangeSelectProp', payload: { prop, value } });
	}

	const getFiltred = () => {
		const _search = search.toLowerCase();
		return todos.filter(todo => !!~todo.name.toLowerCase().indexOf(_search) || !!~todo.content.toLowerCase().indexOf(_search))
	}

	const handleSearch = (payload = '') => {
		dispatch({ type: 'Search', payload });
	}

	return (
		<div className="layout">
			<div className="layout-header">
				<h1>ToDo List</h1>
			</div>
			<div className="layout-wrap">
				<main className="layout-main">
					<div className="header">
						<Input value={search} onChange={handleSearch} />
						<Button onClick={() => {
							const payload = {
								isNew: true,
							}
							dispatch({ type: 'Select', payload })
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
