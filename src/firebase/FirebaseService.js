import {
  collection,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { firestoreDb } from "./firebaseConfig";
import FirebaseConverter from "./FirebaseConverter";

class FirestoreService {
  static async getDocument(collectionPath, documentId, dataType) {
    const firebaseConverter = new FirebaseConverter();
    const docRef = doc(firestoreDb, collectionPath, documentId);
    const converter = getConverter(dataType, firebaseConverter);
    const docSnap = await getDoc(docRef.withConverter(converter));

    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      console.log("No such document!");
      return null;
    }
  }

  static async createDocument(collectionPath, documentId, data, dataType) {
    try {
      const firebaseConverter = new FirebaseConverter();
      const converter = getConverter(dataType, firebaseConverter);
      const collectionRef = collection(firestoreDb, collectionPath);

      if (
        !Array.isArray(collectionPath) &&
        typeof collectionPath !== "string"
      ) {
        console.error(
          "Invalid collection path. Collection path must be a string or an array of strings.",
        );
        return null;
      }

      const docRef = doc(collectionRef, documentId).withConverter(
        converter.objectConverter, // Use the objectConverter for generic objects
      );

      // Convert the data using the objectConverter
      const convertedData = converter.objectConverter.toFirestore(data);

      await setDoc(docRef, convertedData);
      return docRef.id;
    } catch (error) {
      console.error("Error creating document: ", error);
      return null;
    }
  }

  static async updateDocument(collectionPath, documentId, data, dataType) {
    const firebaseConverter = new FirebaseConverter();
    const docRef = doc(firestoreDb, collectionPath, documentId).withConverter(
      getConverter(dataType, firebaseConverter),
    );
    try {
      await updateDoc(docRef, data);
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  }

  static async deleteDocument(collectionPath, documentId, dataType) {
    try {
      const firebaseConverter = new FirebaseConverter();
      const converter = getConverter(dataType, firebaseConverter);
      const collectionRef = collection(firestoreDb, collectionPath);

      if (
        !Array.isArray(collectionPath) &&
        typeof collectionPath !== "string"
      ) {
        console.error(
          "Invalid collection path. Collection path must be a string or an array of strings.",
        );
        return null;
      }

      const docRef = doc(collectionRef, String(documentId)).withConverter(
        converter.objectConverter, // Use the objectConverter for generic objects
      );

      await deleteDoc(docRef);
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  }
}

const getConverter = (dataType, firebaseConverter) => {
  switch (dataType) {
    case "recipe":
      return {
        objectConverter: firebaseConverter.recipeConverter,
      };
    case "ingredient":
      return {
        objectConverter: firebaseConverter.ingredientsConverter,
      };
    case "order":
      return {
        objectConverter: firebaseConverter.orderConverter,
      };
    default:
      return null;
  }
};

export default FirestoreService;
