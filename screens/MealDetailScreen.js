import React from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  Button,
  StyleSheet,
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { MEALS } from '../data/dummy-data';
import HeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';

const MealDetailScreen = (props) => {
  const mealId = props.navigation.getParam('mealId');

  const matchedMeal = MEALS.filter((meal) => meal.id === mealId);
  console.log(matchedMeal)

  return (
    <ScrollView>
      <Image source={{uri: matchedMeal[0].imageUrl}} style={styles.image} />
      <View style={styles.details}>
        <DefaultText>{matchedMeal[0].duration}m</DefaultText>
        <DefaultText>{matchedMeal[0].complexity.toUpperCase()}</DefaultText>
        <DefaultText>{matchedMeal[0].affordability.toUpperCase()}</DefaultText>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      <Text>List of Ingredients...</Text>
      <Text style={styles.title}>Steps</Text>
      <Text>List of Steps...</Text>
    </ScrollView>
  );
};

MealDetailScreen.navigationOptions = (navigationData) => {
  const mealId = navigationData.navigation.getParam('mealId');
  const matchedMeal = MEALS.filter((meal) => meal.id === mealId);

  return {
    headerTitle: matchedMeal[0].title,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favorite"
          iconName="ios-star"
          onPress={() => {
            console.log('mark as favorite');
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  details: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around'
  }
});

export default MealDetailScreen;
