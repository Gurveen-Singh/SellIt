import React, { useState } from "react";
import { Switch } from "react-native";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";

const categories = [
  {
    label: "Furniture",
    value: 1,
  },
  {
    label: "Clothing",
    value: 2,
  },
  {
    label: "Electronics",
    value: 3,
  },
];
export default function App() {
  const [firstName, setFirstName] = useState("");
  const [isNew, setIsNew] = React.useState(false);
  const [category, setCategory] = useState(categories[0]);

  return (
    <Screen>
      {/* <Switch value={isNew} onValueChange={(newValue) => setIsNew(newValue)} /> */}
      <AppPicker
        icon="apps"
        placeholder="Category"
        selectedItem={category}
        onSelectItem={(item) => setCategory(item)}
        items={categories}
      />
      <AppTextInput icon="email" placeholder="Email" />
    </Screen>
  );
}
