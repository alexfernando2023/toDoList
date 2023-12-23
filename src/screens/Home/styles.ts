import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#1A1A1A',
        position: 'relative',
        alignItems: 'center',
    },
    header: {
        backgroundColor: '#0D0D0D',
        width: '100%',
        alignItems: 'center',
        paddingTop: 70,
        paddingBottom: 70
    },
    buttonMode: {
        position: 'absolute',
        top: 75,
        left: 25,
        width: 24,
        height: 24,
        borderRadius: 50,
        backgroundColor: '#1E6F9F',
        alignItems: 'center',
        justifyContent: 'center'
    },
    form: {
        flexDirection: 'row',
        position: 'absolute',
        top: 140,
        paddingLeft: 25,
        paddingRight: 25
    },
    input: {
        flex: 1,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#0D0D0D',
        padding: 12,
        backgroundColor: '#333',
        marginRight: 5,
        color: '#F2F2F2',
        fontSize: 18
    },
    buttom: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#1E6F9F',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttomText: {
        width: 19,
        height: 19,
        textAlign: 'center',
        color: '#F2F2F2',
        fontSize: 14,
        borderRadius: 50,
        borderWidth: 1.5,
        borderColor: '#F2F2F2',
    },
    sectionToDos: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '88%',
        paddingBottom: 15,
        marginTop: 60,
        marginBottom: 40,
        borderBottomWidth: 1,
        borderColor: '#333',
    },
    status: {
        flexDirection: 'row'
    },
    statusCreated: {
        fontWeight: 'bold',
        color: '#4EA8DE',
        fontSize: 14,
        marginRight: 5
    },
    statusNumber: {
        color: '#F2F2F2',
        fontWeight: 'bold',
        width: 28,
        height: 20,
        backgroundColor: '#333',
        borderRadius: 50,
        alignContent: 'center',
        textAlign: 'center'
    },
    statusCompleted: {
        fontWeight: 'bold',
        color: '#8284FA',
        fontSize: 14,
        marginRight: 5
    },
    listEmptyContainer: {
        alignItems: 'center',
    },
    listEmptyText1: {
        color: '#808080',
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: 20
    },
    listEmptyText2: {
        color: '#808080',
        fontSize: 16,
        fontWeight: '300'
    }
})