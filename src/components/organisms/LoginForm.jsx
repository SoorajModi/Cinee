import React from 'react';
import firebase from 'firebase';
import {Button, Card, Paragraph, TextInput,} from 'react-native-paper';
import {Dimensions, StyleSheet} from 'react-native';

const ScreenHeight = Dimensions.get('window').height;
const ScreenWidth = Dimensions.get('window').width;

const LoginForm = ({emitLoginResult}) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    function signOn(email, password) {
        console.log(email + password);
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                const {user} = userCredential;
                console.log('Awh hell yeah');
                emitLoginResult(true);
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log('yo this is an error my guy');
                console.log(error.message);
                emitLoginResult(false);
            });
    }

    return (
        <Card style={styles.card}>
            <Card.Title title="Sign on" titleStyle={styles.title}/>
            <Card.Content style={styles.content}>
                <Paragraph style={{width: ScreenWidth * 0.9}}>
                    <TextInput
                        label="Email"
                        value={email}
                        onChangeText={(email) => setEmail(email)}
                        style={{width: ScreenWidth * 0.9}}
                    />
                </Paragraph>
                <Paragraph style={styles.passwordEntry}>
                    <TextInput
                        label="Password"
                        value={password}
                        onChangeText={(password) => setPassword(password)}
                        style={{width: ScreenWidth * 0.9}}
                    />
                </Paragraph>
            </Card.Content>
            <Card.Actions>
                <Button
                    onPress={() => {
                        signOn(email, password);
                    }}
                    mode="contained"
                    color="#001B30"
                    labelStyle={{color: '#C2BC9C', width: ScreenWidth * 0.91}}
                >Login
                </Button>
            </Card.Actions>
        </Card>
    );
};

export default LoginForm;

const styles = StyleSheet.create({
    card: {
        minHeight: ScreenHeight * 1.5,
        position: 'relative',
        marginTop: 0.06 * ScreenHeight,
        backgroundColor: '#39485A',
    },
    title: {
        paddingTop: 0.25 * ScreenHeight,
        justifyContent: 'center',
        fontSize: 50,
        color: '#C2BC9C'
    },
    content: {
        display: 'flex',
        justifyContent: 'center',
        paddingTop: 0.1 * ScreenHeight,
        width: ScreenWidth * 0.9,
    },
    passwordEntry: {
        paddingTop: 0.02 * ScreenHeight,
        width: ScreenWidth * 0.9,
    },
    labelStyle: {
        color: '#C2BC9C',
    },
});
