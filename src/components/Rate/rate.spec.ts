import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import Rate from './Rate.vue'

describe('Rate Test', () => {
  it('should render prop', () => {
    const demoRate = mount(Rate, {
      props: {
        fontSize: 30,
      },
    })
    expect(demoRate.find('span').attributes().style).toBe('font-size: 30px;')
  })
})
