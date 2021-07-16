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
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4b72/7972/84f0b7e9ba1e6b011b64a4db8bcf8d19"
        }}
        style={styles.ImageBackground_174_102}
      />
      <View style={styles.View_129_129}>
        <View style={styles.View_129_130} />
        <View style={styles.View_129_131}>
          <View style={styles.View_129_132} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d56e/8bf5/d38aa0486ff0e86901e3cfaab704c0d1"
            }}
            style={styles.ImageBackground_129_133}
          />
          <View style={styles.View_129_134} />
        </View>
        <View style={styles.View_129_135}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c49/5d02/4835e02c8f72d5445b5e30627029d54d"
            }}
            style={styles.ImageBackground_129_136}
          />
        </View>
        <View style={styles.View_129_140}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ba9b/f01a/5f53fb5d12a7c0a65aa45800410cefcb"
            }}
            style={styles.ImageBackground_129_141}
          />
        </View>
        <View style={styles.View_131_147}>
          <Text style={styles.Text_131_147}>9:27</Text>
        </View>
      </View>
      <View style={styles.View_1_189}>
        <View style={styles.View_1_65}>
          <Text style={styles.Text_1_65}>Fluffily</Text>
        </View>
        <View style={styles.View_1_66}>
          <Text style={styles.Text_1_66}>Brána do sveta fantázie</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(237, 200, 255, 1)" },
  View_2: { height: hp("100%") },
  ImageBackground_174_102: {
    width: wp("33.33333333333333%"),
    minWidth: wp("33.33333333333333%"),
    height: hp("23.516948223114014%"),
    minHeight: hp("23.516948223114014%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.33333333333333%"),
    top: hp("50.11651992797852%"),
    resizeMode: "cover"
  },
  View_129_129: {
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
  View_129_130: {
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
  View_129_131: {
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
  View_129_132: {
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
  ImageBackground_129_133: {
    width: wp("0.310295754008823%"),
    height: hp("0.5454406887292862%"),
    top: hp("0.545387268066406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.352579752604157%")
  },
  View_129_134: {
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
  View_129_135: {
    width: wp("4.887148009406196%"),
    height: hp("2.0454025268554688%"),
    top: hp("1.7187500000000002%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.98773871527779%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_129_136: {
    width: wp("3.568394449022081%"),
    height: hp("1.4999839663505554%"),
    top: hp("0.18177032470703125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6205919053819287%")
  },
  View_129_140: {
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
  ImageBackground_129_141: {
    width: wp("3.9562487602233887%"),
    height: hp("1.4545528590679169%"),
    top: hp("0.0909042358398433%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1551310221354214%")
  },
  View_131_147: {
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
  Text_131_147: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.4848484396934509,
    textTransform: "none"
  },
  View_1_189: {
    width: wp("50%"),
    minWidth: wp("50%"),
    height: hp("11.79916501045227%"),
    minHeight: hp("11.79916501045227%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("34.670677185058594%")
  },
  View_1_65: {
    width: wp("57.61759016248915%"),
    minWidth: wp("57.61759016248915%"),
    minHeight: hp("15.16719102859497%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2.8839450412326393%"),
    top: hp("-3.0448913574218714%"),
    justifyContent: "flex-start"
  },
  Text_1_65: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 58.568870544433594,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.34059658646583557,
    textTransform: "none"
  },
  View_1_66: {
    width: wp("40.020103454589844%"),
    minWidth: wp("40.020103454589844%"),
    minHeight: hp("3.0334389209747314%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.6133015950520821%"),
    top: hp("9.088859558105469%"),
    justifyContent: "flex-start"
  },
  Text_1_66: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11.30505657196045,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.8514915108680725,
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
