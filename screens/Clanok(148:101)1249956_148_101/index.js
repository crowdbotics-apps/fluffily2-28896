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
      <View style={styles.View_148_164}>
        <Text style={styles.Text_148_164}>
          {" "}
          Aj Vy máte možnosť pripojiť sa k ostatným rozprávkarom a napísať
          vlastný príbeh pre deti. At vero eos et accusamus et iusto odio
          dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
          atque corrupti quos dolores et quas molestias excepturi sint occaecati
          cupiditate non provident, similique sunt in culpa qui officia deserunt
          mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum
          facilis est et expedita distinctio. Nam libero tempore, cum soluta
          nobis est eligendi optio cumque nihil impedit quo minus id quod maxime
          placeat facere possimus, omnis voluptas assumenda est, omnis dolor
          repellendus. Temporibus autem quibusdam et aut officiis debitis aut
          rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint
          et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente
          delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut
          perferendis doloribus asperiores repellat. Sed ut perspiciatis unde
          omnis iste natus error sit voluptatem accusantium doloremque
          laudantium: totam rem aperiam, eaque ipsa quae ab illo inventore
          veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
          enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
          sed quia consequuntur magni dolores eos qui ratione voluptatem sequi
          nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
          amet, consectetur, adipisci velit, sed quia non numquam eius modi
          tempora incidunt ut labore et dolore magnam aliquam quaerat
          voluptatem.
        </Text>
      </View>
      <View style={styles.View_148_162}>
        <Text style={styles.Text_148_162}>Staňte sa aj Vy rozprávkarom!</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4213/b53d/7b131e6483d127257357c428cb0c0fd8"
        }}
        style={styles.ImageBackground_150_253}
      />
      <View style={styles.View_148_120}>
        <View style={styles.View_148_121} />
        <View style={styles.View_148_122}>
          <View style={styles.View_148_123} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d56e/8bf5/d38aa0486ff0e86901e3cfaab704c0d1"
            }}
            style={styles.ImageBackground_148_124}
          />
          <View style={styles.View_148_125} />
        </View>
        <View style={styles.View_163_113}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c49/5d02/4835e02c8f72d5445b5e30627029d54d"
            }}
            style={styles.ImageBackground_163_114}
          />
        </View>
        <View style={styles.View_148_131}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ba9b/f01a/5f53fb5d12a7c0a65aa45800410cefcb"
            }}
            style={styles.ImageBackground_148_132}
          />
        </View>
        <View style={styles.View_148_137}>
          <Text style={styles.Text_148_137}>9:27</Text>
        </View>
      </View>
      <View style={styles.View_148_138}>
        <View style={styles.View_148_139} />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ddb/a89d/ffa40ba6d571cecc353303fe760b8726"
          }}
          style={styles.TouchableOpacity_148_140}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("202_110"))
          }
        />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b3a6/38a4/bf319fec0990d74b632d6843e2c9106b"
          }}
          style={styles.TouchableOpacity_148_141}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("1_4"))
          }
        />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5358/a49e/33aa6554be2159e2ff67683a924d017b"
          }}
          style={styles.TouchableOpacity_148_142}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("20_53"))
          }
        />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/622c/5782/684400b1232db44ea1e7aeaa45e5b9b4"
          }}
          style={styles.TouchableOpacity_148_143}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("144_438"))
          }
        />
      </View>
      <View style={styles.View_190_464}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f78f/aac3/058d7a689bfb93ba3a629f201de0696f"
          }}
          style={styles.ImageBackground_190_465}
        />
        <View style={styles.View_190_466}>
          <View style={styles.View_190_467}>
            <View style={styles.View_I190_467_1_211}>
              <Text style={styles.Text_I190_467_1_211}>Fluffily</Text>
            </View>
          </View>
          <View style={styles.View_190_468}>
            <Text style={styles.Text_190_468}>Brána do sveta fantázie</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("169.12568306010928%") },
  View_148_164: {
    width: wp("88.88888888888889%"),
    minWidth: wp("88.88888888888889%"),
    minHeight: hp("135.38251366120218%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555555%"),
    top: hp("23.90710382513661%"),
    justifyContent: "flex-start"
  },
  Text_148_164: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16666662693023682,
    textTransform: "none"
  },
  View_148_162: {
    width: wp("82.77777777777777%"),
    minWidth: wp("82.77777777777777%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.61111111111111%"),
    top: hp("18.852459016393443%"),
    justifyContent: "flex-start"
  },
  Text_148_162: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.16666662693023682,
    textTransform: "none"
  },
  ImageBackground_150_253: {
    width: wp("83.69941711425781%"),
    minWidth: wp("83.69941711425781%"),
    height: hp("21.85792349726776%"),
    minHeight: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.055555555555555%"),
    top: hp("106.55737704918033%"),
    resizeMode: "cover",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_148_120: {
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
  View_148_121: {
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
  View_148_122: {
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
  View_148_123: {
    width: wp("5.11986944410536%"),
    height: hp("1.3511825780399511%"),
    top: hp("0.03968952783469937%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 0.8727049827575684
  },
  ImageBackground_148_124: {
    width: wp("0.310295754008823%"),
    height: hp("0.476888033861671%"),
    top: hp("0.4768413272711749%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.352579752604157%")
  },
  View_148_125: {
    width: wp("4.188984500037299%"),
    height: hp("0.8742948047450332%"),
    top: hp("0.2781268677424864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.46542697482638573%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.8999999761581421
  },
  View_163_113: {
    width: wp("4.887144300672743%"),
    height: hp("1.7883291661413643%"),
    top: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.9888916015625%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_163_114: {
    width: wp("3.5683915350172257%"),
    height: hp("1.3114664723964335%"),
    top: hp("0.15892487406079248%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6205919053819429%")
  },
  View_148_131: {
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
  ImageBackground_148_132: {
    width: wp("3.9562487602233887%"),
    height: hp("1.2717402046495447%"),
    top: hp("0.07947911330259538%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1551310221354214%")
  },
  View_148_137: {
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
  Text_148_137: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.4848484396934509,
    textTransform: "none"
  },
  View_148_138: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8.333333333333332%"),
    minHeight: hp("8.333333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("160.79234972677597%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_148_139: {
    width: wp("100%"),
    height: hp("8.333333333333332%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  TouchableOpacity_148_140: {
    width: wp("8.333333333333332%"),
    height: hp("4.098360655737705%"),
    top: hp("1.912568306010911%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.88888888888889%")
  },
  TouchableOpacity_148_141: {
    width: wp("8.333333333333332%"),
    height: hp("4.098360655737705%"),
    top: hp("1.912568306010911%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.38888888888889%")
  },
  TouchableOpacity_148_142: {
    width: wp("8.333333333333332%"),
    height: hp("4.098360655737705%"),
    top: hp("1.912568306010911%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.88888888888889%")
  },
  TouchableOpacity_148_143: {
    width: wp("8.333333333333332%"),
    height: hp("4.098360655737705%"),
    top: hp("1.912568306010911%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.388888888888886%")
  },
  View_190_464: {
    width: wp("31.974461873372395%"),
    minWidth: wp("31.974461873372395%"),
    height: hp("8.842426571038251%"),
    minHeight: hp("8.842426571038251%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.23143174913194%"),
    top: hp("6.883965163934426%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_190_465: {
    width: wp("13.699233796861437%"),
    height: hp("5.722319493528272%"),
    top: hp("-1.3633853099385247%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2.667388916015625%")
  },
  View_190_466: {
    width: wp("31.974461873372395%"),
    minWidth: wp("31.974461873372395%"),
    height: hp("8.842426571038251%"),
    minHeight: hp("8.842426571038251%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_190_467: {
    width: wp("56.388888888888886%"),
    minWidth: wp("56.388888888888886%"),
    height: hp("12.978142076502733%"),
    minHeight: hp("12.978142076502733%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-12.286970350477429%"),
    top: hp("-1.692708333333333%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I190_467_1_211: {
    flexGrow: 1,
    width: wp("56.388888888888886%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I190_467_1_211: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 38,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3333333432674408,
    textTransform: "none"
  },
  View_190_468: {
    width: wp("39.166666666666664%"),
    minWidth: wp("39.166666666666664%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-3.6758761935763857%"),
    top: hp("7.187073087431693%"),
    justifyContent: "flex-start"
  },
  Text_190_468: {
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
