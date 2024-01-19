import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image, ScrollView } from 'react-native';

const ProductScreen = () => {
  const product = {
    name: 'Purple Haze',
    grower: 'John Doe',
    lineage: 'Haze x Purple Thai',
    notes: 'This batch has a sweet, earthy flavor with hints of berry. Grown in organic soil.',
    reviews: [{
      user: 'User1',
      review: 'Great product, very smooth.'
    }, {
      user: 'User2',
      review: 'Loved the flavor, will buy again.'
    }, {
      user: 'User3',
      review: 'Not my favorite, but still good.'
    }]
  };
  return <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image style={styles.image} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.subtitle}>Grown by {product.grower}</Text>
        <Text style={styles.text}>Lineage: {product.lineage}</Text>
        <Text style={styles.text}>Grower's Notes: {product.notes}</Text>
        <View style={styles.reviews}>
          {product.reviews.map((review, index) => <View key={index} style={styles.review}>
              <Text style={styles.reviewUser}>{review.user}:</Text>
              <Text style={styles.reviewText}>{review.review}</Text>
            </View>)}
        </View>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },
  image: {
    width: '100%',
    height: 200
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 10
  },
  subtitle: {
    fontSize: 18,
    marginHorizontal: 10
  },
  text: {
    fontSize: 16,
    margin: 10
  },
  reviews: {
    marginTop: 20
  },
  review: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    padding: 10
  },
  reviewUser: {
    fontWeight: 'bold'
  },
  reviewText: {
    marginTop: 5
  }
});
export default ProductScreen;