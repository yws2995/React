import React from 'react';
import classNames from 'classnames';
import './Button.scss';

function Button({children, size, color, outline, fullWidth, ...rest}) {
    return <button {...rest} className = {classNames('Button', size, color, {outline,fullWidth})}>{children}</button>
}   //className에 css 클래스 이름을 동적으로 넣어주기

Button.defaultProps = {
    size: 'medium',
    color: 'blue'
};

export default Button;