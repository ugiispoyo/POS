import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

const storage = new Storage({
  // maximum capacity, default 1000 key-ids
  size: 1000,

  // Use AsyncStorage for RN apps, or window.localStorage for web apps.
  // If storageBackend is not set, data will be lost after reload.
  storageBackend: AsyncStorage, // for web: window.localStorage

  // expire time, default: 1 day (1000 * 3600 * 24 milliseconds).
  // can be null, which means never expire.
  defaultExpires: 1000 * 3600 * 24,

  // cache data in the memory. default is true.
  enableCache: true,

  // if data was not found in storage or expired data was found,
  // the corresponding sync method will be invoked returning
  // the latest data.
  sync: {
    // we'll talk about the details later.
  },
});

/**
 * @name getStorage
 * @param {string} key
 * @returns {Promise<any>} {foo: "foo"}
 */
export const getStorage = async (key: string): Promise<any> => {
  try {
    const result = await storage.load({
      key: key,
      // autoSync (default: true) means if data is not found or has expired,
      // then invoke the corresponding sync method
      autoSync: true,

      // syncInBackground (default: true) means if data expired,
      // return the outdated data first while invoking the sync method.
      // If syncInBackground is set to false, and there is expired data,
      // it will wait for the new data and return only after the sync completed.
      // (This, of course, is slower)
      syncInBackground: true,

      // you can pass extra params to the sync method
      // see sync example below
      syncParams: {
        extraFetchOptions: {
          // blahblah
        },
        someFlag: true,
      },
    });
    return result;
  } catch (e) {
    // console.error(e);
    return false;
  }
};

/**
 * @name setStorage
 * @param {string} key
 * @param {object} data
 * @returns {Promise<void>}
 */
export const setStorage = async (key: string, data: Object): Promise<any> => {
  storage.save({
    key: key, // Note: Do not use underscore("_") in key!
    data: data,
  });
};

/**
 * @name removeStorage
 * @param {string} key
 * @param {object} data
 * @returns {Promise<void>}
 */
export const removeStorage = async (
  key: string,
): Promise<any> => {
  storage.remove({
    key: key,
  });
};
