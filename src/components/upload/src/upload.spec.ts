import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import Upload from './Upload.vue'

describe('Upload Test', () => {
  it('should render prop', () => {
    const demoUpload = mount(Upload, {
      slots: {
        tip: 'Hello World',
      },
    })
    expect(demoUpload.text()).toBe('Hello World')
  })
})
