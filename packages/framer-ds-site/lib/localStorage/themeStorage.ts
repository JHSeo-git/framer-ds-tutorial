const key = '__FRAMER_DS_THEME__'

const themeStorage = {
  get() {
    const data = localStorage.getItem(key)
    try {
      if (!data) return null
      const parsed = JSON.parse(data)
      return parsed
    } catch (e) {
      localStorage.removeItem(key)
    }
  },
  set(value: string) {
    localStorage.setItem(key, JSON.stringify(value))
  },
  clear() {
    localStorage.removeItem(key)
  },
}

export default themeStorage
