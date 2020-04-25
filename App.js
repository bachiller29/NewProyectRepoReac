import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// function Hello (props){
//     return <Text>{props.title}</Text>
// }

// const Hello = {props} => <Text>{props.title}</Text>

class Hello extends Component{
    render(){
    return <Text>{this.props.title}</Text>
    }
}

class Textt extends Component{
    render(){
        return    
            <div>
                <p>{this.props.title}</p>
                <p>{this.props.title}</p>
            </div>                   
    }
}

export default function App() {
    return ( < View style = { styles.container } >
        <Hello title='Hola mundo'></Hello>

        <Textt number={2} text = 'Texto en string'/>

        </View>
    );
    
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});