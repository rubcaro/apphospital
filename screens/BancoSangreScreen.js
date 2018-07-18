import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  NativeModules,
  LayoutAnimation,
  TouchableNativeFeedback,
  Linking
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import IconFA from "react-native-vector-icons/FontAwesome";
import Communications from "react-native-communications";

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

const customLinearLayout = {
  duration: 200,
  create: {
    type: LayoutAnimation.Types.linear,
    property: LayoutAnimation.Properties.scaleXY
  },
  update: {
    type: LayoutAnimation.Types.linear
  }
};

export default class BancoSangreScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Banco de Sangre",
      header: navigation.getParam("header", ""),
      headerStyle: {
        backgroundColor: "#BE1522"
      },
      headerLeft: (
        <TouchableNativeFeedback
          onPress={() => navigation.navigate("Home")}
          background={TouchableNativeFeedback.SelectableBackground()}
          useForeground={true}
        >
          <Icon
            style={{ color: "white", fontSize: 26, marginLeft: 15 }}
            name="arrow-back"
          />
        </TouchableNativeFeedback>
      )
    };
  };

  constructor() {
    super();
    this.state = {
      showMore: false
    };
  }

  render() {
    if (this.state.showMore) {
      return (
        <ScrollView style={{ backgroundColor: "white" }}>
          <View style={styles.screenTitle}>
            <Text style={styles.screenTitleText}>
              ¿Por qué es tan importante donar sangre?
            </Text>
          </View>
          <Text style={styles.screenRespond}>
            Porque sin sangre no hay vida. La sangre es una sustancia líquida
            compuesta por plasma, glóbulos rojos, glóbulos blancos y plaquetas,
            que tiene por función contribuir en el transporte de oxígeno,
            combatir infecciones, evitar hemorragias, entre otros.
          </Text>
          <View style={styles.screenTitle}>
            <Text style={styles.screenTitleText}>
              ¿Por qué debemos donar sangre al menos dos veces al año?
            </Text>
          </View>
          <Text style={styles.screenRespond}>
            La sangre no se puede fabricar, sólo se puede obtener de usted. Es
            imprescindible para operaciones y urgencias. La sangre caduca y sólo
            puede ser almacenada por un tiempo definido.
          </Text>
          <View style={styles.screenTitle}>
            <Text style={styles.screenTitleText}>
              ¿Quienes pueden ser donantes de sangre?
            </Text>
          </View>
          <Text style={styles.screenRespond}>
            La donación de sangre es un acto voluntario y altruista que
            cualquier persona, que cumpla con los siguientes requisitos, puede
            realizar: Tener entre 18 y 60 años de edad. Pesar sobre 55 kg. Gozar
            de buena salud.
          </Text>
          <View style={styles.screenTitle}>
            <Text style={styles.screenTitleText}>Sin riesgos</Text>
          </View>
          <Text style={styles.screenRespond}>
            Donar no supone riesgo alguno para el donante. La cantidad de sangre
            que se extrae corresponde a un máximo del 10% del volumen sanguíneo
            total de la persona, lo que equivale aproximadamente a 450 cc, y se
            hace con instrumentos estériles. Lo anterior hace de la donación un
            acto seguro y sencillo, pero de gran trascendencia: SALVA VIDAS.
          </Text>
          <View style={styles.screenTitle}>
            <Text style={styles.screenTitleText}>La sangre se analiza</Text>
          </View>
          <Text style={styles.screenRespond}>
            Toda la sangre se analiza para descartar cualquier posibilidad de
            contagio de aquellas enfermedades que la utilizan como vía de
            transmisión. Además se estudia el grupo sanguíneo y otras
            determinaciones. Ante cualquier alteración que se presente, la
            sangre es eliminada y se informa al donante. Toda la sangre se
            procesa, obteniéndose glóbulos rojos, plasma, plaquetas entre otros,
            por lo que con cada donante se pueden salvar hasta cuatro vidas.
          </Text>
          <View style={styles.screenTitle}>
            <Text style={styles.screenTitleText}>Destino de la sangre</Text>
          </View>
          <Text style={styles.screenRespond}>
            Una vez estudiada la sangre ésta queda a disposición del hospital.
            Su uso es una necesidad cotidiana no sólo en los casos de urgencia,
            sino en la mayoría de las intervenciones quirúrgicas y tratamiento
            de enfermedades. Por ello es fundamental la colaboración de los
            donantes voluntarios.
          </Text>
          <TouchableOpacity
            onPress={() => {
              this.setState({ showMore: !this.state.showMore });
              this.props.navigation.setParams({ header: "" });
              LayoutAnimation.configureNext(customLinearLayout);
            }}
          >
            <View style={styles.button}>
              <Text style={styles.buttonText}>VOLVER</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      );
    }
    return (
      <ScrollView style={styles.container}>
        <View style={styles.contactContainer}>
          <Text style={styles.subtitle}>Horarios de atención</Text>
          <View style={styles.horario}>
            <Text style={styles.days}>Lunes a Jueves</Text>
            <Text style={styles.horary}>08:00 a 16:30</Text>
          </View>
          <View style={styles.horario}>
            <Text style={styles.days}>Viernes</Text>
            <Text style={styles.horary}>08:00 a 15:30</Text>
          </View>
            <TouchableOpacity
              onPress={() => Communications.phonecall("612293425", true)}
            >
          <View style={styles.telefonoContainer}>
            <Text style={styles.subtitleTel}>Teléfono</Text>
            <Icon name="phone" style={styles.icon} />
              <Text style={{ flex: 1, fontSize: 16 }}>61 2 293425</Text>
          </View>
            </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                "https://www.facebook.com/people/Banco-De-Sangre-Hospital-Cl%C3%ADnico-Magallanes/100006831528288"
              ).catch(err => console.error("An error occurred", err))
            }
          >
            <View style={{ flexDirection: "row" }}>
              <IconFA
                name="facebook-square"
                style={{ flex: 1, color: "#282280", fontSize: 25 }}
              />
              <Text style={{ flex: 4, fontSize: 16 }}>Banco de Sangre HCM</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>REQUISITOS MÍNIMOS</Text>
        <View style={styles.requisitosContainer}>
          <View style={styles.requisito}>
            <Image
              style={styles.requisitoImg}
              source={require("./../assets/img/banco-sangre/bs1.png")}
            />
            <Text style={styles.requisitoText}>18 a 60 años</Text>
          </View>
          <View style={styles.requisito}>
            <Image
              style={styles.requisitoImg}
              source={require("./../assets/img/banco-sangre/bs2.png")}
            />
            <Text style={styles.requisitoText}>
              Presentar cédula de identidad
            </Text>
          </View>
          <View style={styles.requisito}>
            <Image
              style={styles.requisitoImg}
              source={require("./../assets/img/banco-sangre/bs3.png")}
            />
            <Text style={styles.requisitoText}>Nunca acudir en ayunas</Text>
          </View>
          <View style={styles.requisito}>
            <Image
              style={styles.requisitoImg}
              source={require("./../assets/img/banco-sangre/bs4.png")}
            />
            <Text style={styles.requisitoText}>
              Tener un peso mínimo de 50 kg.
            </Text>
          </View>
          <View style={styles.requisito}>
            <Image
              style={styles.requisitoImg}
              source={require("./../assets/img/banco-sangre/bs5.png")}
            />
            <Text style={styles.requisitoText}>
              Haber dormido al menos 5 horas
            </Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            this.setState({ showMore: !this.state.showMore });
            this.props.navigation.setParams({ header: null });
            LayoutAnimation.configureNext(customLinearLayout);
          }}
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>VER MÁS</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: "100%"
  },
  contactContainer: {
    marginLeft: 30,
    marginTop: 30
  },
  subtitle: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 20
  },
  horario: {
    flexDirection: "row",
    marginBottom: 10
  },
  days: {
    flex: 1,
    fontSize: 16
  },
  horary: {
    flex: 1,
    fontSize: 16
  },
  telefonoContainer: {
    flexDirection: "row",
    marginTop: 15
  },
  subtitleTel: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 20,
    flex: 1
  },
  icon: {
    fontSize: 25,
    marginRight: 10,
    color: "#6DC8E3"
  },
  title: {
    backgroundColor: "#BE1522",
    color: "white",
    textAlign: "center",
    fontSize: 16,
    paddingVertical: 10,
    fontWeight: "bold",
    marginVertical: 30
  },
  requisito: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20,
    marginBottom: 10
  },
  requisitoImg: {
    height: 70,
    width: 70,
    marginRight: 20
  },
  requisitoText: {
    fontSize: 20
    // paddingRight: 20
    // flex: 2
  },
  requisitosContainer: {
    marginRight: 50
  },
  button: {
    backgroundColor: "#BE1522",
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 20,
    width: 160,
    alignItems: "center",
    marginTop: 10,
    marginBottom: 30,
    alignSelf: "center"
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
    textAlign: "center"
  },
  // SCREEN
  screenTitle: {
    backgroundColor: "#BE1522",
    paddingVertical: 8,
    paddingHorizontal: 15
  },
  screenTitleText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center"
  },
  screenRespond: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 19
  }
});
