import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';

import { images } from 'app/assets';
import { palette, typography } from 'app/styles';
import { ifIphoneX } from 'app/styles/helpers';

import { BottomTabBarIcon } from './BottomTabBarIcon';
import { GradientView } from './GradientView';

import { CreateMessage, CreatePersistentMessage, MessageType } from 'app/helpers/MessageCreator';
import { NavigationService } from 'app/services';
import { Route } from 'app/consts';
import { UnlockScreen } from 'app/screens';
import { BackHandler } from 'react-native';
import { PasswordNavigator } from '../navigators/PasswordNavigator';

export const BottomTabBarComponent = ({ state, descriptors, navigation }: BottomTabBarProps) => (
  <GradientView variant={GradientView.Variant.Secondary} >
    <View style={styles.buttonsContainer}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          console.log(index);

          if (!isFocused && !event.defaultPrevented && state.index != 3) {
            navigation.navigate(route.name);
          }
        };
        return (
          <TouchableOpacity key={index} style={styles.button} onPress={onPress} activeOpacity={0.5}>
            <BottomTabBarIcon source={isFocused ? images[`${route.name}Active`] : images[`${route.name}Inactive`]} />
            <Text style={{ ...typography.subtitle2, color: isFocused ? palette.white : palette.textWhiteMuted }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  </GradientView>
);

const styles = StyleSheet.create({
  button: { alignItems: 'center' },
  buttonsContainer: { flexDirection: 'row', justifyContent: 'space-evenly', marginBottom: ifIphoneX(50, 16) },
});

interface Props {
  navigation: CompositeNavigationProp<
    StackNavigationProp<RootStackParams, Route.MainCardStackNavigator>,
    StackNavigationProp<MainCardStackNavigatorParams, Route.SendCoinsConfirm>
  >;

  route: RouteProp<MainCardStackNavigatorParams, Route.SendCoinsConfirm>;
}


const onLogoutPress = () => {  
  CreateMessage({
    title: "Logged Out",
    description: "You have been successfully logged out. Now you can close the app",
    type: MessageType.success,
    buttonProps: {
      title: "Log In again",
      onPress: () => NavigationService.navigate(Route.UnlockScreen, {
        onSuccess: () => NavigationService.navigate(Route.Dashboard) 
      }),
    },
  });
};
