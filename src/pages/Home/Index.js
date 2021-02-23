import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import React, { Component } from 'react'
import { Text, View, TouchableOpacity,Alert } from 'react-native'
import styles from './style'
import Firebase from '../../config/Firebase/Index'
import CardKontak from '../../component/cardUser/Index'


export default class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: {},
            usersKey: [],
        };
    }

    componentDidMount() {
       this.updateData();
    }

    updateData=()=> {
        Firebase.database()
        .ref('Kontak')
        .once('value', (querySnapShot) => {
            let data = querySnapShot.val() ? querySnapShot.val() : {};
            let userItem = { ...data };

            this.setState({
                users: userItem,
                usersKey: Object.keys(userItem),
            })
        })
    }

    removeData = (id)=>{
        Alert.alert(
            "Warning",
            "Apakah AndA Yakin Data Dihapus ?",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "OK", onPress: () => {
                  Firebase.database()
                  .ref('Kontak/'+id)
                  .remove();
                  this.updateData();
                  Alert.alert('Hapus', 'Data Berhasil Di Hapus')
              } }
            ],
            { cancelable: false }
          );
    }

    render() {
        const { users, usersKey } = this.state
        return (
            <View style={styles.page}>
                <View style={styles.header}>
                    <Text style={styles.title}>Daftar User</Text>
                    <View style={styles.garis} />
                </View>

                <View style={styles.listUser}>
                    {usersKey.length > 0 ? (
                        usersKey.map((key) => (
                            <CardKontak key={key} userItem={users[key]} id={key} {...this.props}
                            removeData={this.removeData} />

                        ))
                    ) : (
                            <Text>Daftar Kosong</Text>
                        )}

                </View>


                <View style={styles.wrapperButton}>
                    <TouchableOpacity style={styles.btnTambah} onPress={() => this.props.navigation.navigate('Addusers')}>
                        <FontAwesomeIcon icon={faPlus} size={20} color={'white'} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

