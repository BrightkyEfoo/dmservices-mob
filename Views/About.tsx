/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  StyleSheet,
  Dimensions,
  FlatList,
  Image,
  TouchableHighlight,
  Linking,
} from 'react-native';
import React, {FC, useState} from 'react';
import {Sizes} from './Home';
import Icon from 'react-native-vector-icons/AntDesign';
import FaIcon from 'react-native-vector-icons/FontAwesome';

const maxHeight = Dimensions.get('window').height - 50;
const maxWidth = Dimensions.get('window').width;

const accordillon = [
  {
    text: 'Result Oriented Projects',
    secondaryText: `It is not only an internal need. It means added value for our Customers as well. Success is the objective of our projects and it translates to success for Customers that rely on us to achieve their business strategies.`,
  },
  {
    text: 'Experienced Professionals',
    secondaryText: `Multitask team with solide experience in IT delivering solutions over Africa, Europe and Canada.`,
  },
  {
    text: 'Cloud Based Oiented',
    secondaryText: `Thanks to the Cloud we provide worldwide available solutions.`,
  },
  {
    text: 'Best Quality Designs',
    secondaryText: `Design Team with amazing achievement for both graphic and video concept with Compagny and Non Governemental Organization.`,
  },
  {
    text: '24x7 Live Support',
    secondaryText: `High available Multitask  team located around Africa and fully bilingual.`,
  },
];

const ourMissionList = [
  'Graphic Design',
  'Website Development',
  'eCommerce',
  'IT Services',
  'Satellite Capacity',
  'Support',
];

const ThirdPartList = [
  {
    subtitle: 'Discover',
    main: 'Understand customer needs, go through existing process, and set the target.',
  },
  {
    subtitle: 'Define',
    main: 'Based on collected information, search and build the right tools to meet the target.',
  },
  {
    subtitle: 'Design',
    main: 'Thanks to agile concept, each step of the work is presented to the customer for his validation.',
  },
  {
    subtitle: 'Develop',
    main: 'This step gives life to the Design, with agile concept of step testing and validation by the customer.',
  },
  {
    subtitle: 'Deploy',
    main: 'Develop solutions available to the customer with final test and update based on feedback.',
  },
  {
    subtitle: 'Deliver',
    main: 'Develop solutions fully meet customer target, we provide weekly support.',
  },
];
const About = () => {
  const [accordioSelected, setAccordionSelected] = useState(0);
  return (
    <ScrollView>
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
              marginTop: 50,
            }}>
            About Us
          </Text>
          <Text
            style={{
              fontSize: Sizes.xl * 1.3,
              fontWeight: 'bold',
              color: 'white',
              textAlign: 'center',
            }}>
            Welcome to DMServices
          </Text>
          <Text
            style={{
              fontSize: Sizes.xl,
              fontWeight: 'bold',
              color: 'white',
              textAlign: 'justify',
              marginBottom: 70,
            }}>
            Digital Agency with a demonstrate history in cloud based solutions.
            Lets build digital future of Africa together with an amazing team.
          </Text>
        </View>
      </ImageBackground>
      <View
        style={{
          width: maxWidth - 70,
          position: 'relative',
          top: -40,
          gap: 20,
          alignSelf: 'center',
          height: 700,
          marginBottom: 130,
        }}>
        <Box1 title="Who are We">
          <Text
            style={{
              fontSize: Sizes.l,
              color: 'black',
            }}>
            Actor of the digitalization of companies. DMServices aims to
            position itself as a leader in this market segment in Africa during
            the next 5 years thanks to his dynamic and competent team spread
            over several countries on the continent.
          </Text>
        </Box1>
        <Box1 title="Our Mission">
          {ourMissionList.map((el, i) => {
            return (
              <Text
                style={{color: 'black', marginLeft: 8, marginBottom: 6}}
                key={i}>{`\u2022   ${el}`}</Text>
            );
          })}
        </Box1>
        <Box1 title="What We Do">
          {ourMissionList.map((el, i) => {
            return (
              <Text
                style={{color: 'black', marginLeft: 8, marginBottom: 6}}
                key={i}>{`\u203a   ${el}`}</Text>
            );
          })}
        </Box1>
      </View>
      <View>
        <Text
          style={{
            fontSize: Sizes.xl,
            color: 'black',
            fontWeight: 'bold',
            alignSelf: 'center',
            marginBottom: 60,
          }}>
          Our 6-D Process
        </Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 10,
          }}>
          {ThirdPartList.map((el, i) => {
            return (
              <Box2
                key={i}
                main={el.main}
                subtitle={el.subtitle}
                title={'0' + (i + 1).toString() + '.'}
              />
            );
          })}
        </View>
      </View>
      <Image
        source={{
          uri: 'https://dmservices.cm/wp-content/uploads/2020/01/why-choose-us.jpg',
        }}
        style={{
          marginTop: 50,
          marginBottom: 30,
          width: maxWidth,
          height: 200,
        }}
      />
      <Text
        style={{
          color: 'black',
          fontSize: Sizes.xxl,
          fontWeight: 'bold',
          marginHorizontal: 15,
        }}>
        Why Choose Us?
      </Text>
      <Text
        style={{
          color: 'black',
          fontSize: Sizes.l,
          marginHorizontal: 15,
        }}>
        Our experiences over Africa, Europe and Canada speak for us.
      </Text>
      <View
        style={{
          marginVertical: 20,
          marginHorizontal: 15,
          borderWidth: 0.5,
          borderColor: 'gray',
        }}>
        {accordillon.map((el, i) => {
          return (
            <AccordillonPan
              key={i}
              number={i}
              text={el.text}
              selected={accordioSelected}
              SecondText={el.secondaryText}
              setFunction={setAccordionSelected}
            />
          );
        })}
      </View>
      <Text
        style={{
          fontSize: Sizes.xxl,
          color: 'black',
          fontWeight: 'bold',
          marginHorizontal: 15,
          marginVertical: 15,
        }}>
        Some Numbers
      </Text>
      <View
        style={{
          paddingHorizontal: 15,
          marginVertical: 20,
          gap: 20,
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 25,
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: 'rgb(50,50,200)',
              fontSize: Sizes.xxl * 1.3,
              fontWeight: 'bold',
            }}>
            5
          </Text>
          <Text
            style={{
              fontSize: Sizes.l,
              fontWeight: 'bold',
              color: 'black',
            }}>
            Satisfied Clients
          </Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 25,
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: 'rgb(50,50,200)',
              fontSize: Sizes.xxl * 1.3,
              fontWeight: 'bold',
            }}>
            10
          </Text>
          <Text
            style={{
              fontSize: Sizes.l,
              fontWeight: 'bold',
              color: 'black',
            }}>
            Projetcs Completed
          </Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 25,
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: 'rgb(50,50,200)',
              fontSize: Sizes.xxl * 1.3,
              fontWeight: 'bold',
            }}>
            25K+
          </Text>
          <Text
            style={{
              fontSize: Sizes.l,
              fontWeight: 'bold',
              color: 'black',
            }}>
            Lines of Code
          </Text>
        </View>
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
            // color: 'rgb(57, 58, 86)',
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
    </ScrollView>
  );
};

type accorProps = {
  text: string;
  setFunction: React.Dispatch<React.SetStateAction<number>>;
  selected: number;
  number: number;
  SecondText: string;
};
const AccordillonPan: FC<accorProps> = ({
  text,
  setFunction,
  selected,
  number,
  SecondText,
}) => {
  return (
    <View
      style={{
        backgroundColor: 'white',
      }}>
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="#ffffff"
        onPress={() => {
          if (number === selected) {
            setFunction(-1);
          } else {
            setFunction(number);
          }
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderColor: 'black',
            borderWidth: 0.5,
            padding: 15,
          }}>
          <Text
            style={{
              color: number === selected ? 'rgb(50,50,200)' : 'black',
              fontWeight: number === selected ? '700' : '500',
            }}>
            {text}
          </Text>
          <Icon
            name={selected === number ? 'minuscircle' : 'pluscircle'}
            color={number === selected ? 'rgb(50,50,200)' : 'gray'}
            size={15}
          />
        </View>
      </TouchableHighlight>
      {selected === number ? (
        <View>
          <Text
            style={{
              color: 'black',
              textAlign: 'justify',
              marginHorizontal: 15,
              marginVertical: 15,
              paddingTop: 0,
            }}>
            {SecondText}
          </Text>
        </View>
      ) : null}
    </View>
  );
};

const renderRow = (data: string) => {
  return <Text>{`\u2022 ${data}`}</Text>;
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
    backgroundColor: 'rgb(239, 242, 255)',
    position: 'relative',
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

type box1Props = {
  title: string;
  children: string | JSX.Element | JSX.Element[];
};
const Box1: FC<box1Props> = ({title, children}) => {
  return (
    <View
      style={{
        padding: 15,
        backgroundColor: 'white',
      }}>
      <View
        style={{
          height: 7,
          width: 50,
          backgroundColor: '#6878d6',
          marginBottom: 20,
        }}
      />
      <Text
        style={{
          fontSize: Sizes.xl,
          color: 'black',
          fontWeight: 'bold',
          marginBottom: 20,
        }}>
        {title}
      </Text>
      {children}
    </View>
  );
};

type box2Props = {
  title: string;
  subtitle: string;
  main: string;
};
const Box2: FC<box2Props> = ({title, subtitle, main}) => {
  return (
    <View
      style={{
        padding: 15,
        backgroundColor: 'rgba(0,0,200,0.1)',
        width: maxWidth / 2 - 25,
      }}>
      <Text
        style={{
          fontSize: 70,
          color: 'black',
          fontWeight: 'bold',
          marginBottom: 8,
        }}>
        {title}
      </Text>
      <Text
        style={{
          fontSize: Sizes.l,
          color: 'black',
          fontWeight: 'bold',
          marginBottom: 10,
        }}>
        {subtitle}
      </Text>
      <Text style={{textAlign: 'justify', color: 'black'}}>{main}</Text>
    </View>
  );
};

export default About;
