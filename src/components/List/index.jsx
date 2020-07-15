import React from 'react';
import { Item } from './Item';
import './styles.scss';

import { observer } from 'mobx-react';
import store from '../../mobx-store';
import { Row, Col, Checkbox, Button } from 'antd';

export const List = observer(() => {
    const { filtredTodos } = store;

    return (
        <>
            {filtredTodos.map((item, index) => {
                const handleChange = ({ target }) => {
                    item.complete = target.value;
                }
                return (
                    <Row key={item.name + index + item.complete} gutter={16} style={{ padding: '20px', border: '1px solid black' }}>
                        <Col span={24}>
                            <Checkbox value={item.complete} onChange={handleChange}>{item.name}</Checkbox>
                            <Button type="link" onClick={() => store.select(item)}>Подробнее</Button>
                        </Col>
                    </Row>
                )
            })}
        </>
    )
})