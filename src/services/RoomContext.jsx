import React, { useContext, useState } from 'react';

export const RoomContext = React.createContext();
export const RoomUpdateContext = React.createContext();

export function useRoom() {
  useContext(RoomContext);
}

export function useRoomUpdate() {
  useContext(RoomUpdateContext);
}

export function RoomProvider({ children }) {
  const [roomId, setRoomId] = useState('');

  function updateRoom(roomId) {
    setRoomId(roomId);
  }

  return (
    <RoomContext.Provider value={roomId}>
      <RoomUpdateContext.Provider value={updateRoom}>
        {children}
      </RoomUpdateContext.Provider>
    </RoomContext.Provider>
  );
}

export default RoomProvider;
