import React from 'react';
import classnames from 'classnames';

import { observer } from 'mobx-react';
import store from '../../mobx-store';

export const Item = observer(({ item }) => {
    const { select } = store;

    const { name, complete } = item;

    const handleChange = () => {
        item.complete = !item.complete;
    }

    return (
        <div className={classnames('list-item', complete && '-complete')}>
            <input type="checkbox" name={name} checked={complete} onChange={handleChange}/>
            <label htmlFor={name}>{name}</label>
            {item.content && <>&nbsp;<span onClick={() => select(item)} className="list-item-more">Подробнее</span></>}
        </div>
    )
})