import {useAsyncStorage} from '@react-native-async-storage/async-storage';

const {getItem, setItem} = useAsyncStorage('@user');

const session = {
  set: async data => {
    await setItem(JSON.stringify(data));
  },

  get: async () => {
    const item = await getItem();
    return JSON.parse(item);
  },
};

export default session;
