import * as React from "react";
import {
    TouchableOpacity,
    StyleSheet,
    GestureResponderEvent,
    Text,
    Button as RButton,
    View
} from "react-native";

export interface NativeButtonProps {
    text: string;
    onClick?: (event: GestureResponderEvent) => void;
}

export function NativeButton({ text, onClick }: NativeButtonProps) {
    return (
        <>
            <View style={{ margin: 10 }}>
                <RButton title="Hey Native Button" color="#6db649" />
            </View>
            <View>
                <TouchableOpacity style={styles.button} onPress={onClick}>
                    <Text style={styles.text}>{text}</Text>
                </TouchableOpacity>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    button: {
        maxWidth: 300,
        textAlign: "center",
        borderRadius: 20,
        marginTop: 70,
        paddingTop: 14,
        paddingBottom: 14,
        paddingLeft: 30,
        paddingRight: 30,
        fontSize: "25px",
        backgroundColor: "#3dce9d",

    },
    text: {
        color: "white",
    },
});
