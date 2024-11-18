import React from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity, SectionList, StatusBar, Button, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

const datasource = [
  {
    title: 'Pyro', icon_name: 'dove',icon_color: 'pink',
    data: [
      {
        name: 'Hu tao',
        imageUrl: require('./img/hutao.jpg'),
      },
      {
        name: 'Arlecchino',
        imageUrl: require('./img/arlecchino.jpg'),      },
    ],
    headerColor: '#B22222',
  },
  {
    title: 'Hydro', icon_name: 'skull-crossbones',icon_color: 'purple',
    data: [
      {
        name: 'Furina',
        imageUrl: require('./img/furina.jpg'),      },
      {
        name: 'Neuvilette',
        imageUrl: require('./img/neuvilette.jpg'),      },
    ],
    headerColor: '#1e90ff',
  },
  {
    title: 'Cryo', icon_name: 'dove',icon_color: 'pink',
    data: [
      {
        name: 'Shenhe',
        imageUrl: require('./img/shenhe.jpg'),
      },
      {
        name: 'Wriothesley',
        imageUrl: require('./img/wrio.jpg'),      },
    ],
    headerColor: 'lightblue',
  },
  {
    title: 'Geo', icon_name: 'dove',icon_color: 'pink',
    data: [
      {
        name: 'Xilonen',
        imageUrl: require('./img/xilonen.jpg'),
      },
      {
        name: 'Ningguang',
        imageUrl: require('./img/ningguang.jpg'),      },
    ],
    headerColor: '#ffd700',
  },
  {
    title: 'Anemo', icon_name: 'dove',icon_color: 'pink',
    data: [
      {
        name: 'Xiao',
        imageUrl: require('./img/xiao.jpg'),
      },
      {
        name: 'Wanderer',
        imageUrl: require('./img/wanderer.jpg'),      },
    ],
    headerColor: 'aquamarine',
  },
  {
    title: 'Dendro', icon_name: 'dove',icon_color: 'pink',
    data: [
      {
        name: 'Kinich',
        imageUrl: require('./img/kinich.jpg'),
      },
      {
        name: 'Kirara',
        imageUrl: require('./img/kirara.jpg'),      },
    ],
    headerColor: '#6b8e23',
  },
  {
    title: 'Electro', icon_name: 'dove',icon_color: 'pink',
    data: [
      {
        name: 'Raiden',
        imageUrl: require('./img/raiden.jpg'),
      },
      {
        name: 'Yae Miko',
        imageUrl: require('./img/yaemiko.jpg'),      },
    ],
    headerColor: '#dda0dd',
  },
];

const renderItem = ({item}) => {
  return (
      <TouchableOpacity style={styles.itemContainer}>
        <Text style={styles.cardname}>{item.name}</Text>

        <Image source={item.imageUrl}
               style={styles.cardImage} />
      </TouchableOpacity>
  );
};


const App = () => {
  return (
      <View style={[styles.container, { marginBottom: 50, margin: 10 }]}>
        <StatusBar hidden={true} />
        <SectionList
            sections={datasource}
            renderItem={renderItem}
            renderSectionHeader={({ section: { title, icon_name, headerColor } }) => (
                <View style={[styles.header, { backgroundColor: headerColor }]}>
                  <Text style={styles.headerText}>
                    {title}
                    <Icon name={icon_name} size={20} />
                  </Text>
                </View>
            )}
            renderSectionFooter={({ section }) => (
                <View style={styles.footerContainer}>
                  <Button title="Add Character" onPress={() => alert(`Add Character button pressed for ${section.title}`)} />
                </View>
            )}
        />
      </View>
  );
};
// Styles for the components
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: 'black',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: 'white',
  },
  cardname: {
    fontSize: 18,
  },
  cardImage: {
    width: 300,
    height: 400,
    resizeMode: 'contain',
  },
  footerContainer: {
    paddingVertical: 10,
    alignItems: 'center', // Center the button horizontally
    backgroundColor: 'white',
  }
});

export default App;
