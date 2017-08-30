import React from 'react'
import classNames from 'classnames'
import HistoryLink from '../HistoryLink'
import './styles.css'

const Link = ({ className, noStyle, ...props }) =>
<HistoryLink className={classNames('Link', noStyle && 'no-style', className)} {...props} />

export default Link