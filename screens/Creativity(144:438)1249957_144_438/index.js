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
      <View style={styles.View_144_439}>
        <View style={styles.View_144_440}>
          <TouchableOpacity
            style={styles.TouchableOpacity_144_441}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("148_101"))
            }
          >
            <View style={styles.View_144_442} />
            <View style={styles.View_144_443}>
              <Text style={styles.Text_144_443}>
                Staňte sa aj Vy rozprávkarom!
              </Text>
            </View>
            <View style={styles.View_144_444}>
              <Text style={styles.Text_144_444}>
                Aj Vy máte možnosť pripojiť sa k ostatným rozprávkarom a napísať
                vlastný príbeh pre deti. Lorem ipsum dolor sit amet,
                consectetur...
              </Text>
            </View>
          </TouchableOpacity>
          <View style={styles.View_144_445}>
            <View style={styles.View_144_446} />
            <View style={styles.View_144_447}>
              <Text style={styles.Text_144_447}>Plaťte menej</Text>
            </View>
            <View style={styles.View_144_448}>
              <Text style={styles.Text_144_448}>
                Cheli by ste svojim deťom púšťať naše rozprávky, ale aplikácia
                Vám príde moc drahá? Existuje riešenie, kedy mesačne platíte
                menej a zároveň máte všetky výhody platenej verzie.
              </Text>
            </View>
          </View>
          <View style={styles.View_144_449}>
            <View style={styles.View_144_450} />
            <View style={styles.View_144_451}>
              <Text style={styles.Text_144_451}>
                Prečo čítať deťom rozprávky?
              </Text>
            </View>
            <View style={styles.View_144_452}>
              <Text style={styles.Text_144_452}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua...
              </Text>
            </View>
          </View>
          <View style={styles.View_144_453}>
            <View style={styles.View_144_454} />
            <View style={styles.View_144_455}>
              <Text style={styles.Text_144_455}>Keď čítajú súrodenci</Text>
            </View>
            <View style={styles.View_144_456}>
              <Text style={styles.Text_144_456}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua...
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_144_457}>
        <View style={styles.View_144_458} />
        <View style={styles.View_144_459}>
          <View style={styles.View_144_460} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d56e/8bf5/d38aa0486ff0e86901e3cfaab704c0d1"
            }}
            style={styles.ImageBackground_144_461}
          />
          <View style={styles.View_144_462} />
        </View>
        <View style={styles.View_144_463}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c49/5d02/4835e02c8f72d5445b5e30627029d54d"
            }}
            style={styles.ImageBackground_144_464}
          />
        </View>
        <View style={styles.View_144_468}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ba9b/f01a/5f53fb5d12a7c0a65aa45800410cefcb"
            }}
            style={styles.ImageBackground_144_469}
          />
        </View>
        <View style={styles.View_144_474}>
          <Text style={styles.Text_144_474}>9:27</Text>
        </View>
      </View>
      <View style={styles.View_144_475}>
        <View style={styles.View_144_476} />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ddb/a89d/ffa40ba6d571cecc353303fe760b8726"
          }}
          style={styles.TouchableOpacity_144_477}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("202_110"))
          }
        />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b3a6/38a4/bf319fec0990d74b632d6843e2c9106b"
          }}
          style={styles.TouchableOpacity_144_478}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("1_4"))
          }
        />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5358/a49e/33aa6554be2159e2ff67683a924d017b"
          }}
          style={styles.TouchableOpacity_144_479}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("20_53"))
          }
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1faf/9a15/26d21e2a71ec7771f87015fe06ef6af0"
          }}
          style={styles.ImageBackground_144_480}
        />
      </View>
      <View style={styles.View_190_458}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f78f/aac3/058d7a689bfb93ba3a629f201de0696f"
          }}
          style={styles.ImageBackground_190_459}
        />
        <View style={styles.View_190_460}>
          <View style={styles.View_190_461}>
            <View style={styles.View_I190_461_1_211}>
              <Text style={styles.Text_I190_461_1_211}>Fluffily</Text>
            </View>
          </View>
          <View style={styles.View_190_462}>
            <Text style={styles.Text_190_462}>Brána do sveta fantázie</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("100%") },
  View_144_439: {
    width: wp("88.61111111111111%"),
    minWidth: wp("88.61111111111111%"),
    height: hp("67.1875%"),
    minHeight: hp("67.1875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555555%"),
    top: hp("23.28125%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_144_440: {
    width: wp("88.61111111111111%"),
    minWidth: wp("88.61111111111111%"),
    height: hp("72.18751430511475%"),
    minHeight: hp("72.18751430511475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  TouchableOpacity_144_441: {
    width: wp("88.61111111111111%"),
    minWidth: wp("88.61111111111111%"),
    height: hp("16.40625%"),
    minHeight: hp("16.40625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_144_442: {
    width: wp("88.61111111111111%"),
    minWidth: wp("88.61111111111111%"),
    height: hp("16.40625%"),
    minHeight: hp("16.40625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(218, 218, 218, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_144_443: {
    width: wp("73.33333333333333%"),
    minWidth: wp("73.33333333333333%"),
    minHeight: hp("3.5937499999999996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8888888888888893%"),
    top: hp("2.1875%"),
    justifyContent: "flex-start"
  },
  Text_144_443: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.16666662693023682,
    textTransform: "none"
  },
  View_144_444: {
    width: wp("80.83333333333333%"),
    minWidth: wp("80.83333333333333%"),
    minHeight: hp("6.71875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8888888888888893%"),
    top: hp("7.3437500000000036%"),
    justifyContent: "flex-start"
  },
  Text_144_444: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16666662693023682,
    textTransform: "none"
  },
  View_144_445: {
    width: wp("88.61111111111111%"),
    minWidth: wp("88.61111111111111%"),
    height: hp("16.40625%"),
    minHeight: hp("16.40625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18.28125%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_144_446: {
    width: wp("88.61111111111111%"),
    minWidth: wp("88.61111111111111%"),
    height: hp("16.40625%"),
    minHeight: hp("16.40625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(218, 218, 218, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_144_447: {
    width: wp("31.11111111111111%"),
    minWidth: wp("31.11111111111111%"),
    minHeight: hp("3.5937499999999996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8888888888888893%"),
    top: hp("2.1875%"),
    justifyContent: "flex-start"
  },
  Text_144_447: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.16666662693023682,
    textTransform: "none"
  },
  View_144_448: {
    width: wp("80.83333333333333%"),
    minWidth: wp("80.83333333333333%"),
    minHeight: hp("9.6875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8888888888888893%"),
    top: hp("5.9375%"),
    justifyContent: "flex-start"
  },
  Text_144_448: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16666662693023682,
    textTransform: "none"
  },
  View_144_449: {
    width: wp("88.61111111111111%"),
    minWidth: wp("88.61111111111111%"),
    height: hp("16.40625%"),
    minHeight: hp("16.40625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("36.56249999999999%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_144_450: {
    width: wp("88.61111111111111%"),
    minWidth: wp("88.61111111111111%"),
    height: hp("16.40625%"),
    minHeight: hp("16.40625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(218, 218, 218, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_144_451: {
    width: wp("71.94444444444444%"),
    minWidth: wp("71.94444444444444%"),
    minHeight: hp("3.5937499999999996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8888888888888893%"),
    top: hp("2.187500000000014%"),
    justifyContent: "flex-start"
  },
  Text_144_451: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.16666662693023682,
    textTransform: "none"
  },
  View_144_452: {
    width: wp("80.83333333333333%"),
    minWidth: wp("80.83333333333333%"),
    minHeight: hp("6.71875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8888888888888893%"),
    top: hp("7.343750000000007%"),
    justifyContent: "flex-start"
  },
  Text_144_452: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16666662693023682,
    textTransform: "none"
  },
  View_144_453: {
    width: wp("88.61111111111111%"),
    minWidth: wp("88.61111111111111%"),
    height: hp("17.34375%"),
    minHeight: hp("17.34375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("54.84376907348633%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_144_454: {
    width: wp("88.61111111111111%"),
    minWidth: wp("88.61111111111111%"),
    height: hp("16.40625%"),
    minHeight: hp("16.40625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.000019073486328125%"),
    backgroundColor: "rgba(218, 218, 218, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_144_455: {
    width: wp("50%"),
    minWidth: wp("50%"),
    minHeight: hp("3.5937499999999996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8888888888888893%"),
    top: hp("2.187480926513672%"),
    justifyContent: "flex-start"
  },
  Text_144_455: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.16666662693023682,
    textTransform: "none"
  },
  View_144_456: {
    width: wp("80.83333333333333%"),
    minWidth: wp("80.83333333333333%"),
    minHeight: hp("6.71875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8888888888888893%"),
    top: hp("7.343730926513672%"),
    justifyContent: "flex-start"
  },
  Text_144_456: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16666662693023682,
    textTransform: "none"
  },
  View_144_457: {
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
  View_144_458: {
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
  View_144_459: {
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
  View_144_460: {
    width: wp("5.11986944410536%"),
    height: hp("1.545415073633194%"),
    top: hp("0.0453948974609375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.00001695421006786546%"),
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 0.8727049827575684
  },
  ImageBackground_144_461: {
    width: wp("0.310295754008823%"),
    height: hp("0.5454406887292862%"),
    top: hp("0.545387268066406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.352579752604157%")
  },
  View_144_462: {
    width: wp("4.188984500037299%"),
    height: hp("0.9999746829271317%"),
    top: hp("0.31810760498046853%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.46541002061631787%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.8999999761581421
  },
  View_144_463: {
    width: wp("4.887144300672743%"),
    height: hp("2.045401483774185%"),
    top: hp("1.7187500000000002%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.98773871527779%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_144_464: {
    width: wp("3.5683915350172257%"),
    height: hp("1.499989777803421%"),
    top: hp("0.18177032470703125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6206088595920107%")
  },
  View_144_468: {
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
  ImageBackground_144_469: {
    width: wp("3.9562487602233887%"),
    height: hp("1.4545528590679169%"),
    top: hp("0.0909042358398433%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.15514797634548927%")
  },
  View_144_474: {
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
  Text_144_474: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.4848484396934509,
    textTransform: "none"
  },
  View_144_475: {
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
  View_144_476: {
    width: wp("100%"),
    height: hp("9.53125%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  TouchableOpacity_144_477: {
    width: wp("8.333333333333332%"),
    height: hp("4.6875%"),
    top: hp("2.1875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.88888888888889%")
  },
  TouchableOpacity_144_478: {
    width: wp("8.333333333333332%"),
    height: hp("4.6875%"),
    top: hp("2.1875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.38888888888889%")
  },
  TouchableOpacity_144_479: {
    width: wp("8.333333333333332%"),
    height: hp("4.6875%"),
    top: hp("2.1875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.88888888888889%")
  },
  ImageBackground_144_480: {
    width: wp("8.333333333333332%"),
    height: hp("4.6875%"),
    top: hp("2.1875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.388888888888886%")
  },
  View_190_458: {
    width: wp("31.974461873372395%"),
    minWidth: wp("31.974461873372395%"),
    height: hp("10.113525390625%"),
    minHeight: hp("10.113525390625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.23143174913194%"),
    top: hp("7.87353515625%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_190_459: {
    width: wp("13.699233796861437%"),
    height: hp("6.544902920722961%"),
    top: hp("-1.5593719482421875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2.667380438910591%")
  },
  View_190_460: {
    width: wp("31.974461873372395%"),
    minWidth: wp("31.974461873372395%"),
    height: hp("10.113525390625%"),
    minHeight: hp("10.113525390625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_190_461: {
    width: wp("56.388888888888886%"),
    minWidth: wp("56.388888888888886%"),
    height: hp("14.84375%"),
    minHeight: hp("14.84375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-12.286970350477429%"),
    top: hp("-1.93603515625%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I190_461_1_211: {
    flexGrow: 1,
    width: wp("56.388888888888886%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I190_461_1_211: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 38,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3333333432674408,
    textTransform: "none"
  },
  View_190_462: {
    width: wp("39.166666666666664%"),
    minWidth: wp("39.166666666666664%"),
    minHeight: hp("2.5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-3.6758761935763857%"),
    top: hp("8.22021484375%"),
    justifyContent: "flex-start"
  },
  Text_190_462: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.8333333730697632,
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
