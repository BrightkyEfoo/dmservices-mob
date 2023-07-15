import {
  View,
  Text,
  ScrollView,
  TouchableHighlight,
  StyleSheet,
  Touchable,
  Linking,
  Button,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Sizes} from './Home';
import {ReachUsRows, ReachUsRowsData} from './Contact';
import SelectDropdown from 'react-native-select-dropdown';

const Settings = () => {
  //   const [actualViewIndex, setActualViewIndex] = useState(0);
  return (
    <ScrollView
      style={{
        backgroundColor: 'white',
      }}>
      <Text
        style={{
          color: 'black',
          fontSize: Sizes.xl,
          padding: 15,
          textAlign: 'center',
          backgroundColor: 'rgba(0,0,0,0.2)',
          fontWeight: 'bold',
          marginBottom: 15,
        }}>
        More
      </Text>
      <Image
        style={{
          height: 100,
          width: 100,
          alignSelf: 'center',
        }}
        source={{
          uri: 'https://dmservices.cm/wp-content/uploads/2023/02/Logo-DMServices-100x100.png',
        }}
      />
      <Text
        style={{
          color: 'black',
          fontSize: Sizes.l,
          padding: 5,
          paddingHorizontal: 25,
          textAlign: 'justify',
        }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis cumque
        repellat asperiores nesciunt possimus suscipit sed eos, corporis libero
        laborum quas beatae facilis quae quo. Voluptatum architecto explicabo
        illo libero.
      </Text>
      <View0 />
    </ScrollView>
  );
};

export default Settings;

const View0 = () => {
  const [displayedState, setDisplayedState] = useState({
    language: false,
    about: false,
    joinUs: false,
  });
  return (
    <View>
      <TouchableHighlight
        activeOpacity={0.8}
        style={{
          width: 'auto',
          backgroundColor: 'white',
          paddingHorizontal: 30,
          paddingVertical: 10,
          display: 'flex',
          flexDirection: 'row',
          gap: 10,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
        onPress={() => {
          setDisplayedState(prev => {
            return {...prev, language: !prev.language};
          });
        }}
        underlayColor={'rgba(200, 200, 200,0.5)'}>
        <>
          <View
            style={{
              width: 'auto',
              backgroundColor: 'white',
              display: 'flex',
              flexDirection: 'row',
              gap: 10,
              alignItems: 'center',
            }}>
            <Icon
              style={{
                width: 25,
              }}
              color="rgb(75,75,75)"
              name={'keyboard-o'}
              size={20}
            />
            <Text style={{color: 'black', fontSize: 18, fontWeight: 'bold'}}>
              Language
            </Text>
          </View>
          <Icon
            name={displayedState.language ? 'chevron-up' : 'chevron-down'}
            size={25}
            color={'black'}
          />
        </>
      </TouchableHighlight>
      {displayedState.language && <LanguageFragment />}
      <TouchableHighlight
        activeOpacity={0.8}
        style={{
          width: 'auto',
          backgroundColor: 'white',
          paddingHorizontal: 30,
          paddingVertical: 10,
          display: 'flex',
          flexDirection: 'row',
          gap: 10,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
        onPress={() => {
          setDisplayedState(prev => {
            return {...prev, about: !prev.about};
          });
        }}
        underlayColor={'rgba(200, 200, 200,0.5)'}>
        <>
          <View
            style={{
              width: 'auto',
              backgroundColor: 'white',
              display: 'flex',
              flexDirection: 'row',
              gap: 10,
              alignItems: 'center',
            }}>
            <Icon
              style={{
                width: 25,
              }}
              color="rgb(75,75,75)"
              name={'info'}
              size={20}
            />
            <Text style={{color: 'black', fontSize: 18, fontWeight: 'bold'}}>
              About
            </Text>
          </View>
          <Icon
            name={displayedState.about ? 'chevron-up' : 'chevron-down'}
            size={25}
            color={'black'}
          />
        </>
      </TouchableHighlight>

      <TouchableHighlight
        activeOpacity={0.8}
        style={{
          width: 'auto',
          backgroundColor: 'white',
          paddingHorizontal: 30,
          paddingVertical: 10,
          display: 'flex',
          flexDirection: 'row',
          gap: 10,
          alignItems: 'center',
          justifyContent:'space-between'
        }}
        onPress={() => {
          setDisplayedState(prev => {
            return {...prev, joinUs: !prev.joinUs};
          });
        }}
        underlayColor={'rgba(200, 200, 200,0.5)'}>
        <>
          <View style={{
              width: 'auto',
              backgroundColor: 'white',
              display: 'flex',
              flexDirection: 'row',
              gap: 10,
              alignItems: 'center',
            }}>
            <Icon
              style={{
                width: 25,
              }}
              color="rgb(75,75,75)"
              name={'id-card'}
              size={20}
            />
            <Text style={{color: 'black', fontSize: 18, fontWeight: 'bold'}}>
              Join Us
            </Text>
          </View>
          <Icon
            name={displayedState.joinUs ? 'chevron-up' : 'chevron-down'}
            size={25}
            color={'black'}
          />
        </>
      </TouchableHighlight>
      {displayedState.joinUs && <AboutView />}
    </View>
  );
};

const AboutView = () => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        alignItems: 'center',
      }}>
      {/* <TouchableHighlight
        activeOpacity={0.8}
        style={{
          width: 'auto',
          backgroundColor: 'white',
          paddingHorizontal: 10,
          paddingVertical: 5,
          display: 'flex',
          flexDirection: 'row',
          gap: 10,
          alignItems: 'center',
          alignSelf: 'flex-start',
        }}
        onPress={() => {
        }}
        underlayColor={'rgba(200, 200, 200,0.5)'}>
        <>
          <Icon color="rgb(75,75,75)" name={'chevron-left'} size={20} />
          <Text style={{color: 'black', fontSize: 18, fontWeight: 'bold'}}>
            Back
          </Text>
        </>
      </TouchableHighlight> */}
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 10,
          padding: 15,
        }}>
        {ReachUsRowsData.map((el, i) => {
          return (
            <ReachUsRows
              key={i}
              iconName={el.iconName}
              text={el.text}
              url={el.url}
            />
          );
        })}
      </View>

      {/* <View
        style={{
          backgroundColor: 'rgb(36, 42, 86)',
          padding: 25,
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <TouchableHighlight
            activeOpacity={0.8}
            style={styles.linkButtons('#1877f2')}
            onPress={() => {
              Linking.openURL('https://web.facebook.com/DMServices237');
            }}
            underlayColor={'rgba(200, 200, 200,0.5)'}>
            <Icon name="facebook" size={25} color="white" />
          </TouchableHighlight>
          <TouchableHighlight
            activeOpacity={0.8}
            style={styles.linkButtons('#1da1f2')}
            onPress={() => {}}
            underlayColor={'rgba(200, 200, 200,0.5)'}>
            <Icon name="twitter" size={25} color="white" />
          </TouchableHighlight>
          <TouchableHighlight
            activeOpacity={0.8}
            style={styles.linkButtons('red')}
            onPress={() => {
              Linking.openURL('mailto:contact@dmservices.cm');
            }}
            underlayColor={'rgba(200, 200, 200,0.5)'}>
            <Icon name="envelope" size={25} color="white" />
          </TouchableHighlight>
          <TouchableHighlight
            activeOpacity={0.8}
            style={styles.linkButtons('#fccc63')}
            onPress={() => {
              //   setActualViewIndex(0);
            }}
            underlayColor={'rgba(200, 200, 200,0.5)'}>
            <Icon name="instagram" size={25} color="white" />
          </TouchableHighlight>
          <TouchableHighlight
            activeOpacity={0.8}
            style={styles.linkButtons('#1877f2')}
            onPress={() => {
              //   setActualViewIndex(0);
            }}
            underlayColor={'rgba(200, 200, 200,0.5)'}>
            <Icon name="linkedin" size={25} color="white" />
          </TouchableHighlight>
        </View>
        <View
          style={{
            padding: 15,
          }}>
          <Text style={styles.titles}>Compagny</Text>

            <Text style={styles.titles}>Business</Text>
          <Text style={styles.titles}>Get In Touch</Text>
        </View>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  titles: {
    fontSize: Sizes.xl,
    color: 'white',
    fontWeight: 'bold',
  },
  linkButtons: color => ({
    width: 'auto',
    backgroundColor: color,
    borderRadius: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    aspectRatio: 1,
    alignSelf: 'flex-start',
  }),
});

const languages = ['FR', 'EN'];

const LanguageFragment = () => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 35,
        alignItems: 'center',
      }}>
      <Text
        style={{
          color: 'black',
          fontSize: Sizes.l,
        }}>
        Select language
      </Text>
      <SelectDropdown
        data={languages}
        defaultValueByIndex={0}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          // text represented after item is selected
          // if data array is an array of objects then return selectedItem.property to render after item is selected
          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          // text represented for each item in dropdown
          // if data array is an array of objects then return item.property to represent item in dropdown
          return item;
        }}
        buttonStyle={{
          backgroundColor: 'rgba(0,0,160,0.3)',
          borderRadius: 5,
          width: 60,
          height: 35,
        }}
      />
    </View>
  );
};
