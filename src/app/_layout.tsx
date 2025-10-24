import { Stack } from "expo-router"
//stack é a navegacao em pilha
import { colors } from "@/styles/colors"

export default function Layout(){
    const backgroundColor = colors.vinho[100]
    
    return (
        <Stack 
            screenOptions={{
                headerShown: false,
                contentStyle: { backgroundColor },
        
        }}
        />
    )
}
