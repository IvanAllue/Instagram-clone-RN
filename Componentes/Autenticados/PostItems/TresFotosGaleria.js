import React, { PureComponent } from 'react';
import { View, Text, Dimensions, Image, TouchableHighlight } from 'react-native';

var width = Dimensions.get('window').width;

export default class PostProfile extends PureComponent {
    async componentWillMount() {
        if (this.props.item[2] != null && this.props.item[2].publicaciones != undefined) {
            if (this.props.usuario == null) {
                await this.setState({ usuarioCero: this.props.item[0].usuario })
                await this.setState({ usuarioUno: this.props.item[1].usuario })
                await this.setState({ usuarioDos: this.props.item[2].usuario })
            } else {
                await this.setState({ usuarioCero: this.props.usuario })
                await this.setState({ usuarioUno: this.props.usuario })
                await this.setState({ usuarioDos: this.props.usuario })
            }
        } else if (this.props.item[1] != null && this.props.item[1].publicaciones != undefined) {
            if (this.props.usuario == null) {
                await this.setState({ usuarioCero: this.props.item[0].usuario })
                await this.setState({ usuarioUno: this.props.item[1].usuario })
            } else {
                await this.setState({ usuarioCero: this.props.usuario })
                await this.setState({ usuarioUno: this.props.usuario })
            }
        } else {
            if (this.props.usuario == null) {
                await this.setState({ usuarioCero: this.props.item[0].usuario })
            } else {
                await this.setState({ usuarioCero: this.props.usuario })
            }
        }

        console.log(this.state.usuarioCero.usuario);

    }

    constructor(props) {
        super(props);
        this.state = {
            usuarioCero: null,
            usuarioUno: null,
            usuarioDos: null
        };





    }

    render() {



        if (this.props.item[2] != null && this.props.item[2].publicaciones != undefined) {
            return (
                <View style={{ height: width * 0.3, flexDirection: "row", marginBottom: 3, justifyContent: "space-between" }}>
                    <TouchableHighlight onPress={() => { this.props.navigation.navigate('PostProfile', { imagen: this.props.item[0].publicaciones, user: this.state.usuarioCero, editor: this.props.editor, idPost: this.props.item[0].idPublicacion }) }}>
                        <Image style={{ width: width * 0.33, height: width * 0.3 }} source={{ uri: this.props.item[0].publicaciones.url }} />
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => { this.props.navigation.navigate('PostProfile', { imagen: this.props.item[1].publicaciones, user: this.state.usuarioUno, editor: this.props.editor, idPost: this.props.item[1].idPublicacion }) }}>
                        <Image style={{ width: width * 0.33, height: width * 0.3 }} source={{ uri: this.props.item[1].publicaciones.url }} />
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => { this.props.navigation.navigate('PostProfile', { imagen: this.props.item[2].publicaciones, user: this.state.usuarioDos, editor: this.props.editor, idPost: this.props.item[2].idPublicacion }) }}>
                        <Image style={{ width: width * 0.33, height: width * 0.3 }} source={{ uri: this.props.item[2].publicaciones.url }} />
                    </TouchableHighlight>
                </View>
            );
        } else if (this.props.item[1] != null && this.props.item[1].publicaciones != undefined) {
            return (
                <View style={{ height: width * 0.3, flexDirection: "row", marginBottom: 3 }}>
                    <TouchableHighlight onPress={() => { this.props.navigation.navigate('PostProfile', { imagen: this.props.item[0].publicaciones, user: this.state.usuarioCero, editor: this.props.editor, idPost: this.props.item[0].idPublicacion }) }}>
                        <Image style={{ width: width * 0.33, height: width * 0.3, marginRight: 3 }} source={{ uri: this.props.item[0].publicaciones.url }} />
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => { this.props.navigation.navigate('PostProfile', { imagen: this.props.item[1].publicaciones, user: this.state.usuarioUno, editor: this.props.editor, idPost: this.props.item[1].idPublicacion }) }}>
                        <Image style={{ width: width * 0.33, height: width * 0.3 }} source={{ uri: this.props.item[1].publicaciones.url }} />
                    </TouchableHighlight>
                </View>
            );
        } else {
            return (
                <View style={{ height: width * 0.3, flexDirection: "row", marginBottom: 3 }}>
                    <TouchableHighlight onPress={() => { this.props.navigation.navigate('PostProfile', { imagen: this.props.item[0].publicaciones, user: this.state.usuarioCero, editor: this.props.editor, idPost: this.props.item[0].idPublicacion }) }}>
                        <Image style={{ width: width * 0.33, height: width * 0.3, }} source={{ uri: this.props.item[0].publicaciones.url }} />
                    </TouchableHighlight>
                </View>
            );

        }



    }
}
