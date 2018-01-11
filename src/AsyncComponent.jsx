import React from 'react'
import ReactLoadable from 'react-loadable'

var Loading = (props) => {
    if (props.error) {
        return <div>载入错误，请重试</div>
    } else {
        return <div>加载中。。。</div>
    }
}

export default class extends React.Component {
    render() {
        var path = this.props.path;
        const Component = ReactLoadable({
            loader: () => import(`./${path}`),
            loading: Loading,
            delay: 1000 //延迟一秒来看loading效果
        })
        return (
            <Component></Component>
        )
    }
}