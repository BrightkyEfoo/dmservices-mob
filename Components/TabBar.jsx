import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IoIcon from 'react-native-vector-icons/Ionicons';

const IconForIndex = i => {
  switch (i) {
    case 0:
      return 'home';
    case 1:
      return 'info';
    case 2:
      return 'industry';
    case 3:
      return 'id-card-o';
    case 4:
      return 'settings';
    default:
      return 'user';
  }
};

function MyTabBar({state, descriptors, navigation}) {
  return (
    <View style={styles.navBar}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          if (route.name === 'home' || route.name === 'contact' || route.name === 'more') {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              navigation.navigate({name: route.name, merge: true});
            }
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={isFocused ? styles.navBarButtonFocused : styles.navBarButton}
            // style={{ flex: 1 }}
            key={index}>
            {index === 4 ? (
              <IoIcon
                color="rgb(75,75,75)"
                name={IconForIndex(index)}
                size={20}
              />
            ) : (
              <Icon
                color="rgb(75,75,75)"
                name={IconForIndex(index)}
                size={20}
              />
            )}
            <Text style={{color: 'rgb(75,75,75)', fontSize: 12}}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: 'white',
    flexDirection: 'row',
    // paddingRight: 10,
    // paddingLeft: 10,
    // gap: 5,
    height: 50,
  },
  navBarButton: {
    color: '#222',
    backgroundColor: 'rgba(0,0,0,0.1)',
    // borderRadius : 8,
    padding: 10,
    borderTopColor: 'rgba(0,0,0,0.1)',
    borderTopWidth: 3,
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  navBarButtonFocused: {
    color: '#673ab7',
    backgroundColor: 'rgba(70,50,200,0.2)',
    // borderRadius : 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderTopWidth: 3,
    padding: 10,
    borderTopColor: 'rgba(70,50,200,0.8)',
    flex: 1,
  },
});

export default MyTabBar;
