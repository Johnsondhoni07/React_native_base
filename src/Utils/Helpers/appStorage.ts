import AsyncStorage from '@react-native-async-storage/async-storage';

export const storageSetItem = AsyncStorage.setItem;

export const storageGetItem = AsyncStorage.getItem;

export const storageGetMultiple = async (keys: string[]) => {
  const values = await AsyncStorage.multiGet(keys);
  return values.reduce((prevVal: any, [key, value]) => {
    prevVal[key] = value;
    return prevVal;
  }, {});
};

export const storageRemoveItem = AsyncStorage.removeItem;

export const storageClear = AsyncStorage.clear;
