import { createApp } from 'vue';

import App from './App.vue';
import BaseCard from './components/UI/BaseCard.vue';
import TopicCard from './components/UI/TopicCard.vue';
import BaseButton from './components/UI/BaseButton.vue';
import TheHeader from './components/layouts/TheHeader.vue';
import Box from './components/boxes/Box.vue';
import BigBox from './components/boxes/BigBox.vue';
import NewBox from './components/boxes/NewBox.vue';
import ActiveTopic from './components/topics/ActiveTopic.vue';
import TopicBase from './components/topics/TopicBase.vue';
import TopicElement from './components/topics/TopicElement.vue';
import TopicGrid from './components/topics/TopicGrid.vue';
import TopicGridTwo from './components/topics/TopicGridTwo.vue';
import TopicGridThree from './components/topics/TopicGridThree.vue';
import LoadVillainTopics from './components/topics/LoadVillainTopics.vue';
import NewHero from './components/topics/NewHero.vue';
import NewVillain from './components/topics/NewVillain.vue';
import NewNeutral from './components/topics/NewNeutral.vue';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCC5QLwGKA_EKgU-9z_zmtzoSUzps7-1eA",
  authDomain: "villain-hero-list-images.firebaseapp.com",
  projectId: "villain-hero-list-images",
  storageBucket: "villain-hero-list-images.appspot.com",
  messagingSenderId: "409387451710",
  appId: "1:409387451710:web:e4306ff386f520a237986f",
  measurementId: "G-GQ2K0Z09X3"
};

initializeApp(firebaseConfig);
const app = createApp(App)

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('topic-card', TopicCard);

app.component('the-header', TheHeader);
app.component('box', Box);
app.component('bigbox', BigBox);
app.component('newbox', NewBox);

app.component('active-topic', ActiveTopic);
app.component('topic-base', TopicBase);
app.component('topic-element', TopicElement);
app.component('topic-grid', TopicGrid);
app.component('topic-grid-two', TopicGridTwo);
app.component('topic-grid-three', TopicGridThree);
app.component('load-villain-topics', LoadVillainTopics)
app.component('new-hero', NewHero);
app.component('new-villain', NewVillain);
app.component('new-neutral', NewNeutral);


app.mount('#app');