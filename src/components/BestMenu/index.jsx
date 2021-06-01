import React from 'react';
import {BestMenuContainer} from "./styles";
import Menu from "../Menu";

const menu = [{
    header:'To Start',
    content:[
        {
            food: 'STICKY GLAZED PORK BELLY',
            price: 'NGN 6,500',
            content:'Ginger * Grilled * Toasted',
            rating:'4'
        },
        {
            food: 'PRAWN CAKES',
            price: 'NGN 5,500',
            content:'Pan fried * sauce * chili mayo',
            rating:'4'
        },
        {
            food: 'CHICKEN CROQUETTE',
            price: 'NGN 4,100',
            content:'Deep fried * tatar sauce * chili jam',
            rating:'3'
        },
        {
            food: 'ASIAN STYLE CRISPY CHICKEN WINGS',
            price: 'NGN 3,800',
            content:'Spicy * sweet sauce * chili jam',
            rating:'3'
        },
        {
            food: 'PORK POT STICKERS',
            price: 'NGN 3,800',
            content:'pan fried * hoisin sauce * steamed',
            rating:'4'
        },
        {
            food: 'LAMB POPS',
            price: 'NGN 6,500',
            content:'Spicy * cucumber salsa and yogurt dip * Grilled',
            rating:'3'
        }
    ]
},
    {
        header:'Brunch',
        content:[
            {
                food: 'BREAKFAST FLATBREAD',
                price: 'NGN 6,800',
                content:'spice * mozzarella cheese * Chili jam',
                rating:'4'
            },
            {
                food: 'HSE BREAKFAST MIX',
                price: 'NGN 5,850',
                content:'Toasted * sauce * cream cheese and butter',
                rating:'4'
            },
            {
                food: 'CINNAMON FRENCH TOAST',
                price: 'NGN 5,500',
                content:'pan seared * maple syrup * jam dip',
                rating:'3'
            },
            {
                food: 'LOADED OATMEAL BOWL',
                price: 'NGN 5,300',
                content:'Cooked * berry compote *  vegan chocolate',
                rating:'3'
            },
            {
                food: 'BUTTERMILK PANCAKES',
                price: 'NGN 3,800',
                content:'pan seared * mixed berry sauce * maple syrup',
                rating:'3'
            }
        ]
    },
    {
        header:'Skinny eats',
        content:[
            {
                food: 'PUMPKIN CURRY',
                price: 'NGN 6,250',
                content:'spice * mozzarella cheese * Chili jam',
                rating:'4'
            },
            {
                food: 'GLUTEN FREE PENNE PASTA',
                price: 'NGN 6,200',
                content: 'Toasted * sauce * cream cheese and butter',
                rating:'4'
            },
            {
                food: 'LOADED OATMEAL BOWL',
                price: 'NGN 5,300',
                content:'pan seared * maple syrup * jam dip',
                rating:'3'
            },
            {
                food: 'SPICED PRAWN SALAD',
                price: 'NGN 5,300',
                content:'Cooked * berry compote *  vegan chocolate',
                rating:'3'
            },
            {
                food: 'AVO BACON COBB SALAD',
                price: 'NGN 4,950',
                content:'pan seared * mixed berry sauce * maple syrup',
                rating:'3'
            },
            {
                food: 'CHINESE ICEBERG SALAD',
                price: 'NGN 4,950',
                content:'pan seared * mixed berry sauce * maple syrup',
                rating:'3'
            },
            {
                food: 'QUINOA BOWL',
                price: 'NGN 4,950',
                content:'pan seared * mixed berry sauce * maple syrup',
                rating:'3'
            }
        ]
    },
    {
        header:'mains',
        content:[
            {
                food: 'T. BONE STEAK',
                price: 'NGN 16,000',
                content:'spice * mozzarella cheese * Chili jam',
                rating:'4'
            },
            {
                food: 'SEAFOOD RICE POT (IDEAL FOR 2)',
                price: 'NGN 10,500',
                content:'Toasted * sauce * cream cheese and butter',
                rating:'4'
            },
            {
                food: 'BUTTER BRAISED LEG OF LAMB',
                price: 'NGN 9,500',
                content:'pan seared * maple syrup * jam dip',
                rating:'4'
            },
            {
                food: 'DUCK LASAGNA',
                price: 'NGN 8,000',
                content:'Cooked * berry compote *  vegan chocolate',
                rating:'3'
            },
            {
                food: 'GRILLED PORK CHOPS N’ MAC',
                price: 'NGN 8,000',
                content:'pan seared * mixed berry sauce * maple syrup',
                rating:'3'
            },
            {
                food: 'DUCK LASAGNA',
                price: 'NGN 8,000',
                content:'Cooked * berry compote *  vegan chocolate',
                rating:'3'
            },
            {
                food: 'GRILLED PORK CHOPS N’ MAC',
                price: 'NGN 8,000',
                content:'pan seared * mixed berry sauce * maple syrup',
                rating:'3'
            },
            {
                food: 'TUSCAN SALMON',
                price: 'NGN 7,900',
                content:'pan seared * mixed berry sauce * maple syrup',
                rating:'3'
            },
            {
                food: 'SEAFOOD LINGUINE',
                price: 'NGN 7,000',
                content:'pan seared * mixed berry sauce * maple syrup',
                rating:'4'
            },
            {
                food: 'BRAISED SHORT RIBS',
                price: 'NGN 7,000',
                content:'pan seared * mixed berry sauce * maple syrup',
                rating:'3'
            },
            {
                food: 'WHOLE FRIED BASIL FISH',
                price: 'NGN 7,000',
                content:'pan seared * mixed berry sauce * maple syrup',
                rating:'3'
            },
            {
                food: 'MEDITERRANEAN MIXED GRILL',
                price: 'NGN 7,000',
                content:'pan seared * mixed berry sauce * maple syrup',
                rating:'3'
            },
            {
                food: 'MASALA BARRACUDA CURRY',
                price: 'NGN 7,300',
                content:'pan seared * mixed berry sauce * maple syrup',
                rating:'3'
            },
            {
                food: 'OXTAIL AND BEANS STEW',
                price: 'NGN 7,000',
                content:'pan seared * mixed berry sauce * maple syrup',
                rating:'3'
            },
            {
                food: 'TRUFFLE CHICKEN POT PIE',
                price: 'NGN 6,650',
                content:'pan seared * mixed berry sauce * maple syrup',
                rating:'3'
            },
            {
                food: 'HALF-BAKED CHICKEN',
                price: 'NGN 6,500',
                content:'pan seared * mixed berry sauce * maple syrup',
                rating:'3'
            },
            {
                food: 'PENNE PASTA',
                price: 'NGN 5,700',
                content:'pan seared * mixed berry sauce * maple syrup',
                rating:'3'
            },
            {
                food: 'BEEF PHO',
                price: 'NGN 5,500',
                content:'pan seared * mixed berry sauce * maple syrup',
                rating:'3'
            },
            {
                food: 'WILD MUSHROOMS AND TRUFFLE PASTA',
                price: 'NGN 9,000',
                content:'pan seared * mixed berry sauce * maple syrup',
                rating:'3'
            }
        ]
    }
]

const BestMenu = ({onOpen}) => {
    return (
        <BestMenuContainer>
            <p className="header"><span>~</span>Seasonal Special<span>~</span></p>
            <p className="sub-header">Fresh products paired with excellent...</p>
            <Menu menu={menu} onOpen={onOpen}/>
        </BestMenuContainer>
    );
};

export default BestMenu;
