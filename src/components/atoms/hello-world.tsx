import React from 'react';
import { Text } from 'react-native';

type Greeting = {
    name: string
}

const HelloWorld = ({ name }: Greeting) => (
  <Text>
    {' '}
    Hello World
    {name}
    !
    {' '}
  </Text>
);

export default HelloWorld;
