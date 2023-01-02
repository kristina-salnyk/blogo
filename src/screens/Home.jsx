import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PostsScreen from "./PostsScreen";
import ProfileScreen from "./ProfileScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import PostsIcon from "../components/icons/PostsIcon";
import CreatePostsIcon from "../components/icons/CreatePostsIcon";
import ProfileIcon from "../components/icons/ProfileIcon";

const Tabs = createBottomTabNavigator();

const Home = ({ navigation }) => {
  return (
    <Tabs.Navigator tabBarOptions={{ showLabel: false }}>
      <Tabs.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <PostsIcon size={size} color={color} />
          ),
        }}
        name="Posts"
        component={PostsScreen}
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
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </Tabs.Navigator>
  );
};

export default Home;
