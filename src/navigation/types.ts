import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  ChatRoom: {roomId: number} | undefined;
  Login: {userId: string} | undefined;
  Profile: {userId: string};
  Settings: {userId: string} | undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

