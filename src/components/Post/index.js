import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { bold } from 'ansi-colors';

// import { Container } from './styles';

export default function Post({ author, title, body }) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.author}>{author}</Text>
      </View>
      <View style={styles.separator} />
      <Text style={styles.body}>{body}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    padding: 20,
    backgroundColor: '#fff',
    marginVertical: 20,
    borderRadius: 10,
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  author: {
    fontSize: 13,
    color: '#5c5',
  },
  body: {
    fontSize: 13,
  },
});
