import { View, Button, StyleSheet, Alert} from "react-native"
import {Campo} from "@/components/Campo"
import {useState,useEffect} from 'react'
import { ClienteDataBase, useClienteDataBase } from "@/database/useClienteDataBase"
import { useNavigation } from "expo-router" 
import { useRoute } from '@react-navigation/native'
 
export default function Atualizar(){
    const [id, setId] = useState("")
    const [nome, setNome] = useState("")
    const [telefone, setTelefone] = useState("")
    const [endereco, setEndereco] = useState("")
    const [cliente, setCliente] = useState<ClienteDataBase[]>()
    const ClienteDataBase = useClienteDataBase();
    const navigation = useNavigation();
    const route = useRoute();
    const {item} = route.params;
   

  useEffect(()=> {//trazer todos os dados dos campos 
        if(item){
            setId(item.id.toString());
            setNome(item.nome);
            setTelefone(item.telefone);
            setEndereco(item.endereco);
        }
  },[]);

  //metodo atualizar

  async function atualizar(){
        try {
            await ClienteDataBase.atualizar({
                id: Number(id),
                nome,
                telefone,
                endereco
            });

            Alert.alert(//para fazer a mensagem e os botões 
                "Sucesso!",//titulo da mensagem 
                "Dados do cliente atualizados com sucesso",//mensagem 
                [//criar botão
                    {//botão ok
                        text:"OK",
                        onPress:() => navigation.navigate("Consultar"),
                    },
                ],
                {cancelable: false}//cancelou obotao cancelar
            );
        } catch (error) {
            console.log(error)
        }
   }//fim do atualizar

    async function salvarAtulizacao( ){
        try {
            if(id){
                await atualizar()
            }
        } catch (error) {
            console.log(error)
        }
        setId("");
        setNome("");
        setTelefone("");
        setEndereco("");
    }// fim d metodo

    return (
        <View style={styles.container}>
            <Campo placeholder="Nome" onChangeText={setNome} value={nome}/>
            <Campo placeholder="Telefone"onChangeText={setTelefone} value={telefone} />
            <Campo placeholder="Endereço" onChangeText={setEndereco} value={endereco}/>
            <Button title="Atualizar" onPress={salvarAtulizacao}/>
        </View>
    );
}  
 
const styles = StyleSheet.create({
        container: {
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            backgroundColor: '#898989',
            alignItems: "center",
        },
    }
);