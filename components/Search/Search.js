// Components/Search.js

import React from 'react'
import { StyleSheet, View, TextInput, Text, FlatList, ActivityIndicator } from 'react-native'
import films from '../FilmsData/FilmsData';
import FilmItem from "../FilmsData/FimsItem";
import { getFilmsFromApiWithSearchedText } from '../API/API';
import { Button, SearchBar } from 'react-native-elements';

class Search extends React.Component {

  constructor(props) {
    super(props)
    this.searchedText = "" // Initialisation de notre donnée searchedText en dehors du state
    this.page = 0 // Compteur pour connaître la page courante
    this.totalPages = 0
    this.state = {
      films: [],
      isLoading: false
    }
  }


  loadFilms() {
    if (this.searchedText.length > 0) {
      this.setState({ isLoading: true })
      getFilmsFromApiWithSearchedText(this.searchedText, this.page + 1).then(data => {
        this.page = data.page
        this.totalPages = data.total_pages
        this.setState({
          films: [...this.state.films, ...data.results],
          isLoading: false
        })
      })
    }
  }

  displayLoading() {
    if (this.state.isLoading) {
      return (
        <View style={styles.loading_container}>
          <ActivityIndicator size='large' animating={true} />
        </View>
      )
    }
  }


  searchFilms() {
    this.page = 0
    this.totalPages = 0
    this.setState({
      films: [],
    }, () => {
      console.log("Page : " + this.page + " / TotalPages : " + this.totalPages + " / Nombre de films : " + this.state.films.length)
      this.loadFilms()
    })
  }

  searchTextInputChanged(text) {
    this.searchedText = text // Modification du texte recherché à chaque saisie de texte, sans passer par le setState comme avant
  }

  render() {
    return (
      <View style={styles.main_container}>
        <TextInput
          style={styles.textinput}
          placeholder='CHERCHE TON FILM...'
          onChangeText={(text) => this.searchTextInputChanged(text)}
          onSubmitEditing={() => this.searchFilms()}
        />
        <Button
          style={styles.button}
          buttonStyle={{ backgroundColor: "#FF7F27" }}
          title='TROUVE TON FILM !'
          onPress={() => this.searchFilms()}
        />
        <FlatList
          data={this.state.films}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) =>
            <FilmItem film={item} />
          }
          onEndReachedThreshold={0.5}
          onEndReached={() => {
            if (this.page < this.totalPages) { // On vérifie qu'on n'a pas atteint la fin de la pagination (totalPages) avant de charger plus d'éléments
              this.loadFilms()
            }
          }}
        />
        {this.state.isLoading ?
          <View style={styles.loading_container}>
            <ActivityIndicator size='large' />
          </View>
          : null
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    marginTop: 20
  },
  button: {
    backgroundColor: "#FF7F27",
    width: 405,
    marginLeft: 5,
    marginTop: 5
  },
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: 'lightgrey',
    borderWidth: 1,
    paddingLeft: 5,
    backgroundColor: '#FFFAE1'
  },
  loading_container: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 110,
    bottom: 0
  }
})

export default Search