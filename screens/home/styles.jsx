import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#fcbf49',
        
    },
    
    form:{
        
        backgroundColor: '#f77f00',
        width: '100%',
        height: 200,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        
       
     
    },
    input:{
        width: 215,
        height: 50,
        backgroundColor: '#001524',
        borderRadius: 20,
        padding: 16,
        fontSize: 10,
        marginRight:10
        
       
    },
    
    icon:{
       height:18,
       width: 18,
       marginRight:20
      
       
    },
    img:{
        width:90,
        height: 90,
        borderRadius: 100,
        marginRight: 25
       
    }
})