import React from 'react';
import firebase from 'firebase';
import {Button, Card, Paragraph, TextInput,} from 'react-native-paper';
import {StyleSheet} from "react-native";

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
                emitLoginResult(false);
            });
    }

    return (
        <Card style={styles.card}>
            <Card.Title title="Sign on" style={styles.title} titleStyle={{color: '#C2BC9C'}}/>
            <Card.Content style={{ display:'flex', justifyContent:'center' }}>
                <Paragraph>
                    <TextInput
                        label="Email"
                        value={email}
                        onChangeText={(email) => setEmail(email)}
                    />
                </Paragraph>
                <Paragraph style={styles.passwordEntry}>
                    <TextInput
                        label="Password"
                        value={password}
                        onChangeText={(password) => setPassword(password)}
                    />
                </Paragraph>
            </Card.Content>
            <Card.Actions>
                <Button labelStyle={styles.labelStyle}>Cancel</Button>
                <Button onPress={() => {
                    signOn(email, password);
                }} labelStyle={styles.labelStyle}>Ok</Button>
            </Card.Actions>
        </Card>
    );
};

export default LoginForm;

const styles = StyleSheet.create({
    card: {
        minHeight: "100vh",
        position: "relative",
        width: '100%',
        marginTop: '6vh',
        backgroundColor: '#39485A',
    },
    title: {
    },
    passwordEntry: {
        paddingTop: '2vh',
    },
    labelStyle: {
        color: '#C2BC9C',
    }
});
