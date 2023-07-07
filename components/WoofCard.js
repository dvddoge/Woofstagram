import React from 'react';
import { View, StyleSheet } from 'react-native';
import Avatar from './Avatar';
import Title from './Title';

const WoofCard = ({ name, avatar }) => {
  return (
    <View style={[styles.card, styles.cardContainer]}>
      <Avatar avatarUrl={avatar} />
      <View style={styles.titleContainer}>
        <Title>{name}</Title>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginRight: 16, // Adiciona mais espaço entre os cards
    shadowColor: "#000", // Sombra para os cards
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    borderWidth: 0,
    padding: 20, 
    marginBottom: 20,
  },
  titleContainer: {
    alignItems: 'center',
    padding: 10, 
    borderBottomWidth: 1, 
    borderBottomColor: 'gray', 
  },
});


export default WoofCard;
