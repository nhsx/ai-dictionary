import { atom } from "recoil";
import terms from "data/terms.json"

export const termsState = atom({
   key: 'termsState',
   default: terms 
})

export const currentTermIndexState = atom({
   key: 'currentTermIndexState',
   default: null
})