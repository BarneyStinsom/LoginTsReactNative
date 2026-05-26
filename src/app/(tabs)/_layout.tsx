import { Tabs } from "expo-router";

export default function RootLayout(){
    return(
        <Tabs>
        <Tabs.Screen name="Sign-up" options={{title: "Create Account",}}/>
        <Tabs.Screen name="Login" options={{title: "Login"}}/>
    </Tabs>
    )
}