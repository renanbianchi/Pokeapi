/* import { getDocs, getDoc, getFirestore, collection} from 'firebase/firestore'
import { firebase } from '../firebase'

export default async function CommentsLists() {
  const db = getFirestore(firebase)
  const dbRef = collection(db, "comments")
  const querySnapshot = await getDocs(query);
  console.log(dbRef);

  querySnapshot.forEach((doc => {
 console.log(query);
  //console.log(doc.id, " => ", doc.data());
}));
return(
<ul>{arr.map((doc) => (
  <li key={doc}>{doc.name}</li>))}
</ul>
)
} */