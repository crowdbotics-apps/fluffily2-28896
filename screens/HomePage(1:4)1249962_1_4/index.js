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
      <View style={styles.View_27_470}>
        <View style={styles.View_27_469}>
          <TouchableOpacity
            style={styles.TouchableOpacity_27_308}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("44_158"))
            }
          >
            <View style={styles.View_22_69} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a8cd/73dc/fcae159dc07b9300489966074796e8c7"
              }}
              style={styles.ImageBackground_22_79}
            />
            <View style={styles.View_22_84} />
            <View style={styles.View_22_89} />
            <View style={styles.View_22_94} />
            <View style={styles.View_22_99}>
              <Text style={styles.Text_22_99}>9 - 12 rokov</Text>
            </View>
            <View style={styles.View_22_104}>
              <Text style={styles.Text_22_104}>nová</Text>
            </View>
            <View style={styles.View_22_109}>
              <Text style={styles.Text_22_109}>dievčenská</Text>
            </View>
            <View style={styles.View_22_114} />
            <View style={styles.View_22_74}>
              <Text style={styles.Text_22_74}>Mirjam Senim</Text>
            </View>
            <View style={styles.View_22_119}>
              <Text style={styles.Text_22_119}>Príbeh Khadily</Text>
            </View>
            <View style={styles.View_44_59}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca67/2e92/927c59e066f1fb2d9e022ee670d9b7f0"
                }}
                style={styles.ImageBackground_43_53}
              />
            </View>
          </TouchableOpacity>
          <View style={styles.View_27_429}>
            <View style={styles.View_27_430} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7af5/362c/726c6f7529eedbafd070bf35f68e648d"
              }}
              style={styles.ImageBackground_27_465}
            />
            <View style={styles.View_27_432} />
            <View style={styles.View_27_433} />
            <View style={styles.View_27_434} />
            <View style={styles.View_27_435}>
              <Text style={styles.Text_27_435}>6 - 8 rokov</Text>
            </View>
            <View style={styles.View_27_436}>
              <Text style={styles.Text_27_436}>nová</Text>
            </View>
            <View style={styles.View_27_437}>
              <Text style={styles.Text_27_437}>chlapčenská</Text>
            </View>
            <View style={styles.View_27_438} />
            <View style={styles.View_27_439}>
              <Text style={styles.Text_27_439}>Kristína Mičíková</Text>
            </View>
            <View style={styles.View_27_440}>
              <Text style={styles.Text_27_440}>O temnom lese</Text>
            </View>
            <View style={styles.View_44_72}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca67/2e92/927c59e066f1fb2d9e022ee670d9b7f0"
                }}
                style={styles.ImageBackground_44_73}
              />
            </View>
          </View>
          <View style={styles.View_27_441}>
            <View style={styles.View_27_442} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cdcf/2d9b/3cb683fb6281e2c163790df978d58ea9"
              }}
              style={styles.ImageBackground_27_467}
            />
            <View style={styles.View_27_444} />
            <View style={styles.View_27_445} />
            <View style={styles.View_27_446} />
            <View style={styles.View_27_447}>
              <Text style={styles.Text_27_447}>6 - 8 rokov</Text>
            </View>
            <View style={styles.View_27_448}>
              <Text style={styles.Text_27_448}>nová</Text>
            </View>
            <View style={styles.View_27_449}>
              <Text style={styles.Text_27_449}>chlapčenská</Text>
            </View>
            <View style={styles.View_27_450} />
            <View style={styles.View_27_451}>
              <Text style={styles.Text_27_451}>Jozef Tlelka</Text>
            </View>
            <View style={styles.View_27_452}>
              <Text style={styles.Text_27_452}>Tajomná jaskyňa</Text>
            </View>
            <View style={styles.View_44_76}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca67/2e92/927c59e066f1fb2d9e022ee670d9b7f0"
                }}
                style={styles.ImageBackground_44_77}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1187/937e/dbf305cb6e802b5572ddca3f3e0ac42e"
              }}
              style={styles.ImageBackground_209_95}
            />
          </View>
          <View style={styles.View_27_453}>
            <View style={styles.View_27_454} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/700b/47bc/6d0cd6240c52484cc0a2842bc5ef1e4d"
              }}
              style={styles.ImageBackground_27_468}
            />
            <View style={styles.View_27_456} />
            <View style={styles.View_27_457} />
            <View style={styles.View_27_458} />
            <View style={styles.View_27_459}>
              <Text style={styles.Text_27_459}>9 - 12 rokov</Text>
            </View>
            <View style={styles.View_27_460}>
              <Text style={styles.Text_27_460}>stará</Text>
            </View>
            <View style={styles.View_27_461}>
              <Text style={styles.Text_27_461}>náučná</Text>
            </View>
            <View style={styles.View_27_462} />
            <View style={styles.View_27_463}>
              <Text style={styles.Text_27_463}>Anonym</Text>
            </View>
            <View style={styles.View_27_464}>
              <Text style={styles.Text_27_464}>Bradatý pán Hviezda</Text>
            </View>
            <View style={styles.View_44_84}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca67/2e92/927c59e066f1fb2d9e022ee670d9b7f0"
                }}
                style={styles.ImageBackground_44_85}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_27_179}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f78f/aac3/058d7a689bfb93ba3a629f201de0696f"
          }}
          style={styles.ImageBackground_190_186}
        />
        <View style={styles.View_1_210}>
          <View style={styles.View_1_217}>
            <View style={styles.View_1_211}>
              <Text style={styles.Text_1_211}>Fluffily</Text>
            </View>
          </View>
          <View style={styles.View_1_212}>
            <Text style={styles.Text_1_212}>Brána do sveta fantázie</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1_222}>
        <View style={styles.View_1_224} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a718/9217/c698e35d2e4da791eb87f910fa15fe3f"
          }}
          style={styles.ImageBackground_1_226}
        />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ddb/a89d/ffa40ba6d571cecc353303fe760b8726"
          }}
          style={styles.TouchableOpacity_1_225}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("202_110"))
          }
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5358/a49e/33aa6554be2159e2ff67683a924d017b"
          }}
          style={styles.ImageBackground_1_227}
        />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/622c/5782/684400b1232db44ea1e7aeaa45e5b9b4"
          }}
          style={styles.TouchableOpacity_27_177}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("144_438"))
          }
        />
      </View>
      <View style={styles.View_131_208}>
        <View style={styles.View_131_209} />
        <View style={styles.View_131_210}>
          <View style={styles.View_131_211} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d56e/8bf5/d38aa0486ff0e86901e3cfaab704c0d1"
            }}
            style={styles.ImageBackground_131_212}
          />
          <View style={styles.View_131_213} />
        </View>
        <View style={styles.View_131_214}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c49/5d02/4835e02c8f72d5445b5e30627029d54d"
            }}
            style={styles.ImageBackground_131_215}
          />
        </View>
        <View style={styles.View_131_219}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ba9b/f01a/5f53fb5d12a7c0a65aa45800410cefcb"
            }}
            style={styles.ImageBackground_131_220}
          />
        </View>
        <View style={styles.View_131_225}>
          <Text style={styles.Text_131_225}>9:27</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("100%") },
  View_27_470: {
    width: wp("89.16666666666667%"),
    minWidth: wp("89.16666666666667%"),
    height: hp("69.53125%"),
    minHeight: hp("69.53125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555555%"),
    top: hp("20.9375%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_27_469: {
    width: wp("89.16666666666667%"),
    minWidth: wp("89.16666666666667%"),
    height: hp("165.625%"),
    minHeight: hp("165.625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  TouchableOpacity_27_308: {
    width: wp("89.16666666666667%"),
    minWidth: wp("89.16666666666667%"),
    height: hp("40%"),
    minHeight: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_22_69: {
    width: wp("89.16666666666667%"),
    height: hp("23.75%"),
    top: hp("16.25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(196, 169, 132, 1)",
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9
  },
  ImageBackground_22_79: {
    width: wp("89.16666666666667%"),
    height: hp("28.125%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_22_84: {
    width: wp("26.38888888888889%"),
    height: hp("3.28125%"),
    top: hp("35.78124999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.666666666666666%"),
    backgroundColor: "rgba(94, 118, 100, 1)",
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9
  },
  View_22_89: {
    width: wp("15.833333333333332%"),
    height: hp("3.28125%"),
    top: hp("35.78124999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.55555555555555%"),
    backgroundColor: "rgba(94, 118, 100, 1)",
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9
  },
  View_22_94: {
    width: wp("24.444444444444443%"),
    height: hp("3.28125%"),
    top: hp("35.78124999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.888888888888886%"),
    backgroundColor: "rgba(94, 118, 100, 1)",
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9
  },
  View_22_99: {
    width: wp("18.055555555555554%"),
    top: hp("36.25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.833333333333334%"),
    justifyContent: "flex-start"
  },
  Text_22_99: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.16666662693023682,
    textTransform: "none"
  },
  View_22_104: {
    width: wp("7.5%"),
    top: hp("36.25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.72222222222222%"),
    justifyContent: "flex-start"
  },
  Text_22_104: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.16666662693023682,
    textTransform: "none"
  },
  View_22_109: {
    width: wp("17.5%"),
    top: hp("36.25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.5%"),
    justifyContent: "flex-start"
  },
  Text_22_109: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.16666662693023682,
    textTransform: "none"
  },
  View_22_114: {
    width: wp("89.16666666666667%"),
    height: hp("2.34375%"),
    top: hp("27.03125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_22_74: {
    width: wp("21.944444444444443%"),
    top: hp("32.1875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.666666666666666%"),
    justifyContent: "flex-start"
  },
  Text_22_74: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.16666662693023682,
    textTransform: "none"
  },
  View_22_119: {
    width: wp("36.11111111111111%"),
    top: hp("28.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.666666666666666%"),
    justifyContent: "flex-start"
  },
  Text_22_119: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.16666662693023682,
    textTransform: "none"
  },
  View_44_59: {
    width: wp("6.666666666666667%"),
    height: hp("3.75%"),
    top: hp("29.375000000000007%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.27777777777777%")
  },
  ImageBackground_43_53: {
    width: wp("6.666666666666667%"),
    height: hp("3.75%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_27_429: {
    width: wp("89.16666666666667%"),
    minWidth: wp("89.16666666666667%"),
    height: hp("40%"),
    minHeight: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("41.87500000000001%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_430: {
    width: wp("89.16666666666667%"),
    height: hp("23.75%"),
    top: hp("16.249999999999993%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(144, 136, 53, 1)",
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9
  },
  ImageBackground_27_465: {
    width: wp("89.16666666666667%"),
    height: hp("28.125%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_27_432: {
    width: wp("26.38888888888889%"),
    height: hp("3.28125%"),
    top: hp("35.78124999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.666666666666666%"),
    backgroundColor: "rgba(116, 159, 131, 1)",
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9
  },
  View_27_433: {
    width: wp("15.833333333333332%"),
    height: hp("3.28125%"),
    top: hp("35.78124999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.55555555555555%"),
    backgroundColor: "rgba(116, 159, 131, 1)",
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9
  },
  View_27_434: {
    width: wp("24.444444444444443%"),
    height: hp("3.28125%"),
    top: hp("35.78124999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.888888888888886%"),
    backgroundColor: "rgba(116, 159, 131, 1)",
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9
  },
  View_27_435: {
    width: wp("16.666666666666664%"),
    top: hp("36.24999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.388888888888889%"),
    justifyContent: "flex-start"
  },
  Text_27_435: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.16666662693023682,
    textTransform: "none"
  },
  View_27_436: {
    width: wp("7.5%"),
    top: hp("36.24999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.72222222222222%"),
    justifyContent: "flex-start"
  },
  Text_27_436: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.16666662693023682,
    textTransform: "none"
  },
  View_27_437: {
    width: wp("19.72222222222222%"),
    top: hp("36.24999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.388888888888886%"),
    justifyContent: "flex-start"
  },
  Text_27_437: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.16666662693023682,
    textTransform: "none"
  },
  View_27_438: {
    width: wp("89.16666666666667%"),
    height: hp("2.34375%"),
    top: hp("27.031249999999993%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_27_439: {
    width: wp("27.22222222222222%"),
    top: hp("32.18749999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.666666666666666%"),
    justifyContent: "flex-start"
  },
  Text_27_439: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.16666662693023682,
    textTransform: "none"
  },
  View_27_440: {
    width: wp("37.22222222222222%"),
    top: hp("28.749999999999993%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.666666666666666%"),
    justifyContent: "flex-start"
  },
  Text_27_440: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.16666662693023682,
    textTransform: "none"
  },
  View_44_72: {
    width: wp("6.666666666666667%"),
    height: hp("3.75%"),
    top: hp("29.374999999999993%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.27777777777777%")
  },
  ImageBackground_44_73: {
    width: wp("6.666666666666667%"),
    height: hp("3.75%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_27_441: {
    width: wp("89.16666666666667%"),
    minWidth: wp("89.16666666666667%"),
    height: hp("40%"),
    minHeight: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("83.75%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_442: {
    width: wp("89.16666666666667%"),
    height: hp("23.75%"),
    top: hp("16.250000000000014%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(195, 121, 74, 1)",
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9
  },
  ImageBackground_27_467: {
    width: wp("89.16666666666667%"),
    height: hp("28.125%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_27_444: {
    width: wp("26.38888888888889%"),
    height: hp("3.28125%"),
    top: hp("35.78125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.666666666666666%"),
    backgroundColor: "rgba(170, 43, 37, 1)",
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9
  },
  View_27_445: {
    width: wp("15.833333333333332%"),
    height: hp("3.28125%"),
    top: hp("35.78125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.55555555555555%"),
    backgroundColor: "rgba(170, 43, 37, 1)",
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9
  },
  View_27_446: {
    width: wp("24.444444444444443%"),
    height: hp("3.28125%"),
    top: hp("35.78125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.888888888888886%"),
    backgroundColor: "rgba(170, 43, 37, 1)",
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9
  },
  View_27_447: {
    width: wp("16.666666666666664%"),
    top: hp("36.25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.388888888888889%"),
    justifyContent: "flex-start"
  },
  Text_27_447: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.16666662693023682,
    textTransform: "none"
  },
  View_27_448: {
    width: wp("7.5%"),
    top: hp("36.25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.72222222222222%"),
    justifyContent: "flex-start"
  },
  Text_27_448: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.16666662693023682,
    textTransform: "none"
  },
  View_27_449: {
    width: wp("19.72222222222222%"),
    top: hp("36.25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.388888888888886%"),
    justifyContent: "flex-start"
  },
  Text_27_449: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.16666662693023682,
    textTransform: "none"
  },
  View_27_450: {
    width: wp("89.16666666666667%"),
    height: hp("2.34375%"),
    top: hp("27.03125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_27_451: {
    width: wp("19.72222222222222%"),
    top: hp("32.1875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.666666666666666%"),
    justifyContent: "flex-start"
  },
  Text_27_451: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.16666662693023682,
    textTransform: "none"
  },
  View_27_452: {
    width: wp("41.66666666666667%"),
    top: hp("28.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.666666666666666%"),
    justifyContent: "flex-start"
  },
  Text_27_452: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.16666662693023682,
    textTransform: "none"
  },
  View_44_76: {
    width: wp("6.666666666666667%"),
    height: hp("3.75%"),
    top: hp("29.375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.27777777777777%")
  },
  ImageBackground_44_77: {
    width: wp("6.666666666666667%"),
    height: hp("3.75%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_209_95: {
    width: wp("7.777777777777778%"),
    height: hp("4.375%"),
    top: hp("1.5625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.777777777777777%")
  },
  View_27_453: {
    width: wp("89.16666666666667%"),
    minWidth: wp("89.16666666666667%"),
    height: hp("40%"),
    minHeight: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("125.625%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_27_454: {
    width: wp("89.16666666666667%"),
    height: hp("23.75%"),
    top: hp("16.25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(2, 99, 115, 1)",
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9
  },
  ImageBackground_27_468: {
    width: wp("89.16666666666667%"),
    height: hp("28.125%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_27_456: {
    width: wp("26.38888888888889%"),
    height: hp("3.28125%"),
    top: hp("35.78125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.666666666666666%"),
    backgroundColor: "rgba(69, 60, 130, 1)",
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9
  },
  View_27_457: {
    width: wp("15.833333333333332%"),
    height: hp("3.28125%"),
    top: hp("35.78125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.55555555555555%"),
    backgroundColor: "rgba(69, 60, 130, 1)",
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9
  },
  View_27_458: {
    width: wp("24.444444444444443%"),
    height: hp("3.28125%"),
    top: hp("35.78125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.888888888888886%"),
    backgroundColor: "rgba(69, 60, 130, 1)",
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9
  },
  View_27_459: {
    width: wp("18.055555555555554%"),
    top: hp("36.25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.833333333333334%"),
    justifyContent: "flex-start"
  },
  Text_27_459: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.16666662693023682,
    textTransform: "none"
  },
  View_27_460: {
    width: wp("8.055555555555555%"),
    top: hp("36.25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.44444444444444%"),
    justifyContent: "flex-start"
  },
  Text_27_460: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.16666662693023682,
    textTransform: "none"
  },
  View_27_461: {
    width: wp("11.38888888888889%"),
    top: hp("36.25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.55555555555556%"),
    justifyContent: "flex-start"
  },
  Text_27_461: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.16666662693023682,
    textTransform: "none"
  },
  View_27_462: {
    width: wp("89.16666666666667%"),
    height: hp("2.34375%"),
    top: hp("27.03125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_27_463: {
    width: wp("13.333333333333334%"),
    top: hp("32.1875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.666666666666666%"),
    justifyContent: "flex-start"
  },
  Text_27_463: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.16666662693023682,
    textTransform: "none"
  },
  View_27_464: {
    width: wp("51.388888888888886%"),
    top: hp("28.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.666666666666666%"),
    justifyContent: "flex-start"
  },
  Text_27_464: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.16666662693023682,
    textTransform: "none"
  },
  View_44_84: {
    width: wp("6.666666666666667%"),
    height: hp("3.75%"),
    top: hp("29.375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.27777777777777%")
  },
  ImageBackground_44_85: {
    width: wp("6.666666666666667%"),
    height: hp("3.75%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_27_179: {
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
  ImageBackground_190_186: {
    width: wp("13.699233796861437%"),
    height: hp("6.544902920722961%"),
    top: hp("-1.5593719482421875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2.667371961805557%")
  },
  View_1_210: {
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
  View_1_217: {
    width: wp("56.388888888888886%"),
    minWidth: wp("56.388888888888886%"),
    height: hp("14.84375%"),
    minHeight: hp("14.84375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-12.28695339626736%"),
    top: hp("-1.93603515625%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_211: {
    flexGrow: 1,
    width: wp("56.388888888888886%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_211: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 38,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3333333432674408,
    textTransform: "none"
  },
  View_1_212: {
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
  Text_1_212: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.8333333730697632,
    textTransform: "none"
  },
  View_1_222: {
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
  View_1_224: {
    width: wp("100%"),
    height: hp("9.53125%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_1_226: {
    width: wp("8.333333333333332%"),
    height: hp("4.6875%"),
    top: hp("2.1875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.38888888888889%")
  },
  TouchableOpacity_1_225: {
    width: wp("8.333333333333332%"),
    height: hp("4.6875%"),
    top: hp("2.1875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.88888888888889%")
  },
  ImageBackground_1_227: {
    width: wp("8.333333333333332%"),
    height: hp("4.6875%"),
    top: hp("2.1875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.88888888888889%")
  },
  TouchableOpacity_27_177: {
    width: wp("8.333333333333332%"),
    height: hp("4.6875%"),
    top: hp("2.1875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.388888888888886%")
  },
  View_131_208: {
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
  View_131_209: {
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
  View_131_210: {
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
  View_131_211: {
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
  ImageBackground_131_212: {
    width: wp("0.310295754008823%"),
    height: hp("0.5454406887292862%"),
    top: hp("0.545387268066406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.352579752604157%")
  },
  View_131_213: {
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
  View_131_214: {
    width: wp("4.887144300672743%"),
    height: hp("2.0454025268554688%"),
    top: hp("1.7187500000000002%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.98773871527779%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_131_215: {
    width: wp("3.5683915350172257%"),
    height: hp("1.4999791979789734%"),
    top: hp("0.18177032470703125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6206088595920107%")
  },
  View_131_219: {
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
  ImageBackground_131_220: {
    width: wp("3.9562487602233887%"),
    height: hp("1.4545528590679169%"),
    top: hp("0.0909042358398433%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.15514797634548927%")
  },
  View_131_225: {
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
  Text_131_225: {
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
