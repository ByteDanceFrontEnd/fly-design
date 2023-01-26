import { defineComponent } from 'vue'

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
  setup() {
    return () => {
      return <div>card</div>
    }
  },
})
