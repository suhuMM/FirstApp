
import React ,{Component} from 'react';
import {
    View,
    Text
} from 'react-native';

export default class LifecycleComponent extends Component{

    constructor(props){
        super(props);
        console.log('--------------constructor---------')
        this.state={
            count:0,
        }
    }


    render(){
        return <View>
            <Text style={{fontSize:40,textColor:'red'}}
            onPress ={()=>{
                this.setState({
                    count:this.state.count+1,
                })
            }}>有本事你打我啊</Text>
            <Text style={{fontSize:30}}>被打了{this.state.count}</Text>
        </View>
    }
}