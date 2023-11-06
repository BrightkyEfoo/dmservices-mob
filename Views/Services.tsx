import {
  View,
  Text,
  ScrollView,
  TouchableHighlight,
  StyleSheet,
  ImageBackground,
  Dimensions,
  Image,
  FlatList,
  Button,
  Linking,
} from 'react-native';
import React, {FC, useEffect, useRef, useState} from 'react';
import AntIcon from 'react-native-vector-icons/AntDesign';
import FaIcon from 'react-native-vector-icons/FontAwesome';

// types
type SecondSectionCardsProps = {
  ItIcon: string;
  title: string;
  items: string[];
};
export const Sizes = {
  xxl: 28,
  xl: 24,
  l: 17,
  md: 13,
};

const maxHeight = Dimensions.get('window').height - 50;
const maxWidth = Dimensions.get('window').width;

const SecondSectionData: SecondSectionCardsProps[] = [
  {
    ItIcon: 'gift',
    title: 'Design',
    items: ['UI UX Design', 'Logo, Flyers, Banner', 'Video Spot'],
  },
  {
    ItIcon: 'codesquareo',
    title: 'Development',
    items: ['Website Development', 'Mobile Development', 'Custom Development'],
  },
  {
    ItIcon: 'wallet',
    title: 'eCommerce',
    items: ['Payment Gateway integration', 'MoMo API', 'TPE'],
  },
  {
    ItIcon: 'rocket1',
    title: 'Satellite Capacity',
    items: ['AMOS 17', 'IS20', 'E7B'],
  },
  {
    ItIcon: 'clouddownload',
    title: 'IT Services',
    items: ['Hosting', 'CRM & Emails', 'Cloud Based services'],
  },
  {
    ItIcon: 'customerservice',
    title: 'Help & Support',
    items: ['Tech Support', 'Live Support', 'High Availability'],
  },
];
const imagesLink = [
  'https://dmservices.cm/wp-content/uploads/2023/02/Cap625-1024x1024.png',
  'https://dmservices.cm/wp-content/uploads/2023/02/Cap2-1024x1024.png',
  'https://dmservices.cm/wp-content/uploads/2020/06/portfolio3.jpg',
  'https://dmservices.cm/wp-content/uploads/2020/06/portfolio4-1.jpg',
];

const partners = [
  {image: 'https://dmservices.cm/wp-content/uploads/2023/02/logo-Benss.jpeg'},
  {
    image:
      'https://dmservices.cm/wp-content/uploads/2023/02/Logo-AfroTalents.png',
  },
  {image: 'https://dmservices.cm/wp-content/uploads/2023/02/Logo-EJP.png'},
  {image: 'https://dmservices.cm/wp-content/uploads/2023/02/logo-ASSOOH.png'},
  {image: 'https://dmservices.cm/wp-content/uploads/2023/02/logo-FTT.png'},
];

const Services = () => {
  const sliderRef1 = useRef<FlatList>(null);
  const [sliderIndex1, setsliderIndex1] = useState(0);
  const getItemLayout = (data, index) => {
    return {length: maxWidth / 3.3, offset: (maxWidth / 3.3) * index, index};
  };
  useEffect(() => {
    const inter1 = setInterval(() => {
      setsliderIndex1(prev => {
        let a = prev === 4 ? 0 : prev + 1;
        sliderRef1.current?.scrollToIndex({
          index: a,
          animated: true,
        });
        return a;
      });
    }, 2500);

    return () => {
      clearInterval(inter1);
    };
  }, []);

  return (
    <ScrollView style={styles.scrollContainer}>
      {/* premiere section */}
      <ImageBackground
        source={{
          uri: 'https://dmservices.cm/wp-content/uploads/2020/01/about-bg-img.jpg',
        }}
        resizeMode="cover"
        imageStyle={{
          height: 500,
        }}
        style={styles.firstSection}>
        <View style={styles.firstSectionSub}>
          <Text
            style={{
              fontSize: 50,
              fontWeight: 'bold',
              color: 'white',
              textAlign: 'center',
              marginTop: 50,
            }}>
            Services
          </Text>
          <Text
            style={{
              fontSize: Sizes.xl * 1.3,
              fontWeight: 'bold',
              color: 'white',
              textAlign: 'center',
            }}>
            We provide a wide range of Services
          </Text>
          <Text
            style={{
              fontSize: Sizes.l,
              fontWeight: 'bold',
              color: 'white',
              textAlign: 'center',
              marginBottom: 70,
            }}>
            Digital Agency with a demonstrate history in cloud based solutions.
            Lets build digital future of Africa together with an amazing team.
          </Text>
        </View>
      </ImageBackground>

      {/* seconde section */}
      <View style={styles.secondSectionContainer}>
        <Text style={styles.titles}>How can we help you?</Text>
        <View
          style={{
            gap: 15,
            width: maxWidth,
            marginTop: 15,
            marginBottom: 15,
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}>
          {SecondSectionData.map((el, i) => {
            return (
              <SecondSectionCards
                key={i}
                ItIcon={el.ItIcon}
                items={el.items}
                title={el.title}
              />
            );
          })}
        </View>
      </View>

      {/* troisieme section */}
      {/* <View style={thirdSectionStyles.container}>
        <Text style={styles.titles}>Portfolio</Text>
        <View style={thirdSectionStyles.imageContainer}>
          {imagesLink.map((el, i) => {
            return (
              <Image
                key={i}
                source={{uri: el}}
                style={thirdSectionStyles.images}
              />
            );
          })}
        </View>
      </View> */}

      {/* quatrieme section */}
      <View
        style={{
          alignItems: 'center',
          display: 'flex',
          gap: 15,
        }}>
        <Text style={styles.titles}>Our customers</Text>
        <FlatList
          horizontal
          style={{
            marginHorizontal: 10,
          }}
          data={partners}
          ref={sliderRef1}
          initialNumToRender={3}
          getItemLayout={getItemLayout}
          renderItem={({item}) => (
            <View
              style={{
                width: maxWidth / 3.3,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginHorizontal: 5,
              }}>
              <Image
                style={{
                  width: maxWidth / 3.3,
                  height: 70,
                  resizeMode: 'contain',
                }}
                source={{uri: item.image}}
              />
            </View>
          )}
        />
      </View>
      {/* <View
        style={{
          width: maxWidth - 40,
          margin: 15,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 15,
        }}>
        <Text
          style={{
            ...styles.titles,
            paddingBottom: 10,
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
          underlayColor={'rgba(200, 200, 200,0.5)'}>
          <>
            <FaIcon name="whatsapp" size={25} />
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>
              +237 620 015 157
            </Text>
          </>
        </TouchableHighlight>
      </View> */}
      <Text
        style={{
          color: 'black',
          fontSize: Sizes.xl,
          fontWeight: 'bold',
          textAlign: 'center',
          marginHorizontal: 20,
          marginVertical: 20,
          marginTop: 35,
        }}>{`"Amazing Designs and Quality Work!"`}</Text>
      <Text
        style={{
          color: 'black',
          paddingHorizontal: 12,
          textAlign: 'center',
          fontSize: Sizes.l,
          marginBottom: 15,
        }}>{`Call for tenders validated by the board of directors, satisfied with the result of the school's website.`}</Text>
      <Text
        style={{
          color: 'black',
          fontWeight: 'bold',
          textAlign: 'center',
          fontSize: Sizes.l,
        }}>{`TEFFO ETIENNE`}</Text>
      <Text
        style={{
          color: 'black',
          fontSize: Sizes.md,
          textAlign: 'center',
          textTransform: 'uppercase',
        }}>{`Co-Founder, FTT Dschang`}</Text>
      <View
        style={{backgroundColor: 'rgba(0,0,200,0.05)', alignItems: 'center'}}>
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
              // color: 'rgb(57, 58, 86)',
              fontWeight: 'bold',
              textAlign: 'center',
              color: 'rgb(104, 120, 214)',
            }}>
            Would you like to start a project with us?
          </Text>
          <Text
            style={{color: 'black', textAlign: 'center', fontSize: Sizes.l}}>
            Digital Agency with a demonstrate in development and digital
            solution. Lets build digital future of Africa together with an
            amazing team.
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
                `whatsapp://send?phone=${'+237620015157'}&text=${'hello dmservices'}`,
              );
            }}
            underlayColor={'rgba(200, 200, 200,0.5)'}>
            <>
              <FaIcon name="whatsapp" size={25} />
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                +237 620 015 157
              </Text>
            </>
          </TouchableHighlight>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  titles: {
    paddingTop: 30,
    paddingBottom: 30,
    fontSize: Sizes.xxl,
    color: 'rgb(57, 58, 86)',
    fontWeight: 'bold',
  },
  scrollContainer: {
    backgroundColor: 'white',
    color: 'rgb(90,90,90)',
  },
  firstSection: {
    display: 'flex',
    flexDirection: 'column',
    height: maxHeight / 2 + 60,
    objectFit: 'cover',
  },
  firstSectionSub: {
    display: 'flex',
    flexDirection: 'column',
    height: maxHeight / 2 + 60,
    backgroundColor: 'rgba(0,0,0,0.7)',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 35,
    paddingHorizontal: 15,
    paddingVertical: 30,
  },
  firstSectionButton: {
    backgroundColor: 'rgb(104, 120, 214)',
    flexShrink: 1,
    padding: 10,
    paddingHorizontal: 25,
    borderRadius: 15,
    width: 'auto',
  },
  // second section

  secondSectionContainer: {
    backgroundColor: 'rgb(239, 242, 255)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

const thirdSectionStyles = StyleSheet.create({
  container: {
    padding: 25,
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  images: {
    height: maxWidth / 2.5,
    width: maxWidth / 2.5,
  },
  imageContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
    flexWrap: 'wrap',
    marginTop: 20,
    marginBottom: 20,
  },
});
export default Services;

const SecondSectionCards: FC<SecondSectionCardsProps> = ({
  ItIcon,
  title,
  items,
}) => {
  return (
    <View style={SecondSectionCardsStyle.container}>
      <View>
        <AntIcon name={ItIcon} size={40} color="rgb(104, 120, 214)" />
        <Text style={SecondSectionCardsStyle.title}>{title}</Text>
      </View>
      <View>
        {items.map((el, i) => {
          return (
            <View key={i} style={SecondSectionCardsStyle.items}>
              <AntIcon name="caretright" color="rgb(104, 120, 214)" size={15} />
              <Text
                style={{
                  color: 'black',
                  fontSize: Sizes.md,
                }}>
                {el}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

const SecondSectionCardsStyle = StyleSheet.create({
  container: {
    padding: 20,
    // marginLeft: 35,
    // marginRight: 35,
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    width: maxWidth / 2 - 30,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: Sizes.l,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 15,
    color: 'black',
  },
  items: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },
});
