import firstImage from "./images/editorialSeasonsFirst.png"
import secondImage from "./images/editorialSeasonsSecond.png"
import thirdImage from "./images/editorialSeasonsThird.png"
import coverImage from "./images/editorialSeasonsCover.png"

export const projectsData = {
        "Seasons of Life": {
        pageSettings: {
            headerAlt: 'some alt text',
            designType: 'Cover Design',
            name: 'Seasons of Life',
            headerImgSrc: coverImage,
            explaining: '@poets_ua is an Instagram community, called to increase the awareness of modern Ukrainian poetry. Not only they are promoting it through the internet, but also publish books with chosen creations. This project was their second general book publishing, which was planned to be sold for gathering money for Ukrainian Armed Forces.The main tasks were to create a cover and the insight structure of the book.',
            body: [
                {
                    text: 'To represent the main topics of the book I created two concepts. The FIrst one was based on one-line illustrations, connected to the rout of a person throughout life. The second one had a more abstract approach, based on form and color.',
                    imageSrc: firstImage,
                    isImageFirst: true,
                },
                {
                    text: 'The choice of fonts was based on two major aspects. First of all, they needed to combine the feeling of poetry and the topic of poetry and be modern and strict enough. Secondly, it had to work with Cyrillic.',
                    imageSrc: secondImage,
                    isImageFirst: false,

                },
                {
                    text: 'Illustrations were called to show the connection between all life events and to represent person’s feelings in minimalistic visual manner',
                    imageSrc: thirdImage,
                    isImageFirst: true,

                },
                // {
                //     text: 'Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exent, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exent.',
                //     imageSrc: 'https://picsum.photos/400?random=5',
                //     isImageFirst: true,
                // },
            ]    
        },
        imageButtonSettings: {
            imageWidth: '20vh',
            imageHeight: '30vh',
            imageAlt: 'some title',
            imageLeft: 0,
            imageTop: '100px',
            imageSrc: 'https://picsum.photos/400?random=2',
            containerWidth: '300px'
        }
    },
    book: {
        pageSettings: {
            headerAlt: 'some alt text',
            designType: 'editorial',
            name: 'Seasons of Life',
            headerImgSrc: 'https://picsum.photos/400?random=1',
            explaining: 'Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exent, Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exent, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exent. ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exent.',
            body: [
                {
                    text: 'Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exent, Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exent, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exent. ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exent.',
                    imageSrc: 'https://picsum.photos/400?random=2',
                    isImageFirst: true,
                },
                {
                    text: 'Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exent, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exent.',
                    imageSrc: 'https://picsum.photos/400?random=3',
                    isImageFirst: false,

                },
                {
                    text: 'Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exent, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exent.',
                    imageSrc: 'https://picsum.photos/400?random=4',
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
            imageWidth: '200px',
            imageHeight: '200px',
            imageAlt: 'some title',
            imageLeft: '100px',
            imageTop: '0px',
            imageSrc: 'https://picsum.photos/400?random=1',
            containerWidth: '100px'
        }
    },



}