# A vue.js component to render Adaptive Cards easily

Using the component allows you to easily render https://adaptivecards.io/ in your vue.js application.

For more information about Adaptive Cards read this: https://docs.microsoft.com/en-us/adaptive-cards

# Versioning changed!
You might have noticed the version made a big jump, thats because we want to be inline with supported
AdaptiveCards version which currently is 2.10.0

All AdaptiveCard version from 1.0 to 1.5 are supported

# Installation

```
npm i @madewithcards/adaptivecards-vue --save //vue2
npm i @madewithcards/adaptivecards-vue3 --save //vue3

```

After adding the library:
```
//main.js
import Vue from 'vue'
import AdaptiveCards from 'adaptivecards-vue'
import 'adaptivecards-vue/dist/adaptivecards-vue.css'
Vue.use(AdaptiveCards)
```

Or import the component whereever you want:
```
//App.vue
import { AdaptiveCards } from 'adaptivecards-vue'
export default {
  components: {
    AdaptiveCards
  }
}
```

# Basic Usage
```
<template>
    <adaptive-card 
    :card="card" 
    :data="data"
    :useTemplating="true"
    v-on:onActionClicked="onItemClick"
  />
</template>
```

# Properties
__:card__

Either a card template with placeholders or a full card as object or json

__:data__

When using a template, pass in data for the template as object or json
Read: https://docs.microsoft.com/en-us/adaptive-cards/templating/ for a guide about templating
Also: https://medium.com/@tim.cadenbach/why-templating-for-adaptive-cards-is-a-game-changer-1606de3226ed
might help. 

__:useTemplating__

When passing in a template set to true

__:HostConfig__

Use to overwrite the default host config -> 
https://docs.microsoft.com/en-us/adaptive-cards/rendering-cards/host-config

__onActionClicked__

Will be send for any card with actions whenever an action is used



