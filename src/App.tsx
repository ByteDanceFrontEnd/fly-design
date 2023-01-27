import { defineComponent } from 'vue'
import styles from './App.module.scss'

// eslint-disable-nextline
const img = require('./assets/logo.png')

export default defineComponent({
  name: 'App',
  setup() {
    return () => {
      return (
        <div class={styles.app}>
          <card imgSrc={img} summary="Vue组件库" />
        </div>
      )
    }
  },
})
