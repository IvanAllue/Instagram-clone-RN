import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Avatar } from 'react-native-elements';

export default class Notificaciones extends Component {
    async componentWillMount(){
        let diferencia = horaActual - this.props.item.fecha

        let hace
        if (diferencia / 1000 < 60){
            await this.setState({hace: ( Math.floor( diferencia) / 1000 + ' s').toString()})
        }else{
            diferencia = diferencia/ 1000
            if (diferencia / 60 < 60){
                await this.setState({hace: ( Math.floor(diferencia / 60) + ' min').toString()})
            }else{
                diferencia = diferencia/60
                if (diferencia/60  < 24){
                    hace = ( Math.floor(diferencia/ 60)  + ' h').toString()
                    
                    await this.setState({hace:  ( Math.floor(diferencia/ 60)  + ' h').toString()})

                }else{
                    diferencia = diferenca /24
                    if (diferencia < 7){
                        await this.setState({hace:  (Math.floor(diferencia)  + ' d').toString()})
                    }else{
                        diferencia = diferencia/7
                        await this.setState({hace:  (Math.floor(diferencia)  + ' sem').toString()})

                    }
                }
            }
        }
    }
    constructor(props) {
        super(props);
        this.state = {
            hace: null
        };
        //console.log(this.props);
        horaActual = new Date
        
       
        

    }

    render() {
        
        if (this.props.item.tipo == 'seguir') {
            return (
                <View style={{ height: 60, flexDirection: "row", marginTop: 5 }}>
                    <View style={{ flex: 8, marginLeft: 10 }}>
                    {this.props.item.usuario == null ?
                        <Text>Has comenzado a seguir a <Text style={{ fontWeight: "bold" }}>{this.props.item.objeto.usuario}</Text>. <Text style={{color: '#808080'}}> {this.state.hace}</Text></Text>
                   :
                   <Text><Text style={{ fontWeight: "bold" }}>{this.props.item.usuario.usuario}</Text> ha comenzado a seguir a <Text style={{ fontWeight: "bold" }}>{this.props.item.objeto.usuario}</Text>. <Text style={{color: '#808080'}}> {this.state.hace}</Text></Text>
                    }
                    </View>
                    <View style={{ flex: 2, justifyContent: "center", alignItems: "center"}}>
                        <Avatar
                            size={50}
                            rounded
                            source={{
                                uri: this.props.item.objeto.fotoPerfil
                            }}
                        />
                    </View>

                </View>
            );
        } else if (this.props.item.tipo == 'like') {
            return (
                <View style={{ height: 60, flexDirection: "row", marginTop: 5 }}>
                    <View style={{ flex: 8, marginLeft: 10 }}>
                    {this.props.item.usuario == null ?
                    <Text>Te ha gustado una publicación de <Text style={{ fontWeight: "bold" }}>{this.props.item.autorPublicacion.usuario}</Text>. <Text style={{color: '#808080'}}> {this.state.hace}</Text></Text>
                    :
                    <Text>A <Text style={{ fontWeight: "bold" }}>{this.props.item.usuario.usuario}</Text> le ha gustado una publicación de <Text style={{ fontWeight: "bold" }}>{this.props.item.autorPublicacion.usuario}</Text>. <Text style={{color: '#808080'}}> {this.state.hace}</Text></Text>

                    }
                    </View>
                    <View style={{ flex: 2, justifyContent: "center", alignItems: "center"}}>
                    <Image style={{ width: 59, height: 50 }}  source={{ uri: this.props.item.objeto.url }}/>
                      
                    </View>
                </View>
            )
        }

    }
}
