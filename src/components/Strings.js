import user1 from '../assets/images/krishna.jpeg'
import user2 from '../assets/images/zoya.jpeg'
import user3 from '../assets/images/sanju.jpeg'

export const strings = {
    section1head: 'Going online was never this easy',
    section1pointOne: 'Marketing',
    section1pointTwo: 'Payment Integration',
    section1pointThree: 'Delivery',
    section1pointFour: 'Online Catalogue',
    section1pointFive: 'Website',
    section1subtext: 'Share content and watch your business flourish. We’ll take care of everything else.',
    section2head: `New to town? Explore vetted local businesses and products.`,
    section2body: `There maybe someone selling something amazing in your society itself 😉 `,
    section3head: `Ever wondered if you could checkout from your social media feed? Now you can.`,
}

export const reviews = [
    {
        Name: 'ShivaKumar',
        location: 'Mysore, Karnataka',
        review: `“Trying to build a website, hosting pictures and payment was a hassle, and I had a hard time hiring people to set it all up. Yashiv.io made my photography business a breeze.”`,
        stars: 4.8,
      //  img: user1
    },
    {
        Name: 'Anju',
        location: 'Bangalore, Karnataka',
        review: `“I love to cook and I never knew how powerful online business was before using Yashiv.io. My passion is my business now.”`,
        stars: 4.5,
       // img: user2
    },
    {
        Name: 'Snu',
        location: 'Bangalore, Karnataka',
        review: `“Yashiv.io helped me gain more local customers in a month than past 2 years. I never knew go online would be so easy”.`,
         stars: 4.7,
        // img: user3
    },
    
]

export const submitEndpoint = 'https://getwaitlist.com/api/v1/waitlists/submit';
export const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const referral_link = 'https://www.Yashiv.ioclub.in'

export const successMsg = 'Thank you for your interest in us. 😊';
export const serverError = 'oooh... Something went wrong on our end, please try again.';
export const validationError = `Hmmm... That doesn't seem right, try again.`;