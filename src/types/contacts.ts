export type TTag = {
  label: string
  color: string
  id: number
}

export type TContact = {
  fullName: string
  phone: string
  email: string
  tag: TTag | {}
  id?: number
}

export type TQuery = {
  fullName: string
  phone: string
  email: string
  tag: TTag | {}
}
