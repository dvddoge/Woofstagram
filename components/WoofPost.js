import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const WoofPost = ({ image, title, description }) => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      marginBottom: 16,
      padding: 10,
      backgroundColor: '#f9f9f9',
      borderRadius: 12,
      shadowColor: "#000",
      shadowOffset: {
	      width: 0,
	      height: 5,
      },
      shadowOpacity: 0.34,
      shadowRadius: 6.27,
      elevation: 10,
    },
    imageContainer: {
      flex: 1,
      marginRight: 16,
    },
    image: {
      width: '100%',
      height: 100,
      borderRadius: 16,
    },
    contentContainer: {
      flex: 2,
      flexDirection: 'column',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#333',
      marginBottom: 8,
    },
    description: {
      fontSize: 14,
      color: '#666',
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: image }} style={styles.image} />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

export default WoofPost;
