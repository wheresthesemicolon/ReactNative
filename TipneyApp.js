import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import tipney from './assets/images/tipney.png';
import gawa from './assets/images/gawa.png';
import tap from './assets/images/tap.gif';
import blank from './assets/images/null.png';
import alternatips_icon from './assets/images/landmark.png';
import landmark_icon from './assets/images/alternatips.png';
import landmark_text from './assets/images/landmarks.png';
import alternatips_text from './assets/images/alternatipses.png';
import back from './assets/images/back.png';
import close from './assets/images/close.png';
import background from './assets/images/background.png';
import background2 from './assets/images/background2.png';
import araneta from './assets/images/Araneta.png';
import gateway from './assets/images/Gateway.png';
import station from './assets/images/Station.png';
import plaza from './assets/images/Plaza.png';
import shrine from './assets/images/Shrine.png';
import tuazon from './assets/images/Tuazon.png';




function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>


      <Image source={tap} style={
        {
          width: 120,
          height: 30,
          position: 'absolute',
          bottom: 25,
          left: 250,
          resizeMode: 'stretch',
        }}>
      </Image>

      <TouchableOpacity onPress={() => navigation.navigate("Menu")}>

        <Image source={blank} style={
          {
            width: 640,
            height: 360,
          }}>
        </Image>

        <Image source={tipney} style={
          {
            width: 600,
            height: 170,
            position: 'absolute',
            top: 15,
            left: 15,
            resizeMode: 'stretch',
          }}>
        </Image>

        <Image source={gawa} style={
          {
            width: 550,
            height: 150,
            position: 'absolute',
            top: 150,
            left: 45,
            resizeMode: 'stretch',
          }}>
        </Image>

        <Text style={
          {
            width: 120,
            height: 30,
            position: 'absolute',
            bottom: 25,
            left: 250,
            resizeMode: 'stretch',
          }}>
        </Text>


      </TouchableOpacity>

    </View>
  );
}


function MenuScreen({ navigation }) {
  return (
    <View style={styles.container2} >
      <ImageBackground source={background} style={styles.image}></ImageBackground>

      <TouchableOpacity style={styles.back} onPress={() => navigation.navigate("Title Screen")}>
        <Image source={back} style={styles.backbutton}>
        </Image>
      </TouchableOpacity>

      <TouchableOpacity style={styles.leftContainer} onPress={() => navigation.navigate("Landmarks")}>
        <Image source={landmark_text} style={
          {
            width: 150,
            height: 20,
            resizeMode: 'stretch',
            position: 'absolute',
            top: 20,
            right: 27,
          }}>
        </Image>

        <Image source={landmark_icon} style={
          {
            width: 130,
            height: 130,
            resizeMode: 'stretch',
            position: 'absolute',
            top: 95,
            right: 34,
          }}>
        </Image>
      </TouchableOpacity>

      <TouchableOpacity style={styles.rightContainer} onPress={() => navigation.navigate("Alternatips")}>

        <Image source={alternatips_text} style={
          {
            width: 150,
            height: 20,
            resizeMode: 'stretch',
            position: 'absolute',
            top: 20,
            right: 27,
          }}>
        </Image>

        <Image source={alternatips_icon} style={
          {
            width: 145,
            height: 137,
            resizeMode: 'stretch',
            position: 'absolute',
            top: 87,
            right: 23,
          }}>
        </Image>
      </TouchableOpacity>
    </View>
  );
}

function LandmarksScreen({ navigation }) {
  return (
    <View style={styles.background}>
      <ImageBackground source={background2} style={styles.image}></ImageBackground>
      <TouchableOpacity style={styles.back} onPress={() => navigation.navigate("Menu")}>
        <Image source={back} style={styles.backbutton}></Image>

      </TouchableOpacity>
      <View style={styles.backdrop}>
        <Text style={styles.landmarksheader}>Landmarks</Text>
      </View>

      <View style={styles.backdrop2}></View>

      <View style={styles.backdrop3}></View>

      <View style={styles.strip1}>
        <Image source={araneta} style={styles.landpic}></Image>
        <Text style={styles.striptext}>Araneta Coliseum</Text>
      </View>

      <View style={styles.strip2}>
        <Image source={gateway} style={styles.landpic}></Image>
        <Text style={styles.striptext}>Gateway Mall</Text>
      </View>

      <View style={styles.strip3}>
        <Image source={station} style={styles.landpic}></Image>
        <Text style={styles.striptext}>Anonas Station</Text>
      </View>

      <TouchableOpacity style={styles.check1} onPress={() => navigation.navigate("Araneta")}>
        <Text style={styles.checktext}>     View</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.check2} onPress={() => navigation.navigate("Gateway")}>
        <Text style={styles.checktext}>     View</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.check3} onPress={() => navigation.navigate("Anonas")}>
        <Text style={styles.checktext}>     View</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.suggest} onPress={() => navigation.navigate("Alternatips")}>
        <Text style={styles.checktext}> Alternatips &#62;</Text>
      </TouchableOpacity>

      <Text style={{
        color: '#8FC9EE',
        fontSize: 9,
        fontFamily: 'monospace',
        position: 'absolute',
        top: 115,
        left: 200,
      }}>  an indoor multi-purpose sports arena that is part {"\n"}  of the Araneta City in the Cubao area of Quezon City.</Text>

      <Text style={{
        color: '#8FC9EE',
        fontSize: 9,
        fontFamily: 'monospace',
        position: 'absolute',
        top: 180,
        left: 200,
      }}>  a shopping mall located within the Araneta City in {"\n"}  Cubao, Quezon City.</Text>

      <Text style={{
        color: '#8FC9EE',
        fontSize: 9,
        fontFamily: 'monospace',
        position: 'absolute',
        top: 245,
        left: 200,
      }}>  a station on the Manila Light Rail Transit System {"\n"}  Line 2. Anonas station is one of the many elevated {"\n"}  stations that can be found on the line.</Text>
    </View>
  )
}

function AlternatipsScreen({ navigation }) {
  return (
    <View style={styles.background}>
      <ImageBackground source={background2} style={styles.image}></ImageBackground>
      <TouchableOpacity style={styles.back} onPress={() => navigation.navigate("Menu")}>
        <Image source={back} style={styles.backbutton}></Image>
      </TouchableOpacity>
      <View style={styles.backdrop}>
        <Text style={styles.landmarksheader}>Alternatips</Text>
      </View>

      <View style={styles.backdrop2}></View>

      <View style={styles.backdrop3}></View>

      <View style={styles.strip1}>
        <Image source={plaza} style={styles.landpic}></Image>
      </View>

      <View style={styles.strip2}>
        <Image source={shrine} style={styles.landpic}></Image>
      </View>

      <View style={styles.strip3}>
        <Image source={tuazon} style={styles.landpic}></Image>
      </View>

      <TouchableOpacity style={styles.check1} onPress={() => navigation.navigate("Plaza")}>
        <Text style={styles.checktext}>     View</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.check2} onPress={() => navigation.navigate("Joseph")}>
        <Text style={styles.checktext}>     View</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.check3} onPress={() => navigation.navigate("Tuazon")}>
        <Text style={styles.checktext}>     View</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.suggest} onPress={() => navigation.navigate("Landmarks")}>
        <Text style={styles.checktext}> &#60; Landmarks</Text>
      </TouchableOpacity>

      <Text style={{
        color: '#8FC9EE',
        fontSize: 20,
        fontWeight: 'bold',
        position: 'absolute',
        top: 105,
        left: 220,
      }}>Aurora Plaza</Text>

      <Text style={{
        color: '#8FC9EE',
        fontSize: 20,
        fontWeight: 'bold',
        position: 'absolute',
        top: 170,
        left: 220,
      }}>St. Joseph Area</Text>

      <Text style={{
        color: '#8FC9EE',
        fontSize: 20,
        fontWeight: 'bold',
        position: 'absolute',
        top: 235,
        left: 220,
      }}>P. Tuazon Blvd. Area</Text>


    </View>
  )
}



function AranetaScreen({ navigation }) {
  return (
    <View style={styles.background}>
      <ImageBackground source={background2} style={styles.image}></ImageBackground>
      <View style={styles.backdrop}>
        <Text style={styles.landmarksheader}>Araneta Coliseum</Text>
      </View>

      <View style={styles.backdrop2}></View>
      <View style={styles.backdrop4}></View>

      <View style={styles.strip4}>
      </View>

      <Image source={araneta} style={styles.viewpic}></Image>


      <TouchableOpacity style={styles.close} onPress={() => navigation.navigate("Landmarks")}>
        <Image source={close} style={styles.closebutton}></Image>
      </TouchableOpacity>


      <Text style={{
        color: '#8FC9EE',
        fontSize: 8,
        fontFamily: 'monospace',
        position: 'absolute',
        bottom: 45,
        left: 80,
      }}>Araneta is the heart of Cubao's most famous spots: the triad of malls between Gateway, Alimall and Farmer's. {"\n"}
      Students are able to find multiple locations here, whether to hang out or search for materials required for {"\n"}
      their next project. Araneta features a diversity of malls and shops that provide learning, craft and project {"\n"}
      materials. Most jeepneys and transportation circulating around T.I.P. know this place as a drop-off and pickup {"\n"}
      point due to its popularity and ease to locate, thanks to its towering buildings.</Text>

      <Text style={{
        color: '#F0D8B8',
        fontSize: 15,
        fontFamily: 'serif',
        fontWeight: 'bold',
        position: 'absolute',
        top: 80,
        right: 75,
      }}>Routes from TIP:{"\n"}{"\n"}
           ◘ Cubao Gateway{"\n"}
           ◘ Araneta{"\n"}
           ◘ Cubao Yale{"\n"}
           ◘ Ali-mall</Text>
    </View>
  )
}


function GatewayScreen({ navigation }) {
  return (
    <View style={styles.background}>
      <ImageBackground source={background2} style={styles.image}></ImageBackground>
      <View style={styles.backdrop}>
        <Text style={styles.landmarksheader}>Gateway Mall</Text>
      </View>

      <View style={styles.backdrop2}></View>
      <View style={styles.backdrop4}></View>

      <View style={styles.strip4}>
      </View>

      <Image source={gateway} style={styles.viewpic}></Image>


      <TouchableOpacity style={styles.close} onPress={() => navigation.navigate("Landmarks")}>
        <Image source={close} style={styles.closebutton}></Image>
      </TouchableOpacity>


      <Text style={{
        color: '#8FC9EE',
        fontSize: 7,
        fontFamily: 'monospace',
        position: 'absolute',
        bottom: 40,
        left: 80,
      }}>One of the most popular malls in Cubao, Gateway is the  flagship mall that sparked the renaissance of the Araneta City. It is {"\n"}
      a place where students can both unwind and study. Gateway malls often have open rooftops, where some students (especially {"\n"}
      Architecture) are found working with their plates or simply hanging out to take a breathe and return to reviewing. There is {"\n"}
      also an Art gallery and Library available for everyone, which is quite useful when you're looking to both take a breather and {"\n"}
      still study. Gateway is also home to one of the biggest National Bookstore branches, a store that sells essential school {"\n"}
      supplies so that students won't have to search far and wide. Like any other mall, it is also filled with different food places, {"\n"}
      so you wont ever run out of choices.</Text>

      <Text style={{
        color: '#F0D8B8',
        fontSize: 15,
        fontFamily: 'serif',
        fontWeight: 'bold',
        position: 'absolute',
        top: 80,
        right: 75,
      }}>Routes from TIP:{"\n"}{"\n"}
           ◘ Cubao Gateway{"\n"}
           ◘ Araneta{"\n"}
           ◘ Cubao Yale{"\n"}
           ◘ Ali-mall</Text>
    </View>
  )
}


function AnonasScreen({ navigation }) {
  return (
    <View style={styles.background}>
      <ImageBackground source={background2} style={styles.image}></ImageBackground>
      <View style={styles.backdrop}>
        <Text style={styles.landmarksheader}>Anonas Station</Text>
      </View>

      <View style={styles.backdrop2}></View>
      <View style={styles.backdrop4}></View>

      <View style={styles.strip4}>
      </View>

      <Image source={station} style={styles.viewpic}></Image>


      <TouchableOpacity style={styles.close} onPress={() => navigation.navigate("Landmarks")}>
        <Image source={close} style={styles.closebutton}></Image>
      </TouchableOpacity>


      <Text style={{
        color: '#8FC9EE',
        fontSize: 7,
        fontFamily: 'monospace',
        position: 'absolute',
        bottom: 40,
        left: 80,
      }}>One of the stations under Manila Light Rail Transit System Line 2, Anonas station is also known as a drop-off and pick up {"\n"}
      point. The station itself is known by drivers enough, so that when you tell them "anonas " or "lrt", they will surely take you {"\n"}
      here. Being an LRT Station, anonas has a lot of commodities to offer to passengers that might be useful to students like us. {"\n"}
      They are various convenience stores located around the station, as well as multiple restaurants inside of Anonas LRT City {"\n"}
      Center. Cinema 76 can also be found here, at the third floor of the Lrt City Center. Cinema 76 is known to show a diverse {"\n"}
      variety of films, where most are either animated or educational. A small branch of office warehouse can also be found at the {"\n"}
      ground floor of the building.</Text>

      <Text style={{
        color: '#F0D8B8',
        fontSize: 15,
        fontFamily: 'serif',
        fontWeight: 'bold',
        position: 'absolute',
        top: 80,
        right: 75,
      }}>Routes from TIP:{"\n"}{"\n"}
           ◘ Anonas{"\n"}
           ◘ LRT{"\n"}
      </Text>
    </View>
  )
}






function PlazaScreen({ navigation }) {
  return (
    <View style={styles.background}>
      <ImageBackground source={background2} style={styles.image}></ImageBackground>
      <View style={styles.backdrop}>
        <Text style={styles.landmarksheader}>Aurora Plaza</Text>
      </View>

      <View style={styles.backdrop2}></View>
      <View style={styles.backdrop4}></View>

      <View style={styles.strip4}>
      </View>

      <Image source={plaza} style={styles.viewpic}></Image>


      <TouchableOpacity style={styles.close} onPress={() => navigation.navigate("Alternatips")}>
        <Image source={close} style={styles.closebutton}></Image>
      </TouchableOpacity>


      <Text style={{
        color: '#8FC9EE',
        fontSize: 10.5,
        fontFamily: 'monospace',
        position: 'absolute',
        bottom: 43,
        left: 80,
      }}>Inside one of Anonas' hidden places is an array of sevices useful for Students:{"\n"}
      Printing and Photocopy services are available here when the school-near ones are {"\n"}
      full. Besides printing and documentation services, there are also a variety of food {"\n"}
      shops and stalls to choose from, whenever you're craving something different.</Text>

      <Text style={{
        color: '#F0D8B8',
        fontSize: 15,
        fontFamily: 'serif',
        fontWeight: 'bold',
        position: 'absolute',
        top: 80,
        right: 65,
      }}>Alternatives for:{"\n"}{"\n"}
           ◘ Carinderia{"\n"}
           ◘ Document Services{"\n"}
           ◘ Food Stalls{"\n"}
           ◘ Internet Cafe{"\n"}
           ◘ Printing Services{"\n"}
           ◘ School Supplies{"\n"}
           ◘ Variety Store
           </Text>

    </View>
  )
}


function JosephScreen({ navigation }) {
  return (
    <View style={styles.background}>
      <ImageBackground source={background2} style={styles.image}></ImageBackground>
      <View style={styles.backdrop}>
        <Text style={styles.landmarksheader}>St. Joseph Shrine Area</Text>
      </View>

      <View style={styles.backdrop2}></View>
      <View style={styles.backdrop4}></View>

      <View style={styles.strip4}>
      </View>

      <Image source={shrine} style={styles.viewpic}></Image>


      <TouchableOpacity style={styles.close} onPress={() => navigation.navigate("Alternatips")}>
        <Image source={close} style={styles.closebutton}></Image>
      </TouchableOpacity>


      <Text style={{
        color: '#8FC9EE',
        fontSize: 9,
        fontFamily: 'monospace',
        position: 'absolute',
        bottom: 43,
        left: 80,
      }}>Saint Joseph Shrine The Diocese of Cubao , Saint Joseph serves not only as a religious place but {"\n"}
      also a haven for a phletora of shops and services. Because of its proximity to the Anonas LRT {"\n"}
      Station and how often it is filled with people, the streets beside this church is filled with food {"\n"}
      stops, convenience stores and so. Being near to three schools, NCBA, WCC and T.I.P, the available {"\n"}
      commodities have been influenced to also appeal to the needs of students.</Text>

      <Text style={{
        color: '#F0D8B8',
        fontSize: 12,
        fontFamily: 'serif',
        fontWeight: 'bold',
        position: 'absolute',
        top: 75,
        right: 85,
      }}>Alternatives for:{"\n"}{"\n"}
           ◘ Convenience Stores{"\n"}
           ◘ Document Services{"\n"}
           ◘ School Supplies{"\n"}{"\n"}
           Routes from TIP:{"\n"}{"\n"}
           ◘ Anonas{"\n"}
           ◘ LRT{"\n"}
           ◘ St. Joseph{"\n"}
           ◘ Parish{"\n"}{"\n"}
      </Text>

    </View>
  )
}


function TuazonScreen({ navigation }) {
  return (
    <View style={styles.background}>
      <ImageBackground source={background2} style={styles.image}></ImageBackground>
      <View style={styles.backdrop}>
        <Text style={styles.landmarksheader}>P. Tuazon Boulevard Area</Text>
      </View>

      <View style={styles.backdrop2}></View>
      <View style={styles.backdrop4}></View>

      <View style={styles.strip4}>
      </View>

      <Image source={tuazon} style={styles.viewpic}></Image>


      <TouchableOpacity style={styles.close} onPress={() => navigation.navigate("Alternatips")}>
        <Image source={close} style={styles.closebutton}></Image>
      </TouchableOpacity>


      <Text style={{
        color: '#8FC9EE',
        fontSize: 9.8,
        fontFamily: 'monospace',
        position: 'absolute',
        bottom: 40,
        left: 80,
      }}>Right behind T.I.P, This boulevard stretches up to Araneta itself. It contains a variety{"\n"}
      of student-essential services, enough to make it here. Looking for Printing? They have it.{"\n"}
      Looking for Documentation like Bookbinding? They have it. Hungry but don't want to ride a {"\n"}
      jeep to Cubaoor want something nearer? P.Tuazon's generous offer of renown fastfood stalls {"\n"}
      won't fail you.</Text>

      <Text style={{
        color: '#F0D8B8',
        fontSize: 12,
        fontFamily: 'serif',
        fontWeight: 'bold',
        position: 'absolute',
        top: 80,
        right: 85,
      }}>Alternatives for:{"\n"}{"\n"}
           ◘ Document Services{"\n"}
           ◘ Food Stalls{"\n"}
           ◘ Printing Services{"\n"}
           ◘ School Supplies{"\n"}{"\n"}
		   ◘ Routes from TIP:{"\n"}{"\n"}
           ◘ Rosario{"\n"}
		   ◘ P. Tuazon
      </Text>
    </View>
  )
}



const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Title Screen" component={HomeScreen} />
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="Landmarks" component={LandmarksScreen} />
        <Stack.Screen name="Alternatips" component={AlternatipsScreen} />
        <Stack.Screen name="Araneta" component={AranetaScreen} />
        <Stack.Screen name="Gateway" component={GatewayScreen} />
        <Stack.Screen name="Anonas" component={AnonasScreen} />
        <Stack.Screen name="Plaza" component={PlazaScreen} />
        <Stack.Screen name="Joseph" component={JosephScreen} />
        <Stack.Screen name="Tuazon" component={TuazonScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: '#000000',
  },

  container2: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: '#000000',
  },

  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },

  leftContainer: {
    backgroundColor: '#0D121Acf',
    height: 260,
    width: 205,
    position: 'absolute',
    bottom: 40,
    left: 80,
    borderRadius: 10,
    borderColor: '#100C0B',
    borderWidth: 2,
  },
  rightContainer: {
    backgroundColor: '#0D121Acf',
    height: 260,
    width: 205,
    position: 'absolute',
    bottom: 40,
    right: 80,
    borderRadius: 10,
    borderColor: '#100C0B',
    borderWidth: 2,

  },

  textStyle: {
    color: 'white',
    fontSize: 50,
    fontFamily: 'monospace',

  },

  back: {
    width: 20,
    height: 20,
    position: 'absolute',
    top: 0,
    left: 20,

  },

  backbutton: {
    width: 30,
    height: 30,
    resizeMode: 'stretch',
    position: 'absolute',
    top: 5,
    right: 5,
  },

  close: {
    width: 20,
    height: 20,
    position: 'absolute',
    top: 30,
    right: 50,

  },

  closebutton: {
    width: 20,
    height: 20,
    resizeMode: 'stretch',
    position: 'absolute',
    top: 5,
    right: 5,
  },

  background: {
    width: 640,
    height: 360,
  },

  backdrop: {
    width: 544,
    height: 306,
    backgroundColor: '#171211',
    position: 'absolute',
    left: 50,
    top: 30,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#5A451E',
    alignItems: 'center',
  },

  backdrop2: {
    width: 528,
    height: 270,
    backgroundColor: '#100C0B',
    position: 'absolute',
    left: 58,
    top: 60,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#41221B',
  },

  backdrop3: {
    width: 512,
    height: 234,
    backgroundColor: '#131A1E',
    position: 'absolute',
    left: 66,
    top: 85,
    borderRadius: 1,
  },

  backdrop4: {
    backgroundColor: '#1D2D37',
    width: 355,
    height: 190,
    resizeMode: 'stretch',
    position: 'absolute',
    top: 67,
    left: 72,
    borderRadius: 2,
  },

  strip1: {
    width: 500,
    height: 60,
    backgroundColor: '#1D2D37',
    position: 'absolute',
    top: 90,
    left: 72,
    borderRadius: 2,
  },

  strip2: {
    width: 500,
    height: 60,
    backgroundColor: '#1D2D37',
    position: 'absolute',
    top: 155,
    left: 72,
    borderRadius: 2,
  },

  strip3: {
    width: 500,
    height: 60,
    backgroundColor: '#1D2D37',
    position: 'absolute',
    top: 220,
    left: 72,
    borderRadius: 2,
  },

  strip4: {
    width: 500,
    height: 60,
    backgroundColor: '#1D2D37',
    position: 'absolute',
    top: 262,
    left: 72,
    borderRadius: 2,
  },

  check1: {
    width: 71,
    height: 27,
    backgroundColor: '#FFD017',
    position: 'absolute',
    top: 108,
    right: 78,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: '#BB830B',
    justifyContent: 'center',
  },

  check2: {
    width: 71,
    height: 27,
    backgroundColor: '#FFD017',
    position: 'absolute',
    top: 172,
    right: 78,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: '#BB830B',
    justifyContent: 'center',
  },

  check3: {
    width: 71,
    height: 27,
    backgroundColor: '#FFD017',
    position: 'absolute',
    top: 235,
    right: 78,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: '#BB830B',
    justifyContent: 'center',
  },

  landpic: {
    width: 120,
    height: 50,
    resizeMode: 'stretch',
    position: 'absolute',
    top: 5,
    left: 5,
  },

  viewpic: {
    width: 340,
    height: 180,
    resizeMode: 'stretch',
    position: 'absolute',
    top: 72,
    left: 80,
  },

  checktext: {
    color: 'black',
    fontSize: '7',
    fontWeight: 'bold',
  },

  striptext: {
    color: '#8FC9EE',
    fontSize: '5',
    fontFamily: 'monospace',
    fontWeight: 'bold',
    position: 'absolute',
    bottom: 38,
    left: 130,
  },

  striptext2: {
    color: '#8FC9EE',
    fontFamily: 'monospace',
    fontWeight: 'bold',
    position: 'absolute',
    bottom: 38,
    left: 130,
  },

  stripdesc: {
    color: '#8FC9EE',
    fontSize: '3',
    fontFamily: 'serif',
    fontWeight: 'bold',
    position: 'absolute',
    bottom: 38,
    left: 130,
  },



  suggest: {
    width: 100,
    height: 27,
    backgroundColor: '#FFD017',
    position: 'absolute',
    bottom: 45,
    right: 270,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: '#BB830B',
    justifyContent: 'center',
  },

  landmarksheader: {
    color: '#F0D8B8',
    fontSize: '7',
    fontWeight: 'bold',
  },

  alternatipsheader: {
    color: '#F0D8B8',
    fontSize: '7',
    fontWeight: 'bold',
  },





});
