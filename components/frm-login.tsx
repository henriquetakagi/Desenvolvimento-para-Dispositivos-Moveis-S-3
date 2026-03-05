import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

import { useState } from 'react';
import Toast from "react-native-toast-message"
export default function Login(){
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  function validarLogin(){
    alert("So alegria");
    if (usuario=="admin"){
      Toast.show({
        type:"success",
        text1: "Sucesso",
        text2 :"Login efetuado com sucesso"
      })
    }else{
      Toast.show({
        type:"error",
        text1: "Erro!",
        text2 :"Usuario ou Senha invalidos"
      })
    }
  }
  return(
    <View style={styles.container}>
      <Text style={styles.title}>Área Restrita</Text>
      <TextInput 
        style={styles.input}
        placeholder="Informe seu Usuario"
        value={usuario}
        onChangeText={setUsuario}
      />
      <TextInput 
          style={styles.input}
          placeholder="Informe sua Senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
      />
      <Toast/>
      <TouchableOpacity style={styles.button} onPress={validarLogin}>
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