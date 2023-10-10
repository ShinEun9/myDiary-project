import { appFireStore } from '../firebase/config';
import { useEffect, useState } from 'react';
import { onSnapshot, collection, query, orderBy, QueryConstraint, Query, DocumentData } from 'firebase/firestore';

interface Document {
  [key: string]: any;
  id: string;
}

export const useCollection = (transaction: string, myQuery?: QueryConstraint[]) => {
  const [documents, setDocuments] = useState<Document[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let q: Query<DocumentData> = collection(appFireStore, transaction);

    if (myQuery) {
      q = query(q, ...myQuery, orderBy('createdTime', 'desc'));
    }

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const result: Document[] = [];
        snapshot.docs.forEach((doc) => {
          result.push({ ...doc.data(), id: doc.id });
        });
        setDocuments(result);
        setError(null);
      },
      (error) => {
        setError(error.message);
      },
    );

    return () => {
      unsubscribe();
    };
  }, [collection]);

  return { documents, error };
};
