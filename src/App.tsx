import { defineComponent } from 'vue'
import HelloWorld from './HelloWorld'
import styles from './App.module.scss'

// eslint-disable-nextline
const img = require('./assets/logo.png')

export default defineComponent({
  name: 'App',
  setup() {
    return () => {
      return (
        <div class={styles.app}>
          <img alt="Vue logo" src={img} />
          <HelloWorld msg="fly-design" />
          <card />
        </div>
      )
    }
  },
})
