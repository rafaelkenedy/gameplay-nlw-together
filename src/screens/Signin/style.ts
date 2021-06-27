import { StyleSheet } from 'react-native'

import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
    container: {
        
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center'
    },
    input:{
        height: 50,
        width: 200,
        borderBottomWidth: 2
    },
    image:{
        width: '100%',
        height: 360
    },
    content:{
        marginTop: -40,
        paddingHorizontal: 50

    },
    title:{
        fontFamily: theme.fonts.title700,
        lineHeight: 40,
        color: theme.colors.heading,
        textAlign: 'center',
        fontSize: 40,
        marginBottom: 16
    },
    subtitle: {
        fontFamily: theme.fonts.title500,
        lineHeight: 25,
        color: theme.colors.heading,
        fontSize: 15,
        textAlign: 'center',
        marginBottom: 64
    }
})