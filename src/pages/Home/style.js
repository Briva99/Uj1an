import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    page : {
        flex : 1
    },
    header:{
        paddingHorizontal: 30,
        paddingTop: 30,
    },
    title : {
        fontSize: 20,
        fontWeight: 'bold'
    },
    garis: {
        borderWidth: 1,
        marginTop: 10,
    },
    listUser:{
        paddingHorizontal : 30,
        marginTop : 20,
    },
    wrapperButton : {
        flex : 1,
        position : "absolute",
        top: 0,
        right: 0,
        margin:30
    },
    btnTambah: {
        padding: 20,
        backgroundColor: 'skyblue',
        borderRadius: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    }


})