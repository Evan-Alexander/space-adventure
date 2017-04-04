import { Scenerio } from './scenerio.model';

export const SCENERIO: Scenerio[] = [
 new Scenerio(
   1,
   "Explore the Foothills",
   "While wandering through the trees, you see a creature, about the size of a dog.  What do you do?",
   "Try and communicate to it, hoping it could lead you to a food source.",
   "Try to kill and eat it.",
    2,
    3,
    ),
  new Scenerio(
    2,
    "Communicate with the Creature",
    "The creature turns out to be one of the wisest in the galaxy.  He wants to teach you.  What do you do?",
    "Say yes, and embark on this new journey of knowledge.  He IS a little hazey on what he says he knows.",
    "Say no, and ask again on where to find food.",
     4,
     5,
     ),
   new Scenerio(
     3,
     "Fight with the Creature",
     "The creature turns out to be a feirce fighter and captures you.  He takes you to his dark, damp cave.  What do you do?",
     "You search for something sharp to cut the rope binding your hands.",
     "You try pleading with it, saying you are the heir to a fortune and will give it money if he releases you.",
      6,
      7,
      ),
];
