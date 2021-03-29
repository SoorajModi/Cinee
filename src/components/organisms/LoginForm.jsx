import React, { useState } from 'react';
import firebase from 'firebase';
import { TextInput, Card, Avatar, Button, Title, Paragraph } from 'react-native-paper';

const LoginForm = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    function signOn(email, password) {
        console.log(email + password)
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                console.log("Awh hell yeah")
                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log("yo this is an error my guy")
            });
    }

    return (

        <Card>
            <Card.Title title="Sign on" subtitle="With your Email and Password" />
            <Card.Content>
                <Paragraph>
                    <TextInput
                        label="Email"
                        value={email}
                        onChangeText={email => setEmail(email)}
                    />
                    <TextInput
                        label="Password"
                        value={password}
                        onChangeText={password => setPassword(password)}
                    />
                </Paragraph>
            </Card.Content>
            <Card.Actions>
                <Button>Cancel</Button>
                <Button onPress={() => { signOn(email, password) }}>Ok</Button>
            </Card.Actions>
        </Card>
    );
};

export default LoginForm;