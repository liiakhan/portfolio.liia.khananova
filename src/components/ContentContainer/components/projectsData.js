import seasonsFirstImage from "./images/editorialSeasonsFirst.png"
import seasonsSecondImage from "./images/editorialSeasonsSecond.png"
import seasonsThirdImage from "./images/editorialSeasonsThird.png"
import seasonsCoverImage from "./images/editorialSeasonsCover.png"
// import fourthImage from "./images/editorialSeasonsFourth.png"
import beatsCoverImage from "./images/editorialBeatsCover.png"
import beatsFirstImage from "./images/editorialBeatsFirst.png"
import beatsSecondImage from "./images/editorialBeatsSecond.png"
import beatsThirdImage from "./images/editorialBeatsThird.png"


export const projectsData = {
        "Project name 2": {
        pageSettings: {
            headerAlt: 'some alt text',
            designType: 'Cover Design',
            name: 'Seasons of Life',
            headerImgSrc: seasonsCoverImage,
            explaining: '@poets_ua is an Instagram community, called to increase the awareness of modern Ukrainian poetry. Not only they are promoting it through the internet, but also publish books with chosen creations. This project was their second general book publishing, which was planned to be sold to gather money for the Ukrainian Armed Forces. The main tasks were to create a cover and the insight structure of the book.',
            body: [
                {
                    text: 'To represent the main topics of the book I created two concepts. The FIrst one was based on one-line illustrations, connected to the rout of a person throughout life. The second one had a more abstract approach, based on form and color.',
                    imageSrc: seasonsFirstImage,
                    isImageFirst: true,
                },
                {
                    text: 'The choice of fonts was based on two major aspects. First of all, they needed to combine the feeling of poetry and the topic of poetry and be modern and strict enough. Secondly, it had to work with Cyrillic.',
                    imageSrc: seasonsSecondImage,
                    isImageFirst: false,

                },
                {
                    text: 'Illustrations were called to show the connection between all life events and to represent person’s feelings in minimalistic visual manner',
                    imageSrc: seasonsThirdImage,
                    isImageFirst: true,

                },

                // {
                //     text: '',
                //     imageSrc: fourthImage,
                //     isImageFirst: true,

                // },
                // {
                //     text: 'Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exent, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exent.',
                //     imageSrc: 'https://picsum.photos/400?random=5',
                //     isImageFirst: true,
                // },
            ]    
        },
        imageButtonSettings: {
            imageWidth: '40vh',
            // imageHeight: '30vh',
            imageAlt: 'some title',
            imageLeft: '150px',
            imageTop: '100px',
            imageSrc: seasonsCoverImage,
            containerWidth: '300px'
        }
    },
    book: {
        pageSettings: {
            headerAlt: 'some alt text',
            designType: 'editorial',
            name: 'Electronic Beats',
            headerImgSrc: beatsCoverImage,
            explaining: 'Electronic Beats is a German magazine published from 2005 to 2015. The publishing itself was sponsored by the T-Mobile company. The main focus of the magazine was music, which was shown through interviews with musicians and singers. However, it also showed some movie recommendations or other artistic activities. in this redesigned version not only i am rethinking the visual aspect of the magazine, but also providing a more understandable structure.',
            body: [
                {
                    text: 'Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exent, Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exent, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exent. ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exent.',
                    imageSrc: beatsFirstImage,
                    isImageFirst: true,
                },
                {
                    text: 'Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exent, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exent.',
                    imageSrc: beatsSecondImage,
                    isImageFirst: false,

                },
                {
                    text: 'Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exent, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exent.',
                    imageSrc: beatsThirdImage,
                    isImageFirst: true,

                },
                {
                    text: 'Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exent, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exent.',
                    imageSrc: 'https://picsum.photos/400?random=5',
                    isImageFirst: true,
                },
            ]    
        },
        imageButtonSettings: {
            imageWidth: '60vh',
            // imageHeight: '200px',
            imageAlt: 'some title',
            imageLeft: '100px',
            imageTop: '300px',
            imageSrc: beatsCoverImage,
            containerWidth: '100px'
        }
    },



}