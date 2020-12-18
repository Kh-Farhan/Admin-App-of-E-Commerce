// In App.js in a new project

import * as React from 'react';
import {StyleSheet,Text,View,Image,ScrollView,LinearLayout,TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);
class StartScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state={
          Products:[{
            name:"Milk",
            Price:100,
            img:require('./assets/milk.png'),
            quantity:"Quantity: 1Kg",
            key:Math.random()
          },
          {
            name:"Chicken",
            Price:300,
            img:require('./assets/nuggets.jpg'),
            quantity:"Quantity: 24 Pieces",
            key:Math.random()
          },
          {
            name:"Rice",
            Price:200,
            img:require('./assets/rice.jpg'),
            quantity:"Quantity:1Kg",
            key:Math.random()
          }
        ],
          Employees:[{
            name:"Khawaja Farhan Ahmed",
            experience:"4 years",
            key:Math.random(),
            salary:"Salary: 50000"
          },
          {
            name:"Ahmed amjad",
            experience:"5 years",
            key:Math.random(),
            salary:"Salary: 30000"
            
          },
          {
            name:"Shaid zuberi",
            experience:"6 years",
            key:Math.random(),
            salary:"Salary: 20000"
          }
          
        ],
          Orders:[{
            orderNo:1,
            reciever:'Khawaja Farhan Ahmed',
            price:5000,
            key:Math.random(),
            status:"Status: Delivered"
          },
          {
            orderNo:2,
            reciever:'Zain ul Abideen',
            price:600,
            key:Math.random(),
            status:"Status: Not-Delivered"
          },
          {
            orderNo:3,
            reciever:'Talal Ahmed',
            price:10000,
            key:Math.random(),
            status:"Status: Delivered"
          }
        ]
        }
        
    } 
    render(){
      return(
      <ScrollView><View style={styles.container}>
        <TouchableOpacity style={styles.calc} onPress={()=>{
          this.props.navigation.navigate("List",{arr:this.state.Products,send:"products"});
        }}
    ><Text style={styles.btntxt}>Manage Products</Text></TouchableOpacity>

    <TouchableOpacity style={styles.calc} onPress={()=>{
          this.props.navigation.navigate("List",{arr:this.state.Employees,send:"employee"
          });
        }}
    ><Text style={styles.btntxt}>Manage Employees</Text></TouchableOpacity>
    
    <TouchableOpacity style={styles.calc} onPress={()=>{
          this.props.navigation.navigate("List",{arr:this.state.Orders,send:"order"
        });
        }}
    ><Text style={styles.btntxt}>Manage Orders</Text></TouchableOpacity>
      </View>
      </ScrollView>
      );
    }
}
class ListScreen extends React.Component {
  constructor(props){
    super(props);
    this.array=this.props.route.params.arr;
    this.view=this.props.route.params.send;
  }
  
  render(){
    const productV=(<ScrollView >
    <Text style={styles.Head}>Products</Text>
    {this.array.map((val)=>(
    <TouchableOpacity style={{height:300,marginTop:20}} key={val.key} onPress={()=>{this.props.navigation.setParams({key:Math.random()});
      this.props.navigation.navigate("Details",{det:val.quantity})}}>
      <View style={{flexDirection:'row'}}>
      <View style={{flex:1}}>
        <Image
        source={val.img}
        style={styles.img}
        />
      </View>
      <View style={{flex:1}}>
        <Text style={styles.result}>{val.name}</Text>
        <Text style={styles.result}>{val.Price}</Text>
      </View>
      </View>
    </TouchableOpacity>
    
    ))}
    </ScrollView>);

    const employee=(<ScrollView >
      <Text style={styles.Head}>Employees</Text>
      {this.array.map((val)=>(
      <TouchableOpacity onPress={()=>{
        this.props.navigation.setParams({key:Math.random()});
        this.props.navigation.navigate("Details",{det:val.salary})}}>
        <Text style={styles.result}><Text style={{color:"orange"}}>{val.name}</Text></Text>
        <Text style={styles.result}><Text style={{color:"orange"}}>{val.experience}</Text></Text>
        <Text style={styles.result}>=========================</Text>
      </TouchableOpacity>
      ))}
      </ScrollView>);


    const order=(<ScrollView >
      <Text style={styles.Head}>Employees</Text>
      {this.array.map((val)=>(
      <TouchableOpacity onPress={()=>{
        this.props.navigation.setParams({key:Math.random()});
        this.props.navigation.navigate("Details",{det:val.status})}}>
        <Text style={styles.result}>Order Number:<Text style={{color:"orange"}}>{val.orderNo}</Text></Text>
        <Text style={styles.result}>reciever Name: <Text style={{color:"orange"}}>{val.reciever}</Text></Text>
        <Text style={styles.result}>Price to be paid:<Text style={{color:"orange"}}>{val.price}</Text></Text>
        <Text style={styles.result}>=========================</Text>
      </TouchableOpacity>
      ))}
      </ScrollView>);
 
    return(
    <View  style={styles.container}>  
      {this.view==="products"?productV:this.view==="employee"?employee:order}
      </View>
      

      
    );
}
}
class DetailScreen extends React.Component {
  constructor(props){
    super(props);
    this.detail=this.props.route.params.det;
    console.log(this.detail);
  }
  render(){
    return(
      <View  style={styles.container}>
        <Text style={styles.Head}>{this.detail}</Text>
      </View>

    )

  }
}
const Stack = createStackNavigator();
class App extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <NavigationContainer >
        <Stack.Navigator  initialRouteName={"Start"}>
          <Stack.Screen 
          name="Start" 
          component={StartScreen}
          options={{
            headerStyle: {
              backgroundColor: 'yellow',
            },
            headerTintColor: 'black',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize:25,
            },
            
          }}
          />
          <Stack.Screen 
          name="List" 
          component={ListScreen} 
          options={{
            headerStyle: {
              backgroundColor: 'yellow',
            },
            headerTintColor: 'black',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize:25,
            },
            
          }}
          />
          <Stack.Screen 
          name="Details" 
          component={DetailScreen} 
          options={{
            headerStyle: {
              backgroundColor: 'yellow',
            },
            headerTintColor: 'black',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize:25,
            },
            
          }}
          />
        </Stack.Navigator>
        
        
      </NavigationContainer>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container:{
    paddingTop:'15%',
    height:780,
    flex:1,
    backgroundColor:"white",
    paddingBottom:30
  },
  btntxt:{
    textAlign:'center',color:'black',paddingTop:'4%'
  },
  containerH:{
    paddingTop:'15%',
    height:780,
    backgroundColor:"#D9F1FF",
    paddingBottom:30
  },
  emptyH:{
    textAlign:"center",fontSize:16,fontWeight:'bold',color:'#1F9DE7',paddingTop:'80%'
  },
  img:{
    width: 150,
    height: 200,
    marginLeft:"36%",
    marginBottom:1
  },
  Head:{
    textAlign:'center',
    fontSize:25,
    fontWeight:'bold',
    color:'black'
  },
  tableHead:{
    textAlign:'center',
    fontSize:16,
    fontWeight:'bold',
    color:'#1F9DE7',
  },
  calc:{
    borderWidth:2,
    borderColor:'grey',
    width:'60%',
    height:50,
    alignSelf:"center",
    margin:10,
    backgroundColor:'yellow',
    padding:4,
    borderRadius:10
  },
  tableRow:{
    paddingLeft:10
  },
  input:{
    borderColor:"#1F9DE7",
    borderWidth:1,
    width:'80%',
    alignSelf:"center",
    margin:10,
    padding:4,
    borderRadius:10,
  },
  heart:{
    alignSelf:"center",
    margin:10,
    padding:4,
  },
  saved:{
    textAlign:'center',
    fontSize:20,
    fontWeight:'bold',
    color:"black"
  },
  result:{
    textAlign:'center',
    fontSize:25,
    fontWeight:'bold',
    color:'black'
  }
});