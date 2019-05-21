import React, { Component } from 'react';
import {
  StyleSheet, Text, View, ScrollView,
} from 'react-native';

import Post from '~/components/Post';
import data from '~/database/posts';

import('./src/config/DevToolsConfig.js');
import('./src/config/ReactotronConfig');

class App extends Component {
  state = {
    posts: data,
  };

  render() {
    const { posts } = this.state;
    return (
      <View>
        <View style={styles.header}>
          <Text style={styles.appTitle}>GoNative App</Text>
        </View>
        <ScrollView contentContainerStyle={styles.container}>
          {posts.map(post => (
            <Post key={post.id} author={post.author} title={post.title} body={post.body} />
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c77',
  },
  header: {
    height: 100,
    backgroundColor: '#fff',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  appTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default App;
