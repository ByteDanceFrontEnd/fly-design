export function inputBlur() {
  const spanElement = document.getElementById('password-span')
  if (spanElement) {
    spanElement.className = 'password-span-blur'
  }
}

export function inputFocus() {
  const spanElement = document.getElementById('password-span')
  if (spanElement) {
    spanElement.className = 'password-span-focus'
  }
}
