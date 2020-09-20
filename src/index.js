import './styles/main.css';

import ItemModel from './models/ItemModel';
import RecipeModel from './models/RecipeModel';
import ItemView from './views/ItemView';
import RecipeView from './views/RecipeView';
import ItemController from './controllers/ItemController';
import RecipeController from './controllers/RecipeController';

const items = [
    {
     name:'Бузина',
     id: Date.now() + 1,
    },
    {
     name:'Дуб',
     id: Date.now() + 2,
    },
    {
     name:'Кипарис',
     id: Date.now() + 3,
    },
    {
     name:'Ясень',
     id: Date.now() + 4,
    },
    {
     name:'Остролист',
     id: Date.now() + 5,
    },
    {
     name:'Перо феникс',
     id: Date.now() + 6,
    },
    {
     name:'Сердечная жила дракона',
     id: Date.now() + 7,
    },
    {
     name:'Волос единорога',
     id: Date.now() + 8,
    },
    {
     name:'Волос фестрала',
     id: Date.now() + 9,
    },
    {
     name:'Ус тролля',
     id: Date.now() + 10,
    },
];

const recipes = [
    {
    name:'Potter Wand',
    id: Data.now() + 1,
    necessaryItems: ['Остролит','Перо феникса'],
    },
    {
    name:'Reddl Wand',
    id: Data.now() + 2,
    necessaryItems: ['Ясень','Перо феникса'],
    },
    {
    name:'Voldemort Wand',
    id: Data.now() + 3,
    necessaryItems: ['Бузина','Волос фестрала'],
    },
    {
    name:'Umbridge Wand',
    id: Data.now() + 4,
    necessaryItems: ['Дуб','Ус тролля'],
    },
    {
    name:'Lupin Wand',
    id: Data.now() + 5,
    necessaryItems: ['Кипарис','Волос единорога'],
    },
];

const 
