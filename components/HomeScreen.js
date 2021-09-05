import { StyleSheet, Button, Image, View } from 'react-native';
import React from 'react';

const HomeScreen = ({ navigation }) => {
    return (
        <View>
        <Button
            title="Boooop!"
            onPress={() =>
                navigation.navigate('Profile')
            }
        />
        <Image
        resizeMode={'cover'}
        style={styles.logo}
        source={require('../content/sniffer.png')}
      />
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
       
        paddingTop: 50,
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
    logo: {
        alignSelf: 'center',
        height:'100%', 
        width:'100%'
    },
});

export default HomeScreen