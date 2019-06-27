import React, { Component } from 'react'
import { Text, View, StyleSheet, Button, FlatList, ProgressBarAndroid } from 'react-native'
import { connect } from 'react-redux'
import Notificaciones from './FollowItems/Notificaciones'
class Follow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ruta: null,
      followAll: null,
      followTu: null
    };
  }
  async componentWillMount() {
    if (this.props.navigation.state.key == 'Tu') {
      this.props.getNotificacionesTu()

    } else {
      this.props.getNotificaciones()

    }




  }

  async componentDidUpdate() {
    if (this.props.followAll != null && this.state.followAll == null) {
      await this.setState({ followAll: this.props.followAll })

    }

    if (this.props.followTu != null && this.state.followTu == null) {
      await this.setState({ followTu: this.props.followTu })
      //console.log(this.state.followTu);

    }



  }
  render() {
    const { navigation } = this.props;
    if (this.props.navigation.state.key == 'Tu') {
      return (
        <View style={styles.container}>
          {this.props.followTu != null ?

            <FlatList data={this.state.followTu}
              refreshing={false}
              onRefresh={() => {
                this.props.getNotificacionesTu()
              }}
              renderItem={({ item, index }) => {
                return (
                  <Notificaciones item={item} />
                )

              }
              }
            />
            :
            <ProgressBarAndroid />
          }

        </View>
      )

    } else {
      return (
        <View style={styles.container}>
          {this.props.followAll != null ?

            <FlatList data={this.state.followAll}
              refreshing={false}
              onRefresh={() => {
                this.props.getNotificaciones()
              }}
              renderItem={({ item, index }) => {
                return (
                  <Notificaciones item={item} />
                )
              }
              }
            />
            :
            <ProgressBarAndroid />
          }
        </View>
      )

    }


  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});


const mapStateToProps = (state, ownProps) => {
  return {
    followTu: state.reducerDescargarNotificacionesFollowTu,
    followAll: state.reducerDescargarNotificacionesFollowAll
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getNotificacionesTu: () => {
      dispatch({ type: 'DESCARGAR_NOTIFICACIONES_FOLLOW_TU' })
    },
    getNotificaciones: () => {
      dispatch({ type: 'DESCARGAR_NOTIFICACIONES_FOLLOW' })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Follow)