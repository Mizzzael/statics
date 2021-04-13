/* eslint-disable */
export const Products = {
    data: [{
            "title": "Wonder Woman",
            "price": "1099.00",
            "normal_price": 1978.2,
            "installments": 12,
            "installments_price": 91.58333333333333,
            "images": ['https://mizzzael.github.io/statics/assets/images/recomendacao-example/0-prime1studos.jpeg']
        }, {
            "title": "Godzilla Bust",
            "price": "1599.00",
            "normal_price": 2878.2000000000003,
            "installments": 12,
            "installments_price": 133.25,
            "images": ['https://mizzzael.github.io/statics/assets/images/recomendacao-example/1-prime1studos.jpeg']
        },
        {
            "title": "Alien",
            "price": "699.00",
            "normal_price": 1258.2,
            "installments": 12,
            "installments_price": 58.25,
            "images": ['https://mizzzael.github.io/statics/assets/images/recomendacao-example/2-prime1studos.jpeg']
        },
        {
            "title": "Anzu",
            "price": "599.00",
            "normal_price": 1078.2,
            "installments": 12,
            "installments_price": 49.916666666666664,
            "images": ['https://mizzzael.github.io/statics/assets/images/recomendacao-example/3-prime1studos.jpeg']
        },
        {
            "title": "Reika",
            "price": "599.00",
            "normal_price": 1078.2,
            "installments": 12,
            "installments_price": 49.916666666666664,
            "images": ['https://mizzzael.github.io/statics/assets/images/recomendacao-example/4-prime1studos.jpeg']
        },
        {
            "title": "Alita: Berserker",
            "price": "999.00",
            "normal_price": 1798.2,
            "installments": 12,
            "installments_price": 83.25,
            "images": ['https://mizzzael.github.io/statics/assets/images/recomendacao-example/5-prime1studos.jpeg']
        },
        {
            "title": "Wonder Woman versus Hydra",
            "price": "1469.00",
            "normal_price": 2644.2000000000003,
            "installments": 12,
            "installments_price": 122.41666666666667,
            "images": ['https://mizzzael.github.io/statics/assets/images/recomendacao-example/6-prime1studos.jpeg']
        },
        {
            "title": "The Joker",
            "price": "1499.00",
            "normal_price": 2698.2000000000003,
            "installments": 12,
            "installments_price": 124.91666666666667,
            "images": ['https://mizzzael.github.io/statics/assets/images/recomendacao-example/7-prime1studos.jpeg']
        }
    ],
};

export let ProductsFilter = {"data": Products.data.map(v => {
        let productJson = {
            "link": '',
            "title": '',
            "price": '',
            "normal_price": '',
            "installments": '',
            "installments_price": '',
            "images": '',
            ...v
        };

        return productJson;
    })
};