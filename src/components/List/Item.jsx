import React from 'react';
import classnames from 'classnames';

export const Item = ({ item, onToggle, onClick }) => {
    const { name, complete } = item;
    const handleChange = () => {
        onToggle && onToggle(!item.complete);
    }

    return (
        <div className={classnames('list-item', complete && '-complete')}>
            <input type="checkbox" name={name} checked={complete} onChange={handleChange}/>
            <label htmlFor={name}>{name}</label>
            {onClick && item.content && <>&nbsp;<span onClick={() => onClick(item)} className="list-item-more">Подробнее</span></>}
        </div>
    )
}