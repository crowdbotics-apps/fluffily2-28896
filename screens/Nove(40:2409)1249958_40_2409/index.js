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
      <View style={styles.View_44_142}>
        <View style={styles.View_144_437}>
          <TouchableOpacity
            style={styles.TouchableOpacity_44_92}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("44_158"))
            }
          >
            <View style={styles.View_40_2444} />
            <View style={styles.View_40_2445}>
              <Text style={styles.Text_40_2445}>Mirjam Senim</Text>
            </View>
            <View style={styles.View_40_2446}>
              <Text style={styles.Text_40_2446}>Príbeh Khadily</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9cc7/257b/cdeec841b67f06e8ba292b6335eaf7be"
              }}
              style={styles.ImageBackground_40_2443}
            />
            <View style={styles.View_44_88}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca67/2e92/927c59e066f1fb2d9e022ee670d9b7f0"
                }}
                style={styles.ImageBackground_44_89}
              />
            </View>
          </TouchableOpacity>
          <View style={styles.View_44_102}>
            <View style={styles.View_44_103} />
            <View style={styles.View_44_104}>
              <Text style={styles.Text_44_104}>Kristína Mičíková</Text>
            </View>
            <View style={styles.View_44_105}>
              <Text style={styles.Text_44_105}>O temnom lese</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5535/4f5f/684a7d72f9944525a56d500d7f7e83b3"
              }}
              style={styles.ImageBackground_44_138}
            />
            <View style={styles.View_44_107}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca67/2e92/927c59e066f1fb2d9e022ee670d9b7f0"
                }}
                style={styles.ImageBackground_44_108}
              />
            </View>
          </View>
          <View style={styles.View_44_111}>
            <View style={styles.View_44_112} />
            <View style={styles.View_44_113}>
              <Text style={styles.Text_44_113}>Jozef Tlelka</Text>
            </View>
            <View style={styles.View_44_114}>
              <Text style={styles.Text_44_114}>Tajomná jaskyňa</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae0c/dd3b/5e26ec930b8995b1b1f52d87dab388be"
              }}
              style={styles.ImageBackground_44_139}
            />
            <View style={styles.View_44_116}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca67/2e92/927c59e066f1fb2d9e022ee670d9b7f0"
                }}
                style={styles.ImageBackground_44_117}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/74fa/efb4/cd495cba9d877128e5dd6666bba62456"
              }}
              style={styles.ImageBackground_209_98}
            />
          </View>
          <View style={styles.View_44_120}>
            <View style={styles.View_44_121} />
            <View style={styles.View_44_122}>
              <Text style={styles.Text_44_122}>Mirjam Senim</Text>
            </View>
            <View style={styles.View_44_123}>
              <Text style={styles.Text_44_123}>Príbeh Khadily</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9cc7/257b/cdeec841b67f06e8ba292b6335eaf7be"
              }}
              style={styles.ImageBackground_44_124}
            />
            <View style={styles.View_44_125}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca67/2e92/927c59e066f1fb2d9e022ee670d9b7f0"
                }}
                style={styles.ImageBackground_44_126}
              />
            </View>
          </View>
          <View style={styles.View_44_129}>
            <View style={styles.View_44_130} />
            <View style={styles.View_44_131}>
              <Text style={styles.Text_44_131}>Anonym</Text>
            </View>
            <View style={styles.View_44_132}>
              <Text style={styles.Text_44_132}>Bradatý pán Hviezda</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4b72/aecf/73d896a14d6c99b25d4fdd1f1d2f5d5c"
              }}
              style={styles.ImageBackground_44_140}
            />
            <View style={styles.View_44_134}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca67/2e92/927c59e066f1fb2d9e022ee670d9b7f0"
                }}
                style={styles.ImageBackground_44_135}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_40_2439}>
        <Text style={styles.Text_40_2439}>Nové</Text>
      </View>
      <View style={styles.View_44_143}>
        <View style={styles.View_44_144} />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ddb/a89d/ffa40ba6d571cecc353303fe760b8726"
          }}
          style={styles.TouchableOpacity_44_145}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("202_110"))
          }
        />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b3a6/38a4/bf319fec0990d74b632d6843e2c9106b"
          }}
          style={styles.TouchableOpacity_44_146}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("1_4"))
          }
        />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5358/a49e/33aa6554be2159e2ff67683a924d017b"
          }}
          style={styles.TouchableOpacity_44_147}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("20_53"))
          }
        />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/622c/5782/684400b1232db44ea1e7aeaa45e5b9b4"
          }}
          style={styles.TouchableOpacity_44_148}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("144_438"))
          }
        />
      </View>
      <View style={styles.View_131_286}>
        <View style={styles.View_131_287} />
        <View style={styles.View_131_288}>
          <View style={styles.View_131_289} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d56e/8bf5/d38aa0486ff0e86901e3cfaab704c0d1"
            }}
            style={styles.ImageBackground_131_290}
          />
          <View style={styles.View_131_291} />
        </View>
        <View style={styles.View_131_292}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c49/5d02/4835e02c8f72d5445b5e30627029d54d"
            }}
            style={styles.ImageBackground_131_293}
          />
        </View>
        <View style={styles.View_131_297}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ba9b/f01a/5f53fb5d12a7c0a65aa45800410cefcb"
            }}
            style={styles.ImageBackground_131_298}
          />
        </View>
        <View style={styles.View_131_303}>
          <Text style={styles.Text_131_303}>9:27</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("100%") },
  View_44_142: {
    width: wp("89.16666666666667%"),
    minWidth: wp("89.16666666666667%"),
    height: hp("76.71875%"),
    minHeight: hp("76.71875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555555%"),
    top: hp("13.750000000000002%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_144_437: {
    width: wp("89.16666666666667%"),
    minWidth: wp("89.16666666666667%"),
    height: hp("91.25%"),
    minHeight: hp("91.25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  TouchableOpacity_44_92: {
    width: wp("89.16666666666667%"),
    minWidth: wp("89.16666666666667%"),
    height: hp("16.5625%"),
    minHeight: hp("16.5625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_40_2444: {
    width: wp("89.16666666666667%"),
    height: hp("16.5625%"),
    top: hp("0%"),
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
  View_40_2445: {
    width: wp("21.944444444444443%"),
    top: hp("8.906249999999998%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.388888888888886%"),
    justifyContent: "flex-start"
  },
  Text_40_2445: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.16666662693023682,
    textTransform: "none"
  },
  View_40_2446: {
    width: wp("36.11111111111111%"),
    top: hp("5.468749999999998%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.388888888888886%"),
    justifyContent: "flex-start"
  },
  Text_40_2446: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.16666662693023682,
    textTransform: "none"
  },
  ImageBackground_40_2443: {
    width: wp("26.666666666666668%"),
    height: hp("15%"),
    top: hp("0.78125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888893%"),
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_44_88: {
    width: wp("6.666666666666667%"),
    height: hp("3.75%"),
    top: hp("1.7187499999999982%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.72222222222221%")
  },
  ImageBackground_44_89: {
    width: wp("6.666666666666667%"),
    height: hp("3.75%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_44_102: {
    width: wp("89.16666666666667%"),
    minWidth: wp("89.16666666666667%"),
    height: hp("16.5625%"),
    minHeight: hp("16.5625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18.4375%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_44_103: {
    width: wp("89.16666666666667%"),
    height: hp("16.5625%"),
    top: hp("0%"),
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
  View_44_104: {
    width: wp("27.22222222222222%"),
    top: hp("8.90625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.388888888888886%"),
    justifyContent: "flex-start"
  },
  Text_44_104: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.16666662693023682,
    textTransform: "none"
  },
  View_44_105: {
    width: wp("37.22222222222222%"),
    top: hp("5.46875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.388888888888886%"),
    justifyContent: "flex-start"
  },
  Text_44_105: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.16666662693023682,
    textTransform: "none"
  },
  ImageBackground_44_138: {
    width: wp("26.666666666666668%"),
    height: hp("15%"),
    top: hp("0.78125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888893%"),
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_44_107: {
    width: wp("6.666666666666667%"),
    height: hp("3.75%"),
    top: hp("1.71875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.72222222222221%")
  },
  ImageBackground_44_108: {
    width: wp("6.666666666666667%"),
    height: hp("3.75%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_44_111: {
    width: wp("89.16666666666667%"),
    minWidth: wp("89.16666666666667%"),
    height: hp("16.5625%"),
    minHeight: hp("16.5625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("36.875%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_44_112: {
    width: wp("89.16666666666667%"),
    height: hp("16.5625%"),
    top: hp("0%"),
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
  View_44_113: {
    width: wp("19.72222222222222%"),
    top: hp("8.90625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.388888888888886%"),
    justifyContent: "flex-start"
  },
  Text_44_113: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.16666662693023682,
    textTransform: "none"
  },
  View_44_114: {
    width: wp("41.66666666666667%"),
    top: hp("5.46875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.388888888888886%"),
    justifyContent: "flex-start"
  },
  Text_44_114: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.16666662693023682,
    textTransform: "none"
  },
  ImageBackground_44_139: {
    width: wp("26.666666666666668%"),
    height: hp("15%"),
    top: hp("0.78125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888893%"),
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_44_116: {
    width: wp("6.666666666666667%"),
    height: hp("3.75%"),
    top: hp("1.71875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.72222222222221%")
  },
  ImageBackground_44_117: {
    width: wp("6.666666666666667%"),
    height: hp("3.75%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_209_98: {
    width: wp("6.666667196485731%"),
    height: hp("3.750000298023224%"),
    top: hp("0.78125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888893%")
  },
  View_44_120: {
    width: wp("89.16666666666667%"),
    minWidth: wp("89.16666666666667%"),
    height: hp("16.5625%"),
    minHeight: hp("16.5625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("55.3125%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_44_121: {
    width: wp("89.16666666666667%"),
    height: hp("16.5625%"),
    top: hp("0%"),
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
  View_44_122: {
    width: wp("21.944444444444443%"),
    top: hp("8.90625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.388888888888886%"),
    justifyContent: "flex-start"
  },
  Text_44_122: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.16666662693023682,
    textTransform: "none"
  },
  View_44_123: {
    width: wp("36.11111111111111%"),
    top: hp("5.46875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.388888888888886%"),
    justifyContent: "flex-start"
  },
  Text_44_123: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.16666662693023682,
    textTransform: "none"
  },
  ImageBackground_44_124: {
    width: wp("26.666666666666668%"),
    height: hp("15%"),
    top: hp("0.78125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888893%"),
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_44_125: {
    width: wp("6.666666666666667%"),
    height: hp("3.75%"),
    top: hp("1.71875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.72222222222221%")
  },
  ImageBackground_44_126: {
    width: wp("6.666666666666667%"),
    height: hp("3.75%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_44_129: {
    width: wp("89.16666666666667%"),
    minWidth: wp("89.16666666666667%"),
    height: hp("17.5%"),
    minHeight: hp("17.5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("73.75%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_44_130: {
    width: wp("89.16666666666667%"),
    height: hp("16.5625%"),
    top: hp("0%"),
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
  View_44_131: {
    width: wp("13.333333333333334%"),
    top: hp("11.40625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.388888888888886%"),
    justifyContent: "flex-start"
  },
  Text_44_131: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.16666662693023682,
    textTransform: "none"
  },
  View_44_132: {
    width: wp("31.38888888888889%"),
    top: hp("5.46875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.388888888888886%"),
    justifyContent: "flex-start"
  },
  Text_44_132: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16666662693023682,
    textTransform: "none"
  },
  ImageBackground_44_140: {
    width: wp("26.666666666666668%"),
    height: hp("15%"),
    top: hp("0.78125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888893%"),
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_44_134: {
    width: wp("6.666666666666667%"),
    height: hp("3.75%"),
    top: hp("1.71875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.72222222222221%")
  },
  ImageBackground_44_135: {
    width: wp("6.666666666666667%"),
    height: hp("3.75%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_40_2439: {
    width: wp("13.88888888888889%"),
    minWidth: wp("13.88888888888889%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555555%"),
    top: hp("7.03125%"),
    justifyContent: "center"
  },
  Text_40_2439: {
    color: "rgba(190, 190, 190, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.09051411598920822,
    textTransform: "none"
  },
  View_44_143: {
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
  View_44_144: {
    width: wp("100%"),
    height: hp("9.53125%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  TouchableOpacity_44_145: {
    width: wp("8.333333333333332%"),
    height: hp("4.6875%"),
    top: hp("2.1875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.88888888888889%")
  },
  TouchableOpacity_44_146: {
    width: wp("8.333333333333332%"),
    height: hp("4.6875%"),
    top: hp("2.1875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.38888888888889%")
  },
  TouchableOpacity_44_147: {
    width: wp("8.333333333333332%"),
    height: hp("4.6875%"),
    top: hp("2.1875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.88888888888889%")
  },
  TouchableOpacity_44_148: {
    width: wp("8.333333333333332%"),
    height: hp("4.6875%"),
    top: hp("2.1875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.388888888888886%")
  },
  View_131_286: {
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
  View_131_287: {
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
  View_131_288: {
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
  View_131_289: {
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
  ImageBackground_131_290: {
    width: wp("0.310295754008823%"),
    height: hp("0.5454406887292862%"),
    top: hp("0.545387268066406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.352579752604157%")
  },
  View_131_291: {
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
  View_131_292: {
    width: wp("4.887144300672743%"),
    height: hp("2.045402228832245%"),
    top: hp("1.7187500000000002%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.98773871527779%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_131_293: {
    width: wp("3.5683915350172257%"),
    height: hp("1.4999882876873016%"),
    top: hp("0.18177032470703125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6206046210394902%")
  },
  View_131_297: {
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
  ImageBackground_131_298: {
    width: wp("3.9562487602233887%"),
    height: hp("1.4545528590679169%"),
    top: hp("0.0909042358398433%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.15514797634548927%")
  },
  View_131_303: {
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
  Text_131_303: {
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
