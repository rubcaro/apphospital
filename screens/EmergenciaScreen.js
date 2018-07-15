import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  NativeModules,
  LayoutAnimation
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

export default class EmergenciaScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Emergencia Hospitalaria",
      header: navigation.getParam("header", "")
    };
  };

  constructor() {
    super();
    this.state = {
      show: ''
    };
  }

  render() {
    if (this.state.show === '1') {
      return (
        <View style={styles.screenContainer}>
          <View style={styles.screenTitle}>
            <Text style={styles.screenTitleText}>ESI 1 GRAVE</Text>
          </View>
          <View style={styles.screenReviewContainer}>
            <Text style={styles.screenReviewText}>
              <Text style={{ fontWeight: "bold" }}>ATENCIÓN INMEDIATA</Text> y
              no pueden esperar, ya que se encuentra en riesgo vital
            </Text>
          </View>
          <Image
            style={styles.screenImage}
            source={require("./../assets/img/emergencias/1.png")}
          />
          <View style={styles.screenRecomendacionesContainer}>
            <Text style={styles.screenSubtitle}>Recomendaciones:</Text>
            <View style={styles.screenRecomendacion}>
              <IconFA name="check" style={styles.screenTicket} />
              <Text style={styles.screenRecomendacionText}>
                Lorem ipsum solor sit amet consec
              </Text>
            </View>
            <View style={styles.screenRecomendacion}>
              <IconFA name="check" style={styles.screenTicket} />
              <Text style={styles.screenRecomendacionText}>
                Lorem ipsum solor sit amet consec
              </Text>
            </View>
            <View style={styles.screenRecomendacion}>
              <IconFA name="check" style={styles.screenTicket} />
              <Text style={styles.screenRecomendacionText}>
                Lorem ipsum solor sit amet consec
              </Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              this.setState({ show: '' });
              this.props.navigation.setParams({ header: "" });
              LayoutAnimation.configureNext(customLinearLayout);
            }}
          >
            <View style={styles.screenButton}>
              <IconFA name="arrow-left" style={styles.screenArrow} />
              <Text style={styles.screenButtonText}>VOLVER</Text>
            </View>
          </TouchableOpacity>
        </View>
      );
    }

    if (this.state.show === '2') {
      return (
        <View style={styles.screenContainer}>
          <View style={styles.screen2Title}>
            <Text style={styles.screenTitleText}>ESI 2 MEDIANA GRAVEDAD</Text>
          </View>
          <View style={styles.screen2ReviewContainer}>
            <Text style={styles.screenReviewText}>
              <Text style={{ fontWeight: "bold" }}>ATENCIÓN INMEDIATA</Text> y
              no pueden esperar, ya que se encuentra en riesgo vital
            </Text>
          </View>
          <Image
            style={styles.screenImage}
            source={require("./../assets/img/emergencias/2.png")}
          />
          <View style={styles.screenRecomendacionesContainer}>
            <Text style={styles.screenSubtitle}>Recomendaciones:</Text>
            <View style={styles.screenRecomendacion}>
              <IconFA name="check" style={styles.screenTicket} />
              <Text style={styles.screenRecomendacionText}>
                Lorem ipsum solor sit amet consec
              </Text>
            </View>
            <View style={styles.screenRecomendacion}>
              <IconFA name="check" style={styles.screenTicket} />
              <Text style={styles.screenRecomendacionText}>
                Lorem ipsum solor sit amet consec
              </Text>
            </View>
            <View style={styles.screenRecomendacion}>
              <IconFA name="check" style={styles.screenTicket} />
              <Text style={styles.screenRecomendacionText}>
                Lorem ipsum solor sit amet consec
              </Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              this.setState({ show: '' });
              this.props.navigation.setParams({ header: "" });
              LayoutAnimation.configureNext(customLinearLayout);
            }}
          >
            <View style={styles.screen2Button}>
              <IconFA name="arrow-left" style={styles.screenArrow} />
              <Text style={styles.screenButtonText}>VOLVER</Text>
            </View>
          </TouchableOpacity>
        </View>
      );
    }

    if (this.state.show === '3') {
      return (
        <View style={styles.screenContainer}>
          <View style={styles.screen3Title}>
            <Text style={styles.screenTitleText}>ESI 3 MENOS GRAVE</Text>
          </View>
          <View style={styles.screen3ReviewContainer}>
            <Text style={styles.screenReviewText}>
              <Text style={{ fontWeight: "bold" }}>ATENCIÓN INMEDIATA</Text> y
              no pueden esperar, ya que se encuentra en riesgo vital
            </Text>
          </View>
          <Image
            style={styles.screenImage}
            source={require("./../assets/img/emergencias/3.png")}
          />
          <View style={styles.screenRecomendacionesContainer}>
            <Text style={styles.screenSubtitle}>Recomendaciones:</Text>
            <View style={styles.screenRecomendacion}>
              <IconFA name="check" style={styles.screenTicket} />
              <Text style={styles.screenRecomendacionText}>
                Lorem ipsum solor sit amet consec
              </Text>
            </View>
            <View style={styles.screenRecomendacion}>
              <IconFA name="check" style={styles.screenTicket} />
              <Text style={styles.screenRecomendacionText}>
                Lorem ipsum solor sit amet consec
              </Text>
            </View>
            <View style={styles.screenRecomendacion}>
              <IconFA name="check" style={styles.screenTicket} />
              <Text style={styles.screenRecomendacionText}>
                Lorem ipsum solor sit amet consec
              </Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              this.setState({ show: '' });
              this.props.navigation.setParams({ header: "" });
              LayoutAnimation.configureNext(customLinearLayout);
            }}
          >
            <View style={styles.screen3Button}>
              <IconFA name="arrow-left" style={styles.screenArrow} />
              <Text style={styles.screenButtonText}>VOLVER</Text>
            </View>
          </TouchableOpacity>
        </View>
      );
    }

    if (this.state.show === '4') {
      return (
        <View style={styles.screenContainer}>
          <View style={styles.screen4Title}>
            <Text style={styles.screenTitleText}>ESI 4 LEVE</Text>
          </View>
          <View style={styles.screen4ReviewContainer}>
            <Text style={styles.screenReviewText}>
              <Text style={{ fontWeight: "bold" }}>ATENCIÓN INMEDIATA</Text> y
              no pueden esperar, ya que se encuentra en riesgo vital
            </Text>
          </View>
          <Image
            style={styles.screenImage}
            source={require("./../assets/img/emergencias/4.png")}
          />
          <View style={styles.screenRecomendacionesContainer}>
            <Text style={styles.screenSubtitle}>Recomendaciones:</Text>
            <View style={styles.screenRecomendacion}>
              <IconFA name="check" style={styles.screenTicket} />
              <Text style={styles.screenRecomendacionText}>
                Lorem ipsum solor sit amet consec
              </Text>
            </View>
            <View style={styles.screenRecomendacion}>
              <IconFA name="check" style={styles.screenTicket} />
              <Text style={styles.screenRecomendacionText}>
                Lorem ipsum solor sit amet consec
              </Text>
            </View>
            <View style={styles.screenRecomendacion}>
              <IconFA name="check" style={styles.screenTicket} />
              <Text style={styles.screenRecomendacionText}>
                Lorem ipsum solor sit amet consec
              </Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              this.setState({ show: '' });
              this.props.navigation.setParams({ header: "" });
              LayoutAnimation.configureNext(customLinearLayout);
            }}
          >
            <View style={styles.screen4Button}>
              <IconFA name="arrow-left" style={styles.screenArrow} />
              <Text style={styles.screenButtonText}>VOLVER</Text>
            </View>
          </TouchableOpacity>
        </View>
      );
    }

    if (this.state.show === '5') {
      return (
        <View style={styles.screenContainer}>
          <View style={styles.screen5Title}>
            <Text style={styles.screenTitleText}>ESI 5 ATENCIÓN GENERAL</Text>
          </View>
          <View style={styles.screen5ReviewContainer}>
            <Text style={styles.screenReviewText}>
              <Text style={{ fontWeight: "bold" }}>ATENCIÓN INMEDIATA</Text> y
              no pueden esperar, ya que se encuentra en riesgo vital
            </Text>
          </View>
          <Image
            style={styles.screenImage}
            source={require("./../assets/img/emergencias/4.png")}
          />
          <View style={styles.screenRecomendacionesContainer}>
            <Text style={styles.screenSubtitle}>Recomendaciones:</Text>
            <View style={styles.screenRecomendacion}>
              <IconFA name="check" style={styles.screenTicket} />
              <Text style={styles.screenRecomendacionText}>
                Lorem ipsum solor sit amet consec
              </Text>
            </View>
            <View style={styles.screenRecomendacion}>
              <IconFA name="check" style={styles.screenTicket} />
              <Text style={styles.screenRecomendacionText}>
                Lorem ipsum solor sit amet consec
              </Text>
            </View>
            <View style={styles.screenRecomendacion}>
              <IconFA name="check" style={styles.screenTicket} />
              <Text style={styles.screenRecomendacionText}>
                Lorem ipsum solor sit amet consec
              </Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              this.setState({ show: '' });
              this.props.navigation.setParams({ header: "" });
              LayoutAnimation.configureNext(customLinearLayout);
            }}
          >
            <View style={styles.screen5Button}>
              <IconFA name="arrow-left" style={styles.screenArrow} />
              <Text style={styles.screenButtonText}>VOLVER</Text>
            </View>
          </TouchableOpacity>
        </View>
      );
    }

    return (
      <View
        style={{
          backgroundColor: "white",
          justifyContent: "flex-start",
          height: "100%"
        }}
      >
        <View style={styles.phones}>
          <TouchableOpacity
            onPress={() => Communications.phonecall("612293295", true)}
            style={styles.phones}
          >
            <Text style={styles.subtitle}>Teléfono</Text>
            <Icon name="phone" style={styles.icon} />
            <Text style={styles.phoneNumber}>61 2 293295</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu
          massa a ante tincidunt volutpat. Nulla viverra, felis et tempor
          ultricies, magna turpis egestas velit, in aliquet metus est et risus.
          Donec ut faucibus arcu, non ullamcorper eros.
        </Text>
        <Text style={styles.title}>SISTEMA DE ATENCIÓN PRIORIZADO</Text>
        <TouchableOpacity
          onPress={() => {
            this.setState({ show: '1' });
            this.props.navigation.setParams({ header: null });
            LayoutAnimation.configureNext(customLinearLayout);
          }}
        >
          <View style={styles.esContainer}>
            <Image
              style={styles.es}
              source={require("./../assets/img/emergencias/es1.png")}
            />
            <Text style={styles.esText1}>GRAVE</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.setState({ show: '2' });
            this.props.navigation.setParams({ header: null });
            LayoutAnimation.configureNext(customLinearLayout);
          }}
        >
          <View style={styles.esContainer}>
            <Image
              style={styles.es}
              source={require("./../assets/img/emergencias/es2.png")}
            />
            <Text style={styles.esText2}>MEDIANA GRAVEDAD</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.setState({ show: '3' });
            this.props.navigation.setParams({ header: null });
            LayoutAnimation.configureNext(customLinearLayout);
          }}
        >
          <View style={styles.esContainer}>
            <Image
              style={styles.es}
              source={require("./../assets/img/emergencias/es3.png")}
            />
            <Text style={styles.esText3}>MENOS GRAVE</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.setState({ show: '4' });
            this.props.navigation.setParams({ header: null });
            LayoutAnimation.configureNext(customLinearLayout);
          }}
        >
          <View style={styles.esContainer}>
            <Image
              style={styles.es}
              source={require("./../assets/img/emergencias/es4.png")}
            />
            <Text style={styles.esText4}>LEVE</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.setState({ show: '5' });
            this.props.navigation.setParams({ header: null });
            LayoutAnimation.configureNext(customLinearLayout);
          }}
        >
          <View style={styles.esContainer}>
            <Image
              style={styles.es}
              source={require("./../assets/img/emergencias/es5.png")}
            />
            <Text style={styles.esText5}>ATENCIÓN GENERAL</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  phones: {
    flexDirection: "row",
    marginLeft: 10,
    marginTop: 5,
    alignItems: "center"
  },
  icon: {
    fontSize: 25,
    marginRight: 10,
    color: "#6DC8E3"
  },
  phoneNumber: {
    fontSize: 20,
    color: "#95989A"
  },
  subtitle: {
    fontSize: 18,
    color: "#95989A",
    marginLeft: 20,
    marginRight: 50,
    marginTop: 10,
    fontWeight: "bold"
  },
  paragraph: {
    color: "#707070",
    paddingHorizontal: 25,
    marginTop: 30,
    fontSize: 15
  },
  title: {
    backgroundColor: "#EDEEF0",
    color: "#707070",
    textAlign: "center",
    fontSize: 16,
    paddingVertical: 10,
    fontWeight: "bold",
    marginVertical: 30
  },
  es: {
    height: 40,
    marginLeft: 20,
    width: 60
  },
  esText1: {
    color: "white",
    backgroundColor: "#DE0E21",
    borderRadius: 20,
    flex: 1,
    textAlign: "center",
    fontWeight: "bold",
    paddingVertical: 10,
    marginLeft: 10,
    marginRight: 30,
    fontSize: 16
  },
  esContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10
  },
  esText2: {
    color: "white",
    backgroundColor: "#E76012",
    borderRadius: 20,
    flex: 1,
    textAlign: "center",
    fontWeight: "bold",
    paddingVertical: 10,
    marginLeft: 10,
    marginRight: 30,
    fontSize: 16
  },
  esText3: {
    color: "white",
    backgroundColor: "#F3A61E",
    borderRadius: 20,
    flex: 1,
    textAlign: "center",
    fontWeight: "bold",
    paddingVertical: 10,
    marginLeft: 10,
    marginRight: 30,
    fontSize: 16
  },
  esText4: {
    color: "white",
    backgroundColor: "#82B81D",
    borderRadius: 20,
    flex: 1,
    textAlign: "center",
    fontWeight: "bold",
    paddingVertical: 10,
    marginLeft: 10,
    marginRight: 30,
    fontSize: 16
  },
  esText5: {
    color: "white",
    backgroundColor: "#0F8F2F",
    borderRadius: 20,
    flex: 1,
    textAlign: "center",
    fontWeight: "bold",
    paddingVertical: 10,
    marginLeft: 10,
    marginRight: 30,
    fontSize: 16
  },
  // SCREENS 1
  screenContainer: {
    backgroundColor: "#EDEEF0",
    height: "100%"
  },
  screenTitle: {
    backgroundColor: "#DE0E21"
  },
  screenTitleText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 25,
    paddingVertical: 20
  },
  screenReviewContainer: {
    borderLeftWidth: 4,
    borderLeftColor: "#DE0E21",
    marginHorizontal: 50,
    paddingLeft: 10,
    marginTop: 30
  },
  screenReviewText: {
    fontSize: 18
  },
  screenImage: {
    height: 150,
    width: 200,
    alignSelf: "center",
    marginVertical: 30
  },
  screenRecomendacionesContainer: {
    marginHorizontal: 25
  },
  screenRecomendacion: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20
  },
  screenRecomendacionText: {
    fontSize: 15
  },
  screenTicket: {
    color: "#0F8F2F",
    fontSize: 19,
    marginRight: 20
  },
  screenSubtitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15
  },
  screenButton: {
    backgroundColor: "#DE0E21",
    paddingVertical: 5,
    paddingHorizontal: 20,
    flexDirection: "row",
    borderRadius: 20,
    width: 160,
    alignItems: "center",
    marginTop: 10,
    marginLeft: 25
  },
  screenButtonText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white"
  },
  screenArrow: {
    color: "white",
    fontSize: 20,
    marginRight: 15
  },
  // SCREEN 2
  screen2Title: {
    backgroundColor: "#E76012"
  },
  screen2ReviewContainer: {
    borderLeftWidth: 4,
    borderLeftColor: "#E76012",
    marginHorizontal: 50,
    paddingLeft: 10,
    marginTop: 30
  },
  screen2Button: {
    backgroundColor: "#E76012",
    paddingVertical: 5,
    paddingHorizontal: 20,
    flexDirection: "row",
    borderRadius: 20,
    width: 160,
    alignItems: "center",
    marginTop: 10,
    marginLeft: 25
  },
  // SCREEN 3
  screen3Title: {
    backgroundColor: "#F3A61E"
  },
  screen3ReviewContainer: {
    borderLeftWidth: 4,
    borderLeftColor: "#F3A61E",
    marginHorizontal: 50,
    paddingLeft: 10,
    marginTop: 30
  },
  screen3Button: {
    backgroundColor: "#F3A61E",
    paddingVertical: 5,
    paddingHorizontal: 20,
    flexDirection: "row",
    borderRadius: 20,
    width: 160,
    alignItems: "center",
    marginTop: 10,
    marginLeft: 25
  },
  // SCREEN 4
  screen4Title: {
    backgroundColor: "#82B81D"
  },
  screen4ReviewContainer: {
    borderLeftWidth: 4,
    borderLeftColor: "#82B81D",
    marginHorizontal: 50,
    paddingLeft: 10,
    marginTop: 30
  },
  screen4Button: {
    backgroundColor: "#82B81D",
    paddingVertical: 5,
    paddingHorizontal: 20,
    flexDirection: "row",
    borderRadius: 20,
    width: 160,
    alignItems: "center",
    marginTop: 10,
    marginLeft: 25
  },
  // SCREEN 5
  screen5Title: {
    backgroundColor: "#0F8F2F"
  },
  screen5ReviewContainer: {
    borderLeftWidth: 4,
    borderLeftColor: "#0F8F2F",
    marginHorizontal: 50,
    paddingLeft: 10,
    marginTop: 30
  },
  screen5Button: {
    backgroundColor: "#0F8F2F",
    paddingVertical: 5,
    paddingHorizontal: 20,
    flexDirection: "row",
    borderRadius: 20,
    width: 160,
    alignItems: "center",
    marginTop: 10,
    marginLeft: 25
  },
});
