import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import Transfer from './Transfer.vue'

describe('Transfer Test', () => {
  it('should render prop', () => {
    const demoTransfer = mount(Transfer, {
      props: {
        buttonTexts: ['To left', 'To right'],
      },
    })
    expect(demoTransfer.find('button').text()).toBe('<To left')
  })
})
