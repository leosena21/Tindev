import React from 'react';
import {View, Text, SafeAreaView, Image, StyleSheet, TouchableOpacity} from 'react-native';

import logo from '../assets/logo.png';
import dislike from '../assets/dislike.png';
import like from '../assets/like.png';

export default function Main() {
  return (
    <SafeAreaView style={styles.container}>
      <Image style = {styles.logo} source={logo} />

      <View style = {styles.cardsContainer}>
        <View style = {[styles.cards, {zIndex: 3}]}>
          <Image style={styles.avatar} source={ {uri: 'https://avatars0.githubusercontent.com/u/30130869?v=4' } }/>
          <View style={styles.footer}>
            <Text style={styles.name}>Leonardo Sena</Text>
            <Text style={styles.bio} numberOfLines={3}>Estutande de engenharia de computacao</Text>
          </View>
        </View>

        <View style = {[styles.cards, {zIndex: 2}]}>
          <Image style={styles.avatar} source={ {uri: 'https://avatars0.githubusercontent.com/u/30130869?v=4' } }/>
          <View style={styles.footer}>
            <Text style={styles.name}>Leonardo Sena</Text>
            <Text style={styles.bio} numberOfLines={3}>Estutande de engenharia de computacao</Text>
          </View>
        </View>

        <View style = {[styles.cards, {zIndex: 1}]}>
          <Image style={styles.avatar} source={ {uri: 'https://avatars0.githubusercontent.com/u/30130869?v=4' } }/>
          <View style={styles.footer}>
            <Text style={styles.name}>Leonardo Sena</Text>
            <Text style={styles.bio} numberOfLines={3}>Estutande de engenharia de computacao</Text>
          </View>
        </View>
      </View>
      
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button}>
          <Image source={dislike}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image source={like}/>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  cardsContainer:{
    flex: 1, 
    alignSelf: 'stretch',
    justifyContent: 'center',
    maxHeight: 500,
  },

  cards:{
    borderWidth:1,
    borderColor: '#DDD',
    borderRadius: 8,
    margin: 30, 
    overflow: 'hidden',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0, 
    bottom: 0,
  },

  avatar:{
    flex:1, 
    height: 300,
  },

  footer: {
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },

  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },

  bio: {
    fontSize: 14,
    color: '#999',
    marginTop: 5,
    lineHeight: 18
  },

  logo: {
    marginTop:30,
  },

  buttonsContainer: {
    flexDirection: 'row',
    marginBottom: 30,
  },

  button: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
});