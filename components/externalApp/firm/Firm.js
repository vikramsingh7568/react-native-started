import { SelectList } from 'react-native-dropdown-select-list'
// 'react-native-dropdown-select-list' this library installed for dropdown list 
import { View, Text, TextInput , TouchableOpacity} from "react-native";
import React from "react";
import { styles } from "./Style";
const firm = () => {
  function myfun() {
    alert("all is well");
  }
  const [selected, setSelected] = React.useState("");
 
  const data = [
      {key:'1', value:'Mobiles', disabled:true},
      {key:'2', value:'Appliances'},
      {key:'3', value:'Cameras'},
      {key:'4', value:'Computers', disabled:true},
      {key:'5', value:'Vegetables'},
      {key:'6', value:'Diary Products'},
      {key:'7', value:'Drinks'},
  ]

  return (
    <View>
      <Text style={styles.box}>
        this is a firm which we want to use in this app
      </Text>

      <TextInput style={styles.inputField} onChangeText={myfun} />

      <View>this is second</View>
      <TextInput style={styles.thirdInput} />

      <TextInput
        style={styles.fourthInput}
        multiline={true}
        numberOfLines={4}
      />
        <SelectList 
        style={styles.dropdownli}
        setSelected={(val) => setSelected(val)} 
        data={data} 
        save="value"
        placeholder='choose any value'
    />
       <TouchableOpacity>
        <Text>
          select country
        </Text>
       </TouchableOpacity>
    </View>
  );
};
export default firm;
