import React from 'react';
import { Item } from './Item';
import './styles.scss';

export const List = ({ items, onSelect, onChange }) => {
    return (
        <div className="list-wrap">
            {items.map((item, index) => (
                <Item
                    key={item.name + index + item.complete}
                    item={item}
                    onClick={onSelect(index)}
                    onToggle={onChange(index)}
                />
            ))}
        </div>
    )
}