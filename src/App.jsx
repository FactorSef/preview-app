import React from 'react';
import './App.scss';
import { List } from './components/List';
import { Textarea } from './components/Textarea';

import { observer } from 'mobx-react';
import state from './mobx-store';

import { Layout, Typography, Input, Button, Row, Col, Empty } from 'antd';

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

	const changeNew = (prop) => ({ target }) => selected[prop] = target.value;

	return (
		<Layout>
			<Layout.Header>
				<Typography.Title style={{ color: 'white' }}>
					Todo List
				</Typography.Title>
			</Layout.Header>
			<Layout>
				<Layout.Sider theme="light" width="500px">
					<Row gutter={[16, 16]}>
						<Col span={16}>
							<Input value={search} onChange={changeSearch} />
						</Col>
						<Col span={8}>
							<Button type="primary" onClick={handleAddClick}>Добавить новый</Button>
						</Col>
					</Row>
					<List />
				</Layout.Sider>
				<Layout.Content>
					{selected ? (
						<React.Fragment>
							<Row>
								<Col span={16}>
									{isNew ? (
										<Input value={selected.name} onChange={changeNew('name')}/>
									) : (
										<Typography.Title level={2}>{selected.name}</Typography.Title>
									)}
								</Col>
								<Col span={8}>
									<Button onClick={addToList} block>
										{isNew ? 'Добавить' : 'Закрыть'}
									</Button>
								</Col>
							</Row>
							<Row>
								<Col span={24}>
									{isNew ? (
										<Input.TextArea value={selected.content} onChange={changeNew('content')}/>
									) : (
										<pre>
											{selected.content || selected.name}
										</pre>
									)}
								</Col>
							</Row>
						</React.Fragment>
					) : (
						<Empty />
					)}
				</Layout.Content>
			</Layout>
		</Layout>
	);


	// return (
	// 	<div className="layout">
	// 		<div className="layout-header">
	// 			<h1>ToDo List</h1>
	// 		</div>
	// 		<div className="layout-wrap">
	// 			<main className="layout-main">
	// 				<div className="header">
	// 					<Input value={search} onChange={changeSearch} />
	// 					<Button onClick={handleAddClick}>
	// 						Добавить новый
	// 					</Button>
	// 				</div>
	// 				<List />
	// 			</main>
	// 			<aside className="layout-right">
	// 				{selected && (
	// 					<React.Fragment>
	// 						<div className="header">
	// 							{isNew ? (
	// 									<Input value={selected.name} onChange={changeNew('name')}></Input>
	// 								) : (
	// 									<h2>{selected.name}</h2>
	// 							)}
	// 							<Button onClick={addToList}>{isNew ? 'Добавить' : 'Закрыть'}</Button>
	// 						</div>
	// 						{isNew ? (
	// 							<Textarea value={selected.content} onChange={changeNew('content')} />
	// 						) : (
	// 							<pre>
	// 								{selected.content}
	// 							</pre>
	// 						)}
	// 					</React.Fragment>
	// 				)}
	// 			</aside>
	// 		</div>
	// 	</div>
	// );
});

export default App;
