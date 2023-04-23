<template>
    <router-view />
        <the-header title="List of Notable Heroes and Villains"></the-header>
        <button @click="hideShow">Show/Hide add entry</button>
        <new-box v-if="visible" @add-box="addBox"></new-box>
        <new-hero v-if="visible" @add-hero="addHero"></new-hero>
        <new-villain v-if="visible" @add-villain="addVillain"></new-villain>
        <new-neutral v-if="visible" @add-neutral="addNeutral"></new-neutral>
        <div>
            <active-topic
                :topic-title="activeTopic && activeTopic.title"
                :text="activeTopic && activeTopic.fullText"
            ></active-topic>
            <topic-base :selected-page="page" @select-topic="activateTopic"></topic-base>
        </div>
    <ul>
         <box 
            v-for="box in boxes" 
            :key="box.id"
            :id="box.id"
            :name="box.name"
            :number="box.number"
            @deletebox="deletebox(box.id)">
            </box>
        <big-box
            :topic-title="activeTopic && activeTopic.title"
            :text="activeTopic && activeTopic.fullText">    
                title="Big" info="Additional info"
        </big-box>
    </ul>
</template>

<script>
import TheHeader from './components/layouts/TheHeader.vue';
import Box from './components/boxes/Box.vue';
import BigBox from './components/boxes/BigBox.vue';
import NewBox from './components/boxes/NewBox.vue';
import NewHero from './components/topics/NewHero.vue';
import NewVillain from './components/topics/NewVillain.vue';
import NewNeutral from './components/topics/NewNeutral.vue';
import ActiveTopic from './components/topics/ActiveTopic.vue';
import TopicBase from './components/topics/TopicBase.vue';
// import Hero from './components/topics/Hero.vue';

export default {
    components: {
        TheHeader,
        Box,
        BigBox,
        NewBox,
        ActiveTopic,
        TopicBase,
        NewHero,
        NewVillain,
        NewNeutral,
        // Hero
    },
    data: () => ({
        boxes: [
            {
            id: "boxone",
            name: "Note #1",
            number: "You can add additional notes or info boxes like this one."
            }
        ],
        topics: [
            // {
            //     id: 'Karcas',
            //     title: 'Karcas the Cave Wizard',
            //     description: 'Information about Karcas the Cave Wizard',
            //     fullText:
            //         'Karcas is a worm wizard with mysterious origins who aided the World Guardians since the early beginning' +
            //         ' until his demise at the hands of the Demon Overlord.'
            // },
            // {
            //     id: 'MichaelPlumson',
            //     title: 'Michael Plumson',
            //     description: 'Information about Michael Plumson',
            //     fullText:
            //         'Michael Plumson is the leader of the Plumson Partisans and a time traveler from a dystopian future on a mission to change the very timeline itself.'
            // }
            {
                id: 'batman',
                title: 'Batman',
                description: 'Information about Batman',
                fullText:
                    'Batman is a superhero published by DC Comics. Operating in Gotham City, he serves as its protector, using the symbol of a bat to strike fear into the hearts of criminals. Unlike other superheroes, Batman is often depicted to lack any "superpowers", instead using lifelong training and equipment to fight crime. His secret identity is Bruce Wayne, a rich playboy and philanthropist who swore to fight crime after witnessing his parents\' brutal murder. He has served as a member of various teams, including the Justice League, the Justice Society of America and the Outsiders. Batman is also the founder and leader of various teams, including the Batman Family, Batmen of All Nations and Batman Incorporated. He also goes by numerous nicknames, including "The Dark Knight", "the Caped Crusader", "World\'s Greatest Detective" and the "Defender of Gotham".'
            },
            {
                id: 'aragorn',
                title: 'Aragorn',
                description: 'Information about Aragorn',
                fullText: 
                    'Aragorn II, son of Arathorn II and Gilraen, also known as Elessar and Strider, was the 16th and last Chieftain of the Dúnedain of the North; later crowned King Elessar Telcontar (March 1, 2931 - FO 120), the 26th King of Arnor, 35th King of Gondor and first High King of Gondor and Arnor since the short reign of Isildur. He was a great Ranger and warrior, and as Isildur\'s heir he bore the shards of Narsil, reforged and renamed Andúril, Flame of the West, in the War of the Ring.'
            }
        ],
        topicsTwo: [
            // {
            //     id: 'DemonOverlord',
            //     title: 'The Demon Overlord',
            //     description: 'Information about the Demon Overlord',
            //     fullText:
            //         'The Demon Overlord is a greater god who has returned to wreak havoc upon the world as an act of revenge on the elder gods.'
            // },
            // {
            //     id: 'ToenailPizza',
            //     title: 'Toenail Pizza',
            //     description: 'Information about Toenail Pizza',
            //     fullText: 'Toenail Pizza is a shadow sorcerer from Japan who is highly trained in the arts of dark shadow magic and a skilled swordsman.'
            // },
                {
                    id: 'thejoker',
                    title: 'The Joker',
                    description: 'Information about The Joker',
                    fullText:
                        'The Joker is a supervillain and the archenemy of Batman. First introduced in Batman #1 (Spring 1940), he was originally a criminal mastermind with a devious sense of humor. Initially intended to serve as a one-time appearances, Joker\'s instant popularity ensured that the character would continue to appear, becoming a frequent enemy of the Dark Knight and Robin, the Boy Wonder. By the late 1940s, Joker had been reimagined as a harmless prankster. Falling into obscurity by the 1960s, he was re-introduced in the 1970s as a more legitimate threat and one of the most infamous criminals within Gotham City. In recent years, the character has taken on the persona of an evil-incarnate, simply taking joy in tormenting Batman or trying to push him into villainy.'
                },
        ],
        topicsThree: [
            {
                id: 'Deadpool',
                title: 'Deadpool',
                description: 'Information about Deadpool',
                fullText: 'Deadpool (born Wade Winston Wilson) is a mutant who possesses superhuman strength and an accelerated healing factor, which he obtained from the Workshop program. He is also a freelance mercenary of Canadian origin and the eponymous protagonist of Deadpool, the eighth installment of the X-Men film series.'
            }
        ],
        activeTopic: null,
        pageId: 0,
        visible: false
    }),
    computed: {
        firstTwoTopics() {
            return this.topics.concat(this.topicsTwo)
        },
        combinedTopics() {
            return this.firstTwoTopics.concat(this.topicsThree)
        },
    },
    provide() {
        return {
            topics: this.topics,
            topicsTwo: this.topicsTwo,
            topicsThree: this.topicsThree
        };
    },
    methods: {
    addBox(name, number) {
            const newBox = {
                id: new Date().toISOString(),
                name: name,
                number: number
            };
            this.boxes.push(newBox);
        },
    addHero(newHeroId, heroName, heroDescription, heroText) {
            this.topics.push({
            id: newHeroId,
            title: heroName,
            description: heroDescription,
            fullText: 
                heroText
        });
    },
    addVillain(newVillainId, villainName, villainDescription, villainText) {
            this.topicsTwo.push({
            id: newVillainId,
            title: villainName,
            description: villainDescription,
            fullText: 
                villainText,
        });
    },
    addNeutral(newNeutralId, neutralName, neutralDescription, neutralText) {
            this.topicsThree.push({
                id: newNeutralId,
                title: neutralName,
                description: neutralDescription,
                fullText:
                    neutralText,
            });
    },
    hideShow() {
        this.visible = !this.visible;
    },
    findBoxId(boxId) {
        // const identifiedBox = 
        this.boxes.find(
            (box) => box.id === boxId
        );
        // identifiedBox();
    },
    deletebox(boxId) {
        console.log(JSON.stringify(boxId), JSON.stringify(this.boxes));
        this.boxes = this.boxes.filter((box) => box.id !== boxId);
    },
    activateTopic(topicId) {
            this.activeTopic = this.combinedTopics.find((topic) => topic.id === topicId)

            // if (this.chosenPage === 'topic-grid') { 
            //     this.activeTopic = this.topics.find((topic) => topic.id === topicId)
            // }
            // else {
            //     this.activeTopic = this.topicsTwo.find((topic) => topic.id === topicId)
            // }

            // this.activeTopic = this.topics.find((topic) => topic.id === topicId)
        },
    },
    mounted() {
        setTimeout(() => {
            this.topics.push({
                id: 'unclematzahbrei',
                title: 'Uncle Matzah Brei',
                description: 'Information about Uncle Matzah Brei',
                fullText: 
                    'Uncle Matzah Brei is the leader of the Flying Scotsmen.'
            });
        }, 3000);
    }
};
</script>

<style>
#app input {
  font: inherit;
  padding: 0.15rem;
}
#app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
}
#app form div {
  margin: 1rem 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #324558;
  margin-top: 60px;
  background-color: rgb(163, 163, 125);
  background-image: url('./assets/red background.jpg');
  background-size: cover;
}
#app button {
    background-color: rgb(199, 166, 19);
    font-family: Arial, Helvetica, sans-serif;
    border-radius: 50px;
    background-image: url('./assets/gold button.jpg');
    box-shadow: 5px 3px 2px 2px rgba(0,0,0,.8);
}
</style>
