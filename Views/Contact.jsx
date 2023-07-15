import {
  View,
  Text,
  ScrollView,
  TouchableHighlight,
  ImageBackground,
  TextInput,
  Dimensions,
  StyleSheet,
  Image,
  Linking,
  Button,
} from 'react-native';
import React from 'react';
import {Sizes} from './Home';

import FaIcon from 'react-native-vector-icons/FontAwesome';

export const ReachUsRowsData = [
  {
    iconName: 'map-marker',
    text: 'BP: 8779, Yaounde, CAMEROON',
    url: '',
  },
  {
    iconName: 'envelope-o',
    text: 'contact@dmservices.cm',
    url: 'mailto:contact@dmservices.cm',
  },
  {
    iconName: 'phone',
    text: '+237 691367079',
    url: 'tel:+237691367079',
  },
  {
    iconName: 'whatsapp',
    text: '+971 55 659 3656',
    url: `whatsapp://send?phone=${'+971556593656'}&text=${'hello dmservices'}`,
  },
  {
    iconName: 'linkedin',
    text: 'LinkedIn',
    url: 'https://linkedIn.com',
  },
  {
    iconName: 'instagram',
    text: 'Instagram',
    url: 'https://instagram.com',
  },
];

const maxHeight = Dimensions.get('window').height - 50;
const maxWidth = Dimensions.get('window').width;

const Contact = () => {
  return (
    <ScrollView style={{backgroundColor: 'rgba(0,0,200,0.05)'}}>
      <View style={styles.Section1Container}>
        <ImageBackground
          style={styles.Section1ContainerPart1}
          source={{
            uri: 'https://dmservices.cm/wp-content/uploads/2020/01/about-bg-img.jpg',
          }}>
          <View style={styles.Section1ContainerPart1Main}>
            <Text
              style={{
                fontSize: 50,
                fontWeight: 'bold',
                color: 'white',
                textAlign: 'center',
              }}>
              Contact Us
            </Text>
            <Text
              style={{
                fontSize: Sizes.xl,
                fontWeight: 'bold',
                color: 'white',
                textAlign: 'center',
              }}>
              Contact for Premium Business Services
            </Text>
          </View>
        </ImageBackground>
        <View style={styles.Section1ContainerPart2}>
          <Text
            style={{
              color: 'black',
              fontSize: Sizes.xl,
              fontWeight: 'bold',
              marginTop: 45,
              marginBottom: 15,
              marginLeft: 15,
            }}>
            Request Free Consultation
          </Text>
          <View
            style={{
              margin: 20,
              padding: 20,
              gap: 13,
            }}>
            <TextInput
              placeholderTextColor={'rgb(102, 102, 102)'}
              style={styles.Section1ContainerPart2Input}
              placeholder="Your name*"
            />
            <TextInput
              placeholderTextColor={'rgb(102, 102, 102)'}
              style={styles.Section1ContainerPart2Input}
              placeholder="Your email*"
            />
            <TextInput
              placeholderTextColor={'rgb(102, 102, 102)'}
              style={styles.Section1ContainerPart2BigInput}
              placeholder="Your message*"
            />
            <TouchableHighlight
              style={{
                borderRadius: 5,
                backgroundColor: 'rgb(104, 120, 214)',
                alignSelf: 'flex-start',
                paddingHorizontal: 28,
                paddingVertical: 10,
              }}
              activeOpacity={0.8}
              underlayColor={'rgba(200, 200, 200,0.5)'}>
              <Text>SUBMIT</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>

      {/* section 2 */}
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginVertical: 30,
        }}>
        <Image
          style={{
            width: maxWidth - 40,
            objectFit: 'contain',
            height: maxWidth - 40,
          }}
          source={require('../medias/images/map1.png')}
        />
      </View>

      {/* section 3 */}
      <View
        style={{
          paddingHorizontal: 15,
        }}>
        <Text
          style={{
            fontSize: Sizes.xl,
            color: 'black',
            fontWeight: 'bold',
            marginVertical: 25,
          }}>
          Get In Touch
        </Text>
        <Text
          style={{
            fontSize: Sizes.l,
            color: 'black',
            fontWeight: 'bold',
            marginTop: 45,
            marginBottom: 10,
          }}>
          Call us Toll Free
        </Text>
        {/* <Text
          style={{
            fontSize: Sizes.xxl,
            color: '#6878d6',
            fontWeight: 'bold',
            marginTop: 10,
            marginBottom: 17,
          }}>
          
        </Text> */}
        <TouchableHighlight
          activeOpacity={0.8}
          style={{
            width: 'auto',
            backgroundColor: 'rgb(104, 120, 214)',
            paddingLeft: 30,
            paddingRight: 40,
            paddingVertical: 10,
            borderRadius: 10,
            display: 'flex',
            flexDirection: 'row',
            gap: 10,
            alignItems: 'center',
            alignSelf: 'flex-start',
          }}
          onPress={() => {
            Linking.openURL(`tel:+237691367079`);
          }}
          underlayColor={'rgba(200, 200, 200,0.5)'}>
          <>
            <FaIcon name="phone" size={25} />
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>
              (+237) 691367079
            </Text>
          </>
        </TouchableHighlight>
      </View>
      <View
        style={{
          width: maxWidth - 40,
          margin: 15,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: 'white',
          padding: 25,
          borderRadius: 15,
          gap: 15,
        }}>
        <Text
          style={{
            paddingTop: 10,
            paddingBottom: 10,
            fontSize: Sizes.xxl,
            color: 'rgb(57, 58, 86)',
            fontWeight: 'bold',
            textAlign: 'center',
            color: 'rgb(104, 120, 214)',
          }}>
          Would you like to start a project with us?
        </Text>
        <Text style={{color: 'black', textAlign: 'center', fontSize: Sizes.l}}>
          Digital Agency with a demonstrate in development and digital solution.
          Lets build digital future of Africa together with an amazing team.
        </Text>
        <TouchableHighlight
          activeOpacity={0.8}
          style={{
            width: 'auto',
            backgroundColor: 'rgb(104, 120, 214)',
            paddingHorizontal: 30,
            paddingVertical: 10,
            borderRadius: 10,
            display: 'flex',
            flexDirection: 'row',
            gap: 10,
            alignItems: 'center',
          }}
          onPress={() => {
            Linking.openURL(
              `whatsapp://send?phone=${'+971556593656'}&text=${'hello dmservices'}`,
            );
          }}
          underlayColor={'rgba(200, 200, 200,0.5)'}>
          <>
            <FaIcon name="whatsapp" size={25} />
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>
              +971 55 659 3656
            </Text>
          </>
        </TouchableHighlight>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  Section1Container: {
    height: maxHeight,
    width: maxWidth,
    display: 'flex',
    flexDirection: 'column',
  },
  Section1ContainerPart2: {
    display: 'flex',
    flexDirection: 'column',
    flexShrink: 0,
    margin: 15,
    backgroundColor: 'white',
  },
  Section1ContainerPart2Input: {
    height: 45,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'rgb(221, 221, 221)',
    backgroundColor: 'rgb(250, 250, 250)',
    paddingLeft: 15,
  },
  Section1ContainerPart2BigInput: {
    height: 100,
    borderRadius: 4,
    borderWidth: 1,
    backgroundColor: 'rgb(250, 250, 250)',
    borderColor: 'rgb(221, 221, 221)',
    paddingLeft: 15,
  },
  Section1ContainerPart1: {
    flexGrow: 1,
  },
  Section1ContainerPart1Main: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgba(0,0,100,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    gap: 35,
    flexGrow: 1,
  },
});

export const ReachUsRows = ({iconName, text, url}) => {
  return (
    <TouchableHighlight
      activeOpacity={0.8}
      style={{}}
      onPress={() => {
        if (url) {
          Linking.openURL(url);
        }
      }}
      underlayColor={'rgba(200, 200, 200,0.5)'}>
      <View
        style={{
          display: 'flex',
          gap: 15,
          flexDirection: 'row',
        }}>
        <FaIcon name={iconName} size={Sizes.xl} color="#6878d6" />
        <Text
          style={{
            fontSize: Sizes.l,
            color: 'black',
          }}>
          {text}
        </Text>
      </View>
    </TouchableHighlight>
  );
};

export default Contact;
