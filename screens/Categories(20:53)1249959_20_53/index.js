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
      <View style={styles.View_40_139}>
        <View style={styles.View_40_124}>
          <TouchableOpacity
            style={styles.TouchableOpacity_40_125}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("40_2409"))
            }
          />
          <View style={styles.View_40_126}>
            <Text style={styles.Text_40_126}>Nové</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1eac/cc01/8cc378026b1594ef019b938775973773"
            }}
            style={styles.ImageBackground_40_127}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e657/3ad3/f564d84c4d89e9e55bd387ad4277ae20"
            }}
            style={styles.ImageBackground_40_128}
          />
        </View>
        <View style={styles.View_40_39}>
          <View style={styles.View_40_38} />
          <View style={styles.View_36_35}>
            <Text style={styles.Text_36_35}>Uspávanky</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1eac/cc01/8cc378026b1594ef019b938775973773"
            }}
            style={styles.ImageBackground_36_37}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e657/3ad3/f564d84c4d89e9e55bd387ad4277ae20"
            }}
            style={styles.ImageBackground_40_65}
          />
        </View>
        <View style={styles.View_40_68}>
          <View style={styles.View_40_69} />
          <View style={styles.View_40_70}>
            <Text style={styles.Text_40_70}>3 - 5 rokov</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1eac/cc01/8cc378026b1594ef019b938775973773"
            }}
            style={styles.ImageBackground_40_71}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e657/3ad3/f564d84c4d89e9e55bd387ad4277ae20"
            }}
            style={styles.ImageBackground_40_72}
          />
        </View>
        <View style={styles.View_40_75}>
          <View style={styles.View_40_76} />
          <View style={styles.View_40_77}>
            <Text style={styles.Text_40_77}>5 - 9 rokov</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1eac/cc01/8cc378026b1594ef019b938775973773"
            }}
            style={styles.ImageBackground_40_78}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e657/3ad3/f564d84c4d89e9e55bd387ad4277ae20"
            }}
            style={styles.ImageBackground_40_79}
          />
        </View>
        <View style={styles.View_40_82}>
          <View style={styles.View_40_83} />
          <View style={styles.View_40_84}>
            <Text style={styles.Text_40_84}>9 - 12 rokov</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1eac/cc01/8cc378026b1594ef019b938775973773"
            }}
            style={styles.ImageBackground_40_85}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e657/3ad3/f564d84c4d89e9e55bd387ad4277ae20"
            }}
            style={styles.ImageBackground_40_86}
          />
        </View>
        <View style={styles.View_40_89}>
          <View style={styles.View_40_90} />
          <View style={styles.View_40_91}>
            <Text style={styles.Text_40_91}>Do auta</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1eac/cc01/8cc378026b1594ef019b938775973773"
            }}
            style={styles.ImageBackground_40_92}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e657/3ad3/f564d84c4d89e9e55bd387ad4277ae20"
            }}
            style={styles.ImageBackground_40_93}
          />
        </View>
        <View style={styles.View_40_96}>
          <View style={styles.View_40_97} />
          <View style={styles.View_40_98}>
            <Text style={styles.Text_40_98}>Náučné</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1eac/cc01/8cc378026b1594ef019b938775973773"
            }}
            style={styles.ImageBackground_40_99}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e657/3ad3/f564d84c4d89e9e55bd387ad4277ae20"
            }}
            style={styles.ImageBackground_40_100}
          />
        </View>
        <View style={styles.View_40_103}>
          <View style={styles.View_40_104} />
          <View style={styles.View_40_105}>
            <Text style={styles.Text_40_105}>Kresťanské</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1eac/cc01/8cc378026b1594ef019b938775973773"
            }}
            style={styles.ImageBackground_40_106}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e657/3ad3/f564d84c4d89e9e55bd387ad4277ae20"
            }}
            style={styles.ImageBackground_40_107}
          />
        </View>
        <View style={styles.View_40_110}>
          <View style={styles.View_40_111} />
          <View style={styles.View_40_112}>
            <Text style={styles.Text_40_112}>Vianočné</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1eac/cc01/8cc378026b1594ef019b938775973773"
            }}
            style={styles.ImageBackground_40_113}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e657/3ad3/f564d84c4d89e9e55bd387ad4277ae20"
            }}
            style={styles.ImageBackground_40_114}
          />
        </View>
        <View style={styles.View_40_117}>
          <View style={styles.View_40_118} />
          <View style={styles.View_40_119}>
            <Text style={styles.Text_40_119}>Dievčenské</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1eac/cc01/8cc378026b1594ef019b938775973773"
            }}
            style={styles.ImageBackground_40_120}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e657/3ad3/f564d84c4d89e9e55bd387ad4277ae20"
            }}
            style={styles.ImageBackground_40_121}
          />
        </View>
        <View style={styles.View_40_132}>
          <View style={styles.View_40_133} />
          <View style={styles.View_40_134}>
            <Text style={styles.Text_40_134}>Chlapčenské</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1eac/cc01/8cc378026b1594ef019b938775973773"
            }}
            style={styles.ImageBackground_40_135}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e657/3ad3/f564d84c4d89e9e55bd387ad4277ae20"
            }}
            style={styles.ImageBackground_40_136}
          />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/09c7/b1b7/e566ab45d9dc4932c2bb0d679e401fc9"
        }}
        style={styles.ImageBackground_174_104}
      />
      <View style={styles.View_36_31}>
        <View style={styles.View_27_485} />
        <View style={styles.View_27_491} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/57e1/8cdb/d7f0526a68a2b91acbb32be15dd90f28"
          }}
          style={styles.ImageBackground_27_487}
        />
        <View style={styles.View_36_30}>
          <Text style={styles.Text_36_30}>Hľadať...</Text>
        </View>
      </View>
      <View style={styles.View_20_125}>
        <View style={styles.View_20_127} />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ddb/a89d/ffa40ba6d571cecc353303fe760b8726"
          }}
          style={styles.TouchableOpacity_20_128}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("202_110"))
          }
        />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b3a6/38a4/bf319fec0990d74b632d6843e2c9106b"
          }}
          style={styles.TouchableOpacity_20_129}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("1_4"))
          }
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1f87/72b0/7a8b32d05d2b016c455ac5f31f997ac5"
          }}
          style={styles.ImageBackground_20_130}
        />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/622c/5782/684400b1232db44ea1e7aeaa45e5b9b4"
          }}
          style={styles.TouchableOpacity_20_131}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("144_438"))
          }
        />
      </View>
      <View style={styles.View_131_244}>
        <View style={styles.View_131_245} />
        <View style={styles.View_131_246}>
          <View style={styles.View_131_247} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d56e/8bf5/d38aa0486ff0e86901e3cfaab704c0d1"
            }}
            style={styles.ImageBackground_131_248}
          />
          <View style={styles.View_131_249} />
        </View>
        <View style={styles.View_131_250}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c49/5d02/4835e02c8f72d5445b5e30627029d54d"
            }}
            style={styles.ImageBackground_131_251}
          />
        </View>
        <View style={styles.View_131_255}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ba9b/f01a/5f53fb5d12a7c0a65aa45800410cefcb"
            }}
            style={styles.ImageBackground_131_256}
          />
        </View>
        <View style={styles.View_131_261}>
          <Text style={styles.Text_131_261}>9:27</Text>
        </View>
      </View>
      <View style={styles.View_190_452}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/be37/c0f5/e150294db22ff58544b3ba93c82b9fa0"
          }}
          style={styles.ImageBackground_190_453}
        />
        <View style={styles.View_190_454}>
          <View style={styles.View_190_455}>
            <View style={styles.View_I190_455_1_211}>
              <Text style={styles.Text_I190_455_1_211}>Fluffily</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("100%") },
  View_40_139: {
    width: wp("93.05555555555556%"),
    minWidth: wp("93.05555555555556%"),
    height: hp("61.875%"),
    minHeight: hp("61.875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.6111111111111107%"),
    top: hp("28.59375%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_40_124: {
    width: wp("93.05555555555556%"),
    minWidth: wp("93.05555555555556%"),
    height: hp("6.71875%"),
    minHeight: hp("6.71875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.15624999999999645%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  TouchableOpacity_40_125: {
    width: wp("93.05555555555556%"),
    minWidth: wp("93.05555555555556%"),
    height: hp("6.71875%"),
    minHeight: hp("6.71875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_40_126: {
    width: wp("13.88888888888889%"),
    minWidth: wp("13.88888888888889%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555555%"),
    top: hp("1.4062500000000036%"),
    justifyContent: "center"
  },
  Text_40_126: {
    color: "rgba(190, 190, 190, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.09051411598920822,
    textTransform: "none"
  },
  ImageBackground_40_127: {
    width: wp("93.05555555555556%"),
    minWidth: wp("93.05555555555556%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_40_128: {
    width: wp("6.666666666666667%"),
    height: hp("3.75%"),
    top: hp("1.4062500000000036%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.77777777777777%")
  },
  View_40_39: {
    width: wp("93.05555555555556%"),
    minWidth: wp("93.05555555555556%"),
    height: hp("6.71875%"),
    minHeight: hp("6.71875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.875%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_40_38: {
    width: wp("93.05555555555556%"),
    minWidth: wp("93.05555555555556%"),
    height: hp("6.71875%"),
    minHeight: hp("6.71875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_36_35: {
    width: wp("29.166666666666668%"),
    minWidth: wp("29.166666666666668%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555555%"),
    top: hp("1.40625%"),
    justifyContent: "center"
  },
  Text_36_35: {
    color: "rgba(190, 190, 190, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.09051411598920822,
    textTransform: "none"
  },
  ImageBackground_36_37: {
    width: wp("93.05555555555556%"),
    minWidth: wp("93.05555555555556%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_40_65: {
    width: wp("6.666666666666667%"),
    height: hp("3.75%"),
    top: hp("1.40625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.77777777777777%")
  },
  View_40_68: {
    width: wp("93.05555555555556%"),
    minWidth: wp("93.05555555555556%"),
    height: hp("6.71875%"),
    minHeight: hp("6.71875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13.59375%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_40_69: {
    width: wp("93.05555555555556%"),
    minWidth: wp("93.05555555555556%"),
    height: hp("6.71875%"),
    minHeight: hp("6.71875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_40_70: {
    width: wp("28.61111111111111%"),
    minWidth: wp("28.61111111111111%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555555%"),
    top: hp("1.40625%"),
    justifyContent: "center"
  },
  Text_40_70: {
    color: "rgba(190, 190, 190, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.09051411598920822,
    textTransform: "none"
  },
  ImageBackground_40_71: {
    width: wp("93.05555555555556%"),
    minWidth: wp("93.05555555555556%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_40_72: {
    width: wp("6.666666666666667%"),
    height: hp("3.75%"),
    top: hp("1.40625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.77777777777777%")
  },
  View_40_75: {
    width: wp("93.05555555555556%"),
    minWidth: wp("93.05555555555556%"),
    height: hp("6.71875%"),
    minHeight: hp("6.71875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("20.3125%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_40_76: {
    width: wp("93.05555555555556%"),
    minWidth: wp("93.05555555555556%"),
    height: hp("6.71875%"),
    minHeight: hp("6.71875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_40_77: {
    width: wp("28.61111111111111%"),
    minWidth: wp("28.61111111111111%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555555%"),
    top: hp("1.406250000000007%"),
    justifyContent: "center"
  },
  Text_40_77: {
    color: "rgba(190, 190, 190, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.09051411598920822,
    textTransform: "none"
  },
  ImageBackground_40_78: {
    width: wp("93.05555555555556%"),
    minWidth: wp("93.05555555555556%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_40_79: {
    width: wp("6.666666666666667%"),
    height: hp("3.75%"),
    top: hp("1.406250000000007%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.77777777777777%")
  },
  View_40_82: {
    width: wp("93.05555555555556%"),
    minWidth: wp("93.05555555555556%"),
    height: hp("6.71875%"),
    minHeight: hp("6.71875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("27.03125%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_40_83: {
    width: wp("93.05555555555556%"),
    minWidth: wp("93.05555555555556%"),
    height: hp("6.71875%"),
    minHeight: hp("6.71875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_40_84: {
    width: wp("31.11111111111111%"),
    minWidth: wp("31.11111111111111%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555555%"),
    top: hp("1.40625%"),
    justifyContent: "center"
  },
  Text_40_84: {
    color: "rgba(190, 190, 190, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.09051411598920822,
    textTransform: "none"
  },
  ImageBackground_40_85: {
    width: wp("93.05555555555556%"),
    minWidth: wp("93.05555555555556%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_40_86: {
    width: wp("6.666666666666667%"),
    height: hp("3.75%"),
    top: hp("1.40625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.77777777777777%")
  },
  View_40_89: {
    width: wp("93.05555555555556%"),
    minWidth: wp("93.05555555555556%"),
    height: hp("6.71875%"),
    minHeight: hp("6.71875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("33.75%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_40_90: {
    width: wp("93.05555555555556%"),
    minWidth: wp("93.05555555555556%"),
    height: hp("6.71875%"),
    minHeight: hp("6.71875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_40_91: {
    width: wp("20.555555555555554%"),
    minWidth: wp("20.555555555555554%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555555%"),
    top: hp("1.406249999999993%"),
    justifyContent: "center"
  },
  Text_40_91: {
    color: "rgba(190, 190, 190, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.09051411598920822,
    textTransform: "none"
  },
  ImageBackground_40_92: {
    width: wp("93.05555555555556%"),
    minWidth: wp("93.05555555555556%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_40_93: {
    width: wp("6.666666666666667%"),
    height: hp("3.75%"),
    top: hp("1.406249999999993%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.77777777777777%")
  },
  View_40_96: {
    width: wp("93.05555555555556%"),
    minWidth: wp("93.05555555555556%"),
    height: hp("6.71875%"),
    minHeight: hp("6.71875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("40.46875%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_40_97: {
    width: wp("93.05555555555556%"),
    minWidth: wp("93.05555555555556%"),
    height: hp("6.71875%"),
    minHeight: hp("6.71875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_40_98: {
    width: wp("20.27777777777778%"),
    minWidth: wp("20.27777777777778%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555555%"),
    top: hp("1.40625%"),
    justifyContent: "center"
  },
  Text_40_98: {
    color: "rgba(190, 190, 190, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.09051411598920822,
    textTransform: "none"
  },
  ImageBackground_40_99: {
    width: wp("93.05555555555556%"),
    minWidth: wp("93.05555555555556%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_40_100: {
    width: wp("6.666666666666667%"),
    height: hp("3.75%"),
    top: hp("1.40625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.77777777777777%")
  },
  View_40_103: {
    width: wp("93.05555555555556%"),
    minWidth: wp("93.05555555555556%"),
    height: hp("6.71875%"),
    minHeight: hp("6.71875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("47.1875%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_40_104: {
    width: wp("93.05555555555556%"),
    minWidth: wp("93.05555555555556%"),
    height: hp("6.71875%"),
    minHeight: hp("6.71875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_40_105: {
    width: wp("29.72222222222222%"),
    minWidth: wp("29.72222222222222%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555555%"),
    top: hp("1.40625%"),
    justifyContent: "center"
  },
  Text_40_105: {
    color: "rgba(190, 190, 190, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.09051411598920822,
    textTransform: "none"
  },
  ImageBackground_40_106: {
    width: wp("93.05555555555556%"),
    minWidth: wp("93.05555555555556%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_40_107: {
    width: wp("6.666666666666667%"),
    height: hp("3.75%"),
    top: hp("1.40625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.77777777777777%")
  },
  View_40_110: {
    width: wp("93.05555555555556%"),
    minWidth: wp("93.05555555555556%"),
    height: hp("6.71875%"),
    minHeight: hp("6.71875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("53.90625%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_40_111: {
    width: wp("93.05555555555556%"),
    minWidth: wp("93.05555555555556%"),
    height: hp("6.71875%"),
    minHeight: hp("6.71875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_40_112: {
    width: wp("24.72222222222222%"),
    minWidth: wp("24.72222222222222%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555555%"),
    top: hp("1.40625%"),
    justifyContent: "center"
  },
  Text_40_112: {
    color: "rgba(190, 190, 190, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.09051411598920822,
    textTransform: "none"
  },
  ImageBackground_40_113: {
    width: wp("93.05555555555556%"),
    minWidth: wp("93.05555555555556%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_40_114: {
    width: wp("6.666666666666667%"),
    height: hp("3.75%"),
    top: hp("1.40625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.77777777777777%")
  },
  View_40_117: {
    width: wp("93.05555555555556%"),
    minWidth: wp("93.05555555555556%"),
    height: hp("6.71875%"),
    minHeight: hp("6.71875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("60.625%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_40_118: {
    width: wp("93.05555555555556%"),
    minWidth: wp("93.05555555555556%"),
    height: hp("6.71875%"),
    minHeight: hp("6.71875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_40_119: {
    width: wp("30.555555555555557%"),
    minWidth: wp("30.555555555555557%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555555%"),
    top: hp("1.40625%"),
    justifyContent: "center"
  },
  Text_40_119: {
    color: "rgba(190, 190, 190, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.09051411598920822,
    textTransform: "none"
  },
  ImageBackground_40_120: {
    width: wp("93.05555555555556%"),
    minWidth: wp("93.05555555555556%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_40_121: {
    width: wp("6.666666666666667%"),
    height: hp("3.75%"),
    top: hp("1.40625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.77777777777777%")
  },
  View_40_132: {
    width: wp("93.05555555555556%"),
    minWidth: wp("93.05555555555556%"),
    height: hp("6.71875%"),
    minHeight: hp("6.71875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("67.34375%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_40_133: {
    width: wp("93.05555555555556%"),
    minWidth: wp("93.05555555555556%"),
    height: hp("6.71875%"),
    minHeight: hp("6.71875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_40_134: {
    width: wp("34.166666666666664%"),
    minWidth: wp("34.166666666666664%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555555%"),
    top: hp("1.40625%"),
    justifyContent: "center"
  },
  Text_40_134: {
    color: "rgba(190, 190, 190, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.09051411598920822,
    textTransform: "none"
  },
  ImageBackground_40_135: {
    width: wp("93.05555555555556%"),
    minWidth: wp("93.05555555555556%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_40_136: {
    width: wp("6.666666666666667%"),
    height: hp("3.75%"),
    top: hp("1.40625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.77777777777777%")
  },
  ImageBackground_174_104: {
    width: wp("58.90326605902778%"),
    height: hp("24.06831979751587%"),
    top: hp("-0.46875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.05555555555556%")
  },
  View_36_31: {
    width: wp("73.23529561360677%"),
    minWidth: wp("73.23529561360677%"),
    height: hp("5.625%"),
    minHeight: hp("5.625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.333333333333334%"),
    top: hp("15.625%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_485: {
    width: wp("73.23529561360677%"),
    minWidth: wp("73.23529561360677%"),
    height: hp("5.625%"),
    minHeight: hp("5.625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 252, 1)",
    borderColor: "rgba(218, 218, 218, 1)",
    borderWidth: 1.0588234663009644,
    borderTopLeftRadius: 21.176469802856445,
    borderTopRightRadius: 21.176469802856445,
    borderBottomLeftRadius: 21.176469802856445,
    borderBottomRightRadius: 21.176469802856445
  },
  View_27_491: {
    width: wp("64.11764780680339%"),
    minWidth: wp("64.11764780680339%"),
    height: hp("4.301470518112183%"),
    minHeight: hp("4.301470518112183%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1764780680338536%"),
    top: hp("0.661773681640625%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 15.882351875305176,
    borderTopRightRadius: 15.882351875305176,
    borderBottomLeftRadius: 15.882351875305176,
    borderBottomRightRadius: 15.882351875305176
  },
  ImageBackground_27_487: {
    width: wp("4.411764674716526%"),
    height: hp("2.4816176295280457%"),
    top: hp("1.6543960571289062%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.47059122721355%")
  },
  View_36_30: {
    width: wp("16.57894664340549%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.423207600911459%"),
    top: hp("1.5625%"),
    justifyContent: "center"
  },
  Text_36_30: {
    color: "rgba(218, 218, 218, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.09583847224712372,
    textTransform: "none"
  },
  View_20_125: {
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
  View_20_127: {
    width: wp("100%"),
    height: hp("9.53125%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  TouchableOpacity_20_128: {
    width: wp("8.333333333333332%"),
    height: hp("4.6875%"),
    top: hp("2.1875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.88888888888889%")
  },
  TouchableOpacity_20_129: {
    width: wp("8.333333333333332%"),
    height: hp("4.6875%"),
    top: hp("2.1875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.38888888888889%")
  },
  ImageBackground_20_130: {
    width: wp("8.333333333333332%"),
    height: hp("4.6875%"),
    top: hp("2.1875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.88888888888889%")
  },
  TouchableOpacity_20_131: {
    width: wp("8.333333333333332%"),
    height: hp("4.6875%"),
    top: hp("2.1875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.388888888888886%")
  },
  View_131_244: {
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
  View_131_245: {
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
  View_131_246: {
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
  View_131_247: {
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
  ImageBackground_131_248: {
    width: wp("0.310295754008823%"),
    height: hp("0.5454406887292862%"),
    top: hp("0.545387268066406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.3525818718804175%")
  },
  View_131_249: {
    width: wp("4.188984500037299%"),
    height: hp("0.9999746829271317%"),
    top: hp("0.31810760498046853%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4654184977213447%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.8999999761581421
  },
  View_131_250: {
    width: wp("4.887148009406196%"),
    height: hp("2.0454025268554688%"),
    top: hp("1.7187500000000002%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.98773871527779%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_131_251: {
    width: wp("3.568394449022081%"),
    height: hp("1.4999839663505554%"),
    top: hp("0.18177032470703125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6206088595920107%")
  },
  View_131_255: {
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
  ImageBackground_131_256: {
    width: wp("3.9562487602233887%"),
    height: hp("1.4545528590679169%"),
    top: hp("0.0909042358398433%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.15514797634548927%")
  },
  View_131_261: {
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
  Text_131_261: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.4848484396934509,
    textTransform: "none"
  },
  View_190_452: {
    width: wp("20.21621492173937%"),
    minWidth: wp("20.21621492173937%"),
    height: hp("6.3943904638290405%"),
    minHeight: hp("6.3943904638290405%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.222222222222221%"),
    top: hp("8.212852478027344%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_190_453: {
    width: wp("8.661495314704046%"),
    height: hp("4.138088822364807%"),
    top: hp("-0.9859466552734366%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.6864861382378464%")
  },
  View_190_454: {
    width: wp("30.352647569444446%"),
    minWidth: wp("30.352647569444446%"),
    height: hp("7.6983642578125%"),
    minHeight: hp("7.6983642578125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.688451131184896%"),
    top: hp("0.71197509765625%")
  },
  View_190_455: {
    width: wp("35.65251244439019%"),
    minWidth: wp("35.65251244439019%"),
    height: hp("9.38512921333313%"),
    minHeight: hp("9.38512921333313%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-13.45703125%"),
    top: hp("-1.93603515625%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I190_455_1_211: {
    flexGrow: 1,
    width: wp("35.65251244439019%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I190_455_1_211: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 24.34854507446289,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.21075378358364105,
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
