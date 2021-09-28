import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'

const menuOpen = atom({
  key: 'menuOpen',
  default: false,
})

export function useMenuOpenState() {
  return useRecoilState(menuOpen)
}

export function useSetMenuOpen() {
  return useSetRecoilState(menuOpen)
}

export function useMenuOpenValue() {
  return useRecoilValue(menuOpen)
}
