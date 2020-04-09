import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('7YRdAe2lIicFIR8GlKpR').collection('cartItems').doc('PSVgfuT6jML2pYeM5iin');
firestore.doc('/users/7YRdAe2lIicFIR8GlKpR/cartItems/PSVgfuT6jML2pYeM5iin');
firestore.collection('/users/7YRdAe2lIicFIR8GlKpR/cartItems');