
import { getFirestore, collection, getDocs, doc, getDoc } from "firebase/firestore"
import { app } from "./config"

const db = getFirestore(app)



export const getItems = async (setItems) => {

  const querySnapshot = await getDocs(collection(db, "items"))
  const products = []


  querySnapshot.forEach((doc) => {
    products.push(doc.data())
  })
  setItems(products)
}

export const getSingleItem = async (id, setItem) => {

  const docRef = doc(db, "items", id)
  const docSnap = await getDoc(docRef)

  if (docSnap.exists()) {
    setItem(docSnap.data())
  } else {
    console.log("No such document!")
  }

}

