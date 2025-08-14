import {
  set,
  ref,
  onValue,
  remove,
  update,
  query,
  orderByChild,
  equalTo,
} from "firebase/database";
import { uid } from "uid";
import { db } from "../firebase";

const getAll = (url) => {
  return new Promise(async (resolve, reject) => {
    try {
      onValue(ref(db, url), (snapshot) => {
        const data = snapshot.val();
        resolve(data);
      });
    } catch (e) {
      reject(e);
    }
  });
};

const create = (params) => {
  return new Promise(async (resolve, reject) => {
    try {
      let { url, insertPattern } = params;
      if (url && insertPattern) {
        const uuid = uid();
        url = `${url}/${uuid}`;
        const pattern = {
          ...insertPattern,
          id: uuid,
          updatedDate: Date.now(),
        };
        set(ref(db, url), pattern);
        resolve(true);
      } else {
        reject(new Error("Invalid Data"));
      }
    } catch (e) {
      reject(e);
    }
  });
};

const _update = (params) => {
  return new Promise(async (resolve, reject) => {
    try {
      let { url, payload } = params;
      if (url && payload) {
        const newPayload = {
          ...payload,
          updatedDate: Date.now(),
        };
        update(ref(db, url), newPayload);
        resolve(true);
      } else {
        reject(new Error("Invalid Data"));
      }
    } catch (e) {
      reject(e);
    }
  });
};

const _delete = (url) => {
  return new Promise(async (resolve, reject) => {
    try {
      remove(ref(db, url));
      resolve(true);
    } catch (e) {
      reject(e);
    }
  });
};

const findOne = (url, findPattern) => {
  return new Promise(async (resolve, reject) => {
    try {
      const keyValuePairs = Object.keys(findPattern).map((key) => ({
        key,
        value: findPattern[key],
      }));
      const data = await getOrderByChildWithEqualto(url, keyValuePairs[0]);
      const findedData = data.length ? data[0] : null;
      resolve(findedData);
    } catch (e) {
      reject(e);
    }
  });
};

const find = (findPattern) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { url, key, value } = findPattern;
      const data = await getOrderByChildWithEqualto(url, { key, value });
      resolve(data);
    } catch (e) {
      reject(e);
    }
  });
};

const findOneWithNotEqual = (url, findPattern) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { id, key, value } = findPattern;
      const data = await getOrderByChildWithEqualto(url, { key, value });
      const findedData = data.length
        ? data.filter((x) => x.id.toLowerCase() !== id.toLowerCase())
        : [];
      resolve(findedData);
    } catch (e) {
      reject(e);
    }
  });
};

const getOrderByChildWithEqualto = (url, findPattern) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { key, value } = findPattern;

      let findQuery = query(ref(db, url), orderByChild(key), equalTo(value));
      onValue(findQuery, (snapshot) => {
        const data = snapshot.exists() ? Object.values(snapshot.val()) : [];
        resolve(data);
      });
    } catch (e) {
      reject(e);
    }
  });
};

export const fetchWrapperService = {
  getAll,
  create,
  findOne,
  find,
  _delete,
  _update,
  findOneWithNotEqual,
};
