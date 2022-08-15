import React from "react";
import { View } from "react-native";

interface Props { height?: string | number, width?: string | number }

export default function Blank({ height, width }: Props) {
    return <View style={{ height, width }} />;
}