/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Rebound = require('rebound')
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
} = React;

var reactRebound = React.createClass({
  render: function() {
    // var springSystem = new Rebound.SpringSystem();
    // var spring = createSpring(springSystem, 40, 3);
    // var springConfig = spring.getSpringConfig();
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Image style={styles.aboutusImage} source={{uri: 'http://i.imgur.com/m6MLPLF.png'}} />
        <Text style={styles.aboutusText}>
          About Myntra
        </Text>
        <Image style={styles.mhImage} source={{uri: "http://media.giphy.com/media/aIFjd0I5BR7EI/giphy.gif"}} />
        <Text style={styles.onstopText}>
          The one stop shop for all your fashion and lifestyle needs.
        </Text>
        <View style={styles.arrayImagesContainer}>
          <Image style={styles.arrayImage} source={{uri: 'http://assets.myntassets.com/h_307,q_95,w_230/v1/images/style/properties/Roadster-Men-Khaki-Shelby-Slim-Fit-Casual-Shirt_cc1f6dec03706c022894c361de167e98_images_mini.jpg'}} />
          <Image style={styles.arrayImage} source={{uri: 'http://assets.myntassets.com/h_307,q_95,w_230/v1/images/style/properties/FabAlley-Women-Tops_bee76f2c07729bc7418faad00d0f4183_images_mini.jpg'}} />
          <Image style={styles.arrayImage} source={{uri: 'http://assets.myntassets.com/h_307,q_95,w_230/v1/images/style/properties/Wrangler-Men-Shirts_66e2eeacb2bae467c592ae78ff11d8c7_images_mini.jpg'}} />
          <Image style={styles.arrayImage} source={{uri: 'http://assets.myntassets.com/h_307,q_95,w_230/v1/images/style/properties/DressBerry-Women-Tops_0a16a1cd0905322a9851a8009d324c7c_images_mini.jpg'}} />
        </View>
        <Text style={styles.productsText}>
          The best products at the best prices.
        </Text>
      </ScrollView>
    );
  }
});

function createSpring(springSystem, friction, tension, rawValues) {
    var spring = springSystem.createSpring();
    var springConfig;
    if (rawValues) {
      springConfig = new Rebound.SpringConfig(friction, tension);
    } else {
      springConfig = Rebound.SpringConfig.fromOrigamiTensionAndFriction(friction, tension);
    }
    spring.setSpringConfig(springConfig);
    spring.setCurrentValue(0);
    return spring;
  }

var styles = StyleSheet.create({
  aboutusImage:{
    alignSelf: 'center',
    alignItems: 'stretch',
    justifyContent: 'center',
    width: 120,
    height: 120,
    margin: 10,
    borderRadius:20
  },
  aboutusText:{
    alignItems: 'stretch',
    textAlign: 'center',
    fontSize: 34
  },
  mhImage:{
    width:100,
    height:300,
    marginTop: 20,
    backgroundColor:'#bdc3c7',
    borderRadius: 10,
    marginLeft:10,
    marginRight:10
  },
  onstopText:{
    paddingBottom: 10,
    color: "#8e1ecb",
    textAlign: "center",
    paddingRight: 10,
    fontSize: 34,
    marginTop: 10
  },
  arrayImagesContainer:{
    flexDirection: "row",
    marginTop: 10,
    width:380,
    height:200,
    backgroundColor:'#bdc3c7'
  },
  arrayImage:{
    flex: 1,
    borderRadius: 20,
    margin: 5
  },
  productsText:{
    color: "#259965",
    alignItems: "stretch",
    textAlign: "center",
    fontSize: 35,
    justifyContent: "center",
    marginTop:10
  },
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    height:960
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
  },
  image:{
    width:100,
    height:100,
    backgroundColor: '#ff0000'
  }
});

AppRegistry.registerComponent('reactRebound', () => reactRebound);
