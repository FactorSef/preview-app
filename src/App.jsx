import React from 'react';
import './App.scss';
import { List } from './components/List';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Textarea } from './components/Textarea';

import { observer } from 'mobx-react';
import state from './mobx-store';

const App = observer(() => {
	const {
		search,
		selected,
		isNew,
		changeSearch,
		select,
		addToList,
	} = state;

	const handleAddClick = () => select(null, true);

	const changeNew = (prop) => (value) => selected[prop] = value;

	return (
		<div className="layout">
			<div className="layout-header">
				<h1>ToDo List</h1>
			</div>
			<div className="layout-wrap">
				<main className="layout-main">
					<div className="header">
						<Input value={search} onChange={changeSearch} />
						<Button onClick={handleAddClick}>
							Добавить новый
						</Button>
					</div>
					<List />
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
								<Button onClick={addToList}>{isNew ? 'Добавить' : 'Закрыть'}</Button>
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
});

export default App;
