import seasonsFirstImage from "./images/editorialSeasonsFirst.png"
import seasonsSecondImage from "./images/editorialSeasonsSecond.png"
import seasonsThirdImage from "./images/editorialSeasonsThird.png"
import seasonsCoverImage from "./images/editorialSeasonsCover.png"
// import fourthImage from "./images/editorialSeasonsFourth.png"
import beatsCoverImage from "./images/editorialBeatsCover.png"
import beatsFirstImage from "./images/editorialBeatsFirst.png"
import beatsSecondImage from "./images/editorialBeatsSecond.png"
import beatsThirdImage from "./images/editorialBeatsThird.png"

import sarkaCover from "./images/brandingSarkaCover.png"
import sarkaFirst from "./images/brandingSarkaFirst.png"
import sarkaSecond from "./images/brandingSarkaSecond.png"
import sarkaThird from "./images/brandingSarkaThird.png"
import sarkaFourth from "./images/brandingSarkaFourth.png"
import sarkaFifth from "./images/brandingSarkaFifth.png"

import touchingCover from "./images/TouchingCover.png"
import touchingFirst from "./images/touchingFirst.png"
import touchingSecond from "./images/touchingSecond.png"
import touchingThird from "./images/touchingThird.png"

import alongCover from "./images/alongCover.png"
import testImg from "./images/testImg.jpeg"

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
            ],
            gridImages: [
                testImg,
                touchingThird,
                touchingThird,
                touchingThird,
                touchingThird,
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

    "Sarka": {
        pageSettings: {
            headerAlt: 'some alt text',
            designType: 'Branding',
            name: 'Career coach Identity',
            headerImgSrc: sarkaCover,
            explaining: 'Šárka Smrčková is a personal and career coach who helps women to change their lives. The main goal of the project was to create a visual identity that would provide a friendly environment for Sarka’s clients. Another aspect was to make the easily reused templates. This project covers such topics as the creation of a consistent brand identity for a person, the creation of a clear and user-friendly landing website, and attaching all necessary stationery and applications.',
            body: [
                {
                    text: 'The logo is minimalistic and represents other aspects of the brand. Dark and Light variants could be used on different backgrounds.',
                    imageSrc: sarkaFirst,
                    isImageFirst: true,
                },
                {
                    text: 'The The typographical system is created from one decorative font - Cinsel, which is used for the title and H1, and two additional - Encode Sans and Mplus 1p. All fonts are legible and provide a sense of professionalism and style. of fonts was based on two major aspects. First of all, they needed to combine the feeling of poetry and the topic of poetry and be modern and strict enough. Secondly, it had to work with Cyrillic.',
                    imageSrc: sarkaSecond,
                    isImageFirst: false,

                },
                
                {
                    text: 'The primary color is pink, which also has different shades to apply with a high variety of possible contexts. Another crucial part is a greyscale palette which predicts all usages of text and background.',
                    imageSrc: sarkaThird,
                    isImageFirst: true,

                },


                {
                    text: 'The website provides all essential information on services and creates a safe space to ask questions by following the principles of the design system.ebsite provides all essential information on services and creates a safe space to ask questions by following the principles of the design system.',
                    imageSrc: sarkaFourth,
                    isImageFirst: false,

                },

                {
                    text: 'For social media, it was important to create consistent templates for such types of posts as reviews, tips, news, etc. Some were executed as carousels, but most use photos and type.',
                    imageSrc: sarkaFifth,
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
            ],
            gridImages: [
                alongCover,
                alongCover,
                alongCover,
                alongCover,
                alongCover,
            ]      
        },
        imageButtonSettings: {
            imageWidth: '60vh',
            // imageHeight: '30vh',
            imageAlt: 'some title',
            imageLeft: '150px',
            imageTop: '380px',
            imageSrc: sarkaCover,
            containerWidth: '300px'
        }
    },



    "Touching Lives": {
        pageSettings: {
            headerAlt: 'some alt text',
            designType: 'Branding',
            name: 'Touching Lives',
            headerImgSrc: touchingCover,
            explaining: 'Touching Lives Switzerland is a partner organization of Touching Lives Mumbai that is dedicated to fostering global unity and positive, sustainable impact. It provides grants for social initiatives, offers mentorship support, facilitates knowledge-sharing, and unites communities worldwide. Our task was to develop a website that would reflect the organization’s features and principles as well as describe its initiatives and tell about the impact stories achieved by Touching Lives community members. ',
            body: [
                {
                    text: 'To better communicate the mission of Touching Lives, our team designed a brand identity for the organization, including the logotype. The logo is constructed of blocks on which the name stands. This corresponds to the idea of support and unity. Apart from that, the blocks are shaped in the form of TL, corresponding to the name of the organization. ',
                    imageSrc: touchingFirst,
                    isImageFirst: true,
                },
                {
                    text: 'As for the colors of the branding, we designed the color pallet that consists of three primary colors: blue, yellow, and orange. Such a color pallet unites the parent organization in India (TL Mumbai, which associates with orange shades) and its partner in Switzerland (the blue shades). The secondary colors are mostly used on the website to provide a better user experience and required contrast ratio.',
                    imageSrc: touchingSecond,
                    isImageFirst: false,

                },
                
                {
                    text: "The website serves as the primary information platform for the Touching Lives Switzerland organization. It offers users information about TL's mission and describes the initiatives it lays the foundation for. Visitors to the website can explore both past and ongoing events within the Touching Lives Switzerland organization and also have the opportunity to participate in its projects and initiatives.",
                    imageSrc: touchingThird,
                    isImageFirst: true,

                },


                {
                    text: 'The website provides all essential information on services and creates a safe space to ask questions by following the principles of the design system.ebsite provides all essential information on services and creates a safe space to ask questions by following the principles of the design system.',
                    imageSrc: sarkaFourth,
                    isImageFirst: false,

                },

                {
                    text: 'For social media, it was important to create consistent templates for such types of posts as reviews, tips, news, etc. Some were executed as carousels, but most use photos and type.',
                    imageSrc: sarkaFifth,
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
            imageWidth: '60vh',
            // imageHeight: '30vh',
            imageAlt: 'some title',
            imageLeft: '150px',
            imageTop: '40px',
            imageSrc: touchingCover,
            containerWidth: '300px'
        }
    },

    "Along": {
        pageSettings: {
            headerAlt: 'some alt text',
            designType: 'Branding',
            name: 'Along',
            headerImgSrc: alongCover,
            explaining: 'Šárka Smrčková is a personal and career coach who helps women to change their lives. The main goal of the project was to create a visual identity that would provide a friendly environment for Sarka’s clients. Another aspect was to make the easily reused templates. This project covers such topics as the creation of a consistent brand identity for a person, the creation of a clear and user-friendly landing website, and attaching all necessary stationery and applications.',
            body: [
                {
                    text: 'The logo is minimalistic and represents other aspects of the brand. Dark and Light variants could be used on different backgrounds.',
                    imageSrc: sarkaFirst,
                    isImageFirst: true,
                },
                {
                    text: 'The The typographical system is created from one decorative font - Cinsel, which is used for the title and H1, and two additional - Encode Sans and Mplus 1p. All fonts are legible and provide a sense of professionalism and style. of fonts was based on two major aspects. First of all, they needed to combine the feeling of poetry and the topic of poetry and be modern and strict enough. Secondly, it had to work with Cyrillic.',
                    imageSrc: sarkaSecond,
                    isImageFirst: false,

                },
                
                {
                    text: 'The primary color is pink, which also has different shades to apply with a high variety of possible contexts. Another crucial part is a greyscale palette which predicts all usages of text and background.',
                    imageSrc: sarkaThird,
                    isImageFirst: true,

                },


                {
                    text: 'The website provides all essential information on services and creates a safe space to ask questions by following the principles of the design system.ebsite provides all essential information on services and creates a safe space to ask questions by following the principles of the design system.',
                    imageSrc: sarkaFourth,
                    isImageFirst: false,

                },

                {
                    text: 'For social media, it was important to create consistent templates for such types of posts as reviews, tips, news, etc. Some were executed as carousels, but most use photos and type.',
                    imageSrc: sarkaFifth,
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
            imageWidth: '60vh',
            // imageHeight: '30vh',
            imageAlt: 'some title',
            imageLeft: '150px',
            imageTop: '380px',
            imageSrc: alongCover,
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
            imageLeft: '50px',
            imageTop: '100px',
            imageSrc: beatsCoverImage,
            containerWidth: '100px'
        }
    },



    

    



}