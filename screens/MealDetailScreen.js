import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { MEALS } from '../data/dummy-data';
import HeaderButton from '../components/HeaderButton';

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
    headerTitle: matchedMeal[0].title,
    headerRight: <HeaderButtons HeaderButtonComponent={HeaderButton} >
      <Item title='Favorite' iconName='ios-star' onPress={() => {console.log ('mark as favorite')}} />
    </HeaderButtons>
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