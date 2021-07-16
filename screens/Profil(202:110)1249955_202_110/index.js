import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@modules"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c473/1989/884f04d7ff6954a9360b3d48d1876144"
        }}
        style={styles.ImageBackground_202_111}
      />
      <View style={styles.View_190_131}>
        <View style={styles.View_190_132} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/32dd/f79f/d5b9001fc13b50a7a8a3597541a594c7"
          }}
          style={styles.ImageBackground_190_133}
        />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b3a6/38a4/bf319fec0990d74b632d6843e2c9106b"
          }}
          style={styles.TouchableOpacity_190_134}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("1_4"))
          }
        />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5358/a49e/33aa6554be2159e2ff67683a924d017b"
          }}
          style={styles.TouchableOpacity_190_135}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("20_53"))
          }
        />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/622c/5782/684400b1232db44ea1e7aeaa45e5b9b4"
          }}
          style={styles.TouchableOpacity_190_136}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("144_438"))
          }
        />
      </View>
      <View style={styles.View_202_114} />
      <View style={styles.View_202_115}>
        <Text style={styles.Text_202_115}>Užívateľské meno</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/79e0/bee3/6a19b92302f586027337151fa253613e"
        }}
        style={styles.ImageBackground_202_116}
      />
      <View style={styles.View_202_117}>
        <View style={styles.View_202_118} />
        <View style={styles.View_202_119}>
          <View style={styles.View_202_120} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d56e/8bf5/d38aa0486ff0e86901e3cfaab704c0d1"
            }}
            style={styles.ImageBackground_202_121}
          />
          <View style={styles.View_202_122} />
        </View>
        <View style={styles.View_202_123}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c49/5d02/4835e02c8f72d5445b5e30627029d54d"
            }}
            style={styles.ImageBackground_202_124}
          />
        </View>
        <View style={styles.View_202_128}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ba9b/f01a/5f53fb5d12a7c0a65aa45800410cefcb"
            }}
            style={styles.ImageBackground_202_129}
          />
        </View>
        <View style={styles.View_202_134}>
          <Text style={styles.Text_202_134}>9:27</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("100%") },
  ImageBackground_202_111: {
    width: wp("10.555555555555555%"),
    height: hp("5.9375%"),
    top: hp("33.125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.83333333333333%")
  },
  View_190_131: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("9.53125%"),
    minHeight: hp("9.53125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("90.46875%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_190_132: {
    width: wp("100%"),
    height: hp("9.53125%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_190_133: {
    width: wp("8.333333333333332%"),
    height: hp("4.6875%"),
    top: hp("2.1875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.88888888888889%")
  },
  TouchableOpacity_190_134: {
    width: wp("8.333333333333332%"),
    height: hp("4.6875%"),
    top: hp("2.1875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.38888888888889%")
  },
  TouchableOpacity_190_135: {
    width: wp("8.333333333333332%"),
    height: hp("4.6875%"),
    top: hp("2.1875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.88888888888889%")
  },
  TouchableOpacity_190_136: {
    width: wp("8.333333333333332%"),
    height: hp("4.6875%"),
    top: hp("2.1875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.388888888888886%")
  },
  View_202_114: {
    width: wp("51.66666666666667%"),
    minWidth: wp("51.66666666666667%"),
    height: hp("6.71875%"),
    minHeight: hp("6.71875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.166666666666668%"),
    top: hp("80.15625%"),
    backgroundColor: "rgba(237, 200, 255, 1)",
    borderTopLeftRadius: 44,
    borderTopRightRadius: 44,
    borderBottomLeftRadius: 44,
    borderBottomRightRadius: 44
  },
  View_202_115: {
    width: wp("48.61111111111111%"),
    minWidth: wp("48.61111111111111%"),
    minHeight: hp("4.21875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.833333333333333%"),
    top: hp("34.84375%"),
    justifyContent: "center"
  },
  Text_202_115: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5151515603065491,
    textTransform: "none"
  },
  ImageBackground_202_116: {
    width: wp("100%"),
    height: hp("31.54205560684204%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_202_117: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_202_118: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(207, 205, 205, 1)",
    opacity: 0.49000000953674316
  },
  View_202_119: {
    width: wp("5.818033748202854%"),
    minWidth: wp("5.818033748202854%"),
    height: hp("1.6363219916820528%"),
    minHeight: hp("1.6363219916820528%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88.34038628472223%"),
    top: hp("1.855125427246094%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_202_120: {
    width: wp("5.11986944410536%"),
    height: hp("1.545415073633194%"),
    top: hp("0.0453948974609375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 0.8727049827575684
  },
  ImageBackground_202_121: {
    width: wp("0.310295754008823%"),
    height: hp("0.5454406887292862%"),
    top: hp("0.545387268066406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.352579752604157%")
  },
  View_202_122: {
    width: wp("4.188984500037299%"),
    height: hp("0.9999746829271317%"),
    top: hp("0.31810760498046853%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.46542697482638573%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.8999999761581421
  },
  View_202_123: {
    width: wp("4.887144300672743%"),
    height: hp("2.045401483774185%"),
    top: hp("1.7187500000000002%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.9888916015625%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_202_124: {
    width: wp("3.5683915350172257%"),
    height: hp("1.499989777803421%"),
    top: hp("0.18177032470703125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6205919053819429%")
  },
  View_202_128: {
    width: wp("4.188984500037299%"),
    minWidth: wp("4.188984500037299%"),
    height: hp("1.6363219916820528%"),
    minHeight: hp("1.6363219916820528%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.33333333333333%"),
    top: hp("1.855125427246094%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_202_129: {
    width: wp("3.9562487602233887%"),
    height: hp("1.4545528590679169%"),
    top: hp("0.0909042358398433%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1551310221354214%")
  },
  View_202_134: {
    width: wp("9.444444444444445%"),
    minWidth: wp("9.444444444444445%"),
    minHeight: hp("2.03125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555555%"),
    top: hp("1.5625%"),
    justifyContent: "center"
  },
  Text_202_134: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.4848484396934509,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
