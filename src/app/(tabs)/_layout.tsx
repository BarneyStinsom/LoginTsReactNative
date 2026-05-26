import { Tabs } from "expo-router";

export default function RootLayout(){
    return(
        <Tabs>
        <Tabs.Screen name="index" options={{title: "home", headerShown:false}}/>
        <Tabs.Screen name="poker" options={{title: "neymar"}}/>
    </Tabs>
    )
}