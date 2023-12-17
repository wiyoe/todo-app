import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity, FlatList } from 'react-native';

const DATA = [
  {
    id: '1',
    title: 'First Item',
  },
  {
    id: '2',
    title: 'Second Item',
  },
  {
    id: '3',
    title: 'Third Item',
  },
  {
    id: '4',
    title: 'First Item',
  },
  {
    id: '5',
    title: 'Second Item',
  },
  {
    id: '6',
    title: 'Third Item',
  },
  {
    id: '7',
    title: 'First Item',
  },
  {
    id: '8',
    title: 'Second Item',
  },
  {
    id: '9',
    title: 'Third Item',
  }
];

export default function App() {

  const Item = ({ title }) => (
    <View style={styles.item}>
      <TouchableOpacity style={styles.button} onPress={() => onPressLearnMore(title)}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </View>
  );

  onPressLearnMore = (title) => {
    alert(title);
  }

  return (

    <View style={styles.container}>
      <Text style={styles.heading}>React Native note application working.</Text>
      <Text style={styles.heading2}>Lorem ipsum is placeholder text commonly used in the graphic</Text>
      <View>

        <FlatList
          style={styles.list}
          data={DATA}
          renderItem={({ item }) => <Item title={item.title} />}
          keyExtractor={item => item.id}
        />

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    marginTop: 30,
    paddingHorizontal: 20,
    marginBottom: 7
  },
  heading2: {
    fontSize: 16,
    paddingHorizontal: 20,
    marginBottom: 20,
    opacity: 0.7
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
    text2: {
      backgroundColor: '#eee',
      paddingVertical: 5,
      paddingHorizontal: 10,
      marginVertical: 15
    }
  },
  list: {
    backgroundColor: '#fff',
    maxHeight: '100%'
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 10,
    marginVertical: 4,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 15
  },
});
