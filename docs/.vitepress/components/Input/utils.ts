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

export function debounce(fn: any, delay: number) {
  let timer: ReturnType<typeof setTimeout> | null = null
  return function () {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(this, arguments)
    }, delay);
  };
}
