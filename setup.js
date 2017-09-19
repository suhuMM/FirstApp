import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

import LifecycleComponent from './LifecycleComponent';

export default class setup extends Component {
    constructor(props) {
        super(props);
        this.state = ({remove: false})
    }

    render() {
        var view = this.state.remove?null:<LifecycleComponent />
        var text = this.state.remove?"让他复活":'干掉他';
        return (
            <View style={styles.container}>
                <Text style={{fontSize:20}}
                onPress={()=>{
                    this.setState({
                        remove:!this.state.remove
                    })
                }}
                >{text}</Text>
                {view}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});


