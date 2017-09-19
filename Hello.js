
import React ,{Component} from 'react';
import {
    Text
} from 'react-native';

/**
 * 方式一：ES6
 * */
export default class Hello extends Component{
    render(){
        return <Text style={{fontSize:60,background:'red'}}>hello{this.props.name}</Text>
    }
}

/**
 * 方式二：ES5
 * */
// var Hello = React.createClass({
//     render(){
//         return <Text style={{font:20,background:'red'}}>hello</Text>
//     }
// })
//
// module.export = Hello;


/**
 * 函数式
 * 无状态，无法使用this
 * 没有完整的生命周期
 * */

// function Hello(progs) {
//     return <Text style={{font:20,background:'red'}}>hello.{progs.name}</Text>
// }
// module.export = Hello;