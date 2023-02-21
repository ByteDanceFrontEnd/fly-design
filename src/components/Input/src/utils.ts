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
  let timer = null
  return function () {
    let context = this
    let args = arguments
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(function () {
      fn.apply(context, args)
    }, delay);
  };
}