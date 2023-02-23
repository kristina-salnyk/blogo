import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "styled-components/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useRoute } from "../contexts/Route";
import PostsScreen from "../screens/PostsScreen/PostsScreen";
import ProfileScreen from "../screens/ProfileScreen/ProfileScreen";
import CreatePostScreen from "../screens/CreatePostScreen/CreatePostScreen";
import PostsIcon from "../components/icons/PostsIcon";
import CreatePostsIcon from "../components/icons/CreatePostsIcon";
import ProfileIcon from "../components/icons/ProfileIcon";
import LogoutIcon from "../components/icons/LogoutIcon";

const HomeTabs = createBottomTabNavigator();
const PostStack = createNativeStackNavigator();

const Home = ({ navigation }) => {
  const theme = useTheme();
  const { currentRouteName, setCurrentRouteName } = useRoute();

  return (
    <HomeTabs.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerRightContainerStyle: { paddingRight: theme.spacing[1] },
        headerStyle: {
          borderBottomColor: theme.colors.bottom,
          borderBottomWidth: theme.shape.borderWidth,
        },
        tabBarShowLabel: false,
        tabBarStyle: [
          {
            display:
              currentRouteName === "Create publication" ? "none" : "flex",
          },
          null,
        ],
      }}
    >
      <HomeTabs.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <PostsIcon size={size} color={color} />
          ),
          tabBarActiveTintColor: theme.colors.main,
          headerShown: false,
        }}
        name="Posts"
      >
        {() => (
          <PostStack.Navigator
            screenOptions={{
              headerTitleAlign: "center",
              headerBackTitle: "",
            }}
          >
            <PostStack.Screen
              options={{ headerRight: LogoutIcon }}
              name="Publications"
              component={PostsScreen}
            />
            <PostStack.Screen
              name="Create publication"
              component={CreatePostScreen}
            ></PostStack.Screen>
          </PostStack.Navigator>
        )}
      </HomeTabs.Screen>
      <HomeTabs.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <CreatePostsIcon size={size} color={color} />
          ),
        }}
        name="Create post"
        component={Home}
        listeners={({ navigation }) => ({
          tabPress: (event) => {
            event.preventDefault();
            setCurrentRouteName("Create publication");
            navigation.navigate("Posts", {
              screen: "Create publication",
            });
          },
        })}
      />
      <HomeTabs.Screen
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
    </HomeTabs.Navigator>
  );
};

export default Home;
