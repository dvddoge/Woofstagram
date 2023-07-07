import React from 'react';
import { ScrollView, View ,StyleSheet } from 'react-native';
import Heading from './Heading';
import WoofCard from './WoofCard';
import ZoomablePost from './WoofPost';

const data = {
  woofs: [
    {
      id: 'woof-1',
      name: 'Bella',
      avatar:
        'https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=648&q=80',
      caretaker: 'Clem Onojeghuo',
      source: 'https://unsplash.com/photos/0SlFNQcxfnE',
    },
    {
      id: 'woof-2',
      name: 'Rocky',
      avatar:
        'https://images.unsplash.com/photo-1546975490-e8b92a360b24?auto=format&fit=crop&w=648&q=80',
      caretaker: 'Jamie Street',
      source: 'https://unsplash.com/photos/uNNCs5kL70Q',
    },
    {
      id: 'woof-3',
      name: 'Lola',
      avatar:
        'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?auto=format&fit=crop&w=648&q=80',
      caretaker: 'Matthew Henry',
      source: 'https://unsplash.com/photos/uNNCs5kL70Q',
    },
    {
      id: 'woof-4',
      name: 'Duke',
      avatar:
        'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=648&q=80',
      caretaker: 'Marko Blazevic',
      source: 'https://unsplash.com/photos/rY79kwEEyGo',
    },
    {
      id: 'woof-5',
      name: 'Lily',
      avatar:
        'https://images.unsplash.com/photo-1505628346881-b72b27e84530?auto=format&fit=crop&w=648&q=80',
      caretaker: 'Cole Keister',
      source: 'https://unsplash.com/photos/1SAnrIxw5OY',
    },
    { id: 'woof-6', 
    name: 'Max', 
    avatar: 
      'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=648&q=80', 
    caretaker: 'Erda Estremera', 
    source: 'https://unsplash.com/photos/bx2Ml8Ozll0', },
  ],
  posts: [
    {
      id: 'post-1',
      image:
        'https://images.unsplash.com/photo-1525253086316-d0c936c814f8?auto=format&fit=crop&w=967&q=80',
      title: 'The Best Exercises for Your Dog',
      description:
        "Find out how to tailor your dog’s exercise routine according to their age, breed, and personality.",
      caretaker: 'Autumn Goodman',
      source: 'https://unsplash.com/photos/Rca0Ks2r7N4',
    },
    {
      id: 'post-2',
      image:
        'https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&w=850&q=80',
      title: 'Woofs & friends',
      description: 'Best friends are important for humans, but also for dogs.',
      caretaker: 'Krista Mangulsone',
      source: 'https://unsplash.com/photos/9gz3wfHr65U',
    },
    {
      id: 'post-3',
      image:
        'https://images.unsplash.com/photo-1558947530-cbcf6e9aeeae?auto=format&fit=crop&w=634&q=80',
      title: 'Good Woofs',
      description:
        'A good woof is a woof that brings joy. Here are a few tips to let your woof behave.',
      caretaker: 'Olia Nayda',
      source: 'https://unsplash.com/photos/f6v_Q0WXEK8',
    },
    {
      id: 'post-4',
      image:
        'https://images.unsplash.com/photo-1444212477490-ca407925329e?auto=format&fit=crop&w=1100&q=80',
      title: 'Wild Woofs',
      description:
        'In some parts of the world, wild woofs are very common. Learn how to interact in a nice way.',
      caretaker: 'Anoir Chafik',
      source: 'https://unsplash.com/photos/2_3c4dIFYFU',
    },
    {
      id: 'post-5',
      image:
        'https://images.unsplash.com/photo-1567014543648-e4391c989aab?auto=format&fit=crop&w=1050&q=80',
      title: 'Sleepy Woofs',
      description:
        'Sleeping is just as important for woofs as it is for humans. What are the main things your woof dreams about.',
      caretaker: 'Max Singh',
      source: 'https://unsplash.com/photos/2637Pic9xMw',
    },
    {
      id: 'post-6',
      image:
        'https://images.unsplash.com/photo-1524511751214-b0a384dd9afe?auto=format&fit=crop&w=967&q=80',
      title: 'Exploring Woofs',
      description:
        'Just sitting in one place is boring for most woofs. How do woofs explore the world?',
      caretaker: 'Jamie Street',
      source: 'https://unsplash.com/photos/wcO2PWLuQ3U',
    },
  ],
};

const HomeScreen = () => {
  const { woofs, posts } = data;

  return (
    <ScrollView>
      <Heading title="Trending Woofs" />
      <ScrollView horizontal>
        {woofs.map((woof) => (
          <WoofCard key={woof.id} name={woof.name} avatar={woof.avatar}/>
        ))}
      </ScrollView>

      <Heading title="Latest Posts" />

      {posts.map((post) => (
        <ZoomablePost
          key={post.id}
          image={post.image}
          title={post.title}
          description={post.description}
          caretaker={post.caretaker}
          source={post.source}
        />
      ))}
    </ScrollView>
  );
};

export default HomeScreen;
