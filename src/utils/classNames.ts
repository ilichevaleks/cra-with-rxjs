export type ClassValue = string | number | ClassDictionary | ClassArray | undefined | null | false

export interface ClassDictionary {
  [id: string]: boolean | undefined | null
}

export interface ClassArray extends Array<ClassValue> {}

type ClassNames = (...classes: ClassValue[]) => string

const hasOwn = {}.hasOwnProperty

const classNames: ClassNames = (...args) => {
  const classes: Array<string | number> = []

  args.forEach(arg => {
    if (typeof arg === 'string' || typeof arg === 'number') {
      classes.push(arg)
    } else if (Array.isArray(arg)) {
      const inner = classNames.apply(null, arg)
      if (inner) {
        classes.push(inner)
      }
    } else if (typeof arg === 'object') {
      for (const key in arg) {
        if (Array.isArray(arg)) {
          const inner = classNames.apply(null, arg)
          if (inner) {
            classes.push(inner)
          }
        } else if (hasOwn.call(arg, key) && arg[key]) {
          classes.push(key)
        }
      }
    }
  })

  return classes.join(' ')
}

export default classNames
