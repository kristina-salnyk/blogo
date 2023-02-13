import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "styled-components/native";
import PostsScreen from "./PostsScreen";
import ProfileScreen from "./ProfileScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import PostsIcon from "../components/icons/PostsIcon";
import CreatePostsIcon from "../components/icons/CreatePostsIcon";
import ProfileIcon from "../components/icons/ProfileIcon";
import LogoutIcon from "../components/icons/LogoutIcon";

const Tabs = createBottomTabNavigator();

const Home = ({ navigation }) => {
  const theme = useTheme();

  return (
    <Tabs.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerRightContainerStyle: { paddingRight: theme.spacing[1] },
        tabBarShowLabel: false,
        tabBarStyle: [
          {
            display: "flex",
          },
          null,
        ],
        headerStyle: {
          borderBottomColor: theme.colors.bottom,
          borderBottomWidth: theme.shape.borderWidth,
        },
      }}
    >
      <Tabs.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <PostsIcon size={size} color={color} />
          ),
          tabBarActiveTintColor: theme.colors.main,
          headerRight: LogoutIcon,
        }}
        name="Publications"
        component={PostsScreen}
        style={{ backgroundColor: theme.colors.white }}
      />
      <Tabs.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <CreatePostsIcon size={size} color={color} />
          ),
        }}
        name="CreatePosts"
        component={CreatePostsScreen}
      />
      <Tabs.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <ProfileIcon size={size} color={color} />
          ),
          tabBarActiveTintColor: theme.colors.main,
          headerShown: false,
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </Tabs.Navigator>
  );
};

export default Home;
