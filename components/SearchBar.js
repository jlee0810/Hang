import React, { useState, useRef } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';


const mockData = {
  users: [
    { id: 1, name: 'John', profilePicture: require('../assets/favicon.png'), gender:  'male'  },
    { id: 2, name: 'Mary', profilePicture: require('../assets/favicon.png'), gender:  'female'},
    { id: 3, name: 'Bob', profilePicture: require('../assets/favicon.png'), gender:  'male' },
  ],
  groups: [
    { id: 4, name: 'React Native Developers', groupPicture: require('../assets/favicon.png') },
    { id: 5, name: 'Node.js Enthusiasts', groupPicture: require('../assets/favicon.png') },
    { id: 6, name: 'JavaScript Learners', groupPicture: require('../assets/favicon.png') },
  ],
};

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleSearchInputChange = (text) => {
  setSearchInput(text);
  const filteredUsers = mockData.users.filter((user) =>
    user.name.includes(text)
  );
  const filteredGroups = mockData.groups.filter((group) =>
    group.name.includes(text)
  );
  const results = [...filteredUsers, ...filteredGroups];
  setSearchResults(results);
  // setOpen(true); // Show dropdown when search input changes
};

  const handleClose = () => {
    setOpen(false);
  };

  const handleConnectClick = (result) => {
    // Handle connecting with a user
  };

  const handleJoinClick = (result) => {
    // Handle joining a group
  };

  const renderItem = ({ item }) => {
  if (item.profilePicture) {
    // Render user search result with gender icon
    let genderIcon = null;
    if (item.gender === 'male') {
      genderIcon = <Image source={require('../assets/male.png')} style={styles.icon}/>;
    } else if (item.gender === 'female') {
      genderIcon = <Image source={require('../assets/female.png')} style={styles.icon}/>;
    }
    return (
      <TouchableOpacity
        style={styles.listItem}
        onPress={() => handleConnectClick(item)}
      >
        <Image source={item.profilePicture} style={styles.avatar} />
        <Text style={styles.listItemText}>{item.name}</Text>
        {genderIcon}
        <TouchableOpacity style={styles.button} onPress={() => handleConnectClick(item)}>
          <Text style={styles.buttonText}>Connect</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    );
  } else {
    // Render group search result with group icon
    return (
      <TouchableOpacity
        style={styles.listItem}
        onPress={() => handleJoinClick(item)}
      >
        <Image source={item.groupPicture} style={styles.avatar} />
        <Text style={styles.listItemText}>{item.name}</Text>
        <Image source={require('../assets/group.png')} style={styles.icon} />
        <TouchableOpacity style={styles.button} onPress={() => handleJoinClick(item)}>
          <Text style={styles.buttonText}>Join</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    );
  }
};

  return (
    <View >
      <TextInput
        style={styles.searchBar}
        value={searchInput}
        onChangeText={handleSearchInputChange}
        placeholder="Search for users or groups"
        ref={anchorRef}
        onFocus={() => setOpen(true)}
      />
      {open && (
        <View style={{ flex: 1, justifyContent: 'center' }}>
  <View style={styles.dropdown}>
    <FlatList
      data={searchResults}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      ListEmptyComponent={
        <Text style={styles.emptyListText}>No results found</Text>
      }
    />
  </View>
</View>
        )}
  </View>

  );
};

const styles = StyleSheet.create({
container: {
alignItems: 'center',
},
searchBar: {
height: 40,
width: '100%',
borderWidth: 1,
borderColor: '#ccc',
borderRadius: 5,
paddingHorizontal: 10,
marginTop: 20,
},
dropdown: {
position: 'absolute',
top: 0,
backgroundColor: '#fff',
borderWidth: 1,
borderColor: '#ccc',
borderRadius: 5,
width: '100%',
maxHeight: 300,
zIndex: 1,
},
listItem: {
flexDirection: 'row',
alignItems: 'center',
paddingVertical: 5,
paddingHorizontal: 10,
borderBottomWidth: 1,
borderBottomColor: '#ccc',
},
avatar: {
width: 30,
height: 30,
borderRadius: 15,
marginRight: 10,
},
listItemText: {
flex: 1,
fontSize: 16,
},
button: {
paddingHorizontal: 10,
paddingVertical: 5,
borderRadius: 5,
backgroundColor: '#4285F4',
marginLeft: 10,
},
buttonText: {
color: '#fff',
fontSize: 14,
},
emptyListText: {
alignSelf: 'center',
marginTop: 10,
fontStyle: 'italic',
color: '#ccc',
},
 icon: {
  width: 40,
  height: 40,
  margin: 10,
},
});

export default SearchBar;