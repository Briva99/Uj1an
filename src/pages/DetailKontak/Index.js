import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Firebase from '../../config/Firebase/Index'

export default class DetailKontak extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             kontak :{},
        }
    }

    componentDidMount() {
        Firebase.database()
            .ref('Kontak/' + this.props.route.params.id)
            .once('value', (querySnapShot) => {
                let data = querySnapShot.val() ? querySnapShot.val() : {};
                let userItem = { ...data };

                this.setState({
                    kontak: userItem,
                    
                })
            })
    }
    
    render() {
        const {kontak} = this.state
        return (
            <View>
                <Text>Halaman Detail Kontak</Text>
                <Text>Detail Kontak {kontak.nama}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
