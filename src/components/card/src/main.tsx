import { defineComponent } from 'vue'
import styles from './main.module.scss'

const PropsType = {
  width: {
    type: Number,
    default: 0,
  },
  imgSrc: {
    type: String,
    default: '',
  },
  imgHeight: {
    type: Number,
    default: 0,
  },
  summary: {
    type: String,
    default: '',
  },
} as const

export default defineComponent({
  name: 'Card',
  props: PropsType,
  setup(props) {
    return () => {
      return (
        <div
          class={styles.card}
          style={props.width ? { width: props.width + 'px' } : {}}
        >
          <div
            class={styles['card-img']}
            style={props.imgHeight ? { height: props.imgHeight + 'px' } : {}}
          >
            <img src={props.imgSrc} alt="img" />
          </div>
          <div v-if={props.summary} class={styles['card-summary']}>
            {props.summary}
          </div>
          <div v-else class={styles['card-summary']}>
            <slot></slot>
          </div>
          <slot name="footer"></slot>
        </div>
      )
    }
  },
})
