import { Tabs } from "expo-router";

export default function RootLayout(){
    return(
        <Tabs>
        <Tabs.Screen name="index" options={{title: "Create Account",}}/>
        <Tabs.Screen name="poker" options={{title: "Loggin"}}/>
    </Tabs>
    )
}