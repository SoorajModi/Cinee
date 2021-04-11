import React from 'react';
import { SafeAreaView } from 'react-native';
import { AppBar } from "@molecules";
import { BrowseCard } from "@molecules";

const BrowseScene = () => {
    return (
        <SafeAreaView>
            <AppBar />
            <BrowseCard />
        </SafeAreaView>
    );
};

export default BrowseScene;