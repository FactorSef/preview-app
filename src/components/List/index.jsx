import React from 'react';
import { Item } from './Item';
import './styles.scss';

import { observer } from 'mobx-react';
import store from '../../mobx-store';

export const List = observer(() => {
    const { filtredTodos } = store;

    return (
        <div className="list-wrap">
            {filtredTodos.map((item, index) => (
                <Item
                    key={item.name + index + item.complete}
                    item={item}
                />
            ))}
        </div>
    )
})