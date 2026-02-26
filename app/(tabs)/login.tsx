import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function LoginScreen(){
  return(
    <View style={styles.container}>
      <Text style={styles.title}>Área Restrita</Text>
      <TextInput style={styles.input}
      
      />
      <TextInput style={styles.input}
      
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.title}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'green',
    alignItems:'center',
    justifyContent:'center',
    padding:30,
  },
  title:{
    marginTop:10,
    fontSize:24,
    marginBottom:20,
    color:'#333',
  },
  input:{
    width:'100%',
    height:40,
    backgroundColor:'#fff',
    padding:10,
    marginBottom:20,
  },
  button:{

    backgroundColor:'#11b321',
    width:'100%',
    height:40,
    alignItems:'center',
    justifyContent :'center',
  }
});