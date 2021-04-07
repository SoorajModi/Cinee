import React from 'react';
import Navigator from '@navigations';
import { RoomProvider } from '@services';

export default function App() {
  return (
    <RoomProvider>
      <Navigator />
    </RoomProvider>
  );
}
