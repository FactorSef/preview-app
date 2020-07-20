import React, { createElement } from 'react';

const FormatText = (props) => {
    const { type, tag, value } = props;

    switch (type) {
        case 'ce': { // create element
            return (
                <div>
                    {
                        value
                            .replace(/(\\n|\n)+/gm, '\n')
                            .split('\n')
                            .filter(Boolean)
                            .map(function (val, index) {
                                return React.createElement(tag, { key: val + index }, val)
                            })
                    }
                </div>
            )
        }
        case 'br': { // br
            return createElement(tag, {
                dangerouslySetInnerHTML: {
                    __html: value
                        .replace(/(\n|\\n)+/gm, '\n')
                        .split('\n')
                        .filter(Boolean)
                        .join('<br />')
                }
            })
        }
        default: { // default
            return createElement(tag, {}, value)
        }
    }
}

FormatText.defaultProps = {
    type: null,
    tag: 'p',
    value: '',
}

export { FormatText };
export default FormatText;