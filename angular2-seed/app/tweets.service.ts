
export class TweetsService {
    getTweets(): Object[] {
        return [
            {
                author: 'Martin',
                authorImgUrl: 'http://lorempixel.com/100/100/people/?',
                tweeterHandle: 'Tweeter Handle',
                text: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
                isLiked: true,
                totalLikes: 10
            }
            , {
                author: 'Krasi',
                authorImgUrl: 'http://lorempixel.com/100/100/people/?',
                tweeterHandle: 'Tweeter Handle',
                text: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
                isLiked: true,
                totalLikes: 10
            },
            {
                author: 'Niki',
                authorImgUrl: 'http://lorempixel.com/100/100/people/?',
                tweeterHandle: 'Tweeter Handle',
                text: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
                isLiked: true,
                totalLikes: 10
            }];;
    }
}