import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { MEALS } from '../data/dummy-data';

const MealDetailScreen = props => {
  const mealId = props.navigation.getParam('mealId');

  const matchedMeal = MEALS.filter(
    meal => meal.id === mealId
  )

  return (
    <View style={styles.screen}>
      <Text>{mealId}</Text>
      <Text>{matchedMeal[0].title}</Text>
    </View>
  );
};

MealDetailScreen.navigationOptions = navigationData => {
  const mealId = navigationData.navigation.getParam('mealId');
  const matchedMeal = MEALS.filter(
    meal => meal.id === mealId
  )
  
  return {
    headerTitle: matchedMeal[0].title
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default MealDetailScreen;