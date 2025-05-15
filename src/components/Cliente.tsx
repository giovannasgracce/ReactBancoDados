import { PressableProps,Pressable,StyleSheet,Text} from 'react-native'

type Props = PressableProps & {
    data:{
        id: string
        nome: string
        telefone:string
        endereco:string
    }
}

export function Cliente({data, ...rest}: Props){
    return(
        <Pressable style={styles.fundo} {...rest}>
            <Text style={styles.texto} >
                {data.id} - {data.nome} - {data.telefone} - {data.endereco}
            </Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({  
    fundo:{
        backgroundColor:"#cecece",
        padding:30,
        borderRadius:5,
        gap:5,
        marginTop:10,
    },
    texto:{
        flex:1,
    },
});