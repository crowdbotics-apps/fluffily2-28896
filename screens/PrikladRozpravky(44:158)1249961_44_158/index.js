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
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c1d7/9140/7114458fafc4a50076511ff63dd798b7"
        }}
        style={styles.ImageBackground_44_159}
      />
      <View style={styles.View_44_194}>
        <Text style={styles.Text_44_194}>Príbeh Khadily</Text>
      </View>
      <View style={styles.View_44_196}>
        <Text style={styles.Text_44_196}>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Sed ut
          perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
          inventore veritatis et quasi architecto beatae vitae dicta sunt
          explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
          odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
          voluptatem sequi nesciunt.
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/595f/60dc/e16edfce2956c4c8d8ab4a75721b226d"
        }}
        style={styles.ImageBackground_44_198}
      />
      <View style={styles.View_163_106}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/465e/cc9b/ca560e18b7986b3abda1693d28434660"
          }}
          style={styles.ImageBackground_48_200}
        />
        <View style={styles.View_48_199}>
          <Text style={styles.Text_48_199}>
            Zazvonil zvonec a rozprávky bol koniec
          </Text>
        </View>
      </View>
      <View style={styles.View_138_311}>
        <View style={styles.View_44_161} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4309/fe78/63000db2e42731b71fbd6ac614fe604a"
          }}
          style={styles.ImageBackground_44_164}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3c9d/c995/d01bf6a55fbb8e001d97856fdaa8acb9"
          }}
          style={styles.ImageBackground_44_187}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/89fd/657e/bbbce11c18fa663fcdaa1cb936667c08"
          }}
          style={styles.ImageBackground_44_192}
        />
        <View style={styles.View_138_309}>
          <Text style={styles.Text_138_309}>7:15</Text>
        </View>
        <View style={styles.View_138_310}>
          <Text style={styles.Text_138_310}>3:23</Text>
        </View>
      </View>
      <TouchableOpacity
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de59/5913/109b37b09ba2bf34bbb71f62b1869ef9"
        }}
        style={styles.TouchableOpacity_48_203}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("1_4"))
        }
      />
      <TouchableOpacity
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0788/0fc2/db6cff49c97f4d9073c600af8133234b"
        }}
        style={styles.TouchableOpacity_106_77}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("106_80"))
        }
      />
      <View style={styles.View_131_226}>
        <View style={styles.View_131_227} />
        <View style={styles.View_131_228}>
          <View style={styles.View_131_229} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d56e/8bf5/d38aa0486ff0e86901e3cfaab704c0d1"
            }}
            style={styles.ImageBackground_131_230}
          />
          <View style={styles.View_131_231} />
        </View>
        <View style={styles.View_131_232}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c49/5d02/4835e02c8f72d5445b5e30627029d54d"
            }}
            style={styles.ImageBackground_131_233}
          />
        </View>
        <View style={styles.View_131_237}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ba9b/f01a/5f53fb5d12a7c0a65aa45800410cefcb"
            }}
            style={styles.ImageBackground_131_238}
          />
        </View>
        <View style={styles.View_131_243}>
          <Text style={styles.Text_131_243}>9:27</Text>
        </View>
      </View>
      <View style={styles.View_138_323}>
        <View style={styles.View_138_324} />
        <View style={styles.View_202_97}>
          <View style={styles.View_138_325} />
          <View style={styles.View_138_326} />
          <View style={styles.View_138_327} />
          <View style={styles.View_138_328} />
          <View style={styles.View_138_329} />
          <View style={styles.View_138_330} />
          <View style={styles.View_138_331} />
          <View style={styles.View_138_332} />
          <View style={styles.View_138_333}>
            <Text style={styles.Text_138_333}>Khadila</Text>
          </View>
          <View style={styles.View_138_334}>
            <Text style={styles.Text_138_334}>Khadilina sestra</Text>
          </View>
          <View style={styles.View_138_335}>
            <Text style={styles.Text_138_335}>Mirjam</Text>
          </View>
          <View style={styles.View_138_336}>
            <Text style={styles.Text_138_336}>mladší brat Surime</Text>
          </View>
          <View style={styles.View_138_337}>
            <Text style={styles.Text_138_337}>Predavač</Text>
          </View>
          <View style={styles.View_138_338}>
            <Text style={styles.Text_138_338}>Khadila</Text>
          </View>
          <View style={styles.View_138_339}>
            <Text style={styles.Text_138_339}>Khadila</Text>
          </View>
          <View style={styles.View_138_340}>
            <Text style={styles.Text_138_340}>Khadila</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("204.91803278688522%") },
  ImageBackground_44_159: {
    width: wp("100.06481594509549%"),
    minWidth: wp("100.06481594509549%"),
    height: hp("27.595628415300546%"),
    minHeight: hp("27.595628415300546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_44_194: {
    width: wp("71.38888888888889%"),
    minWidth: wp("71.38888888888889%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0555555555555554%"),
    top: hp("35.92896174863388%"),
    justifyContent: "flex-start"
  },
  Text_44_194: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 29,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.16666662693023682,
    textTransform: "none"
  },
  View_44_196: {
    width: wp("94.16666666666667%"),
    minWidth: wp("94.16666666666667%"),
    minHeight: hp("136.74863387978144%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0555555555555554%"),
    top: hp("44.53551912568306%"),
    justifyContent: "flex-start"
  },
  Text_44_196: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16666662693023682,
    textTransform: "none"
  },
  ImageBackground_44_198: {
    width: wp("94.44444444444444%"),
    minWidth: wp("94.44444444444444%"),
    height: hp("20.3551912568306%"),
    minHeight: hp("20.3551912568306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7777777777777777%"),
    top: hp("97.1311475409836%"),
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_163_106: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("25.956284153005466%"),
    minHeight: hp("25.956284153005466%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("178.96174863387978%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_48_200: {
    width: wp("19.598100450303818%"),
    height: hp("9.638410057526468%"),
    top: hp("13.114754098360663%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.27777777777778%")
  },
  View_48_199: {
    width: wp("76.66666666666667%"),
    minWidth: wp("76.66666666666667%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.666666666666666%"),
    top: hp("3.1420765027322375%"),
    justifyContent: "flex-start"
  },
  Text_48_199: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.16666662693023682,
    textTransform: "none"
  },
  View_138_311: {
    width: wp("94.44444444444444%"),
    minWidth: wp("94.44444444444444%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7777777777777777%"),
    top: hp("28.96174863387978%")
  },
  View_44_161: {
    width: wp("94.44444444444444%"),
    minWidth: wp("94.44444444444444%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(218, 218, 218, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  ImageBackground_44_164: {
    width: wp("8.357915348476833%"),
    height: hp("4.098360655737705%"),
    top: hp("0.6830601092896202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0645751953125%")
  },
  ImageBackground_44_187: {
    width: wp("73.54965209960938%"),
    minWidth: wp("73.54965209960938%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.880042182074654%"),
    top: hp("2.8688524590163986%")
  },
  ImageBackground_44_192: {
    width: wp("25.90953826904297%"),
    minWidth: wp("25.90953826904297%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.880042182074654%"),
    top: hp("1.6393442622950865%")
  },
  View_138_309: {
    width: wp("5.85054079691569%"),
    minWidth: wp("5.85054079691569%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.57915242513022%"),
    top: hp("3.415300546448094%"),
    justifyContent: "center"
  },
  Text_138_309: {
    color: "rgba(122, 122, 122, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.20370370149612427,
    textTransform: "none"
  },
  View_138_310: {
    width: wp("7.522123654683431%"),
    minWidth: wp("7.522123654683431%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.880042182074654%"),
    top: hp("3.415300546448094%"),
    justifyContent: "center"
  },
  Text_138_310: {
    color: "rgba(122, 122, 122, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.20370370149612427,
    textTransform: "none"
  },
  TouchableOpacity_48_203: {
    width: wp("6.666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7777777777777777%")
  },
  TouchableOpacity_106_77: {
    width: wp("6.666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.55555555555556%")
  },
  View_131_226: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_131_227: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(207, 205, 205, 1)",
    opacity: 0.49000000953674316
  },
  View_131_228: {
    width: wp("5.818033748202854%"),
    minWidth: wp("5.818033748202854%"),
    height: hp("1.4306640364433247%"),
    minHeight: hp("1.4306640364433247%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88.34038628472223%"),
    top: hp("1.6219675866632515%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_131_229: {
    width: wp("5.11986944410536%"),
    height: hp("1.3511825780399511%"),
    top: hp("0.03968952783469937%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.00001695421006786546%"),
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 0.8727049827575684
  },
  ImageBackground_131_230: {
    width: wp("0.310295754008823%"),
    height: hp("0.476888033861671%"),
    top: hp("0.4768413272711749%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.352579752604157%")
  },
  View_131_231: {
    width: wp("4.188984500037299%"),
    height: hp("0.8742948047450332%"),
    top: hp("0.2781268677424864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.46541002061631787%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.8999999761581421
  },
  View_131_232: {
    width: wp("4.887148009406196%"),
    minWidth: wp("4.887148009406196%"),
    height: hp("1.788330078125%"),
    minHeight: hp("1.788330078125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.98773871527779%"),
    top: hp("1.5027322404371584%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_131_233: {
    width: wp("3.568394449022081%"),
    height: hp("1.311461391344748%"),
    top: hp("0.15892487406079248%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6206088595920107%")
  },
  View_131_237: {
    width: wp("4.188984500037299%"),
    minWidth: wp("4.188984500037299%"),
    height: hp("1.4306640364433247%"),
    minHeight: hp("1.4306640364433247%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.33333333333333%"),
    top: hp("1.6219675866632515%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_131_238: {
    width: wp("3.9562487602233887%"),
    height: hp("1.2717402046495447%"),
    top: hp("0.07947911330259538%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.15514797634548927%")
  },
  View_131_243: {
    width: wp("9.444444444444445%"),
    minWidth: wp("9.444444444444445%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555555%"),
    top: hp("1.366120218579235%"),
    justifyContent: "center"
  },
  Text_131_243: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.4848484396934509,
    textTransform: "none"
  },
  View_138_323: {
    width: wp("66.66666666666666%"),
    minWidth: wp("66.66666666666666%"),
    height: hp("47.6775956284153%"),
    minHeight: hp("47.6775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("101.11111111111111%"),
    top: hp("8.333333333333332%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_138_324: {
    width: wp("66.66666666666666%"),
    minWidth: wp("66.66666666666666%"),
    height: hp("47.6775956284153%"),
    minHeight: hp("47.6775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 5
  },
  View_202_97: {
    width: wp("56.388888888888886%"),
    minWidth: wp("56.388888888888886%"),
    height: hp("43.85245901639344%"),
    minHeight: hp("43.85245901639344%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.166666666666671%"),
    top: hp("1.9125683060109306%")
  },
  View_138_325: {
    width: wp("9.444444444444445%"),
    minWidth: wp("9.444444444444445%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(17, 116, 116, 1)"
  },
  View_138_326: {
    width: wp("9.444444444444445%"),
    minWidth: wp("9.444444444444445%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.601092896174864%"),
    backgroundColor: "rgba(169, 156, 78, 1)"
  },
  View_138_327: {
    width: wp("9.444444444444445%"),
    minWidth: wp("9.444444444444445%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11.202185792349725%"),
    backgroundColor: "rgba(128, 33, 31, 1)"
  },
  View_138_328: {
    width: wp("9.444444444444445%"),
    minWidth: wp("9.444444444444445%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16.803278688524593%"),
    backgroundColor: "rgba(237, 129, 29, 1)"
  },
  View_138_329: {
    width: wp("9.444444444444445%"),
    minWidth: wp("9.444444444444445%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22.404371584699454%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_138_330: {
    width: wp("9.444444444444445%"),
    minWidth: wp("9.444444444444445%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("28.005464480874316%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_138_331: {
    width: wp("9.444444444444445%"),
    minWidth: wp("9.444444444444445%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("33.60655737704918%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_138_332: {
    width: wp("9.444444444444445%"),
    minWidth: wp("9.444444444444445%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("39.20765027322405%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_138_333: {
    width: wp("15.555555555555555%"),
    minWidth: wp("15.555555555555555%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.5%"),
    top: hp("1.2295081967213104%"),
    justifyContent: "flex-start"
  },
  Text_138_333: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.3333333432674408,
    textTransform: "none"
  },
  View_138_334: {
    width: wp("33.33333333333333%"),
    minWidth: wp("33.33333333333333%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.5%"),
    top: hp("6.830601092896172%"),
    justifyContent: "flex-start"
  },
  Text_138_334: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.3333333432674408,
    textTransform: "none"
  },
  View_138_335: {
    width: wp("15.555555555555555%"),
    minWidth: wp("15.555555555555555%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.5%"),
    top: hp("12.431693989071038%"),
    justifyContent: "flex-start"
  },
  Text_138_335: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.3333333432674408,
    textTransform: "none"
  },
  View_138_336: {
    width: wp("43.888888888888886%"),
    minWidth: wp("43.888888888888886%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.5%"),
    top: hp("18.032786885245898%"),
    justifyContent: "flex-start"
  },
  Text_138_336: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.3333333432674408,
    textTransform: "none"
  },
  View_138_337: {
    width: wp("33.33333333333333%"),
    minWidth: wp("33.33333333333333%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.5%"),
    top: hp("23.633879781420767%"),
    justifyContent: "flex-start"
  },
  Text_138_337: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.3333333432674408,
    textTransform: "none"
  },
  View_138_338: {
    width: wp("15.555555555555555%"),
    minWidth: wp("15.555555555555555%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.5%"),
    top: hp("29.23497267759563%"),
    justifyContent: "flex-start"
  },
  Text_138_338: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.3333333432674408,
    textTransform: "none"
  },
  View_138_339: {
    width: wp("15.555555555555555%"),
    minWidth: wp("15.555555555555555%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.5%"),
    top: hp("34.83606557377049%"),
    justifyContent: "flex-start"
  },
  Text_138_339: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.3333333432674408,
    textTransform: "none"
  },
  View_138_340: {
    width: wp("15.555555555555555%"),
    minWidth: wp("15.555555555555555%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.5%"),
    top: hp("40.43715846994535%"),
    justifyContent: "flex-start"
  },
  Text_138_340: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.3333333432674408,
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
