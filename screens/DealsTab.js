import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, Button} from 'react-native';
import Constants from 'expo-constants';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Title: First Item',
    catagory: 'Catagory: Eggs',
    price: 'Price: $3.99',
    store: 'Store: Walmart'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Title: Second Item',
    catagory: 'Catagory: Bread',
    price: 'Price: $4.99',
    store: 'Store: Kroger'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Title: Third Item',
    catagory: 'Catagory: Beef',
    price: 'Price: $10.99',
    store: 'Store: Target'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d74',
    title: 'Title: Forth Item',
    catagory: 'Catagory: Chicken',
    price: 'Price: $9.99',
    store: 'Store: Aldi'
  },{
    id: '58694a0f-3da1-471f-bd96-145571e29d75',
    title: 'Title: Fifth Item',
    catagory: 'Catagory: Milk',
    price: 'Price: $2.99',
    store: 'Store: Walmart'
  },{
    id: '58694a0f-3da1-471f-bd96-145571e29d76',
    title: 'Title: Sixth Item',
    catagory: 'Catagory: Juice',
    price: 'Proce: $6.99',
    store: 'Store: Sams Club'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d77',
    title: 'Title: Seveth Item',
    catagory: 'Catagory: Tea',
    price: 'Proce: $4.99',
    store: 'Store: Sams Club'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d78',
    title: 'Title: Eighth Item',
    catagory: 'Catagory: Steak',
    price: 'Proce: $15.99',
    store: 'Store: Albertsons'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d79',
    title: 'Title: Ninth Item',
    catagory: 'Catagory: Salmon',
    price: 'Proce: $12.99',
    store: 'Store:  HEB'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d710',
    title: 'Title: Tenth Item',
    catagory: 'Catagory: Shrimp',
    price: 'Proce: $9.99',
    store: 'Store:  Aldi'
  },
];

function Item({ title, catagory, price, store }) {
  return (
    <View style={styles.item}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text>{catagory}</Text>
        <Text>{price}</Text>
        <Text>{store}</Text>
        <Button title='Add' />
      </View>
    </View>
  );
}

export default function Deals() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList //horizontal={true}
        data={DATA}
        renderItem={({ item }) => 
        <Item title={item.title} 
              catagory={item.catagory}
              price={item.price}
              store={item.store}/>}
        keyExtractor={item => item.id}
        // contentContainerStyle={{ width: `${100 * 2}%` }}
        // showsHorizontalScrollIndicator={true}
        // scrollEventThrottle={200}
        // decelerationRate="fast"
        // pagingEnabled
      >
      </FlatList>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    backgroundColor: 'blue',
  },
  item: {
    height: 200,
    maxHeight: 300,
    minHeight: 100,
    backgroundColor: 'green',
    paddingLeft: 10,
    paddingBottom: 5,
     marginVertical: 5,
     marginHorizontal: 5,
    minWidth: '30%',
    justifyContent: 'flex-end'
  },
  title: {
    fontSize: 30
  }
});