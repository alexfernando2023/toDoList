import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create ({
    container: {
        width: 360,
        flexDirection: 'row',
        backgroundColor: '#262626',
        padding: 15,
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#333',
        marginBottom: 10
    },
    textTask: {
        flex: 1,
        color: '#F2F2F2',
        textAlign: 'center'
    },
    containerStyleCheckBox: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})