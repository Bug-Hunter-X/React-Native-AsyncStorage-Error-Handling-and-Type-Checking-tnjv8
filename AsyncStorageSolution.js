import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.error('Error storing data:', e);
    // Handle error appropriately, e.g., display a message to the user
  }
};

const getData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    if (jsonValue !== null) {
      return JSON.parse(jsonValue);
    } else {
      return null; // or a default value
    }
  } catch (e) {
    console.error('Error retrieving data:', e);
    // Handle error appropriately, e.g., return a default value or display a message
    return null; 
  }
};

//Example Usage
storeData('@my_key', {name: 'John Doe', age: 30});
getData('@my_key').then(data => console.log(data));